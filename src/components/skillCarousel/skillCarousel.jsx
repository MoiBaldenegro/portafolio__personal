import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import style from "./skillCarousel.module.css"


export default function SkillCarousel(){
    
    const responsive = {
        superLargeDesktop: {
        
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
            <section  className={ style.skills } >
              <Container className={ style.skillsConatiner } >
                <Row>
                  <Col>
                    <div>
                      <h2>
                        Skills
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptas, aperiam iure ut fugit sequi ipsum asperiores magnam. Quod nihil rem maiores et nam id libero doloremque delectus quisquam repudiandae!
                      </p>
                      <Carousel responsive={ responsive }>
                        <div>
                          <img src="" alt=""/>
                          <h5> JavaScript </h5>
                        </div>
                        <div>
                          <img src="" alt=""/>
                          <h5> React </h5>
                        </div>
                        <div>
                          <img src="" alt=""/>
                          <h5> Node JS </h5>
                        </div>
                        <div>
                          <img src="" alt=""/>
                          <h5> Redux </h5>
                        </div>
                      </Carousel>
                    </div>
                  </Col>
                </Row>
              </Container>
          </section>

    )
};