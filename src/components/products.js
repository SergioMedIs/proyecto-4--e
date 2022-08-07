import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Products() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
      <Product/>
      </Grid>
      <Grid item xs={4}>
        <Product/>
      </Grid>
      <Grid item xs={4}>
      <Product/>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box marginLeft={45} sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
        <Product/>
        </Grid>
        <Grid container item spacing={3}>
        <Product/>
        </Grid>
        <Grid container item spacing={3}>
        <Product/>
        </Grid>
      </Grid>
    </Box>
  );
}