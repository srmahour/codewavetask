import chat from '../assets/chat.png'

export default function CreatePost(){
    return(
        <section className=" bg-primary-500 border-2 border-solid border-primary-400 rounded-lg p-5 h-[223px] mb-4">
            <h3 className="text-lg leading-[22px] font-medium text-primary-100 mb-4">Create post</h3>
            <div className="relative mb-4">
                <div className=" h-12 w-12 bg-primary-500 absolute rounded-full top-4 left-4 flex items-center justify-center"><img src={chat} alt='chat' height={18} width={18} /></div>
                <textarea placeholder="How are you feeling today?" className="block w-full pt-[26px] pb-4 pr-4 pl-20 h-[78px] rounded-lg bg-primary-600 text-primary-200 leading-normal text-base resize-none"></textarea>
            </div>
            <button type="button" className="bg-secondary h-[43px] w-[111px] text-white text-base leading-5 rounded block ml-auto font-medium">Post</button>
        </section>
    )
}

