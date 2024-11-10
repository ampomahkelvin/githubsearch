import { ChangeEvent, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import Title from "./components/title";
import { UserType } from "./types";

const BASE_URL = "https://api.github.com";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<UserType | null>();
  const [showError, setShowError] = useState<boolean>(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setUsername(value);
  };

  const getUser = () => {
    if (!username) return;
    fetch(`${BASE_URL}/users/${username}`)
      .then((res) => {
        if (res.status === 404) {
          setShowError(true);
          setUserData(null);
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setUserData(data);
          setShowError(false);
        }
      })
      .catch(() => {
        setShowError(true);
      });
  };

  return (
    <div
      className={`margin-none w-[80%] mt-36 justify-self-center md:max-w-3xl sm:w-[80%] ${
        dark
          ? "dark:bg-dark-html-background dark:text-text-secondary"
          : "bg-light-background text-text-primary"
      }`}
    >
      <Title darkModeHandler={darkModeHandler} dark={dark} />
      <Search
        username={username}
        onInputChange={onInputChange}
        onSearch={getUser}
        showError={showError}
      />
      {userData && <Card userData={userData} />}
    </div>
  );
}

export default App;
