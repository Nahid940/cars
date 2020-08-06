import React,{useState,useEffect} from 'react'
import '../styles/table.styles.css'
import PieChart from './piechart.component';
import {endpoint} from '../endpoint'
import Search from './search.component'
import Paginate from './paginate.component'
import TableBody from './table-body.component';
import Upload from './upload.component';
import Modal from './modal.component';
const Table=(props)=>
{
    const [cars,setCars]=useState([])
    const [hints,setHints]=useState([])
    const [showSuggestion,setShowSuggestion]=useState(false)

    const [values,setValues]=useState([])
    const [labels,setLabels]=useState([])
    const [searched,setSearched]=useState(false)
    const [total_pages,setTotalpages]=useState(0)
    const [currentPage,setCurrentPage]=useState(1)
    const [manufacturer,setManufacturer]=useState("")
    const [dataprocess,setDataProcess]=useState(false)

    const [car,setCar]=useState({
        id:"",
        manufacturer:"",
        model:"",
        year:"",
        producing_country:""
    })

    const [showModal,setShowModal]=useState(false)

    const handleModal=()=>
    {
        setShowModal(showModal?false:true)
    }


    const processObject=()=>
    {
        var result=[]
        let v=[]
        let lbl=[]
        cars.forEach(
            (x)=>result[x.manufacturer]=(result[x.manufacturer] || 0)+1
        );
        for (const property in result) {
            v.push(parseInt(result[property]))
            lbl.push(property)
        }
        setValues(v)
        setLabels(lbl)
    }

    useEffect(()=>{
        if(!manufacturer)
        {
            fetch(endpoint+`?cars=1&page=${currentPage}`).then(response=>response.json()).then(data=>{
                setCars(data.cars);
                setTotalpages(data.total);
            })
        }else
        {
            fetch(endpoint+`?search=1&manufacturer=${manufacturer}&page=${currentPage}`).then(response=>response.json()).then(data=>
                {setCars(data.cars);
                setTotalpages(data.total);})
            setShowSuggestion(false)
            setSearched(true)
        }
        
    },[currentPage,dataprocess])

    useEffect(()=>{
        processObject()
    },[cars])

    const handleDelete=(id)=>
    {
        fetch(endpoint+`?delete=1&id=${id}&page=${currentPage}`).then(response=>response.json()).then(data=>
            {alert("Data Deleted!!");
            setCars(data.cars);
            if(data.cars=='' && data.total>1)
            {
                setCurrentPage(currentPage-1)
            }
            setTotalpages(data.total);

        })
    }

    const handleSearch=(value)=>
    {
        if(value!='')
        {
            fetch(endpoint+`?search=1&key=${value}&page=${currentPage}`).then(response=>response.json()).then(data=>setHints(data))
            setShowSuggestion(true)
        }else
        {
            if(searched)
            {
                fetch(endpoint+'?cars=1').then(response=>response.json()).then(data=>{
                    setCars(data.cars);
                    setTotalpages(data.total);
                })
            }
            setManufacturer("")
            setShowSuggestion(false)
        }
    }

    const handleSearchSubmit=(manf)=>
    {
        if(manf!='')
        {
            setManufacturer(manf)
            fetch(endpoint+`?search=1&manufacturer=${manf}&page=${currentPage}`).then(response=>response.json()).then(data=>
                {setCars(data.cars);
                setTotalpages(data.total);})
            setShowSuggestion(false)
            setCurrentPage(1)
            setSearched(true)
        }
    }

    const getCurrentPage=(page)=>
    {
        setCurrentPage(page)
    }

    const handleDataProcess=(state)=>
    {
        setDataProcess(state)
    }

    const getCar=(id)=>
    {
        const single_car=cars.find(car => car.id == id);
        setCar({
            id:single_car.id,
            manufacturer:single_car.manufacturer,
            model:single_car.model,
            year:single_car.year,
            producing_country:single_car.producing_country
        })
    }

    const handleFormUpdate=(values)=>
    {
        if(values!='')
        {
            setCars(values)
            setShowModal(false)
            alert("Data updated successfully !!")
        }
    }


    const handleChange=(e)=>
    {
        setCar(
           {...car,[e.target.name]:e.target.value}
        )
    }


    return(
        <div>
            <div className="chart-area">
                <div className="text-left">Chart of Car Distribution</div>
                {cars.length?<PieChart values={values} labels={labels}/>:<span className="text-error">Pie chart data not found!</span>}
            </div>
                
            <div className="box">
            <Search 
                handleSearch={handleSearch} 
                showSuggestion={showSuggestion} 
                handleSearchSubmit={handleSearchSubmit} 
                hints={hints}/>
                <Upload handleDataProcess={handleDataProcess}/>
            </div>
                
            <TableBody cars={cars} handleDelete={handleDelete} handleModal={handleModal} getCar={getCar}/>
            <Modal showModal={showModal} 
                handleModal={handleModal}
                handleFormUpdate={handleFormUpdate}
                currentPage={currentPage} 
                car={car}
                handleChange={handleChange}
            />
            
            <div className="pages">
                <Paginate total_pages={total_pages} currentPage={currentPage} getCurrentPage={getCurrentPage}/>
            </div>
        </div>
    )
}

export default Table