import { INTERNAL_SERVER_ERROR_MESSAGE } from "../constant/index.js";
import getData from "../services/get.js"


const getController = async (req, res)=>{
   try {
    const users = await getData();
    res.status(200).send({status: 200, data: users})
   } catch (error) {
    res.status(500).send({status: 500, message : INTERNAL_SERVER_ERROR_MESSAGE})
   }
}
export default getController



