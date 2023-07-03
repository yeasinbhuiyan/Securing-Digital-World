import { Link } from 'react-router-dom';
import './GeneralDetails.css'
const GeneralDetails = () => {
    return (
        <div className="details-bg py-2 ">
            <div className='padding-right'>
                <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                    <h1 className='fs-6 fw-semibold'>Full Name</h1>
                    <h2 className='fs-6 fw-normal'>Mr. ANUP ROY</h2>
                    <Link to='/edite' state={{keyWord : "Edite Full Name" , value : "Mr. ANUP ROY"}} className='edite-link  '>Edite</Link>

                </div>


                <div style={{ padding: '15px' }} className='d-flex align-items-center'>
                    <h1 className='fs-6 margin-right  fw-semibold'>Profile Picture</h1>

                    <Link to='/update' state={"Update Profile Picture Url"} className='edite-link'>Update</Link>

                </div>


                <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                    <h1 className='fs-6 fw-semibold'>Date Of Birth</h1>
                    <h2 className='fs-6 fw-normal'>02/02/2022</h2>
                    <Link to='/edite' state={{keyWord : "Edite Date Of Birth" , value : "02/02/2022"}} className='edite-link'>Edite</Link>

                </div>

                <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                    <h1 className='fs-6 fw-semibold'>User Name</h1>
                    <h2  className='fs-6 fw-normal'>Anup Roy</h2>
                    <Link  to='/edite' state={{keyWord : "Edite User Name" , value : "Anup Roy"}} className='edite-link'>Edite</Link>

                </div>



                <div style={{ padding: '15px' }} className='d-flex align-items-center'>
                    <h1 className='fs-6 reffered-margin-right  fw-semibold'>Reffered Id</h1>
                    <h2 className='fs-6 fw-normal'>REF1234ABCD</h2>

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

export default GeneralDetails;