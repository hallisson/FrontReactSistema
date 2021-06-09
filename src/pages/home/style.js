import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
    },

    formControl :{
        color: '#313A46',
        opacity: 0.5,
        letterSpacing: '0px',
        width: '100%',
    },
  
    filter:{
        padding: '12px 12px 0px 12px',
        boxShadow: '0px 3px 6px #0e0e0e29',
        borderRadius: '16px',
        marginBottom: '30px',
    },

    filterItem:{
        padding: '12px',
    },
    grow:{
        flex:1,
    },
    boxActionButtons:{
        display : 'flex',
        flexDirection: 'row-reverse',
        marginTop : '20px',
    },

    table:{
        opacity: '1',
        marginBottom: '1rem',
        bordeTop: '1px solid #272D3B33',
        '& .stickyHeader':{
            color: 'red',
        },
    },

    TableHead:{
        borderTop: '1px solid #272d3b4d',
        borderBottom: '1px solid #272d3b4d',
        letterSpacing: '0px',
        color: '#272D3B',
        background: '#272D3B',
        opacity: '1',
        '& .MuiTableCell-stickyHeader' : {
            background: '#FFFFFF',
            padding: '7px 12px 7px 12px',
            borderTop: '1px solid #272d3b4d',
            letterSpacing: '0px',
            color: '#272D3B',
        },
    },

    TableRow:{
        borderBottom: '1px solid #272d3b4d',
        letterSpacing: '0px',
        color: '#272D3B',
        opacity: '1',
        height: '55px',
    },


    textTableCustom : {
        fontSize: '96%',
        color: '#272D3B',
        letterSpacing: '0px',
        textAlign : 'center',
    },

}));
