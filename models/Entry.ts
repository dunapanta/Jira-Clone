import { Entry } from "interfaces";
import mongoose, { Model, Schema } from "mongoose";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  crearedAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ["pending", "in-progress", "finished"],
      message: "{VALUE} no es un estado permitido}",
    },
    default: "pending",
  },
});

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
