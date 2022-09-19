import { useEffect, useState } from "react"
// import { Api } from "../../Providers/Api"
import axios from 'axios';
import { ICharacters } from "../../Interfaces/ICharacters";


export const Cards = () => {

  const [cards, setCards] = useState<ICharacters[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then((response: any) => {
      setIsLoading(true)
      setCards(response.data.cards)
      console.log(response.data)
    })
    .catch((err: Error) => {
      console.log("Ocorreu um erro: ", err)
    })
  }, [])

  return (
    
    <>
      {cards?.map((card: ICharacters) => {
        return(
          <div key={card.id}>
            <img src={card.image} alt="" />
            <span>{card.name}</span>
            <span>{card.status}</span>
          </div>
        )
      })}
    </>
    
  )
}
