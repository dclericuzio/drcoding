import landingpage from "../layouts/landingpage"
import Banner1 from "../components/aboutus/banner1"
import Banner2 from "../components/aboutus/banner2"
import Banner3 from "../components/aboutus/banner3"
import Banner4 from "../components/aboutus/banner4"
import GetContact from "../components/getContact"

export default function aboutus() {
  return (
    <>
        <Banner1/>
        <Banner2/>
        <Banner3/>
        <Banner4/>
        <GetContact/>
    </>
  )
}

aboutus.layout = landingpage