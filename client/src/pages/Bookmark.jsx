import { CirclePlus, Pencil, Trash } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePopup from '../components/CreatePopup';
import UpdatePopup from '../components/UpdatePopup';
import { useUrl } from '../ContextApi/Context.jsx';
// import { useUrl } from '../context/context';


const Bookmark = () => {

    const {urlBack} = useUrl();

    const [bookmarks, setBookmarks] = useState([]);

    const [showUpdate, setShowUpdate] = useState(false);

    const [showCreate, setShowCreate] = useState(false);

    const [selectedBookmark, setSelectedBookmark] = useState(null);

    const [refresh, setRefresh] = useState(false);

    


    const navigate = useNavigate();

    const logout =()=>{
        localStorage.removeItem("token");
        navigate('/');
    }

    const deleteEndpoint = `${urlBack}/api/deleteBookmark/`;

    const handleDelete = async(bookmarkId)=>{

        try {
            const token = localStorage.getItem("token");

            const res = await fetch(deleteEndpoint+bookmarkId,{
                method:"DELETE",
                headers:{Authorization:`Bearer ${token}`}
            })

        // const rs = await res.json();

        if(res.ok){
            setBookmarks((prev)=> prev.filter((b)=> b._id !== bookmarkId));
        }else{
            console.error("Failed to delete");
        }
        } catch (error) {
            console.error("Error deleting bookmark", error);
        }
    }


    useEffect(()=>{
        const fetchEndpoint = `${urlBack}/api/getBookmark`;

        const fetchBookmarks = async ()=>{
            const token = localStorage.getItem("token");

            if(!token) return;

            const res = await fetch(fetchEndpoint, {
                method:"GET",
                headers:{Authorization: `Bearer ${token}`}
            });

            const data = await res.json();
            if(res.ok){
                setBookmarks(data.bookmarks);
            }
        }
        

        fetchBookmarks();
    },[refresh]);

return (
    <div className=' '>
        <section className='w-full max-w-6xl mx-auto p-5'>
            <nav className='p-5'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center gap-2">
                        <div className="grid grid-cols-2 gap-1 items-center">
                            <div className="w-[10px] h-[10px] bg-sky-300 rounded-full"></div>
                            <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
                            <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
                            <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
                        </div>
                        <h2 className='font-semibold text-2xl md:text-3xl '>Dev<span className='text-sky-300 text-shadow-[12px_12px_12px_32px_rgba(20,255,255,0.7)]'>Link</span></h2>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={()=> logout()} className='bg-red-400 hover:shadow-[12px_12px_24px_rgba(255,50,0,0.5)] hover:scale-105 text-white  px-1 py-1 md:px-2 md:py-1 rounded-md  cursor-pointer shadow-[12px_12px_24px_rgba(0,0,0,0.5)]'>Logout</button>
                        {/* <button className='bg-gray-100 px-2 py-2 rounded-md cursor-pointer shadow-2xs'>Light</button> */}
                    </div>
                </div>
            </nav>
        </section>

        {/* section 2 bookmarks */}

        <section>
            <div className="w-full max-w-6xl mx-auto p-5">
                <button onClick={()=> setShowCreate(true)} className='flex items-center gap-1 text-xl px-2 py-1 bg-gradient-to-b from-sky-600 to-sky-400 text-white rounded-md mb-10 cursor-pointer hover:scale-110 transition-all shadow-[12px_12px_24px_rgba(0,0,0,0.5)]'>
                    <CirclePlus/>
                    <h2 className='text-white'>Add</h2>
                </button>

            {bookmarks.length>0?(
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {bookmarks.map((b)=>(
                        <motion.div
                            initial={{opacity:0}}
                            animate={{ opacity: [0, 0.5, 1] }}
                            whileInView={{opacity:1}}
                            transition={{
                              duration: 0.3, // default duration for everything
                              opacity: { duration: 1, ease: "easeInOut" }, // custom opacity transition
                            }}
                            key={b._id} className=" rounded-xl p-5 transition-all h-[250px] shadow-[12px_12px_24px_rgba(0,0,0,0.5)] hover:shadow-[12px_12px_24px_rgba(20,120,255,0.3)] hover:scale-105 flex cursor-pointer flex-col justify-between ">

                            <div className="flex flex-col gap-1">
                                    <div className="flex justify-between ">
                                        <a href={b.url} target="_blank" rel="noopener noreferrer" className='text-blue-800 h-[25px]'><h3 className='text-sky-500 '>{b.title}</h3></a>
                                        <button className="text-red-500 h-[30px] hover:scale-110 transition-all hover:text-red-800 cursor-pointer" onClick={()=> handleDelete(b._id)}>
                                            <Trash />
                                        </button>
                                    </div>
                                    <div className="flex flex-col justify-between ">
                                        <p className='text-gray-900 rounded-md p-2 text-sm '>{b.description}</p>
                                    </div>
                            </div>

                            <div className="flex justify-between items-center ">
                                <p className='rounded-full border  text-sky-400 px-2 text-[10px] hover:border-sky-600 transition-all '>{b.tags}</p>
                                <button className='text-sky-400 hover:scale-110 transition-all hover:text-sky-600 cursor-pointer' onClick={()=> {setShowUpdate(true), setSelectedBookmark(b)}}>
                                    <Pencil />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ):<>
                <p>No bookmarks found</p>
            </>}
            </div>

            {showCreate && (
                <CreatePopup
                    setBookmarks={setBookmarks}
                    setShowCreate={setShowCreate}
                    setRefresh={setRefresh} // 👈 trigger re-fetch
                    />
            )}

            {showUpdate &&(
                <UpdatePopup 
                    setShowUpdate={setShowUpdate}
                    existingData={selectedBookmark}
                    bookmark={bookmarks}
                    setBookmarks={setBookmarks}/>
            )}
        </section>
    </div>
)
}

export default Bookmark