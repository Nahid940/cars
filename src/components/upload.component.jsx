import React,{useState} from 'react'
import {endpoint} from '../endpoint'

const Upload=(props)=>
{
    const [csv,setCSV]=useState('')

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(!csv)
        {
            alert("Select CSV File !!")
        }else
        {
            const data = new FormData(e.target);
            fetch(endpoint+`?file=1`,{body:data,method:"post"}).then(response=>{setCSV('');alert('Process complete.');props.handleDataProcess(true)})
        }
        
    }
    const handleChange=(e)=>
    {
        setCSV(e.target.value)
    }

    return(
        <div className="upload-area">
            <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} name="csv" value={csv} accept=".csv" className="file-input"/>
                <button className="upload-button">Upload CSV</button>
            </form>
        </div>
    )
}

export default Upload