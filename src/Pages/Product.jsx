import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import SweetAlertComponent from '../Sweetalert/SweetAlert'
import {list,productRemove} from '../Reduxitems/ProductSlice';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Box,
  Grid
} from "@mui/material";

const Product = () => {
  const { items } = useSelector((state) => state?.Pro);
  const [delete_id, setDelete_id] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const delete_funcc = (id) => {
    if (delete_id !== "") {
      dispatch(productRemove({ id: delete_id })).then(() => {
        dispatch(list());
      });
    }
    setDelete_id("");
    setIsDelete(false);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(list());
  }, []);
  
 
  const navigate=useNavigate()
  const fn1=()=>{
navigate("/Create")
  }
  
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    
    <Button variant="contained" size="large" onClick={fn1} sx={{marginTop:'20px',marginLeft:'60px'}}>
        create
        </Button>
    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    
    {Array.isArray(items)&&items?.map((mm,index)=> (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card  sx={{ maxWidth: 345 ,marginLeft:"60px",marginTop:"20px"}}>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {mm.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {mm.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' color="success">  <Link  to={`/update/${mm?._id}`}>update  </Link></Button>
              
            
              <Button variant="outlined" color="error"    onClick={() => {
              setDelete_id(mm?._id);
              setIsDelete(true);
            }}>
            Delete
          </Button>
            </CardActions>
          </Card>
          </Grid>
        ))}
          </Grid>
        </Box>
        
    
    {isDelete && (
        <SweetAlertComponent
          confirm={delete_funcc}
          cancle={() => setIsDelete(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </div>
  
  );
};

export default Product;
