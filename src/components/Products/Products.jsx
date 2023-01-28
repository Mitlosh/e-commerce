import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import useStyles from './styles';

import Product from './Product/Product';

const productsArray = [
  { id: 1, name: 'Coffee', description: 'Kenya / Washed roaster', image: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80', price: '$15'},
  { id: 2, name: 'Macbook', description: 'Apple Macbook Air 2020', image: 'https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80', price: '$900'},
  { id: 3, name: 'Socks', description: 'Kenya / Washed roaster', image: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80', price: '$10'},
  { id: 4, name: 'Headphones', description: 'Kenya / Washed roaster', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80', price: '$30'},
  { id: 5, name: 'Book', description: 'Kenya / Washed roaster', image: 'https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80', price: '$10',
  },
  { id: 6, name: 'Headphones', description: 'Kenya / Washed roaster', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80', price: '$30'}
]

const Products = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {productsArray.map((product) => (
          <Grid xs={12} sm={6} md={4} lg={4} key={product.id}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products