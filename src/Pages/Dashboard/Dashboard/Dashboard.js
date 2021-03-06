import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import RequestServices from '../Services/RequestServices/RequestServices';
import MakeLocalJournalist from '../MakeLocalJournalist/MakeLocalJournalist';
import MakeServiceOfficer from '../MakeServiceOfficer/MakeServiceOfficer'
import MakeEventCoordinator from '../MakeEventCoordinator/MakeEventCoordinator'
import AddEvent from '../Event/AddEvent/AddEvent'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


import DashboardHome from '../DashboardHome/DashboardHome';
import AddNewService from '../Services/AddNewService/AddNewService';
import AllServices from '../../AllServices/AllServices';
import ViewServices from '../Services/ManageServices/ViewServices/ViewServices';
import RequestRepairing from '../RequestedRepairing/RequestedRepairing';
import UpdateService from '../Services/ManageServices/UpdateService/UpdateService';
import AddNews from '../ManageNews/AddNews/AddNews';
import ViewNews from '../ManageNews/ViewNews/ViewNews';
import UpdateNews from '../ManageNews/UpdateNews/UpdateNews';
import ViewEvent from '../Event/ViewEvent/ViewEvent'
import RequestForBooking from '../RequestForBooking/RequestForBooking';
import ViewBooking from '../RequestedBooking/ViewBooking';
import MyBooking from '../RequestForBooking/MyBooking';
import { Button } from 'muicss/react';
import BirthRegistration from '../BirthDeathRegistration/BirthRegistration/BirthRegistration';
import ViewBirthInfo from '../ViewBirthDeathInfo/ViewBirthInfo/ViewBirthInfo';
import DeathRegistration from '../BirthDeathRegistration/DeathRegistration/DeathRegistration';
import ViewDeathInfo from '../ViewBirthDeathInfo/ViewDeathInfo/ViewDeathInfo';
import ApplicationOfEvent from '../Event/ApplicationOfEvent/ApplicationOfEvent';
import AddReliefSchedule from '../ManageReliefSchedule/AddReliefSchedule/AddReliefSchedule';
import ViewReliefSchedule from '../ManageReliefSchedule/ViewReliefSchedule/ViewReliefSchedule';
import ReliefSchedule from '../ReliefSchedule/ReliefSchedule';
import NotFound from '../../NotFound/NotFound';
import AdminRoute from '../../LogIn/AdminRoute/AdminRoute';


const drawerWidth = 260;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const {user, userType, logOut } = useAuth();
    const [admin, setAdmin] =React.useState(false);
    const [journalist, setJournalist] =React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    // console.log(userType, user.email);
    const handleDrawerClose = () => {
        setOpen(false);
    };

    

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        ?????????????????????????????? ??? ?????????????????? ?????????????????????
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    ??????????????????????????????
                </DrawerHeader>
                <List>
                    <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to="/">????????? ??? ????????????  ????????? </Link>
                    <br/>
                    
                   {
                        userType === '' && <Box>
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestForBooking`}>??????????????? ?????? ????????? ???????????? </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/myBooking`}>???????????? ??????????????? ????????????</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/relief`}>??????????????? ???????????? </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/birthRegistration`}>???????????? ????????????????????? ????????????</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/deathRegistration`}>?????????????????? ????????????????????? ????????????</Link> <br />
                        </Box>
                   }
                    {
                        userType ==="serviceofficer" && <Box>
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addNewService`}>???????????? ???????????? ????????? ????????????</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewServices`}>????????????????????????</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestedServices`}>?????????????????? ????????????????????????</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestedRepairing`}>?????????????????? ??????????????????????????????</Link> <br />

                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewBirthInfo`}>???????????? ????????????????????? ???????????? </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewDeathInfo`}>?????????????????? ????????????????????? ???????????? </Link> <br />
                        </Box>
                    }
                    {
                        userType==="journalist" && <Box>
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewNews`}>????????????????????? </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addNews`}>???????????? ????????? ??????????????? ???????????? </Link> <br />
                        </Box>
                    }
                    {
                        userType ==="eventCoordinator" && <Box>
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewEvent`}>??????????????????????????????</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addEvent`}>???????????? ?????????????????? ??????????????? ???????????? </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewEventRegistration`}>???????????????????????? ??????????????????</Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addRelief`}>??????????????? ?????? ???????????? </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewRelief`}>??????????????? ????????????  </Link> <br />
                            <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px', marginBottom: '20px' }} to={`${url}/viewBooking`}>????????? ???????????????</Link> <br />
                        </Box>
                    }

                    {userType ==="admin" && <Box>
                        <Link activeStyle={{ color: 'red' }} style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }}to={`${url}/makeAdmin`}>??????????????? ??????  ???????????? </Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }}to={`${url}/makeLocalJournalist`}>???????????????????????? ??????????????? ????????????</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/makeServiceOfficer`}>????????????????????? ?????????????????? ??????????????? ????????????</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/makeEventCoordinator`}>?????????????????? ????????????????????????????????? ??????????????? ????????????</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addNewService`}>???????????? ???????????? ????????? ????????????</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewServices`}>????????????????????????</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewBirthInfo`}>???????????? ????????????????????? ???????????? </Link> <br/>

                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewDeathInfo`}>?????????????????? ????????????????????? ???????????? </Link> <br />
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestedServices`}>?????????????????? ????????????????????????</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/requestedRepairing`}>?????????????????? ??????????????????????????????</Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewNews`}>????????????????????? </Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor:'#DAD3C6', padding:'7px', borderRadius:'10px' }} to={`${url}/addNews`}>???????????? ????????? ??????????????? ???????????? </Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewEvent`}>??????????????????????????????</Link> <br/>

                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewEventRegistration`}>???????????????????????? ??????????????????</Link> <br />
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addEvent`}>???????????? ?????????????????? ??????????????? ???????????? </Link> <br/>
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/addRelief`}>??????????????? ?????? ???????????? </Link> <br />
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }} to={`${url}/viewRelief`}>??????????????? ????????????  </Link> <br />
                        <Link style={{ textDecoration: 'none', marginLeft: '15px', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px', marginBottom:'20px' }} to={`${url}/viewBooking`}>????????? ???????????????</Link> <br/>
                        


                    </Box>}
                    
                </List>
                {user.email && <Button className="mb-5 bg-dark" onClick={logOut}><h6 style={{ textDecoration: 'none', color: '#070903', marginTop: '10px', display: 'inline-block', fontSize: '18px', backgroundColor: '#DAD3C6', padding: '7px', borderRadius: '10px' }}>???????????????</h6></Button>}
                
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Route exact path={`${path}`}>
                    <DashboardHome></DashboardHome>
                </Route >
                <AdminRoute exact path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute >
                <AdminRoute exact path={`${path}/makeServiceOfficer`}>
                    <MakeServiceOfficer></MakeServiceOfficer>
                </AdminRoute >
                <AdminRoute exact path={`${path}/makeEventCoordinator`}>
                    <MakeEventCoordinator></MakeEventCoordinator>
                </AdminRoute >
                <AdminRoute exact path={`${path}/makeLocalJournalist`}>
                    <MakeLocalJournalist></MakeLocalJournalist>
                </AdminRoute >
                <Route exact path={`${path}/addNewService`}>
                    <AddNewService></AddNewService>
                </Route >
                <Route exact path={`${path}/viewServices`}>
                    <ViewServices></ViewServices>
                </Route >
                <Route exact path={`${path}/updateService/:serviceId`}>
                    <UpdateService></UpdateService>
                </Route >
                <Route exact path={`${path}/requestedServices`}>
                    <RequestServices></RequestServices>
                </Route >
                <Route exact path={`${path}/requestedRepairing`}>
                    <RequestRepairing></RequestRepairing>
                </Route >
                <Route exact path={`${path}/birthRegistration`}>
                    <BirthRegistration></BirthRegistration>
                </Route >
                <Route exact path={`${path}/deathRegistration`}>
                    <DeathRegistration></DeathRegistration>
                </Route >
                <Route exact path={`${path}/viewBirthInfo`}>
                    <ViewBirthInfo></ViewBirthInfo>
                </Route >
                <Route exact path={`${path}/viewDeathInfo`}>
                    <ViewDeathInfo></ViewDeathInfo>
                </Route >
                <Route exact path={`${path}/addNews`}>
                    <AddNews></AddNews>
                </Route >
                <Route exact path={`${path}/viewNews`}>
                    <ViewNews></ViewNews>
                </Route >
                <Route exact path={`${path}/updateNews/:newsId`}>
                    <UpdateNews></UpdateNews>
                </Route >

                <Route exact path={`${path}/addEvent`}>
                    <AddEvent></AddEvent>
                </Route >
                <Route exact path={`${path}/viewEvent`}>
                    <ViewEvent></ViewEvent>
                </Route >
                <Route exact path={`${path}/viewEventRegistration`}>
                    <ApplicationOfEvent></ApplicationOfEvent>
                </Route >

                <Route exact path={`${path}/requestForBooking`}>
                    <RequestForBooking></RequestForBooking>
                </Route >
                <Route exact path={`${path}/viewBooking`}>
                    <ViewBooking></ViewBooking>
                </Route >
                <Route exact path={`${path}/myBooking`}>
                    <MyBooking></MyBooking>
                </Route >

                <Route  path={`${path}/addRelief`}>
                    <AddReliefSchedule></AddReliefSchedule>
                </Route >
                <Route path={`${path}/viewRelief`}>
                    <ViewReliefSchedule></ViewReliefSchedule>
                </Route >

                <Route  path={`${path}/relief`}>
                    <ReliefSchedule></ReliefSchedule>
                </Route >

                


            </Main>
        </Box>
    );
}
