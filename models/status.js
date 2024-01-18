import mongoose from "mongoose";
import { boolean } from "zod";

const statusSchema = new mongoose.Schema(
  {
    status_name: { type: String, required: true },
    status_typeid: { type: Number, required: true },
    isActive: { type: Boolean, default: true  },
  },
  {
    timestamps: true,
  }
);

const Status = mongoose.models.Status || mongoose.model("Status", statusSchema);
export default Status;
