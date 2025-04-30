import type { GitHubCardProps } from "../types"

export async function useGithubProfile(
  username: string,
) {
  console.log(username)
  const githubProfile = await api.gitHubProfile(username)

  const cardProps = computed<GitHubCardProps>(() => ({
    payload: githubProfile,
  }))

  return {
    cardProps,
  }
}
