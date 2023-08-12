interface Props {
  setKata: (kata: string) => void
}

export function Header(props: Props) {
const {setKata} = props

  return <header>
    <h1>React Kata</h1>
    <nav>
    <p>Choose a kata to display</p>
    <button onClick={() => {setKata('funWithNumbers')}}>Fun with Numbers</button>
    <button onClick={() => {setKata('inflateTheUnicorns')}}>Inflate the Unicorns</button>
    <button onClick={() => {setKata('listShenanegans')}}>List Shenanegans</button>
    <button onClick={() => {setKata('pixelParty')}}>Pixel Party</button>
    </nav>


    
  </header>
}
