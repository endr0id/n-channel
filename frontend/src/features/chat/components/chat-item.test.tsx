// chat-item.test.tsx
import { render, screen } from "@testing-library/react";
import ChatItem from "./chat-item";

describe("ChatItem", () => {
  it("メッセージを表示する", () => {
    render(<ChatItem message="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("日本語テキスト（BMP）を正しく表示する", () => {
    render(<ChatItem message="こんにちは世界" />);
    expect(screen.getByText("こんにちは世界")).toBeInTheDocument();
  });

  it("絵文字や代用ペアを正しく表示する", () => {
    render(<ChatItem message="😀👨‍👩‍👧‍👦" />);
    expect(screen.getByText("😀👨‍👩‍👧‍👦")).toBeInTheDocument();
  });

  it("長いテキストで構造が崩れないこと", () => {
    const longText = "あ".repeat(200);
    render(<ChatItem message={longText} />);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });
});
