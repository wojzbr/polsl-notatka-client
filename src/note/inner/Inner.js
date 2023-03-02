import './inner.css'
import 'react-dropdown/style.css';

const Inner = ({content}) => {

    return (
        <div className="innerWrapper">
            <div className="inner">
                {content}
            </div>
        </div>
    )
}

export default Inner;