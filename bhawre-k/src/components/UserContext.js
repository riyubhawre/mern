import React from "react";

const UserContext=React.createContext('bhawre')
const UserProvide=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvide,UserConsumer}
export default UserContext;