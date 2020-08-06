import React,{useState,useEffect} from 'react'
import {endpoint} from '../endpoint'
import '../styles/modal.styles.css'

const Modal=(props)=>
{
    const {showModal,handleModal,car,handleFormUpdate,id,currentPage,handleChange}=props

    const submitForm=(e)=>
    {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch(endpoint+`?update=1&id=${car.id}&page=${currentPage}`,{body:data,method:'post'}).then(response=>response.json()).
        then(data=>{
            if(data.cars)
            {
                handleFormUpdate(data.cars);
            }else
            {
                alert("Something went wrong !!")
            }
        });
    }


    return(
        <div className={showModal?'display-block':'display-none'}>
            <section className="modal-main">
                <h4>Update Car Info</h4>
                <form action="" onSubmit={submitForm}>
                    <table className="modal-table">
                        <tbody>
                            <tr>
                                <td>Manufacturer</td>
                                <td><input  className="input-field" name="manufacturer" onChange={handleChange}  value={car.manufacturer} type="text" required/></td>
                            </tr>
                            <tr>
                                <td>Model</td>
                                <td><input className="input-field" onChange={handleChange} name="model" value={car.model} type="text" required/></td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td><input className="input-field" onChange={handleChange} name="year" value={car.year} type="text" required/></td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td><input className="input-field" onChange={handleChange} name="producing_country" value={car.producing_country} type="text" required/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="button-area">
                        <button type="Submit">Update</button>
                        <button type="button" className='btn-close' onClick={()=>handleModal()} >close</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Modal