import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import useStyles from './styles'

const Product = ({ product }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media} image={product.image} title={product.name}
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.CardContent}>
            <Typography variant='h5' gutterBottom>
                {product.name}
            </Typography>
            <Typography variant='h5'>
                {product.price}
            </Typography>
            <Typography variant='body2' color="textSecondary">
                {product.description}
            </Typography>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </div>
      </CardContent>
    </Card>

    // <Card className={classes.root}>
    //     <CardMedia className={classes.media} image={product.image} title={product.name} />
    //     <CardContent>
    //         <div className={classes.CardContent}>
    //             <Typography variant='h5' gutterBottom>
    //                 {product.name}
    //             </Typography>
    //             <Typography variant='h5'>
    //                 {product.price}
    //             </Typography>
    //             <Typography variant='body2' color="textSecondary">
    //                 {product.description}
    //             </Typography>
    //             <CardActions disableSpacing className={classes.cardAction}>
    //                 {/* <IconButton aria-label='Add to Cart'>
    //                     <AddShoppingCartIcon />
    //                 </IconButton> */}
    //             </CardActions>
    //         </div>
    //     </CardContent>
    // </Card>
  )
}

export default Product