import React,{useState} from 'react'
import TextArea from './TextArea'
import TweetBox from './TweetBox'

const Layout = ({
    tweet, 
    deleteMessage,
    edit
}) => {
    const [editField, setEditField] = useState(false)

    const editMessage = () => {
        setEditField(true)
    }

    const cancelEdit = () => {
        setEditField(false)
    }
    return(
        <div>
            {editField ? 
            <TextArea
                cancelEdit={cancelEdit}
                tweet={tweet}
                edit={edit}
            /> : 
            <TweetBox 
            tweet={tweet} 
            editMessage={editMessage} 
            deleteMessage={deleteMessage} 
            />}
        </div>
    )
}

export default Layout 