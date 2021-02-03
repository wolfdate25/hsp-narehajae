import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {LeftPanelData} from './LeftPanelData';
import SubMenu from './SubMenu';
import {IconContext} from 'react-icons/lib';

const Nav = styled.div`
  background: #a0d911;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 15px;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #a0d911;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const useSlider = () => {
    const [sidebar, setSidebar] = useState(false);

    return {
        sidebarStatus: sidebar,
        setSidebar: setSidebar
    }
}

const LeftPanel = () => {
    const {sidebarStatus, setSidebar} = useSlider();

    const toggleSidebar = () => setSidebar(!sidebarStatus);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={toggleSidebar}/>
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebarStatus}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={toggleSidebar}/>
                        </NavIcon>
                        {LeftPanelData.map((item, index) => {
                            return <SubMenu item={item} key={index} toggleEvent={toggleSidebar}/>;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default LeftPanel;
