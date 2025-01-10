import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { options } from '../utils/constant';
import { FiX } from 'react-icons/fi';

const Trailer = () => {
const navigate=useNavigate()
const [videokey, setvideokey] = useState(null)

const {id}=useParams();

const getVideo=async ()=>{

    const blob=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,options);
    const data=await blob.json();
    
    setvideokey(data.results.filter(v=>v.type=="Trailer")[0].key);

}


useEffect(()=>{getVideo()},[])



  return (
    <div className='flex items-center justify-center bg-black' >
      <iframe
  className="object-cover h-screen aspect-video bg-gradient-to-r from-black"
  src={`https://www.youtube.com/embed/${videokey}?autoplay=1&mute=1&loop=1&si=14WTEuJgyeIFWbSs1`} 
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
<FiX size={50} className='text-white cursor-pointer' onClick={()=>navigate(-1)} />
    </div>
  )
}

export default Trailer
