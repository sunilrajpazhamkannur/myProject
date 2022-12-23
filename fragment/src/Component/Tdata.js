import Column from "./Column";

function Tdata(){
    var thead=["SNo","Item Code","Description","Price"];
    var tBody=[
                    [1,100,"Soap","£2.5"],
                    [1,100,"Soap","£2.5"],
                    [1,100,"Soap","£2.5"],
                    [1,100,"Soap","£2.5"]
                ];
  

    return(
        <div>
       <Column heading={thead} tBody={tBody} />
       
       </div>
    )
}
export default Tdata