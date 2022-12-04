const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectCode: { type: String, required: true, unique: true },
    collectName: { type: String, required: true },
    collectDescription: { type: String },
  },
  {
    timestamps: true,
  }
);
CollectionSchema.pre("save", function (next) {
  var model = this;
  counter.findByIdAndUpdate(
    { _id: "CLT" },
    { $inc: { seq: 1 } },
    function (error, counter) {
      if (error) return next(error);
      var str = "" + counter.seq;
      var pad = "0000";
      var ans = pad.substring(0, pad.length - str.length) + str;
      model.cateCode = `CLT${new Date().getMonth() + 1}${new Date().getFullYear()}${ans}`;
      next();
    }
  );
});
module.exports = mongoose.model("collections", CollectionSchema);
