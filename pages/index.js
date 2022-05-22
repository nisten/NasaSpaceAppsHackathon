import Head from 'next/head'
// import Image from 'next/image'

import { Container, Row, Col, Button, Card} from 'react-bootstrap'

// const Render = () => {
//   useEffect(() => {
//     const handler = event => {
//       const data = JSON.parse(event.data)
//       console.log("checheck meow", data)
//   }
//   windows.addEventListened('message', handler)
// }

export default function Home() {

  return (
    <div>
      {/* <Image
      src="../transorbit.png"
      alt="logo transparent background"
      width={300}
      height={65}
    /> */}
    </div>,
    <iframe src="../index.html" overflow="hidden" border="none" height="1000vh" width="100%" display="flex"></iframe>
  )
}
