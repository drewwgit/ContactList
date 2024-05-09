import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';
import "./index.css"


function App() {
// evaluates the selectedContactID and if it's truthy, renders a div with a short message , if it's falsy then render ContactList component
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
       <SelectedContact />
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
        )}
    </>
  );
}


export default App; 