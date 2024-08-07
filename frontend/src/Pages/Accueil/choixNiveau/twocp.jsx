import React, { useEffect, useState } from "react";
import axios from "axios";
import cp from '../../../assets/Acceuil/choixniveau/cp.svg'
import './onecp.css';
 
const Twocs = () => {
   const [modules, setModules] = useState([]);
   const [firstColumnModules, setFirstColumnModules] = useState([]);
   const [secondColumnModules, setSecondColumnModules] = useState([]);

   useEffect(() => {
     const fetchModules = async () => {
       try {
         const response = await axios.get('http://127.0.0.1:5000/liste_module');
         setModules(response.data.modules);
       } catch (error) {
         console.log(error.response);
       }
     };
 
     fetchModules();
   }, []);

   useEffect(() => {
     const filteredModules = modules.filter(module => module.niveau_id === 2);

     if (filteredModules.length > 8) {
       setFirstColumnModules(filteredModules.slice(0, 8));
       setSecondColumnModules(filteredModules.slice(8));
     } else {
       setFirstColumnModules(filteredModules);
       setSecondColumnModules([]);
     }
   }, [modules]);
 
   const Module = ({ nom_module }) => {
     return (
       <li className="flex items-center font-semibold hover:transform hover:-translate-y-1 hover:scale-80">
         <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
         {nom_module}
       </li>
     );
   };
 
   return (
     <div>
       <div className=" mt-[0.1%] flex items-center ">
         <div className="w-1/5 border-t border-black mr-[4%] ml-[18%]"></div>
         <div className="  flex justify-center mb-[2%] mt-[2%]  " >
           <h1 className="  text-2xl  font-semibold  ">Cycle préparatoire</h1>
         </div>
         <div className="w-1/5 border-t border-black ml-[4%] mr[15%]"></div>
       </div>
 
       <div className="mr-[3%] ml-[4%]  mb-[5%] rounded-lg border  border-dashed  border-black border-4 relative">
         <div>
           <h1 className="  z-10 text-2xl  font-bold ml-[48%] absolute mt-[0.3%]  ">2 CP</h1>
           <img className="    w-[12%] ml-[44%] mb-[9%] " src={cp} alt="CP" />
         </div>
         <div className="mt-[8.5%] border-l border-solid border-black absolute h-[76%] top-0 left-[50%] "></div>
         <div className=" grid grid-cols-2 gap-4 mt-[-1.2%] ">
           <div className="mt-[-11%] ml-[7%] transition-transform ease-in-out duration-500 ">
             <ul className="space-y-4 py-4">
               {firstColumnModules.map(module => (
                 <Module key={module.module_id} nom_module={module.nom_module} />
               ))}
             </ul>
           </div>
           <div className="mt-[-11%] ml-[7%] transition-transform ease-in-out duration-500 ">
             <ul className="space-y-4 py-4">
               {secondColumnModules.map(module => (
                 <Module key={module.module_id} nom_module={module.nom_module} />
               ))}
             </ul>
           </div>
         </div>
       </div>
     </div>
   );
}
 
export default Twocs;


// return ( 
//    <div>
//    <div className=" mt-[0.1%] flex items-center ">
//       <div className="w-1/5 border-t border-black mr-[4%] ml-[18%]"></div>
//       <div className="  flex justify-center mb-[2%] mt-[2%]  " >
//         <h1 className="  text-2xl  font-semibold  ">Cycle préparatoire</h1>
//       </div>
//       <div className="w-1/5 border-t border-black ml-[4%] mr[15%]"></div>
//       </div>
      
      
//    <div className="mr-[3%] ml-[4%]  mb-[5%] rounded-lg border  border-dashed  border-black border-4 relative"> 
                 
//                     <div>
//                       <h1 className="  z-10 text-2xl  font-bold ml-[48%] absolute mt-[0.3%]  ">2 CP</h1>
//                       <img className="    w-[12%] ml-[44%] mb-[9%] " src={cp} />
//                     </div>
//                     <div className="mt-[8.5%] border-l border-solid border-black absolute h-[76%] top-0 left-[50%] "></div>
                   
//                     <div className=" grid grid-cols-2 gap-4 mt-[-1.2%] ">
//                     <div className="mt-[-11%] ml-[7%] ">
//                        <ul className="space-y-4 py-4">
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
//                           ELECT - Electricité                           </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-orange-500 mr-3"></div>
//                           BWEB - Bureautique et Web
//                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-gray-500 mr-3"></div>
//                           ANG1 - Anglais 1                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-pink-500 mr-3"></div>
//                           ANA1 - Analyse mathématique 1                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
//                           ALSDS - Algorithmique et Structures de Données Statiques                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
//                           ARCHI1 - Architecture de l_ordinateur 1                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
//                           ALG1 - Algèbre 1                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
//                           SYST1 - Introduction au Système d_exploitation 1                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
//                           TEE - Techniques d_Expression Ecrite
//                        </li>
//                          </ul>
//                </div>
//                <div className="mt-[-11%] ml-[7%] ">
//                        <ul className="space-y-4 py-4">
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
//                           ALSDD - Algorithmique et Structures de Données Dynamiques                          </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-orange-500 mr-3"></div>
//                           SYST2 - Introduction au Système d_exploitation 2
//                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-gray-500 mr-3"></div>
//                           TEO - Techniques d_Expression Orale                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-pink-500 mr-3"></div>
//                           ALG2 - Algèbre 2                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
//                           ANA2 - Analyse mathématique 2                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
//                           ELECF1 - Electronique Fondamentale 1                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
//                           MECA - Mécanique du point                        </li>
//                        <li className="flex items-center font-semibold">
//                           <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
//                           ANG1 - Anglais 1                        </li>
                      
//                          </ul>
//                      </div>
//                      </div>

//                     </div>
                    
//                     </div>
              
//     );