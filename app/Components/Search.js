"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { SearchData } from '../Redux/SearchSlice';

const Search = () => {
    const [input, setInput] = useState('');
    const router = useRouter()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(SearchData(input));
        router.push("/Search");
    }
    
    return (
        <>
            <div className='relative h-80 w-full bg-slate-600'>
                <img className='relative h-full w-full object-cover object-center' src='https://image.tmdb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg' alt='not found'></img>
                <h1 className=' pl-20 absolute top-10 text-white fs-1 fw-medium'>Welcome.</h1>
                <p className=' pl-20 absolute top-20 text-white fs-3 fw-medium'>Millions of movies, TV shows and people to discover. Explore now.</p>

                <div className=' pl-20 absolute top-60 w-full '>
                    <form  onSubmit={handleSubmit}>
                        <input type='text'
                            className='w-2/3 rounded-3xl p-2 fs-5 pl-3 focus:outline-none'
                            placeholder='Search...'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}

                        ></input>
                        <Button type='submit' radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg p-3">
                            Button
                        </Button>
                    </form>
                </div>

            </div>
        </>
    )
}
export default Search