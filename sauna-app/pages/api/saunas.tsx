import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

export async function fetchData() {
    const client = await MongoClient.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_DB_USERNAME}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@cluster0.gapzegj.mongodb.net/SaunApp?retryWrites=true&w=majority`)
    const db = client.db()
    const saunas = await db.collection('saunas').find().toArray()
    return saunas
}

async function handler(req: NextApiRequest, res:NextApiResponse) {
    
    if (req.method === 'POST') {

    } else {
        const data = await fetchData()
        res.status(200).json({saunas: data})
    }
}

export default handler