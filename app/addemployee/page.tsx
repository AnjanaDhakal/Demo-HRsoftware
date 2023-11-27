'use client';
import row from '@nextui-org/react/types/row';
import { Editor } from '@tinymce/tinymce-react';
import React, { Suspense, useRef } from 'react';

function Conetnt() {
  return (
    <>
      {/* 
      useEffect(() ={''} {

       const input = document.querySelector('#search-input');
      const tableRows = document.querySelectorAll('table tbody tr');

      input.addEventListener('input', () ={'>'} {
  const searchQuery = input.value.trim().toLowerCase();
      tableRows.forEach(row ={'>'} {
    if (row.textContent.toLowerCase().includes(searchQuery)) {
        row.style.display = '';
      {'}'} else {
        row.style.display = 'none';
      )}; */}

      <div className="font-light pr-3 pl-5 py-3 lg:pl-80">
        {/* header */}
        <div className="flex items-center justify-between ">
          <span className="text-lg font-bold">EMPLOYEE INFORMATION SYSTEM</span>
          <div className="bg-white p-4 flex items-center flex-wrap">
            <ul className="flex items-center -space-x-0.50">
              <li className="inline-flex items-center">
                <a href="#" className="text-black hover:text-blue-500">
                  Employee Information
                </a>

                <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>

              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-black font-semibold   hover:text-blue-500">
                  Employee Records
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pr-3 mx-4 my-2 ">
          <div className="shadow ">
            {/* table part start*/}
            <div className=" mx-3">
              <div className="flex justify-between items-center">
                <p className=" text-gray-600 text-base font-semibold">View Employee Records</p>
                <p className="text-base font-semibold bg-yellow-400 m-1 p-2 rounded">Add New Employees</p>
              </div>
              {/* heading */}
              <div className="flex items-center justify-between  ">
                <div>
                  <ul className="flex items-center space-x-2 bg-yellow-400  border border-solid border-gray-700 rounded">
                    <li className=" p-2 border-r-2  border-gray-700 text-sm ">Copy</li>
                    <li className="p-2  border-r-2 border-gray-700 text-sm">Excel</li>
                    <li className="p-2  border-r-2 border-gray-700 text-sm">PDF</li>
                    <li className="p-2 ">Column Visibility</li>
                  </ul>
                </div>
                <div className="flex items-center space-x-4 justify-between">
                  <label className="form-label inline-block mb-2 text-gray-700">Search:</label>
                  <input type="search" className="  form-control w-full md:w-96 px-3  py-0.5 text-base font-normal text-black bg-white  border border-solid border-gray-300 rounded  focus:outline-none  " />
                </div>
              </div>
              {/* main table start */}
              <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">


                <table id="record" className="stripe hover w-full py-4">
                  <thead>
                    <tr>
                      <th data-priority="1"
                        className="px-6 align-middle border-b border-black border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-bold text-left ">
                        Name</th>
                      <th data-priority="2"
                        className="px-6 align-middle border-b border-black border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-bold text-left ">
                        Position</th>
                      <th data-priority="3"
                        className="px-6 align-middle border-b border-black border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-bold text-left ">
                        Office</th>
                      <th data-priority="4"
                        className="px-6 align-middle border-b border-black border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-bold text-left ">
                        Age</th>
                      <th data-priority="5"
                        className="px-6 align-middle border-b border-black border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-bold text-left ">
                        Start date</th>
                      <th data-priority="6"
                        className="px-6 align-middle border-b border-black border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-bold text-left ">
                        Salary</th>
                      <th data-priority="7"
                        className="px-6 align-middle border-b border-black border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-bold text-left ">
                        Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="border-t border-black  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        Anjana</td>
                      <td
                        className="border-t border-black  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        System Architect</td>
                      <td
                        className="border-t border-black  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        Edinburgh</td>
                      <td
                        className="border-t border-black  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        61</td>
                      <td
                        className="border-t border-black  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        2011/04/25</td>
                      <td
                        className="border-t border-black  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        $320,800</td>
                      <td
                        className="border-t border-black  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        $320,800</td>
                    </tr>


                    <tr>
                      <td>Donna Snider</td>
                      <td>Customer Support</td>
                      <td>New York</td>
                      <td>27</td>
                      <td>2011/01/25</td>
                      <td>$112,000</td>
                      <td>$112,000</td>
                    </tr>
                    <tr>
                      <td>Donna Snider</td>
                      <td>Customer Support</td>
                      <td>New York</td>
                      <td>27</td>
                      <td>2011/01/25</td>
                      <td>$112,000</td>
                      <td>$112,000</td>
                    </tr>
                    <tr>
                      <td>Donna Snider</td>
                      <td>Customer Support</td>
                      <td>New York</td>
                      <td>27</td>
                      <td>2011/01/25</td>
                      <td>$112,000</td>
                      <td>$112,000</td>
                    </tr>
                    <tr>
                      <td>Donna Snider</td>
                      <td>Customer Support</td>
                      <td>New York</td>
                      <td>27</td>
                      <td>2011/01/25</td>
                      <td>$112,000</td>
                      <td>$112,000</td>
                    </tr>
                    <tr>
                      <td>Donna Snider</td>
                      <td>Customer Support</td>
                      <td>New York</td>
                      <td>27</td>
                      <td>2011/01/25</td>
                      <td>$112,000</td>
                      <td>$112,000</td>
                    </tr>





                  </tbody>

                </table>


              </div>

            </div>
            {/* table */}
          </div>
        </div>
      </div>

    </>
  )
}
export default Conetnt;
$(document).ready(function () {
  $('#record').DataTable({
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    lengthMenu: [5, 25, 100],
    language: {
      paginate: {
        next: 'Next',
        previous: 'Previous',
        "pagingType": "full_numbers"
      }
    }
  });
});