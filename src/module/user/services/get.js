import { getAll } from "../db/index.js"

const getData = (req,res)=> {
    return getAll()
}
export default getData