import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import accounting from "accounting";
export default function   Product() {
  return (
    <Card sx={{ maxWidth: 345, margin:8}}>
      <CardActionArea >
        <CardMedia  

          component="img"
          height="210"
          weight='120'
          image="https://www.cyberpuerta.mx/img/product/XL/CP-AEROCOOL-MINIFROST-G-WT-V1-1.jpg"
          alt='125'/>
        <CardContent>
        <Typography gutterBottom variant="h4" component="div">
            Gabinete001
        </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Gabinete AeroCool White MR12 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {accounting.formatMoney(1500, "$")}
            <button  >comprar</button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
