import React, { Component } from 'react'

const TableBody=(props)=>
{
    const {cars,handleDelete,handleModal,getCar}=props
    return(
        <div>
            <table id="cars">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Producing Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                cars.length?
                <tbody>
                    {cars.map((car,index)=>(
                        <tr key={index}>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.producing_country}</td>
                            <td>
                                <a title="Remove" onClick={()=>{if(window.confirm('Delete this car?')){handleDelete(car.id)}}} className="delete-button">X</a>
                                <a className="edit-button" onClick={()=>{handleModal();getCar(car.id)}} title="Update">+</a>
                                </td>
                        </tr>
                    ))}
                </tbody>

                :<tbody ><tr><td colSpan="5"><span className='error-text'>No Data Found !!</span></td></tr></tbody>}
            </table>
        </div>
        
    )
}

export default TableBody