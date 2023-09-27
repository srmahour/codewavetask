import CreatePost from "../components/CreatePost";
import SinglePost from "../components/SinglePost";
import hand from '../assets/hand.png'
import sad from '../assets/sad.png'
import Ellipse2 from '../assets/Ellipse2.png'
import Ellipse3 from '../assets/Ellipse3.png'
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import { useState } from "react";

export default function Home(){
    const [toggleLogin, setToggleLogin] =  useState(false);
    const [toggleSignUp, setToggleSignUp] =  useState(false);
    

    const toggleLoginModel = () => {
        setToggleLogin(!toggleLogin);
       
    }
    const toggleSignUpModel = () => {
        setToggleSignUp(!toggleSignUp);
       
    }
    
    return(
        <>  
            
            <LoginModal show={toggleLogin} loginAction={toggleLoginModel} signUpAction={toggleSignUpModel}  />

            <SignUpModal show={toggleSignUp} loginAction={toggleLoginModel} signUpAction={toggleSignUpModel}/>

            <div className="w-[700px] mx-auto pt-20">
                {/* User Welcome Message */}
                <div className="max-w-[580px] mb-5">
                    <h2 className="text-[28px] leading-[34px] text-primary-100 mb-2 font-medium">Hello Jane</h2>
                    <p className=" text-base leading-6 text-primary-200">How are you doing today? Would you like to share something with the community 🤗</p>
                </div>
                <CreatePost modalAction={toggleLoginModel} />
                <SinglePost userImg={Ellipse2} updated={false} emoji={hand} username="Theresa Webb" />
                <SinglePost userImg={Ellipse3} updated={true} emoji={sad} username="Marvin McKinney"/>
            </div>
        </>
    )
}