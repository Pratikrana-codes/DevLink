import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'motion/react';
import { useUrl } from '../Context/Context';

const LoginPopup = ({setShowLogin}) => {


    const {urlBack} = useUrl();


    const navigate = useNavigate();

    const [currState, setCurrState] = useState("Sign Up");

    const [data,setData] = useState({
        username:"",
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) =>{

        const endpoint = currState ==="Sign Up"
            ?  `${urlBack}/api/auth/register`
            : `${urlBack}/api/auth/login`;

        const payload = currState ==="Sign Up"
            ? data
            : {email: data.email, password: data.password};

            
        try {
            e.preventDefault();

        const res = await fetch(endpoint,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })

        const result = await res.json();

        const token = result.token;
        
        console.log(result);
        
        if(res.ok){
            // alert( `${currState} successful`);
            
            localStorage.setItem("token", token);
            setShowLogin(false);
            navigate('/bookmark');
            // window.location.href = "/dashboard";
        }else{
            alert(result.message || "Something went wrong");
        }
    
        } catch (error) {
            console.error("Error" , error);
            alert("Sever error");
        }
    }

    useEffect(()=>{
        console.log(data);
    },[data]);

return (
    <div>
        <div style={{backgroundColor:"#00000090"}} className="absolute z-10 w-[100%] h-[100%] grid place-items-center">
            <motion.form
                initial={{opacity:1, scale:0}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.2},
                }}
                onSubmit={handleSubmit} style={{color: "#808080" }} className='login-popup self-center max-w-[330px] bg-white flex flex-col gap-[25px] p-[25px] rounded-md '>
                <div className="login-popup-title flex justify-between items-center text-black">
                    <h2 className='text-2xl font-semibold'>{currState}</h2>
                    <img onClick={()=> setShowLogin(false)} src="cross_icon.png" alt="" className='cursor-pointer w-[16px]' />
                </div>
                <div className="login-popup-inputs flex flex-col gap-5">
                    {currState ==="Sign Up" ?  <input style={{border:"1px solid #c9c9c9"}} name='username' type="text" placeholder='Name ..' className='bg-white text-black px-2 py-1 outline-none rounded-md ' onChange={handleChange} value={data.username} required />: <></>}
                    <input style={{border:"1px solid #c9c9c9"}} name='email'  type="email" placeholder='Email..' className='bg-white text-black px-2 py-1 rounded-md' onChange={handleChange} value={data.email} required />
                    <input style={{border:"1px solid #c9c9c9"}} name='password'  type="password" placeholder='Password' className='bg-white text-black px-2 py-1 rounded-md' onChange={handleChange} value={data.password} required />
                </div>
                <button type='submit' className='text-base bg-sky-300 text-black rounded-md py-2 cursor-pointer'>{currState==="Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition flex justify-center gap-3">
                    <input type="checkbox" className='cursor-pointer mt-[-15px]' required />
                    <p>By continuing , i agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login" ?
                <p>Create a new account? <span className="text-blue-400 underline cursor-pointer " onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :
                <p>Already have an account? <span className="text-blue-400 underline cursor-pointer" onClick={()=>setCurrState("Login")}>Login here</span></p>    
                }
            </motion.form>
        </div>
    </div>
)
}

export default LoginPopup