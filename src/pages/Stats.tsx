import { Container, SimpleGrid, Title, Text, Paper } from '@mantine/core';
import { useEffect } from 'react';
import CustomCard from '../components/CustomCard';
import useToken from '../hooks/useToken';
import useTopTracks from '../hooks/useTopTracks';

export default function Stats() {

  const token = useToken();
  const [shortTrackData, mediumTrackData, longTrackData] = useTopTracks(token);

  useEffect(() => {
    if (token) {
     
    }
  } ,[shortTrackData])
  
  return (
    <div>
      <Container size={700} sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '40px',
        gap: '40px',
      }}>

        <Title order={1} sx={{  textAlign: 'center' }}>
          Spotify{' '}
          <Text component="span" color="#33B04A" inherit>
            Statistics
          </Text>
        </Title>

      <SimpleGrid cols={3}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </SimpleGrid>

      <CustomCard>

        <Title order={3} sx={{ textAlign: 'center' }}>
          Your Top Tracks of All Time
        </Title>

        
        { 
          longTrackData.map((track: any, index) => {
            return (
              <div key={index.toString()} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '10px',
                gap: '10px',
              }}> 
                <img src={track.album.images[2].url} style={{
                  borderRadius: 8,
                  height: '50px',
                }}/>
                <div>
                  <Text>{track.name}</Text>
                  <Text>{track.album.name}</Text>
                </div>
                

              </div>
            );
          })
          }
        

      </CustomCard>

      </Container>
    </div>
  )
}
