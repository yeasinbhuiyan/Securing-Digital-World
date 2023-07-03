import { useLocation } from 'react-router-dom';

const Edite = () => {
    const location = useLocation()

    const keyWordOrValue = location.state
    // console.log(keyWord)
    return (
        <div className='update-bg'>

            <form style={{ padding: '30px', position: 'relative' }} className="row g-3 input-top align-items-center">
                <div style={{ marginRight: '20px' }} className="col-auto">
                    <label htmlFor="textField" className="col-form-label h2 fs-5">{keyWordOrValue.keyWord}  :</label>
                </div>
                <div className="col-auto">
                    <input value={keyWordOrValue.value} type="text" id="textField" className="form-control rou" aria-labelledby="passwordHelpInline" />
                </div>
                <div style={{ marginTop: '30%', marginLeft: '70%', position: 'absolute' }} className='text-  p-2'>
                    <button className='text-center btn btn-primary ms-2'>
                        Edite
                    </button>
                </div>



            </form>

        </div>
    );
};

export default Edite;