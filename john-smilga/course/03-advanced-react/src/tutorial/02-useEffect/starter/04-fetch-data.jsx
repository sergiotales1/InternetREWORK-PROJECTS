import { useState, useEffect } from 'react';
import { Users04 } from './Users04';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchFunc = async () => {
      const data = await fetch(url).then((res) =>
        res.json().then((data) => data)
      );
      setUsers(data.slice(0, 4));
    };
    fetchFunc();
  }, []);
  return (
    <section>
      <h1>GitHub Users</h1>
      <Users04 users={users} />
    </section>
  );
};
export default FetchData;
