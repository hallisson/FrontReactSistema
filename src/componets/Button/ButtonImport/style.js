import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent 0% 0% no-repeat padding-box',
        fontSize: '0.7rem',
        border: '1px solid #00477D',
        "&:hover": {
            backgroundColor: "transparent",
        },
    },

    buttons:{
        boxShadow: '0px 3px 6px #ADADAD29',
        borderRadius: '20px',
        opacity: '1',
        textAlign: 'center',
        fontSize: '12px',
        letterSpacing: '0px',
        color: '#00477D',
        maxHeight: '40px',
        marginLeft: '10px',
    },
}));