import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {

    return(
        <>
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://blog.naturlider.com/wp-content/uploads/2020/03/AdobeStock_309195144-post-dia-mundial-naturaleza.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="src/assets/images/autumn.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/R.965a060091093a9428f3ddf9a3380dc6?rik=z1DyNJw7RppLzg&riu=http%3a%2f%2fwww.v3wall.com%2fwallpaper%2f1680_1050%2f1005%2f1680_1050_201005041215072182354.jpg&ehk=NrhX477d3t1SKFUI4PfwmIkBjtPXLjzVU8%2bo3w46BkE%3d&risl=&pid=ImgRaw&r=0"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectet</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}
export default CarouselHome;