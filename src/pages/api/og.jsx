/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

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


    const image = req.nextUrl.searchParams.get("bg");
    const title = atob(req.nextUrl.searchParams.get("title"));

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: "Roboto",
            position: "relative",
            backgroundColor: '#dddddd',
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
                right: "3%",
                top: "3%",
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
                  right: "5%",
                  top: "5%",
                }}
                src={`${SITE_URL}/trademark/logo-devsoutinho-default.png`}
                alt="DevSoutinho Logo"
                width="80"
              />,
              <div
                key="div"
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  paddingTop: "5%",
                  marginLeft: "5%",
                  marginBottom: "5%",
                }}
              >
                <h1
                  style={{
                    whiteSpace: "pre-line",
                    maxWidth: "75%",
                    color: "rgb(39, 39, 42)",
                    margin: 0,
                    fontSize: "38px",
                    fontWeight: "700",
                  }}
                >
                  {title}
                </h1>
                <div
                  style={{
                    display: 'flex',
                    marginTop: "5%",
                    width: "100%",
                    flex: 1,
                    alignItems: "flex-end",
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <img
                      key="img-profile"
                      src="https://github.com/omariosouto.png"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: "10px",
                      justifyContent: 'center',
                    }}
                  >
                    <h2
                      style={{
                        whiteSpace: "pre-line",
                        maxWidth: "75%",
                        color: "rgb(39, 39, 42)",
                        margin: 0,
                        fontSize: "20px",
                        fontWeight: "400",
                      }}
                    >
                      Mario Souto
                    </h2>
                  </div>
                </div>
              </div>,
            ]
          )
          }
        </div>
      ),
      {
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
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}