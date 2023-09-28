
'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailData } from '@/app/Redux/DetailSlice';
import { useParams } from 'next/navigation';
import { CircularProgress, Image } from '@nextui-org/react';


const page = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const Movies = useSelector((state) => state.detail.detail)
    console.log("detail", Movies.title);
    useEffect(() => {
        dispatch(detailData(id))
    }, [])

    return (
        <>
            <div style={{ position: 'relative', height: "85vh", width: "100vw", overflow: "hidden " }} >
                <img style={{ position: "relative", height: "100%", width: "100%" }} className='object-cover object-center' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${Movies.backdrop_path}`}></img>
                <div className='absolute top-0 h-100 w-100 bg-green-800 opacity-80'>
                </div>
                <div className='relative h-100 w-100 bottom-100 flex flex-col items-center p-2 sm:flex-row p-5'>
                    <img
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${Movies.poster_path}`}

                        className=' h-72 w-56 rounded-lg sm:h-96 w-72'
                    ></img>
                    <div className='ml-0 mt-0 min-h-[200px] sm:ml-8 mt-2'>
                        <h1 className='text-white fs-1 fw-bold'>{Movies.title}</h1>
                        <h1 className='text-slate-400'>({Movies.release_date})</h1>
                        <div className='w-96 h-20  flex content-center items-center '>
                            <div className='h-12 w-12 rounded-full fs-2  text-white bg-cyan-800'>
                                <CircularProgress
                                    aria-label=""
                                    size="lg"
                                    value={(Movies.vote_average) * 10}
                                    color="success"
                                    // formatOptions={{ style: "unit", unit: "kilometer" }}
                                    showValueLabel={true}
                                    className='h-12 w-12 fs-1'
                                />
                            </div>
                            <span className='text-xl text-white w-5'>User Score</span>
                        </div>
                        <i className='fs-4 fw-medium text-gray-300'>Growth is a group project.</i>
                        <p className='text-white fw-medium fs-5'>Overview</p>
                        <small className='text-white'>{Movies.overview}</small>


                    </div>


                </div>
            </div>
        </>
    )
}

export default page