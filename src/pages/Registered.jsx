import SignUpModal from "../components/SignUpModal"
import Logo from '../assets/Logo.svg'

export default function Registered(){
    return(
        <div className="relative h-screen w-full flex items-center justify-center">
            <div className="h-[595px] relative w-full">
                <img src={Logo} width={40} height={40} className=" h-10 w-40 z-30 relative mx-auto block mb-[50px]" alt="logo" />
                <SignUpModal preventClose={true} backdrop={false} staticModal={true}/>
            </div>
        </div>
    )
}