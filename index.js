const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES]
});
client.commands = new Collection();
const cmdsPath = path.join(__dirname, 'commands');
const cmdFiles = fs.readdirSync(cmdsPath).filter(file => file.endsWith('.js'));
for (const file of cmdFiles) {
	const filePath = path.join(cmdsPath, file);
	const cmd = require(filePath);
	client.commands.set(cmd.data.name, cmd);
}
client.once('ready', () => {
	console.log('ready');
	client.user.setActivity({ type: 'WATCHING', name: `you` });
});
client.on('interactionCreate', async inter => {
	if (!inter.isCommand()) return;
	const command = client.commands.get(inter.commandName);
	if (!command) return;
	try {
		command.execute(inter);
	} catch (error) {
		await inter.reply({
			content: 'An internal error happened while executing this command.',
			ephemeral: true
		});
	}
});
client.login(token);
