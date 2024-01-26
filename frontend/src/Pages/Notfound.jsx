import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Error(){

    const navigate = useNavigate()

    useEffect(() =>{
        setTimeout(() =>{
            navigate("/")
        },2000)
    })

    return <h1 className='flex justify-center text-4xl text-black font-extrabold'>Notfound</h1>
}
