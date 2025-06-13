import ClientComponent from "@/app/components/client-component";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>
      Search 페이지 : {q}
      {/* ✅ Server Component && Client Component 모두를 포함함 */}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
