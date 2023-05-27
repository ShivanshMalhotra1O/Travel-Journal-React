import React from 'react'
import cimg1 from '../images/photo1.jpeg'
import cimg2 from '../images/photo2.jpeg'
import cimg3 from '../images/photo3.jpeg'
import redicon from '../images/redlocation.png'

function Card() {
    return (
        <section className='mcard'>
            <div class="card">
                <img src={cimg1} class="cardimg" alt="..." />
                <div class="card-body">
                    <div className="location">
                        <img src={redicon} alt="" className='icon' />
                        <a className='loctxt'>JAPAN</a>
                        <a href="#" className="loclink">View on Google Maps</a>
                    </div>
                    <h1 className="card-title">Mount Fuji</h1>
                    <h3 className="card-subtitle">12 Jan, 2023 - 24 Jan, 2023</h3>
                    <p className="card-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>

            <div className='line'> </div>

            <div class="card1">
                <img src={cimg3} class="cardimg" alt="..." />
                <div class="card-body">
                    <div className="location">
                        <img src={redicon} alt="" className='icon' />
                        <a className='loctxt'>AUSTRALIA</a>
                        <a href="#" className="loclink">View on Google Maps</a>
                    </div>
                    <h1 className="card-title">Sydney Opera House</h1>
                    <h3 className="card-subtitle">27 May, 2023 - 8 Jun, 2023</h3>
                    <p className="card-text">The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.</p>
                </div>
            </div>

            <div className='line'> </div>

            <div class="card2">
                <img src={cimg2} class="cardimg" alt="..." />
                <div class="card-body">
                    <div className="location">
                        <img src={redicon} alt="" className='icon' />
                        <a className='loctxt'>NORWAY</a>
                        <a href="#" className="loclink">View on Google Maps</a>
                    </div>
                    <h1 className="card-title">Geirangerfjord</h1>
                    <h3 className="card-subtitle">01 Oct, 2023 - 18 Nov, 2023</h3>
                    <p className="card-text">The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
                </div>
            </div>

            <div className='line'> </div>
            
        </section>
    )
}

export default Card
