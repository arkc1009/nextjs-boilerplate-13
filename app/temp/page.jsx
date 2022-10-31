import TempCompoent from "./TempComponent";

async function getData() {
  const temp = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: "John Dae" }), 3000);
  });

  return temp;
}

export default async function TempPage() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      This is TempPage
      <TempCompoent />
    </div>
  );
}
