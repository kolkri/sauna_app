import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function DetailPage() {
    const router = useRouter()
    const saunaId = router.query.saunaId
    console.log(router.query.saunaId)

    return (
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Sauna detail page!
            </h1>
          </main>
        </div>
      )
}

export default DetailPage