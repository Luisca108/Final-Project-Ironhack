const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const travelSchema = new Schema(
  {
    origin: String,
    destination: String,
    passengersAdultCount: String,
    fromDate: Date ,
    toDate: Date,
    maxPrice: String,
    finalPrice: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Travel = mongoose.model("Travel", travelSchema);
module.exports = Travel;
