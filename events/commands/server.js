import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
const create = () => {
	const command = new SlashCommandBuilder()
		.setName('server')
		.setDescription(
			'Replys with a small amount of information about this server!'
		)
		.setDMPermission(false);

	return command.toJSON();
};

// Called by the interactionCreate event listener when the corresponding command is invoked
const invoke = (interaction) => {
	const guild = interaction.guild;

	// Create a MessageEmbed and add an inlined field for each property displayed in the reply message
	const embed = new EmbedBuilder().setTitle(guild.name).addFields([
		{
			name: 'Members',
			value: guild.memberCount.toString(),
			inline: true,
		},
		{
			name: 'Created At',
			value: guild.createdAt.toLocaleDateString('de-DE', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			}),
			inline: true,
		},
		{
			name: 'ID',
			value: guild.id,
			inline: true,
		},
		{
			name: 'AFK channel',
			value: guild.afkChannel?.name ?? 'None',
			inline: true,
		},
		{
			name: 'AFK timeout',
			value: guild.afkTimeout.toString(),
			inline: true,
		},
		{
			name: 'Custom URL',
			value: guild.vanityURLCode ?? 'None',
			inline: true,
		},
		{
			name: 'Boosts',
			value: guild.premiumSubscriptionCount.toString(),
			inline: true,
		},
		{
			name: 'Discord Partner',
			value: guild.partnered ? 'Yes' : 'No',
			inline: true,
		},
		{
			name: 'Verified',
			value: guild.verified ? 'Yes' : 'No',
			inline: true,
		},
	]);

	// Edit some properties of the embed to make it a bit prettier
	// Note: This could be done at the creation of the object, but I split it to make it a bit clearer
	// #shamelessSelfpromotion
	embed
		.setColor('Aqua')
		.setFooter({ text: 'Find the source code of this bot on our GitHub!' })
		.setTimestamp()
		.setAuthor({
			name: 'Developed by LiFe Development',
			url: 'https://github.com/LiFeDevelopment',
			iconURL: 'https://avatars.githubusercontent.com/u/89026474?s=200&v=4',
		})
		.setImage(guild.iconURL());

	// Reply to the user
	interaction.reply({
		embeds: [embed],
	});
};

export { create, invoke };
