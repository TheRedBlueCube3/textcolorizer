const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('red')
		.setDescription('colorizes your text as red')
		.addStringOption(option =>
			option
				.setName('input')
				.setDescription('the text to colorize as red')
				.setRequired(true)
		),
	async execute(inter) {
		await inter.reply(
			`here \`\`\`diff\n- ${inter.options.getString(
				'input'
			)}\`\`\`\`\`\`diff\n- textcolorizer\`\`\``
		);
	}
};
