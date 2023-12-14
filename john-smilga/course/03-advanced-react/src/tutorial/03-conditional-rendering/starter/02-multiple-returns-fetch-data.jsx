import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  async function getData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }
      const data = await response.json();

      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [user]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  const { avatar_url, name, bio, company } = user;
  return (
    <div>
      <img src={avatar_url} alt="" />
      <h1>{name}</h1>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
