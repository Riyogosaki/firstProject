import React, {  useState } from 'react';
import { useProductStore } from '../store/product';
const CreatePage= () =>{
const[newProduct ,setNewProduct] = useState ({
name:"",
price:"",
image:"",
  
});
const {createProduct} = useProductStore();

const handleAddProduct = async() => {
const{success,message} = await createProduct(newProduct);
console.log("Sucees",success);
console.log("Message",message);

}
return <div className='peter'>
  <input 
  placeholder='Product Name'
  name='name'
  value={newProduct.name}
  onChange={(e) => setNewProduct({ ...newProduct,name: e.target.value})}
  />
   <input 
  placeholder='Price'
  name='price'
  type='number'
  value={newProduct.price}
  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
  /> <input 
  placeholder='Image Url'
  name='image'
  value={newProduct.image}
  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
  />
   <button type='submit' onClick={handleAddProduct}>Add Now</button>
   
   
   </div>


}




export default CreatePage;