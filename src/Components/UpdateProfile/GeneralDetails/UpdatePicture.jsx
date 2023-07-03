import { useLocation } from 'react-router-dom';
import './UpdatePicture.css'

const UpdatePicture = () => {

    const location = useLocation()
    const keyWord = location.state
    console.log(keyWord)
    return (
        <div style={{position : 'relative' }} className='update-bg'>

            <form style={{ padding: '20px' }} className="row g-3 input-top align-items-center">
                <div style={{ marginRight: '20px' }} className="col-auto">
                    <label htmlFor="urlField" className="col-form-label h2 fs-5">{keyWord}  :</label>
                </div>
                <div className="col-auto">
                    <input type="url" id="urlField" className="form-control rou" aria-labelledby="passwordHelpInline" />
                </div>
                {/* <div style={{marginTop: '30%' , marginLeft : '78%' , position: 'absolute'}} className='text-  p-2'>
                    <button  type="submit" className='text-center btn btn-primary ms-2'>
                        Save
                    </button>
                </div> */}



            </form>

            <div style={{  marginLeft: '77%', position: 'absolute' }} className='text-  p-2'>
                    <button className='text-center btn btn-primary ms-2'>
                        Update
                    </button>
                </div>

        </div>
    );
};

export default UpdatePicture;