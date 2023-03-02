// const fs = require('fs');
import fs from "fs";

var data = JSON.parse(fs.readFileSync("KITS_SHIPPING_DATA.json"));

const search = subStr => {
    let foundKits = []
    // forEach loops through the entire set of kits for O(n) time
    // to improve the performance, consider creating a cache using the label_id as the hash key
    data.forEach(kit => {
        if (kit.label_id.startsWith(subStr))
            foundKits.push(kit)
        }
    )
    return foundKits
}

export default search