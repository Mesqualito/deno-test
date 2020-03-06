const fileName = Deno.args[0];

const file: Deno.File = await Deno.open(fileName);

await Deno.copy(Deno.stdout, file);

file.close();
