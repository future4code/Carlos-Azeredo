import React from 'react'
import { CardDiv } from './styled'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'


const CommentsCard = (props) => {

    return <CardDiv onClick={props.onClick}>
        <h2> {props.username} </h2>
        <div>
            <p> {props.body} </p>
        </div>
        <div>
            <BiUpArrow onClick={props.onClickUp} />
            <h5> {props.voteSum ? props.voteSum : '0'} </h5>
            <BiDownArrow onClick={props.onClickDown} />

        </div>
    </CardDiv>
}

export default CommentsCard