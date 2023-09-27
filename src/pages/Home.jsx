import CreatePost from "../components/CreatePost";

export default function Home(){
    return(
        <div className="w-[700px] mx-auto">
            {/* User Welcome Message */}
            <div className="max-w-[580px] mb-5">
                <h2 className="text-[28px] leading-[34px] text-primary-100 mb-2 font-medium">Hello Jane</h2>
                <p className=" text-base leading-6 text-primary-200">How are you doing today? Would you like to share something with the community 🤗</p>
            </div>
            <CreatePost/>
        </div>
    )
}