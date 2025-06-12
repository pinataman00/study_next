import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  //✅ page를 어디에 배치할 건지 명시해야 함
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
}
