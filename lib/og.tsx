import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "./site";

/**
 * Shared Open Graph card renderer used by every `opengraph-image.tsx`. Rendered once at build time (static).
 * Brand fonts are read from /assets/fonts; photos and the logo are inlined as data URIs so no network is needed.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Paths are statically scoped to two folders so Turbopack traces only those files into the output.
const readFont = (name: string) => readFile(join(process.cwd(), "assets", "fonts", name));
const readImage = (name: string) => readFile(join(process.cwd(), "public", "images", name));
const imageUri = async (name: string, mime: string) => `data:${mime};base64,${(await readImage(name)).toString("base64")}`;

type Opts = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** File under public/images (JPEG). */
  photo: string;
  /** CSS object-position for the photo crop. */
  photoPosition?: string;
};

export async function ogImage({ eyebrow, title, subtitle, photo, photoPosition = "center" }: Opts) {
  const [display, sans, logo, photoUri] = await Promise.all([
    readFont("PlusJakartaSans-ExtraBold.ttf"),
    readFont("Inter-Medium.woff"),
    imageUri("dcoa-logo-720.png", "image/png"),
    imageUri(photo, "image/jpeg"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0E3A5E 0%, #0B2F4C 60%, #082439 100%)",
          color: "#fff",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Red accent bar */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 14, height: "100%", background: "#C8102E", display: "flex" }} />

        {/* Copy column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 720,
            padding: "56px 40px 52px 70px",
          }}
        >
          <div style={{ display: "flex", background: "#fff", borderRadius: 16, padding: "12px 18px", alignSelf: "flex-start" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain img */}
            <img src={logo} width={196} height={70} alt="" style={{ objectFit: "contain" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 20,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: 10, background: "#C8102E", display: "flex" }} />
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontFamily: "Jakarta",
                fontWeight: 800,
                fontSize: title.length > 34 ? 52 : 62,
                lineHeight: 1.08,
                letterSpacing: -1,
              }}
            >
              {title}
            </div>
            <div style={{ display: "flex", marginTop: 20, fontSize: 26, lineHeight: 1.4, color: "rgba(255,255,255,0.86)" }}>
              {subtitle}
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, fontSize: 19, whiteSpace: "nowrap" }}>
            <div style={{ display: "flex", padding: "10px 18px", borderRadius: 999, background: "#C8102E", flexShrink: 0 }}>
              {SITE.phoneDisplay}
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 999,
                border: "2px solid rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Henderson, NV · Non-surgical · Drug-free
            </div>
          </div>
        </div>

        {/* Photo column */}
        <div style={{ display: "flex", flex: 1, padding: "44px 48px 44px 0" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              borderRadius: 28,
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.22)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain img */}
            <img
              src={photoUri}
              alt=""
              width={430}
              height={542}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: photoPosition }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Jakarta", data: display, weight: 800, style: "normal" },
        { name: "Inter", data: sans, weight: 500, style: "normal" },
      ],
    },
  );
}
