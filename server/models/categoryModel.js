const mongoose = require("mongoose");
const counter = require("./counterModel");

const CategorySchema = new mongoose.Schema(
  {
    cateCode: { type: String, unique: true },
    cateName: { type: String, required: true },
    cateDescription: { type: String },
  },
  {
    timestamps: true,
  }
);
CategorySchema.pre("save", function (next) {
  var model = this;
  counter.findByIdAndUpdate(
    { _id: "CTG" },
    { $inc: { seq: 1 } },
    function (error, counter) {
      if (error) return next(error);
      var str = "" + counter.seq;
      var pad = "0000";
      var ans = pad.substring(0, pad.length - str.length) + str;
      model.cateCode = `CTG${
        new Date().getMonth() + 1
      }${new Date().getFullYear()}${ans}`;
      next();
    }
  );
});
module.exports = mongoose.model("categories", CategorySchema);
