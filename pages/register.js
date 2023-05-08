import React from 'react'

import Navbar from '../components/navbar'
import Link from 'next/link'

const Register = () => {
  return (
   <>
   <Navbar/>
   <section className="bg-gray-50 dark:bg-gray-900">
   <div className="flex flex-col items-center   py-10 mx-auto md:h-screen lg:py-10">
    
       <div className="w-full bg-white rounded-lg border border-gray-500 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                   Create a New Account
               </h1>
               <form className="space-y-4 md:space-y-6" action="#">
               <div>
                       <label forHtml="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                       <input type="name" name="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Himanshu" required=""/>
                   </div>
                   <div>
                       <label forHtml="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                       <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                   </div>
                   <div>
                       <label forHtml="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone with County Code</label>
                       <input type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91639084550" required=""/>
                   </div>
                   <div>
                       <label forHtml="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of Birth</label>
                       <input type="date" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                   </div>
                   <div>
                       <label forHtml="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                       <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                   </div>
                   <div className="flex items-center justify-between">
                       <div className="flex items-start">
                           
                       </div>
                   </div>
                   <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                       You have already account ? <Link href="/login"  className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in</Link>
                   </p>
               </form>
           </div>
       </div>
   </div>
 </section>
   </>
  )
}

export default Register