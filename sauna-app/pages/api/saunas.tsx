import type { NextApiRequest, NextApiResponse } from 'next'
import  fetchData from '../../lib/load-saunas'

async function handler(req: NextApiRequest, res:NextApiResponse) {
    
    if (req.method === 'POST') {
        // here comes later the post method
    } else {
        const data = await fetchData()
        res.status(200).json({saunas: data})
    }
}

export default handler