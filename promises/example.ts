const filePromise: Promise<Deno.File> = Deno.open("dummyFile.txt");

filePromise.then((file: Deno.File) => {
    Deno.copy(Deno.stdout, file).then(() => {
        file.close();
    });
});
