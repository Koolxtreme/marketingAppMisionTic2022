import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [newName, setNewName] = useState("");
  const [newProfile, setNewProfile] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const obtainProfile = async (id) => {
    await fetch(`/API/users/${id}`)
      .then((res) => res.json())
      .then((response) => {
        const perfil = { ...response, logged: true };
        setProfile(perfil);
        localStorage.setItem("contexto", JSON.stringify({id, logged: true}));
      })
      .catch((err) => "nada");
  };

  const lookForLocal = () => {
    if (localStorage.getItem("contexto")) {
      const local = JSON.parse(localStorage.getItem("contexto"));
      if (local.logged) {
        obtainProfile(local.id);
      } else {
        setProfile({ logged: false });
      }
    } else {
      setProfile({ logged: false });
      localStorage.setItem("contexto", JSON.stringify({ logged: false }));
    }
  };

  const updateProfile = async () => {
    const newData = JSON.stringify({
      username: newName,
      email: newProfile,
      password: newPassword,
    });
    await fetch(`/API/users/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    });
  };

  useEffect(() => {
    lookForLocal();
  }, []);

  return (
    <UserContext.Provider
      value={{
        profile,
        obtainProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
