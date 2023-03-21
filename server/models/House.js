
import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HousesSchema = new Schema(
    {
        price: { type: Number, required: true, max: 100000000 },
        beds: { type: Number, required: true, min: 1, max: 25 },
        baths: { type: Number, required: true, min: 1, max: 25 },
        sqFt: { type: Number, required: true, min: 500, max: 100000 },
        address: { type: String, required: true, max: 100 }
    },
    { timestamps: true }
)