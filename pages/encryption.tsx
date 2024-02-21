import { Button, Container, Input, Main, Title } from "@/components/sharedstyles";
import { useState } from "react";
import { decryptText, encryptText } from "@/server/encryption";

export default function Encryption() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleEncode = () => {
      setResult(encryptText(text));
  };

  const handleDecode = () => {
      setResult(decryptText(text));
  };

  return (
    <Container>
      <Main>
        <Title>Encode and Decode Encrypted Text</Title>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or encrypted code"
        />
        <Button onClick={handleEncode}>Encode</Button>
        <Button onClick={handleDecode}>Decode</Button>
        <p>Resultado: {result}</p>
      </Main>
    </Container>
  );
}
