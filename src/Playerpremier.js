import React, { useState, useEffect } from 'react'

const Playerpremier = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        const response = await fetch('PLayersName_Scottish_League.json');
        console.log(response);
        setUsers(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);
    console.log(users);
    // const users = props.users;
    const [searchTerm,setSeachTerm] = useState("");
    
    return (
        <>        

            <div className="api">
                <div className="heading">
                    <h1>List of Players of Premiership</h1>
                </div>

                <div className="search">
                    <input type="text" placeholder="Search By Name" onChange={event => {setSeachTerm(event.target.value)}} />
                </div>

                <div className="user-list">

                {
                    users.filter((val) => {
                        if(searchTerm=="") {
                            return val;
                        } else if(val.display_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return val;
                        }
                    } ).map((currElem,key) => {
                        return (
                            <div>
                                <div className="user" key={key}>
                                    <div className="left">
                                        <img src={currElem.image_path} alt="" />
                                    </div>
                                    <div className="right">
                                        <div className="three">
                                            <div className="empty">

                                            </div>
                                            <h4>
                                                {currElem.display_name}
                                            </h4>
                                            <div className="info">
                                                <div className="article same">
                                                    <strong>Nationality</strong>
                                                    {/* <a href={currElem.html_url} target="_blank">Account</a> */}
                                                    <span>{currElem.nationality}</span>
                                                </div>
                                                <div className="follower same">
                                                    <strong>Height</strong>
                                                    <span>{currElem.height}</span>
                                                </div>
                                                <div className="rating same">
                                                    <strong>Weight</strong>
                                                    <span>{currElem.weight}</span>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <div className="article same">
                                                    <strong>Birthdate</strong>
                                                    {/* <a href={currElem.html_url} target="_blank">Account</a> */}
                                                    <span>{currElem.birthdate}</span>
                                                </div>
                                                <div className="follower same">
                                                    <strong>Birthcountry</strong>
                                                    <span>{currElem.birthcountry}</span>
                                                </div>
                                                {/* <div className="rating same">
                                                    <strong>Birthplace</strong>
                                                    <span>{currElem.birthplace}</span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                </div>
            </div>

        </>
    )
}

export default Playerpremier
