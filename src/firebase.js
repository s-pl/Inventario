const admin = require('firebase-admin');
const serviceAccount = require('./credentials/db-inventory-70227-firebase-adminsdk-5eeuh-01440ace94.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://db-inventory-70227-default-rtdb.europe-west1.firebasedatabase.app/"
});

const db = admin.database();


async function getAllInventory() {
    try {
      const snapshot = await db.ref('/inventario').once('value');
      return snapshot.val(); 
    } catch (error) {
      console.error('Error leyendo data:', error);
      throw error; 
    }
  }

async function getProductById(productId) {
    try {
      const snapshot = await db.ref('/inventario/' + productId).once('value');
      
      if (snapshot.exists()) {
        const productData = snapshot.val();
        return productData;
      } else {
        console.log('No product found with ID:', productId);
        return null;
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error; 
    }
  }
  

function addProduct(product) {
    try {
        db.ref('/inventario').push(product).then(() => {
            console.log('Guardado exitosamente.');
          }).catch((error) => {
            console.error('Error escribiendo data:', error);
          });
    } catch(err){
return err
    }
  
}

function deleteProduct(productId) {
    try {
        db.ref('/inventario/' + productId).remove().then(() => {
            console.log(productId + " Eliminado con éxito");
          }).catch((error) => {
            console.error('Error eliminando:', error);
          });
    } catch (error) {
        return error
    }
  }

  async function updateProductById(productId, updatedData) {
    try {
        await db.ref('/inventario/' + productId).update(updatedData);
        console.log('Producto actualizado exitosamente:', productId);
    } catch (error) {
        console.error('Error actualizando producto:', error);
        throw error;
    }
}




module.exports = {
    addProduct,
    deleteProduct,
    getAllInventory,
    getProductById,
    updateProductById
}

