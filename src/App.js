 import './App.css';
import gptLogo from  '../src/assest/chatgpt.svg';
import addBtn from  '../src/assest/add-30.png';
import msgIcon from  '../src/assest/message.svg'; 
import home from  '../src/assest/home.svg'; 
import saved from  '../src/assest/bookmark.svg'; 
import rocket from  '../src/assest/rocket.svg'; 








function App() {
  return (
    <div className="App">

        <div className="sideBar">
           <div className="upperSide">
              <div className="upperSideTop"><img src={gptLogo} alt="Logo" className='logo'/><span className="brand">ChatGPT</span></div>
              <button className="midBtn"> <img src={addBtn} alt="New Chat" className="addBtn" /> New Chat</button>
              <div className="upperSideBottom">
                <button className="query"><img src={msgIcon} alt="Query" />What is Programing ?</button>
                <button className="query"><img src={msgIcon} alt="Query" />How to Use API ?</button>

              </div>
        </div>
        <div className="lowerSide">

            <div className="listitems"><img src={home}lt="Home" className="listitemImg" />Home</div>
            <div className="listitems"><img src={saved}lt="Saved" className="listitemImg" />Saved</div>
            <div className="listitems"><img src={rocket}lt="Upgrade" className="listitemImg" />Upgrade to Pro</div>


        </div>
          
        </div>
        <div className="main"></div>



    </div>
  );
}

export default App;
