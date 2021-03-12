import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react';

export default function Home() {
  const [selectedNumber, setSelectedNumber] = useState();

  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(
      <button 
        className={styles.numbers} 
        key={i} 
        value={i} 
        onClick={(e) => setSelectedNumber(e.target.value)}>
        {i}
      </button>);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Numbers App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The selected number is: {selectedNumber}
        </h1>

        <div className={styles.grid}>
          {numbers}
        </div>
      </main>

    </div>
  )
}
