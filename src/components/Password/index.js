import React from "react";
import {
  IconButton,
  InputRightAddon,
  InputGroup,
  Input,
} from "@chakra-ui/react";

const Password = ({ password, setPassword, copyPassword }) => {
  return (
    <div>
      <InputGroup style={{ marginBottom: "1rem" }}>
        <Input
          size="md"
          isDisabled={true}
          variant="filled"
          value={password}
          style={{ textAlign: "center" }}
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </span>
      </InputGroup>
    </div>
  );
};

export default Password;
