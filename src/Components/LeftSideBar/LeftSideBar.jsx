import { Button, Container, Form, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import profile from '/Frame35.png'
import './LeftSideBar.css'
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';
import { RiStackshareLine } from 'react-icons/ri';
const LeftSideBar = () => {
    return (
        <div className="bg-sidebar">

                <div className="mx-auto mt-4 text-center">
                    <img style={{ width: '60px' }} src={profile} alt="" />
                    <h3 className="fs-4 fw-bold">Dr. Arvind K</h3>
                </div>
            <Nav className="d-flex  flex-column justify-content-end gap-2" style={{padding : '20px'}}>
                <Nav.Link href="#action1">Home</Nav.Link>


                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Link</Nav.Link>

                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                <RiStackshareLine></RiStackshareLine>
                    Referalls
                    
                </Nav.Link>

                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                   <CgProfile></CgProfile>
                    View / Update Profile
                </Nav.Link>
                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <FiSettings></FiSettings>
                    Settings
                </Nav.Link>


                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <CiLogout></CiLogout>
                    Logout
                </Nav.Link>



                <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${''}`}
                >

                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>

                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>




                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>


                </NavDropdown>



            </Nav>



        </div>
    );
};

export default LeftSideBar;