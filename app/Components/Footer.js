import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-sky-950 dark:bg-gray-900 mt-10 z-20">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <Link href="/" class="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  CINEMA
                </span>
              </Link>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                  Movies
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 flex flex-col gap-2 font-medium">
                  <li>
                    <Link href="/Popularmov">
                      Populer
                    </Link>
                  </li>
                  <li>
                    <Link href="/Nowplayingmov" >
                      Now Playing
                      
                    </Link>
                  </li>
                  <li>
                    <Link href="/Upcoming" >
                      Upcommings 
                      
                    </Link>
                  </li>
                  <li>
                    <Link href="/Toprated" >
                      Top Rated
                      
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                  TV Shows
                </h2>
                <ul  class="text-gray-500 dark:text-gray-400 flex gap-2 flex-col font-medium">
                  <li >
                    <Link href="/Tvpopular">
                      Populer
                    </Link>
                  </li>
                  <li>
                    <Link href="/Tvontv" >
                      Now Playing
                      
                    </Link>
                  </li>
                  <li>
                    <Link href="/Tvairing" >
                      Arriving Today 
                      
                    </Link>
                  </li>
                  <li>
                    <Link href="/Tvtoprated" >
                      Top Rated
                      
                    </Link>
                  </li>
                </ul>
               
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              ATUL PATEL
                
              , All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
