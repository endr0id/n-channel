import type { ChatItemProps } from "../types/chat-item";

const ChatItem = ({ message }: ChatItemProps) => {
  return (
    <div className="border border-white rounded-md px-2 py-2 max-w-xs min-w-0 text-white whitespace-normal break-words">
      {message}
    </div>
  );
};

export default ChatItem;
