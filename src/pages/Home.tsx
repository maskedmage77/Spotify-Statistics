import { Container, Text, Button, Group, Title } from '@mantine/core';
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPES } from '../constants/spotifyAPI'

export default function Home() {   
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <Container size={700} sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
        <Title order={1} sx={{lineHeight: 0.75}}>
          Spotify{' '}
          <Text component="span" color="#33B04A" inherit>
            Statistics
          </Text>
        </Title>

        <Text sx={{ fontSize: '24px'}}>
          Connect your Spotify account to see your statistics, include your top tracks, top artists, and more! This app was created using publicly available Spotify Web API by Jacob Hines.
        </Text>

        <Group>
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}>
            <Button size="xl" >
              Connect Spotify
            </Button>
          </a>

          <Button
            component="a"
            href="https://github.com/maskedmage77"
            size="xl"
            variant="default"
          >
            My GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}