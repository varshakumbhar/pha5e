import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Col, Container } from "react-bootstrap";
import {Row} from "react-bootstrap"
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Teams()
{
   useGSAP(()=>{
    gsap.from('#team-row1',{
        opacity:0,
        scale:1,
        y:50,
        duration:1.5,
        
    })
        
    })
    useGSAP(()=>{
      gsap.from('#team-row2',{
          opacity:0,
          scale:1,
          y:50,
          duration:3,
          scrollTrigger:'#team-row2 div',
          scrub:"true"
      })
      gsap.from('#team-row3',{
        opacity:0,
        scale:1,
        y:50,
        duration:3,
        scrollTrigger:'#team-row3 div',
    
        
    })


   })
   
    return(
      <>
      <Container>
        
       <Row id="team-row1">
        <Col md={12} lg={12}>
        <div >
         <h1>WE DESIGN<br></br>
         TAILOR-MADE<br></br>
          IMMERSIVE<br></br>
          EXPERIENCES<br></br>
          BY ALWAYS<br></br>
           FREEDOM</h1>     
        </div>
        </Col>
       </Row>
       <div id="div-row2">
       <Row id="team-row2" style={{display:"flex",justifyContent:"space-around", paddingTop:"150px"}}>
       
         <Col md={4} >
         <h4 style={{paddingTop:'30px'}}>
         Designing together
         </h4>
         <h1>
         talking to each other to discover and get to know each other 
         </h1>
         </Col>
         <Col lg={4}>
         <p>
          Designing together means first and foremost listening to you. Because curiosity is no longer considered a vice: it allows us to discover and understand your universe, your objectives, your challenges and the direction in which you want to go.
         </p>
        </Col>
       </Row>
       <Row id="team-row3" style={{display:"flex",justifyContent:"space-around", paddingTop:"150px"}}>
     
         <Col md={4} >
         <h4 style={{paddingTop:'30px'}}>
         Imagine for you
         </h4>
         <h1>
          drawing on multiple talents to solve the equation
         </h1>
         </Col>
         <Col lg={4}>
         <p>
         Finding a solution to a problem is rarely the most complex phase.
         The real challenge lies in identifying the perfect overall solution, one that will be tailor-made, original and faithful to your image.
         That is why we draw on the diverse talents of our agency, multiply the creative ideas, and stop at nothing to find the perfect solution. From apprentice to senior artistic director, everyone is encouraged to express themselves and freely exchange their ideas.
         </p>
        </Col>
       </Row>
       </div>
       </Container>
       </>
      
      
    )
}
export default Teams;