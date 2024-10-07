import { createContext, useContext, useState } from "react";

const Dashboard = () => {
  const transactions = [
    { id: 1, date: "2023-05-01", description: "Deposit", amount: 1000.0 },
    { id: 2, date: "2023-05-02", description: "Withdrawal", amount: 100.0 },
    { id: 3, date: "2023-05-03", description: "Purchase", amount: 50.0 },
    { id: 4, date: "2023-05-04", description: "Deposit", amount: 200.75 },
  ];

  return (
    <section className="text-[white] mx-auto w-[450px] flex flex-col justify-center items-center mt-[10%]">
      <h1 className="text-[22px] font-semibold justify-center items-center ">
        Account Summary
      </h1>
      <div className="text-left w-full px-9 mt-4">
        <strong>Balance:</strong> $2,432.97
      </div>
      <div>
        <table className="w-full border-collapse  mt-2">
          <thead>
            <tr className="bg-[#f3a007ce]">
              <th className="border px-6 py-2 text-left">Date</th>
              <th className="border px-6 py-2 text-left">Description</th>
              <th className="border px-6 py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border px-6 py-2 text-sm">{transaction.date}</td>
                <td className="border px-6 py-2 text-sm">
                  {transaction.description}
                </td>
                <td className="border px-6 py-2 text-sm text-right">
                  ${transaction.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const authContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <authContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

const LoginForm = () => {
  const { login } = useContext(authContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    //@ts-ignore
    login(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col m-auto w-[300px] py-2 mt-[10%]"
    >
      <h2 className="text-[22px] text-[white] font-semibold mb-4">Log In</h2>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="username" className="text-[white]">
          Username:
        </label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-[white]">
          Password:
        </label>
        <input
          required
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-3 text-[black]"
      >
        Login
      </button>
    </form>
  );
};

const NavBar = () => {
  const { logout, isAuthenticated } = useContext(authContext);

  return (
    <nav className="bg-[#a8838c] py-3 flex justify-between px-6">
      <span role="img" aria-label="Money bags emoji" className="text-[30px] ">
        💰
      </span>
      {isAuthenticated && (
        <button
          className="underline text-[white] font-semibold"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

const Main = () => {
  const { isAuthenticated } = useContext(authContext);

  return (
    <main className=" overflow-hidden">
      {isAuthenticated ? <Dashboard /> : <LoginForm />}
    </main>
  );
};

const Challange28 = () => {
  return (
    <AuthProvider>
      <NavBar />
      <Main />
    </AuthProvider>
  );
};
export default Challange28;
