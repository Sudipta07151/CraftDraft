const { CO } = require('./data.json');

export default function handler(req, res) {
    const product = CO.filter(pro => {
        return pro.name === req.query.product
    })
    if (req.method === 'GET')
        res.status(200).json(product)
    else {
        res.setHeader('Allow', ['GET']);
        res.status(405)
            .json({
                message: `${req.method} not allowed`
            })
    }
}
