import app from "./src/app.js";
import config from "./src/config/index.js";

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`
App: ${config.name}
Author: ${config.author}
Environment: ${config.env}
server listening on port: ${PORT}
`);
});
