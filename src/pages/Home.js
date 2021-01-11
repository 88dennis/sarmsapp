import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSection2 from "../components/HeroSection2/HeroSection2";

import InfoSection from "../components/InfoSection/InfoSection";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

import { homeObjOne } from "../components/InfoSection/Data";
import { homeObjTwo } from "../components/InfoSection/Data";
import { homeObjThree } from "../components/InfoSection/Data";
import { homeObjFour } from "../components/InfoSection/Data";

const Home = () => {
  console.log(homeObjOne);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);

useEffect(()=>{
    let lastNameVar = localStorage.getItem("sarmscode");
if (!lastNameVar) {
    // alert('no stored')
    setUser(false);

} else {
    setUser(true);


}
},[])

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      {user && <Sidebar isOpen={isOpen} toggle={toggle} />}
      {user && <NavBar isOpen={isOpen} toggle={toggle} />}
      {!user && <HeroSection />}
      
      {user && <HeroSection2 />}

      {user && <br /> }

      {/* {user && <InfoSection {...homeObjFour} />} */}

      {user && <InfoSection {...homeObjOne} />}

      {user && <InfoSection {...homeObjTwo} />}

      {user &&  <InfoSection {...homeObjThree} />}

      {user && <Services />}


      <Footer />
    </div>
  );
};

export default Home;
