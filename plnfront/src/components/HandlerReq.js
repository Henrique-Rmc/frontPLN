import React, {useState} from 'react';

const ChatApp = () =>{

    const [message, setMessage] = useState('');
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiKey = ''

    const handleMessage = () =>{
        if(!message){
            return;
        }

        setLoading(true);

        fetch(''){

        }
    }

}