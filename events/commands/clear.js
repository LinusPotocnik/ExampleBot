import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
const create = () => {
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
};

// Called by the interactionCreate event listener when the corresponding command is invoked
const invoke = async (interaction) => {
	const amount = interaction.options.getNumber('amount');

	// Check if the user executing the command has the required permissions to do so
	if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages))
		return interaction.reply({
			content: 'You are not allowed to delete messages!',
			ephemeral: true,
		});

	// Check if the amount parameter is >= 1
	if (amount < 1)
		return interaction.reply({
			content: 'I must delete one or more messages!',
			ephemeral: true,
		});

	// Delete the given amount of messages
	await interaction.channel.bulkDelete(amount).catch((err) => {
		console.error(err);
	});

	// Reply with a confirmation
	interaction.reply({
		content: `I deleted ${amount} messages for you!`,
		ephemeral: true,
	});
};

export { create, invoke };
