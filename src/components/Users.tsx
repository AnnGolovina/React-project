import React, { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  //useEffect відслідковує useState
  //first render - компонент готовий до роботи
  useEffect(() => {
	//alert("Users ready");
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(json => {
		console.log(json, "Data");		
		setUsers(json);
	})
  }, []);



  //users re-render - перемальовка
  useEffect(() => {}, [users]);



  // all re-renders - реагувати на всі зміни в компоненті, реагувати на кожний ререндер(можна робити, але краще так не робити)
  useEffect(() => {});

  return (
    <div>
      <h1>Users</h1>
      {users.map((user, i) => (
        <div key={`${user.name}-${i}`} className="user-card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
		  {Object.values(user.company).map((data: any, i) => <p key={`${data}-${i}`}>{data}</p>)}
        </div>
      ))}
    </div>
  );
};
