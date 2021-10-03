import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col, Button, Card} from 'react-bootstrap'

export default function Home() {
  return (
      <Container>
        
        <Card>
        <iframe src="../index.html"></iframe>
        </Card>
        <Button variant='secondary'>
          Meow
        </Button>
      </Container>
      
      
    
    
  )
}
