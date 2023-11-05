import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Box, Link, Grid } from '@mui/material';

const Footer = styled('div')({
  position: 'static',
   //left: 0,
  // bottom: 0,
  width: '100%',
  backgroundColor: '#3fb572',
  color: 'white',
  textAlign: 'center',
  padding: '16px',
});

export default function StickyFooter() {
  let a=["product","login","register","idont know"]
  return (
    <Footer>
      <Container maxWidth="sm">
        <Typography variant="body1">
          My Sticky Footer © {new Date().getFullYear()}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3} md={3} >
            {a.map((mm,index)=>{return(
               <Box mt={1} key={index}>
              <Link to="/product" color="inherit" sx={{textDecoration:'none' }}>
               {mm}
              </Link>
            </Box>)})}
           </Grid>
          <Grid item xs={3} md={3}>
            <Box mt={1}>
              <Link href="/login" color="inherit">
                Login
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} md={3}>
            <Box mt={1}>
              <Link href="/signup" color="inherit">
                Signup
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} md={3}>
            <Box mt={1}>
              <Link href="/product" color="inherit">
                Product
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Footer>
  );
}
