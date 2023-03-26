import { CircularProgress,Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {client} from '../api/api'


function Test() {
    const [data, setData] = useState([])
    useEffect(()=>{
        client("users")
        .then((res)=>{
            console.log(res)
            setTimeout(()=>{
                setData(res.data)
            },1000)
        })
        .catch((err)=>console.log(err))

    },[])

    return (
        <div>
            <h1>Testing React</h1>
            
            {data.length <= 0 ? 
                (<Box >
                    <CircularProgress />
                </Box> )
            :
             (<TableContainer>
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
                        {data.map((el,idx)=>{
                            return (<TableRow key={idx}>
                                <TableCell>{el.id}</TableCell>
                                <TableCell>{el.name}</TableCell>
                                <TableCell>{el.username}</TableCell>
                                <TableCell>{el.email}</TableCell>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>)
        }
        </div>
    )
}

export default Test