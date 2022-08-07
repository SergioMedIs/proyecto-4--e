import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import accounting from "accounting";
import { AddShoppingCart } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useState } from 'react';

 

export default function Product({
  product: { id, name, productType, image, price, rating, description },
}) {
 
  const [expanded, setExpanded] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
      },
    });
  };
  return (
    <Card sx={{ maxWidth: 345, margin:15}}>
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
           description
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {accounting.formatMoney(price, "$")}
            <button  >comprar</button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
