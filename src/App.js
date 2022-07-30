import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import RangeSlider from "./components/RangeSlider";
import FormControl from "./components/FormControl";
import alertify from "alertifyjs";

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
      alertify.notify("Password copied to clipboard", "success", 5);
    } catch (err) {
      alertify.notify("error");
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
    <div className="flex justify-center items-center h-screen bg-gray-200 ">
      <div className="space-y-4 shadow-xl	 ">
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
          className="w-full h-12 px-6 font-poppins text-white transition-colors duration-150 bg-gray-800 hover:bg-gray-900 rounded-lg focus:shadow-outline shadow-xl	"
          onClick={generatePassword}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default App;
