const bcrypt = require('bcryptjs');
const { findUserByEmail, addUser } = require('../store');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function register(req, res) {
  const { firstname, lastname, email, password, phone } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'First name, last name, email and password are required',
    });
  }

  const trimmedFirst = String(firstname).trim();
  const trimmedLast = String(lastname).trim();
  const trimmedEmail = String(email).trim().toLowerCase();

  if (!trimmedFirst || !trimmedLast) {
    return res.status(400).json({
      success: false,
      message: 'First name and last name cannot be empty',
    });
  }

  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 6 characters',
    });
  }

  const existing = await findUserByEmail(trimmedEmail);
  if (existing) {
    return res.status(409).json({
      success: false,
      message: 'An account with this email already exists',
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await addUser({
    firstname: trimmedFirst,
    lastname: trimmedLast,
    email: trimmedEmail,
    password: hashedPassword,
    phone: phone != null && String(phone).trim() !== '' ? String(phone).trim() : null,
  });

  res.status(201).json({
    success: true,
    message: 'Registration successful',
    user: {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
    },
  });
}

const SECRET_KEY = process.env.JWT_SECRET;
function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: '10h' }  // ✅ 10 hours expiry
  );
}
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'No token. Please login.' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      // Token expired or tampered
      return res.status(403).json({ error: 'Token expired or invalid. Please login again.' });
    }
    req.user = decoded; // { id, email, iat, exp }
    next();
  });
}
async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
  }

  const trimmedEmail = String(email).trim();
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format',
    });
  }

  const user = await findUserByEmail(trimmedEmail);
  console.log(user);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    });
  }
  const token = generateToken(user);
  const expiresAt = new Date(Date.now() + 10 * 60 * 60 * 1000);
  res.status(200).json({
    success: true,
    message: 'Login successful',
    token,               // Send token to client
    expiresAt,           // Optional: tell client when it expires
    user: {
      id: user.id,
      email: user.email
    }
  });
}

module.exports = { register, login };
