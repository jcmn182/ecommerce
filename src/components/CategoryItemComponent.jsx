// react router
import {useContext,useEffect} from 'react'
// react router dependencies
import { useParams } from "react-router-dom";
// global states
import {DataContext} from '../context/store/DataContext.js'
//faker data
import faker from 'faker';

export const CategoryItemComponent = () => {
   
    const products = [...Array(20)].map(()=>({
            id:faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            img:faker.image.food(),
            inStock:faker.random.arrayElement([0,3,5,6,7]),
            fastDelivery:faker.datatype.boolean(),
            raitings:faker.random.arrayElement([1,2,3,4,5])
    }))

    console.log(products)

    const {getItems,categorys} = useContext(DataContext);
    let params = useParams();
    let category = params.item
    useEffect(() => {
        getItems(category)

        /*return () => {
            getItems('')
        }*/

      }, [category])
      console.log(categorys)
    return (
        <div> 
          {
             categorys?
               (categorys.map( item => {
                    
                    return (
                        <div  key={item.id}>
                            <img src={item.image} alt="img"/>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <p>{item.rating.rate}</p>
                        </div>
                    )
                })): <p>cargando...</p>
            }  
        </div>
    )
}
