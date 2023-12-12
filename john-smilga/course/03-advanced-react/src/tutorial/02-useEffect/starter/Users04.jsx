import React from 'react';

export const Users04 = ({ users }) => {
  console.log(users);
  return (
    <ul className="users">
      {users.map((user) => {
        const { id, avatar_url: avatar, login, url } = user;
        return (
          <li key={id}>
            <img src={avatar} alt="" />
            <div>
              <h5>{login}</h5>
              <a href={url}>profile</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
