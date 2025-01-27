import React, {useState, useEffect } from 'react';
import axios from 'axios';

const TwitterStats = () => {
    const [twitterData, setTwitterData] = useState(null);

    useEffect(() => {
        const fetchTwitterData = async () => {
            try {
                const response = await axios.get('https://api.twitter.com/2/users/by/username/AwaisHameed6824')
            }
        }
    })
}