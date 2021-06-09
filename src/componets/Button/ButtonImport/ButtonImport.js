import React from "react";
import PublishIcon from '@material-ui/icons/Publish';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';

export function ButtonImport(props) {
    const { onClickCancel } = props;
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            className={[classes.root, classes.buttons]}
            startIcon={<PublishIcon />}
            onClick={onClickCancel}
        >
            Importar
            <input
               type="file"
               hidden
            />
        </Button>
    );
}
