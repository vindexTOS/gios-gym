 
import React ,{ useContext } from "react";
import {SearchContext} from "../../context"
import {Link} from "react-router-dom"
import Loading from "../../home/Loading"
function Gymnastics( ) {

   const {navFilter,loading} = useContext(SearchContext)
   return <div  className="product-wrapper place-content-center justify-center h-[100%] gap-10 mt-[1rem] w-[100%]  pb-[20rem]  ">{navFilter.map((items)=>{
       const { title, img, price, id,type } = items
       if(type ===  "gymnastic")
       return   <Link key={id} to={`/${type}/${id}`} title={items.Specifications}>
       {loading ? (
         <div
           key={id}
           className="flex flex-col border-4 items-center justify-center text-center bg-[#F9F6EE] w-[320px] h-[300px] text-[13px]"
           style={{
             boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
             border: "1px solid #c5c5c5 ",
             borderRadius: "10%",
             fontWeight: "bold",
           }}
         >
           <Loading />
         </div>
       ) : (
         <div
           className="flex flex-col border-4 items-center text-center bg-[#F9F6EE] w-[320px] h-[300px] text-[13px]"
           style={{
             boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
             border: "1px solid #c5c5c5 ",
             borderRadius: "10%",
             fontWeight: "bold",
           }}
         >
           <img
             className="w-[320px] h-[250px] border-2    "
             src={img}
             style={{
               borderTopLeftRadius: "10%",
               borderTopRightRadius: "10%",
               borderBottom: "0.5px solid gray",
             }}
           />

           <h4>{title}</h4>
           <h6 className="text-green-600">${price}</h6>
         </div>
       )}
     </Link>
   })}</div>
}

export default Gymnastics;