import React, { useState, useEffect } from 'react'
import LeagueList from './LeagueList';

const League = () => {

    // const [league, setLeague] = useState([]);

    // const getLeague = async () => {
    //     const response = await fetch('https://apiv2.apifootball.com/?action=get_leagues&country_id=41&APIkey=571af6ad5a0ada3f5e1a96e7be12548e8534a372215d10d38a1eb98747b66032');
    //     console.log(response);
    //     setLeague(await response.json());
    //     // console.log(data);
    // }

    // useEffect(() => {
    //     getLeague();
    // }, []);

    const [league, setLeagues] = useState(null);

    useEffect(() => {
        fetch('https://soccer.sportmonks.com/api/v2.0/leagues?api_token=wD54wcF01CLeO05QY2skVTPqq5EGm3hwhFKlJUkpXIvOOPkqcmN9kaSSle0m&include=country')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setLeagues(data);
            });
    }, []);
    console.log(league);


    // const Token = 'dcae19044c6e463e816dacc4581329cc',
    //     URL = 'https://api.football-data.org/v2/competitions/';
    // useEffect(() => {
    //     fetch(URL, { headers: { 'X-Auth-Token': Token } })
    //         .then((response) => response.json())
    //         .then(data => {
    //             // console.log(data);
    //             // this.setState({ standings: [...rows] })
    //             // this.setState({ selectedLeague: name})
    //             // console.log(rows);
    //             // leagues = data;
    //             setLeagues(data);
    //         });
    //     }, []);
    return (
        <>
            {league ? <LeagueList leagues={league}></LeagueList> : <p>Loading</p>}

            
        </>
    )
}

export default League
