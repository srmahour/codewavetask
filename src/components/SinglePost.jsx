import notification from '../assets/notification.png'

export default function SinglePost({userImg, updated, emoji, username}){
    return(
        <section className=" bg-primary-500 border-2 border-solid border-primary-400 rounded-lg p-5 h-[250px] mb-4">
            {/* user details */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                    <img src={userImg} alt="User name" width={44} height={44} className="rounded-full object-cover h-11 w-11" />
                    <div className="pl-4">
                        <h4 className="text-base leading-5 text-primary-100 mb-1">{username}</h4>
                        <ul className="flex items-center text-primary-200 text-sm leading-4">
                            <li className="list-none">5mins ago</li>
                            <li className={`pl-[5px] flex items-center ${ updated ? 'flex' : 'hidden' }`}> <span className=" h-1 w-1 bg-primary-200 inline-block rounded-lg mr-[5px]"></span> Edited</li>
                        </ul>
                    </div>
                </div>
                {/* action dots */}
                <div className="h-5 w-5 flex items-center justify-between cursor-pointer">
                    <span className="block h-[3px] w-[3px] bg-primary-100 rounded-lg"></span>
                    <span className="block h-[3px] w-[3px] bg-primary-100 rounded-lg"></span>
                    <span className="block h-[3px] w-[3px] bg-primary-100 rounded-lg"></span>
                </div>
            </div>
            {/* post box */}
            <div className="relative bg-primary-600 rounded-lg p-4 flex">
                <div className="h-12 w-12 bg-primary-500 rounded-full flex items-center justify-center"><img src={emoji} alt='emoji' height={18} width={18} /></div>
                <div className="w-[551px] pl-4 text-primary-200 text-base leading-6">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            {/* notification */}
            <div className="flex items-center mt-[14px]">
                <img src={notification} alt="notification" width={20} height={20} className="h-5 w-5" />
                <p className="text-primary-200 text-sm leading-4 pl-2 font-medium">24 comments</p>
            </div>
        </section>
    )
}