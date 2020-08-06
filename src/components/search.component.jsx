import React from 'react'
import '../styles/search-result.styles.css'

const Search=(props)=>
{
    const {hints,showSuggestion}=props
    return(
        <div className="search-box">
            <input type="text" placeholder="Search here" onChange={(e)=>props.handleSearch(e.target.value)}/>
            {showSuggestion?
            <div className="search-reasult" >
                <ul>
                    {hints.length?hints.map((hint,index)=><li key={index} onClick={()=>props.handleSearchSubmit(hint.manufacturer)}><a>{hint.manufacturer}</a></li>):''}
                </ul>
            </div>:'' }
        </div>

    )
}

export default Search