import Desktop  from '../assets/Desktop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
<img className='w-[500px] mx-auto my-4' src={Desktop} alt="/" />
<div className='flex flex-col justify-center p-4'>
    <p className='text-[#00df9a] md:text-4xl sm:text-3xl text-2xl font-bold'>DATA ANALYTICS DASHBOARD</p>
    <h1 className='md:text-3xl sm:text-3xl text-xl font-bold py-2'>Manage Data Analytics Centrally</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae voluptatum ratione cumque architecto corporis veniam magnam et possimus aspernatur, sit alias in facere id saepe, asperiores excepturi velit. Nemo.</p>
 <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Get Started</button>
</div>
      </div>
    </div>
  )
}

export default Analytics
