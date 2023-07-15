import style from "./banner.module.css"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import HeaderLogo from "../../assets/img/undraw_real_time_sync_re_nky7.svg"
import { useEffect, useState  } from "react";  


export default function Banner(){ 

    const [ isDeleting, setIsDeleting ] = useState(false)
    const [ loopNum, setLoopNum ] = useState(0)
    const [ text, setText ] = useState("");
    const toRotate = ["Engennier", "FrontEnd Developer", "BackEnd Developer", "Web Designer"]
    const period = 2000;
    const [ delta, setDelta ] = useState(300 - Math.random() * 100)

    useEffect(function(){
        let ticker = setInterval(function(){
            tick();
        }, delta)

        return function (){
            clearInterval(ticker)
            
        };

    }, [text] );

    function accion (){
        console.log("Funcionando perfecto")
    };

    function tick(){
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring( 0, text.length - 1 ) : fullText.substring( 0, text.length  + 1 )

        setText(updatedText);
        if(isDeleting){
        setDelta( prevDelta => prevDelta / 2 )
        } if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else  if ( isDeleting && updatedText === "" ){
        setIsDeleting(false)
        setLoopNum( loopNum + 1 );
        setDelta(500);
        }
    }
   


        return(
                <section className={style.smn} id="home">
                    <Container className={ style.container }>
                        <Row className={ style.rowContainer }>
                            <Col xs={ 12 } md={ 6 } xl={ 7 } className={ style.rowOne } >
                            <span className={style.tagline}>Welcome to my website! </span>
                            <h1> {"Hi, I'm Moises Baldenegro Melendez "} <span className={style.wrap}> {text}</span></h1>
                            <p> Estoy aquí para convertir tus ideas en realidad digital, con un toque de creatividad y diversión.podemos construir proyectos increíbles y dejar una huella digital que marque la diferencia. ¡Contáctame y descubramos cómo podemos crear algo asombroso!</p>
                             <button onClick={ accion }> Let's conect </button><ArrowRightCircle size={25} />     
                            </Col>
                            <Col xs={ 12 } md={ 6 } xl={ 5 } className={ style.rowTwo } >
                                <img src= { HeaderLogo }  alt="header_logo" className={ style.headerLogo }   />  
                            </Col>
                        </Row>
                    </Container>
                </section> 
            )       

    };

