const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema(
  {
    HostelName: { type: String, required: true, trim: true },
    Type: { type: String, default: null, trim: true },
    SingleShare: { type: Number, default: null },
    SingleShareRent: { type: Number, default: null },
    TwoShare: { type: Number, default: null },
    TwoShareRent: { type: Number, default: null },
    ThreeShare: { type: Number, default: null },
    ThreeShareRent: { type: Number, default: null },
    FourShare: { type: Number, default: null },
    FourShareRent: { type: Number, default: null },
    FiveShare: { type: Number, default: null },
    FiveShareRent: { type: Number, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Hostel', hostelSchema);
