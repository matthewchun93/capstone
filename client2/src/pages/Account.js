import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setProfilePic, setProfileInfo} from '../actions/index';

const UserProfile = () => {

    const [pictureUrl, setPictureUrl] = useState("");
    const [about, setAbout] = useState("");
    const email = useSelector(state => state.auth.email);
    const pic = useSelector(state => state.auth.profilePic);
    const aboutStuff = useSelector(state => state.auth.about);
    const viewPosts = useSelector(state => state.auth.allPosts);
    const username = useSelector(state => state.auth.username);
    const postArray = Object.values(viewPosts);
    const dispatch = useDispatch();

    // dispatch(setProfilePic({email, pic}));
    // dispatch(setProfileInfo({email, aboutStuff}));


    // useEffect(() => {
    //     const fetchPicAbout = async() => {
    //         const url = `http://localhost:3001/userprofile`
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         console.log(data);
    //         // dispatch(setProfilePic(data));
    //     }
    //     fetchPicAbout();
    // }, [])

    const handleSubmit1 = (e) => {
        e.preventDefault();

        dispatch(setProfilePic({email, pictureUrl}));
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();

        dispatch(setProfileInfo({email, about}));
    }

    // useEffect(() => {
    //     const updatePosts = async() => {
    //         const url = `http://localhost:3001/forum`
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         dispatch(groupPosts(data));
    //     }
    //     updatePosts();
    // }, [viewPosts])

    return (
        <>
        <div className="userprofile">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit1} className="form">
                        <input type="profilePic" onChange={(e)=>setPictureUrl(e.target.value)} value={pictureUrl} placeholder="Enter your picture here..."/>
                        <button type="submit">Submit</button>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <img src={pic} alt="" width="300px" height="300px" /> 
                    {/* <img id="currentPhoto" src={pic} onerror="this.onerror=null; this.src='nopic.jpg'" alt="" width="100" height="120"></img> */}
                </div>
                <div className="col">
                    <div className="col">
                        <form onSubmit={handleSubmit2} className="form">
                            <input type="aboutInfo" onChange={(e)=>setAbout(e.target.value)} value={about} placeholder="Tell us about you..."/>
                            <button type="submit">Submit</button>
                            <br/>
                            <br/>
                            <br/>
                            <div>
                                {aboutStuff}
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <br/> 

            <div>
            {/* {postArray.findAll(( { where: {email : email}}) => {
                return (
                    <ul>      
                        <li>
                            {email}: {viewPosts}
                        </li>          
                    </ul>
                )
            })} */}
            </div>
            <div>
                {username}
            </div>
        </div>
        </>
    )
}



export default UserProfile
