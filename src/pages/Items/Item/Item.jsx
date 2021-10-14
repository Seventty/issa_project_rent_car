import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart, Add, Remove} from '@material-ui/icons';

import useStyles from './styles';

const Item = ({ item }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.image} title={item.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom style={{fontFamily: "Nunito"}}>
                        {item.name}
                    </Typography>
                </div>
                <div className={classes.cardContent}>
                    <Typography variant="body1" gutterBottom >
                        {item.price}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Item