import React , { useState } from 'react';
import './HomePage.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

const HomePage = ({ onLogout }) => {
  const [userInput, setUserInput] = useState('');
  const [chats, setChats] = useState([]);
  const [previousChats, setPreviousChats] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      // Add the user's message to the current chat
      setChats([...chats, { type: 'user', message: userInput }]);

      // TODO: Implement logic to send userInput to a backend or handle bot response
      // For now, let's just simulate a bot response after a delay
      setTimeout(() => {
        const botResponse = 'I am a bot response.'; // Replace with actual bot response logic
        setChats([...chats, { type: 'bot', message: botResponse }]);
      }, 500);

      // Add the user's message to the previous chats
      setPreviousChats([...previousChats, { type: 'user', message: userInput }]);

      // Clear the input field after sending the message
      setUserInput('');
    }
  };

  return (
    <>
      <div className="App">
        <div className="sideBar">
          <div className='upperSide'>
            <div className='upperSideTop'>
              <img src={gptLogo} alt='logo' className='logo'/>
              <span className='brand'>ChatGPT</span>
            </div>
            <button className='midBtn'>
              <img src={addBtn} alt='new chat' className='addBtn' />
              New Chat
            </button>
            <div className='previousChats'>
              <p className='previousChatsTitle'>Previous Chats</p>
              {previousChats.map((chat, index) => (
                <p key={index} className='previousChat'>{chat.message}</p>
              ))}
            </div>
            <div className='upperSideBottom'>
              <p className='query'>
                <img src={msgIcon} alt='Query' />
                What is programming ?
              </p>
              <p className='query'>
                <img src={msgIcon} alt='Query' />
                What is use an API
              </p>
            </div>
          </div>
          <div className='lowerSide'>
            <div className='listItems'>
              <img src={home} alt='Home' className='listItemsImg' />
              Home
            </div>
            <div className='listItems'>
              <img src={saved} alt='Saved' className='listItemsImg' />
              Saved
            </div>
            <div className='listItems'>
              <img src={rocket} alt='Upgrade' className='listItemsImg' />
              Upgrade to pro
            </div>
            <div className='listItems'>
              <button type="button" onClick={onLogout}>Logout</button>
            </div>
          </div>
        </div>
        <div className="main">
          <div className='chats'>
            {chats.map((chat, index) => (
              <div key={index} className={`chat ${chat.type}`}>
                {chat.type === 'user' && (
                  <img src={userIcon} alt="" className="chatImg" />
                )}
                {chat.type === 'bot' && (
                  <img src={gptImgLogo} alt="" className="chatImg" />
                )}
                <p className="txt">{chat.message}</p>
              </div>
            ))}
          </div>

          <div className='chatFooter'>
            <div className='inp'>
              <input
                type='text'
                placeholder='Send a message'
                value={userInput}
                onChange={handleInputChange}
              />
              <button className='send' onClick={handleSendMessage}>
                <img src={sendBtn} alt='Send'/>
              </button>
            </div>
            <p>ChatGPT can make mistakes. Consider checking important information.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
