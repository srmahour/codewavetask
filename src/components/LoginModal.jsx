import eye from '../assets/eye.png'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


export default function LoginModal({preventClose = false, backdrop = true, staticModal = false, show = true, loginAction, signUpAction}){
    const navigate = useNavigate();
    const curentParams = useLocation();

    const LoginNow = () => {
        if(curentParams.pathname !== '/post'){
            return navigate('/post')
        }
        loginAction();
    }
 
    const redirectModel = () => {
        if(curentParams.pathname !== '/post'){
            return navigate("/register");    
        }
        signUpAction();
        loginAction();
    } 

    return(
        <>  
            <div className={`max-w-[463px] w-fill h-[420px] bottom-0 left-0 top-0 right-0 m-auto z-30 card-bg rounded-lg p-6 border-2 border-solid border-transparent ${staticModal ? 'relative' : 'absolute'}  ${show ? 'block': 'hidden'}`}>
                <button type="button" onClick={loginAction} className={`right-5 top-7 absolute h-8 w-8 bg-primary-700 rounded-full ${preventClose ? 'hidden' : ''} `}> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto -rotate-45"></span> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto rotate-45"></span></button>
                <h4 className=" text-primary-300 uppercase text-center text-sm font-medium leading-[17px] mt-4">WELCOME BACK</h4>
                <h2 className=" text-lg leading-[22px] font-medium text-white text-center mt-3">Log into your account</h2>
                <form onSubmit={(e)=>{ e.preventDefault()}} className="mt-10">
                    <div className=" mb-4">
                        <label htmlFor="loginUser" className="block text-sm leading-[17px] text-primary-100 font-normal w-full">Email or Username</label>
                        <input type="text" id="loginUser" placeholder="Enter your email or username" className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor="loginPassword" className="flex items-center justify-between  text-sm leading-[17px] text-primary-100 font-normal w-full">Password <a href="#" className="text-xs leading-4">Forgot password?</a> </label>
                        <span className='cursor-pointer h-5 w-5 absolute right-3 bottom-3'><img src={eye} alt="" className="h-5 w-5 object-cover" /></span>
                        <input type="password" id="loginPassword"  placeholder="Enter your password" className="mt-[10px] block text-primary-200 pl-3 pr-11 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200" />
                    </div>
                    <button type="submit" className="mb-3  h-[43px] rounded bg-secondary text-white text-base leading-[19px] w-full text-center" onClick={() =>{ LoginNow() }}>Login now</button>
                    <p className="block text-sm leading-[17px] text-primary-200 font-normal w-full">Not registered yet? <span className='text-primary-100 cursor-pointer' onClick={() => { redirectModel() } }> Register →</span> </p>
                </form>
            </div>
            <div className={`backdrop-blur-[2px] top-0 h-full w-full z-20 bg-opacity-50 bg-black absolute ${backdrop ? '': 'hidden'} ${show ? 'block': 'hidden'}`}></div>
        </>

    )
}