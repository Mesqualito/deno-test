const filePromise: Promise<Deno.File> = Deno.open("dummyFile.txt");

filePromise.then(async (file: Deno.File) => {
    await Deno.copy(Deno.stdout, file);
    file.close();
});
