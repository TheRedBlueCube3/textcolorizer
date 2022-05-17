const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('darkyellow')
		.setDescription('colorizes your text as dark yellow')
		.addStringOption(option =>
			option.setName('input').setDescription('the input').setRequired(true)
		),
	async execute(inter) {
		await inter.reply(
			`here \`\`\`apache\n${inter.options
				.getString('input')
				.replaceAll(' ', '_')}\`\`\`\`\`\`diff\n- textcolorizer\`\`\``
		);
	}
};
