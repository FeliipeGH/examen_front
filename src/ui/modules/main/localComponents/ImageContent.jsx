import React from 'react';
import {Box} from "@material-ui/core";
import photo from "../../../../assets/img/felipe.jpg";

export const ImageContent = () => {
    return (
        <Box className="h-32 -mt-20 w-full flex justify-center mb-4">
            <img src={photo} alt="Felipe Guadarrama Herrera" className="object-contain h-full rounded-full shadow-xl"/>
        </Box>
    );
};