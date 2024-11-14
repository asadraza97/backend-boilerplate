import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constant/index.js";
import uploadFile from "../services/upload.js";



const uploadController = async (req, res) => {
   try {
      const file=await uploadFile(req.file);
      res.status(200).send({ status: 200, url:file.url})
   } catch (error) {
      console.log(error, "error");
      res.status(500).send({status: 500, message : INTERNAL_SERVER_ERROR_MESSAGE})
   }
}

export default uploadController;


