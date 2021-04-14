import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';


import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { Card } from './Card';
import Objects from './Objects';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    alignSelf: 'center',
    marginLeft: '3%'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Projects</Typography>
         
        </AccordionSummary>
        

<Objects />

        
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Certifices </Typography>
          
        </AccordionSummary>
        <AccordionDetails>

        <Card 
key='1'
alt = "second-accordeon"
height = '400'
width = '700'
image = 'http://picsum.photos/700/300?random=2'
imageTitle = 'Second image'
variantHeading = 'h2'
styleHeading = 'styleHeading'
HeadingText = 'Sertificates'
variantParagraph = 'body1'
styleParargaph = 'styleParargaph '
ParagraphText = 'Tatyana is a certified Autodesk partner in Russia. Design is carried out according to the most modern Industry 4.0 standards, including additions from 2021. A Building Information Model (BIM) is a material and functional description of a building in digital form that allows the information to be shared in a jointly agreed manner'
/>
        

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Learning with Tanya</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <Card 
key='2'
alt = "third-accordeon"
height = '400'
width = '700'
image = 'http://picsum.photos/700/300?random=3'
imageTitle = 'Third image'
variantHeading = 'h3'
styleHeading = 'styleHeading'
HeadingText = 'Get deep in BIM'
variantParagraph = 'body1'
styleParargaph = 'styleParargaph '
ParagraphText = 'The training takes place according to the method of going to cafes and showing the language. And also a sweet smile, which sets you in a completely unteachable mood. Recommended: 10 out of 10'
/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Card 
key='3'
alt = "four-accordeon"
height = '400'
width = '700'
image = 'http://picsum.photos/700/300?random=4'
imageTitle = 'Second image'
variantHeading = 'h3'
styleHeading = 'styleHeadingLot'
HeadingText = 'BIO'
variantParagraph = 'body1'
styleParargaph = 'styleParargaphLot'
ParagraphText = 'Tatiana Samoilova was born on March 17, 1989 in Kyzyl. Almost immediately, the parents, together with two-month-old Tatyana, move to the city of Yekaterinburg, where she is educated in Diaghilevka, is engaged in ballet, dancing, and eats chocolates. After all the upheavals of life, Tatyana refuses sweet, flour and bannna, and devotes her life to the introduction of BIM into everyday life.'
/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}