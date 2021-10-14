import React from 'react'
import { Grid } from "@material-ui/core";
import Item from './Item/Item';
import useStyles from './styles';

const Items = ({data}) => {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="center" spacing={2} className={classes.content}>
                <div className={classes.toolbar}/>
                {data.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Item item={item}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Items
