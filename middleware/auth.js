// Authentication middleware
const API_KEY = 'mysecretkey'; // For demo purposes, hardcoded
module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or missing API key' });
  }
  next();
}; 