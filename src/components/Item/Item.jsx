import "./styles.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Item = ({ data }) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="container-item">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={data.name} />
        <CardMedia
          component="img"
          height="400"
          image={data.image}
          alt={data.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Category: {data.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Eyes:{data.eyes}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Item;
