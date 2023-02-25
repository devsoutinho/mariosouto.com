/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const URL = process.env.NEXT_PUBLIC_SITE_URL

export default async function handler(req) {
  const image = req.nextUrl.searchParams.get("bg");
  const title = req.nextUrl.searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
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
          [
            <img
              key="img"
              style={{
                position: "absolute",
                right: "5%",
                top: "5%",
              }}
              src={`${URL}/trademark/logo-devsoutinho-default.png`}
              alt="DevSoutinho Logo"
              width="80"
            />,
            <div
              key="div"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: "5%",
                marginBottom: "5%",
              }}
            >
              <h1
                style={{
                  maxWidth: "75%",
                  color: "rgb(39, 39, 42)",
                  margin: 0,
                  fontSize: "32px",
                  fontFamily: "serif",
                  fontWeight: "bold",
                }}
              >
                {title}
              </h1>
            </div>,
          ]
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