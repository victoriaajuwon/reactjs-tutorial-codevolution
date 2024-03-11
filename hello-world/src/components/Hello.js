import React from "react";

const Hello = () => {
    // using JSX
    // return (
    //     <div classname='dummyClass>
    //         <h1>Hello Victoria</h1>
    //     </div>
    // )
    //not using jsx
    return React.createElement('div', 
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1',null,'Hello Victoria'))

}

export default Hello;