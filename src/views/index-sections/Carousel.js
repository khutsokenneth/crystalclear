import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/services/service1.jpg"),
    altText: "Swedish/Holistic Massage",
    caption: "Swedish/Holistic Massage",
  },
  {
    src: require("assets/img/services/service3.jpg"),
    altText: "Pregnancy Massage",
    caption: "Pregnancy Massage",
  },
  {
    src: require("assets/img/services/service4.jpg"),
    altText: "Back Care Massage",
    caption: "Back Care Massage",
  },
  {
    src: require("assets/img/services/service5.jpg"),
    altText: "Aromatherapy",
    caption: "Aromatherapy",
  },
  {
    src: require("assets/img/services/service6.jpg"),
    altText: "Advanced Hot Stones",
    caption: "Advanced Hot Stones",
  },
  {
    src: require("assets/img/services/service7.jpg"),
    altText: "Head Massage (Balinese Scalp Massage)",
    caption: "Head Massage (Balinese Scalp Massage) ",
  },
  {
    src: require("assets/img/services/service8.jpg"),
    altText: "Neck Massage",
    caption: "Neck Massage",
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className=" text-center ">
            <h2 className="category text-warning">Our Services</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        {item.caption == "Pregnancy Massage" || item.caption == "Back Care Massage" || item.caption == "Advanced Hot Stones"? <h5 className="text-warning">{item.caption}</h5>: <h5>{item.caption}</h5>}
                        
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
