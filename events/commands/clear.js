import { SlashCommandBuilder } from '@discordjs/builders';
import { Permissions } from 'discord.js';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
async function create() {
	const command = new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Deletes the given amount of messages!')
		.addNumberOption((option) =>
			option
				.setName('amount')
				.setDescription('How many messages shall be deleted?')
				.setRequired(true)
		);

	return command.toJSON();
}

// Called by the interactionCreate event listener when the corresponding command is invoked
async function invoke(interaction) {
	const amount = interaction.options.getNumber('amount');

	if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES))
		return interaction.reply({
			content: 'You are not allowed to delete messages!',
			ephemeral: true,
		});

	if (amount < 1)
		return interaction.reply({
			content: 'I must delete one or more messages!',
			ephemeral: true,
		});

	await interaction.channel.bulkDelete(amount).catch((err) => {
		console.error(err);
	});

	interaction.reply({
		content: `I deleted ${amount} messages for you!`,
		ephemeral: true,
	});
}

export { create, invoke };
