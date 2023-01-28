import React from 'react'

import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import useStyles from './styles'

const Product = ({ product }) => {
  const classes = useStyles()

  console.log(product)

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media} image={product.image.url} title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
            <Typography variant='h5' gutterBottom>
                {product.name}
            </Typography>
            <Typography variant='h5'>
                {product.price.formatted_with_symbol}
            </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color="textSecondary"/>
      </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCartIcon />
            </IconButton>
        </CardActions>
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