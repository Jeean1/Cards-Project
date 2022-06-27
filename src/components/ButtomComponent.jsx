


import React, { useState } from 'react';




const ButtomComponent = ({ colorRamdon, toggleButtom }) => {






    return (

        <button onClick={toggleButtom}  style={{ backgroundColor: colorRamdon }}></button>

    );
};

export default ButtomComponent;