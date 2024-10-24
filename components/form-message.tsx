"use client";

import { useEffect, useState } from "react";

export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Promise<Message> }) {
  const [unwrappedMessage, setUnwrappedMessage] = useState<Message | null>(
    null
  );

  useEffect(() => {
    message.then(setUnwrappedMessage);
  }, [message]);

  if (!unwrappedMessage) return null;

  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in unwrappedMessage && (
        <div className="text-foreground border-l-2 border-foreground px-4">
          {unwrappedMessage.success}
        </div>
      )}
      {"error" in unwrappedMessage && (
        <div className="text-red-500 border-l-2 border-red-500 px-4">
          {unwrappedMessage.error}
        </div>
      )}
      {"message" in unwrappedMessage && (
        <div className="text-foreground border-l-2 px-4">
          {unwrappedMessage.message}
        </div>
      )}
    </div>
  );
}
