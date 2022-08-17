import { Title, Text } from '@mantine/core';
import CustomCard from '../elements/CustomCard';
import TrackListRanking from '../elements/TrackListRanking';

interface Props {
  data: any,
  message: string,
}

export default function TopTracksSection({data, message} : Props) {
  return (
    <CustomCard style={{ display: 'flex', gap: '14px', flexDirection: 'column'}}>

    <Title order={3} sx={{ textAlign: 'center' }}>
      Your Top Tracks of 
      <Text component="span" color="#33B04A" inherit> {message}</Text>
    </Title>

    <div>
    { 
    data.map((track: any, index: number) => {
      return (
        <TrackListRanking key={index} track={track} ranking={index + 1} />
      );
    })
    }
    </div>

  </CustomCard>
  )
}
