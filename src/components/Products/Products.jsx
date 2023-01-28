import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import useStyles from './styles';

import Product from './Product/Product';

const Products = ({ products }) => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={3}>
        {products.map((product) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products