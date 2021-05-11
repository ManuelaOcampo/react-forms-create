import React, { useState } from 'react';
import TitleTable from  '../title-table/title-table.cont';
import InformationTable from '../information-table/information-table.cont';


import './garden-table.style.css';
import DataTable from '../data-table/data-table.cont';




const GardenTable=(props)=> {
    <GardenTable dataList={props.dataList}/>
   
    const[hostal,setHostal]=useState('G1');
    const[room,setRoom]=useState('');
    const[hours,setHours]=useState(0);
    const[Total,setTotal]=useState(0);
    const[name,setName]=useState('');
    const[unit,setUnit]=useState(0);
    const[Total2,setTotal2]=useState(0);

    const agregar=(event)=>{
        event.preventDefault();
        const newData={
            id:room,
            room:room,
            hours:hours,
            total:Total,
        };
        
        props.onAddData(newData,hostal);
    }
    const adicionar=(event)=>{
        event.preventDefault();
        const newData={
            id:name,
            room:name,
            hours:unit,
            total:Total2,
        };
        
        props.onAddData(newData,hostal);
    }
   /* class Test extends React.Component {

    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {}
        }
        
     }
     handleValidation=()=>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["room"]){
           formIsValid = false;
           errors["room"] = "Cannot be empty";
        }

        if(typeof fields["room"] !== "undefined"){
           if(!fields["room"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["room"] = "Only letters";
           }        
        }

       
        this.setState({errors: errors});
        return formIsValid;
    }
    
   handleChange=(field, e)=>{         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
     
   
    }
*/
 
        
    return(
        

        <div className="garden-table-container">
            <div>
          {props.dataList.map((garden,index)=>{
              return(
                  <React.Fragment key={garden.id}>
                      <TitleTable titleGarden={garden.title}/>
                    
   
                         {garden.data.map((data,indexdata)=>{
                          return(
                            <DataTable
                             key={data.id}
                             data={data}
                             />
                          );
                   
                         })}
                         
                     
                  </React.Fragment>
                  
                  
                
              );
          })}
          </div>
         
        
        <div className="garden-form">
        <form >
            <table>
                <tbody>
                <tr>
                    <td>Hostal</td>
                    
                </tr>
                <tr>
                    <td>
                 <select className="caja"
                  value={hostal}
                  onChange={(event)=>{
                      console.log(event.target.value);
                    setHostal(event.target.value);
                        
                }}
                  
                  >
                <option value="G1">GARDEN</option>
                <option value="P1">ARTICLE</option>
                <option value="F1">FOOD</option>
                </select>
                    </td>
                
                </tr>
                <tr>
                    <td >Room o Name</td>  
                </tr>
                <tr>
                <td ><input 
                type="text"className="caja"
                value={room}
                onChange={(event)=>{
                    setRoom(event.target.value);
                        
                }}
                
                />
                </td>
                </tr>
                <tr>
                    <td>Hours o Unit</td>  
                </tr>
                <tr>
                <td><input type="number" 
             min="1" max="12" step="1"
                 className="caja"
                value={hours}
                onChange={(event)=>{
                  setHours(event.target.value);
                      
              }}
                />
                </td>
                </tr>
                <tr>
                    <td>Total</td>  
                </tr>
                <tr>
                <td><input 
                min="1"
                type="number" className="caja"
                value={Total}
                onChange={(event)=>{
                  setTotal(event.target.value);
                      
              }}
                />
                
                </td>
                </tr>
                <tr>
                   <td> <button className="caja"
                    onClick={agregar}
                   >
                       AGREGAR
                   </button>
                   </td>
                </tr>
                </tbody>
               
            </table>
          
           
        </form>
         
    </div>
    <div className="garden-form2">
        
        <form >
            <table>
                <tbody>
                <tr>
                    <td>Hostal</td>
                    
                </tr>
                <tr>
                    <td>
                        <fieldset className="caja2"
                 
                  value={hostal}
                  onChange={(event)=>{
                      console.log(event.target.value);
                    setHostal(event.target.value);
                        
                }}
                >
                 <tr>
                     <td>
                     <legend>SELECCIONA<abbr title="Este campo es obligatorio" aria-label="oblig">*</abbr></legend>
                     </td>
                 </tr>
                 
                 <br></br>
                <input type="radio" oblig name="Hostal" id="P1" value="P1"/>
                <label for="P1"> ARTICLE</label><br></br>
                <input type="radio" oblig name="Hostal" id="F1" value="F1"/>
                <label for="F1"> FOOD</label><br></br>
                <input type="radio" oblig name="Hostal" id="G1" value="G1"/>
                <label for="G1"> GARDEN</label><br></br>
                </fieldset>
                
                
               
                    </td>
                
               
                
                    <td >Name</td>  
                  
                <td>
                    
                    <input 
                   
                type="text"className="caja2"
               
                value={name}
                onChange={(event)=>{
                    setName(event.target.value);
                        
                }}
                
                />
                </td>
                
                </tr>
               <td>Unit</td>
                <tr>
                    
                <td>
                <select  className="caja2"
                value={unit}
                onChange={(event)=>{
                  setUnit(event.target.value);
                      
              }}
                >
                
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="1">4</option>
                <option value="2">5</option>
                <option value="3">6</option>

                </select>
                </td>
                </tr>
                
                <tr>
                    <td>Total</td>  
                </tr>
                <tr>
                <td><input
                 
                 type="number" 
                 min="1"
                className="caja2"
                value={Total2}
                onChange={(event)=>{
                  setTotal2(event.target.value);
                      
              }}
                />
                
                </td>
                <tr>
               </tr>
                
               
                   <td> <button className="caja2"
                    onClick={adicionar}
                   >
                       ADICIONAR
                   </button>
                  
                   </td>
                   
                </tr>
               
                
                </tbody>
               
            </table>
          
           
        </form>
       
       
    </div>



    </div>



    );
    
}


export default GardenTable;




