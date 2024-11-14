import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
        enum: ["active", "inactive"],
        default: "active"
    },
})

const Model = mongoose.model("Category", dataSchema);

export default Model