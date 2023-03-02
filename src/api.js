const getKitsByIdNumber = async (IdNumber) => {
    const response = await fetch('http://localhost:5000/', {
            method: "GET",
            headers: {
                "idnumber": IdNumber
            }
        }
    )
    if (response.ok) {
        const json = await response.json();
        return json;
    } else {
        throw new Error(`HTTP error: ${response.status}`);
    }
}

export const Api = {
    getKitsByIdNumber,
};