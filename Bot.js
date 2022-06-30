import {} from 'dotenv/config';
import fs from 'fs';
import { Client, Intents } from 'discord.js';

// Create a new Client with the Guilds intent
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Fetch all js files in ./events
const events = fs
	.readdirSync('./events')
	.filter((file) => file.endsWith('.js'));

// Create an asynchronus function and run it instantly
(async () => {
	// Check for an event and execute the corresponding file in ./events
	for (let event of events) {
		// The #events ES6 import-abbreviation is defined in the package.json
		const eventFile = await import(`#events/${event}`);
		// But first check if it's an event emitted once
		if (eventFile.once)
			client.once(eventFile.name, (...args) => {
				eventFile.invoke(...args);
			});
		else
			client.on(eventFile.name, (...args) => {
				eventFile.invoke(...args);
			});
	}
})();

// Login with the environment data
client.login(process.env.BOT_TOKEN);
