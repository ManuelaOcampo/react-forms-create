import React from 'react';



import './title-table.style.css';

const TitleTable=(props)=> {
    return(
        
        <div className="title-table-container">
            {props.titleGarden}
        </div>
        
    );
    
}


export default TitleTable;