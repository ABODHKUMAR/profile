import "./project.css"
import simonimage from "../../projectimage/simon-image.jpg";
import wordle from "../../projectimage/wordle.png"
import Ecommerce from "../../projectimage/Ecommerce website.jpeg"
import chat from "../../projectimage/chat.png"
import blog from "../../projectimage/blog.jpg"
const project=()=>{
    return(
      <div  className="projects">
          <h1>Projects</h1>
          <div className="project1">
                <div>
                <img src={simonimage} className="simon"></img>
                </div>
                
                <div className="simon-game">
                 <h3>Simon Game</h3>
                 <p>Simon is an electronic game of short-term memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates, with software programming by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the sequence.</p>
                <a href="https://abodhkumar.github.io/Simon_game_/">Play Game</a>
                </div>
            </div>
            <div className="project1">
                <div>
                <img src={wordle} className="simon"></img>
                </div>
                
                <div className="simon-game">
                 <h3>WORDLE GAME</h3>
                 <p>Wordle is a daily word game that involves figuring out a secret five-letter word. You play by guessing different five-letter words to see how close they are to the secret word. When you submit a guess, the game will tell you how close your guess is by color-coding each letter in your guess.</p>
                <a href="https://comforting-palmier-3389cb.netlify.app/">Play Game</a>
                </div>
            </div>
            <div className="project1">
                <div>
                <img src={Ecommerce} className="simon"></img>
                </div>
                
                <div className="simon-game">
                 <h3>Ecommerce-Website</h3>
                 <p>"Welcome to Your E-commerce Website SHOP NOW, your ultimate destination for all your shopping needs. Discover a world of convenience and endless possibilities as you browse through our carefully curated collection of products.</p>
                <a href="https://www.youtube.com/watch?v=Uhn9ur6awps">Buy Here</a>
                </div>
            </div>
            <div className="project1">
                <div>
                <img src={chat} className="simon"></img>
                </div>
                
                <div className="simon-game">
                 <h3>CHAT HERE</h3>
                 <p>The ultimate platform for seamless communication and meaningful connections. Stay connected with your loved ones, collaborate with colleagues, and make new friends, all in one intuitive and feature-rich chat application.</p>
                <a href="https://www.youtube.com/watch?v=Tf85746DXQw">Friend waiting Chat Now</a>
                </div>
            </div>
            <div className="project1">
                <div>
                <img src={blog} className="simon"></img>
                </div>
                
                <div className="simon-game">
                 <h3>BLOG-Here</h3>
                 <p>go-to platform for discovering, creating, and sharing captivating blog content. Immerse yourself in a world of diverse topics, thought-provoking articles, and engaging discussions with our user-friendly and feature-rich blog app.</p>
                <a href="https://youtu.be/SBooOU2codc">Blog for Better</a>
                </div>
            </div>
          

      </div>
    )
}
export default project;