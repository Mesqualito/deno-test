// has to be run with: '--allow-net' or '--allow-all' flag!

console.info("Hello there!");

import {serve} from "https://deno.land/std/http/server.ts";

const server = serve(":8000");

console.info("Server created!");
