import React,{useState} from 'react'
import {Row,Col, Form} from 'react-bootstrap'
import CommonButton from '../components/subComponents/CommonButton';
import {Link} from 'react-router-dom'
import '../sassFiles/sassPages/forgotPage.scss'
const ForgotPassword = () => {
    
  const [studentid,setstudentid]=useState("")
  const [mobilenumber,setmobilenumber]=useState("")

  const handleInput=(e)=>{
    setstudentid(e.target.value)

  }
  const handleInput2=(e)=>{
    setmobilenumber(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(studentid,mobilenumber)
  }
  return (
    <>
        <div className="authentication">
        <div className="myContainer">
          <Row>
            <Col lg={6} className="d-flex align-items-center">
                <div className="authlogodiv">
                  <img src="./assets/images/bssloginlogo.png" alt="" />                
                  </div>
            </Col>
            <Col>
                <div className="loginbox">
                  <div className="loginboxinner">
                  <h4>Forget Password</h4>

                  <div className="fieldboxforlogin">
                    <Form onSubmit={handleSubmit}>
                    <p>Student id</p>
                    <input type="text" name="stuentid" value={studentid} onChange={handleInput}/>
                    <p>Mobile Number</p>
                    <input type="text" name="mobilenumber" value={mobilenumber} onChange={handleInput2}/>

                    <ul style={{listStyleType:"disc"}}>
                        <li><p>1. An auto-generated password will send to your mobile number.</p></li>
                        <li><p>2. You can change this auto-generated password by login to your panel and set a new password.</p></li>
                        <li><p>3. You can get this auto-generated password once in a month.</p></li>
                        <li><p>4. If your mobile number is missing, please contact the office for new password.</p></li>

                        



                    </ul>
                    
                    <div className="buttonpartlogin2 text-center">
                      <CommonButton buttonTitle="Get Password"/>
                      <Link className="onlytextlink" to="/login">Login</Link>
                    </div>

                    </Form>
                  </div>
                  </div>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword