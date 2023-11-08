import Spinner from 'react-bootstrap/Spinner'
import './Loader.css'

const Loader = () => {
    return(
        <div className='loader'>
            <Spinner animation="border" variant="warning" className='loader-spinner'/>
        </div>
    )
}
export default Loader;