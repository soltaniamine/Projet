import React, { useState, useEffect } from 'react';
import Sidebar from "../Home/Sidebar";
import axios from 'axios';
import photo from "../../../assets/Acceuil/TypeProjet/profile.png";
import cercle1 from '../../../assets/Acceuil/clubs/cercle1.svg';
import triangle from '../../../assets/Acceuil/clubs/triangle.svg';
import cercle2 from '../../../assets/Acceuil/clubs/cercle2.svg';
import iconevents from '../../../assets/Acceuil/events/iconevents.svg';
import threelines from '../../../assets/Acceuil/clubs/threelines.svg';
import gdgbar from '../../../assets/Acceuil/events/gdgbar.svg';
import eventpic from '../../../assets/Acceuil/events/eventpic.svg';
import line from '../../../assets/Acceuil/events/line.svg'
import './events.css'
import { Link, useLocation } from 'react-router-dom';
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";
import ConfirmationAjoutProject2 from "../Home/ConfirrmationAjoutProjet2"
const Events = ({ buttonColor }) => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const club_id = params.get('cid');
    const user_id = params.get('uid');
    const Tech_idiation = params.get('tech');
    const [showNotification, setShowNotification] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
  
  
    const handleButtonClick = () => {
      setShowNotification(prevState => !prevState);
    };
    const handleProfileClick = () => {
      setShowProfile(prevState => !prevState);
    };
    const [events, setEvents] = useState([]);
    const [clubs, setClubs] = useState([]);
    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        const getEvents = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:5000/liste_event');
            setEvents(response.data.events);
            console.log(response.data.events);
          } catch (error) {
            console.log(error.response);
          }
        };
        const getClubs = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:5000/liste_club');
              setClubs(response.data.events);
              console.log(response.data.events);
            } catch (error) {
              console.log(error.response);
            }
          };
        getEvents();
        getClubs();
      }, []);

      const [roomId, setRoomId] = useState('');
   const [roomIdUpdated, setRoomIdUpdated] = useState(false);
   const newProject = async () => {
     try {
       const response = await axios.post('http://127.0.0.1:5000/new_project', {
         nom: 'club project', 
         club_id: club_id,
         Tech_idiation: Tech_idiation,
         user_id: user_id
       });
       setRoomId(response.data.projet_id);
       setRoomIdUpdated(true); 
     } catch (error) {
       console.error('Failed to create project or retrieve project ID:', error.response || error);
     }
   }
   const handleClick = async () => {
    await newProject();
  };
      useEffect(() => {
        if (events && events.length > 0) {
            setItems(events.map((eve) => (
                eve.Club_ID == club_id ? (
                  !roomIdUpdated ?
                    
                      <div onClick={()=>{handleClick();handleDeleteClick();}} className=' cursor-pointer'  >
                        <EventsElement   photo={eve.photo} nom={eve.nom} />
                      </div>
                    :
                    <ConfirmationAjoutProject2
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    uid={user_id}
                    tech={Tech_idiation}
                    pid={roomId}
                    cid={eve.Club_ID}
                  />
                ) : null 
            )));
        }
      }, [roomIdUpdated,isModalOpen,events]);
      
    const [pic, setPic] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

    useEffect(() => {
        if (clubs && clubs.length > 0) {
            clubs.map((clb) => {
                if (clb.Club_ID === club_id) {
                    setPic(clb.photo);
                }
            });
        }
    }, [clubs]);
    const EventsElement = ({photo, nom }) => {
        return (
            <div className="element  mb-4 ml-9 mb w-[91%] h-[35%] w bg-gray-300 rounded-lg drop-shadow-md">
                <img className="eventpic pt-1 w-[10.25%] ml-6 top-1 " src={photo !== null ? photo : photo = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="eventpic" />
                <h1 className='eventname absolute top-0 mt-8 ml-36 text-[22px] ' style={{ fontFamily: 'Product Sans' }} >{nom}</h1>
            </div>
        )
    }
    const [nom, setNom] = useState()
    const getClubName = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/get_club_name', {club_id:club_id});
        setNom(response.data.Nom);
        console.log(response.data.Nom);
      } catch (error) {
        console.log(error.response);
      }
    };
    useEffect(() => {
      getClubName();
  }, []);
    return (
        <div className="grid grid-cols-6 bg-mypurple mt-[1,1%] ">
            <Sidebar className="col-span-1" buttonColor={buttonColor}></Sidebar>


            <div className=" bg-mypurple h-screen col-span-5  mt-[1,1%] ">
                <div className="bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl">
                    <div className="relative w-full h-[9%] border-b-2 text-black  flex justify-end  items-center ">
                        <div className=" w-32 flex  mt-2 items-center justify-around mr-5 mb-3 ">

                        
              <button onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>
                 {showNotification && 
                 <div className="absolute right-4 top-16 notification z-50 h-[20%] w-[40%] ">
                  <Notification/>
                  </div>
                  }
                <button onClick={handleProfileClick}>
                    <div className="w-10 h-10 overflow-hidden rounded-full ">
                      <img src={photo} alt="" />
                    </div>
                </button>
                {showProfile && 
                 <div className="absolute  ml-[76%] mt-[18%]  z-50 h-[20%] w-[100%] ">
                  <Profilee/>
                  </div>
                }
            </div>
          </div> {/* hada howa div t3k lina */}

                    <div className="eventslist w-[96,5%] h-[90%] ml-3 mr-3 mt-3">

                        <div className="header flex items-start relative">

                            <img src={threelines} className="absolute  w-1° h-10 top-0 left-0 " />

                            <div className=" mt-5 ml-6   w-full  h-24 border bg-white mx-2 rounded-lg" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', borderWidth: '3.25px', borderColor: '#8C95EB' }}>

                                <img src={iconevents} className="absolute top-1/2 right-0 transform -translate-y-1/2 mt-2 h-[60%] mr-7 " alt="Icon" />

                                <div className="title flex flex-col items-start absolute left-16 top-1/4 bottom-0 mb-2 ml-2">
                                    <h1 className="z-10 text-3xl font-semibold" style={{ fontFamily: 'Product Sans' }}>Projet Club</h1>
                                </div>

                                <img src={cercle1} className="absolute top-20 ml-28 mt-0 left-96 w-10 h-10" alt="smallcircle1" />
                                <img src={cercle2} className="absolute top-10 ml-5 w-10 h-full" alt="smallcircle2" />
                                <img src={triangle} className="absolute top-10 left-48 w-10 h-20" alt="smalltriangle" />
                                <img src={triangle} className="absolute top-6  left-96 w-10 h-20 ml-96 " alt="smalltriangle2" />

                            </div>
                        </div> {/* hna tbda khdmatk 2eme lina */}
                        <div className=" relative  pl-10 pt-2  ml-12 mt-7 mr-12 h-[70%] w-[90%] bg-gray-100 rounded-[37px] drop-shadow-md">
                            <div className="topbar absolute top-0 left-0 w-full h-[15%] rounded-t-[37px] drop-shadow-md ">
                                <img src={pic} className="w-full h-full object-cover rounded-t-[37px]" alt="gdgtopbar" />
                                <h1 className="absolute inset-0 flex justify-center items-center text-[25px]   text-black " style={{ fontFamily: 'Product Sans' }}>Evènements de {nom}</h1>
                            </div>

                            <div className=" eventlist bg-red absolute left-0  right-0 mt-14 h-[84%] rounded-b-3xl">
                                <div className="selected relative  hover:drop-shadow-md">
                                    <h1 className="text-left ml-7 mt-2 " style={{ fontFamily: 'Product Sans' }} >Liste évènements</h1>
                                    <img className='ml-8 ' src={line} alt="blueline " />

                                </div>
                                <div className="elementslist overflow-auto  h-[82%] rounded-b-3xl mt-5">
                                    {items}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}



export default Events