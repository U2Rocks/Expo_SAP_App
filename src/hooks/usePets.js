import React, { useState, useEffect } from 'react'
import { pets } from "../pets/PetInfo"


// maybe use custom hook to get pet info?
// this hook will most likely throw a null error in the beginning

export default function usePets() {
    const [prevPet, setPrevPet] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [currentPet, setCurrentPet] = useState({})

    useEffect(() => {
        setCurrentPet({
            name: null,
            data: null
        })
        // console.log("hook rendered")
    }, [])

    function getPetInfo(petname) {
        setCurrentPet({
            name: petname,
            data: pets[`${petname}`],
        })
        setPrevPet(petname)

        // if (currentPet.data == null){
        //     setErrorMsg("something went wrong retreieving pet data")
        // }

        if (prevPet == petname){
            setPrevPet("N/A")
        }
    }
    return [prevPet, currentPet, errorMsg, getPetInfo]
}