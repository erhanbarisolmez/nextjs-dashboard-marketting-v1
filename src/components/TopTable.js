'use client'
import { palette } from '@/style/color';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Images from './Images';
function createData(image, name, status, revenue, conversion) {
  return { image, name, status, revenue, conversion };
}

const imageBgColor = [palette.green[100], palette.red[100], palette.lightBlue[100]];


export default function TopTable(props) {
  const {
    column1,
    column2,
    column3,
    column4,
    column5,
    outOfStock,
    inStock,
    comingSoon
  } = props;

  const stock = {
    outOfStock: outOfStock,
    inStock: inStock,
    comingSoon: comingSoon
  }
  const rows = [
    createData(<Images image="/iphone-14.png" alt="one plus 9 pro" />, 'Oneplus 9 Pro', stock.outOfStock, '$12.5k', "+24"),
    createData(<Images image="/iphone-14.png" alt="apple iphone 13 pro" />, 'Apple Iphone 13 Pro', stock.inStock, '$45k', "-18"),
    createData(<Images image="/iphone-14.png" alt="apple iphone 14" />, 'Apple Iphone 14 ', stock.comingSoon, '$98.2k', "+55"),
  ];
  return (
    <TableContainer >
      <Table sx={{ minWidth: '650', maxHeight: '60vh' }} aria-label="caption table">

        <TableHead>
          <TableRow >
            <TableCell align="left">{column1}</TableCell>
            <TableCell align="left">{column2}</TableCell>
            <TableCell align="right">{column3}</TableCell>
            <TableCell align="right">{column4}</TableCell>
            <TableCell align="right">{column5}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody >
          {rows.map((row, index) => (
            <TableRow key={row.image} >
              <TableCell align='center'
                sx={{
                  border: 'none',
                }}>
                <Box sx={{
                  display: 'flex',
                  width: '50%',
                  borderRadius: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1,
                  backgroundColor: imageBgColor[index % imageBgColor.length]
                }}>
                  {row.image}
                </Box>
              </TableCell>
              <TableCell align='left'
                sx={{
                  border: 'none',
                }}>
                {row.name}
              </TableCell>
              <TableCell align="right"
                sx={{
                  border: 'none',
                  color: row.status === stock.outOfStock ? palette.deepPurple[500] : palette.amber[500] &&
                    row.status === stock.inStock ? palette.green[500] : palette.amber[500],
                  display: 'flex',
                  mt: 2
                }}>
                <Box sx={{
                  display: 'flex',
                  borderRadius: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1,
                  backgroundColor: row.status === stock.outOfStock ? palette.deepPurple[100] : palette.amber[100] &&
                    row.status === stock.inStock ? palette.green[100] : palette.amber[100],
                }}>
                  {row.status}
                </Box>
              </TableCell>
              <TableCell align="right"
                sx={{
                  border: 'none',
                }}>
                {row.revenue}
              </TableCell>
              <TableCell align="right"
                sx={{
                  border: 'none',
                  color: row.conversion.includes('+') ? palette.green[500] : palette.red[500],
                }}>
                {row.conversion}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}