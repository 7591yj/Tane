# Tane

A Discord bot built with [Discord.js](https://discord.js.org/) supporting various server management tasks, such as attendance tracking, project channel management, resource sharing, and community engagement.

> This bot is still in development. Any list under `TODO` is subject to be implemented or change.

## Features

### TODO

- **Attendance Tracking**: Automates attendance for regular meetings and logs responses to Google Sheets.
- **Project Channel Management**: Creates, archives, and deletes project channels and voice calls based on project status.
- **Resource Sharing**: Posts weekly updates on programming-related news, tools, and resources.
- **Community Engagement**: Provides a general chat space for members and specific channels for roles like admins and mentors.

## Requirements

- **Yarn** (v4.5.1): as the package manager
- **Node.js** (v16.6.0 or higher): for compatibility with Discord.- js v14+
- **TypeScript** (v5.6.3): for type safety and efficient development
- **Dotenv** (v16.4.5): to manage environment variables securely
- **Cross-env** (v7.0.3): for setting environment variables in a cross-platform way
- **Esbuild**: for efficient TypeScript/JavaScript bundling
- **Google Sheets API** (for attendance tracking and logging)
- **Google Drive API** (for archiving important files)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/7591yj/Tane.git
   cd Tane
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   BOT_TOKEN=YOUR_BOT_TOKEN
   GOOGLE_SHEETS_ID=your-google-sheets-id
   GOOGLE_DRIVE_FOLDER_ID=your-google-drive-folder-id
   ```

4. Enable APIs for Google Sheets and Google Drive:

   - Follow the Google Sheets API quickstart guide to create a project and obtain credentials.

   - Enable the Google Drive API and note the `GOOGLE_DRIVE_FOLDER_ID` for storing archived files.

5. Invite the bot:

   Assuming that you've already created a bot via [Discord's Developer Portal](https://discord.com/developers/applications), Invite the bot to your Discord server.

   Use the following link format, replacing `BOT_CLIENT_ID` with your bot’s Client ID, and `BOT_PERMISSIONS` with your bot’s permissions.:

   ```plaintext
   https://discord.com/oauth2/authorize?client_id=BOT_CLIENT_ID&scope=bot&permissions=BOT_PERMISSIONS
   ```

   OR, go to the OAuth2 page of your bot and set up the URL as you see fit, which is more recommended.

## Usage

To start the bot, run the following command:

```bash
yarn start
```

To build the bot using esbuild, run the following command:

```bash
yarn build
```

## Commands

### TODO

| Command                 | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `attendance`            | Posts an attendance prompt in the specified channel.          |
| `archive [project]`     | Archives a completed project and moves files to Google Drive. |
| `resource-update`       | Posts a resource update in the resource-sharing channel.      |
| `create-project [name]` | Creates a new text and voice channel for a project.           |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
