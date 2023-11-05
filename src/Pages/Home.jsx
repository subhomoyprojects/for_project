import React from 'react'
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  CardHeader,
} from "@mui/material";
import styled from "styled-components";
import { Link } from 'react-router-dom'
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Home() {
const a=()=>{
localStorage.clear();
window.location.reload();

}
  return (
    <div style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1696185570507-2d1283399560?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height:'80vh',
      position:'relative',
      overflow:'auto',
      marginBottom:'800px'

  }}>

<Container>
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} sx={{ margin: "0 auto" }}>
        <Paper elevation={20} sx={{ padding: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderTop:'4px solid' ,borderColor:'#3fb572' }}>
        
            <Typography variant="h4" sx={{color:'white'}}>
            Welcome to Company{'  '}</Typography>
            <Typography variant="body1" sx={{color:'white'}}>
            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.

</Typography>
      
        </Paper>
      </Grid>
    </Grid>
  </Container>
  </div>
  )
}
