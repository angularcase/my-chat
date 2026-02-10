import { useRef } from 'preact/hooks';

interface Props {
  onSend: (content: string) => void;
}

export function MessageInput({ onSend }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const value = inputRef.current?.value ?? '';
    if (value.trim()) {
      onSend(value);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <form class="mychat-input-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        class="mychat-input"
        placeholder="Type a message..."
        autoComplete="off"
      />
      <button type="submit" class="mychat-send-btn" aria-label="Send">
        &#10148;
      </button>
    </form>
  );
}
