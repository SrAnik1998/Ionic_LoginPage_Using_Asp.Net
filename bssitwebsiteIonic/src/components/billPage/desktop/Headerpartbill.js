import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {HiOutlineBell} from 'react-icons/hi'
import { Col, Row } from 'react-bootstrap'
import {MdHistory} from 'react-icons/md'
import {AiOutlineInfoCircle} from 'react-icons/ai'
const Headerpartbill = () => {
    const handleSearch=()=>{
        console.log("hello")
    }
  return (
    <>
        <div className="headerpartbill">
            
                    <div className="leftsidesearch">
                        <input type="text" name="searchword"  placeholder='Search Student ID'/>
                        <span onClick={handleSearch}><FiSearch/></span>
                    </div>
                
                    <div className="rightsidestuff">
                        <div className="bellicon">
                            <HiOutlineBell/>
                        </div>
                        <div className="profilesmallinfo">
                            <div className="profilepic">
                                <img src="./assets/images/billpage/headerprofilepic.png" alt="headerprofilepic" />
                            </div>
                            <div className="roleandid">
                                <div className="roleidwrapper">
                                    <h5>Admin</h5>
                                    <p>ID 1705032108</p>
                                </div>
                            </div>
                        </div>
                    </div>
               
            
        </div>
        <div className="basicinfobox">
            <h5>Basic Infomation</h5>
            <div className="basicinfopopulate">
                <Row className="mx-0">
                    <Col lf={6}>
                        <Row>
                            <Col lg={12}>
                                <p>Name</p>
                                <input type="text" name="" placeholder='Muhammad Rafi Rahman'/>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"15px"}}>
                            <Col lg={6}>
                                <p>Class</p>
                                <input type="text" name="" placeholder='Class 6'/>
                            </Col>
                            <Col lg={6}>
                                <p>Session</p>
                                <input type="text" name="" placeholder='July 2022 - June 2023'/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lf={6}>
                        <Col lf={6}>
                        <Row>
                            <Col lg={6}>
                                <p>ID</p>
                                <input type="text" name="" placeholder='2101162699'/>
                            </Col>
                            <Col lg={6}>
                                <p>Sction</p>
                                <input type="text" name="" placeholder='Ruby 1'/>
                            </Col>
                        </Row>
                        </Col>
                        <Col lf={6}>
                            <Row style={{marginTop:"15px"}}>
                                <Col lg={6}>
                                    <p>Period</p>
                                    <input type="text" name="" placeholder='NOV-22'/>
                                </Col>
                                <Col lg={6}>
                                    <p>Date</p>
                                    <input type="text" name="" placeholder='28-NOV-22'/>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>

            </div>
        </div>
        <div className="lowerpart">
            <Row>
                <Col lg={7}>
                    <div className="previoushistorylist">
                        <h5><span><MdHistory/></span>Previous Collection History</h5>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Bill No.</th>
                                <th>RCV Type</th>
                                <th>Month</th>
                                <th>About</th>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                        </table>
                        
                    </div>
                    <div className="prelistbottom">
                            <div className="prelistbtminner">
                                <h6>Total collection: 73604.00 BDT</h6>
                            </div>
                    </div>
                </Col>
                <Col lg={5} style={{paddingLeft:"0"}}>
                    <div className="dueboard">
                    <h5><span><MdHistory/></span>Due Information</h5>
                    <p>You have total 5 months tuition fee due</p>
                    <ul>
                            <li>
                                <div className="left">
                                    <h5>22-Oct</h5>
                                </div>
                                <div className="right">
                                    <div className="redpill">
                                        <p>Not Paid</p>
                                    </div>
                                    <div className="amount">
                                        <p>12390.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <h5>22-Oct</h5>
                                </div>
                                <div className="right">
                                    <div className="redpill">
                                        <p>Not Paid</p>
                                    </div>
                                    <div className="amount">
                                        <p>12390.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <h5>22-Oct</h5>
                                </div>
                                <div className="right">
                                    <div className="redpill">
                                        <p>Not Paid</p>
                                    </div>
                                    <div className="amount">
                                        <p>12390.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <h5>22-Oct</h5>
                                </div>
                                <div className="right">
                                    <div className="redpill">
                                        <p>Not Paid</p>
                                    </div>
                                    <div className="amount">
                                        <p>12390.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <h5>22-Oct</h5>
                                </div>
                                <div className="right">
                                    <div className="redpill">
                                        <p>Not Paid</p>
                                    </div>
                                    <div className="amount">
                                        <p>12390.00</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="dueboardbottom">
                       <div className="dueboardbottominner">
                            <h6>Receive Bill</h6>
                       </div>
                    </div>

                    <div className="notepart">
                        <h5><span><AiOutlineInfoCircle/></span>Note</h5>

                        <div className="noteboard">
                            <p>No note available</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Headerpartbill