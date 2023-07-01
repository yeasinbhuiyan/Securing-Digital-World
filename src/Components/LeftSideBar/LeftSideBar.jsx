import { Button, Container, Form, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import profile from '/Frame35.png'
import './LeftSideBar.css'
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';
import { RiStackshareLine } from 'react-icons/ri';
import jobs from '/Job.png'
import candidate from '/CV.png'
import { NavLink } from "react-router-dom";
const LeftSideBar = () => {
    return (
        <div className="bg-sidebar">

            <div className="mx-auto mt-4 text-center">
                <img style={{ width: '60px' }} src={profile} alt="" />
                <h3 className="fs-4 fw-bold">Dr. Arvind K</h3>
            </div>
            <Nav className="d-flex  flex-column justify-content-end gap-2" style={{ padding: '20px' }}>
                {/* <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <img style={{ width: '25px' }} src={jobs} alt="" />
                    Jobs
                </Nav.Link>


                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <img style={{ width: '25px' }} src={candidate} alt="" />
                    Candidates
                </Nav.Link>




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
                </Nav.Link> */}

                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <img style={{ width: '25px' }} src={jobs} alt="" />
                    Jobs
                </Nav.Link>


                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <img style={{ width: '25px' }} src={candidate} alt="" />
                    Candidates
                </Nav.Link>




                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <RiStackshareLine></RiStackshareLine>
                    Referalls

                </Nav.Link>

                <NavLink to='/update-profile' className={({ isActive }) => isActive ? 'sidebar-a ' : 'sidebar-a text-black'}>
                    <CgProfile></CgProfile>
                  
                    View/Update Profile
                </NavLink>

                <NavLink to='/settings' className={({ isActive }) => isActive ? 'sidebar-a ' : 'sidebar-a text-black'}>
                    <FiSettings></FiSettings>
                    Settings
                </NavLink>


                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <CiLogout></CiLogout>
                    Logout
                </Nav.Link>





            </Nav>



        </div>
    );
};

export default LeftSideBar;