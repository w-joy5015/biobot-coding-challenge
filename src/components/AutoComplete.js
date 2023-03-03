import React, { useEffect, useState } from "react";
import { Api } from "../api.js";
import { Autocomplete } from '@material-ui/lab';
import { TextField } from "@mui/material";
import { KitInfo } from "./KitInfo.js";

export const AutoComplete = () => {
    const [allKits, setKits] = useState([]);
    const [allIDs, setIDs] = useState([]);
    const [selectedKitId, setSelectedKit] = useState("")
    const [typedKitId, setTypedKitId] = useState("")
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
        const longerId = selectedKitId.length > typedKitId.length ? selectedKitId : typedKitId
        allKits.forEach(kit => {
            if (kit.label_id.startsWith(longerId)){
                results.push(kit)
            }
        })
        setFoundKits(results)
    };

    return (
        <div>
            <form autocomplete="off" action="/action_page.php"  onSubmit={handleSubmit}>
                <label>
                    Search by label id number:
                    <Autocomplete
                        value={typedKitId}
                        inputValue={selectedKitId}
                        onChange={(event, newValue) => {
                            setTypedKitId(newValue);
                          }}
                        onInputChange={(event, newValue) => {
                            setSelectedKit(newValue);
                          }}
                        disablePortal
                        id="combo-box-demo"
                        options={allIDs}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Kit ID"/>}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            {foundKits[0] && (<KitInfo foundKits={foundKits}/>)}
        </div>
    )
}