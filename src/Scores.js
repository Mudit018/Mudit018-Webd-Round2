import React, { useState, useEffect } from 'react'

const Scores = () => {
  

    const [scores,setScores] = useState([]);

    const getScores = async () => {
        const response = await fetch('https://soccer.sportmonks.com/api/v2.0/livescores?api_token=oAz3JUnF0CbsQ88lQWSITHfDCN1aJhQd6E3gf3UevFbq1qIoo0IcdXsTuDul');
        console.log(response);
        setScores(await response.json());
    }
    useEffect(() => {
        getScores();
    }, []);
    console.log(scores);


    return (
        <div>
            <div className="score">
                <div class="container">
                    <div className="today-match">
                        <div className="today">
                            <strong>LIVE MATCHES</strong>
                        </div>
                    </div>
                    <div className="one-container">
                        <strong>No Live Matches</strong>
                    </div>
                </div>
                <div class="container">
                    <div className="today-match">
                        <div className="today">
                            <strong>PAST MATCHES</strong>
                        </div>
                    </div>
                    <div className="one-container">
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                        Midtjylland
                                    </div>
                                    <div class="col2">
                                        2
                                    </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                        OB
                                    </div>
                                    <div class="col2">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>2021-07-16</strong>
                                <div class="row">
                                    <div class="col">
                                        Match Completed
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    Vejle BK
                                    </div>
                                    <div class="col2">
                                        0
                                    </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    Randers
                                    </div>
                                    <div class="col2">
                                        2
                                    </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>2021-07-16</strong>
                                <div class="row">
                                    <div class="col">
                                        Match Completed
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    Nordsjælland
                                    </div>
                                    <div class="col2">
                                        1
                                    </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    Viborg
                                    </div>
                                    <div class="col2">
                                        2
                                    </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>2021-07-16</strong>
                                <div class="row">
                                    <div class="col">
                                        Match Completed
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    Copenhagen
                                    </div>
                                    <div class="col2">
                                        2
                                    </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    AaB
                                    </div>
                                    <div class="col2">
                                        2
                                    </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>2021-07-16</strong>
                                <div class="row">
                                    <div class="col">
                                        Match Completed
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    AGF
                                    </div>
                                    <div class="col2">
                                        1
                                    </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    Brøndby
                                    </div>
                                    <div class="col2">
                                        0
                                    </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>2021-07-16</strong>
                                <div class="row">
                                    <div class="col">
                                        Match Completed
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    SønderjyskE
                                    </div>
                                    <div class="col2">
                                        0
                                    </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    Vejle BK
                                    </div>
                                    <div class="col2">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>2021-07-16</strong>
                                <div class="row">
                                    <div class="col">
                                        Match Completed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div className="today-match">
                        <div className="today">
                            <strong>UPCOMING MATCHES</strong>
                        </div>
                    </div>
                    <div className="one-container upcoming">
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    AaB
                                    </div>
                                    <div class="col2">
                                    
                                    </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    Midtjylland
                                    </div>
                                    <div class="col2">
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>Sat, 24 July</strong>
                                <strong>5:30pm</strong>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    Nordsjælland
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    AGF
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>Sun 25 July</strong>
                                <strong>5:30pm</strong>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    Randers
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    OB
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>2021-07-16</strong>
                                <strong>5:30pm</strong>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    Copenhagen
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    Silkeborg
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>Sun, 25 July</strong>
                                <strong>7:30pm</strong>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    Viborg
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    Brøndby
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>Sun, 25 July</strong>
                                <strong>9:30pm</strong>
                            </div>
                        </div>
                        <div className="one">
                            <div className="mat">
                                <div class="row1">
                                    <div class="col1">
                                    SønderjyskE
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                                <div class="row2">
                                    <div class="col1">
                                    Vejle BK
                                    </div>
                                    <div class="col2">
                                        
                                        </div>
                                </div>
                            </div>
                            <div className="one-three">
                                <strong>Superliga</strong>
                                <strong>Mon, 26 July</strong>
                                <strong>10:30pm</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scores
