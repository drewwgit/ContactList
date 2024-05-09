import {useState} from "react";
import { useEffect } from "react";


export default function SelectedContact(props){

    const [contact, setContact] = useState(null);
    
    useEffect(()=>{
        async function fetchSingleContact(){
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}"
            )
                const result = await response.json();

            setContact(result);

    
            } catch (error){
                console.log(error)
            }
        }

        fetchSingleContact(); 

        console.log()

    },[]);

};