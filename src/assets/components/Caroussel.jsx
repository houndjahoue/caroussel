import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
const Caroussel = ({children:slides,autoPlay, autoPlayInterval}) => {

    const [current, setCurrent] = useState(0);

    const prev = ()=>{
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    }

    const next = ()=>{
        setCurrent(current ===  slides.length - 1  ? 0: current + 1);
    }

    useEffect(()=>{
        if(!autoPlay) return
        const slideInterval = setInterval(next, autoPlayInterval);

        return ()=>{
            clearInterval(slideInterval);
        }
    })
    
    
    return (
      <div className=" relative w-[400px] h-[400px] mx-auto overflow-hidden ">

        <div  className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${current*100}%)`}}>
              {slides}
        </div>

        <div className="absolute inset-0  flex items-center justify-between">
            <button className="bg-slate-600 text-white p-2 rounded-full" onClick={prev} >
                <FaChevronLeft  size={30} />
            </button>
            <button className="bg-slate-600 text-white p-2 rounded-full" onClick={next}>
                <FaChevronRight size={30} />
            </button>
            
        
        </div>
      </div>
    )
  }
  
  export default Caroussel
  