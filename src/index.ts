import {
  ChannelType,
  Client,
  escapeEscape,
  Interaction,
  PermissionOverwrites,
  PermissionsBitField,
  TextChannel,
} from "discord.js";
import "dotenv/config";

import commands from "./commands";

import { permission } from "process";
import { Channel } from "diagnostics_channel";

const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new Client({
  intents: ["GuildMessages", "Guilds"],
});

const startBot = async () => {
  await client.login(BOT_TOKEN);
  console.info("INFO: Bot started");

  // Testing guild creation
  client.on("guildCreate", async (guild) => {
    const channel = await guild.channels.create({
      name: "notification-channel",
      type: ChannelType.GuildText,
      permissionOverwrites: [
        {
          id: guild.id,
          allow: [PermissionsBitField.Flags.ViewChannel],
        },
      ],
    });

    if (channel instanceof TextChannel) {
      channel.send("New notification channel created!");
    } else {
      console.error("ERROR: Failed to create notification channel");
    }
  });

  // Testing guild update
  client.on("messageCreate", async (message) => {
    if (message.guild && message.content === "!update") {
      const channel = message.guild.channels.cache.find(
        (ch) => ch.name === "notification-channel"
      );
      if (channel instanceof TextChannel) {
        channel.send("Notification channel updated!");
      } else {
        message.channel.send("Failed to update notification channel");
      }
    }
  });

  // Command registration
  client.on("ready", async () => {
    if (client.application) {
      await client.application.commands.set(commands);
      console.log("INFO: Commands registered");
    }
  });

  // Handler registration
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand()) {
      const command = commands.find(
        ({ name }) => name === interaction.commandName
      );
      if (command) {
        await interaction.deferReply();
        command.execute(client, interaction);
        console.log(`Command ${interaction.commandName} executed`);
      }
    }
  });
};

startBot();
