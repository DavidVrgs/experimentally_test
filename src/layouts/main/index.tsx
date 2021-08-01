import React from 'react';
import Nabvar from "./navbar"
import Footer from "./footer"
import Sidebar from './sidebar';
import FooterMobile from './footer_mobile';

const Main: React.FC = ({ children }) => {
    return (
        <div>
            <Sidebar/>
            <Nabvar />
            {children}
            <Footer/>
            <FooterMobile/>
        </div>
    )
}

export default Main;