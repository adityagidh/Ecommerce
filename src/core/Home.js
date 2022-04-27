import React from 'react'
import { API } from '../backend'
import "../styles.css"
import Base from './Base'



export default function Home() {
    console.log(API)
  return (
    <Base>
        <h1 className='text-white'>Home</h1>
    </Base>
  )
}
