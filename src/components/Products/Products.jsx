import React from 'react'
import { Grid } from '@mui/material/Grid';

import Product from './Product/Product';

const productsArray = [
  { id: 1, name: 'Coffee', description: 'Kenya / Washed roaster', price: '$15'},
  { id: 2, name: 'Macbook', description: 'Apple Macbook Air 2020', price: '$90'}
]

const Products = () => {
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {productsArray.map(product => {
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product />
          </Grid>
        })}
      </Grid>
    </main>
  )
}

export default Products