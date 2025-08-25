



import { useState } from 'react';

import { motion } from 'motion/react';
import { useUrl } from '../Context/context';


const CreatePopup = ({setShowCreate, setBookmarks, setRefresh}) => {

    const {urlBack} = useUrl();

    const [bookmarkData,setBookmarkData] = useState({
            title:"",
            url:"",
            description:"",
            tags:""
        });
    

    const handleChange =(e)=>{
        setBookmarkData({...bookmarkData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const token = localStorage.getItem("token");

        try {
            const createBookmarkEndpoint =`${urlBack}/api/createBookmark`;

            const res = await fetch(createBookmarkEndpoint, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(bookmarkData)
            })

            const data = await res.json();

            if(res.ok){
                setBookmarks((bookmarks) => [...bookmarks, data.bookmark]); // immediate update

                setBookmarkData({
                    title:"",
                    url:"",
                    description:"",
                    tags:""
                });
                setRefresh(prev => !prev);
                setShowCreate(false);

            }else{
                alert(data.message || "Failed to create bookmark");
            }

        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    }

return (
    <div  >
        <div style={{backgroundColor:"#00000090"}}  className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'>
            <motion.form
                initial={{opacity:1, scale:0}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.2},
                }}
                onSubmit={handleSubmit} style={{color: "#808080" }} className='login-popup self-center w-full max-w-2xl bg-white flex flex-col gap-[25px] p-[25px] rounded-md ' >
                <div className="create-bookmark-title flex justify-between items-center text-black">
                    <h2 className='text-2xl font-semibold'>Create </h2>
                    <img onClick={()=> setShowCreate(false)} src="cross_icon.png" alt="" className='cursor-pointer w-[16px]' />
                </div>
                <div className="flex flex-col gap-5">
                    <input onChange={handleChange} style={{border:"1px solid #c9c9c9"}} className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-150' name='title' value={bookmarkData.title}  type="text" placeholder='Title ' required/>
                    <input onChange={handleChange} style={{border:"1px solid #c9c9c9"}} className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-150' name='url' value={bookmarkData.url} type="text" placeholder='Url ' required/>
                    <textarea onChange={handleChange} style={{border:"1px solid #c9c9c9"}} className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-150 h-[100px]' name='description' value={bookmarkData.description} type="text" placeholder='Description' required/>
                    <input onChange={handleChange} style={{border:"1px solid #c9c9c9"}} className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-150 ' name='tags' value={bookmarkData.tags} type="text" placeholder='Tag' required/>
                    {/* <input className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-75' type="text" placeholder='public or not' /> */}
                    <button type='submit' className='bg-sky-300 rounded-md py-1 hover:scale-105 cursor-pointer transition-all duration-200 text-black'>Add Resource</button>
                </div>
            </motion.form>

        </div>
    
    </div>
)
}

export default CreatePopup