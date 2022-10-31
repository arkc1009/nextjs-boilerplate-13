import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          fontSize: "128",
          background: "black",
          color: "#ffffff",
        }}
      >
        Hello Og!
      </div>
    )
  );
}
