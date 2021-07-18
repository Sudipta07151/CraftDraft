import { API_URL } from "config";

export default async (req, res) => {
    if (req.method === 'POST') {
        const { identifier, password } = req.body;

        const strapiRes = await fetch(`${API_URL}/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })

        const data = await strapiRes.json();
        console.log(data)
        if (strapiRes.ok) {
            res.status(200).json({ user: data.user });
        }
        else {
            res.status(400).json({ message: 'BAD LOGIN' })
        }
    }
    else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}