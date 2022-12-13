const mongoose = require("mongoose");
const counter = require("./counterModel");

const MaterialSchema = new mongoose.Schema(
  {
    materialCode: { type: String, unique: true },
    materialName: { type: String, required: true },
    materialDescription: { type: String },
  },
  {
    timestamps: true,
  }
);
MaterialSchema.pre("save", function (next) {
  var model = this;
  counter.findByIdAndUpdate(
    { _id: "MAT" },
    { $inc: { seq: 1 } },
    function (error, counter) {
      if (error) return next(error);
      var str = "" + counter.seq;
      var pad = "0000";
      var ans = pad.substring(0, pad.length - str.length) + str;
      model.materialCode = `MAT${
        new Date().getMonth() + 1
      }${new Date().getFullYear()}${ans}`;
      next();
    }
  );
});
module.exports = mongoose.model("materials", MaterialSchema);
