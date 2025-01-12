# IP Fetcher Tele

## Project Description

This project is a Telegram bot that fetches and displays the system public IP address. It is particularly useful for users with dynamic IP addresses.

## Dependencies

- `grammy`
- `undici`

To install dependencies:

```bash
bun install
```

## Configuration

To configure the bot, you need to set the bot token and owner ID in the `index.ts` file.

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

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a clear description of your changes.

## Contact

For any questions or issues, please contact the project maintainer at [Discord](https://discord.com/users/681843628317868049) or email at <fabian.maulana@sxrup.xyz>.
