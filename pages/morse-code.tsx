import { Button, Container, Input, Main, Title } from "@/components/sharedstyles";
import { useState } from "react";
import { morseToText, textToMorse } from "@/server/morse";

export default function MorseCode() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleEncode = () => {
      setResult(textToMorse(text));
  };

  const handleDecode = () => {
      setResult(morseToText(text));
  };

  return (
    <Container>
      <Main>
        <Title>Encode and Decode Morse Code</Title>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or morse code"
        />
        <Button onClick={handleEncode}>Encode</Button>
        <Button onClick={handleDecode}>Decode</Button>
        <p>Resultado: {result}</p>
      </Main>
    </Container>
  );
}
