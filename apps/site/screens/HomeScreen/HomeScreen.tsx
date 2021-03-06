import React from 'react';
import { Box, Image, Text, TouchableArea, useTheme } from 'skynexui';
import { Scaffold } from 'skynexui/patterns/Scaffold/Scaffold';
import { withApolloStateServerCache } from 'external-libs/apollo-client';
import { getYoutubeId } from '../../infra/string/getYoutubeId';
import { useGetAllYouTubeVideos } from '../../repository/youtubeRepository'; 

export async function getStaticProps() {
  return withApolloStateServerCache(
    useGetAllYouTubeVideos().server(),
    {
      props: {},
      revalidate: 60,
    }
  );
}


export function HomeScreen(props) {
  const theme = useTheme();

  const { loading, error, data } = useGetAllYouTubeVideos().client();

  if (loading) return (
    <Box styleSheet={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors?.neutral?.x900, color: '#fff' }}>
      <Text styleSheet={{ color: '#fff' }}>Loading...</Text>
    </Box>
  );
  if (error) return (
    <Box styleSheet={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors?.neutral?.x900, color: '#fff' }}>
      <Text styleSheet={{ color: '#fff' }}>{error.message}</Text>
    </Box>
  );

  return (
    <Scaffold
      statusBar={{
        title: 'Home - Mario Souto',
        style: 'light'
      }}
      safeArea={{ top: true, bottom: true }}
      styleSheet={{
        backgroundColor: theme.colors?.neutral?.x900,
        alignItems: 'center',
        paddingLeft: theme.space?.x4,
        paddingRight: theme.space?.x4,
      }}
    >
      <Box
        styleSheet={{
          maxWidth: theme.space?.xcontainer_sm,
          alignItems: 'center',
        }}
      >
        <Image
          styleSheet={{
            objectFit: 'cover',
            width: '200px',
            height: '200px',
            borderRadius: theme.borderRadius?.full,
            marginTop: theme.space?.x4,
            marginBottom: theme.space?.x4,
          }}
          src="https://github.com/omariosouto.png"
        />
        <Text tag='h1' variant='heading2' styleSheet={{ color: theme.colors?.primary.x500 }}>
          Mario Souto
        </Text>
        <Text tag='h2' variant='heading3' styleSheet={{ color: theme.colors?.neutral.x000 }}>
          Dev Soutinho
        </Text>
      </Box>
      <Box
        styleSheet={{
          maxWidth: theme.space?.xcontainer_sm,
          alignItems: 'center',
          marginTop: theme.space?.x6,
        }}
      >
        <Text
          tag='h2'
          variant='body1'
          styleSheet={{
            alignSelf: 'flex-start',
            color: theme.colors?.neutral.x100,
            marginBottom: theme.space?.x4,
            // borderBottomStyle: 'solid',
            borderBottomWidth: theme.space?.x1,
            borderBottomColor: theme.colors?.primary.x600,
            paddingBottom: theme.space?.x6,
          }}
        >
          Sempre no 220v, atr??s de um filme/rol?? e codando desafios em JS. Adoro trabalhar com a web e compartilhar sobre isso na Alura, Nubank e no meu canal do YouTube DevSoutinho
        </Text>

        <Text
          tag='h2'
          variant='heading2'
          styleSheet={{
            width: theme.space?.['x1/1'],
            color: theme.colors?.neutral.x100,
            paddingBottom: theme.space?.x6,
          }}
        >
          ???? Videos Publicados
        </Text>

        {data.posts.map(({ title, url }) => {
          const imageUrl = `https://i.ytimg.com/vi/${getYoutubeId(url)}/maxresdefault.jpg`;


          return (
            <Box
              key={url + title}
              styleSheet={{
                maxWidth: '400px',
                marginTop: theme.space?.x4,
                marginBottom: theme.space?.x4,
              }}
            >
              <TouchableArea
                href={url}
              >
                <Image
                  src={imageUrl}
                  styleSheet={{
                    width: '100%',
                    aspectRatio: {
                      xs: 1.5,
                      sm: 0,
                    },
                    borderRadius: theme.borderRadius?.md,
                    marginBottom: theme.space?.x4,
                  }}
                />
                <Text
                  key={title}
                  variant='body2'
                  styleSheet={{
                    color: theme.colors?.neutral.x200,
                    hover: {
                      color: theme.colors?.primary.x500,
                    },
                    focus: {
                      color: theme.colors?.primary.x500,
                    }
                  }}
                >
                  {title}
                </Text>
              </TouchableArea>
            </Box>
          );
        })}
      </Box>
    </Scaffold>
  );
}

export default HomeScreen;
