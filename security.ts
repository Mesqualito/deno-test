import {serve} from "https://deno.land/std/http/server.ts";
import {green} from "https://raw.githubusercontent.com/denoland/deno/master/std/fmt/colors.ts";
import capitalize from "https://unpkg.com/lodash-es@4.17.15/capitalize.js";

const server = serve(":8000");

console.info(green(capitalize("server created!")));

const body = new TextEncoder().encode("Hello there\n");

(async () => {
    console.log(green("Listening on http://localhost:8000/"));
    for await (const req of server) {
        req.respond({ body });
    }
})();
