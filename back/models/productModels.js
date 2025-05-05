import mongoose from "mongoose";

const productModels = mongoose.Schema(
    {
        title:{type:String,require:true},
        price:{type:String,require:true},
        img:{type:String,require:true}
    },
   {timestamps:true}
);
 const ProductModel=mongoose.model('products',productModels);
 export default ProductModel;