import React from 'react';
import PropTypes from 'prop-types';

const Text = ({head}) => {
    const onClick = () =>{
        console.log('Click')
    }

    return (
        <div className='header'>
            <h1>{head}</h1>
            <button className='btn' onClick={onClick}
            > Add</button>
    
        </div>
    )
}

Text.defaultProps = {
    head: 'hi',
}

Text.propTypes = {
    head: PropTypes.string.isRequired,
}

export default Text
