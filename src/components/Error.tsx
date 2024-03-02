import { Container, Card, CardContent } from '@mui/material'

const Error = () => {
  return (
    <Container maxWidth="sm">
      <Card sx={{ p: 3, mt: 8, backgroundColor: '#EEEEEE' }}>
        <CardContent sx={{ lineHeight: 2 }}>
          現在システムに問題が発生している為、復旧までしばらくお待ちください。
        </CardContent>
      </Card>
    </Container>
  )
}


export default Error