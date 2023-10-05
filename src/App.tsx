import { Container } from "components/Container";
import { Loader } from "components/Loader";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import {defaultUser} from 'mock'
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "type";
import { extractLocalUser } from "utils/extract-local-user";
import { isGithubUser } from "utils/typeguards";

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const  [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const [isLoading, setIsLoading] = useState(false); 
  const [notFound, setNotFound] = useState(false); 

  const fetchUser = async (userName: string) => {
    setIsLoading(true);
    setNotFound(false);
    const url = BASE_URL + userName;
    const response = await fetch(url);
    const user = await response.json() as GithubUser | GithubError;
    if(isGithubUser(user)){
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
      setNotFound(true);
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <TheHeader />
      <Search hasError={notFound} onSubmit={fetchUser} />
      {isLoading ? <Loader /> : ''}
      {user && !isLoading && (
        <UserCard {...user} />
      )}
    </Container>
  );
}

export default App;
