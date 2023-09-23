import "./styles.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const ItemDetail =({data})=>{

    return (
        <div className='container-item-detail'>
         <div className="container-item">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader className="typography-header" title={data.name} />
        <CardMedia
          component="img"
          height="400"
          image={data.image}
          alt={data.name}
        />
        <CardContent>
          <Typography className="typography-category" >
            Category: {data.category}
          </Typography>
          <Typography className="typography-eyes" >
            Eyes:{data.eyes}
          </Typography>
        </CardContent>
      </Card>
    </div>
        </div>
    )
}

export default ItemDetail;