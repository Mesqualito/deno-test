# deno-test
Testing deno instead of nodejs

Installation with: '$ curl -fsSL https://deno.land/x/install/install.sh | sh'

Tested with e.g.:

'$ deno hello.ts' (run local Typescript code in sandbox)

'$ deno https://deno.land/std/examples/welcome.ts' (run remote Typescript code in sandbox)

Sandbox:<br>
Per default Deno cannot access the file system, network, sub-process, or environment.<br>
Permission modifier ('$ deno [permission modifier] script.ts'):
- --allow-all | -A
- --allow-env
- --allow-hrtime
- --allow-read=<whitelist>
- --allow-write=<whitelist>
- --allow-net=<whitelist>
- --allow-plugin
- --allow-run

Inspired by https://dev.to/deepu105/forget-nodejs-build-native-typescript-applications-with-deno-kkb,
a post from Deepu K Sasidharan on 20.02.2020
