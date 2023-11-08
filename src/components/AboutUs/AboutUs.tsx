import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutUs = () => {
    const cardStyle = {
        display: 'flex',
        justifyContent: 'space-around', // Espaciado uniforme entre las tarjetas
    };
    return (
        <div>
            <h1>About us</h1>
            <p>
                Somos un equipo apasionado de profesionales dedicados a ofrecer soluciones creativas 
                y efectivas en desarrollo web. Nuestra misión es convertir tus ideas en realidad.
            </p>

            <div style={cardStyle}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src/assets/images/OIP.jpeg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src/assets/images/OIP (1).jpeg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src/assets/images/OIP (2).jpeg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default AboutUs