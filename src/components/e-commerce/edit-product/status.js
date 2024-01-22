'use client'
import AutoCompleteCustom from '@/components/AutoCompleteCustom';
import { TypographyCustom } from '@/components/TypographyCustom';
import CircleIcon from '@mui/icons-material/Circle';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const statusColors = {
  Published: '#61FFB1',
  Draft: '#F5F5F5', // Örnek renk
  Scheduled: '#FFA500', // Örnek renk
  Inactive: '#BDBDBD', // Örnek renk
  default: '#221D1D'
};
export const Status = ({ statusOptions }) => {
  const [status, setStatus] = useState();
  const [iconColor, setIconColor] = useState('#221D1D'); // Initialize with default color

  const filteredStatusOptions = statusOptions.filter(option => option.label !== 'All');
  // Status'a göre ikon rengini dinamik olarak belirle
  useEffect(() => {
    const newIconColor = statusColors[status] || statusColors.default;
    setIconColor(newIconColor);
  }, [status]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  }
  
  return (
    <Container>
      <Grid container spacing={2} >
        <Grid item xs={12} mt={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'

        }}>
          <Grid container>
            <Grid item xs={10}>
              <TypographyCustom
                variant="h6"
                text="Status"
                fontWeight="bold"
              />
            </Grid>

            <Grid item xs={2} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end'
            }}>
              <CircleIcon fontSize='small' sx={{
                color:iconColor
            }} />
            </Grid>
          </Grid>


          <Grid item xs={12}>
            <AutoCompleteCustom
              options={filteredStatusOptions}
              value={status}
              onChange={handleStatusChange}

            />
          </Grid>
          <Grid item xs={12}>
            <TypographyCustom
              variant="subtitle2"
              text="Set the product status."
              sx={{ opacity: 0.7, color: 'gray' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

AutoCompleteCustom.prototype.handleChange = (event) => {
  const newStatus = event.target.value;
  setStatus(newStatus);

  const newIconColor = statusColors[newStatus] || statusColors.default;
  setIconColor(newIconColor);
}