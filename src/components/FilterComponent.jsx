// react dependencies
import {useState} from 'react';
//components
import {RatingComponent} from './RatingComponent.jsx';

export const FilterComponent = () => {

    const [rate, setRate] = useState(1)

    return (
        <div className="lay_out_form">
            <p className="p-5 text-3xl">Filter products</p>
           <form action="">
            <div className="px-8 py-3">
                <input type="radio" name="group1" />
                <label className="p-2">Ascending</label>
            </div>
            <div className="px-8 py-3">
                <input type="radio" name="group1"/>
                <label className="p-2">Descending</label>
            </div> 
            <div className="px-8 py-3">
                <input type="checkbox" name="group1"/>
                <label className="p-2"> Include Out of Stock </label>
            </div>
            <div className="px-8 py-3">
                <input type="checkbox" name="group1"/>
                <label className="p-2"> Fast Delivery Only </label>
            </div>

            <div className="px-8 py- flex items-center">
                <label className="pr-4">Rating:</label>
                <RatingComponent rate={rate} style={{cursor:"pointer"}} onClick={(i)=>setRate(i+1)}/>
            </div>
            <button className="w-9/12 m-5 p-1 bg-black text-white rounded-sm" >Clear</button>
           </form>
        </div>
    )
}
