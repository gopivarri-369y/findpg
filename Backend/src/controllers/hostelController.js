const { addHostel: addHostelToStore } = require('../store/hostelStore');

// Normalize request body (accept common typos from frontend)
function getBodyField(body, ...keys) {
  for (const k of keys) {
    if (body[k] !== undefined && body[k] !== null) return body[k];
  }
  return undefined;
}

async function addHostel(req, res) {
  const b = req.body;

  const hostelName = getBodyField(b, 'HostelName', 'hostelName') ?? b.HostelName;
  const type = getBodyField(b, 'Type', 'type') ?? b.Type;

  const singleShare = getBodyField(b, 'SingleShare', 'SIngleShare') ?? b.SingleShare ?? b.SIngleShare;
  const singleShareRent = getBodyField(b, 'SingleShareRent', 'SingelShareRent') ?? b.SingleShareRent ?? b.SingelShareRent;

  const twoShare = getBodyField(b, 'TwoShare', 'twoShare') ?? b.TwoShare;
  const twoShareRent = getBodyField(b, 'TwoShareRent', 'twoShareRent') ?? b.TwoShareRent;

  const threeShare = getBodyField(b, 'ThreeShare', 'ThreeeShare') ?? b.ThreeShare ?? b.ThreeeShare;
  const threeShareRent = getBodyField(b, 'ThreeShareRent', 'threeShareRent') ?? b.ThreeShareRent;

  const fourShare = getBodyField(b, 'FourShare', 'FOurShare') ?? b.FourShare ?? b.FOurShare;
  const fourShareRent = getBodyField(b, 'FourShareRent', 'fourShareRent') ?? b.FourShareRent;

  const fiveShare = getBodyField(b, 'FiveShare', 'fiveShare') ?? b.FiveShare;
  const fiveShareRent = getBodyField(b, 'FiveShareRent', 'FIveShareRent') ?? b.FiveShareRent ?? b.FIveShareRent;

  if (!hostelName || String(hostelName).trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'HostelName is required',
    });
  }

  const hostel = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    HostelName: String(hostelName).trim(),
    Type: type != null ? String(type).trim() : null,
    SingleShare: singleShare != null ? Number(singleShare) : null,
    SingleShareRent: singleShareRent != null ? Number(singleShareRent) : null,
    TwoShare: twoShare != null ? Number(twoShare) : null,
    TwoShareRent: twoShareRent != null ? Number(twoShareRent) : null,
    ThreeShare: threeShare != null ? Number(threeShare) : null,
    ThreeShareRent: threeShareRent != null ? Number(threeShareRent) : null,
    FourShare: fourShare != null ? Number(fourShare) : null,
    FourShareRent: fourShareRent != null ? Number(fourShareRent) : null,
    FiveShare: fiveShare != null ? Number(fiveShare) : null,
    FiveShareRent: fiveShareRent != null ? Number(fiveShareRent) : null,
    createdAt: new Date().toISOString(),
  };

  const saved = await addHostelToStore(hostel);

  res.status(201).json({
    success: true,
    message: 'Hostel added successfully',
    hostel: {
      id: saved.id,
      HostelName: saved.HostelName,
      Type: saved.Type,
      SingleShare: saved.SingleShare,
      SingleShareRent: saved.SingleShareRent,
      TwoShare: saved.TwoShare,
      TwoShareRent: saved.TwoShareRent,
      ThreeShare: saved.ThreeShare,
      ThreeShareRent: saved.ThreeShareRent,
      FourShare: saved.FourShare,
      FourShareRent: saved.FourShareRent,
      FiveShare: saved.FiveShare,
      FiveShareRent: saved.FiveShareRent,
    },
  });
}

module.exports = { addHostel };
