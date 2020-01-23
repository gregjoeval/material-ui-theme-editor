import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit
    },
    item: {
        maxWidth: 500
    }
});

class PreviewBottomNavigation extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <BottomNavigation
                    className={classes.item}
                    showLabels={true}
                    value={0}
                >
                    <BottomNavigationAction
                        icon={<RestoreIcon/>}
                        label='Recents'
                    />
                    <BottomNavigationAction
                        icon={<FavoriteIcon color={'secondary'}/>}
                        label='Favorites'
                    />
                    <BottomNavigationAction
                        icon={<LocationOnIcon color={'error'}/>}
                        label='Nearby'
                    />
                </BottomNavigation>
            </div>
        );
    }
}

export default withStyles(styles)(PreviewBottomNavigation);
