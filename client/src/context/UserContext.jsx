import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [profile, setProfile] = useState({ logged: false });
  const [newName, setNewName] = useState("");
  const [newProfile, setNewProfile] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const obtainProfile = async (id) => {
    await fetch(`/API/users/${id}`)
      .then((res) => res.json())
      .then((response) => setProfile({ ...response, logged: true }))
      .catch((err) => "nada");
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
