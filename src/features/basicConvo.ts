import { App } from '@slack/bolt'

export default function basicConvo(app: App): void {
  app.message(/^(hi+|he+llo+|he+y+|o+i+|e a(í|i)+).*/, ({ message, say }) => {
    say(`Sup <@${message.user}> ヽ(・∀・)ﾉ howdy?`)
  })

  app.message('pingu ping me', ({ message, say }) => {
    say(`Tá de brimks comigo, <@${message.user}>??? (」°ロ°)」\n\n\n.............. pong`)
  })

  app.message(/^(T|t)em hora\?.*/, ({ say }) => {
    const now: Date = new Date()

    say(`Tenho sim: ${now}\n\nMas e você? (￢‿￢ )`)
  })

  app.message(/^(echo) (.+)/, ({ context, say }) => {
    const echoing: string = context.matches[2]

    say(echoing)
  })

  app.message(/^(T|t)e gosto/, async ({ message, context }) => {
    try {
      const result = await app.client.reactions.add({
        token: context.botToken,
        name: 'heart',
        channel: message.channel,
        timestamp: message.ts,
      })

      console.log(result)
    } catch (error) {
      console.error(error)
    }
  })

  app.message(/^(T|t)(a|á)+ cal(o|ô)+r?/, async ({ message, context }) => {
    try {
      const result = await app.client.reactions.add({
        token: context.botToken,
        name: 'fire',
        channel: message.channel,
        timestamp: message.ts,
      })

      console.log(result)
    } catch (error) {
      console.error(error)
    }
  })

  app.message('tell fulano they are super cool', async ({ message, context }) => {
    await app.client.reactions.add({
      token: context.botToken,
      name: 'top',
      channel: message.channel,
      timestamp: message.ts,
    })

    await app.client.chat.postMessage({
      token: context.botToken,
      channel: 'UN88YAC9G',
      text: `<@${message.user}> wants you to know you are super cool`,
    })
  })
}
