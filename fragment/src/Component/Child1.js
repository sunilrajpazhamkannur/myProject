import React from "react"
function Child1(props)
{
   
    return(
        <div>
            <>
            <h3>Child Click : {props.count1}</h3>
            { console.log("Child Working....")}
            </>
        </div>
    )
}
export default React.memo(Child1)