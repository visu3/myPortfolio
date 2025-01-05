import { NextResponse } from 'next/server'
import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const owner = process.env.GITHUB_OWNER
const repo = process.env.GITHUB_REPO
const path = 'hit-count.txt'

export async function GET() {
  if (!owner || !repo) {
    console.error('Missing GITHUB_OWNER or GITHUB_REPO environment variables')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    // Get the current file content
    const { data: fileData } = await octokit.repos.getContent({
      owner,
      repo,
      path,
    })

    if (!('content' in fileData)) {
      throw new Error('Invalid response from GitHub API')
    }

    // Increment the hit count
    const currentCount = parseInt(Buffer.from(fileData.content, 'base64').toString('utf-8'))
    const newCount = currentCount + 1

    // Update the file in the repository
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: 'Update hit count',
      content: Buffer.from(newCount.toString()).toString('base64'),
      sha: fileData.sha,
    })

    return NextResponse.json({ hitCount: newCount })
  } catch (error) {
    console.error('Error updating hit count:', error)
    if (error.status === 404) {
      return NextResponse.json({ error: 'Repository or file not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to update hit count' }, { status: 500 })
  }
}

