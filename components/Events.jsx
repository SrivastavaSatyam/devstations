import React from 'react'
import styles from '../styles/Events.module.css'
import Reach from './Reach'
import Image from 'next/image'
import Hackathon from '../assets/images/hackathon.jpeg'

const Events = () => {
  return (
  <>
    <div className={styles.heading}>
      <h1>EVENTS</h1>
    </div>
    <div className={styles.box}>
    <div className={styles.boxes1}>
      <Image src={Hackathon} height= {2000} width ={2000}/>
    </div>
    {/* <div className={styles.boxes2}></div>
    <div className={styles.boxes3}></div> */}
    </div>
    <div className={styles.boxes4}>
      <h1>More to Come!!!</h1>
    </div>
    <Reach/>

    </>
  )
}

export default Events