import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const style = {
    card: {
        maxWidth: 345,
        margin: '20px auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto'
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: 'red'
    }
};

export default function RecipeReviewCard() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={style.card}>
            <CardHeader
                action={(
                    <IconButton aria-label='settings'>
                        <MoreVertIcon/>
                    </IconButton>
                )}
                avatar={(
                    <Avatar
                        aria-label='recipe'
                        style={style.avatar}
                    >
                        R
                    </Avatar>
                )}
                subheader='September 14, 2016'
                title='Shrimp and Chorizo Paella'
            />
            <CardMedia
                image='./paella.jpg'
                style={style.media}
                title='Paella dish'
            />
            <CardContent>
                <Typography
                    color='textSecondary'
                    component='p'
                    variant='body2'
                >
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label='share'>
                    <ShareIcon/>
                </IconButton>
                <IconButton
                    aria-expanded={expanded}
                    aria-label='show more'
                    className={clsx(style.expand, {
                        [style.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse
                in={expanded}
                timeout='auto'
                unmountOnExit={true}
            >
                <CardContent>
                    <Typography paragraph={true}>
Method:
                    </Typography>
                    <Typography paragraph={true}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                    </Typography>
                    <Typography paragraph={true}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph={true}>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}