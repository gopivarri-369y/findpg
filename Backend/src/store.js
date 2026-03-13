const User = require('./models/User');

function toUserPlain(doc) {
  if (!doc) return null;
  const o = doc.toObject ? doc.toObject() : doc;
  return {
    id: o._id?.toString(),
    firstname: o.firstname,
    lastname: o.lastname,
    email: o.email,
    password: o.password,
    phone: o.phone,
    createdAt: o.createdAt,
  };
}

async function findUserByEmail(email) {
  const user = await User.findOne({ email: email.toLowerCase().trim() });
  return toUserPlain(user);
}

async function addUser(user) {
  const doc = await User.create({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    phone: user.phone ?? null,
  });
  return toUserPlain(doc);
}

module.exports = { findUserByEmail, addUser };
