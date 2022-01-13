import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
async function create() {
	const command = new SlashCommandBuilder()
		.setName('server')
		.setDescription(
			'Replys with a small amount of information about this server!'
		);

	return command.toJSON();
}

// Called by the interactionCreate event listener when the corresponding command is invoked
async function invoke(interaction) {
	const guild = interaction.guild;

	const embed = new MessageEmbed()
		.setTitle(guild.name)
		.addField('Members', guild.memberCount.toString(), true)
		.addField(
			'Created At',
			guild.createdAt.toLocaleDateString('de-DE', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			}),
			true
		)
		.addField('ID', guild.id, true)
		.addField(
			'AFK-Channel',
			guild.afkChannel != null ? guild.afkChannel : '-',
			true
		)
		.addField(
			'Custom URL',
			guild.vanityURLCode != null ? guild.vanityURLCode : '-',
			true
		)
		.addField('Boosts', guild.premiumSubscriptionCount.toString(), true)
		.addField('Discord Partner', guild.partnered ? 'Yes' : 'No', true)
		.addField('Verified', guild.verified ? 'Yes' : 'No', true);

	embed
		.setColor('AQUA')
		.setFooter({ text: 'Find the source code of this bot on our GitHub!' })
		.setTimestamp()
		.setAuthor({
			name: 'Developed by LiFe Development',
			url: 'https://github.com/LiFeDevelopment',
			iconURL: 'https://avatars.githubusercontent.com/u/89026474?s=200&v=4',
		})
		.setImage(guild.iconURL());

	interaction.reply({
		embeds: [embed],
	});
}

export { create, invoke };
