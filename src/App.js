import { useState } from "react";

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
      toast({
        title: "Copied!",
        description: "Password copied to clipboard.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Could not copy password to clipboard.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return <div></div>;
}

export default App;
