import { Container, SimpleGrid, Title, Text, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import CustomCard from '../components/elements/CustomCard';
import TopTracksSection from '../components/sections/TopTracksSection';
import useToken from '../hooks/useToken';
import useTopTracks from '../hooks/useTopTracks';
import { SwitchTransition, CSSTransition } from 'react-transition-group';


export default function Stats() {

  const token = useToken();
  
  const [shortTrackData, mediumTrackData, longTrackData] = useTopTracks(token);
  const [displayedCard, setDisplayedCard] = useState<'short' | 'medium' | 'long'>('long');
  const [displayedTrackData, setDisplayedTrackData] = useState(longTrackData);
  const [message, setMessage] = useState('long');

  useEffect(() => {
    switch (displayedCard) {
      case 'short':
        setDisplayedTrackData(shortTrackData);
        break;
      case 'medium':
        setDisplayedTrackData(mediumTrackData);
        break;
      case 'long':
        setDisplayedTrackData(longTrackData);
        break;
    }
    switch (displayedCard) {
      case 'short':
        setMessage('Last Month');
        break;
      case 'medium':
        setMessage('the Last 6 Months');
        break;
      case 'long':
        setMessage('All Time');
        break;
    }

  }, [displayedCard, longTrackData, mediumTrackData, shortTrackData]);

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

      <CustomCard style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
      }}>
        <Title order={4} sx={{  textAlign: 'center' }}>
          Time Period
        </Title>
        <Button.Group>
          <Button variant={displayedCard === "short" ? 'filled' : 'light'} sx={{ width: '125px' }} onClick={() => { setDisplayedCard('short') }}>Last Month</Button>
          <Button variant={displayedCard === "medium" ? 'filled' : 'light'} sx={{ width: '125px' }} onClick={() => { setDisplayedCard('medium') }}>Last 6 Months</Button>
          <Button variant={displayedCard === "long" ? 'filled' : 'light'} sx={{ width: '125px' }} onClick={() => { setDisplayedCard('long') }}>All Time</Button>
          </Button.Group>
      </CustomCard>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          in={displayedTrackData.length > 0}
          appear={displayedTrackData.length > 0}
          timeout={250}
          key={displayedCard}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
          <div>asd</div>
            {/* <TopTracksSection data={displayedTrackData} message={message} /> */}
          </CSSTransition>
        </SwitchTransition>

      </Container>
    </div>
  )
}
