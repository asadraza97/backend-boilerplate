import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const Model = mongoose.model("User", dataSchema);

export default Model