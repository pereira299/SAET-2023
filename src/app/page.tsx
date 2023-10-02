import Calendar from '@/components/Sections/Calendar'
import ComingSoon from '@/components/Sections/ComingSoon'
import Patrocinio from '@/components/Sections/Patrocinio'
import Products from '@/components/Sections/Products'
import Welcome from '@/components/Sections/Welcome'
import api from '@/services/api'
import Image from 'next/image'

export default async function Home() {
  const patrocinios = await api.get('/api/patrocinio');

  return (
    <main>
      <Welcome />
      <Calendar />
      {/* <Products /> */}
      <Patrocinio patrocinios={patrocinios.data.allPatrocinios} />
    </main>
  )
}
