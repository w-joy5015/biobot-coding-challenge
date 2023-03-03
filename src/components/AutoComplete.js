import React, { useEffect, useState } from "react";
import { Api } from "../api.js";
import { Autocomplete } from '@material-ui/lab';
import { TextField } from "@mui/material";
import { KitInfo } from "./KitInfo.js";

export const AutoComplete = () => {
    const [allKits, setKits] = useState([]);
    const [allIDs, setIDs] = useState([]);
    const [selectedKitId, setSelectedKit] = useState("")
    const [foundKits, setFoundKits] = useState([])

    useEffect(() => {
        fetchKits()
    }, []);

    const fetchKits = async() => {
        await Api.getKits()
            .then(response => {
                setKits(response)
                let idArr = response.map(element => element.label_id)
                setIDs(idArr)
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        let results = []
        allKits.forEach(kit => {
            if (kit.label_id.startsWith(selectedKitId)){
                results.push(kit)
            }
        })
        setFoundKits(results)
    };

    const handleChange = async(event) => {
        await setSelectedKit(event.target.value);
    };

    return (
        <div>
            <form autocomplete="off" action="/action_page.php"  onSubmit={handleSubmit}>
                <label>
                    Search by label id number:
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={allIDs}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Kit ID" value={selectedKitId} onChange={handleChange}/>}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            {foundKits[0] && (<KitInfo foundKits={foundKits}/>)}
        </div>
    )
}