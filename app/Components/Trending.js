"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { TrendingData } from '../Redux/TrendingSlice';
import { CircularProgress } from "@nextui-org/react"
import Link from 'next/link';
import { Movie } from '@mui/icons-material';
import Loader from './Loader';

const Trending = () => {
    const dispatch = useDispatch();
    const Movies = useSelector((state) => state.trending.trending)
    console.log("trending", Movies);


    useEffect(() => {
        dispatch(TrendingData());

    }, [])


    return (
        <>
            <div className='w-full  p-10 h-100'>
                <div>
                    <div className='w-full flex items-end relative '>
                        <h1 className='fs-3 fw-medium'>Trending..</h1>
                        <Link className='text-blue-700 right-0 absolute' href="/Popularmov">See More....</Link>
                    </div>
                    <div className='min-h-80 mt-2   gap-4 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
                        {

                          (Movies.length>0)? Movies.map((elm, i) => {
                                return (
                                    <>
                                      <Link className='m-auto' key={i} href={`/Details/${elm.id}`}>

                                        <Card key={i} className='relative min-h-[300px] items-center w-48 mr-2 inline-block border-1 border-slate-400' shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                                            <CardBody className="overflow-visible p-0 ">
                                                {/* <Image
                                                    shadow="sm"
                                                    radius="lg"
                                                    width="100%"
                                                    alt='jgdjfjij'
                                                    className="object-cover h-[200px] "
                                                   
                                                /> */}
                                                <img
                                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${elm.poster_path
                                                        }`}
                                                    className="relative object-cover object-center h-[250px] w-full rounded-lg"
                                                >
                                                </img>
                                                <div className='h-12 w-12 absolute top-56 left-4 rounded-full fs-2 text-white bg-cyan-800'>

                                                    <CircularProgress
                                                        label=""
                                                        size="lg"
                                                        value={(elm.vote_average) * 10}
                                                        color="success"
                                                        // formatOptions={{ style: "unit", unit: "kilometer" }}
                                                        showValueLabel={true}
                                                        className='h-12 w-12 '

                                                    />
                                                </div>
                                            </CardBody>
                                            <CardFooter className="text-small flex flex-col content-center text-wrap">
                                                <b className='items-center'>{elm.title}</b>
                                                <p className="text-default-500">{elm.release_date}</p>
                                            </CardFooter>
                                        </Card>
                                      </Link>
                                    </>
                                )
                            }):<Loader/>
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default Trending