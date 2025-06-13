"use client"; //✅ Client Component 설정

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Navigation (※ next/router 안 돼!)

export default function SearchBar() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // ✅ Navigation > programmatic - Event Handler/React Hook 사용...

  const onSubmit = () => {
    // ✅ React Hook > useRouter 사용하기
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input type="text" value={search} onChange={onChangeSearch} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
