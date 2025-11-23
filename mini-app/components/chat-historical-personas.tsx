"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export default function ChatHistoricalPersonas() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <h2 className="text-xl font-semibold">Chat with Historical Personas</h2>
      </CardHeader>
      <CardContent className="space-y-2">
        {messages.map((msg, idx) => (
          <p key={idx} className="bg-muted p-2 rounded">
            {msg}
          </p>
        ))}
      </CardContent>
      <CardFooter className="flex space-x-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button onClick={sendMessage}>Send</Button>
      </CardFooter>
    </Card>
  );
}
