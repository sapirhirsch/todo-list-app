import propTypes from 'prop-types';

const Button = ({ text, color, onClick, disabledValue }) => {
    return (
        <button
            onClick={onClick}
            style={disabledValue ? {} : { background: color }}
            className='btn'
            disabled={disabledValue}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: 'steelBlue',
};

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func.isRequired,
};

export default Button;
