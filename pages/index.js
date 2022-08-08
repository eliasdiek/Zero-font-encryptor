import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [inputData, setInputData] = React.useState('')
  const [outputData, setOutputData] = React.useState('')

  return (
    <div className={styles.container}>
      <Head>
        <title>Encryptor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-8'>
        <h1 className='text-center text-3xl'>
          HTML Letter Encryptor
        </h1>

        <div className='py-4'>
          <div className='py-2'>
            <textarea
              className='w-full h-48 border border-gray-300 p-4'
              cols={10}
              onChange={e => setInputData(e.target.value)}
              placeholder="Insert your HTML string here"
            ></textarea>
          </div>
          <div className='py-2 flex items-center justify-center'>
            <button className='py-3 px-12 rounded-sm bg-black text-xl text-white focus:ring-2 focus:ring-black ring-offset-1'>Encrypt</button>
          </div>
          <div className='py-2'>
            <textarea
              className='w-full h-48 border border-gray-300 p-4'
              cols={10}
              onChange={e => setOutputData(e.target.value)}
              placeholder="Encrypted HTML string will output here"
              readOnly
            ></textarea>
          </div>
          <div className='py-2'>
            <h3 className='mb-2'>Preview:</h3>
            <div
              className='w-full h-48 border border-gray-300 p-4'
              dangerouslySetInnerHTML={{
                __html: outputData ? outputData : inputData
              }}
            ></div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
