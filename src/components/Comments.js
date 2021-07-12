import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Comment from './Comment'

const Comments = ({ match }) => {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
            const res = await response.json()
            setComments(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [match])


    return (
        <div>
            {comments.map((com, key) => <Comment com={com} key={key} />)}
        </div>
    )
}

export default Comments