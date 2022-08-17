import { Paper } from '@mantine/core'

interface Props {
  children?: React.ReactNode,
  style?: React.CSSProperties,
}

export default function CustomCard({ children, style = {} }: Props) {
  return (
    <Paper shadow="xs" p="md" radius='md' style={{ backgroundColor: '#161b22', ...style }}>
      { children }
    </Paper>
  )
}
