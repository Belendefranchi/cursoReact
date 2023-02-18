import React from 'react'
/* import styles from './Footer.module.css' */
import img from '/public/resources/footer_img.png'


const Footer = () => {
    return (
        <footer className='w-100'>
            <div className='container m-0 p-0 w-100'>
                <div className="row align-items-start m-0 p-0">
                    <div className="bg">
                        <img
                            className="img-fluid"
                            src={img}
                        />
                    </div>
                    <div class="col m-0 p-0 styles.img">

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
