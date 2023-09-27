import eye from '../assets/eye.png'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function SignUpModal({preventClose = false, backdrop = true, staticModal = false, loginAction, signUpAction, show=true}){

    const navigate = useNavigate();
    const curentParams = useLocation();

    const redirectModel = () => {
        console.log(curentParams.pathname)
        if(curentParams.pathname !== '/post'){
            return navigate("/");
        }
        signUpAction();
        loginAction();
    } 
    
    return(
        <>
            <div className={`max-w-[463px] w-fill h-[506px] bottom-0 left-0 top-0 right-0 m-auto z-30 card-bg rounded-lg p-6 border-2 border-solid border-transparent ${staticModal && staticModal == true ? 'relative' : 'absolute'} ${show ? 'block': 'hidden'}`}>
                <button type="button" onClick={signUpAction} className={`right-5 top-7 absolute h-8 w-8 bg-primary-700 rounded-full ${preventClose && preventClose == true ? 'hidden' : ''} `}> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto -rotate-45"></span> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto rotate-45"></span></button>
                <h4 className=" text-primary-300 uppercase text-center text-sm font-medium leading-[17px] mt-4">SIGN UP</h4>
                <h2 className=" text-lg leading-[22px] font-medium text-white text-center mt-3">Create an account to continue</h2>
                <form onSubmit={(e)=>{ e.preventDefault()}} className="mt-10">
                    <div className=" mb-4">
                        <label htmlFor="email" className="block text-sm leading-[17px] text-primary-100 font-normal w-full">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="user" className="block text-sm leading-[17px] text-primary-100 font-normal w-full">Username</label>
                        <input type="text" id="user" placeholder="Choose a preferred username" className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor="password" className="flex items-center justify-between  text-sm leading-[17px] text-primary-100 font-normal w-full">Password</label>
                        <span className='cursor-pointer h-5 w-5 absolute right-3 bottom-3'><img src={eye} alt="" className="h-5 w-5 object-cover" /></span>
                        <input type="password" id="password" placeholder="Choose a strong password" className="mt-[10px] block text-primary-200 pl-3 pr-11 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200" />
                    </div>
                    <button type="submit" className="mb-3  h-[43px] rounded bg-secondary text-white text-base leading-[19px] w-full text-center">Continue</button>
                    <p className="block text-sm leading-[17px] text-primary-200 font-normal w-full">Already have an account? <span className='text-primary-100 cursor-pointer' onClick={() => { redirectModel() }}> Login →</span> </p>
                </form>
            </div>
            <div className={`backdrop-blur-[2px] top-0 h-full w-full z-20 bg-opacity-50 bg-black absolute ${backdrop && backdrop == true ? '': 'hidden'} ${show ? 'block': 'hidden'} `}></div>
        </>

    )
}