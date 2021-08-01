
import React, { useContext } from 'react';
import "./index.css"

/** Services */
import { Context } from '../../common/store';
import { setIsSidebarOpen } from '../../common/actions'

const Sidebar: React.FC = () => {

    const { store, dispatch } = useContext(Context);


    return (
        <div className="sidebar" id="mySidebar" style={{ display: store.isSidebarOpen ? "block" : "none" }}>
            <div className="close_sidebar">
                <span onClick={() => dispatch(setIsSidebarOpen(false))}>X</span>
            </div>
            <div className="sidebar_elements">
                <p>Hombre</p>
                <p>Mujer</p>
                <p>Junior</p>
                <p>Niños</p>
                <p>Accesorios</p>
                <p>Ofertas</p>
            </div>
        </div>

    )
}

export default Sidebar;