import landingpage from "../layouts/landingpage"
import Banner1 from "../components/home/banner1"
import Banner2 from "../components/home/banner2"
import Banner3 from "../components/home/banner3"
import Banner4 from "../components/home/banner4"
import Banner5 from "../components/home/banner5"
import Banner6 from "../components/home/banner6"


export default function Home() {
  return (
    <>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Banner5/>
      <Banner6/>
    </>
  )
}

Home.layout = landingpage
