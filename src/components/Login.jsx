import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      setUsername("");
      setPassword("");
      navigate("/home");
      alert("Login Success");
    } else {
      alert("Login Failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form
        className="border-black border-2 p-8 flex flex-col items-center space-y-4 w-80 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 border-2 border-gray-500 rounded-sm w-full"
          type="text"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value); // Fixed: was e.target.username
          }}
          value={username}
          required
          placeholder="Username"
        />
        <input
          className="p-2 border-2 border-gray-500 rounded-sm w-full"
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value); // Fixed: was e.target.password
          }}
          value={password}
          required
          placeholder="Password"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-sm w-full hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
