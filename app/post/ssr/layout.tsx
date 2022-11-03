export default function SSRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      SSR: 매 페이지 요청시 마다 항상 fetch(api call) 합니다.
      {children}
    </div>
  );
}
