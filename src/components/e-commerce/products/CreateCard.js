
import { palette } from '@/style/color';
import { variants } from '@/utils/variants';
import ClockIcon from '@mui/icons-material/AlarmOutlined';
import AppIcon from '@mui/icons-material/AppsOutlined';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import CompassIcon from '@mui/icons-material/ExploreOutlined';
import { Box, Divider, Grid } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ControlledCheckbox from '../../CheckBox';
import TextFieldCustom from '../../TextFieldCustom';
import { TypographyCustom } from '../../TypographyCustom';
import VerticalLinearStepper from './VerticalLinearStepper';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateCard({ openModal, handleClose }) {
  const subtitle2 = variants.typography.subtitle2;
  return (
    <>
      <Modal
        keepMounted
        open={openModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* HEADER TEXT */}
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2" fontWeight={"bold"}>
                Create App
              </Typography>
              {/* HEADER CLOSE ICON */}
              <CloseIcon onClick={handleClose} sx={{ display: 'flex', justifyContent: 'end', }} />
            </Grid>
            {/* DIVIDER */}
            <Grid item xs={12}  >
              <Divider orientation='horizontal' />
            </Grid>
            { /* CONTENT */}
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', }}>
              {/* CONTENT LEFT - STEPPER  */}
              <Grid item xs={4}>
                <VerticalLinearStepper />
              </Grid>
              {/* CONTENT RIGHT */}
              <Grid item xs={8} p={5} >
                <Grid item xs={12} >
                  <TypographyCustom text="App Name" fontWeight="600" variant={subtitle2} />
                  <TextFieldCustom sx={{ mt: 1, bgcolor: palette.grey[50] }} />
                </Grid>
                <Grid item xs={12}>
                  <TypographyCustom text="Category" fontWeight="600" variant={subtitle2} mt={5} />
                </Grid>
                <Grid item xs={12}>
                    
                    <CheckBoxContent
                      icon={<CompassIcon fontSize='large'  />}
                      text1="Quick Online Courses"
                      text2="Creating a clear text structure is just one SEO"
                    />
               

                  <CheckBoxContent
                    icon={<AppIcon fontSize='large' />}
                    text1="Face to Face Discussions"
                    text2="Creating a clear text structure is just one aspect"
                  />


                  <CheckBoxContent
                    icon={<ClockIcon fontSize='large' />}
                    text1="Full Intro Training"
                    text2="Creating a clear text structure copywriting"
                  />
                 

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}


export const CheckBoxContent = (props) => {
  const { icon, text1, text2, ...otherProps } = props;
  return (
    <>
    <Grid container>
    <Grid item xs={12}>
      <Divider />
    </Grid>
    <Grid item xs={12} display={'flex'} justifyContent={'space-between'} p={2}>
      <TypographyCustom icon={icon} { ...otherProps}  />
      <TypographyCustom variant="subtitle2" fontWeight={600}
        text={text1}
        text2={text2} />
      <ControlledCheckbox  />
      </Grid>
      </Grid>
    </>
  )
}

