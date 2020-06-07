import React, { useEffect, useState } from "react"
import { useAuth0 } from "../react-auth0-spa"
import { api } from "../config"
import Set from "./Set"
const Home = () => {
    const { user, loading } = useAuth0();
    const [sets, setSets] = useState([]);
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        const loadSets = async () => {
            const res = await fetch(`${api}/sets`)
            const sets = await res.json()
            setFetched(true)
            setSets(sets)
        }
        loadSets()
    }, [])

    if (!user) {
        return (
            <>
                {loading && <div>loading</div>}
                {!loading &&
                    <>
                        <h1 className="home-welcome">Welcome to Codelet!</h1>
                        <div className="post-container">
                            {fetched && sets.map((set) => <Set set={set} key={set.id} />)}
                        </div>
                    </>
                }

            </>
        )
    } else {
        return (
            <>
                {loading && <div>loading</div>}
                {!loading && <h1 className="home-welcome">Welcome, {user.name}</h1>}
                <div className="post-container">
                    {fetched && sets.map((set) => <Set set={set} key={set.id} />)}
                </div>
            </>
        )
    }
}

export default Home;