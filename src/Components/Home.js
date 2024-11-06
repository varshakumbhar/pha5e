import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";
 import imag1 from "../Components/imag1.jpg";
 import imag2 from "../Components/imag2.jpg";
import imag3 from "../Components/imag3.jpg";
 import image4 from "../Components/image4.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);




function Home()
{

    useEffect(() => {
         const home = document.getElementById("Home");
         const image1= document.getElementById("image1")
         const image2 = document.getElementById("image2")
         const image3 = document.getElementById("image3")
         const image4 = document.getElementById("image4")
        
        const handleMouseMove = (e) => {

            gsap.to(image1,{
                x:40,
                y:50,
                repeat:2,
                yoyo:true,
               duration: 0.3 
                
           })
          
            gsap.to(image2,{
                 x:40,
                 repeat:2,
                 yoyo:true,
                duration: 0.3 
                 
            })
            gsap.to(image3,{
                y:-50,
                repeat:2,
                yoyo:true,
               duration: 0.3 
                
           })
           gsap.to(image4,{
            x:40,
            y:50,
            repeat:2,
            yoyo:true,
           duration: 0.3 
            
       })
         };
    

        home.addEventListener("mousemove", handleMouseMove);
       
        
    }, []);
  
    

      
    useGSAP(()=>{
        gsap.from('.image4',{
            opacity:1,
            scale:0,
            x:100,
            duration:2,
            scrollTrigger:".image4"            
        })
        }
        )
    useGSAP(()=>{
        gsap.from(".image",{
            opacity:1,
            scale:0,
            duration:2,
            delay:0.5

        })
    })

    return(
        <>
        <Row >
            <Col xxl={12}>
            <div id="Home"className="d-flex flex-wrap justify-content-center">
               
              <Image src={imag1} alt="Image 1" id="image1" className="image"/>
              <Image src={imag2} alt="Image 2" id="image2" className="image" />  
              <Image src={imag3} alt="Image 3" id="image3" className="image"/> 
              <Image src={image4} alt="Image 4" id="image4" className="image" />  
              
            <h1>IMAGINING<br></br> UNIQUE<br></br> CONCEPTS<br></br> AND DIGITAL <br></br>EXPERIENCES</h1>
            </div>
            </Col>
        </Row>
        <Container fluid='xl' >
        <Row className="justify-content-around"style={{paddingTop:'50px'}}>
            <Col lg={4}  className="order-sm-2 order-lg-1" >
            <p>
            Living an immersive journey rich in emotions adds flesh and bones and 
            meaning to a digital experience that is all too often cold. Not only does 
            this process perfectly embody the core values of the brand, but the message delivered 
            has a longer, deeper and more positive influence on the user.
            <br></br>
            The bringing together of digital creativity and knowledge in neuroscience has 
            written ithe DNA of our studio an artisanal know-how at the service of high 
            technology. Each project is imagined and produced on a tailor-made basis, with 
            listening, precision, rigour, originality and pleasure.
            </p>
            </Col>
            
            <Col lg={4}  className="order-sm-1 order-lg-2" >
            <h1 style={{fontSize: '1.8rem',fontWeight: '400',lineHeight: '120%',margin: '0',textTransform: 'uppercase', }}>
            The more an experience is rich in meaning, the more its meaning is rich.
            </h1>
            </Col>
         </Row>
        </Container>
        <Container fluid>
        <Col lg={12}>
            <Image src={image4} alt="Image 3" className="image4"/> 
            </Col>
        </Container>
        <h1>
   
        </h1>
        </>
    )
}
export default Home