import React from 'react'
import '../styles/paginate.styles.css'

const Paginate=(props)=>
{
    const {total_pages,currentPage,getCurrentPage}=props

    let numLinks=4
    let start=1
    let end=6
    let prev_page=0;
    let pages=[];

    if(total_pages>1)
    {
        if(currentPage>1)
        {
            pages.push(<button  key={-1} className="page-button prev-button" onClick={()=>getCurrentPage(currentPage - 1)}> {"< Prev"} </button>)
        }else
        {
            pages.push(<button key={-2} className="page-button prev-button inactive" disabled> {"< Prev"} </button>)
        }

        if(currentPage>numLinks)
        {
            pages.push(<button key={-3} className="page-button"> 1 </button>)
            pages.push(<button key={-4} className="page-button"> {"..."} </button>)
        }

        start= Math.max(currentPage-numLinks,1)
        end=Math.min(currentPage+numLinks,total_pages)
        
        for(let i=start;i<=end;i++)
        {
            if(i==currentPage)
            {
                pages.push(<button key={i} className={ currentPage==i?'page-button active':'page-button'} >{i}</button>)
            }else
            {
                if(i==1)
                {
                    pages.push(<button key={i} className={ currentPage==i?'page-button active':'page-button'} onClick={()=>getCurrentPage(i)}>{i}</button>)
                }else
                {
                    pages.push(<button key={i} className={ currentPage==i?'page-button active':'page-button'} onClick={()=>getCurrentPage(i)}>{i}</button>)
                }
            }
        }

        if(currentPage+5<total_pages)
        {
            pages.push(<button key={-5} className='page-button '> ... </button>)
            pages.push(<button key={-6} className='page-button ' onClick={()=>getCurrentPage(parseInt(total_pages))}> {parseInt(total_pages)} </button>)
        }

        if(currentPage<total_pages)
        {
            pages.push(<button key={-7} className="page-button prev-button" onClick={()=>getCurrentPage(currentPage + 1)}> {"Next >"} </button>)
        }else
        {
            pages.push(<button key={-8} className="page-button prev-button inactive"> {"Next >"} </button>)
        }
    }
    return pages;
}

export default Paginate