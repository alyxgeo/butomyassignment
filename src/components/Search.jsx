import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchInput } from "../utils/searchSlice";

//import { useNavigate } from "react-router-dom"

const Search = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('');
    //console.log(searchText)


    const handleSearch = (e) => {
        setSearchText(e.target.value)
        dispatch(searchInput(e.target.value))
    }


    const handleclick = () => {
        navigate('shop')
    }



    return (
        <div>

            <div className=" border border-stone-800 rounded-lg">
                <input placeholder="search product"
                    value={searchText}
                    onChange={handleSearch}
                    className="border-r-2 border-stone-800
                        rounded-lg px-4 py-2 "
                    onClick={handleclick}
                />
                <Link to='/cart' className="px-2" >🛒</Link>
            </div>

        </div>
    )
}

export default Search