let f = await Deno.readTextFileSync("S2.txt")
f = f.split(/(..)/g).filter(s => s);
f = f.map(e=>'.*#$'[parseInt(e, 2)]).join``
await Deno.writeTextFileSync("S2.compressed.txt", f)