import React from 'react'
import { onAuthStateChanged ,signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import {useEffect} from 'react'
import {addUser , removeUser} from "../utils/userSlice"
import { auth } from '../utils/firebase';
import { Logo, Supp_Lang } from '../constants/URL';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLang} from '../utils/configSlice';


const Header = () => {
  const navigate=useNavigate();
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  const handleSignout =() =>{
    signOut(auth).then(()=>{
    })
  }
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , email , displayName , photoURL} = user;
          dispatch(
            addUser({
              uid: uid , 
              email:email , 
              displayName: displayName , 
              photoURL: photoURL}));
        navigate("/browse")
        
      } 
        
        else {
            dispatch(removeUser())
            navigate("/")
        }
      })

      return () => unsubscribe();
},[])

const handleGptSearch = () => {
   dispatch(toggleGptSearchView());
}

const handleLang = (e) => {
  dispatch(changeLang(e.target.value))
}

  return (
  <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img className="h-20 w-auto mx-20 my-3 flex" src={Logo} alt="Logo"/>
      {user && (
        <div className='flex p-5'>
        {showGptSearch && ( 
          <select className='bg-black text-white -py-4 m-4' onChange={handleLang}>
          {Supp_Lang.map((lang) => (
             <option key={lang.identifier} value={lang.identifier}> 
              {lang.name}
            </option>
            ))}
        </select>
        )}
        <button onClick={handleGptSearch} className='bg-purple-500 text-white -py-4 m-4'>{showGptSearch ? "Homepage " : "Gpt-Seach"} </button>
        <img className="w-12 h-12" src={user?.photoURL} alt="profile"/>
        <button onClick={handleSignout}className='font-bold text-white'>(Sign Out)</button>
      </div>)}
  </div>
)
}

export default Header