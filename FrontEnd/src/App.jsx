import { useContext, useEffect } from "react";

import { Outlet } from "react-router-dom";
import axios from "./services/axios.customize";
import { AuthContext } from "./contexts/auth.context";
import DefaultLayout from "./layouts/default-layout";
import SpinLoading from "./components/atoms/spin-loading";

function App() {
  const { setAuth, loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    const fetchAccount = async () => {
      setLoading(true);
      const res = await axios.get(`/api/user/account`);
      if (res && !res.message) {
        console.log(res);
        setAuth({
          isAuthentication: true,
          user: {
            id: res.id,
            email: res.email,
            role: res.role,
            username: res.username,
          },
        });
      }
      setLoading(false);
    };
    fetchAccount();
  }, []);
  return (
    <div>
      {loading === true ? (
        <SpinLoading />
      ) : (
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      )}
    </div>
  );
}

export default App;
