import { useState } from "react";

import "./App.css";
import api from "./api/users";
function App() {
  const [posts, setPosts] = useState([]);

  const fetchUsersData = async () => {
    try {
      const response = await api.get("/users?page=1");
      setPosts(response.data.data);
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
      } else {
        console.log(`Error: ${e.message}`);
      }
    }
  };

  return (
    <div className="bg-primary p-5">
      <div className="w-full mx-auto">
        <p className="text-3xl text-gray-200 my-2">USER DETAILS</p>
        <p className="font-sanserif text-slate-200 mb-2">
          Click below to get the user details
        </p>
        <div>
          <button
            className="btn bg-secondary my-5 hover:bg-yellow-400"
            onClick={fetchUsersData}
          >
            Get Data
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-9/12 mx-auto my-10">
      
          {/* data's */}
          {posts.map((post) => (
            <tbody key={post.id}>
              <tr className="bg-base-200 text-white my-2 text-lg hover:scale-105 duration-150 hover:bg-red-900">
                <th>{post.id}</th>
                <td>{post.email}</td>
                <td>{post.first_name}</td>
                <td>{post.last_name}</td>
                <td>{post.avatar}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
