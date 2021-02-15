import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView} from "mdbreact";
import '../itemListContainer/ItemListContainer.css';
import './Carousel.css';

const CarouselPage = () => {
    return (
        <div>
            <MDBCarousel
            activeItem={1}
            length={5}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img
                    id="home"
                    src="../images/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg"
                    alt="First slide"
                    />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <img
                    id="home"
                    src="../images/Fuji_TallHero_PCs_es_US_1x._CB432520777_.jpg"
                    alt="Second slide"
                    />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img
                    id="home"
                    src="../images/Fuji_TallHero_Toys_es_US_1x._CB431858163_.jpg"
                    alt="Third slide"
                    />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                <MDBView>
                    <img
                    id="home"
                    src="../images/Fuji_TallHero_Home_es_US_1x._CB428980075_.jpg"
                    alt="Third slide"
                    />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                <MDBView>
                    <img
                    id="home"
                    src="../images/Fuji_TallHero_Beauty_v2_es_US_1x._CB429092340_.jpg"
                    alt="Third slide"
                    />
                </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
  }
  
  export default CarouselPage;