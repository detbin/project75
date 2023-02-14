import React from 'react';
import { useState, useEffect } from 'react';
import { getChucknorris }  from '../../services/axios-service.js';
import {Button, IconButton} from '@mui/material/'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

const AxiosExample = () => {
    const [jokes, setjokes] = useState(null);
    const [likes, setLikes] = useState(0);
    const [unlikes, setUnlikes] = useState(0);
    
    const like =()=>{
        setLikes(likes+1);
        obtainJoke();
    }
    const unlike =()=>{
        setUnlikes(unlikes+1);
        obtainJoke();
    }
    
    useEffect(() => {
        obtainJoke()
        }, []);

    const obtainJoke = () =>{
        getChucknorris()
        .then((response)=>{
            if (response.status=== 200){
                setjokes(response.data);
                console.table(response)
            }
        })
        .catch((error)=>{
            alert(`Something went wrong: ${error}`);
        })
    }
    return (
        <div>
            <h1>Axios Example</h1>
            {jokes!=null ?
                (<div>
                    <h2>
                        {jokes.value}
                    </h2>
                </div>
                )
                :
                (
                  <h2>...</h2>  
                )
            }
            <div>
                    <IconButton aria-label='like' size='large' onClick={()=>like()}>
                        <ThumbUpIcon fontsize='inherit' color='success'/>
                    </IconButton>
                    <IconButton aria-label='like' size='large' onClick={()=>unlike()}>
                        <ThumbDownIcon fontsize='inherit' color='error'/>
                    </IconButton>
                    <p>Generate a new joke</p>
                    <button on onClick={obtainJoke}>New Joke</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Likes</th>
                            <th>Unlikes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{likes}</td>
                            <td>{unlikes}</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>
    );
}

export default AxiosExample;
