//router 
import { Link } from "react-router-dom";

export const HomeComponent = ({data}) => {
    return (
        <div>
          {
              data?
               (data.map( (item, index) => {
                    
                    return (
                        <div className="p-3 text-black font-roboto border-card rounded-lg m-2 p-4 relative" key={index}>
                            <div className="flex justify-between pb-2">
                                <div>category</div>
                                <div> <Link to={`/category/${item}`}>{item}</Link></div>
                            </div>
                        </div>
                    )
                })): <p>cargando...</p>
            }  
        </div>
    )
}
