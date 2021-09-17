import GroupIcon from '@material-ui/icons/Group';
import ListIcon from '@material-ui/icons/List';
import CategoryIcon from '@material-ui/icons/Category';
import {RouteConstants} from "./RouteConstants";

export const dashboardModuleList = [
    {
        title: "Proveedores",
        icon: GroupIcon,
        collapseList: [
            {
                title: "Consulta",
                icon: ListIcon,
                url: RouteConstants.SUPPLIER_LIST_PAGE,
            },
            {
                title: "Agregar-Editar",
                icon: CategoryIcon,
                url: RouteConstants.SUPPLIER_CREATE_PAGE,
            },
        ]
    },
];