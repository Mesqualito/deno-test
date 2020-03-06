console.info("Proxy server starting!");

import {serve} from "https://deno.land/std/http/server.ts";
import {green, yellow} from "https://deno.land/std/fmt/colors.ts";

const server = serve(":8000");

const url = Deno.args[0] || "https://www.gebsattel.rocks";

console.info(green("proxy server created!"));

(async () => {
    console.log(green(`Proxy listening on http://localhost:8000/ for ${url}`));

    for await (const req of server) {
        let reqUrl = req.url.startsWith("http") ? req.url : `${url}${req.url}`;

        console.log(yellow(`URL requested: ${reqUrl}`));

        const res = await fetch(reqUrl);
        req.respond(res);
    }
})();
