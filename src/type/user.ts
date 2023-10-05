export type LocalGithubUser = {
  login: string,
  id: number,
  avatar: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter: string | null,
  repos: number,
  followers: number,
  following: number,
  created: string,
}


export type GithubUser = {
  login: string,
  id: number,
  avatar_url: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter_username: string | null,
  public_repos: number,
  followers: number,
  following: number,
  created_at: string,
}

// "login": "Ivan19979",
// "id": 46045781,
// "avatar_url": "https://avatars.githubusercontent.com/u/46045781?v=4",
// "name": "Inan Shchurupov",
// "company": "ПАО МТС",
// "blog": "https://ivan19979.github.io/portfolio/",
// "location": "Russia",
// "bio": "Web разработчик\r\nИзменил жизнь ради мечты\r\n\r\n",
// "twitter_username": null,
// "public_repos": 20,
// "followers": 1,
// "following": 3,
// "created_at": "2018-12-21T09:27:17Z",
// }

export type GithubError = {
  message: string,
  documentation_url: string,
}

// {
//   "message": "Not Found",
//   "documentation_url": "https://docs.github.com/rest/users/users#get-a-user"
// }