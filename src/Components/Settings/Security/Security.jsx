import './Security.css'
import { Link } from 'react-router-dom';
const Security = () => {
    return (
        <div className="security-bg">
            <div className='security-padding'>
                <div style={{ marginBottom: '20px' }} className='d-flex align-items-center justify-content-between'>
                    <h1 className='fs-6'>Password</h1>
                    <Link to='/change-password' className='edite-link'>Update</Link>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <h1 className='fs-6'>2 Step Verification</h1>
                    <Link className='edite-link'>Set up</Link>
                </div>

            </div>
            <div style={{ marginTop: '70px', marginRight: '50px' }} className='d-flex  justify-content-end p-2'>
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

export default Security;