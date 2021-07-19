import React from 'react'

const LeagueList = ({leagues}) => {

    // const users = props.users;
    console.log(leagues);
    return (
        <>

            <div className="all">            
                <div className="api">
                    <div className="heading">
                        <h2>List of Leagues</h2>
                    </div>
                    <div className="user-list">
                    {
                        
                        leagues.data?.map((currElem) => {
                            return (
                                <>
                                
                                    <div className="card card-league" style={{width: "18rem",}}>
                                        <img src={currElem.logo_path} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{currElem.name}</h5>
                                            <p className="card-text"></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Type: {currElem.type}</li>
                                            <li className="list-group-item">Country: {currElem.country.data.name} <img src={currElem.country.data.image_path} alt="" style={{height:"1.5rem",width:"3rem"}}/></li>
                                            {/* <li className="list-group-item">A third item</li> */}
                                        </ul>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Continent: {currElem.country.data.extra.continent}</li>
                                        </ul>
                                        <div class="card-body">
                                            
                                            {/* <a href="#" className="card-link">Card link</a> */}
                                            {/* <a href="#" className="card-link">Another link</a> */}
                                        </div>
                                    </div>
                                
                                </>

                            )
                        })
                    }

       
        
                    </div>
                </div>
            </div>
           
        </>  
    )
}

export default LeagueList
