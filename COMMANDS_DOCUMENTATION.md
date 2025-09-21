# Commands Documentation

## `/ip` Command - Public IP Fetcher

### Overview
The `commands/ip.ts` file implements a Telegram bot command that fetches and displays the user's public IP address. This command is particularly useful for users with dynamic IP addresses who need to quickly check their current public IP.

### What the Code Does

#### 1. **Command Definition**
```typescript
export default {
  command: "ip",
  description: "Get your public IP",
  async run(_bot, ctx) {
    // Implementation here
  },
} satisfies Command;
```
- Defines a command with the name "ip" that users can invoke with `/ip`
- Provides a description "Get your public IP" for help documentation
- Implements an async run function that handles the command execution

#### 2. **API Integration**
```typescript
let api = "https://api.ipify.org/?format=json";
let res: IP = await fetch(api).then((r) => r.json());
```
- Uses the **ipify.org** service, which is a simple public IP address API
- Makes an HTTP GET request to `https://api.ipify.org/?format=json`
- The API returns a JSON response in the format: `{"ip": "xxx.xxx.xxx.xxx"}`
- Uses the built-in `fetch` API with async/await for the HTTP request
- Properly types the response using the `IP` interface

#### 3. **Response Processing**
```typescript
let ip = res.ip;
```
- Extracts the IP address string from the API response
- The `IP` type interface ensures type safety: `{ ip: string }`

#### 4. **User Notification**
```typescript
ctx.reply(`Here's your public IP: \`${ip}\``, { parse_mode: "MarkdownV2" });
```
- Sends the IP address back to the user in a formatted message
- Uses Telegram's **MarkdownV2** parse mode for better formatting
- The IP address is wrapped in backticks (\`) to display it as inline code
- The message format is: "Here's your public IP: `xxx.xxx.xxx.xxx`"

### Technical Architecture

#### Dependencies
- **Types**: Imports `Command` and `IP` interfaces from `../types`
- **API**: Uses the modern `fetch` API (available in Bun runtime)
- **Telegram**: Integrates with Grammy.js framework through the context parameter

#### Error Handling
- The code relies on the runtime's built-in error handling
- If the API is unreachable, the fetch will throw an error
- If the response format is unexpected, TypeScript typing provides compile-time safety

#### Security Considerations
- Uses HTTPS for the API call to ensure secure data transmission
- The ipify.org service is a legitimate, widely-used public IP service
- No sensitive data is logged or stored

### Usage Flow
1. User sends `/ip` command to the Telegram bot
2. Bot receives the command and calls the `run` function
3. Function makes HTTP request to ipify.org API
4. API returns the user's public IP address in JSON format
5. Bot extracts the IP and formats it for display
6. Bot sends a reply message with the formatted IP address

### Integration with Bot Framework
The command integrates seamlessly with the bot's command system:
- Commands are auto-loaded from the `commands/` directory
- The bot registers this command and makes it available to users
- Only authorized users (based on `config.userId`) can use this command
- The command appears in the help menu with its description

### Why This is Useful
- **Dynamic IP Users**: Perfect for users whose ISP assigns dynamic IP addresses
- **Network Troubleshooting**: Quick way to verify external IP without opening a browser
- **Remote Access Setup**: Helpful when configuring remote access tools
- **Privacy Awareness**: Shows users what IP address they're presenting to external services