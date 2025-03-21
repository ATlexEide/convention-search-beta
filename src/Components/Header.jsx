import "./Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    id: 0,
    username: "V",
    isOrganizer: true,
  });

  return (
    <header>
      <figure>
        <img src="" alt="" />
      </figure>
      <Link to="/">
        <h1>Hello {user.username}</h1>
      </Link>
      <nav>
        <button>Lorem</button>
        <button>ipsum</button>
        <button>My Conventions</button>
        {user.isOrganizer && (
          <button onClick={() => navigate(`manage/${user.id}/conventions`)}>
            Manage events
          </button>
        )}
      </nav>
    </header>
  );
}
