

import { useState } from 'react';
import { useUrl } from '../Context/Context';

const UpdatePopup = ({setShowUpdate,existingData, setBookmarks, bookmarks}) => {


    const {urlBack} = useUrl();

    const [formData, setFormData] = useState({
        title: existingData?.title || "",
        url: existingData?.url || "",
        description: existingData?.description || "",
        tags: existingData?.tags || ""
    });

    const handleChange = (e)=>{
        setFormData({...formData , [e.target.name]: e.target.value});
    }

    const handleUpdate = async(e)=>{
        e.preventDefault();

        try {
            let updateEndpoint = `${urlBack}/api/updateBookmark/`;

            const token = localStorage.getItem("token");

            const res = await fetch(updateEndpoint+existingData._id,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if(res.ok){
                setBookmarks((prev) =>
                    prev.map((bm) => (bm._id === data.updated._id ? data.updated : bm))
                );
                // console.log(data);
                
                setShowUpdate(false);
            }else{
                alert(data.message || "Failed to create bookmark");
            }


        } catch (error) {
            console.log(error);
        }
    }

return (
   <div  >
        <div style={{backgroundColor:"#00000090"}}  className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'>
            <form onSubmit={handleUpdate}  style={{color: "#808080" }} className='login-popup w-full max-w-2xl bg-white flex flex-col gap-[25px] p-[25px] rounded-md ' >
                <div className="create-bookmark-title flex justify-between items-center text-black">
                    <h2 className='text-2xl font-semibold'>Update</h2>
                    <img onClick={()=> setShowUpdate(false)} src="cross_icon.png" alt="" className='cursor-pointer w-[16px] hover:scale-110 transition-all' />
                </div>
                <div className="flex flex-col gap-5">
                    <input name='title' value={formData.title} onChange={handleChange} style={{border:"1px solid #c9c9c9"}} className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-75'  type="text" placeholder='Title ' required/>
                    <input name='url' value={formData.url} onChange={handleChange} style={{border:"1px solid #c9c9c9"}} className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-75'  type="text" placeholder='Url ' required/>
                    <textarea name='description' value={formData.description} onChange={handleChange} style={{border:"1px solid #c9c9c9"}} className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-75 h-[100px]' type="text" placeholder='Description' required/>
                    <input name='tags' value={formData.tags} onChange={handleChange} style={{border:"1px solid #c9c9c9"}} className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-75' type="text" placeholder='Tag' required/>
                    {/* <input className='px-2 py-1 bg-white rounded-md hover:scale-105 transition-all duration-75' type="text" placeholder='public or not' /> */}
                    <button type='submit' className='bg-sky-300 rounded-md py-1 hover:scale-105 cursor-pointer transition-all duration-200 text-black'>Update Resource</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default UpdatePopup