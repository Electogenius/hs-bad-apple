//Deno
async function run(h){
	await Deno.run({cmd: h, stdout:"piped", stdin:"piped"}).status()
	console.log(h.join` `)
}
await run(['rm','-rf','frames'])
await run(['mkdir','frames'])

function path(n){
	return '/frame'+String(n).padStart(5,'0')+'.png'
}
const h=15 // = 2fps
for (let i = h; i < 6506; i+=h) {
	//console.log('./framesOG'+path(i))
	Deno.copyFileSync('./framesOG'+path(i), './frames'+path(i/h))
}
