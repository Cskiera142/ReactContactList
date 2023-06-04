import React, { useEffect, useState } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const res = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
        const data = await res.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAPI();
  }, []);

  return;
};

export default SelectedContact;
