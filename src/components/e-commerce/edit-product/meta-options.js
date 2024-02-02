import Card from '@/components/e-commerce/Card'
import { Container, Grid } from '@mui/material'
import { TabButton } from '../TabButton'
import { TabHeader } from '../TabHeader'
import ExampleTextareaComment from '../TextArea'
import { TextFieldCard } from '../TextFieldCard'

export const MetaOptions = () => {

  return (
    <>
    <Card>
      <Container>
        <Grid  item  sx={{ mt: 6, mb:6}}>
          <TabHeader 
             headerTextField="Meta Options"
          />
        
        <TextFieldCard 
          textHeader="Meta Tag Title"
          textColorHeader=" "
          textFieldPlaceHolder="Meta tag name"
          textBottom="Set a meta tag title. Recommended to be simple and precise keywords."
        />

        <TabHeader 
          headerTextFieldLevel="body-sm"
          headerTextField="Meta Tag Description"
          sx={{mt:3}}
        />
        <ExampleTextareaComment />
        
        <TabHeader 
          level="body-xs"
          text="Set a meta tag description to the product for increased SEO ranking."
          sx={{opacity: 0.6}}
        />
        
    
       <TextFieldCard 
        textHeader="Meta Tag Keywords"
        textColorHeader=" "
        textFieldPlaceHolder= ' '
        textBottom="Set a list of keywords that the product is related to. Separate the keywords by adding a comma , between each keyword."
       />

        </Grid>
      </Container>
    </Card>

    { /* BUTTON  */}
    <TabButton />
    </>
  )
}
