import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from 'react-router-dom';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
  const Navigate = useNavigate();
    const emailchecker = (em) => {
        const emailcheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
        if (emailcheck.test(em)) {
            console.log("okay email")
            return true;
        }
        else {
            window.alert("invailed email")
            return false;
        }
    }
    const passwordchecker = (pass) => {
        const number = /[0-9]/g;
        const specialcharacter = /[$&+,:;=?@#|'<>.-^*()%!]/g;
        const uppercase = /[A-Z]/g;
        const lowercase = /[a-z]/g;
        if (
            number.test(pass) && specialcharacter.test(pass) && uppercase.test(pass) && lowercase.test(pass)
        ) {
            console.log("okay pass")
            return true;

        }
        else {
            window.alert("invailed email")
            return false;
        }
    }

    const validate = async (em, pass) => {
        emailchecker(em);
        passwordchecker(pass);
        if (emailchecker && passwordchecker) {
            const data = {
                "email": `${email}`,
                "password": `${password}`
            }
            console.log("imhere", data)
            await Axios.post("https://bbsr-backend.onrender.com/admin/login",
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin':'*',
                    }
                })
                .then(function (response) {
                    console.log(response.data, "PPPPPPPPPPPPPPPPPPPPPPPPPPP")
                    localStorage.setItem("accesstoken",`${response.data.accesstoken}`)
                    Navigate('/Dashboard')
                    return response.data
                }).catch((err) => {

                    console.log(err, "error in sending")
                    window.alert(err)
                    return Promise.reject(err)
                })
        }
    }



    const handelsubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            window.alert("Login id is not filled")
        }
        else {
            validate(email, password)

        }
    };
    return (
        
          <div className='w-screen flex justify-center ba'>

         
            <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-w-full'>
                <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-600'>
                    Login To Your Account
                </h2>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                        <form onSubmit={handelsubmit} className='space-y-6 grid'>
                            <div>
                                <lable htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </lable>
                                <div className='mt-1'>
                                    <input type="email" name="email" autoComplete='email' required value={email} onChange={(e) => { setEmail(e.target.value) }}
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                                </div>
                            </div>
                            <div>
                                <lable htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Password
                                </lable>
                                <div className='mt-1 relative'>
                                    <input type={visible ? "text" : "password"} name="password" autoComplete='current-password' required value={password} onChange={(e) => { setPassword(e.target.value) }
                                    }
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                                    {visible ? (
                                        <AiOutlineEye
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(false)} />)
                                        :
                                        (
                                            <AiOutlineEyeInvisible
                                                className=" absolute right-2 top-2 cursor-pointer"
                                                size={25}
                                                onClick={() => setVisible(true)} />
                                        )
                                    }

                                </div>
                            </div>
                            <div className='flex justify-between '>
                                <div className='flex justify-between items-center'>
                                    <input type="checkbox" name="remember-me" id="remeber-me"
                                        className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded-sm' />
                                    <label htmlFor="remember-me" className='ml-2 block text-sm text-gray-900 '>
                                        Remember Me
                                    </label>
                                </div>
                                <div className='text-sm'>
                                    <Link to="/user/forgotpassword" preventScrollReset={true} className='font-medium text-blue-600 hover:text-blue-500'>Forgot Password ?</Link>
                                </div>
                            </div>
                            <button type="submit" className='group relative w-full h-[40px] flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500'> Sign Up</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            </div>
        

    )
} 
