import { palette } from '@/style/color';
import {
  ComputerOutlined as ComputerIcon,
  EditOutlined as EditIcon,
  DonutLargeOutlined as MaintainerIcon,
  PersonOutlineOutlined as PersonIcon,
  SettingsOutlined as SettingsIcon
} from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslations } from 'next-intl';
import Images from './Images';
function createData(image, user, username, email,roleIcon, role, status) {
  return { image, email, user, username, roleIcon, role, status };
}
// 
const imageBgColor = [palette.green[100], palette.red[100], palette.lightBlue[100]];

export default function UserTable() {
  const t = useTranslations();
  const status = {
    pending: t('pending'),
    inactive: t('inactive'),
    active: t('active')
  }
  
  const role = {
    admin: t('admin'),
    maintainer: t('maintainer'),
    editor:t('editor'),
    subscriber:t('subscriber'),
    author: t('author')
  }
  
  const icons = {
    person: <PersonIcon sx={{color:palette.deepPurple[300]}} />,
    maintainer: <MaintainerIcon sx={{ color: palette.green[300]}}/>,
    settings: <SettingsIcon sx={{ color: palette.amber[300]}}/>,
    edit: <EditIcon sx={{ color: palette.lightBlue[300]}}/>,
    computer: <ComputerIcon sx={{color:palette.red[300]}}/>
  }
  const rows = [
    createData(
      <Images image="/iphone-14.png" alt="one plus 9 pro"  width={50} height={50} />,
      "Susan S",
      "@susan",
      'susanna@gmail.com',
      icons.computer,
      role.admin,
      status.pending
    ),
    createData(
      <Images image="/iphone-14.png" alt="apple iphone 13 pro"  width={50} height={50}/>,
      "Lonnie L",
      "@lonnie",
      'lonnie@gmail.com',
      icons.maintainer,
      role.maintainer,
      status.inactive
    ),
    createData(
      <Images image="/iphone-14.png" alt="apple iphone 14"  width={50} height={50} />,
      "Tilman T",
      "@tilman",
      'tilman@gmail.com',
      icons.edit,
      role.editor,
      status.inactive
    ),
    createData(
      <Images image="/iphone-14.png" alt="apple iphone 14"  width={50} height={50} />,
      "Tilman T",
      "@tilman",
      'tilman@gmail.com',
       icons.person,
      role.subscriber,
      status.active
    ),
    createData(
      <Images image="/iphone-14.png" alt="apple iphone 14"  width={50} height={50} />,
      "Tilman T",
      "@tilman",
      'tilman@gmail.com',
      icons.settings,
      role.author,
      status.pending,
    ),
    createData(
      <Images image="/iphone-14.png" alt="apple iphone 14"  width={50} height={50} />,
      "Tilman T",
      "@tilman",
      'tilman@gmail.com',
      icons.person,
      role.subscriber,
      status.active
    ),
    createData(
      <Images image="/iphone-14.png" alt="apple iphone 14"  width={50} height={50} />,
      "Tilman T",
      "@tilman",
      'tilman@gmail.com',
      icons.edit,
      role.editor,
      status.pending,
    ),
    createData(
      <Images image="/iphone-14.png" alt="apple iphone 14"  width={50} height={50} />,
      "Tilman T",
      "@tilman",
      'tilman@gmail.com',
      icons.settings,
      role.author,
      status.active
    ),
    createData(
      <Images image="/iphone-14.png" alt="apple iphone 14"  width={50} height={50} />,
      "Tilman T",
      "@tilman",
      'tilman@gmail.com',
      icons.settings,
      role.author,
      status.inactive,
    ),
  ];
  return (
    <TableContainer >
      <Table sx={{ minWidth: '650', maxHeight: '60vh' }} aria-label="caption table">

        <TableHead color="gray">
          <TableRow >
            <TableCell align="left">{t('user')}</TableCell>
            <TableCell align="left">{t('email')}</TableCell>
            <TableCell align="left">{t('role')}</TableCell>
            <TableCell align="left">{t('status')}</TableCell>
          </TableRow>
        </TableHead>


        <TableBody >
          {rows.map((row, index) => (
            <TableRow key={row.image} >
        
                <TableCell align='center'
                  sx={{
                    display:'flex',
                    mt:1,
                    justifyContent:'start',
                    alignContent:'center',
                    alignItems:'center'
                  }}>


                  <Grid item sx={{
                    display: 'flex',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1,
                    backgroundColor: imageBgColor[index % imageBgColor.length]
                  }}>

                    {row.image}

                  </Grid>
                  <Grid item sx={{
                    flex: 'display',
                    ml: 3,
                    textAlign: 'start',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: '50%'

                  }}>
                    {row.user}
                    <br/>
                    {row.username}

                  </Grid>
                </TableCell>
            
              
              <TableCell align='left'
                sx={{
                }}>
                {row.email}
              </TableCell>

              <TableCell align='left'
                sx={{
                }}>
                <Grid item sx={{
                  display: 'flex',
                  gap:1
                }}>
                <Grid item sx={{
                  display:'flex',
                }}>
                  {row.roleIcon}
                </Grid>
                <Grid item sx={{
                  display:'flex',
       
                }}>
                {row.role}
                </Grid>
                </Grid>
              </TableCell>

              <TableCell align="left"
                sx={{
                  color: row.status === status.inactive ? palette.grey[600] : palette.amber[500] &&
                    row.status === status.active ? palette.green[500] : palette.amber[600],
                  width:'12%'
                }}>
                <Box sx={{
                  display: 'flex',
               
                }}>
                  <Box sx={{
                         p:1,
                         borderRadius: 2,
                         backgroundColor: row.status === status.inactive ? palette.grey[300] : palette.amber[100] &&
                         row.status === status.active ? palette.green[100] : palette.amber[100],
                  }}>
                  {row.status}
                  </Box>
                </Box>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}