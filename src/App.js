import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./App.css";

const users = [
  {
    name: "John",
    email: "john@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Steve Smith",
    email: "stevesmith@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Kane Williams",
    email: "kanewilliams@example.com",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Chopra",
    email: "chopra@example.com",
    profileImage:
      "https://cdn.pixabay.com/photo/2016/10/17/17/41/priyanka-chopra-1748248_1280.jpg",
  },
  {
    name:"Zayeed",
    email:"zayeed123@gmail.com",
    profileImage:"https://i.pinimg.com/564x/c9/db/c9/c9dbc9adfac86609b7844e96adabb1be.jpg"
  },
  {
    name:"Abhi Ram",
    email:"abhiram@gmail.com",
    profileImage:"https://i.pinimg.com/564x/e4/c5/9f/e4c59fdbb41ccd0f87dc0be871d91d98.jpg"
  },
  {
    name:"Vineetha",
    email:"vineetha@gmail.com",
    profileImage:"https://i.pinimg.com/564x/2b/16/6d/2b166d161b669e14e08407a463629465.jpg"
  }
];

function App() {
  
  const [search, setSearch] = useState("");
  const [mouse, setMouse] = useState(false);
  const [user, setUser] = useState([]);

  const HandleInput = (e) => {
    setSearch(e.target.value);
  };

  const allUsersData = () => {
    setMouse(!mouse);
  };


//add the user in search container & remove the user in the main container
  const userAddData = (each) => {
    setUser([...user, each]);

    const updatedUsers = users.filter((user) => user !== each);
    users.splice(0, users.length, ...updatedUsers);
  };

//similarly remove the user in search container & add the user in main container
  const deleteUser = (each) => {
    const updatedUsers = [...user];
    const filteredUsers = updatedUsers.filter((eachUser) => eachUser !== each);
    setUser(filteredUsers);

    users.push(each);
  };

  const visibleData = () => {
    let getData = users;
    //search functionality 
    const searchFilter = [...new Set(getData)].filter((each) =>
      each.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div>
        {searchFilter.map((each, i) => (
          <div
            key={i}
            onClick={() => userAddData(each)}
            className="filtered-users"
          >
            <img src={each.profileImage} alt={`${each.name}`} />
            <p className="filter-user-name"> {each.name}</p>
            <p> {each.email}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="main-container" onMouseLeave={allUsersData}>
      <h1>Pick Users</h1>
      <div className="user-container">
        <div className="each-user-data-main-container">
          {user.map((each, i) => {
            return (
              <div key={i} className="each-user-data">
                <img src={each.profileImage} alt="" />
                <p>{each.name}</p>

                <span onClick={() => deleteUser(each)}>
                  <RxCross2 />
                </span>
              </div>
            );
          })}
        </div>
        <form>
          <input
            type="text"
            placeholder="Add user"
            onChange={HandleInput}
            value={search}
            onMouseOver={allUsersData}
          />
        </form>
      </div>

      <div className="">
        {mouse ? (
          <div className="users-data-container">{visibleData()}</div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
