type SearchProps = {
    loadUser: (
        userName: string
    ) => Promise<void>
}

import { useState, KeyboardEvent } from "react"
import { BsSearch } from "react-icons/bs"
import classes from './search.module.css'

const Search = ({loadUser}: SearchProps) => {
        const [userName, setUserName] = useState("");


        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.key === "Enter") {
                loadUser(userName)
            }
        }


    return (
        <div className={classes.search}>
            <h2>Busque por Usuario</h2>
            <p>Conheça sues melhores repositi</p>
            <div className={classes.search_container}>
                <input 
                type="text" 
                placeholder='Digite o nome do Usuario' onChange={(e) => setUserName(e.target.value)} 
                onKeyDown={handleKeyDown}
                />

                <button onClick={() => loadUser(userName)}>
                    < BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search