import React from 'react'
import { Card, CardMedia, CardContent, CardAction, Typography, IconButton } from '@mui/material'
import { AddShopingCard } from '@mui/icons-material'
import useStyles from './styles'

const Product = ({ product }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name} />
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    {product.price}
                </Typography>
                <Typography variant='h5' color="textSecondary">
                    {product.description}
                </Typography>
                <CardAction disableSpacing className={classes.cardAction}>
                    <IconButton aria-label='Add to Cart'>
                        <AddShopingCard />
                    </IconButton>
                </CardAction>
            </div>
        </CardContent>
    </Card>
  )
}

export default Product