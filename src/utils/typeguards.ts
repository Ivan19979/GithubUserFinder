import { GithubUser } from "type";

export const isGithubUser = (user: any): user is GithubUser => 'id' in user;