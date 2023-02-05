import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";


export default function Article({
  flags,
  name,
  region,
  population,
  languages,
}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell><img src={flags.svg} alt="Country flag" className="img"/></TableCell>
              <TableCell>{name.common}</TableCell>
              <TableCell>{region}</TableCell>
              <TableCell>{population.toLocaleString()}</TableCell>
              <TableCell>
                {Object.keys(languages).map(lang =>
                <li key={lang}>{languages[lang]}</li>
                )}
              </TableCell>
              <TableCell><Link to={`/${name.common}`}className="link">&#8250;</Link></TableCell>
            </TableRow>
          </TableBody>
        </Table>   
      </TableContainer>
        
    </>     
        
  );
}
        
        
          
    
 