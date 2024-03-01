import BasicRating from '@/components/Ratings';
import Card from '@/components/e-commerce/Card';
import Table from '@mui/joy/Table';
import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import CheckBoxJoy from '../CheckBoxJoy';
import { TabHeader } from '../TabHeader';

function createData(id, rating, customer, comment, date, approved) {
  return { id, rating, customer, comment, date, approved };
}

const rows = [
  createData(1, '4.5', "John Doe", "Great product! I love it!", new Date().toISOString(), false),
  createData(2, '5.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(3, '4.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(4, '3.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(5, '4.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(6, '2.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(7, '5.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(8, '4.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(9, '4.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(10, '3.0', "Jane Smith", "I don't like", new Date().toISOString(), false),
  createData(11, '4.5', "John Doe", "Great product! I love it!", new Date().toISOString(), false),
  createData(12, '4.5', "John Doe", "Great product! I love it!", new Date().toISOString(), false),
  createData(13, '3.5', "John Doe", "Great product! I love it!", new Date().toISOString(), false),
  createData(14, '2.5', "John Doe", "Great product! I love it!", new Date().toISOString(), false),
  createData(15, '4.5', "John Doe", "Great product! I love it!", new Date().toISOString(), false),
]

export const ReviewsTabContent = () => {
  const [selectedRowID, setSelectedRowId] = useState([]);
  const pathname = usePathname();
  const handleCheck = (id) => {
    setSelectedRowId((prevSelectedRowIDs) => {
      const index = prevSelectedRowIDs.indexOf(id);
      if (index === -1) {
        return [...prevSelectedRowIDs, id];
      } else {
        return prevSelectedRowIDs.filter((rowID) => rowID !== id);
      }
    });
  };

  const allRowIds = rows.map((row) => row.id);

  const selectedComplete = () => {
    setSelectedRowId((prevSelectedRowIDs) => {
      return prevSelectedRowIDs.length === rows.length ? [] : allRowIds;
    })
  }

  return (
    <Grid item xs={12}>
      <Card>
        <Container>
          <Grid item xs={12} sx={{
            mt: 6, mb: 6
          }}>
            <Grid item xs={12}
              sx={{
                display: 'flex',
              }}>
              {/* HEADER */}
              <Grid item xs={6} display='flex' justifyContent={'flex-start'}>
                <TabHeader
                  headerTextField='Customer Reviews'
                />
              </Grid>
              {/*RATINGS */}
              <Grid item xs={6} display='flex' justifyContent={'flex-end'} sx={{
                alignItems: 'center'
              }}>
                <TabHeader level='body-sm' titleTextField='Overall Rating:' />
                <BasicRating value={4} sx={{ display: 'flex', alignItems: 'center', ml: 1 }} />
              </Grid>
            </Grid>
            {/* REVIEWS CONTENT GOES HERE */}
            <Table>
              <thead>
                <tr>
                  <th scope='col'><CheckBoxJoy checked={selectedRowID.length === rows.length} onChange={selectedComplete} /></th>
                  <th scope="col">Rating</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Review Text</th>
                  <th scope="col">Date of Review</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <>
                    <tr key={row.id}>
                      <td>
                        <CheckBoxJoy
                          checked={selectedRowID.includes(row.id)}
                          onChange={() => handleCheck(row.id)}
                        />
                      </td>
                      <td><BasicRating value={row.rating} /></td>
                      <td>
                      
                        <Link href={`edit-product/inbox/${row.customer}`}>
                        {row.customer}
                      </Link>
                 
                  </td >
                  <td>{row.comment}</td>
                  <td>{row.date}</td>
                </tr>
            </>
              ))}
          </tbody>
        </Table>

    </Grid>


      </Container >
    </Card >
    </Grid >
  )
}
