import './ChangePasswordForm.css'


const ChangePasswordForm = () => {
    return (
        <div style={{ padding: '50px' }} className=' updatePass-bg'>
            <div className='padding-right'>

                <div style={{ marginTop: '6px' }} className="row g-3 align-items-center">
                    <div style={{ marginRight: '36px' }} className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label h2 fs-5">Enter Old Password  :</label>
                    </div>
                    <div className="col-auto">
                        <input type="password" id="inputPassword6" className="form-control rou" aria-labelledby="passwordHelpInline" />
                    </div>

                </div>


                <div className="row g-3 input-top align-items-center">
                    <div style={{ marginRight: '33px' }} className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label h2 fs-5">Enter New Password  :</label>
                    </div>
                    <div className="col-auto">
                        <input type="password" id="inputPassword6" className="form-control rou" aria-labelledby="passwordHelpInline" />
                    </div>



                </div>


                <div className="row g-3 input-top align-items-center">
                    <div style={{ marginRight: '10px' }} className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label h2 fs-5">Confirm New Password  :</label>
                    </div>
                    <div className="col-auto">
                        <input type="password" id="inputPassword6" className="form-control rou" aria-labelledby="passwordHelpInline" />
                    </div>


                </div>
            </div>
            <div style={{ marginTop : '50px'  }} className='d-flex  justify-content-end'>
               
                <button style={{ paddingLeft: '50px' , paddingRight: '50px' }} className='btn btn-primary ms-2'>
                    Save
                </button>
            </div>

        </div>
    );
};

export default ChangePasswordForm;