import propTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'
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
