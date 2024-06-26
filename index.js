const { Client, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const axios = require('axios');

const token = ''; // the bots token
const clientId = ''; // the bots client id // user id
const advertise = true; // if you want it to send server invite after command ran keep it true if not keep it false
const serverinvite = ""; // server invite for when command ran it replies with server invite
const madeby = "who made by"; // for embed like "Made By {Zune}"
const apikey = ""; // 

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const commands = [
    {
        name: 'arceus',
        description: 'Whitelist Arceus X',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Arceus link',
                required: true,
            },
        ],
    },
    {
        name: 'codex',
        description: 'Whitelist Codex',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Codex link',
                required: true,
            },
        ],
    },
    {
        name: 'delta',
        description: 'Gets Delta Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Delta link',
                required: true,
            },
        ],
    },
    {
        name: 'hydrogen',
        description: 'Gets Hydrogen Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Hydrogen link',
                required: true,
            },
        ],
    },
    {
        name: 'hohohub',
        description: 'Gets hohohub Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The hohohub link',
                required: true,
            },
        ],
    },
    {
        name: 'trigon',
        description: 'Gets Trigon Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Trigon link',
                required: true,
            },
        ],
    },
    {
        name: 'vegax',
        description: 'Gets VegaX Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The VegaX link',
                required: true,
            },
        ],
    },
        {
        name: 'fluxus',
        description: 'Gets fluxus Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The fluxus link',
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing global application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded global application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.once('ready', () => {
    console.log('Bot is ready!');

    // Setting the bot's status
    client.user.setPresence({
        activities: [{ name: 'STATUS API: ONLINE 🔑', type: "LISTENING" }],
        status: 'idle'
    }).then(() => {
        console.log('Status set to PLAYING');
    }).catch(console.error);
});

// Add your existing command functions (arceusx, codex, etc.) here
async function arceusx(interaction, link) {
    // Your implementation for arceusx
    await interaction.reply(`Arceus X link received: ${link}`);
}

async function codex(interaction, link) {
    // Your implementation for codex
    await interaction.reply(`Codex link received: ${link}`);
}

async function delta(interaction, link) {
    // Your implementation for delta
    await interaction.reply(`Delta link received: ${link}`);
}

async function hydrogen(interaction, link) {
    // Your implementation for hydrogen
    await interaction.reply(`Hydrogen link received: ${link}`);
}

async function hohohub(interaction, link) {
    // Your implementation for hohohub
    await interaction.reply(`Hohohub link received: ${link}`);
}

async function trigon(interaction, link) {
    // Your implementation for trigon
    await interaction.reply(`Trigon link received: ${link}`);
}

async function vegax(interaction, link) {
    // Your implementation for vegax
    await interaction.reply(`VegaX link received: ${link}`);
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'arceus') {
        await arceusx(interaction);
        if (advertise) {
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }
    } else if (interaction.commandName === 'codex') {
        await codex(interaction);
        if (advertise) {
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }
    } else if (interaction.commandName === 'delta') {
        await delta(interaction);
        if (advertise) {
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }
    } else if (interaction.commandName === 'hydrogen') {
        await hydrogen(interaction);
        if (advertise) {
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }
    } else if (interaction.commandName === 'hohohub') {
        await hohohub(interaction);
        if (advertise) {
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }
    } else if (interaction.commandName === 'trigon') {
        await trigon(interaction);
        if (advertise) {
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }
    } else if (interaction.commandName === 'vegax') {
        await vegax(interaction);
        if (advertise) {
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }
    } else if (interaction.commandName === 'fluxus') {
        await fluxus(interaction);
        if (advertise) {
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }
    }
});

async function arceusx(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "<a:load:1240970684415348737>Whitelisting Your Arceus",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206325894835347526/arcx.png?ex=6637e289&is=66369109&hm=1f9912400698d196916274b1919be1404452d986f1c65f5816d3ca3c6ddebe5c&=&format=webp&quality=lossless&width=416&height=417' },
            fields: [
                { name: '🔑Status', value: '```Please wait 0-10s```' }
            ]
        }],
    });

    if (link.startsWith('https://spdmteam.com/key-system-1?hwid=')) {
        const hwid = link.split('=')[1].split('&')[0];
        const apiUrl = `Your API`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "Whitelisted!") {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:greencheck:1240836551622135878>Success",
                        "color": 458532,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206325894835347526/arcx.png?ex=6637e289&is=66369109&hm=1f9912400698d196916274b1919be1404452d986f1c65f5816d3ca3c6ddebe5c&=&format=webp&quality=lossless&width=416&height=417' },
                        fields: [
                            { name: '🔑Status:', value: '```yaml\nSuccesfully Whitelisted. Please Wait For Countdown Or Restart Roblox.\n```' },
                            { name: '🖇HWID:', value: `${box}yaml\n${hwid}${box}` },
                            { name: '🕘Time Taken:', value: `${box}yaml\n${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:no2:1240837393419079711>Failed To Whitelisted Arceus",
                        "color": 16713222,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206325894835347526/arcx.png?ex=6637e289&is=66369109&hm=1f9912400698d196916274b1919be1404452d986f1c65f5816d3ca3c6ddebe5c&=&format=webp&quality=lossless&width=416&height=417' },
                        fields: [
                            { name: '🔑Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: '🖇HWID:', value: `${box}ml\n${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Whitelisted Arceus",
                    "color": 16713222,
                    thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206325894835347526/arcx.png?ex=6637e289&is=66369109&hm=1f9912400698d196916274b1919be1404452d986f1c65f5816d3ca3c6ddebe5c&=&format=webp&quality=lossless&width=416&height=417' },
                    fields: [
                        { name: '🔑Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid Arceus Link",
                "color": 16713222,
                fields: [
                    { name: '🖇Link', value: `${box}ml\n${link}${box}` }
                ]
            }]
        });
    }
}

async function codex(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "<a:load:1240970684415348737>Whitelisting Your Codex",
            "color": 587253,
            thumbnail: { url: 'https://images-ext-1.discordapp.net/external/wYh10ZtxQKZPut3buWuQu8YMbGXhbfq7dKatbBJ25Uw/https/cdn.discordapp.com/emojis/1195636867413053510.png?format=webp&quality=lossless' },
            fields: [
                { name: '🔑Status', value: '```Wait 0-30s```' }
            ]
        }],
    });

    if (link.startsWith('https://mobile.codex.lol/?token=') || link.startsWith('https://mobile.codex.lol?token=')) {
        const token = link.split('=')[1];
        const apiUrl = `Your API`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "Token Is Already Whitelisted. If Its Not Then 100 Proxies Has Been Used. Try Again Later") {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:greencheck:1240836551622135878>Success",
                        "color": 458532,
                        thumbnail: { url: 'https://images-ext-1.discordapp.net/external/wYh10ZtxQKZPut3buWuQu8YMbGXhbfq7dKatbBJ25Uw/https/cdn.discordapp.com/emojis/1195636867413053510.png?format=webp&quality=lossless' },
                        fields: [
                            { name: '🔑Status:', value: '```yaml\nSuccesfully Whitelisted. Wait Up To A Minute Or Restart Roblox.\n```' },
                            { name: '🖇Token:', value: `${box}yaml\n${token}${box}` },
                            { name: '🕘Time Taken:', value: `${box}yam\n${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:no2:1240837393419079711>Failed To Whitelisted Codex",
                        "color": 16713222,
                        thumbnail: { url: 'https://images-ext-1.discordapp.net/external/wYh10ZtxQKZPut3buWuQu8YMbGXhbfq7dKatbBJ25Uw/https/cdn.discordapp.com/emojis/1195636867413053510.png?format=webp&quality=lossless' },
                        fields: [
                            { name: '🔑Status:', value: '```ml\nEither Token Is Invalid Or Api Is Not Working.\n```' },
                            { name: '🖇Token:', value: `${box}ml\n${token}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Whitelisted Codex",
                    "color": 16713222,
                    thumbnail: { url: 'https://images-ext-1.discordapp.net/external/wYh10ZtxQKZPut3buWuQu8YMbGXhbfq7dKatbBJ25Uw/https/cdn.discordapp.com/emojis/1195636867413053510.png?format=webp&quality=lossless' },
                    fields: [
                        { name: '🔑Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid Codex Link",
                "color": 16713222,
                fields: [
                    { name: '🖇Link', value: `${box}ml\n${link}${box}` }
                ]
            }]
        });
    }
}

async function delta(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "<a:load:1240970684415348737>Getting Delta Key",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1160520088181542925/1199162006993895484/deltax.png?ex=663ad3a5&is=66398225&hm=0102ff78b7b4eb6b765b214a1685d53f6a4daf049fc9fd1ec8bfffa574238334&=&format=webp&quality=lossless' },
            fields: [
                { name: '🔑Status', value: '```Wait 0-30s```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/8?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `Your API`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:greencheck:1240836551622135878>Success",
                        "color": 458532,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1160520088181542925/1199162006993895484/deltax.png?ex=663ad3a5&is=66398225&hm=0102ff78b7b4eb6b765b214a1685d53f6a4daf049fc9fd1ec8bfffa574238334&=&format=webp&quality=lossless' },
                        fields: [
                            { name: '🔑Status:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: '🖇HWID:', value: `${box}yaml\n${hwid}\n${box}` },
                            { name: '🕘Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:no2:1240837393419079711>Failed To Get Delta Key",
                        "color": 16713222,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1160520088181542925/1199162006993895484/deltax.png?ex=663ad3a5&is=66398225&hm=0102ff78b7b4eb6b765b214a1685d53f6a4daf049fc9fd1ec8bfffa574238334&=&format=webp&quality=lossless' },
                        fields: [
                            { name: '🔑Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: '🖇HWID:', value: `${box}ml\n${hwid}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Get Delta key",
                    "color": 16713222,
                    thumbnail: { url: 'https://media.discordapp.net/attachments/1160520088181542925/1199162006993895484/deltax.png?ex=663ad3a5&is=66398225&hm=0102ff78b7b4eb6b765b214a1685d53f6a4daf049fc9fd1ec8bfffa574238334&=&format=webp&quality=lossless' },
                    fields: [
                        { name: '🔑Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid Delta Link",
                "color": 16713222,
                fields: [
                    { name: '🖇Link', value: `${box}ml\n${link}\n${box}` }
                ]
            }]
        });
    }
}

async function hydrogen(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "<a:load:1240970684415348737>Getting Hydrogen Key",
            "color": 587253,
            thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
            fields: [
                { name: '🔑Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/2569?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `Your API`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "v<a:greencheck:1240836551622135878>Success",
                        "color": 458532,
                        thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                        fields: [
                            { name: '🔑Status:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: '🖇HWID:', value: `${box}yaml\n${hwid}\n${box}` },
                            { name: '🕘Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:no2:1240837393419079711>Failed To Get Hydrogen Key",
                        "color": 16713222,
                        thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                        fields: [
                            { name: '🔑Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: '🖇HWID:', value: `${box}ml\n${hwid}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Get Hydrogen key",
                    "color": 16713222,
                    thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                    fields: [
                        { name: '🔑Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid Hydrogen Link",
                "color": 16713222,
                fields: [
                    { name: '🖇Link', value: `${box}ml\n${link}\n${box}` }
                ]
            }]
        });
    }
}

async function hohohub(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "<a:load:1240970684415348737>Getting HoHoHub Key",
            "color": 587253,
            thumbnail: { url: 'https://images-ext-1.discordapp.net/external/QP0nDN0HoIA13bjh0wc7HxhvsCRWVS_68jqkEK0I-K0/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1220640265182908466.webp?format=webp' },
            fields: [
                { name: '🔑Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://hohohubv-ac90f67762c4.herokuapp.com/api/getkeyv2?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `Your API`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:greencheck:1240836551622135878>Success",
                        "color": 458532,
            			thumbnail: { url: 'https://images-ext-1.discordapp.net/external/QP0nDN0HoIA13bjh0wc7HxhvsCRWVS_68jqkEK0I-K0/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1220640265182908466.webp?format=webp' },    
                        fields: [
                            { name: '🔑Status:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: '🖇HWID:', value: `${box}yaml\n${hwid}\n${box}` },
                            { name: '🕘Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:no2:1240837393419079711>Failed To Get HoHoHub Key",
                        "color": 16713222,
            			thumbnail: { url: 'https://images-ext-1.discordapp.net/external/QP0nDN0HoIA13bjh0wc7HxhvsCRWVS_68jqkEK0I-K0/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1220640265182908466.webp?format=webp' },              
                        fields: [
                            { name: '🔑Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: '🖇HWID:', value: `${box}ml\n${hwid}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Get HoHoHub key",
                    "color": 16713222,
            		thumbnail: { url: 'https://images-ext-1.discordapp.net/external/QP0nDN0HoIA13bjh0wc7HxhvsCRWVS_68jqkEK0I-K0/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1220640265182908466.webp?format=webp' },        
                    fields: [
                        { name: '🔑Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid HoHoHub Link",
                "color": 16713222,
                fields: [
                    { name: '🖇Link', value: `${box}ml\n${link}\n${box}` }
                ]
            }]
        });
    }
}

async function trigon(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "<a:load:1240970684415348737>Getting Trigon Key",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326595082653807/trigon.png?ex=6637e330&is=663691b0&hm=690358f205897730d10dd661f753dfd301a5c20204e2f2b1dd0da942ff6b325b&=&format=webp&quality=lossless' },                   
            fields: [
                { name: '🔑Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://trigonevo.com/getkey/?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `Your API`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:greencheck:1240836551622135878>Success",
                        "color": 458532,
            			thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326595082653807/trigon.png?ex=6637e330&is=663691b0&hm=690358f205897730d10dd661f753dfd301a5c20204e2f2b1dd0da942ff6b325b&=&format=webp&quality=lossless' },                            
                        fields: [
                            { name: '🔑Status:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: '🖇HWID:', value: `${box}yaml\n${hwid}\n${box}` },
                            { name: '🕘Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:no2:1240837393419079711>Failed To Get Trigon Key",
                        "color": 16713222,
            			thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326595082653807/trigon.png?ex=6637e330&is=663691b0&hm=690358f205897730d10dd661f753dfd301a5c20204e2f2b1dd0da942ff6b325b&=&format=webp&quality=lossless' },                             
                        fields: [
                            { name: '🔑Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: '🖇HWID:', value: `${box}ml\n${hwid}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Get Trigon key",
                    "color": 16713222,
            		thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326595082653807/trigon.png?ex=6637e330&is=663691b0&hm=690358f205897730d10dd661f753dfd301a5c20204e2f2b1dd0da942ff6b325b&=&format=webp&quality=lossless' },                   	
                    fields: [
                        { name: '🔑Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid Trigon Link",
                "color": 16713222,
                fields: [
                    { name: '🖇Link', value: `${box}ml\n${link}\n${box}` }
                ]
            }]
        });
    }
}

async function vegax(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "<a:load:1240970684415348737>Getting VegaX Key",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326594537525288/vega.png?ex=6637e330&is=663691b0&hm=9ef8e240b723799a40795aacbb2de6e5384a342d0c9396da0f64524ace96ca2d&=&format=webp&quality=lossless&width=408&height=417' },
            fields: [
                { name: '🔑Status', value: '```Please wait 0-30s```' }
            ]
        }],
    });

    if (link.startsWith('https://pandadevelopment.net/getkey?service=vegax&hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `Your API`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:greencheck:1240836551622135878>Success",
                        "color": 458532,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326594537525288/vega.png?ex=6637e330&is=663691b0&hm=9ef8e240b723799a40795aacbb2de6e5384a342d0c9396da0f64524ace96ca2d&=&format=webp&quality=lossless&width=408&height=417' },
                        fields: [
                            { name: '🔑Your Key:', value: `${box}yaml${response.data.key}${box}` },
                            { name: '🖇HWID:', value: `${box}yaml${hwid}${box}` },
                            { name: '🕘Time Taken:', value: `${box}yaml${time} Seconds${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }   
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:no2:1240837393419079711>Failed To Get VegaX Key",
                        "color": 16713222,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326594537525288/vega.png?ex=6637e330&is=663691b0&hm=9ef8e240b723799a40795aacbb2de6e5384a342d0c9396da0f64524ace96ca2d&=&format=webp&quality=lossless&width=408&height=417' },
                        fields: [
                            { name: '<a:__:1240837832566771742>Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: '🖇HWID:', value: `${box}ml${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Get VegaX key",
                    "color": 16713222,
                    thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326594537525288/vega.png?ex=6637e330&is=663691b0&hm=9ef8e240b723799a40795aacbb2de6e5384a342d0c9396da0f64524ace96ca2d&=&format=webp&quality=lossless&width=408&height=417' },
                    fields: [
                        { name: '<a:__:1240837832566771742>Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid VegaX Link",
                "color": 16713222,
                fields: [
                    { name: '🖇Link', value: `${box}ml\n${link}\n${box}` }
                    ],
                footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                }
            }]
        });
    }
}

async function fluxus(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";
    
    await interaction.reply({
        embeds: [{
            title: "<a:load:1240970684415348737>Getting Fluxus Key",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1205456615873052712/1239947639165026366/2558-fluxus.png?ex=664769ba&is=6646183a&hm=2cee59399595d0f73a9fdc0faab234430cdb183a24890d5c8d550db3b4747de1&=&format=webp&quality=lossless' },
            fields: [
                { name: '🔑Status', value: '```Please wait 0-10s```' }
            ]
        }],
    });

    if (link.startsWith('https://flux.li/android/external/start.php?HWID=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const HWID = urlParams.get('HWID');
        const apiUrl = `http://132.145.68.135:6056/?url=${link}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "<a:greencheck:1240836551622135878>Success",
                        "color": 458532,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1205456615873052712/1239947639165026366/2558-fluxus.png?ex=664769ba&is=6646183a&hm=2cee59399595d0f73a9fdc0faab234430cdb183a24890d5c8d550db3b4747de1&=&format=webp&quality=lossless' },
                        fields: [
                            { name: '🔑Your Key:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: '🖇️HWID:', value: `${box}yaml\n${HWID}\n${box}` },
                            { name: '🕘Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: " <a:no2:1240837393419079711>Error",
                        "color": 16713222,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1205456615873052712/1239947639165026366/2558-fluxus.png?ex=664769ba&is=6646183a&hm=2cee59399595d0f73a9fdc0faab234430cdb183a24890d5c8d550db3b4747de1&=&format=webp&quality=lossless' },
                        fields: [
                            { name: '<a:__:1240837832566771742>Status:', value: '```ml\nProbably An Issue With The API. Try Again Later And If It Errors Again Then API Is Offline.\n```' },
                            { name: '🖇️HWID:', value: `${box}ml\n${HWID}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Get Fluxus key",                   
                    "color": 16713222,
                    thumbnail: { url: 'https://media.discordapp.net/attachments/1205456615873052712/1239947639165026366/2558-fluxus.png?ex=664769ba&is=6646183a&hm=2cee59399595d0f73a9fdc0faab234430cdb183a24890d5c8d550db3b4747de1&=&format=webp&quality=lossless' },
                    fields: [
                        { name: '<a:__:1240837832566771742>Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid Fluxus Link",
                "color": 16713222,
                fields: [
                    { name: '🖇️Link', value: `${box}ml\n${link}\n${box}` }
                    ],
                    footer: {
                        "text": `Requested By ${interaction.user.username} | Made by ${madeby}`,
        "icon_url": "https://images-ext-1.discordapp.net/external/xAnfs2ImRpGOR1FVt-4UdGVlLnyNk3WODlYN8-V6_yw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1033577042345730138/b5f48e752f44bc9900ba817bd5f8cbfe.webp?format=webp&width=425&height=425"
               }
            }]
        });
    }
}






client.login(token);
