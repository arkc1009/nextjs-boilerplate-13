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

export async function postData<T>(URL: string, data: T) {
  console.log(`${process.env.API_URL}${URL}`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwMzExNjQ1LCJleHAiOjE2NzAzMTUyNDV9.s36oH3pPaQ80lLkfuYWPYL1Z0zmCVo8Wc_TafuFXfTc",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
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
