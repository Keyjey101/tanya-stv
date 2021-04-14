import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {CardToCollapse} from './CardToCollapse'


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

export default function CollapseCard() {

    
const [slider, setSlider] = React.useState('first')

const handleSlide = (event, newSlider) => {
  if (newSlider !== null) {
   
    setSlider(newSlider)}
    
}

  const classes = useStyles();
const content = [
  {num:'first',
  title: 'BIM Specialist',
  content:'Understand & comply with BIM execution plan. Creation of 3D model content. Modelling using specified tools. Generate clash detection report, and other relevant reports from 3D model. Assist with e-submission to Authorities. Assist with archival of 3D models and related documentation. Drawing production from 3D models. Administer 3D model / drawings distribution to relevant users.',
  img:'http://picsum.photos/700/300?random=',
  
},

  {num:'second',
  title: 'PRO Chef',
  content:'Weekly meals that fit your dietary and nutritional needs. Fine in home dining for special events for couples and groups. Dining options for seniors and those with special diets. Food and beverage pairing events. Cooking Lessons. Vacation home cooking. Whatever your dining mind can imagine.',
  img:'http://picsum.photos/700/300?random=',
  
  },
  {num:'third',
  title: 'Dog Walker',
  content:'Provide exercise for client dog (usually in half-hour or one-hour increments).Pick up and dispose of dog droppings during walks. Check dog food and water supply to make sure basic needs are met after walks. Notify owners and pursue veterinary attention for any dog that becomes sick or injured under their supervision.',
  img:'http://picsum.photos/700/300?random=',
  
},

]


  return ( 
    <div>
    <div >
      <ToggleButtonGroup
      value={slider}
      exclusive
      onChange={handleSlide}
      aria-label="text alignment"
      className={classes.toggleGroup}
    >

      <ToggleButton value="first" aria-label="first" className={classes.toggleButton}>
        <p>bim</p>
      </ToggleButton>
      <ToggleButton value="second" aria-label="second" className={classes.toggleButton}>
      <p>food</p>
      </ToggleButton>
      <ToggleButton value="third" aria-label="third" className={classes.toggleButton}>
      <p>dog</p>
      </ToggleButton>

    </ToggleButtonGroup>
</div>




{content.map((x,index) => {
  
  return (
  <div>
  <CardToCollapse
  key={index}
  num={x.num}
  title={x.title}
  content={x.content}
  img={x.img + index +1}
  slide={slider}
  
/>
</div>)
})}

    </div>
  );
}