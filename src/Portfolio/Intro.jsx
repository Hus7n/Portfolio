import React ,{useState,useEffect}from 'react'

export default function Intro() {
  const [showtext,setShowtext] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setShowtext(true);
    }, 300);
    
  },[]);
  return (
    <>
    <div className='w-screen h-screen  overflow-hidden fixed top-0 left-0'>
        <video autoPlay loop muted  className= "absolute top-0 w-full h-full object-cover  overflow-hidden -z-10" src="/background.mp4 " type='video/mp4'> 
        </video>

        <div className='absolute top-0 left-0 w-full h-full flex items-center '>
          <h1 className={`text-black text-9xl transition-opacity duration-1000 ease-in-out transform ${showtext ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-4'}`}>Portfolio</h1> 

        </div>
    </div>

   
    </>                       
  )
}
