import React, { useState, useEffect, useContext} from "react";
import { MainContext } from "../context/MainContext";
import { json } from "stream/consumers";

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  const {maxUserNumber, setMaxUserNumber} = useContext(MainContext)!;

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
  useEffect(() => {
  
  }, [users]);



  // all re-renders - реагувати на всі зміни в компоненті, реагувати на кожний ререндер(можна робити, але краще так не робити)
  useEffect(() => {});

  return (
    <div>
      <h1>Users</h1>
      <button className="usersBtn" onClick={() => setMaxUserNumber(7)}>Показати 7 користувачів</button>
      {users.slice(0, maxUserNumber).map((user, i) => (
        <div key={`${user.name}-${i}`} className="user-card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
		  {Object.values(user.company).map((data: any, i) => <p key={`${data}-${i}`}>{data}</p>)}
        </div>
      ))}
    </div>
  );
};
