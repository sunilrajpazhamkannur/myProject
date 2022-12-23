
import TableRow from "./TableRow"

function Column({heading,tBody}){
    
    return(
        <>
        <table style={{ width: 500 }}>
                <thead>
                    <tr>                        
                        {heading.map((head) => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {tBody.map(row => <TableRow row={row} />)}
                </tbody>
            </table>
        </>
    )
}
export default Column