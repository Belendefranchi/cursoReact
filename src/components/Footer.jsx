import React from 'react'
import img from '/public/resources/footer_img.png'
import ubication from '/public/resources/ubicacion.png'
import phone from '/public/resources/telefono.png'

const Footer = () => {
    return (
        <footer className='bg'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col">
                        <img
                            className="img-fluid"
                            src={img}
                            width="80%"
                        />
                    </div>
                    <div className="col d-flex flex-column justify-content-center">
                        <div className="row d-flex flex-column">
                            <div className="col">
                                <img  className="img-fluid" src={ubication} width="7%" alt="ubicación"/>
                                <span className="text-secondary text-wrap fs-5 fw-bold"> Av. San Martín 1251 - Laprida, Buenos Aires.</span>
                            </div>
                            <div className="col">
                                <img  className="img-fluid" src={phone} width="7%" alt="ubicación" />
                                <span className="text-secondary text-wrap fs-5 fw-bold"> 2284 304109</span>
                            </div>
                        </div>
                        <div className="row d-flex flex-column">
                            <div className="col">
                                <span className="text-secondary text-wrap fs-4 fw-bold">@yummy.helados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
