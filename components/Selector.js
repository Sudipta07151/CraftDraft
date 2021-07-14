import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { useRouter } from 'next/dist/client/router';
import { mdiConsoleNetworkOutline } from '@mdi/js';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(2),
        },
        flexGrow: 1,
        width: '250px',
        display: 'flex',
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#f57c00',
            boxShadow: '0 0 0 0.2rem #f57c00',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        marginLeft: theme.spacing(2),
    },
}));

export default function Selector() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const router = useRouter();
    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value)
        var value;
        switch (event.target.value) {
            case '1': value = 'keychain'
                break;
            case '2': value = 'coaster'
                break;
            case '3': value = 'character'
                break;
            case '4': value = 'accesory'
                break;
            case '5': value = 'bracelet'
                break;
        }
        console.log(value)
        router.push(`productlibrary?select=${value}`)
    };
    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">Category</InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="0">CATEGORY</option>
                    <option value={1}>keychain</option>
                    <option value={2}>coaster</option>
                    <option value={3}>character</option>
                    <option value={4}>accesory</option>
                    <option value={5}>bracelet</option>
                </NativeSelect>
            </FormControl>
        </div>
    );
}