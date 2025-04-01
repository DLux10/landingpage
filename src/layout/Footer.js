import { Link } from "react-router-dom";
import './styles/footer.css'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

import logo from '../static/img/logo-svg.svg'
import { useState } from "react";

export default function Footer () {

    const [ message, setMessage ] = useState('Hola, quisiera más información por favor');
    const [ error, setError ] = useState(false);

    const year = new Date().getFullYear();

    const handleChangeMessage = (message) => {
        setError(false)
        setMessage(message)
    }

    const handleSendMessage = () => {
        if (message === undefined) {
            setError(true)
        } else {
            const phoneNumber = '+51983508695';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
    };      

    return (

        <footer className="__footer">

            <div className="__content_footer">

                <div className="__row_footer __row_footer_A">

                    <div className="__col __col_A">

                        <div className="__box_us">

                            <div className="__log">
                                <img src={logo} alt="Logo" />
                            </div>
                            <h2>D'LUX Design</h2>

                            <p className="__resum">
                                Inspirados por el diseño excepcional, en D'LUX ofrecemos diseños exclusivos 
                                de identidad visual, branding y recursos creativos que elevan las marcas a otro nivel, 
                                trabajando de manera remota con clientes de todo el mundo.
                            </p>

                            <div className="__ntw">
                                <ul>
                                    <li><Link to={'https://www.facebook.com/dluxdesign12'} target="_blank"><IconBrandFacebook stroke={'#181818'} strokeWidth={1.5}/></Link></li>
                                    <li><Link to={'https://www.instagram.com/dlux_design10'} target="_blank"><IconBrandInstagram stroke={'#181818'} strokeWidth={1.5}/></Link></li>
                                    <li><Link to={'https://www.tiktok.com/@dluxdesign12'} target="_blank"><IconBrandTiktok stroke={'#181818'} strokeWidth={1.5}/></Link></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="__col __col_B">

                        <div className="__form">

                            <p className="__txt __txt_1">Sabemos que te gusto nuestro trabajo</p>
                            <p className="__txt __txt_2">Escríbenos y despegaremos tu marca al siguiente nivel!</p>

                            <div className="__form_group">
                                <input type="text" className={`__entry ${error ? '__entry_error' : ''}`} value={message} placeholder="Escríbenos un mensaje..." aria-placeholder="Escríbenos un mensaje..." onChange={(e) => handleChangeMessage(e.target.value)} />
                                <button className="__btn_send" onClick={handleSendMessage}>Despegar</button>
                            </div>

                            <p className="__spam">*No esperes más sabemos que te gusto lo que viste</p>

                        </div>

                    </div>

                </div>

                <div className="__row_footer __row_footer_B">
                    <div className="__col __col_A">
                        <nav className="__nav_min">
                            <ul className="__ul_nav_min">
                                <li className="__li_nav_min">
                                    <Link to={'/'}>Inicio</Link>
                                </li>
                                <li className="__li_nav_min">
                                    <Link to={'/about'}>Nosotros</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="__col __col_B">
                        <p>© {year} D'LUX Design, All rights reserved.</p>
                    </div>
                </div>

            </div>

        </footer>

    )

}