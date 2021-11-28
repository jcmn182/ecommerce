//components
import {FilterComponent} from './FilterComponent.jsx'
import {SingleCardComponent} from './SingleCardComponent.jsx';

export const HomeComponent = () => {
    return (
    <div className="flex">
        <FilterComponent />
        <div className="lay_out">
            <SingleCardComponent/>
        </div>
    </div> 
        )
}
