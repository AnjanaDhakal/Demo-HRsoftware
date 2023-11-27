'use client';
import { Editor } from '@tinymce/tinymce-react';
import React, { Suspense, useRef } from 'react';
function Conetnt() {
    return (
        <>
        
        <div className="font-light pr-3 pl-5 py-3 lg:pl-80">
       
       <div className="flex items-center justify-between ">
           <span className="text-lg font-bold">Add New Vacancy</span>
           <div className="bg-white p-4 flex items-center flex-wrap">
               <ul className="flex items-center -space-x-0.50">
                   <li className="inline-flex items-center">
                       <a href="#" className="text-black hover:text-blue-500">
                           CE HRMS
                       </a>

                       <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path d="M0 0h24v24H0V0z" fill="none" />
                           <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                       </svg>

                   </li>

                   <li className="inline-flex items-center">
                       <a href="#" className="text-black font-semibold   hover:text-blue-500">
                           Add Vacancy
                       </a>
                   </li>
               </ul>
           </div>
       </div>

      
       <div className="pr-3 mx-4 my-3 ">
           <div>
               <form>
                   <div className="grid grid-row-2 grid-cols-2 gap-2">
                       <div>
                           <label
                               className=" text-sm font-semibold after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className=" tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username"  />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold   after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Department</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username"  />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold  after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               hi</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className=" tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold   after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold  after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className=" tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold   after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold  after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className=" tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold   after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="date"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold  after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="date"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="date"
                               className=" tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold   after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold  after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                       <div>
                           <label
                               className=" text-sm font-semibold  after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                               Job title</label>
                           <input type="text"
                               className="tab m-[0.5] py-1 px-10 focus:outline-none border bg-slate-50 rounded-3xl w-full "
                               name="username" />
                       </div>
                   </div>

                   <label
                       className=" text-sm font-semibold   after:content-['*'] after:text-red-500 after:font-extrabold after:text-lg after:ml-6">
                       Description</label>
                       <Suspense fallback={<p>Loading feed...</p>}>
                           <Editor onInit = {(evt, editor) => editor = editor} 
                       
                           init={{
                           height: 200,
                           menubar: false,
                           plugins: [
                               'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                               'anchor',  'searchreplace', 'visualblocks', 'code', 'fullscreen',
                               'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                           ],
                           toolbar: 'blocks | ' +
                               'bold italic forecolor | alignleft aligncenter ' +
                               'alignright alignjustify image| bullist numlist outdent indent | ' +
                               'removeformat | preview help | media',
                           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                           images_upload_url: '/postAcceptor.php',
                           medias_upload_url: '/postAcceptor.php',
                           images_reuse_filename: true,
                           statusbar: false,
                           automatic_uploads: false,
                         
                          

                           }}/>
                       </Suspense>

                   {/* <div className="static border border-gray-300 ">
                       <textarea id="premiumskinsandicons-naked" ></textarea>
                   </div> */}

                   <div className="flex flex-col m-2">
                       <div className="inline-flex my-2">
                           <span className="mr-3 text-sm font-medium text-gray-900">Vehicles reqiured:</span>
                           <label className="relative inline-flex items-center cursor-pointer">
                               <input type="checkbox" value="" className="sr-only peer"  />
                               <div
                                   className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 active:outline-none">
                               </div>
                           </label>
                           <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</span>

                       </div>
                       <div className="inline-flex">
                           <span className="mr-3 text-sm font-medium text-gray-900">Status:</span>
                           <label className="relative inline-flex items-center cursor-pointer">
                               <input type="checkbox" value="" className="sr-only peer"  />
                               <div
                                   className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 active:outline-none">
                               </div>
                           </label>
                           <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>

                       </div>

                   </div>
                   <a className=" mb-8 flex justify-end">
                       <button className=" border border-black px-2 py-1 bg-yellow-400 shadow-2xl  rounded-2xl ">
                           Submit
                       </button></a>
               </form>
           </div>

       </div>

   </div>
        
        </>
    )
}
export default Conetnt;