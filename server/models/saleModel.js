const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    saleCode: { type: String, required: true, unique: true },
    saleName: { type: String, required: true },
    discount: { type: Number },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  {
    timestamps: true,
  }
);
SaleSchema.pre("save", function (next) {
  var model = this;
  counter.findByIdAndUpdate(
    { _id: "SAL" },
    { $inc: { seq: 1 } },
    function (error, counter) {
      if (error) return next(error);
      var str = "" + counter.seq;
      var pad = "0000";
      var ans = pad.substring(0, pad.length - str.length) + str;
      model.cateCode = `SAL${new Date().getMonth() + 1}${new Date().getFullYear()}${ans}`;
      next();
    }
  );
});
module.exports = mongoose.model("sales", SaleSchema);
