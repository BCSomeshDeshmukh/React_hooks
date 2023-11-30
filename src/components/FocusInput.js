import React,{useRef,useEffect} from 'react';
function FocusInput(){
   const inputRef =  useRef(null);

   useEffect(()=>{
    // focus on the input
    inputRef.current.focus()
   },[])
   console.log(inputRef)
    return(
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}

export default FocusInput;