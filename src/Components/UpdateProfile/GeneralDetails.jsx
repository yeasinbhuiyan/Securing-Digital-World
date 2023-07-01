import { Link } from 'react-router-dom';
import './GeneralDetails.css'
const GeneralDetails = () => {
    return (
        <div className="details-bg">
            <div>
                <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                    <h1 className='fs-6 fw-semibold'>Full Name</h1>
                    <h2 className='fs-6 fw-normal'>Mr. ANUP ROY</h2>
                    <Link className='edite-link'>Edite</Link>

                </div>


                <div style={{ padding: '15px' }} className='d-flex align-items-center'>
                    <h1 className='fs-6 margin-right  fw-semibold'>Profile Picture</h1>
                   
                    <Link className='edite-link'>Update</Link>

                </div>


                <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                    <h1 className='fs-6 fw-semibold'>Date Of Birth</h1>
                    <h2 className='fs-6 fw-normal'>02/02/2022</h2>
                    <Link className='edite-link'>Edite</Link>

                </div>

                <div style={{ padding: '15px' }} className='d-flex justify-content-between align-items-center'>
                    <h1 className='fs-6 fw-semibold'>User Name</h1>
                    <h2 className='fs-6 fw-normal'>Anup Roy</h2>
                    <Link className='edite-link'>Edite</Link>

                </div>


                
                <div style={{ padding: '15px' }} className='d-flex align-items-center'>
                    <h1 className='fs-6 margin-right  fw-semibold'>Reffered Id</h1>
                    <h2 className='fs-6 fw-normal'>REF1234ABCD</h2>

                </div>

            </div>
        </div>
    );
};

export default GeneralDetails;