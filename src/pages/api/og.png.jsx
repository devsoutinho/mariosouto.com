/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

const FRAME_PADDING = "6vw";

export const config = {
  runtime: 'experimental-edge',
}

const regularFontP = fetch(
  new URL("../../../public/fonts/Roboto-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const boldFontP = fetch(
  new URL("../../../public/fonts/Roboto-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export default async function handler(req) {
  const [regularFont, boldFont] = await Promise.all([
    regularFontP,
    boldFontP,
  ]);

  try {
    const image = atob(req.nextUrl.searchParams.get("bg") || "");
    // const { title, path } = JSON.parse(
    //   atob(req.nextUrl.searchParams.get("params") || "")
    // );
    const output = atob(req.nextUrl.searchParams.get("params")).split("%%%%");
    const baseTitle = output[0];
    const basePath = output[1];
    
    const title = baseTitle;
    const path = basePath;

    console.log("params", atob(req.nextUrl.searchParams.get("params")));
    console.log("title", title);
    console.log("path", path);

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: "Roboto",
            position: "relative",
            backgroundColor: '#18181b',
            backgroundImage: image ? `url(${image})` : ``,
            backgroundSize: '526px 275px',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            textAlign: 'left',
            alignContent: 'center',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          {image ? (
            <div
              style={{
                display: "flex",
                position: "absolute",
                right: "3vw",
                top: "3vw",
                backgroundColor: "white",
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                boxSizing: "content-box",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`${SITE_URL}/trademark/logo-devsoutinho-default.png`}
                alt="DevSoutinho Logo"
                width="40px"
              />
            </div>
          ) : (
            [
              <img
                key="img"
                style={{
                  position: "absolute",
                  right: FRAME_PADDING,
                  top: FRAME_PADDING,
                }}
                src={`${SITE_URL}/trademark/logo-devsoutinho-default-light.png`}
                alt="DevSoutinho Logo"
                width="100"
              />,
              <div
                key="div"
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  paddingTop: FRAME_PADDING,
                  marginLeft: FRAME_PADDING,
                  marginBottom: FRAME_PADDING,
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <h1
                  style={{
                    whiteSpace: "pre-line",
                    maxWidth: "70%",
                    color: "#f4f4f5",
                    margin: 0,
                    fontSize: title.length > 50 ? "28px" : "38px",
                    fontWeight: "700",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    flex: 1,
                    marginBottom: "4vw",
                  }}
                >
                  {title}
                </h1>
                <h2
                  style={{
                    whiteSpace: "pre-line",
                    maxWidth: "70%",
                    margin: 0,
                    fontSize: "20px",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://github.com/omariosouto.png"
                    width="25px"
                    height="25px"
                    style={{
                      border: "1px solid #a1a1aa",
                      borderRadius: "50%",
                      marginRight: "2vw",
                      marginBottom: "-3px",
                    }}
                  />
                  <div 
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      fontSize: "20px",
                      color: "#B1B1B1",
                    }}
                  >
                    mariosouto.com<br />
                    <span
                      style={{
                        color: "#B1B1B1",
                        fontSize: path.length > 40 ? "14px" : "16px",
                      }}
                    >
                      {path}
                    </span>
                  </div>
                </h2>
              </div>,
            ]
          )
          }
        </div>
      ),
      {
        debug: false,
        width: 526,
        height: 275,
        fonts: [
          {
            name: 'Roboto',
            data: regularFont,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Roboto',
            data: boldFont,
            style: 'normal',
            weight: 700,
          }
        ],
      }
    )
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 400,
    });
  }
}