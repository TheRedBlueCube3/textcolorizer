const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [];
const cmdsPath = path.join(__dirname, 'commands');
const cmdFiles = fs.readdirSync(cmdsPath).filter(file => file.endsWith('.js'));
for (const file of cmdFiles) {
	const filePath = path.join(cmdsPath, file);
	const cmd = require(filePath);
	commands.push(cmd.data.toJSON());
}
const rest = new REST({ version: '9' }).setToken(token);
rest
	.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
