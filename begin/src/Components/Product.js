export default function Product(){
    //const products=['Computer','Modem','Phone','Speaker','Computer']
    const products=[
        {id:1,name:'Computer',price:500},
        {id:2,name:'Modem',price:50},
        {id:3,name:'Phone',price:200},
        {id:4,name:'Speaker',price:20},
        {id:5,name:'Computer',price:500}
    ]

    const productList=   products.map((products)=>(
        <h3 key={products.id}>
         {products.name} : £{products.price}
        </h3>));
    return(<div>   {productList} </div>)

}