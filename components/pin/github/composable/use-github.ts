import type { GitHubCardProps } from "../types"

export async function useGithubProfile() {
  const githubProfile = await api.gitHubProfile()

  const cardProps = computed<GitHubCardProps>(() => ({
    payload: githubProfile,
  }))

  return {
    cardProps,
  }
}
