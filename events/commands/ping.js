import { SlashCommandBuilder } from '@discordjs/builders';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
async function create() {
	const command = new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replys with Pong!')
		.addUserOption((option) =>
			option.setName('user').setDescription('Shall I greet a user?')
		);

	return command.toJSON();
}

// Called by the interactionCreate event listener when the corresponding command is invoked
async function invoke(interaction) {
	const user = interaction.options.getUser('user');

	if (user != null) {
		interaction.reply({ content: `Hello ${user}!` });
	} else {
		interaction.reply({
			content: 'Pong!',
			ephemeral: true,
		});
	}
}

export { create, invoke };
