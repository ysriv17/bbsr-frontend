
import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Createform() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [avaiter, setAvaiter] = useState('')
    const [Role,setRole]=useState("")
    const Navigate = useNavigate();
    const handleFileInputChange = (e) => {
        setAvaiter(e.target.files[0]);
        console.log(e.target.files[0], avaiter, "LLLLLLLLlsgggg");
        const uploder = new FileReader();

        uploder.onload = () => {
            if (uploder.readyState === 2) {
                setAvatar(uploder.result);
            }

        };

        uploder.readAsDataURL(e.target.files[0]);

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email && !password && !name) {
            window.alert("all fields are need to be not filled")
        }
        else {
            const formdata = new FormData();
            formdata.append('email', `${email}`);
            formdata.append('name', `${name}`);
            formdata.append('password', `${password}`);
            formdata.append('avaiter', avaiter)
            formdata.append("role",Role)
            console.log(formdata, "lllllllllllllllllllllll");

            await axios.post("https://bbsr-backend.onrender.com/admin/signup", formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(function (response) {
                console.log(response.data, "KKDedE@D#DD#")
                if (response.data.status === true) {

                    Navigate("/Dashboard/addroles");
                }

            }).catch((err) => {


                window.alert(err)
                return Promise.reject(err)
            })
            setEmail("");
            setAvatar(null);
            setPassword("")
            setName("")
            setRole("")

        }
    };
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register as a new user
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-black">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form encType="multipart/form-data" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <div className="mt-1 colo">
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={visible ? "text" : "password"}
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="Role"
                                className="block text-sm font-medium text-gray-700"
                            >
                               Role
                            </label>
                            <div className="mt-1 colo">
                                <input
                                    type="text"
                                    name="Role"
                                    autoComplete="name"
                                    required
                                    value={Role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="avatar"
                                className="block text-sm font-medium text-gray-700"
                            ></label>
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    {avatar ? (
                                        <img
                                            src={avatar}
                                            alt="avatar"
                                            className="h-full w-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <RxAvatar className="h-8 w-8" />
                                    )}
                                </span>
                                <label
                                    htmlFor="file-input"
                                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        name="avaiter"
                                        id="file-input"
                                        accept=".jpg,.jpeg,.png"
                                        onChange={handleFileInputChange}
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"

                                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    )

}
