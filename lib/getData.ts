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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjcwMzIwOTA3LCJleHAiOjE2NzAzMjQ1MDd9.LLjszJsURd9RfZmlCQkO_p560TlUT3BcgK5eIEx1e_I",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function patchData<T>(URL: string, data: T) {
  console.log(`${process.env.API_URL}${URL}`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${URL}`, {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwMzE2NTYyLCJleHAiOjE2NzAzMjAxNjJ9.kKmFhB0NWsg4C1HCmRmo9U5cRmxYWNxupuLirfpUhfc",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "Access-Control-Allow-Methods": `${process.env.NEXT_PUBLIC_API_URL}`,
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
