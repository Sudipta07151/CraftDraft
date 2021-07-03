const { CO } = require('./data.json');

export default function handler(req, res) {
  if (req.method === 'GET')
    res.status(200).json({ CO })
  else {
    res.setHeader('Allow', ['GET']);
    res.status(405)
      .json({
        message: `${req.method} not allowed`
      })
  }
}
