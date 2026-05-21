import { getProductBySlug } from "@/app/data/products";
import { env } from "@/app/env";
import colors from "tailwindcss/colors";
import { ImageResponse } from "next/og";

export const alt = "About Acme";

export const size = {
  width: 1200,

  height: 630,
};

export const contentType = "image/png";

export default async function OgImage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  const productImageURL = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    <div
      style={{
        background: colors.zinc[950],
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
    <img src={productImageURL} alt="" style={{ width: '100%'}}/>
    </div>,

    {
      ...size,
    },
  );
}
