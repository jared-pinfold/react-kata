import { useState } from 'react'
import { FunWithNumbers } from './FunWithNumbers'
import { Header } from './Header'
import { InflateTheUnicorns } from './InflateTheUnicorns'
import { ListShenanegans } from './ListShenanegans'
import { PixelParty } from './PixelParty'
import { Select } from './Select'

export default function App() {
  const [kata, setKata] = useState('select')
  const kataList = {
    select: <Select />,
    inflateTheUnicorns: <InflateTheUnicorns />,
    listShenanegans: <ListShenanegans />,
    funWithNumbers: <FunWithNumbers />,
    pixelParty: <PixelParty />,
  }
  type Kata = keyof typeof kataList
  return (
    <>
      <Header {...{ setKata }} />
      <main>{kataList[kata as Kata]}</main>
    </>
  )
}
