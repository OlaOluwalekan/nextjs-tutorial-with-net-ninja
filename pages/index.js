import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quia provident itaque nisi numquam iusto, non veniam eaque eum illo
          nulla aut? Rerum perspiciatis ut ea rem reprehenderit! Ipsum,
          pariatur.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quia provident itaque nisi numquam iusto, non veniam eaque eum illo
          nulla aut? Rerum perspiciatis ut ea rem reprehenderit! Ipsum,
          pariatur.
        </p>
        <Link href='/ninjas' className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  )
}
