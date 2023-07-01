import { Dropdown } from 'bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/Group 32.png'
import profile from '../../public/Frame35.png'
import './NavigationVar.css'
import jobs from '/Job.png'
import candidate from '/CV.png'
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';
import { FaUserEdit } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';


const NavigationVar = () => {
    return (
        <>
            <Navbar expand="lg" className="" >
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='d-flex align-items-center gap-2'>
                            <img style={{ width: '55px' }} className='' src={logo} alt="" />
                            <h4 className='fs-6 fw-normal text-gray'>Securing Digital World</h4>
                        </div>
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                        <Nav className="gap-2">
                            <Nav.Link className='d-flex align-items-center  flex-column text-center' href="#home">
                                <img style={{ width: '30px' }} src={jobs} alt="" />
                                <p className='fs-6 fw-medium'>   All jobs</p>
                            </Nav.Link>
                            <Nav.Link className='d-flex align-items-center flex-column text-center' href="#link">
                                <img style={{ width: '30px' }} src={candidate} alt="" />
                                <p className='fs-6 fw-medium'> Add a candidate</p>
                            </Nav.Link>



                            <NavDropdown title={

                                <div>
                                    <div className='d-flex flex-column align-items-center'>
                                        <img src={profile} alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                                        <span className='fs-6 fw-semibold text-gray'>My Profile</span>
                                    </div>
                                </div>}

                                id="basic-nav-dropdown">
                                <NavDropdown.Item className='d-flex align-items-center gap-1 fw-bold' href="#action/3.1">
                                    <CgProfile></CgProfile>
                                    View Profile
                                </NavDropdown.Item>

                                <NavDropdown.Item className='d-flex align-items-center gap-1 fw-bold' href="#action/3.2">
                                    <FaUserEdit></FaUserEdit>
                                    Edite Profile
                                </NavDropdown.Item>

                                <NavDropdown.Item className='d-flex align-items-center gap-1 fw-bold' href="#action/3.3">
                                    <FiSettings></FiSettings>
                                    Security Profile
                                </NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}

                                <NavDropdown.Item className='d-flex align-items-center gap-1 fw-bold' href="#action/3.4">
                                    <MdAdminPanelSettings></MdAdminPanelSettings>
                                    Privacy Settings
                                </NavDropdown.Item>
                                <NavDropdown.Item className='d-flex align-items-center gap-1 fw-bold' href="#action/3.5">
                                    <CiLogout></CiLogout>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <hr className='text-gray' style={{ width: '100%', margin: 0 }} />




        </>
    );
}

export default NavigationVar;