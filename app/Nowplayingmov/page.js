'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardFooter, CircularProgress } from '@nextui-org/react';
import { NowplayingData } from '../Redux/NowPlayingSlice';
import Link from 'next/link';

const page = () => {
    const dispatch = useDispatch();
    const Movies = useSelector((state) => state.nowplaying.nowplaying)
    console.log("nowplaying", Movies);

    const[load,setLoad] = useState(1);



    useEffect(() => {
        dispatch(NowplayingData(load));
    }, [load])


    return (
        <>
            <div className='w-full h-100 p-4'>
                <div>
                    <div className='flex content-between items-end w-96'>
                        <h1 className='fs-3 fw-medium'>Nowplaying..</h1>
                    </div>
                    <div className='min-h-80 w-full mt-2 gap-4 flex flex-wrap '>
                        {
                            Movies.map((elm, i) => {
                                return (
                                    <>
                                    <Link className='m-auto' key={i} href={`/Details/${elm.id}`}>
                                        <Card  className=' min-h-[300px] items-center w-48 mr-2 m-auto content-center' shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                                            <CardBody className="overflow-visible p-0 ">
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
                            })
                        }
                    </div>
                    <Button className='m-auto flex content-center bg-sky-800' onClick={()=>setLoad(load+1)}>Next</Button>
                </div>

            </div>
        </>
    )
}

export default page