


import React, { useState } from 'react';
import colorRamdon from './QuoteBox '
import QuoteBox from './QuoteBox ';



const Funcionalidad = ({ colorRamdon, toggleButtom }) => {



    // const [count, setCount] = useState(0)

    // const toggleButtom = () => {
    //     console.log(count)
    //     return setCount(count + 1)
    // }


    return (

        <button onClick={toggleButtom}  style={{ backgroundColor: colorRamdon }}></button>

    );
};

export default Funcionalidad;