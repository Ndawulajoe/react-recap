import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function GitProfile(){

    let { gitUsername } = useParams()
    const valueFromUrl = gitUsername
    const [userData, setUserData] = useState({})

    useEffect(() =>{
        async function  getUserGit(){
            const response = await fetch(`https://api.github.com/users/${valueFromUrl}`)
            const data = await response.json()
            setUserData(data)
        }
        getUserGit()
    }, [])

    return (
        <>
        <h1>Git Profile</h1>
        <h1>git-user name{userData.login}</h1>
        <h1>name  {userData.name}</h1>
        <h1> No Ripos{userData.public_repos}</h1>
        </>
    )
}
export default GitProfile