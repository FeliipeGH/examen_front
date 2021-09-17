import React from 'react';
import {sideElementStyles} from "../styles/sideElementStyles";
import {List, makeStyles} from "@material-ui/core";
import {ModuleSideListItem} from "./ModuleSideListItem";

const useStyles = makeStyles(sideElementStyles);
export const ModuleListContainer = ({moduleList, isOpenTemporalMenu, isOpenMini}) => {
    const classes = useStyles();

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
            {
                moduleList.map((element, index) => (
                    <ModuleSideListItem key={`side_module_${index}`} isOpenTemporalMenu={isOpenTemporalMenu}
                                        isOpenMini={isOpenMini} {...element}/>
                ))
            }
        </List>
    );
};