const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eval')
		.setDescription('evaluates some java script code')
		.addStringOption(option =>
			option
				.setName('input')
				.setDescription('code to evaluate')
				.setRequired(true)
		),
	async execute(inter) {
		if (
			inter.user.id !== '802846743049404426' &&
			inter.user.id !== '809395534024409128'
		)
			return inter.reply({ content: 'no javascript for you', ephemeral: true });
		try {
			let evaluatedResult = eval(inter.options.getString('input'));
			await inter.reply(`\`${typeof evaluatedResult} | ${evaluatedResult}\``);
		} catch (err) {
			await inter.reply(`\`error | ${err}\``);
		}
	}
};
