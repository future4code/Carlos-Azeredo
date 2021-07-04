import React from 'react';
import styled from 'styled-components'

const ProfileCardContainer = styled.div `
margin: 16px;
border: 1px solid black;
`
const ProfilePicture = styled.img`
width: 100%;
display:flex;
max-width: 370px;
` 

const ProfileInfo = styled.div `
padding: 0 16px;
text-align: center;
font-size: 20px;
background: -webkit-linear-gradient(#060606,#2ef5d0);
-webkit-background-clip: text;
-webkit-text-fill-color: #00000029;
`


function ProfileCard(props) {
    const profile = props.profile
    return (
        <ProfileCardContainer>
            <ProfilePicture src={profile.photo}/>
            <ProfileInfo>
            <p>{profile.name}, {profile.age} </p>
            <p>{profile.bio}</p>
            </ProfileInfo>
        </ProfileCardContainer>
    )
}


export default ProfileCard;
