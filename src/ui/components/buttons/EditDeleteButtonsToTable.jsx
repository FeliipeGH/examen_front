import React from 'react';
import {Box, IconButton, makeStyles} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import {editDeleteBtnStyles} from "./styles/editDeleteBtnStyles";

const useStyles = makeStyles(editDeleteBtnStyles);
export const EditDeleteButtonsToTable = ({
                                             onEditButton,
                                             onDeleteButton,
                                             showEdit = true,
                                             showDelete = true
                                         }) => {
    const classes = useStyles();
    return (
        <Box>
            {
                showEdit && (
                    <IconButton
                        onClick={onEditButton}
                        className={classes.iconEdit}
                    >
                        <EditIcon/>
                    </IconButton>
                )
            }
            {" "}
            {
                showDelete && (
                    <IconButton
                        onClick={onDeleteButton}
                        className={classes.iconDelete}
                    >
                        <Close/>
                    </IconButton>
                )
            }
            {" "}
        </Box>
    );
};
