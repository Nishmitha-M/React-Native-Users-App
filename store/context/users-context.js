import { createContext, useEffect, useState } from 'react';
import { RESULT_PARAM } from '../../constants/urlParams';
import { axiosInstance } from '../../utils/axiosBaseUrl';

export const UsersContext = createContext({
  userDataList: [],
});

function UsersContextProvider({ children }) {
  const [usersList, setUsersList] = useState([]);

  const getUsersList = async () => {
    const res = await axiosInstance.get(`/?${RESULT_PARAM}`);
    const { data } = res;
    return data;
  };

  useEffect(() => {
    (async () => {
      const usersData = await getUsersList();
      if (usersData && usersData.results.length) {
        setUsersList(usersData.results);
      }
    })();
  }, []);

  return (
    <UsersContext.Provider value={{ userDataList: usersList }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersContextProvider;
