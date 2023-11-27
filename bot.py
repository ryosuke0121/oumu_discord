import discord

intents = discord.Intents.default()
intents.message_content = True

TOKEN = 'TOKEN'
CHANNELID = CHANNELID

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'Botにログインしました！ {client.user}')

@client.event
async def on_message(message):
    if not message.author.bot:
        channel = client.get_channel(CHANNELID)
        await channel.send(message.content)
        print(message.content)

client.run(TOKEN)