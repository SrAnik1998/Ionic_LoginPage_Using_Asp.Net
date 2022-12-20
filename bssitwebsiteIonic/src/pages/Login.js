import React,{useState, useEffect} from 'react'
import {Row,Col, Form} from 'react-bootstrap'
import CommonButton from '../components/subComponents/CommonButton';
import {Link} from 'react-router-dom'
import  useStateContext  from '../hooks/useStateContext';
import { useNavigate } from 'react-router-dom';
import useForm from "../hooks/useForm";
import { createAPIEndpoint, ENDPOINTS } from "../Api";
const getFreshModel = () => ({
  email: "",
  password: "",
});
const Login = () => {
  console.log("Clicked")
  const [isSubscribed, setIsSubscribed] = useState(false);
 
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setIsSubscribed(current => !current);
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(username,password)
  }
  const handleInput=(e)=>{
    setusername(e.target.value)

  }
  const handleInput2=(e)=>{
    setpassword(e.target.value)
  }
  const { context, setContext, resetContext } = useStateContext();
  const navigate = useNavigate();

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  useEffect(() => {
    resetContext();
  }, []);

  const login = (e) => {
    e.preventDefault();
    if (validate())
      createAPIEndpoint(ENDPOINTS.participant)
        .post(values)
        .then((res) => {
          setContext({ participantId: res.data.participantId });
          navigate("/quiz");
        })
        .catch((err) => console.log(err));
  };

  const validate = () => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(values.email) ? "" : "Email is not valid.";
    temp.password = values.password != "" ? "" : "This field is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };
  return (
    <>
      <div className="authentication">
        <div className="myContainer">
          <Row>
            <Col lg={6} className="d-flex align-items-center">
                <div className="loginlogodiv">
                  <img src="./assets/images/bssloginlogo.png" alt="" />
                  </div>
            </Col>
            <Col>
                <div className="loginbox">
                  <div className="loginboxinner">
                  <h4>Login</h4>

                  <div className="fieldboxforlogin">
                    <Form noValidate autoComplete="off" onSubmit={login}>
                      <p>User Name</p>
                      <input type="text" name="username" value={username} onChange={handleInput}/>
                      <p>password</p>
                      <input type="password" name="password" value={password} onChange={handleInput2}/>

                      <div className="checkboxfull">
                      
                      <input
                        type="checkbox"
                        value={isSubscribed}
                        onChange={handleChange}
                        id="remember"
                        name="subscribe"                        
                      />
                      <span>Remember Me</span>
                    
                      
                      </div>

                      <div className="buttonpartlogin">
                        <CommonButton  buttonTitle="Login"/>
                        <Link className="onlytextlink" to="/forgotpassword">Forgot Password?</Link>
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

export default Login