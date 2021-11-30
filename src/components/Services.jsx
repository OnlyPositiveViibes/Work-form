import services from "../Data/services";
import Service from "./Service";


function Services() {

    
    
    return(
        <>
         {services.map( obj => 
             <Service key={obj.id} service={obj.service}></Service>
         )}

        </>
    )
}

export default Services;