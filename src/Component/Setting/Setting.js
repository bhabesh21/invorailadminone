 import { Navigate, useNavigate } from "react-router-dom"


export default function Setting() {
       
   const  navigate = useNavigate()

    return(

        <>
           <div className="container px-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-4">

                        <div >
                            <span>
                                <button type="button" className="text-white btn border border-primary" style={{background:"#19c3e6"}} onClick={()=> navigate("/logmodule")}
                                >LOG MODULE</button>
                            </span>

                        </div>
                    </div> 


                  


                </div>







            </div>
        </>
    )
}