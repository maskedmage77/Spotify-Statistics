import { Paper } from '@mantine/core'

interface Props {
  children?: React.ReactNode
}

export default function CustomCard({ children }: Props) {
  return (
    <Paper shadow="xs" p="md" radius='md' sx={{ backgroundColor: '#161b22' }}>
      { children }
    </Paper>
  )
}
