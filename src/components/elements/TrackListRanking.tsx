import { Progress, Text } from '@mantine/core';

interface Props {
  track: any,
  ranking: number,
}

export default function TrackListRanking({ track, ranking }: Props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '10px',
      gap: '10px',
      backgroundColor: '#21262D',
      borderRadius: '10px',
      margin: '10px',
    }}> 

      <Text component="span" color="#33B04A" inherit sx={{
        fontSize: '32px',
        width: '48px',
        textAlign: 'center',
      }}>
        {ranking}
      </Text>

      <img src={track.album.images[2].url} style={{
        borderRadius: 8,
        height: '48px',
      }}/>

      <div style={{ 
        width: '300px',
       }}>
        <Text style={{
          width: '300px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>{track.name}</Text>
        <Text style={{ 
          width: '300px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>{track.album.name}</Text>
      </div>
      
      <div style={{
        flexGrow: 1, 
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
      }}>
      <span style={{
        width: '100px',
        textAlign: 'center',
      }}>Popularity</span>
      <Progress radius="md" value={track.popularity} style={{
        width: '100px',
      }} />
      </div>
      

    </div>
  )
}
