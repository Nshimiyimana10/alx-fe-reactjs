import React, { useState } from "react";

function github(event) {
  event.preventDefault;
  document.getElementById("name").target.value;
}

const html_url = axios.create("https://api.github.com/users/{username}");
async function fetchUserData() {
  let x = await fetch(html_url);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
}

let location = get;
function minRepos() {
  return location;
}
const getData = html_url.map((a) => <li>{a} && "hi"</li>);

const Search = () => {
  const [form, setForm] = useState("good");
  const avatar_url = "My data";
  return (
    <div>
      <form action="" className="bg-teal-100 flex justify-center items-center">
        <label htmlFor="" className="text-sm text-white">
          Enter your name
        </label>
        <input type="text" placeholder="your name" />
        <label htmlFor="email">{form}</label>
        <input type="text" placeholder="enter your email" />
        <p className="text-sm text-white">Loading</p>
        <img src="" alt="not found" />
        <p>{getData}</p>
        <p className="text-sm text-white">Looks like we cant find the user</p>
        <button onSubmit={github} className="text-sm text-white">
          login
        </button>
      </form>
    </div>
  );
};

export default Search;