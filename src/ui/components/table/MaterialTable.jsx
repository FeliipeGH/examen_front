import React from 'react';
import Paper from '@material-ui/core/Paper';
import {VirtualizedTable} from "./localComponents/VirtualizedTable";

const sample = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
    return {id, dessert, calories, fat, carbs, protein};
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}

export default function MaterialTable({list, columns}) {
    return (
        <Paper style={{height: "55vh", width: '100%'}}>
            <VirtualizedTable
                rowCount={list.length}
                rowGetter={({index}) => list[index]}
                columns={columns}
            />
        </Paper>
    );
}
