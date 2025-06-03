import server from "./server";

const port = process.env.port || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
})
