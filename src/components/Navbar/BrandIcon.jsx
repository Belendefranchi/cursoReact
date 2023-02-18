import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/resources/logo.png';

function BrandExample() {
    return (
        <Navbar className='bg'>
            <Container>
                <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="90"
                    height="90"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default BrandExample;