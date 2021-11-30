import companies from "../Data/companies";
import Companie from "./Companie";


function Companies() {

    
    
    return(
        <>
         {companies.map( com => 
             <Companie key={com.code} companie={com.title}></Companie>
         )}

        </>
    )
}

export default Companies;