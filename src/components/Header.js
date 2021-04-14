import React from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Fab } from '@material-ui/core'



function Header() {
    return (
      <div>
     
     
     

     <CardActionArea>
          <CardMedia
          component="img"
          alt="first"
          height="200"
          width="700"
          image="http://picsum.photos/700/300?random=1"
          title="Contemplative Reptile"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h1" component="h1" style={{position: "absolute", marginTop: "-14rem", color: "whitesmoke", marginLeft: "40%", textShadow: "1px 1px #000000"}}>
                      This is TANYA
          </Typography>
          
          <Typography variant="body3" color="textSecondary" component="p" style={{position: "absolute", marginTop: "-7.7rem", marginLeft: "52%", color: "whitesmoke", textShadow: "0.5px 0.5px #000000",}}>
          can handle everything
          
  </Typography>
  <Fab href="tel:+7-965-506-95-94" size="small" style={{position: "absolute", marginTop: "-13rem", marginLeft: "3%"}}>
    <PhoneIcon fontSize="small"/>
</Fab>

<Fab href="https://t.me/SammiTa" size="small" style={{position: "absolute", marginTop: "-10rem", marginLeft: "3%"}}>
    <TelegramIcon fontSize="small" />
</Fab>

<Fab href="https://www.instagram.com/cheezasam" size="small" style={{position: "absolute", marginTop: "-7rem", marginLeft: "3%"}}>
    <InstagramIcon fontSize="small"/>
</Fab>




        </CardContent>
</CardActionArea>


      </div>
    );
  }
  
  export default Header;