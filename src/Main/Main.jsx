import { Container } from "react-bootstrap";
import NavigationVar from "../Shared/NavigationVar";
import LeftSideBar from "../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../Components/RightSideBar/RightSideBar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavigationVar></NavigationVar>

            <Container className="d-flex justify-content-between">


                <LeftSideBar></LeftSideBar>


                <Outlet></Outlet>



                <RightSideBar></RightSideBar>


            </Container>

        </div>
    );
};

export default Main;