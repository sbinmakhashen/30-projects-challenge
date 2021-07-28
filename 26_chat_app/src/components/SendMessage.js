import React, {useState} from 'react'
import {Input, Button} from '@material-ui/core'
import {auth, db} from '../Firebase'
import firebase from 'firebase'
const SendMessage = () => {
    const [msg, setMsg] = useState('')
    async function sendMsgs(e) {
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
        <form onSubmit={sendMsgs}>
            <Input value={msg} onChange={(e) => setMsg(e.target.value)} type='text' placeholder='messages...' />
            <Button variant='contained' type='submit'>Send</Button>        
        </form>
        </div>
    )
}

export default SendMessage
