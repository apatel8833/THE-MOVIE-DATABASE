import React from 'react'
import Search from './Components/Search'
import Trending from './Components/Trending'
import Nowplaying from './Components/Nowplaying'
import Upcoming from './Components/Upcoming'

const page = () => {
  return (
    <>
      <Search />
      <Trending />
      <Nowplaying />
      <Upcoming/>
    </>
  )
}
export default page