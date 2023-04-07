import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Saludo from '@/componentes/saludo'
import VideoLink from '@/componentes/VideoLink'
import VideoFile from '@/componentes/VideoFile'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CaC React Clase 11</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Saludo texto="Cacho" edad="17">Texto en el medio del componente de bloque saludo</Saludo>
        <br></br><hr></hr>
        <VideoLink width="320" height="240" fuente="https://youtu.be/d4jT-TO-C_U?t=124"></VideoLink>

        <div>
          <h2>youtube iframe en el idex.js</h2>
          <iframe width='560' height='315' src="https://www.youtube.com/watch?v=d4jT-TO-C_U&t=124s">
          </iframe>
        </div>
        <div>
          <h2>video en el index.js</h2>
          <video width="320" height="240" controls>
            <source src="../assets/dolbycanyon.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>

        </div>

        <VideoFile ancho="320" alto="240" fuente="../assets/dolbycanyon.mp4" type="video/mp4"></VideoFile>

      </main>
    </>
  )
}