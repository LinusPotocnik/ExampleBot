# Discord.js v14 Example Bot

[Extra info](https://github.com/LinusPotocnik/ExampleBot/releases/latest)

## Table of Contents

- [Your next steps](#next-steps)
- [Installing the bot](#install)
- [Finding your Bot Token](#finding-your-bot-token)
- [Finding your Bot ID](#finding-your-bot-id)
- [Inviting your Bot](#inviting-your-bot)
- [Installing NodeJS/npm](#install-nodejs-and-npm-on-windows-and-macos)
- [Updating NodeJS](#update-nodejs)
- [Updating npm](#update-npm)

## Next steps

If you don't know what to do next, here are some ideas:

- Use the [discord.js](https://discord.js.org/#/) documentation to implement things like buttons, modals (input forms), context menu commands, select menus and more!
- Use the Discord API to implement multi-language support that fetches the language from the user's Discord settings
- Understand the basics of databases (e.g., SQL, MongoDB, etc.) to make data persistent.
  - For example, you can store your data in a SQLite database using the [better-sqlite3](https://www.npmjs.com/package/better-sqlite3) package
- Dockerize the project so you can easily deploy it and keep it up to date
  - Implement a workflow that:
    - Builds a new Docker image (for multiple platforms?) when a PR gets pushed to a specific branch
    - Pushes said images to [Dockerhub](https://hub.docker.com)
    - Checks for new images on Dockerhub and restarts the bot if a new image is available using [Watchtower](https://containrrr.dev/watchtower/)
    - Use Docker volumes to store the database and other data
- Implement a web dashboard to manage your bot using discord.js's [OAuth2](https://discordjs.guide/oauth2/#oauth2) module
- Implement a logging system that logs all the bot's actions to a file or a database

## Install

Before you follow this, make sure you use [NodeJS](#install-nodejs-and-npm-on-windows-and-macos) version 16.9.0 or higher and [npm](#install-nodejs-and-npm-on-windows-and-macos) version 8 or higher. You can check your installed versions of both by running `npm version`.

- `git clone https://github.com/LinusPotocnik/ExampleBot.git`
- `cd ExampleBot`
- `npm install`
- `echo "BOT_TOKEN=YOUR_BOT_TOKEN" >> .env`
- `node .`

## Finding your Bot Token

- Head to the [Discord developer portal](https://discord.com/developers/applications)
- Click on `New Application` (assuming you don't already have one), give your bot a name and click on `Create`
- On the left side, click on `Bot`
- Now, you should see the `Build-A-Bot` section. In the `Token` section of this, click on `Reset Token` and `Copy` the newly generated token.

NOTE: Do NOT share this token with anyone!

## Finding your Bot ID

Make sure that you share a server with the bot you created. If this is not the case, go to the [invite](#inviting-your-bot) section.

- Go to the [Discord developer portal](https://discord.com/developers/applications) and click on your application (bot)
- On the left side, click on `OAuth2` -> `Client information`
- Under `Client ID`, click `Copy`

## Inviting your Bot

Make sure that you have already created a bot application. If not, follow the steps under [Finding the Bot Token](#finding-your-bot-token).

- Go to the [Discord developer portal](https://discord.com/developers/applications) and click on your application (bot)
- On the left side, click on `OAuth2` -> `OAuth2 URL Generator`
- Select `bot`
- In the `Bot Permissions` section, select `Administrator`
- Scroll down to the bottom of the page and click on `Copy`
- Now paste the copied URL into a new tab and add the bot to your server

## Install NodeJS and npm on Windows and macOS

- Go to the [NodeJS Website](https://nodejs.org/en/) and download the current version
- Install the downloaded file. This includes npm

## Install NodeJS and npm on Linux

- Update Linux:
  `sudo apt-get update -y`
- Download Node.js with curl:
  `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -`
  (change the 20 to a different version if you wish to install a version of node that is not v20/LTS)
- Install Node.js:
  `sudo apt-get install -y nodejs`
- Verify installation:
  `node -v`

## Update NodeJS

If you have an older version of NodeJS you can update it. If you are on a Windows machine, use all commands without a `sudo` and execute the terminal with administrator permissions.

- `npm cache clean -f`
- `sudo npm install -g n`
- `sudo n latest`

## Update npm

### macOS/Linux

- `sudo npm install -g npm@latest`

### Windows

- Please follow the [official npm guide for Windows](https://docs.npmjs.com/try-the-latest-stable-version-of-npm#upgrading-on-windows)
