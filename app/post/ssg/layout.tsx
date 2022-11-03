export default function SSGLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      SSG: 빌드 시에 페이지를 생성 해놓습니다. 해당 페이지는 [이미 완성되어 있는
      정적 페이지]이다.
      {children}
    </div>
  );
}
