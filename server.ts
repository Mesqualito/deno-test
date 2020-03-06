import {serve} from "http/server.ts";
import {green} from "fmt/colors.ts";
import capitalize from "lodash/capitalize.js";

const server = serve(":8000");

console.info(green(capitalize("server created!")));

const body = new TextEncoder().encode("Hello there\n");

(async () => {
    console.log(green("Listening on http://localhost:8000/"));
    for await (const req of server) {
        req.respond({ body });
    }
})();
