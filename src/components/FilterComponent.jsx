// react dependencies
import {useContext} from 'react';
//components
import {RatingComponent} from './RatingComponent.jsx';
// global state
import {SearchContext} from '../context/search/SearchContext.js'

export const FilterComponent = () => {
    const { byStock, byFastDelivery, byRating,searchByRating,
        SearchSortHightoLow,SearchSortLowToHigh,sort ,SearchbyStock,SearchbyFastDelivery,clearFilter} = useContext(SearchContext)

    return (
        <div className="lay_out_form text-sm">
            <p className="p-2 sm:p-5 text-sm sm:text-3xl">Filter products</p>
           <form>
            <div className="px-3 py-1 sm:px-8  sm:py-3">
                <input type="radio" name="group1" onChange={()=>SearchSortLowToHigh()}
                 checked={sort === "lowToHigh" ? true : false}/>
                <label className="p-2">Ascending</label>
            </div>
            <div className="px-3 py-1 sm:px-8  sm:py-3">
                <input type="radio" name="group1" onChange={()=>SearchSortHightoLow()}
                checked={sort === "HighToLow" ? true : false}/>
                <label className="p-2">Descending</label>
            </div> 
            <div className="px-3 py-1 sm:px-8  sm:py-3">
                <input type="checkbox" name="group1" onChange={()=> SearchbyStock()} checked={byStock}/>
                <label className="p-2"> Include Out of Stock </label>
            </div>
            <div className="px-3 py-1 sm:px-8  sm:py-3">
                <input type="checkbox" name="group1" onChange={()=> SearchbyFastDelivery()}
                checked={byFastDelivery}/>
                <label className="p-2"> Fast Delivery Only </label>
            </div>

            <div className="px-3 sm:px-8   flex items-center">
                <label className="pr-1">Rating:</label>
                <RatingComponent rate={byRating} style={{cursor:"pointer"}} onClick={(i)=>searchByRating(i+1)}/>
            </div>
            <button className="w-9/12 m-5 p-1 bg-black text-white rounded-sm" onClick={(e)=>clearFilter(e)}>Clear</button>
           </form>
        </div>
    )
}
