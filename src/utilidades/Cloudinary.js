import dotenv from "dotenv";
dotenv.config();
import { v2 } from "cloudinary";

v2.config({
  cloud_name: "bryanavalossistemas",
  api_key: "991365995645161",
  api_secret: "fzHaCd4CXSVIBo0Ns1z4W2T5kSg",
});

export { v2 as cloudinary };
