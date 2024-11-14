import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: "Category",
    }
})

const Model = mongoose.model("Product", dataSchema);

export default Model