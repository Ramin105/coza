import  express from "express";
import { connectDB } from "./configs/config.js";
import Productrouter from "./routes/productRoutes.js";
import cors from "cors";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors("*"));

app.use("/", Productrouter);

connectDB();
app.listen(5000, () => {
  console.log("backend isledi");
});
