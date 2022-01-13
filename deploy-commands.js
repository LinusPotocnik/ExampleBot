import {} from 'dotenv/config';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import fs, { cp } from 'fs';

// Load environment data
const clientId = process.env.CLIENTID;
const token = process.env.BOT_TOKEN;

// Prepare fetch of all command files
const commands = [];
const commandFiles = fs
	.readdirSync('./events/commands')
	.filter((file) => file.endsWith('.js'));

// Prepare Route to Discord
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	for (const file of commandFiles) {
		// Push all commands out of the seperate files into a single json-array
		const command = await import(
			`#commands/${file.substring(0, file.length - 3)}`
		);
		commands.push(await command.create());
	}

	try {
		console.log('Started reloading application (/) commands!');
		await rest.put(Routes.applicationCommands(clientId), { body: commands });
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
