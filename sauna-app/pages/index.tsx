import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { fetchData } from './api/saunas'
import { SaunaData, SaunaProps } from './typeDefinitions'
// import Map from '../components/map'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/map'), {
  ssr: false,
})



function SaunaPage(props: SaunaData) {
  return (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Saunas page!
      </h1>
      <Map {...props}/>
      <div className='cardsContainer'>
          {props.saunas.map(sauna =>(
            <div className='saunaCard' key={sauna._id}>
              <Link href={`/${sauna._id}`}>{sauna.name}</Link>
              <p>{sauna.address}</p>
            </div>
          ))}
      </div>
    </main>
  </div>
  )
}


//data fetching for pre-rendering
export async function getStaticProps(): Promise<SaunaProps> {

  const saunas: SaunaData = await fetch('http://localhost:3000/api/saunas')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data
    })

  return {
    props: {
      saunas: saunas.saunas.map(s => ({
        name: s.name,
        _id: s._id.toString(),
        address: s.address,
        saunaType: s.saunaType,
        website: s.website,
        description: s.description,
        swimming: s.swimming,
        price: s.price,
        service: s.service,
        latitude: s.latitude,
        longitude: s.longitude,
      }))
    },
    //revalidate value can be set lower after adding posibility to add saunas
    revalidate: 60
  } 
}

export default SaunaPage
