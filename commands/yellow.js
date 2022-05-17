const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yellow')
		.setDescription('colorizes your text as yellow')
		.addStringOption(option =>
			option
				.setName('input')
				.setDescription('the text to colorize as yellow')
				.setRequired(true)
		),
	async execute(inter) {
		await inter.reply(
			`here \`\`\`fix\n${inter.options.getString(
				'input'
			)}\`\`\`\`\`\`diff\n- textcolorizer\`\`\``
		);
	}
};
