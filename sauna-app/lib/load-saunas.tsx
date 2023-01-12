import { MongoClient } from 'mongodb'
import { SingleSauna } from './typeDefinitions'

async function fetchData(): Promise<SingleSauna[]>{
    const client = await MongoClient.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_DB_USERNAME}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@cluster0.gapzegj.mongodb.net/SaunApp?retryWrites=true&w=majority`)
    const db = client.db()
    const saunas = await db.collection('saunas').find().toArray() as SingleSauna[]
    return saunas
}

export default fetchData