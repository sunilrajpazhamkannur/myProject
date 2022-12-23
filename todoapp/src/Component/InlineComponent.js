import './Style.css';
const header={
    color:'blue',
    fontSize: '40px',
}


export default function InlineComponent(){
    return(
        <div> 
            <h1 style={header} > InlineComponent Examples</h1>
            <h2 className='header1' > CSS Style Sheet</h2>
            
            </div>
    )
}