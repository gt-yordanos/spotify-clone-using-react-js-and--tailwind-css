import React from 'react'
import Navbar from './Navbar'
import {albumsData, songsData} from '../assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Feautured Charts</h1>
        <div className='flex overflow-auto hide-scrollbar'>
          {albumsData.map((item, index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hit</h1>
        <div className='flex overflow-auto hide-scrollbar'>
          {songsData.map(()=>())}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
