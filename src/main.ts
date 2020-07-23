import * as core from '@actions/core'
// import * as github from '@actions/github'
import {IncomingWebhook} from '@slack/webhook'

async function run(): Promise<void> {
  try {
    const webhook = core.getInput('webhook')
    const channel = core.getInput('channel')
    const slack = new IncomingWebhook(webhook, {channel})

    await slack.send({
      text: 'Hello World!'
      // text: JSON.stringify(github.context.payload, undefined, 2)
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

export default run
