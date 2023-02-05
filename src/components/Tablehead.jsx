import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';


export default function Tablehead({}) {
  return (
    
    <>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableCell>Flag</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Languages</TableCell>
            <TableCell></TableCell>
          </TableHead>
        </Table>   
      </TableContainer>
        
    </>     
        
  );
}
        
        
          
    
 