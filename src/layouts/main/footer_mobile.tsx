import React from 'react';


const FooterMobile: React.FC = () => {
    return (
        <div className="main_footer_mobile not-md not-lg not-xl not-xxl">
            <div className="main_footer_mobile_section">
                <div className="main_footer_mobile_section_item">
                    <h2>POLÍTICAS</h2>
                </div>
                <div className="main_footer_mobile_section_item">
                    <h2>SOBRE NOSOTROS</h2>
                </div>
                <div className="main_footer_mobile_section_item">
                    <h2>MEDIOS DE PAGO</h2>
                </div>
            </div>
            <div className="footer_mobile_coopyright">
                © Copyright Colombia. Todos los derechos reservados
            </div>
        </div>
    )
}

export default FooterMobile;