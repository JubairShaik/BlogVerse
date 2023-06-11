import {useState} from "react"



function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  

export default function BlurImage ({item , classNames, divNames}){
    const [isLoading, setLoading] = useState(true);
    return(
      <div className={`${divNames}`}  >
      <img
      src={item}
      className={cn(`${classNames}`,
        isLoading
          ? "scale-110 blur-xl  "
          : "scale-100 blur-0 grayscale-0"
      )}
      alt="product1"
      onLoad={() => setLoading(false)} // Update isLoading state when the image loads
    />           
      
      </div>
    )
  }
  