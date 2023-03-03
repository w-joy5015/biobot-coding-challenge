const getKits = async () => {
    const response = await fetch('http://localhost:5000/', {
            method: "GET",
            headers: {}
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
    getKits,
};