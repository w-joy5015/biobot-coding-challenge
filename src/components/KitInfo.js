import React from "react";

export const KitInfo = ({ foundKits }) => {

    const kitList = foundKits.map(kit => {
        return(
            <ul>
                <li key={kit.label_id}>Label ID: {kit.label_id}</li>
                <li key={kit.shipping_tracking_code}>Tracking Number: {kit.shipping_tracking_code}</li>
            </ul>
        )
    })

    return (
        <div>
            {kitList}
        </div>
    )
}