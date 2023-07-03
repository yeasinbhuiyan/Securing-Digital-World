import { Link } from "react-router-dom";

const ContactDetails = () => {
    return (
        <div className="details-bg py-2">
        <div className="padding-right">
            <div style={{ padding: '15px' }} className='d-flex  align-items-center'>

                <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>

                    <span >Email Id  :</span>

                    <span className="fw-light name-left">anuproybca@gmail.com</span>

                </h1>

                <Link to='/edite' state={{keyWord : "Edite Email Id" , value : "anuproybca@gmail.com"}} className='edite-link'>Edite</Link>

            </div>



            <div style={{ padding: '15px' }} className='d-flex align-items-center'>
                <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>

                    <span >Alternate Email Id  :</span>

                    <span className="fw-light name-left">ANUP ROY</span>

                </h1>

                <Link to='/edite' state={{keyWord : "Edite Alt. Email Id" , value : "ANUP ROY"}} className='edite-link'>Edite</Link>

            </div>




            <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>
                    <span >Contact Number  :</span>
                    <span className="fw-light name-left">7076401049</span>
                </h1>

                <Link to='/edite' state={{keyWord : "Edite Contact Number" , value : "7076401049"}} className='edite-link'>Edite</Link>

            </div>



            <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>
                    <span>Alternate Number   :</span> <span className=" name-left fw-light">  1234567890</span>
                </h1>


                <Link to='/edite' state={{keyWord : "Edite Alternate Number" , value : "1234567890"}} className='edite-link'>Edite</Link>

            </div>



            <div style={{ padding: '15px' }} className='d-flex align-items-center'>

                <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>

                    <span >Nominee Name  :</span>

                    <span className="fw-light name-left">  Anup Roy</span>

                </h1>



                <Link to='/edite' state={{keyWord : "Edite Nominee Name" , value : "Anup Roy"}} className='edite-link'>Edite</Link>

            </div>


            <div style={{ padding: '15px' }} className='d-flex align-items-center'>

                <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>

                    <span >Nominee Email Id  :</span>

                    <span className="fw-light name-left">anuproy@gmail.com</span>

                </h1>



                <Link to='/edite' state={{keyWord : "Edite Nominee Email Id" , value : "anuproy@gmail.com"}} className='edite-link'>Edite</Link>

            </div>

            
            <div style={{ padding: '15px' }} className='d-flex align-items-center'>

                <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>

                    <span >Contact Number  :</span>

                    <span className="fw-light name-left">  7076401049</span>

                </h1>



                <Link to='/edite' state={{keyWord : "Edite Contact Number" , value : "7076401049"}} className='edite-link'>Edite</Link>

            </div>

        </div>

        <div className='text-center p-2'>
            <button className='btn btn-cancel '>
                Cancle
            </button>
            <button className='btn btn-primary ms-2'>
                Save
            </button>
        </div>
    </div>
    );
};

export default ContactDetails;