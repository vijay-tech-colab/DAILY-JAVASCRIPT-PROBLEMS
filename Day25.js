// implement a try catch to handle an error that accours during API data fatching.
const fetchingData = async () => {
    try {
        const data = await fetch(`https://jsonplaceholder.org/users`);
        const jsonData = await data.json();
        console.log(jsonData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchingData();