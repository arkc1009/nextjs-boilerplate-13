async function getDataSSR(URL: string) {
  const response = await fetch(`${process.env.API_URL}${URL}`, {
    cache: "no-store",
  });
  return response.json();
}

async function getDataSSG(URL: string) {
  const response = await fetch(`${process.env.API_URL}${URL}`, {
    cache: "force-cache",
  });
  return response.json();
}

async function getDataISR(URL: string, lifeTime: number) {
  const response = await fetch(`${process.env.API_URL}${URL}`, {
    next: { revalidate: lifeTime },
  });
  return response.json();
}

export default function getData() {
  return {
    SSR: getDataSSR,
    SSG: getDataSSG,
    ISR: getDataISR,
  };
}
