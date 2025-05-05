import ProductModel from "../models/productModels.js";

const getProducts = async (req, res) => {
  const products = await ProductModel.find();
  res.json(products);
};

const postProducts = async (req, res) => {
  const { title, price, img } = req.body;
  const products = { title, price, img };
  const newProduct = await ProductModel.create(products);
  res.json(newProduct);
};
const deletedProduct = async (req, res) => {
  const { id } = req.params;
  await ProductModel.findByIdAndDelete(id);
  res.json(`${id} -li mehsul silindi`);
};

export { getProducts, postProducts, deletedProduct };
