import type { GitHubParams } from './github.type'
import type { GitHubProfile as GitHubProfileResponse } from '~/types/models/github'

export function getGitHubProfile(username: string, params?: GitHubParams) {
  return getReq<GitHubProfileResponse>('VITE_API_GITHUBPROFILE', username, params)
}
