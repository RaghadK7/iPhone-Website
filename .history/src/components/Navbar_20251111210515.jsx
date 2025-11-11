import { appleImg } from "../utils"

function Navbar() {
  return (
    <header>
        <nav>
          <img src={appleImg} alt="Apple" width={14} height={18}/>
        </nav>
    </header>
  )
}

export default Navbar