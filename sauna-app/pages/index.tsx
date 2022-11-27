import styles from '../styles/Home.module.css'
import Link from 'next/link'

const DUMMY_SAUNAS_API = [
  {
    id: 's1',
    title: 'Sauna 1',
    address: 'Saunakatu 1',
    description: 'description about sauna 1'
  },
  {
    id: 's2',
    title: 'Sauna 2',
    address: 'Saunakatu 2',
    description: 'description about sauna 2'
  },
  {
    id: 's3',
    title: 'Sauna 3',
    address: 'Saunakatu 3',
    description: 'description about sauna 3'
  },
]


function SaunaPage() {

    return (
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Saunas page!
            </h1>
            <ul>
                {DUMMY_SAUNAS_API.map(sauna =>(
                  <li key={sauna.id}>
                    <Link href={`/${sauna.title}`}>{sauna.title}</Link>
                  </li>
                ))}
            </ul>
          </main>
        </div>
      )
}

export default SaunaPage
