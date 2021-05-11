import React from 'react';



import './data-table.style.css';

const DataTable=(props)=> {
    return(
        <div className="data-table-container">
             <div>
                {props.data.hours} 
            </div>
            <div className="space2">
                {props.data.room}  {props.data.total}
            </div>
            <div>
                {props.data.unit} 
            </div>
            <div className="space2">
                {props.data.name}  {props.data.total2}
            </div>
            
        </div>
    );
}

export default DataTable;