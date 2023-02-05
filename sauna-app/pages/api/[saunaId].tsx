import type { NextApiRequest, NextApiResponse } from 'next'
import fetchSingleSauna from '../../lib/load-single-sauna'

async function handler(req: NextApiRequest, res:NextApiResponse) {

    const { saunaId } = req.query
    
    
    if (req.method === 'POST') {
      
    } else {
        const data = await fetchSingleSauna(saunaId)
        res.status(200).json({sauna: data})
    }
}

export default handler