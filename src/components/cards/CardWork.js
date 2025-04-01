import './styles/cardwork.css'

export default function CardWork ({ expanded }) {

    return (

        <div className="__card">

            <div className='__card_img'>
                <img src='https://scontent.flim1-1.fna.fbcdn.net/v/t39.30808-6/457322965_122159351684108327_1405490634105634626_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lh_h_18ZtcIQ7kNvgGU9Fiw&_nc_ht=scontent.flim1-1.fna&_nc_gid=AQburSnmWYIDM2mNS8dQpn0&oh=00_AYAYzErYX81KLx4Rw3UeOIGy6sS99R76PB1LHcgI6phceQ&oe=66EE409E' alt="Trabajo de flyer para redes sociales de la marca Miskimuña Jauja | D'LUX Agencia de diseño y publicidad | Perú" />
            </div>

            {expanded && (
                <div className='__card_txt'></div>
            )}

        </div>

    )

}