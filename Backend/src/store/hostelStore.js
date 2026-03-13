const Hostel = require('../models/Hostel');

function toHostelPlain(doc) {
  if (!doc) return null;
  const o = doc.toObject ? doc.toObject() : doc;
  return {
    id: o._id?.toString(),
    HostelName: o.HostelName,
    Type: o.Type,
    SingleShare: o.SingleShare,
    SingleShareRent: o.SingleShareRent,
    TwoShare: o.TwoShare,
    TwoShareRent: o.TwoShareRent,
    ThreeShare: o.ThreeShare,
    ThreeShareRent: o.ThreeShareRent,
    FourShare: o.FourShare,
    FourShareRent: o.FourShareRent,
    FiveShare: o.FiveShare,
    FiveShareRent: o.FiveShareRent,
    createdAt: o.createdAt,
  };
}

async function readHostels() {
  const list = await Hostel.find().sort({ createdAt: -1 });
  return list.map(toHostelPlain);
}

async function addHostel(hostel) {
  const doc = await Hostel.create({
    HostelName: hostel.HostelName,
    Type: hostel.Type,
    SingleShare: hostel.SingleShare,
    SingleShareRent: hostel.SingleShareRent,
    TwoShare: hostel.TwoShare,
    TwoShareRent: hostel.TwoShareRent,
    ThreeShare: hostel.ThreeShare,
    ThreeShareRent: hostel.ThreeShareRent,
    FourShare: hostel.FourShare,
    FourShareRent: hostel.FourShareRent,
    FiveShare: hostel.FiveShare,
    FiveShareRent: hostel.FiveShareRent,
  });
  return toHostelPlain(doc);
}

module.exports = { readHostels, addHostel };
