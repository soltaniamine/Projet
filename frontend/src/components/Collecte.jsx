import React from 'react'
import EA1 from '../assets/1EA.svg'
import Lamp from '../assets/Lamp.svg'
import PencilB from '../assets/PencilB.svg'
import { Button } from './ui/button'
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Link } from 'react-router-dom'

const Collecte = () => {

    return (
        <div className='flex flex-col bg-[#9BA3EB] w-[100vw] items-center -translate-y-1/3 h-[90vh] drop-shadow-lg' style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.35)' }}>

            <div className='flex flex-row justify-center items-center text-center gap-x-5 pt-1 mb-5'>
                <img src={EA1} alt='EA1' className='w-[70px] h-[95px]' />
                <h1 className='text-white text-center font-semibold text-4xl 'style={{fontFamily: `Product sans`}}>Collecte</h1>
            </div>

            <div className='text-center pb-8 -translate-y-[20%]'>
                <p className='text-2xl font-medium  'style={{fontFamily: `Product sans`}}>
                    Stimulez la créativité en utilisant des méthodes de brainstorming et de réflexion.<br />
                    ts. Spécifiquement axée sur la phase cruciale d'idéation, Idealesi offre une interfa
                </p>
            </div>

            <div className='w-3/4'>

                <div className="bg-[#DBDFFD] flex flex-col rounded-[3rem] h-3/4">
                    <h3 className='text-white font-semibold text-4xl pt-5 text-center'style={{fontFamily: `Product sans`}}>Faites naître vos idées lumineuses avec</h3>
                </div>

                <div className="flex flex-row gap-5 items-center justify-center -translate-y-[65%]">

                    <div className="flex flex-col drop-shadow-lg bg-[#FEF4D4] rounded-3xl w-[30%] pl-5" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)' }}>

                        <img src={Lamp} alt='Lamp' className='w-4/6 self-end' />

                        <div className='self-start w-[65%] -translate-y-1'>
                            <h3 className='text-[#494949] '>Step 1.1</h3>
                            <h1 className=' text-2xl font-bold  'style={{fontFamily: `Product sans`}}>Brainstorming</h1>
                            <p className=' font-medium'style={{fontFamily: `Product sans`}}>Stimulez la créativité en utilisant des méthodes de brainstorming .</p>
                        </div>

                        <div className='self-end pr-3 pb-5'>
                            <Link to="/guide#brains" >
                            <button className="rounded-full px-6 py-2 font-medium bg-[#F8CB2B] text-black w-fit transition-all shadow-[0px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                                Voir plus
                            </button>
                        
                            </Link>
                        </div>

                    </div>

                    <div className="flex flex-col drop-shadow-lg bg-[#FFDBF8] rounded-3xl w-[30%] pl-5" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)' }}>

                        <img src={PencilB} alt='PencilB' className='w-4/6 self-end' />

                        <div className='self-start w-[65%] -translate-y-1'>
                            <h3 className='text-[#494949]'>Step 1.1</h3>
                            <h1 className=' text-2xl font-bold'style={{fontFamily: `Product sans`}}>Brainwriting</h1>
                            <p className=' font-medium'style={{fontFamily: `Product sans`}}>Stimulez la créativité en utilisant des méthodes de brainstorming .</p>
                        </div>

                        <div className='self-end pr-3 pb-5'>
                            <button className="rounded-full px-6 py-2 font-medium bg-[#F08ADD] text-black w-fit transition-all shadow-[0px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                                Voir plus
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collecte