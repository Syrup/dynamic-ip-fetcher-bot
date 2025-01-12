# Dynamic IP Fetcher

This project is a Telegram bot that fetches and displays the system public IP address. It is particularly useful for users with dynamic IP addresses.

## Dependencies

- `grammy`
- `undici`

To install dependencies:

```bash
bun install
```

## Configuration

To configure the bot, you need to set the bot token and owner ID in the environment variables. Create a `.env` file with the following content:

```
USER_ID=<your_user_id>
BOT_TOKEN=<your_bot_token>
```

Or rename `.env.example` to `.env`

### Setting Up Environment Variables

1. Create a `.env` file in the root directory of your project.
2. Add the following content to the `.env` file:

```
USER_ID=<your_user_id>
BOT_TOKEN=<your_bot_token>
```

Example:

```
USER_ID=123456789
BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
```

### Getting Your User ID

To get your `USER_ID`, follow these steps:

1. Start the bot by running the command:

```bash
bun run index.ts
```

2. Open a chat with your bot on Telegram.
3. Send the command `/getid`.
4. The bot will reply with your user ID.

### Troubleshooting Tips

- Ensure that the `USER_ID` and `BOT_TOKEN` values are correct and match the ones provided by Telegram.
- If the bot is not responding, check the logs for any error messages.
- Make sure that the bot is not restricted or banned by Telegram.

Additionally, set the bot to can't join group through BotFather to ensure only authorized users can access it. To do this, follow these steps:

1. Open a chat with [BotFather](https://t.me/botfather) on Telegram.
2. Send the command `/mybots` and select your bot.
3. Click on "Bot Settings".
4. Click on "Group Privacy".
5. Select "Turn on" to prevent the bot from joining groups.

## Running the Project

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.42. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Auto Run Script on Boot

### Linux

To configure the bot to run on boot in Linux, you can use `systemctl`:

1. Create a new service file in `/etc/systemd/system/`:

```bash
sudo nano /etc/systemd/system/ipfetcher.service
```

2. Add the following content to the service file:

```ini
[Unit]
Description=IP Fetcher Telegram Bot
After=network.target

[Service]
ExecStart=/path/to/bun run /path/to/index.ts
Restart=always
User=your-username
Environment=DEBUG="grammy*"
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Example configured path:

```ini
[Service]
ExecStart=/usr/local/bin/bun run /home/user/ipfetcher/index.ts
```

3. Enable and start the service:

```bash
sudo systemctl enable ipfetcher
sudo systemctl start ipfetcher
```

> [!NOTE]
> Please check how to configure auto run script on boot for your specific Linux distribution.

### Windows

To configure the bot to run on boot in Windows, you can use Task Scheduler:

1. Open Task Scheduler.
2. Create a new task.
3. Set the trigger to "At startup".
4. Set the action to run `bun` with the path to `index.ts`.

### macOS

To configure the bot to run on boot in macOS, you can use `launchd`:

1. Create a new plist file in `~/Library/LaunchAgents/`.
2. Add the following content to the plist file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.example.ipfetcher</string>
    <key>ProgramArguments</key>
    <array>
        <string>/path/to/bun</string>
        <string>run</string>
        <string>/path/to/index.ts</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

3. Load the plist file:

```bash
launchctl load ~/Library/LaunchAgents/com.example.ipfetcher.plist
```

## Usage Examples

### Example 1: Fetching Public IP

1. Start the bot by running the command:

```bash
bun run index.ts
```

2. Open a chat with your bot on Telegram.
3. Send the command `/start`.
4. The bot will reply with your public IP address.

### Example 2: Unauthorized User

1. Start the bot by running the command:

```bash
bun run index.ts
```

2. Open a chat with your bot on Telegram using a different account (not the owner).
3. Send the command `/start`.
4. The bot will reply with "You are not authorized to use this bot."

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a clear description of your changes.

## Contact

For any questions or issues, please contact me at [Discord](https://discord.com/users/681843628317868049) or email me at <fabian.maulana@sxrup.xyz>.
