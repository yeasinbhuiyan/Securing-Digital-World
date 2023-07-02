import { Button, Container, Form, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import profile from '/Frame35.png'
import './LeftSideBar.css'
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';
import { RiStackshareLine } from 'react-icons/ri';
import jobs from '/Job.png'
import candidate from '/CV.png'
import { Link, NavLink } from "react-router-dom";
const LeftSideBar = () => {
    return (
        <div className="bg-sidebar">

            <div className="mx-auto mt-4 text-center">
                <img style={{ width: '60px' }} src={profile} alt="" />
                <h3 className="fs-4 fw-bold">Dr. Arvind K</h3>
            </div>
            <Nav className="d-flex  flex-column justify-content-end gap-2" style={{ padding: '20px' }}>



                {/* jobs  */}
                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <img style={{ width: '25px' }} src={jobs} alt="" />
                    Jobs
                </Nav.Link>

                <Link className="sm-link">

                    Marked Jobs
                </Link>
                <Link className="sm-link">

                    Reffered Jobs
                </Link>
                <Link className="sm-link">

                    Closed Jobs
                </Link>





                {/* Candidates */}
                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <img style={{ width: '25px' }} src={candidate} alt="" />
                    Candidates
                </Nav.Link>

                <Link className="sm-link">

                    Add A Candidate <br /> To Your Database
                </Link>
                <Link className="sm-link">

                    Your Candidates <br /> Database
                </Link>
                <Link className="sm-link">

                    Referred Candidates
                </Link>
                <Link className="sm-link">

                    Selected Candidates
                </Link>




                {/* Referalls */}
                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <RiStackshareLine></RiStackshareLine>
                    Referalls

                </Nav.Link>


                {/* View/Update Profile */}
                <NavLink to='/update-profile' className={({ isActive }) => isActive ? 'sidebar-a fw-semibold ' : 'sidebar-a text-black fw-semibold'}>
                    <CgProfile className="me-2"></CgProfile>

                    View/Update Profile
                </NavLink>


                {/* Settings */}
                <NavLink to='/settings' className={({ isActive }) => isActive ? 'sidebar-a fw-semibold mt-2' : 'sidebar-a text-black fw-semibold mt-2'}>
                    <FiSettings className="me-2"></FiSettings>
                    Settings
                </NavLink>

                {/* Logout */}
                <Nav.Link className="d-flex align-items-center fw-semibold text-black gap-2">
                    <CiLogout></CiLogout>
                    Logout
                </Nav.Link>
            </Nav>



        </div>
    );
};

export default LeftSideBar;