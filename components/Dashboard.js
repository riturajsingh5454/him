import Link from "next/link";
import React from "react";

const DashboardIndex = () => {
  return (
    <div className="relative block md:flex gap-5">
          <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
        <div className="text-lg font-medium text-blue-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
          Send Money
        </div>
        <div className="block sm:flex md:block lg:flex items-center justify-center">
        <form class="w-[80%] " action="#">
                   <div>
                       <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CBP ID</label>
                       <input type="text" name="cbpid" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                   </div>
                   <div>
                       <label for="msg" class="block my-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                       <input type="test" name="msg" id="msg" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                   </div>
                   
                   
               </form>
        </div>
      
        <a
          className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16"
          href="#"
        >
          <span>Send Money</span>
          <span className="font-medium text-gray-700 ml-2">➔</span>
        </a>
      </div>











      <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
        <div className="text-lg font-medium text-blue-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
          Recive Money
        </div>
        
        <div className="flex justify-center mt-3">
          <ul>
            <li className="flex items-center">
              <div className=" p-2 fill-current text-gray-700">
              CBP ID -
              </div>
              <span className="text-gray-700 text-lg ml-3">
                INR1234
              </span>
            </li>
            <li className="flex items-center">
              <div className=" p-2 fill-current text-gray-700">
              Acclount Number -
              </div>
              <span className="text-gray-700 text-lg ml-3">
                24y274276472648264872648276478
              </span>
            </li>
            <li className="flex items-center justify-center">
             <img src="/img/qr.png" className="h-32" />
            </li>
          </ul>
        </div>
        <Link
        href={"/history"}>
        <span
          className="block flex  justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16"
         
        >
          <span>Transaction History</span>
          <span className="font-medium text-gray-700 ml-2">➔</span>
        </span>
        </Link>
      </div>
    
    </div>
  );
};

export default DashboardIndex;
