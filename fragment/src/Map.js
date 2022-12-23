export default function Map()
{
    const myArray=['apple','orange','banana']
    const myArray2=['India','Japan','USA','UK']
    myArray.push('grapes')
    const spread=[...myArray,...myArray2]
const vehicle ={
    brand:'Ford',
    model: 'Fiesta',
    color:'red',
}
const cUpdate={
    year:'2020',
    tuype:'Car',
    color:'yellow',
}


return(
    <>
        {myArray.map((item)=><p>{item}</p>)}
        {spread}
        
        
       
      

      

    </>
)
}