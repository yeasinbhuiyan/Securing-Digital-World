import { Link } from "react-router-dom";
import './BankDetails.css'

const BankDetails = () => {
    return (
        <div className="details-bg py-2">
            <div className="padding-right">
                <div style={{ padding: '15px' }} className='d-flex  align-items-center'>

                    <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>

                        <span >Account Holder Name  :</span>

                        <span className="fw-light name-left">Anup Roy</span>

                    </h1>

                    <Link className='edite-link  '>Edite</Link>

                </div>



                <div style={{ padding: '15px' }} className='d-flex align-items-center'>
                    <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>

                        <span >Bank Name  :</span>

                        <span className="fw-light name-left">Paytm Bank</span>

                    </h1>

                    <Link className='edite-link  '>Edite</Link>

                </div>




                <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                    <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>
                        <span >Account Number  :</span>
                        <span className="fw-light name-left">917076401049</span>
                    </h1>

                    <Link className='edite-link'>Edite</Link>

                </div>



                <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                    <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>
                        <span>UPI Id   :</span> <span className=" name-left fw-light">  7076401049@paytm</span>
                    </h1>


                    <Link className='edite-link'>Edite</Link>

                </div>



                <div style={{ padding: '15px' }} className='d-flex align-items-center'>

                    <h1 style={{ width: '100%' }} className='fs-6 fw-semibold flex-grow-1'>

                        <span >Referred Id   :</span>

                        <span className="fw-light name-left">  REF1234ABCD</span>

                    </h1>



                    <Link className='edite-link'>Edite</Link>

                </div>

            </div>

            <div className='text-center p-2'>
                <button className='btn btn-cancel '>
                    Cancle
                </button>
                <button className='btn btn-primary ms-2'>
                    Save And Next
                </button>
            </div>
        </div>
    );
};

export default BankDetails;