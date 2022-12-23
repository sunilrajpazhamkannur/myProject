export default function IndexofExample()
{
    const fruits =["Apple","Orange","Mango"];

    const fruitList=   fruits.map((fruit,index)=>(
        <h3 key={index}>
         {fruit}
        </h3>));
return(
    <div>{fruitList}</div>
)

}