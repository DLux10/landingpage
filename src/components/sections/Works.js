import { Link } from 'react-router-dom'
import CardWork from '../cards/CardWork'
import './styles/works.css'

export default function Works () {

    return (

        <section className="__section __section_works">

            <div className='__content_section'>

                <Link className='__row' to={'/works/logos'}>

                    <h2 className='__title'>Logos</h2>
                    <p className='__parragraph'>Logos únicos y personalizados que reflejan la esencia de tu marca.</p>

                    <div className='__row_inside'>
                        <CardWork/>
                        <CardWork/>
                        <CardWork/>
                    </div>
                
                </Link>

                <Link className='__row' to={'/works/logos'}>

                    <h2 className='__title'>Branding</h2>
                    <p className='__parragraph'>Logos únicos y personalizados que reflejan la esencia de tu marca.</p>

                    <div className='__row_inside'>
                        <CardWork/>
                        <CardWork/>
                        <CardWork/>
                    </div>
                
                </Link>

                <Link className='__row' to={'/works/logos'}>

                    <h2 className='__title'>Fotografias</h2>
                    <p className='__parragraph'>Logos únicos y personalizados que reflejan la esencia de tu marca.</p>

                    <div className='__row_inside'>
                        <CardWork/>
                        <CardWork/>
                        <CardWork/>
                    </div>
                
                </Link>

            </div>

        </section>

    )

}