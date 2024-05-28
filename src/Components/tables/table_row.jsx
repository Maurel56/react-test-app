import { Sheet, Table } from "@mui/joy";

function ProductTable({products}){
    const row = [];

    for( let prod of products ){
        row.push(<ProductRow key={prod.name} product={prod}> </ProductRow>)
    }
    
    return <>
        <Sheet>
            <Table>
                <thead>
                    <tr>
                        <th style={{width: '40%'}}>Noms</th>
                        <th>Prix (Fcfa)</th>
                        <th>Cathégories</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </Table>
        </Sheet>
    </>
}

function ProductRow({product}){
    const style = product.isStocked ? undefined : {color: 'red'}
    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
    </tr>
}

export default ProductTable;