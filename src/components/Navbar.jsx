
import { NavLink } from "react-router-dom"
import Search from "./Search"
import Logo from "./Logo"


const Navbar = () => {
    return (

        <div className="bg-slate-50 flex p-4 border-b border-stone-200 items-center justify-between h-16  ">

            <Logo img='logo' />

            <nav  >
                {/* logo */}
                <ul className="flex gap-9 ">
                    <li>
                        <NavLink to='/home' >Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/about' >About us</NavLink>
                    </li>

                    <li>
                        <NavLink to='/makeup' >MakeUp</NavLink>
                    </li>


                    <li>
                        <NavLink to='/shop' >Shop All</NavLink>
                    </li>

                    <li>
                        <NavLink to='/howto' >How To</NavLink>
                    </li>
                </ul>

            </nav>


            <Search />

            <Logo img='profile' />

        </div>
    )
}

export default Navbar