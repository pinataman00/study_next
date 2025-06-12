import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  //✅ layout 중첩 - 서브 레이아웃으로서 적용됨 (search/layout이 먼저 적용됨)
  return (
    <div>
      <div>세팅 헤더</div>
      {children}
    </div>
  );
}
