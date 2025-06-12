export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  //✅ 동적 경로 (Dynamic Routing)
  return <div>book/{id} page입니다</div>;
}
