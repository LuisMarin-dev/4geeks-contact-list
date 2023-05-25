import React,{useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	console.log(store.contactList);
	return (
		<>
		{store.contactList.map((contact) => {
			return (
				<div style={{border: "solid red;"}}>
					<div>
						<p>{contact.full_name}</p>
						<p>{contact.phone}</p>
						<p>{contact.email}</p>
						<p>{contact.address}</p>
						<span onClick={()=>{
							actions.removeContacts(contact.id)
						}}>x</span>
					</div>
				</div>
			)
		})};
		</>
	)
};