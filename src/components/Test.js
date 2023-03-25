import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import data from '../data.json'


function Test() {

    const [myvar, setMyvar] = useState(data)

    return (
        <div>
            <h1>Testing React</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>username</TableCell>
                            <TableCell>email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myvar.map((el,idx)=>{
                            return (<TableRow key={idx}>
                                <TableCell>{el.id}</TableCell>
                                <TableCell>{el.name}</TableCell>
                                <TableCell>{el.username}</TableCell>
                                <TableCell>{el.email}</TableCell>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Test