import React, { useEffect, useState } from "react"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Welcome = ()=>{
    const [showWelcome,setShowWelcome]=useState()
    useEffect(()=>{
       const data =localStorage.getItem("show-app")
       setShowWelcome(JSON.parse(data) ?? true)
    },[])
    const onHide = ()=>{
        setShowWelcome(false)
        localStorage.setItem("show-app",JSON.stringify(false))
         
    }
    return(
        <React.Fragment>
        {showWelcome &&(
            <div className="container r">
            <div className="bg-danger text-white my-3 rounded rounded-4">
                <FontAwesomeIcon
                 icon={faClose}
                 style={{float:"right",margin:"5px"}}
                 onClick={onHide} />
                 <h3 className="p-4 text-center">Welcome</h3>
            </div>
        </div>
        )
        }
        </React.Fragment>
    )
}