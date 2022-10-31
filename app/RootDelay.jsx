async function delay() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ name: "dasdasd" }), 4000);
  }, []);
}

export default async function RootDelay() {
  const data = await delay();
  console.log(data);
  return <div>Root Delay! {data.name}</div>;
}
