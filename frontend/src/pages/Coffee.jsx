import { coffeeFetch } from "../api/dataApi"
import { useEffect, useState } from "react"
import Rating from '@mui/material/Rating';

import AddCoffee from "../features/Coffee/AddCoffee"

export default function Coffee() {
    const [ coffees, setCoffees ] = useState([])
    const [ addCoffeeForm, setAddCoffeeForm ] = useState(false)

    const handleAddCoffee = () => {
        setAddCoffeeForm(true)
    }

    useEffect(() => {
        getCoffeeData()
    }, [])

    const capitalizeWords = (str) => {
        return str
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      };

    const createCoffeeList = () => {
        return coffees.map( coffee => {
            return (
                <div key={capitalizeWords(coffee.name)} className="coffee-card">
                    <div className="coffee-header-image">
                        <h1>{capitalizeWords(coffee.name)}</h1>
                        <img className="coffee-thumbnail" src={coffee.picture}/>
                    </div>
                    <div className="coffee-interactive-info">
                        <p>{coffee.description}</p>
                        <div className="interactive-footer">
                            <h4>{coffee.rating}<Rating name="read-only" value={coffee.rating} readOnly/></h4>
                            <h4>Caffeine - {coffee.caffeine}mg/Serving</h4>
                            <h4>Recipe</h4>
                            <h4>See Reviews</h4>
                            <h4> + Add Review</h4>
                        </div>
                    </div>
                </div>
                )
            })
        }

    const getCoffeeData = async () => {
        const fetchedCoffees = await coffeeFetch();
        setCoffees(fetchedCoffees)
    }

    console.log(coffees)
    
    return (
    <>
    <div className="add-a-coffee">
        <h2>Take A Gander at our premium coffees. If what you want is not here, Add it! </h2>
        <button onClick={handleAddCoffee}>add coffee</button>
    </div>

    {coffees && createCoffeeList()}
    {addCoffeeForm && <AddCoffee/>}

    </>)
}