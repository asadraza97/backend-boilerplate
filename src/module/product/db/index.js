import path from "path";
import Model from "../models/index.js";
import { populate } from "dotenv";

const getAll = async () => await Model.find();

// populate ko hum log relation ky lye use krty hein  
const getAllPopulated = async (key) => await Model.find().populate({
    path: "category",
    // select: "status name"
    populate: {
        path: "subCategory",
    // select: "status name"
}
});

// aggregate hum sy leta h array or us array ky andar hoti h query 
// is ky through bhi hum populate kr skty hein 
const getAggregate = async (query)=> await Model.aggregate(query)
    
const addData = (data) => 
    new Model(data).save().then((user) => user.toObject());


const deleteById = async (id) => await Model.findByIdAndDelete(id)
const updateById = async (id,data) => await Model.findByIdAndUpdate(id, data)

export {
    getAllPopulated,
    getAggregate,
    getAll,
    addData,
    deleteById,
    updateById
}