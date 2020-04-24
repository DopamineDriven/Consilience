import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBCardTitle} from "mdbreact";
import './Jumbotron.css'


const Jumbotron = (props) => {
  return (
    <MDBContainer className='jumbocontain'>
          <MDBJumbotron className="jumboimg animated bounceInDown" style={{ backgroundImage: `url(https://i.ytimg.com/vi/Gg_9Cc3NKK8/maxresdefault.jpg)` }}>
                <MDBCardTitle className="jumbotitle">Consilience</MDBCardTitle>
{/* Andrew Write your statement in the P tag below*/}
                <p className="jumbotext"></p>
                <MDBBtn className="btn-grad center" onClick={props.buttonClick}> Login/Register</MDBBtn>
          </MDBJumbotron>
    </MDBContainer>
  )
}

export default Jumbotron;