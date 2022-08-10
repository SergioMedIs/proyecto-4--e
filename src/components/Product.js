import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import  {useStateValue}  from "./StateProvider";
import  {actionTypes } from "./reducer";
import accounting from "accounting";
export default function Product({
  product: { id, name, productType, image, price, description },
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
          image={image}
          alt='product-image'/>
        <CardContent>
        <Typography gutterBottom variant="h4" component="div">
            {name}
        </Typography>
          <Typography gutterBottom variant="h5" component="div">
           {description}
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
