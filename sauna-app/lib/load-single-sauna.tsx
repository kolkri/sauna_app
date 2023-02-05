import { MongoClient, ObjectId } from 'mongodb'
import { SingleSauna } from './typeDefinitions'

async function fetchSingleSauna(saunaId: any): Promise<SingleSauna>{
    const client = await MongoClient.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_DB_USERNAME}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@cluster0.gapzegj.mongodb.net/SaunApp?retryWrites=true&w=majority`)
    const db = client.db()
    const singleSauna = await db.collection('saunas').findOne({_id: new ObjectId(saunaId)}) as SingleSauna
    
    return singleSauna
}

export default fetchSingleSauna