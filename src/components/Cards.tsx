import profile from "../assets/profile.png"
import user from '../assets/user.png'
import group from '../assets/group.png'
const Cards = () => {
    return (
        <div className='w-full py-[4cm] px-3 bg-white'>
            <div className='max-w-[1040px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                    <img className='w-20 mx-auto mt-[0rem] bg-white ' src={profile} alt="" />
                    <h2 className=' text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$130</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8' >1 Granted User</p>
                        <p className='py-2 border-b mx-8' >Send up to 2GB</p>
                    </div>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]" >Start Trial</button>
                </div>
                <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-200'>
                    <img className='w-20 mx-auto mt-[0rem] bg-transparent ' src={user} alt="" />
                    <h2 className=' text-2xl font-bold text-center py-8'>Partnership</h2>
                    <p className='text-center text-4xl font-bold'>$200</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'> 1 TB Storage</p>
                        <p className='py-2 border-b mx-8' >2 Granted User</p>
                        <p className='py-2 border-b mx-8' >Send up to 10GB</p>
                    </div>
                    <button className="text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-[#00df9a]" >Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                    <img className='w-20 mx-auto mt-[0rem] bg-white ' src={group} alt="" />
                    <h2 className=' text-2xl font-bold text-center py-8'>Group Account</h2>
                    <p className='text-center text-4xl font-bold'>$300</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                        <p className='py-2 border-b mx-8' >5 Granted User</p>
                        <p className='py-2 border-b mx-8' >Send up to 20GB</p>
                    </div>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]" >Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
