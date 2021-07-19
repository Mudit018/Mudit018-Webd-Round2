import React, { useState, useEffect } from 'react'

const Standsuper = () => {
    const [stand, setStand] = useState([]);

    const getStand = async () => {

        const response = await fetch('Stand-danish.json');
        console.log(response);
        setStand(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        getStand();
    }, []);
    console.log(stand);
    // const i = 1;
    return (
        <div>
            <div className="standings">
                <div className="heading-super">
                    <div className="heading">
                        <strong>Standings of Superliga</strong>
                    </div>
                </div>
                <div className="stand">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Clubs</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">MP</th>
                            <th scope="col">W</th>
                            <th scope="col">D</th>
                            <th scope="col">L</th>
                            <th scope="col">GF</th>
                            <th scope="col">GA</th>
                            <th scope="col">GD</th>
                            <th scope="col">Pts</th>
                            <th scope="col">Last 5 Matches</th>
                            </tr>
                        </thead>
                    {

                        stand.map((currElem) => {
                            return (     
                                <tbody>
                                    <tr>
                                        <th scope="row">{currElem.Club}</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{currElem.played}</td>
                                        <td>{currElem.won}</td>
                                        <td>{currElem.draw}</td>
                                        <td>{currElem.lost}</td>
                                        <td>{currElem.goalfor}</td>
                                        <td>{currElem.goalagainst}</td>
                                        <td>{currElem.goaldiff}</td>
                                        <td>{currElem.pts}</td>
                                        <td>{currElem.last5}</td>
                                    </tr>
                                </tbody>
                            )
                        } )    
                    }

                    </table>
                    <div className="info">
                        <strong>Last 5 Matches</strong>
                        <strong>🟢 Win</strong>
                        <strong>🔴 Lost</strong>
                        <strong>⚫ Not Played</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Standsuper
