

import React, { useState } from 'react';
import quotes from "./quotes.json"
import Funcionalidad from './Funcionalidad';

const QuoteBox = () => {

    let ramdon = Math.floor(Math.random() * quotes.quotes.length)
    const [count, setCount] = useState(ramdon)

    const toggleButtom = () => {
        return setCount(count + 1)
    }

    let colors = ["#845EC2", "#FF6F91", "#00C9A7", "#005B44", "#D03B29", "#FF8066", "#296073", "#4FFBDF", "#2C73D2", "#926C00"]

    let ramdonColor = colors[Math.floor(Math.random() * colors.length)]



    let colorRamdon = ramdonColor

    document.body.style = `background-color: ${colorRamdon}`







    return (
        <>
            <div className='container'>

                <div className="cards-container">
                    <div className="div-text1" style={{ color: colorRamdon }}>

                        <p>{quotes.quotes[count].quote}</p>

                    </div>

                    <div className="div-text2" style={{ color: colorRamdon }}>

                        <p>{quotes.quotes[count].author}</p>


                        <Funcionalidad
                            colorRamdon={colorRamdon}
                            toggleButtom={toggleButtom}
                        />


                    </div>
                </div>

            </div>
        </>
    );
};

export default QuoteBox;