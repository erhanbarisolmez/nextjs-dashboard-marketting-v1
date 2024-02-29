import AutoCompleteAdvanced from "@/components/AutoCompleteAdvanced";
import { TypographyCustom } from "@/components/TypographyCustom";
import Card from "@/components/e-commerce/Card";
import ExampleTextareaComment from "@/components/e-commerce/TextArea";
import { Avatar } from '@mui/joy';
import Input from '@mui/joy/Input';
import { Container, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
const users = [
  { name: "Brian Cox", image: <Avatar /> },
  { name: "Emma Smith", image: <Avatar /> },
  { name: "Max Smith", image: <Avatar /> },
  { name: "Sean Bean", image: <Avatar /> },
  { name: "John Miller", image: <Avatar /> },
  { name: "Ana Crown", image: <Avatar /> },
  { name: "Dan Wilson", image: <Avatar /> },
  { name: "Francis Mitcham", image: <Avatar /> }
];


export const Send = () => {
  const classes = useStyles();

  return (
    <>
      <Card>
        <Container>
          <Grid spacing={1} container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>

            <Grid item xs={1}>
              <TypographyCustom
                text="TO:"
                sx={{
                  mt: 1,
                  ml: 1,
                  fontWeight: 700
                }}
              />
            </Grid>

            <Grid item xs={10}>
              <AutoCompleteAdvanced
                fullWidth
                placeholder={"Select to users"}
                options={users} //
                getOptionLabel={option => (
                  <>
                    <div className={classes.users}>
                      <div>
                        {option.image}
                      </div>
                      <span>
                        {option.name}
                      </span>
                    </div>
                  </>
                )}
                defaultValue={[users[0]]}
              />
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ mt: 1 }} />
     
        <Grid item sx={{ mt: 1 }}>
          <Input placeholder="Subject" variant="plain" />
        </Grid>
        <Divider sx={{ mt: 1 }} />

        <ExampleTextareaComment
          showFileIcon={true}

          />
      </Card>
    </>
  )
}

export const useStyles = makeStyles({
  users: {
    display: 'flex'
  }
})