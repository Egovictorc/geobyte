import MainLayout from "../layouts/main/MainLayout"
import { HomeHeader, HomeServices } from "../sections/home"

const HomePage = () => {
  return (
    <MainLayout>
      <HomeHeader />
      <HomeServices />
    </MainLayout>
  )
}

export default HomePage