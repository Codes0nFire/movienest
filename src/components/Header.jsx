import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/searchSlice";
import { switchdarkmode } from "../utils/themeSlice";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { toast } from "react-toastify";

const Header = () => {
  const isSearchPage = useSelector(store => store.search.isSearchPage);
  const username = useSelector(store => store.user?.displayName);
  const darkmode = useSelector(store => store.theme.darkmode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user);

  const handleSearch = () => {
    dispatch(toggleSearch());
  };

  const onClickHandler = () => {
    // sign out api
    let confirmation=confirm("Are you sure you want to signout?")
    if(confirmation){

      let confirmit=confirm("Sach me kardu signout? 🙁")
      if(confirmit){
        signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        // navigate("/");
        toast.success("Signout successful",{position: "top-center",})
      })
      .catch((error) => {
        // An error happened.
      });
    }
      }
  };

  const themeChanger = () => {
    dispatch(switchdarkmode());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return currentUser ? (
    <header className="absolute top-0 w-full lg:p-5 flex justify-between items-center z-10 flex-col-reverse lg:flex-row lg:gap-4 gap-2 ">
      <div
        className={`flex gap-2 px-2 py-1 rounded-md ${darkmode ? "text-white" : "text-black bg-white"} lg:flex-row flex-col lg:items-center`}
      >
        <p>Hello{darkmode ? "👋" : "✌️"}{username}</p>
        
      </div>

      <div className="flex gap-10 lg:gap-6 mt-4 lg:mt-0">
        <button
          onClick={handleSearch}
          className={` ${darkmode ? "bg-white text-black" : "text-white bg-black"} flex justify-center items-center gap-1 rounded-md p-2 sm:px-4 sm:py-2 text-sm lg:text-base`}
        >
          {isSearchPage ? "Home" : "Search"}
          {!isSearchPage && <FaSearch size={15} />}
        </button>

        <button
          onClick={onClickHandler}
          className={` ${darkmode ? "bg-white text-black" : "text-white bg-black"} rounded-md p-2 sm:px-4 sm:py-2 text-sm lg:text-base`}
        >
          Sign Out
        </button>

        <button
          onClick={themeChanger}
          className={` ${darkmode ? "bg-white text-black" : "text-white bg-black"} flex justify-center items-center gap-1 rounded-md p-2 sm:px-4 sm:py-2 text-sm lg:text-base`}
        >
          {darkmode ? "Light Mode" : "Dark Mode"}
          {darkmode ? <FaSun className="text-yellow-400" size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </header>
  ) : (
    <></>
  );
};

export default Header;
