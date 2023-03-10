import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/Ninjas.module.css"

export const getStaticProps = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json()

  return {
    props: {
      ninjas: res,
    },
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => {
          return (
            <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
              <div className={styles.single}>
                <h3>{ninja.name}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Ninjas
