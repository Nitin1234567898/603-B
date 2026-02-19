import { createContext } from 'react';

const UserContext = createContext({
  name: '',
  age: '',
  number: '',
});

export default UserContext;