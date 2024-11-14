import { INTERNAL_SERVER_ERROR_MESSAGE } from "../constant/index.js";
import postData from "../services/post.js"


const postController = async (req, res) => {
   try {
      const data = await postData(req.body);
      res.status(200).send({status: 200,data})
   } catch (error) {
      console.log(error, "error");
      res.status(500).send({status: 500, message : INTERNAL_SERVER_ERROR_MESSAGE})
   }
}

export default postController;


