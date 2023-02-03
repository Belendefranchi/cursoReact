import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Productos</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Baldes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Postres</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Impulsivos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <span className="footer-title">Empresa</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Trabajá con nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Noticias</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <span className="footer-title">Contacto</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link"><i className="fas fa-phone"></i>2284 304109</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-comments"></i>Av. San Martín 1251, Laprida, Buenos Aires.</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-envelope"></i>Contáctanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-star"></i>Sugerencias</a>
                        </li>
                        </ul>
                    </div>
                <div className="row text-center">
                    <div className="col-md-4 box">
                        <span className="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
                        </span>
                    </div>
                        <div className="col-md-4 box">
                            <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
