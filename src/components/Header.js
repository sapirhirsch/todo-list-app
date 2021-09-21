import propTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd, onClear, tasksLength }) => {
    return (
        <>
            <header className='header'>
                <h1>{title}</h1>
                <Button color='gray' text='Clear' onClick={onClear} />
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            </header>
            <h4>tasks: {tasksLength}</h4>
        </>
    );
};

Header.defaultProps = {
    title: 'task tracker',
};

Header.propTypes = {
    title: propTypes.string.isRequired,
};

export default Header;
