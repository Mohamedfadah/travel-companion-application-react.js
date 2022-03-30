import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({place, selected, refProp}) => {
    const classes = useStyles();

    if(selected) refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'});

    return (
        <Card elevation={6}>
            <CardMedia
                style={{height: 350}}
                image={place.photo?place.photo.images.large.url: "https://hammer.ucla.edu/sites/default/files/styles/hero_r_small/public/2021-11/Lulu_Web.jpg?h=44b879e5&itok=zFjpdSCa"}
                title={place.nme}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating name="read-only" value={Number(place.rating)} readOnly />  
                    <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.rating}</Typography>
                </Box>
                {
                    place?.awards?.map((award, i) => (
                        <Box key={i} display="flex" my={1} justifyContent="space-between">
                            <img src={award.images.small} alt={award.display_name} />
                            <Typography variant='subtitle2' color="textSecondary">{award.display_name}</Typography>

                        </Box>
                    ))
                }
                {
                    place?.cuisine?.map(({name}) => (
                        <Chip key={name} size="small" label={name} className={classes.chip} />
                    ))
                }
                {
                    place?.address && ( 
                        <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.subtitle}>
                            <LocationOnIcon /> {place.address}
                        </Typography>
                    )
                }
                {
                    place?.phone && ( 
                        <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.spacing}>
                            <PhoneIcon /> {place.phone}
                        </Typography>
                    )
                }
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>

            </CardContent>
        </Card>
    )
}

export default PlaceDetails;