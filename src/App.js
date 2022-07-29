import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import RangeSlider from "./components/RangeSlider";
import FormControl from "./components/FormControl";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import Title from "./components/Title";
import Password from "./components/Password";

function App() {
  const toast = useToast();

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [password, setPassword] = useState("");

  const [passwordLength, setPasswordLength] = useState(8);

  const handleChange = (event) => {
    setPasswordLength(passwordLength);
  };

  const copyPassword = async (password) => {
    try {
      await navigator.clipboard.writeText(password);
      NotificationManager.success("Success message", "Title here");
    } catch (err) {
      console.error("error");
    }
  };

  const generatePassword = () => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert("Please select at least one character type");
    }

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijqlmnopqrstuvwxyz";
    const number = "123456789";
    const symbol = "!@#$%^&*()+";

    let userSelection = "";
    let generatedPassword = "";

    if (uppercase) {
      userSelection += upper;
    }
    if (lowercase) {
      userSelection += lower;
    }
    if (numbers) {
      userSelection += number;
    }
    if (symbols) {
      userSelection += symbol;
    }

    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += userSelection.charAt(
        Math.floor(Math.random() * userSelection.length)
      );
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-2">
        <Title />
        <Password
          password={password}
          setPassword={setPassword}
          onClick={copyPassword}
        />
        <RangeSlider
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
          handleChange={handleChange}
        />
        <FormControl
          uppercase={uppercase}
          setUppercase={setUppercase}
          lowercase={lowercase}
          setLowercase={setLowercase}
          numbers={numbers}
          setNumbers={setNumbers}
          symbols={symbols}
          setSymbols={setSymbols}
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={generatePassword}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default App;
