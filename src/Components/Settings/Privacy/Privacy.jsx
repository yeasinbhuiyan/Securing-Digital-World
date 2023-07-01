import './Privacy.css'


const Privacy = () => {
    return (
        <div className='privacy-bg privacy-btn-relative'>
            <div className='d-flex privacy-btn justify-content-end p-2'>
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

export default Privacy;