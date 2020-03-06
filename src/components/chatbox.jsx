import React from "react";
import ChatBot from "react-simple-chatbot";

const ChatBox = () => {
  const styleFloat = {
    bottom: "5rem"
  };
  return (
    <ChatBot
      steps={[
        {
          id: "Hello-world",
          message: "Hello-world",
          end: true
        }
      ]}
      floating={true}
      floatingStyle={styleFloat}
      headerTitle={"Let's talk?"}
    />
  );
};

export default ChatBox;
