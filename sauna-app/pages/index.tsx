import styles from '../styles/Home.module.css'
import fetchData from '../lib/load-saunas'
import { SaunaData, SaunaProps } from '../lib/typeDefinitions'
import dynamic from 'next/dynamic'
import SaunaCard from '../components/saunacard'

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
      <SaunaCard {...props}/>
    </main>
  </div>
  )
}


//data fetching for pre-rendering
export async function getStaticProps(): Promise<SaunaProps> {
  
  const saunas = await fetchData()

  return {
    props: {
       saunas: saunas.map(s => ({
        ...s,
         _id: s._id.toString(),
       }))
    },
    //revalidate value can be set lower after adding posibility to add saunas
    revalidate: 60
  } 
}

export default SaunaPage
