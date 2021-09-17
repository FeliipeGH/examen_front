import React from 'react';
import {sideElementStyles} from "../styles/sideElementStyles";
import {List, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router";
import {RouteConstants} from "../../../router/constants/RouteConstants";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {ModuleSideListItem} from "./ModuleSideListItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(sideElementStyles);
export const ProfileContainer = ({isOpenMini, isOpenTemporalMenu}) => {
    const classes = useStyles();
    const history = useHistory();

    const onLogOut = () => {
        history.push(RouteConstants.MAIN_PAGE);
    };

    const collapseList = [
        {
            title: "Cerrar sesión",
            icon: ExitToAppIcon,
            onClick: onLogOut,
        },
    ];

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
            <ModuleSideListItem title="Felipe" isOpenMini={isOpenMini} icon={AccountCircleIcon}
                                isOpenTemporalMenu={isOpenTemporalMenu} collapseList={collapseList}/>
        </List>
    );
};