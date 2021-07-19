import React, { useState, useEffect } from 'react'

const Api = () => {
    

    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        const response = await fetch('PLayersData.json');
        console.log(response);
        setUsers(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);
    // const users = props.users;
    return (
        <>         
            <div className="api">
                <div className="heading">
                    <h2>List of Players</h2>
                </div>
                <div className="user-list">

                {
                    users.map((currElem) => {
                        return (
                            <div>
                                <div className="user">
                                    <div className="left">
                                        <img src={currElem.image_path} alt="" />
                                    </div>
                                    <div className="right">
                                        <div className="three">
                                            <div className="empty">

                                            </div>
                                            <h4>
                                                {currElem.login}
                                            </h4>
                                            <div className="info">
                                                <div className="article same">
                                                    <strong>Github Account</strong>
                                                    <a href={currElem.html_url} target="_blank">Account</a>
                                                    {/* <span>{}</span> */}
                                                </div>
                                                <div className="follower same">
                                                    <strong>followers</strong>
                                                    <span>123</span>
                                                </div>
                                                <div className="rating same">
                                                    <strong>rating</strong>
                                                    <span>9.8</span>
                                                </div>
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

export default Api
