import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='hello' />
            <Button color='red' text='helloi' />
            {/* <h1 style={headingStyle}>{title}</h1> */}
        </header>
    )
}

// default arguments in case props aren't passed
Header.defaultProps = {
    title: 'Task Tracker',
}

// setting which data types the properties expect
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
