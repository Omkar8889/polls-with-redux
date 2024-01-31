import React, {useMemo} from 'react'
import '../assets/styles/navbar.css'
function Navbar() {
  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <a class="navbar-brand" href="#"><i class="fa-solid fa-square-poll-vertical"></i>Mypolls</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Create poll</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My polls</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">All polls</a>
      </li>
    </ul>
  </div>
</nav>
</>
  )
}
const MemoizedNavbar = React.memo(Navbar);
export default MemoizedNavbar
