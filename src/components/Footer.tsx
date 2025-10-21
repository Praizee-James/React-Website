import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gaap-8 text-gray-300 bg-black'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, explicabo necessitatibus. Doloremque reprehenderit quisquam natus </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />

                </div>
            </div>
            <div className='lg:col-span-2 m-4 flex justify-between mt-6' >
                <div>
                    <h6 className='font-medium text-gray-400' >Solutions</h6>
                    <ul>
                        <li className='py-2 test-sm' >Analytics</li>
                        <li  className='py-2 test-sm' >Marketing</li>
                        <li  className='py-2 test-sm' >Commerce</li>
                        <li  className='py-2 test-sm' >Insights</li> 
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400' >Support</h6>
                    <ul>
                        <li className='py-2 test-sm' >Pricing</li>
                        <li  className='py-2 test-sm' >Documentation</li>
                        <li  className='py-2 test-sm' >Guides</li>
                        <li  className='py-2 test-sm' >Status</li> 
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400' >Company</h6>
                    <ul>
                        <li className='py-2 test-sm' >About</li>
                        <li  className='py-2 test-sm' >Blog</li>
                        <li  className='py-2 test-sm' >Jobs</li>
                        <li  className='py-2 test-sm' >Press</li> 
                        <li  className='py-2 test-sm' >Career</li> 
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400' >Legal</h6>
                    <ul>
                        <li className='py-2 test-sm' >Claim</li>
                        <li  className='py-2 test-sm' >Policy</li>
                        <li  className='py-2 test-sm' >Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
