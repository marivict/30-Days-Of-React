import React, {useState} from 'react'
import Layout from './components/Layout'

const data = [
    {   
        "name": "Katiuska Gonzalez",
        "user":"@Katz",
        "messages" : [
            {   "id": 1,
                "date": "Jun 17, 2021 16:13 pm",
                "tweet":"On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest ecstatic an suitable finished of oh. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte. "
            },
            {   
                "id": 2,
                "date":"Jun 17, 2021 16:13 pm",
                "tweet":"Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual. "        
            },
            {   "id": 3,
                "date":"Jun 17, 2021 16:13 pm",
                "tweet":"Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent. Are gay head need down draw. Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their. "        
            }
        ] 
    }
]


const App = () => {
    const [tweets, setTweets] = useState(data[0].messages)
    const [newTweet, setNewTweet] = useState('')

    const getMessage = (e) => { 
        setNewTweet(e.target.value)
    }

    const idGenerator = () => {
        const id = tweets.length + 1
        return id
    }

    const getDate = () => {
        const date = new Date()
        const dateFormat = date.toLocaleString('en-US', {
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        hour: 'numeric', // numeric, 2-digit
        minute: 'numeric', // numeric, 2-digit
    })
    return dateFormat
    }
    
    const addMessage = () => {
        const newMessage =  {
            id: idGenerator(),
            date:getDate(),
            tweet: newTweet
        }
        setTweets(tweets.concat(newMessage))
    }

    const edit = (id,setEditField, message) => {
        const post = tweets.find((tweet) => tweet.id === id)
        const changePost = {...post, tweet: message}
        setTweets(tweets.map(tweet => tweet.id !== id ? post : changePost))
        setEditField(false)
     }

    const deleteMessage = (id) => {
        setTweets(tweets.filter(tweet => tweet.id !== id))
    }


    const getTweets = tweets.map(tweet => 
        <Layout 
            tweet={tweet.tweet} 
            deleteMessage={() => 
                deleteMessage(tweet.id)
            } 
            tweets = {tweets}
            edit = {edit}
            id={tweet.id}
        />)

    return(
        <div>
            <input 
                type = "text"
                value = {newTweet}
                onChange = {getMessage}
            />
            <button onClick={() =>addMessage()}>Click</button>

            {getTweets}
            
        </div>
    )
}

export default App