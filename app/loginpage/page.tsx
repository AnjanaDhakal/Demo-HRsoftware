'use client'

import { useState } from "react";
import styles  from  './loginpage.module.css';

 function LoginPage() {
    const [pass, setPass] = useState("");
    const [isMsg, setIsMsg] = useState("")

    let handleChange = (e: any) => {
        setPass(e.target.value);
      };
  

    let invalidMsgPass =(e: any) => {
        if(e.target.value == ""){
            e.target.setCustomValidity("Required Password");}
        else{
            e.target.setCustomValidity("")
        }
    }
    
    let invalidMsgUser =(e: any) => {
        if(e.target.value == ""){
            e.target.setCustomValidity("Required UserName");}
        else{
            e.target.setCustomValidity("")
        }
    }
    const submitForm =  (e:any) => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;

        if(!name && !password){
            setIsMsg("")
            
        }
        else if(name == "admin" && password == "12345"){
            setIsMsg("success")
            window.location.href = "/dashboard"
           
           
        }
        else{
            
            setIsMsg("failed")
            
        }
        

      };
    return (
        <>
       
            <section className="bg-black min-h-screen flex items-center justify-center">
            
            <div className=  { `${styles.box} box flex gap-20 max-w-full p-11 py-28 items-center `}>

            
                <div className="md:block hidden w-1/2 ">
                    <div className="bg-white border-gray-300 border-2 rounded-lg ">
                        <div className="flex flex-col items-center p-8">
                            <div>
                                <img className="h-52 w-52 object-contain" src="/ceicon.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold mb-7 ">CE HRMS</h1>
                            </div>
                            <div>
                                <h2 className="text-base font-bold mb-7">Human Resource Management</h2>
                            </div>
                        </div>
                    </div>
                </div>
            
                
                <div className="md:w-1/2 px-8 md:px-16 bg-white border-gray-300 border-2 rounded-lg shadow-2xl">
            
                        <div className="my-7">
                        <h2 className="font-bold text-2xl text-black text-center">Login</h2>


                        <form  onSubmit={submitForm} className="flex flex-col gap-6" method="post">
                            <input onInvalid = {invalidMsgUser}  onInput = {invalidMsgUser}className="p-2 mt-8  border text-xl" type="text" name="name"
                                placeholder="Username" required />

                            <input onChange={handleChange}  onInvalid = {invalidMsgPass}  onInput = {invalidMsgPass}className="p-2  border text-xl" type="password" name="password"
                                placeholder="Password" required/>
                                {pass.length > 5 ? <strong className="text-[green]">Strong</strong> : pass.length >3 ? <strong className="text-[#c09648]">Too short</strong>: ""}
                                { isMsg =="" ? <p></p>: isMsg =="success"? <b className="text-[green]">success</b>:<b className="text-[red]">Failed</b>}
                            <div className="flex items-center">
                                <input type="checkbox" className="peer relative w-5 h-5 " />
                                <label className="ml-3 text-lg text-center">Keep me logged In</label>
                            </div>


                            <button
                                className="bg-gray-800 rounded-xl text-white py-2 ">Login
                            </button>
                        </form>
                        <div className="  border-b  py-8 text-center text-lg text-blue-600">
                            <a href="#">Forgot password</a>
                        </div>

                
                </div>
                </div>

                </div>     
            </section>
        
        
        </>
    )
}
export default LoginPage;



