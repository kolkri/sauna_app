import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import {MongoClient} from 'mongodb'
import { fetchData } from './api/saunas'


interface SingleSauna {
  name: string;
  id: string;
  address: string;
  saunaType: string[];
  website: string;
  description: string;
  swimming: string[];
  price: number;
  service: string[]
}

interface SaunaData {
  saunas: SingleSauna[];
}


function SaunaPage(props: SaunaData) {
  return (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Saunas page!
      </h1>
      <div className='cardsContainer'>
          {props.saunas.map(sauna =>(
            <div className='saunaCard' key={sauna.id}>
              <Link href={`/${sauna.id}`}>{sauna.name}</Link>
              <p>{sauna.address}</p>
            </div>
          ))}
      </div>
    </main>
  </div>
  )
}


//data fetching for pre-rendering
export async function getStaticProps() {
  const saunas = await fetchData()

  return {
    props: {
      saunas: saunas.map(s => ({
        name: s.name,
        id: s._id.toString(),
        address: s.address,
        saunaType: s.saunaType,
        website: s.website,
        description: s.description,
        swimming: s.swimming,
        price: s.price,
        service: s.service
      }))
    },
    //revalidate value can be set lower after adding posibility to add saunas
    revalidate: 60
  } 
}

export default SaunaPage
