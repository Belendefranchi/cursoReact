import React from 'react'
import img from '/public/resources/footer_img.png'
import location from '/public/resources/ubicacion.png'
import phone from '/public/resources/telefono.png'
import facebook from '/public/resources/facebook.png'
import instagram from '/public/resources/instagram.png'

const Footer = () => {
    return (
        <footer className='bg'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col text-start p-0">
                        <img
                            className=""
                            src={img}
                            width="98%"
                        />
                    </div>
                    <div className="col d-flex flex-column justify-content-center">
                        <div className="row d-flex flex-column">
                            <div className="col text-start p-2 d-flex align-items-start">
                                <img  className="img-fluid" src={location} width="7%" alt="ubicación"/>
                                <div className="text-start p-2">
                                    <h4 className="text-secondary text-wrap fs-5 fw-bold">Av. San Martín 1251</h4>
                                    <h4 className="text-secondary text-wrap fs-5 fw-bold">Laprida, Buenos Aires.</h4>
                                </div>
                            </div>
                            <div className="col text-start p-2 d-flex align-items-start">
                                <img  className="img-fluid" src={phone} width="7%" alt="ubicación" />
                                <span className="text-secondary text-wrap px-2 fs-5 fw-bold"> 2284 304109</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-start box me-5">
                                <img className="img-fluid m-1" src={facebook} width="7%" alt="facebook" />
                                <img className="img-fluid m-1" src={instagram} width="7%" alt="instagram" />
                                <span className="text-secondary m-1 text-wrap fs-5 fw-bold">@yummy.helados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
