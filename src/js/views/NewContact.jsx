import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

const initialValues = {
        full_name: "",
        email: "",
        agenda_slug: "LuisMarin-dev",
        address:"",
        phone:""
}

 const NewContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState(initialValues);
	const handleContact = (event) => {
		setContact({...contact,[event.target.name]:event.target.value})
	};
	const addNewContact = (event) =>{
		event.preventDefault();
		actions.addContacts(contact);
	}

	return (
		<div className="container w-100">
			<form clasName="d-flex justify-content-center" onSubmit={addNewContact}>
			<div className="mb-3 col-6">
				<label for="InputFullName" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="InputFullName" name="full_name" value={contact.full_name} onChange={(event) => handleContact(event)} />
			</div>
			<div className="mb-3 col-6">
				<label for="InputEmail" className="form-label">Email address</label>
				<input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" name="email" value={contact.email} onChange={(event) => handleContact(event)} />
			</div>
			<div className="mb-3 col-6">
				<label for="PhoneNumber" className="form-label">Phone Number</label>
				<input type="text" className="form-control" id="PhoneNumber" name="phone" value={contact.phone} onChange={(event) => handleContact(event)} />
			</div>
			<div className="mb-3 col-6">
				<label for="InputAddress" className="form-label">Address</label>
				<input type="text" className="form-control" id="InputAddress" name="address" value={contact.address} onChange={(event) => handleContact(event)} />
			</div>
			<button type="submit" className="btn btn-primary col-6">Save</button>
			</form>
		</div>
	);
};

export default NewContact;