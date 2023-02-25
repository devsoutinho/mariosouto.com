import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const URL = process.env.NEXT_PUBLIC_SITE_URL
console.log("url", URL);

export default async function handler(req) {
  const { query } = req;

  console.log("req", Object.keys(req), );

  const image = req.nextUrl.searchParams.get("bg");
  const page = req.nextUrl.searchParams.get("page");
  const title = req.nextUrl.searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#fff',
          backgroundImage: image ? `url(${image})` : `url(${URL}/trademark/thumb-bg.jpg)`,
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
              src={`${URL}/trademark/logo-devsoutinho-default.png`}
              alt="DevSoutinho Logo"
              width="40px"
            />
          </div>
        ) : (
          <>
            <img
              style={{
                position: "absolute",
                right: "5%",
                top: "5%",
              }}
              src={`${URL}/trademark/logo-devsoutinho-default.png`}
              alt="DevSoutinho Logo"
              width="80"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: "5%",
                marginBottom: "5%",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "rgb(82, 82, 91)",
                }}
              >
                {page}
              </h2>
              <h1
                style={{
                  color: "rgb(39, 39, 42)",
                  margin: 0,
                  fontSize: "32px",
                  fontFamily: "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                  fontWeight: "bold",
                }}
              >
                {title}
              </h1>
            </div>
          </>
        )
        }
      </div>
    ),
    {
      width: 526,
      height: 275,

    }
  )
}