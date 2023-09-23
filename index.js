const server = require("./src/app");
const port = 3003;

server.listen(port,() => {
    console.log(`%s listening at port ${port}`);
})