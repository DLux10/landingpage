import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

import './styles/main.css'

export default function RootLayout () {

    return (

        <>
        
            <Header/>

            <main className='__main'>
                <div className='__box_main'>
                    <Outlet/>
                </div>
            </main>

            <Footer/>

        </>

    )

}