const once = true;
const name = 'ready';

async function invoke(client) {
	console.log(`Successfully logged in as ${client.user.tag}!`);
}

export { once, name, invoke };
