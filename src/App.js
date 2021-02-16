import logo from './logo.svg';
import React from 'react'
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar, BottomNavigation, BottomNavigationAction,
    Button,
    Card, CardActions, CardContent,
    CardMedia,
    Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    IconButton,
    Paper, TextField,
    Toolbar,
    Typography
} from '@material-ui/core';

import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';
import LayerIcon from "@material-ui/icons/Layers"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import {makeStyles} from '@material-ui/core/styles';
import {PlayCircleFilled} from "@material-ui/icons";

import {createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    },
});
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)

    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(150,0,100,0.3)"
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrig: {
        marginTop: theme.spacing(4)
    }
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents")
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const[open, setOpen]=React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit"
                                    aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color={"inherit"} variant="outlined" onClick={handleClickOpen}>Login</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                            <DialogTitle if=''>Log in</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Let Google help apps determine location. This means sending anonymous location data
                                    to
                                    Google, even when no apps are running.
                                </DialogContentText>
                                <TextField autoFocus margin='dense' id='name' lable='email adress'
                                           type='email' fullwidth />
                                <TextField autoFocus margin='dense' id='pass' lable='password'
                                           type='password' fullwidth/>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color='primary'>Cancel</Button>
                                <Button onClick={handleClose} color='primary'>Log in</Button>
                            </DialogActions>
                        </Dialog>
                        <Button color={theme.secondary} variant="contained">Sign Up</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography component='h1'
                                                variant='h3'
                                                color="inherit"
                                                gutterBottom>
                                        Bootstrap
                                    </Typography>
                                    <Typography variant='h5'
                                                color="inherit"
                                                paragraph>
                                        Bootstrap asdasdas dasdasdasdasdasd asd asda sdasd
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className="mainContent">
                    <Container maxWidth='md'>
                        <Typography variant="h2" align="center" color='textPrimary'
                                    gutterBottom>
                            mip
                        </Typography>
                        <Typography variant="h5" align="center" color='textSecondary'
                                    paragraph>
                            Аренда 2 серверов (основного и
                            файлового с отдачей 1 Гбит/с) стоит
                            денег и если вы хотите поддержать
                            проект, то сейчас можете это сделать.
                            На файловом хранятся старые игры, на которых
                            нет или мало раздающих + различные программы,
                            чтобы вы могли всегда их скачать.
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={5} justify='center'>
                                <Grid item>
                                    <Button variant="contained" color={theme.primary}>Start now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color={theme.primary}>Start now</Button>
                                </Grid>
                            </Grid>
                        </div>
                        <Container className={classes.cardGrid} maxWidth='md'>
                            <Grid container spacing={4}>
                                {cards.map(card => (
                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography variant='h5' gutterBottom>
                                                    Blog post
                                                </Typography>
                                                <Typography>
                                                    post Post post Post post Post post Post post Post
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size='small' color="primary">View</Button>
                                                <Button size='small' color="primary">Edit</Button>
                                                <LayerIcon/>
                                                <PlayCircleFilledIcon/>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Container>
                </div>
            </main>
            <footer>
                <Typography variant="h6" align='center' gutterBottom>Footer</Typography>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction value="recents" label="Recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction value="favorites" label="Favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction value="nearby" label="Nearby" icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction value="folder" label="Folder" icon={<FolderIcon/>}/>
                </BottomNavigation>
                <Typography align='center' color='textSecondary' component='p' variant='subtitle2'>
                    Material-ui site
                </Typography>
            </footer>
        </div>
    );
}

export default App;
