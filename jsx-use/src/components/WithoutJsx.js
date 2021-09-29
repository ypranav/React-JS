import React from 'react'

const WithoutJsx = () => {
    return React.createElement(
        'div',
        {id:'with',className: 'DummyClass'},
        React.createElement('h1',null,'Without Using JSXs')
        )   
}

export default WithoutJsx;
