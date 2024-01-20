import React,{useRef, useState} from 'react'
import './index.css'
import img1 from '../assets/auth1.png'

const Authentication = () => {
    const myRef = useRef(null);
 const [isActive,setIsActive]=useState(false);

const submitHandler=()=>{
    let str1 =""
    // myRef.current.focus();
    // console.log(myRef.current.value)
    // console.log(myRef.current.value !==" ")
    let values =document.querySelectorAll('.input');
  
    for (var i = 0; i < values.length; i++) {
        if(values[i].value !== ' '){
            // values.classList.add('error-warning');
            setIsActive(true)
      
           }
           else{
            setIsActive(false)

           }
       str1 =str1+(values[i].value)
    //    if(str1.length === 6){
    //     setIsActive(false)

    //    }

      
      }
    //   console.log(str1)

}

  return (
    <div className='main-container'>
        <div className='container1'>
            <img src={img1} alt=""/>
         

        </div>
        <div className='container2'>
            <div className='otp-text'>
            <h1>Enter OTP</h1>
            <p>Welcome back! please enter your detail</p>

            </div>
            
            <div className='otp-container'>
                <div><input type="text" className={isActive ? "error-warning" : "input"} ref={myRef}/></div>
                <div><input type="text" className={isActive ? "error-warning" : "input"}  ref={myRef}/></div>
                <div><input type="text" className={isActive ? "error-warning" : "input"}  ref={myRef}/></div>
                <div><input type="text"  className={isActive ? "error-warning" : "input"}  ref={myRef}/></div>
                <div><input type="text" className={isActive ? "error-warning" : "input"} ref={myRef}/></div>
                <div><input type="text" className={isActive ? "error-warning" : "input"}ref={myRef}/></div>
            </div>
            <div className='timer-container'>
                <p>00:30</p>
                <p>Resend OTP</p>


            </div>
            <button onClick={submitHandler}>Submit</button>
            
         

        </div>


    </div>
  )
}

export default Authentication