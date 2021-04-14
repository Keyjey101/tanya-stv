import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';


import Slide from '@material-ui/core/Slide'

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';




import Fab from '@material-ui/core/Fab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const useStyles = makeStyles({
  toggleGroup: {
    height: 50,
    width: "100%",
    marginBottom: "-0.3rem"
  },
 toggleButton: {
    height: 50,
    width: "33%",
    size: "small",
   borderRadius: "8px",
   marginRight: "0rem",
   
   position: "relative"
   

 }


});

export default function Objects() {

    
const [slider, setSlider] = React.useState('first')
const [slide, setSlide] = React.useState('')

const handleSlide = (event, newSlider, direction) => {
    setSlider(newSlider)
    setSlide(direction)
}







  const classes = useStyles();
 


  return ( 
    <div>
    

      <div className={classes.container} >
        <Slide in={slider === 'first' && true} direction={slide} mountOnEnter unmountOnExit timeout={{enter: 800, exit: 0, appear: 1000}}>
          <Paper elevation={0} className={classes.paper} >
          <CardActionArea>
          <CardMedia
          component="img"
          alt="first"
          height="400"
          width="700"
          image="http://picsum.photos/700/300?grayscale&blur=7&random=3"
          title="Hospital"
        />
        
        <CardContent>
          
        <Typography gutterBottom variant="h2" component="h1" style={{position: "absolute", marginTop: "-25rem", color: "whitesmoke", textShadow: "0.7px 0.7px #000000",}}>
          HOSPITAL
          </Typography>

          <Typography variant="body1" color="textSecondary" component="p" style={{position: "absolute", marginTop: "-17rem", color: "whitesmoke", textShadow: "0.8px 0.9px #000000", marginLeft: '5%'}}>
          Hospital (for 150 beds, Kazan) FBU "354 OVKG" of the Ministry of Defense of Russia is a military medical and preventive institution for the provision of qualified and specialized medical care and inpatient treatment of military personnel, as well as officers in reserve and retirement, from Tatarstan, Mari El , Chuvashia and Udmurtia. In addition, family members of military personnel and civilian personnel of the Russian Armed Forces are also entitled to medical examination and treatment.
          </Typography>

          <Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', left: "1rem"}
          }
          onClick={()=>{handleSlide('x','third', 'right')}}
          
          >
  <ChevronLeftIcon />
</Fab>

<Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', right: "1rem"}
          }
          onClick={()=>{handleSlide('x','second', 'left')}}
          
          >
  <ChevronRightIcon />
</Fab>






        </CardContent>
</CardActionArea>
          </Paper>
        </Slide>
        </div>
        <div className={classes.container}>

        <Slide in={slider === 'second' && true} direction={slide} mountOnEnter unmountOnExit timeout={{enter: 800, exit: 0, appear: 0}}>
          <Paper elevation={0} className={classes.paper} >
          <CardActionArea>
          <CardMedia
          component="img"
          alt="second"
          height="400"
          width="700"
          image="http://picsum.photos/700/300?grayscale&blur=7&random=2"
          title="Mooraveinyk"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h2" component="h1" style={{position: "absolute", marginTop: "-25rem", color: "whitesmoke", textShadow: "0.7px 0.7px #000000",}}>
          MOORAVEINYK
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{position: "absolute", marginTop: "-17rem", color: "whitesmoke", textShadow: "0.8px 0.9px #000000", marginLeft: '5%'}}>
The project includes 10 residential buildings, two kindergartens, a school and a clinic. Shops, cafes, beauty salons and other services will open on the ground floors of the houses. A wide alley along the buildings will be an excellent place for walking, and underground and aboveground parking will allow you not to think about car safety. The exterior of the houses will traditionally be bright. The entrances are bright and spacious, with two entrances: from the yard and from the street. Entrances to the entrances will be made at ground level so that residents do not have to walk up the stairs again.
          </Typography>


          <Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', left: "1rem"}
          }
          onClick={()=>{handleSlide('x','first', 'right')}}
          
          >
  <ChevronLeftIcon />
</Fab>

<Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', right: "1rem"}
          }
          onClick={()=>{handleSlide('x','third', 'left')}}
          
          >
  <ChevronRightIcon />
</Fab>






        </CardContent>
</CardActionArea>
          </Paper>
        </Slide>


        
      </div>


      <div className={classes.container}>

<Slide in={slider === 'third' && true} direction={slide} mountOnEnter unmountOnExit timeout={{enter: 800, exit: 0, appear: 0}} > 
  <Paper elevation={0} className={classes.paper} >
  <CardActionArea >
  <CardMedia 
  component="img"
  alt="third"
  height="400"
  width="700"
  image="http://picsum.photos/700/300?grayscale&blur=7&random=1"
  title="Contemplative Reptile"
/>

<CardContent >
  <Typography gutterBottom variant="h2" component="h1" style={{position: "absolute", marginTop: "-25rem", color: "whitesmoke", textShadow: "0.7px 0.7px #000000",}}>
  FACTORY
  </Typography>
  <Typography variant="body1" color="textSecondary" component="p" style={{position: "absolute", marginTop: "-17rem", color: "whitesmoke", textShadow: "0.8px 0.9px #000000", marginLeft: '5%'}}>
  UZTM-KARTEX today is a leading manufacturer of equipment for the mining industry, construction industry, energy and metallurgy. UZTM-KARTEX equipment operates in 40 countries of the world, including Uzbekistan, Mongolia, Kazakhstan. 
    </Typography>

  <Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', left: "1rem"}
          }
          onClick={()=>{handleSlide('x','second','right')}}
          
          >
  <ChevronLeftIcon />
</Fab>

<Fab size="small" style={{opacity: '0.3', position: "absolute", marginTop: '-15rem', right: "1rem"}
          }
          onClick={()=>{handleSlide('x','first','left')}}
          
          >
  <ChevronRightIcon />
</Fab>








</CardContent>
</CardActionArea>
  </Paper>
</Slide>







</div>






    </div>
  );
}