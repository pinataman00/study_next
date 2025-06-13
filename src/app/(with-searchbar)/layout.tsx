import { ReactNode } from "react";
import SearchBar from "../components/searchbar";

//✅⚠️ ServerComponent는 ClientComponent에 import하지 아니한다
//-> 대신 Props > children으로 전달받을 것...
export default function Layout({ children }: { children: ReactNode }) {
  //✅ page를 어디에 배치할 건지 명시해야 함
  return (
    <div>
      {/* <div>임시 서치바</div> */}
      <SearchBar />
      {children}
    </div>
  );
}
