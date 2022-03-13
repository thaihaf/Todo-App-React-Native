import React, { useState } from "react";
import UserContext from "../../Contexts/UserContext";

export default function NumberProvider({ children }) {
  const [user, setUser] = useState({});

  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user: user, updateUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
