import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {UserOutlined} from '@ant-design/icons';
const UserList = () => {

    const [listuser, setListuser] = useState([]);

    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );

            setListuser(result.data);
            console.log(result.data);

        };

        fetchData();
    }, []);
    const title = {
        color: "grey",
        fontSize: "18px",
    }
    const parenttitle = {
        color: "#802b00",
        fontSize: "18px",
    }
    const stylttitle2 = {
        fontSize: "16px",
        color: "#331100"
    }
    return <div >
        <label style={{ fontWeight: "700", color: "#993300", fontSize: "24px", margin: "6px" }}>List of users</label>
        {listuser.map((item, key) => {
            return <div key={key} style={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                //transition: "0.3s",
                width: "80%", margin: "10px", padding: "10px", textAlign: "center"
            }}>
                <div style={{  textAlign: "center",alignItems:"center", alignContent:"center" , paddingBottom:"5px"}}>
                <UserOutlined style={{color:"#802b00"}}/> <label style={parenttitle}>{item.name} {item.username}</label>
                </div>
                <div style={{ display: "flex", justifyContent: "column" }}>
                    <div style={{ display: "flex", justifyContent: "row", width: "50%" }}>
                        <label style={title}>Email : </label>
                        <label style={stylttitle2}>{item.email}</label>
                    </div>
                    <div style={{ display: "flex", justifyContent: "row", textAlign: "start", width: "50%" }}>
                        <label style={title}>Phone : </label>
                        <label style={stylttitle2}>{item.phone}</label>
                    </div>
                   
                </div>

                <div style={{ display: "flex", justifyContent: "column" }}>
                <div style={{ display: "flex", justifyContent: "row", textAlign: "start", width: "50%"  }}>
                    <label style={title}>Company : </label>
                    <ul>
                        <li style={stylttitle2}>Name : {item.company.name}</li>
                        <li style={stylttitle2}>catchPhrase : {item.company.catchPhrase}</li>
                        <li style={stylttitle2}>bs : {item.company.bs}</li>

                    </ul>
                </div>
                <div style={{ display: "flex", justifyContent: "row", textAlign: "start", width: "50%" }}>
                        <label style={title}>Address : </label>
                        <ul>
                            <li style={stylttitle2}>Street : {item.address.street}</li>
                            <li style={stylttitle2}>Suite : {item.address.suite}</li>
                            <li style={stylttitle2}>zipcode : {item.address.zipcode}</li>

                        </ul>
                    </div>
                </div>




                <div style={{ display: "flex", justifyContent: "row", textAlign: "start" }}>
                    <label style={title}>Website : </label>
                    <label style={stylttitle2}>{item.website}</label>
                </div>

                



            </div>
        })}

    </div>;
};

export default UserList;
