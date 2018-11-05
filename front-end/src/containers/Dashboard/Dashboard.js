import React from 'react'
import "./Dashboard.css"
import Alltasks from "../Alltasks/Alltasks"

class Dashboard extends React.Component{
	render(){
		return(
			<div className="Dashboard">
				<Alltasks/>
			</div>
		)
	}
}
export default Dashboard
