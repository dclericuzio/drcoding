import landingpage from "../layouts/landingpage"
import Banner1 from "../components/service/banner1"
import Banner2 from "../components/service/banner2"
import Banner3 from "../components/service/banner3"
import GetContact from "../components/getContact"

export default function service() {
  return (
    <>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <GetContact/>
    </>
  )
}

service.layout = landingpage