import React from 'react';


const Footer: React.FC = () => {
    return (
        <div className="main_footer not-xs not-sm">
            <div className="main_footer_section">
                <div className="main_footer_section_item">
                    <h2>POLÍTICAS</h2>
                    <p>Políticas de privacidad</p>
                    <p>Políticas de cambio</p>
                    <p>Políticas de envío</p>
                    <p>Términos y condiciones</p>
                    <p>Responsabilidad social</p>
                </div>
                <div className="main_footer_section_item">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Encuentra tu tienda</p>
                    <p>Contáctanos</p>
                    <p>Trabaja con nosotros</p>
                </div>
                <div className="main_footer_section_item">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Encuentra tu tienda</p>
                    <p>Contáctanos</p>
                    <p>Trabaja con nosotros</p>
                </div>
            </div>
            <div className="footer_coopyright">
                © Copyright Colombia. Todos los derechos reservados
            </div>
        </div>
    )
}

export default Footer;