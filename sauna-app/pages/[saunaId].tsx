import styles from '../styles/Home.module.css'
import {SingleSaunaProps, SingleSauna } from '../lib/typeDefinitions'
import fetchSingleSauna from '../lib/load-single-sauna'
import fetchData from '../lib/load-saunas'
import Link from 'next/link';


function DetailPage(props: SingleSauna) {
    return (
        <div className={styles.container}>
          <button className='backButton'><Link href='/'>Back</Link></button>
          <main className={styles.main}>
            <h1 className={styles.title}>
              {props.name}
            </h1>
            <div className='saunaDetailCard'>
              <p>Address: {props.address}</p>
              <p>Description: {props.description}</p>
              <p>Saunas: {props.saunaType.map(s=> <span>{s} | </span>)}</p>
              <p>Swimming: {props.swimming.map(s=> <span>{s} | </span>)}</p>
              <p>Services: {props.service.map(s=> <span>{s} | </span>)}</p>
              <p>Price: {props.price} €</p>
              <a href={`${props.website}`}>Link to webpage of sauna</a>
            </div>
          </main>
        </div>
      )
}

export async function getStaticProps(context: any): Promise<SingleSaunaProps> {
  const {params} = await context
  const sId =  await params.saunaId
  const sauna = await fetchSingleSauna(sId)
  return {
    props: {
      ...sauna,
      _id: sauna._id.toString()
    },
    //revalidate value can be set lower after adding posibility to add saunas
    revalidate: 60
  } 
}

export async function getStaticPaths() {

  const saunas = await fetchData()

  const paths = await saunas.map((s) => ({
    params: { saunaId: s._id.toString() },
}))
  
  return {
    paths,
    fallback: false
  }
}

export default DetailPage