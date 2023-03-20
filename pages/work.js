import landingpage from "../layouts/landingpage"
import Banner1 from "../components/work/banner1"
import Banner2 from "../components/work/banner2"
import Banner3 from "../components/work/banner3"
import GetContact from "../components/getContact"

export default function work() {
  return (
    <>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <GetContact/>
    </>
  )
}

work.layout = landingpage