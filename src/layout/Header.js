import React from 'react'
import { Link } from 'react-router-dom'

import './styles/header.css'

function Header() {

    const handleContact = () => window.open('https://wa.link/1o4um9')

    return (

        <header className={`__header`}>

            <div className='__content_header'>

                <div className='__col __col_logo'>

                    <Link to={'/'} className='__a_logo'>
                        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7804 1.03359L12.0413 8.57881C12.0413 8.57881 14.926 7.13178 17.8106 7.13178C20.6953 7.13178 23.8891 8.47545 23.8891 8.47545L19.253 1.03359C19.253 1.03359 18.6452 0 18.0167 0C17.3882 0 16.7804 1.03359 16.7804 1.03359Z" fill="black"/>
                            <path d="M0.399445 28.8372L5.03556 21.8088C5.03556 21.8088 5.50796 27.5761 13.1745 28.2171C26.8768 29.3626 26.4647 24.4961 26.4647 24.4961C25.5375 17.5711 12.3503 23.4625 5.85976 18.2946L1.22364 11.4729C1.22364 11.4729 0.70852 10.8527 0.605495 10.2326C0.450957 9.30233 1.42969 9.30233 1.42969 9.30233H35.3249C35.3249 9.30233 35.84 9.30233 35.84 10.2326C35.84 10.4393 35.3249 11.3695 35.3249 11.3695L30.4827 18.3979C30.4827 18.3979 30.3783 17.1545 30.0706 16.4341C29.7629 15.7137 29.0404 14.5736 29.0404 14.5736C29.0404 14.5736 26.8768 11.3695 18.1197 11.3695C8.31286 11.3695 9.56866 16.2671 9.56866 16.2671C9.69726 17.7185 10.805 19.0181 15.132 19.3282C22.6528 19.0181 28.8485 19.4546 31.3069 23.4625L34.7067 28.7339C34.7067 28.7339 35.5309 29.7674 35.0158 30.491C34.8686 30.6977 32.8523 30.6977 32.8523 30.6977H1.32667C1.32667 30.6977 0.296419 30.801 0.0903703 30.2842C-0.228645 29.4841 0.399445 28.8372 0.399445 28.8372Z" fill="black"/>
                            <path d="M19.0469 39.1731L23.8891 31.4212C23.8891 31.4212 21.2105 32.7649 17.8106 32.7649C14.4108 32.7649 11.8352 31.4212 11.8352 31.4212L16.7804 39.1731C16.7804 39.1731 17.3102 40 17.9137 40C18.5172 40 19.0469 39.1731 19.0469 39.1731Z" fill="black"/>
                        </svg>
                    </Link>

                </div>

                <div className='__col __col_menu'>

                    <ul className='__nav'>
                        <li className='__nav_li'>
                            <Link to={'/works/all'} className='__nav_li_a'>
                                <span>Categorias</span>
                            </Link>
                            <ul className='__sub_nav'>
                                <li className='__sub_nav_li'>
                                    <Link to={'/works/logos'} className='__sub_nav_li_a'>
                                        <span className='__icio'></span>
                                        <span>Logos</span>
                                    </Link>
                                </li>
                                <li className='__sub_nav_li'>
                                    <Link to={'/works/branding'} className='__sub_nav_li_a'>
                                        <span className='__icio'></span>
                                        <span>Branding</span>
                                    </Link>
                                </li>
                                <li className='__sub_nav_li'>
                                    <Link to={'/works/photos'} className='__sub_nav_li_a'>
                                        <span className='__icio'></span>
                                        <span>Fotos</span>
                                    </Link>
                                </li>
                                <li className='__sub_nav_li'>
                                    <Link to={'/works/artists'} className='__sub_nav_li_a'>
                                        <span className='__icio'></span>
                                        <span>Artistas</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='__nav_li'>
                            <Link to={'/pricing'} className='__nav_li_a'>
                                <span>Precios</span>
                            </Link>
                        </li>
                        <li className='__nav_li'>
                            <Link to={'/about'} className='__nav_li_a'>
                                <span>Nosotros</span>
                            </Link>
                        </li>
                    </ul>

                </div>
                
                <div className='__col __col_subs'>

                    <button className='__btn __btn_suscribe' onClick={handleContact}>Contáctanos</button>

                </div>

            </div>

        </header>

    )

}

export default Header