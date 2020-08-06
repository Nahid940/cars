import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";

const PieChart=(props)=>
{
    const {values,labels}=props

    const [options,setOptions] = useState({
        labels:[],
        dataLabels: {
            formatter: function (val, opts) {
                return opts.w.config.series[opts.seriesIndex]
            },
        },
    });


    useEffect(()=>
    {
        setOptions({...options,labels:labels})
    },[labels])

    return(
        <div className=''>
             <Chart
              options={options}
              series={values}
              type="pie"
              width="300"
            />
        </div>
    )

}
export default PieChart