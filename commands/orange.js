const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('orange')
		.setDescription('colorizes your text as orange')
		.addStringOption(option =>
			option
				.setName('input')
				.setDescription('the text to colorize as orange')
				.setRequired(true)
		),
	async execute(inter) {
		await inter.reply(
			`here \`\`\`css\n[${inter.options.getString(
				'input'
			)}]\`\`\`\`\`\`diff\n- textcolorizer\`\`\``
		);
	}
};
