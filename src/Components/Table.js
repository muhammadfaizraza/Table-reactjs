import React from 'react'
import '../Styles/Table.css'


const Table = ({data ,column}) => {
  console.log(column)
  return (
    <div>





<table>

<thead>
<tr>
{
column.map((header)=> <th>{header.header} </th>)

}

</tr>
</thead>

<tbody>

{data.map((row)=>(
<tr>
{column.map((col)=>(
<td>
{row[col.field]}
  
</td>
))
}



</tr>
))}
</tbody>





</table>

    </div>
  )
}

export default Table