 
import React from "react";
import {BellDot,AlignJustify} from "lucide-react";
const SideProfileNotification = () => {

return (

    <>
    
              <div className="flex items-center space-x-4">
                <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-sm font-medium">A</span>
                </div>
                <div className='flex font-medium text-sm flex-col  '>
                  
                <span  >Adarsh K</span>
               <span className='text-gray-500'>Admin</span>
                </div>
    
                <div className='bg-gray-200 ml-4  rounded-full h-12 w-12 flex items-center justify-center'>
    
                <BellDot size={20} />
                </div>
                <AlignJustify size={20} />
    
              </div>
          
    </>
);
}

export default SideProfileNotification;