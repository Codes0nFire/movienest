import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/searchSlice";
import { switchdarkmode } from "../utils/themeSlice";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";


const Header = () => {
  const isSearchPage=useSelector(store=>store.search.isSearchPage);
  const username=useSelector(store=>store.user?.displayName)
  const darkmode=useSelector(store=>store.theme.darkmode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user);

  const handleSearch = ()=>{
    dispatch(toggleSearch())
  }

  const onClickHandler = () => {
    // sign out api
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        //  console.log("signed out")
        //  navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("unable to signout");
      });
  };

  const themeChanger=()=>{
    dispatch(switchdarkmode())
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("This is user",user)
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        console.log("Login on auth state change");
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        console.log("Logout on auth state change");
        navigate("/");
      }
    });
  }, []);

  return currentUser ? (
    <header className="absolute top-0 w-full p-5 flex justify-between items-center z-10">
      {/* <img
        className="h-12"
        // src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        src=""
        alt="Some Logo"
      /> */}

      
<div className="flex gap-2 text-white">
        <p>Hello✌️</p>
        <p>{username}</p>
      </div>

      <button onClick={handleSearch} className={` ${darkmode ? "bg-white text-black" :"text-white bg-black"} flex justify-center items-center gap-1  
      rounded-md px-4 py-2 text-sm `}>
       {isSearchPage ? "Home" : "Search" }
       {!isSearchPage && <FaSearch  size={15} />}
      </button>

      
      <button
        onClick={onClickHandler}
        className={` ${darkmode ? "bg-white text-black" :"text-white bg-black"} rounded-md  px-4 py-2 text-sm `}
      >
        Sign Out
      </button>

      <button
        onClick={themeChanger}
        className={` ${darkmode ? "bg-white text-black" :"text-white bg-black"} 
        flex justify-center items-center gap-1 rounded-md  px-4 py-2 text-sm `}
      >
       {darkmode ? "Light Mode" :"Dark Mode " }
       {darkmode ?  <FaSun className="text-yellow-400" size={20} /> :<FaMoon  size={20} />}
      </button>
    </header>
  ) : (
    <></>
  );
};

export default Header;
