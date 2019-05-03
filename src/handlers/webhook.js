import { slackWebhookUrl } from '../config'
import { constructGhIssueSlackMessage } from '../utils/slack'

export default async request => {
  let msg = ''
  try {
    const body = await request.text()
    // msg += body
    const { repository } = JSON.parse(body)
    msg += 'succeeded on repository'
    const { action } = JSON.parse(body)
    msg += 'succeeded on action'
    const { issue } = JSON.parse(body)
    msg += 'succeeded on issue'
    const prefix_text = `An issue was ${action}:`
    const issue_string = `${repository.owner.login}/${repository.name}#${issue.number}`
    //never get to here
    // prints out Unable to handle webhooksucceeded on repositorysucceeded on actionsucceeded on issue
    msg += issue_string
    const blocks = constructGhIssueSlackMessage(issue, issue_string, prefix_text)
    msg += JSON.stringify(blocks)
    const postToSlack = await fetch(slackWebhookUrl, {
      body: JSON.stringify({ blocks }),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
    msg += 'blocks'
    return new Response('OK')
  } catch (err) {
    const errorText = 'Unable to handle webhook' + msg
    return new Response(errorText, { status: 506 })
  }
}
