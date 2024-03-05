import PropTypes from 'prop-types';
const FormWrapper = ({children}) =>{
    return (
        <div>
            {children}
        </div>
    )
}

//prop validation
FormWrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default FormWrapper;