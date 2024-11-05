import { ApplicationCommandOptionType } from "discord.js";
import { SlashCommand } from "../types/slashCommand";

export const echo: SlashCommand = {
  name: "test",
  description: "Echo command",
  options: [
    {
      required: true,
      name: "command",
      description: "echo message",
      type: ApplicationCommandOptionType.String,
    },
  ],
  execute: async (_, interaction) => {
    const echoMessage = interaction.options.get("command")?.value || "";
    await interaction.followUp({
      ephemeral: true,
      content: `${interaction.user.username.toString()} : ${echoMessage}`,
    });
  },
};
