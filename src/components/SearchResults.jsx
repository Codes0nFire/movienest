import React from 'react'
import { useSelector } from 'react-redux'
import VideoList from './VideoList'

const SearchResults = () => {
 
//subscribe to the search movies in the store 
const searchMovies=useSelector(store=>store.search.searchMovies)




  return (
    <div className='text-white p-10' >
    {searchMovies && <VideoList movies={searchMovies} title={"Related Movies"}  />}
    </div>
  )
}

export default SearchResults
