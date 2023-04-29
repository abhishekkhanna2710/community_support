import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useState } from 'react';
import { Grid } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    p: 4,
};

export default function Home() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    const [user, setUser] = useState({
        name: "",
        wish: ""
    });

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, wish } = user;

        console.log(user)
    }

    return (
        <div>
            <Button onClick={handleOpen}>Click This</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" style={{ color: "red", textAlign: "center" }}>
                        Welcome to Dream Site 😍
                    </Typography>
                    <TabContext value={value}>

                        <TabPanel value="1">
                            {/* Text Field inputs */}
                            <TextField type='text' id="standard-basic" name="name" label="Your Name" variant="standard" fullWidth required value={user.name} onChange={handleInputChange} />

                        </TabPanel>
                        <TabPanel value="2">

                            <TextField type='text' id="standard-basic" name="wish" label="Make your wish" variant="standard" fullWidth required value={user.wish} onChange={handleInputChange} />

                        </TabPanel>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList style={{ width: "100%" }} onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="⬅️ Back" value="1" />
                                <Tab label="➡️ Next" value="2" />

                            </TabList>
                        </Box>
                    </TabContext>


                    <br />
                    {/* <TextField type='text' id="standard-basic" label="Your Name" variant="standard" fullWidth required value={name} onChange={(e) => setName(e.target.value)} /> */}

                    <Grid container justifyContent="center" marginTop={4}>
                        <Button variant="outlined" style={{ background: "#EC401B", color: "white" }} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </Box>


            </Modal>
        </div>
    );
}



// <Box sx={{ width: '100%', typography: 'body1' }}>
// <TabContext value={value}>
//     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//         </TabList>
//     </Box>
//     <TabPanel value="1">Item One</TabPanel>
//     <TabPanel value="2">Item Two</TabPanel>
//     <TabPanel value="3">Item Three</TabPanel>
// </TabContext>
// </Box>