import React from "react";
import { Box } from '@mui/material';

export const KitInfo = ({ kitObj }) => {
    // if (kitObj) {
        return (
        //     <li key={kitObj.id}>
        //     <div>{kitObj.id}</div>
        //     <div>{kitObj.label_id}</div>
        //     <div>{kitObj.shipping_tracking_code}</div>
        // </li>
        <>
        <Box
            sx={{
            width: "100%",
            height: 100,
            backgroundColor: "primary.dark",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
        </Box>
        </>
        )
    // } else {
    //     return (
    //         <h1>No kits</h1>
    //     )
    // }
}