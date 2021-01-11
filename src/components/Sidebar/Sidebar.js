import React, { useEffect, useState } from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import { useHistory } from "react-router-dom";

const Sidebar = ({isOpen, toggle}) => {
    const [user, setUser] = useState(false);

    const history = useHistory();

    useEffect(() => {
        let lastNameVar = localStorage.getItem("sarmscode");
        if (!lastNameVar) {
          // alert('no stored')
          setUser(false);
        } else {
          setUser(true);
        }
      }, []);
    
  const handleSignOut = () => {
    setUser(false);
    let path = `/signin`;
    localStorage.removeItem("sarmscode");
    // window.location.reload();
    history.replace(path);
    console.log(history);
    toggle();
  };
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Family Rooms
                    </SidebarLink>
                    <SidebarLink to="preview" onClick={toggle}>
                        Preview
                    </SidebarLink>
                    {/* <SidebarLink to="signup" onClick={handleSignOut}>
                        Signup
                    </SidebarLink> */}
          
                </SidebarMenu>

                {!user && <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>}

                {user && <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={handleSignOut}>
                        Sign Out
                    </SidebarRoute>
                </SideBtnWrap>}


            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
