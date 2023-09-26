import eye from '../assets/eye.png'

export default function LoginModal(){
    return(
        <div className="w-full h-screen relative z-10 ">
            <div className="max-w-[463px] w-fill h-[420px] bottom-0 left-0 top-0 right-0 m-auto z-30 card-bg rounded-lg absolute p-6 border-2 border-solid border-transparent">
                <button type="button" className=" right-5 top-7 absolute h-8 w-8 bg-primary-700 rounded-full"> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto -rotate-45"></span> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto rotate-45"></span></button>
                <h4 className=" text-primary-300 uppercase text-center text-sm font-medium leading-[17px] mt-4">WELCOME BACK</h4>
                <h2 className=" text-lg leading-[22px] font-medium text-white text-center mt-3">Log into your account</h2>
                <form onSubmit={(e)=>{ e.preventDefault()}} className="mt-10">
                    <div className=" mb-4">
                        <label htmlFor="user" className="block text-sm leading-[17px] text-primary-100 font-normal w-full">Email or Username</label>
                        <input type="text" placeholder="Enter your email or username" className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor="user" className="flex items-center justify-between  text-sm leading-[17px] text-primary-100 font-normal w-full">Password <a href="#" className="text-xs leading-4">Forgot password?</a> </label>
                        <span className='cursor-pointer h-5 w-5 absolute right-3 bottom-3'><img src={eye} alt="" className="h-5 w-5 object-cover" /></span>
                        <input type="password" placeholder="Enter your password" className="mt-[10px] block text-primary-200 pl-3 pr-11 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200" />
                    </div>
                    <button type="submit" className="mb-3  h-[43px] rounded bg-secondary text-white text-base leading-[19px] w-full text-center">Login now</button>
                    <p className="block text-sm leading-[17px] text-primary-200 font-normal w-full">Not registered yet? <a href="#" className='text-primary-100'> Register →</a> </p>
                </form>
            </div>
            <div className="backdrop bg-primary-700 opacity-10 absolute h-full w-full z-20"></div>
            
        </div>

    )
}