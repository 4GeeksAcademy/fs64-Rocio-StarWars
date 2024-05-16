import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import PeopleDispatcher from "../store/peopleDispatcher"
import PlanetsDispatcher from "../store/planetsDispatcher";
import Card from "../component/Card";
import { Context } from '../store/appContext'


export const Home = () => {
const { store, actions } = useContext(Context);
	const [people, setPeople] = useState([])
	const [planets, setPlanets] = useState([])
	const Characters = async () => {
		try { 
			const response = await PeopleDispatcher()
		setPeople (response.results) }
	catch (error){
		console.log(error)
	} }
	const Planets = async () => {
		try { 
			const response = await PlanetsDispatcher()
		setPlanets (response.results) }
	catch (error){
		console.log(error)
	} }

		useEffect(() => {
			Characters()
			Planets()

			
		}, [])

		
		return (
			<div className="home_section">
				{people.map((person, i)=>(<Card key={i} name={person.name}/>))}
				{planets.map((planet, i)=>(<Card key={i} name={planet.name}/>))}
				
			</div>)
			
		
};
