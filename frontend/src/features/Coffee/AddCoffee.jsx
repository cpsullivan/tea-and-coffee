import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom"

export default function AddCoffee(){
    const navigate = useNavigate()
    const { userToken } = useContext(UserContext)
    const [ coffeeName , setCoffeeName ] = useState()
    const [ description, setDescription ] = useState()
    const [ picture, setPicture ] = useState()
    const [ caffeine, setCaffeine ] = useState()
    const [ rating, setRating ] = useState()
    const [errors, setErrors ] = useState()

    const handleCoffeeNameChange = (e) => setCoffeeName(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleCaffeineChange = (e) => setCaffeine(e.target.value)
    const handleRatingChange = (e) => setRating(e.target.value)
    const handlePictureChange = (e) => setPicture(e.target.files[0])

    const handleSubmit = (e) => {
        e.preventDefault()
        const coffeeObject = {
            name: coffeeName,
            description: description,
            picture: picture,
            caffeine: caffeine,
            rating: rating
        }
        addCoffee(coffeeObject)
    }

    

    const addCoffee = async (coffeeObj) => {
        const base_url = import.meta.env.VITE_BASE_URL
        const url = `http://${base_url}/api/v1/coffee/`
        let formData = new FormData()
        formData.append("name", coffeeObj.name)
        formData.append("description", coffeeObj.description)
        formData.append("picture", coffeeObj.picture)
        formData.append("caffeine", coffeeObj.caffeine)
        formData.append("rating", coffeeObj.rating)
        const context = {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `token ${userToken}`,
                },
        }
        const response = await fetch(url, context)
        const body = await response.json()
        if (response.status === 400) {
            setErrors(body)
        } else {
            navigate("/")
        }
    }
    
    
    return (
    <>
    <div className="modal-overlay">
      <div className="modal-content">
    <h1>Share your favorite coffee</h1>
    {errors && <h4>{JSON.stringify(errors)}</h4>}


    <div className="share-input">
        {/* <label htmlFor="coffeeName">Coffee Name:</label> */}
        <input placeholder='Coffee Name' value={coffeeName} name="coffeeName" onChange={handleCoffeeNameChange}></input>
    </div>

    <div className="share-input">
        {/* <label htmlFor="description">Description:</label> */}
        <textarea className='input-description' placeholder='Description' value={description} name="description" onChange={handleDescriptionChange}></textarea>
    </div>

    <div className="share-input">
        {/* <label htmlFor="caffeine">Caffeine:</label> */}
        <input placeholder='Caffeine Content: mg/serving' value={caffeine} name="caffeine" onChange={handleCaffeineChange}></input>
    </div>

    <div className="share-input">
        {/* <label htmlFor="rating">Rating:</label> */}
        <input placeholder='Rating' value={rating} name="rating" onChange={handleRatingChange}></input>
    </div>

    <div className="share-input">
        {/* <label htmlFor="coffeeImage">Coffee Image: </label> */}
        <input type="file" name="coffeeImage" onChange={handlePictureChange}></input>
    </div>
    
    <div className="share-submit">
    <button className='share-button' onClick={handleSubmit}>Submit</button>
    </div>
     
    </div>
    </div>
    
    
    
    </>)
}