import React from 'react'
import { useParams } from 'react-router-dom'
export const Users = () => {
    const {userid} = useParams();
  return (
    <h1 className='bg-gray-600 text-white text-3xl p-4 text-center'>Users:{userid}</h1>
  )
}
