import Calendar from '@/components/Sections/Calendar'
import ComingSoon from '@/components/Sections/ComingSoon'
import Welcome from '@/components/Sections/Welcome'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Welcome />
      <Calendar />
    </main>
  )
}
