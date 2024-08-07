import React from 'react'
import Whatuss from '../assets/Whatuss.svg'
import Rectangleuser from '../assets/Rectangleuser.svg'
import RectangleTest from '../assets/RectangleTest.svg'
import user1 from '../assets/user1.svg'
import user2 from '../assets/user2.svg'
import user3 from '../assets/user3.svg'
import Rating from '../assets/Rating.svg'
import Up from '../assets/Up.svg'
import Down from '../assets/Down.svg'
import Ramadan from '../assets/Ramadan.svg'
import giy from '../assets/giy.svg'
import giy2 from '../assets/giy2.svg'

const Testimonials = () => {
    return (

        <div className='flex flex-col mt-20'>

            <div className='flex flex-row gap-0 justify-center mx-auto translate-x-[13%] mb-28'>
                <img src={Whatuss} alt="Whatuss" className='w-[6%] h-[6%] -translate-y-[55%]' />
                <h1 className='text-5xl font-semibold z-50 tracking-tight text-center text-black'>Avis de nos utilisateurs</h1>
                <img src={RectangleTest} alt='RectangleTest' className='w-[32%] h-[35%] -translate-x-[101%] translate-y-[138%]' />
            </div>


            <div className='usercard mx-auto -translate-y-8'>

                <div className="flex flex-col bg-contain " style={{ backgroundImage: `url(${Rectangleuser})`, backgroundRepeat: 'no-repeat', }}>

                    <div className='flex flex-row justify-between'>
                        <h5 className='text-white mt-4 ml-8 text-sm font-medium'>Username name</h5>
                        <img src={user1} alt='user1' className='-translate-y-[35%] translate-x-[7%] w-[25%]' />
                    </div>

                    <div className='-translate-y-[200%] translate-x-[50%] self-center'>
                        <img src={Rating} alt='Rating' className='w-[80%]' />
                    </div>

                    <div className='text-white ml-6 -translate-y-[70%]'>
                        <img src={giy} className='mb-10 ' />
                    </div>

                    <div className=' -translate-y-[170%] mx-11'>
                        <h3 className=' text-white text-base'>Idealesi vous offre la possibilité de profiter de sa communauté </h3>
                    </div>

                    <div className='text-white ml-6 -translate-y-[90%] translate-x-[75%]'>
                        <img src={giy2} className='mb-10 ' />
                    </div>

                </div>

                <div className="flex flex-col bg-contain gap-0" style={{ backgroundImage: `url(${Rectangleuser})`, backgroundRepeat: 'no-repeat', }}>

                    <div className='flex flex-row justify-between'>
                        <h5 className='text-white mt-4 ml-8 text-sm font-medium'>Username name</h5>
                        <img src={user2} alt='user1' className='-translate-y-[35%] translate-x-[7%] w-[25%]' />
                    </div>

                    <div className='-translate-y-[200%] translate-x-[50%] self-center'>
                        <img src={Rating} alt='Rating' className='w-[80%]' />
                    </div>
                    <div className='text-white ml-6 -translate-y-[70%]'>
                        <img src={giy} className='mb-10 ' />
                    </div>

                    <div className=' -translate-y-[170%] mx-11'>
                        <h3 className=' text-white text-base'>Idealesi vous offre la possibilité de profiter de sa communauté </h3>
                    </div>

                    <div className='text-white ml-6 -translate-y-[90%] translate-x-[75%]'>
                        <img src={giy2} className='mb-10 ' />
                    </div>
                </div>



                <div className="flex flex-col bg-contain gap-0" style={{ backgroundImage: `url(${Rectangleuser})`, backgroundRepeat: 'no-repeat', }}>

                    <div className='flex flex-row justify-between'>
                        <h5 className='text-white mt-4 ml-8 text-sm font-medium'>Username name</h5>
                        <img src={user3} alt='user1' className='-translate-y-[35%] translate-x-[7%] w-[25%]' />
                    </div>

                    <div className='-translate-y-[200%] translate-x-[50%] self-center'>
                        <img src={Rating} alt='Rating' className='w-[80%]' />
                    </div>

                    <div className='text-white ml-6 -translate-y-[70%]'>
                        <img src={giy} className='mb-10 ' />
                    </div>

                    <div className=' -translate-y-[170%] mx-11'>
                        <h3 className=' text-white text-base'>Idealesi vous offre la possibilité de profiter de sa communauté </h3>
                    </div>

                    <div className='text-white ml-6 -translate-y-[90%] translate-x-[75%]'>
                        <img src={giy2} className='mb-10 ' />
                    </div>
                      
                    <div class=" w-[337px] h-[252px] rounded-[100%] bg-[#d4d7fc] filter blur-[60px] absolute right-0 -z-10 translate-x-56 translate-y-40 "></div>

                </div>
            </div>

            <div className='-translate-y-[140%] h-[5vh] mb-32'>
                <img src={Ramadan} alt='Ramadan' />
                <div class=" w-[337px] h-[252px] rounded-[100%] bg-[#d4d7fc] filter blur-[60px] absolute -left-32 -z-10 -translate-y-52  translate-x-12"></div>

            </div>

        </div>
    )
}

export default Testimonials