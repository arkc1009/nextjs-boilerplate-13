export default function ISRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      ISR: 일정 lifetme 마다 새롭게 fetch(api call) / update 합니다.
      {children}
    </div>
  );
}
