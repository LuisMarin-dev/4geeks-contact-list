import React,{useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context);
	console.log(store.contactList);
	return (
		<>
		{store.contactList.map((contact) => {
			return (
				<div key={contact.id} className="container-fluid">
					<div className="contact-containter">
						<img className="contact-image" src="https://www.blackrock.com/blk-corp-assets/cache-1665652128000/images/media-bin/web/global/headshots/headshot-fink-larry-400x400.png" />
						<div className="info-container">
							<p className="name-text">{contact.full_name}</p>
							<p className="info-text">{contact.phone}</p>
							<p className="info-text">{contact.email}</p>
							<p className="info-text">{contact.address}</p>
						</div>
						<div className="buttons-container">
							<span onClick={()=>{actions.removeContacts(contact.id)}}><i className="fa-regular fa-2x fa-trash-can contact-button"></i></span>
							<Link to={`/newcontact/${contact.id}`}>
								<span><i className="fa-regular fa-2x fa-pen-to-square contact-button" /></span>
							</Link>
						</div>
					</div>
				</div>
			)
		})}
		</>
	)
};