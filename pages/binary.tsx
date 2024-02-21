import { Button, Container, Input, Main, Title } from "@/components/sharedstyles";
import { useState } from "react";
import { codeBinaryText, decodeBinaryText } from "@/server/binary";

export default function Binary() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleEncode = () => {
      setResult(codeBinaryText(text));
  };

  const handleDecode = () => {
      setResult(decodeBinaryText(text));
  };

  return (
    <Container>
      <Main>
        <Title>Encode and Decode Binary</Title>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or binary code"
        />
        <Button onClick={handleEncode}>Encode</Button>
        <Button onClick={handleDecode}>Decode</Button>
        <p>Resultado: {result}</p>
      </Main>
    </Container>
  );
}
