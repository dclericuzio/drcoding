import landingpage from "../layouts/landingpage"
import Banner1 from "../components/home/banner1"
import Banner2 from "../components/home/banner2"
import Banner3 from "../components/home/banner3"
import GetContact from "../components/getContact"


export default function Home() {
  return (
    <>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <GetContact/>
    </>
  )
}

Home.layout = landingpage
