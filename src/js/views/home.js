import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import PeopleDispatcher from "../store/peopleDispatcher"
import Card from "../component/Card";
import { Context } from '../store/appContext'


export const Home = () => {
const { store, actions } = useContext(Context);
	const [people, setPeople] = useState([])
	const Characters = async () => {
		try { 
			const response = await PeopleDispatcher()
		setPeople (response.results) }
	catch (error){
		console.log(error)
	} }

		useEffect(() => {
			Characters()
			
		}, [])

		useEffect(() => {console.log(people)},[people])

		return (
			<div className="text-center mt-5">
				{/* {people.map((person)=>{<Card name={person.name}/>})} */}
				{people.map((person,i)=> (<p onClick={()=> {
					console.log(person)
					actions.getDataPeople(person.uid)
				}} key= {i}>{person.name}</p>
				

				))}

			</div>)
};
