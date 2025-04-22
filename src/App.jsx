import './App.css'

function App() {
  return (
    <>
      <div className="stars"></div>
      <div id="intro">
        <h1>rohinish</h1>
        <p>Final year student. Graduating Soon :)</p>
        <p>Open to roles. Full Stack or AI/ML</p>
      </div>  
      <div className="links">
        <a href="https://www.linkedin.com/in/rohinish-singh-a0a52522b/" target="_blank" rel="noopener noreferrer">[LinkedIn]</a>
        <a href="https://github.com/rohinish404" target="_blank" rel="noopener noreferrer">[Github]</a>
        <a href="https://drive.google.com/file/d/1rJfpSCSPn60jcG2d7MOe6TrbDcJSo_K1/view?usp=sharing" target="_blank" rel="noopener noreferrer">[CV]</a>
      </div>
      <h2>Currently working On...</h2>
      <ul>
        <li>
          <div>
            <b>GhViz - Visualize Your GitHub Repository<a href="https://ghviz.pages.dev/" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>GhViz helps you explore GitHub repositories in an interactive way. Get insights into code structure, dependencies, and project organization with this intuitive visualization tool.</p>
            <img src="assets/githubviz.png" alt="GithubViz" className="project-image" />
          </div>
        </li>
      </ul>
      <h2>[Work]</h2>
      <ul>
        <li>
          <div>
            <b>InspeqAI<a href="https://www.linkedin.com/company/inspeq-ai" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>SDE Intern | Remote | December 2023 - June 2024</p>
            <p> - Collaborated with senior researcher and developers to build LLM evaluation metrics such as coherence, factual consistency, answer relevancy, etc.</p>
            <p> - Integrated several researched metrics into FastAPI backend services using libraries such as Hugging Face, PyTorch, etc.</p>
            <p> - Other minor work revolved around researching rag pipelines, rag eval metrics, and building several small backend services.</p>
          </div>
        </li>
        <li>
          <div>
            <b>GeeksForGeeks<a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>Technical Content Writer Intern | Remote | September 2023 - February 2024</p>
            <p> - Researched several machine and deep learning topics as well as got few topics published along with implementations.</p>
            <p> - Total combined views over 20k worldwide.</p>
            <p><a href="https://www.geeksforgeeks.org/user/singhrohinish09/contributions/" target="_blank" rel="noopener noreferrer">[All Articles]</a></p>
          </div>
        </li>
      </ul>
      <h2>[Projects]</h2>
      <ul>
        <li>
          <div>
            <b>LetzWatch - Movie Streaming Website<a href="https://github.com/rohinish404/Letzwatch" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>A concept website that lets people watch movies together on a video call.</p>
            <img src="assets/letzwatch.png" alt="Letzwatch" className="project-image" />
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">WebRTC</span>
              <span className="tech-tag">Socket.io</span>
            </div>  
          </div>
        </li>
        <li>
          <div>
            <b>Website Uptime Monitor with Discord Notifications<a href="https://github.com/rohinish404/monitor_uptime" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>A simple service that monitors website availability and sends notifications through Discord webhooks when a site goes down or recovers.</p>
            <img src="assets/uptime.png" alt="Uptime" className="project-image" />
            <div className="tech-tags">
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">Asyncio</span>
              <span className="tech-tag">Discord Webhooks</span>
              <span className="tech-tag">SQLAlchemy</span>
              <span className="tech-tag">Pytest</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <b>Image Captioning Model <a href="https://github.com/rohinish404/image_captioning" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>Implementation of Show Attend and Tell Paper in Pytorch.</p>
            <img src="assets/image.png" alt="image_cap" className="project-image" />
            <div className="tech-tags">
              <span className="tech-tag">Pytorch</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <b>Recurate <a href="https://github.com/rohinish404/Recurate" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>Get all your twitter bookmarks in one place and categorise and/or perform search on them using sematic similarity.</p>
            <img src="assets/recurate.png" alt="recurate" className="project-image" />
            <div className="tech-tags">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">LanceDB</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <b>Cursor Controller <a href="https://github.com/rohinish404/cursor_controller" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>Controlling cursor using hands to perfrom actions such scroll and click. Uses mediapipe, cv2 and pyautogui for hand tracking.</p>
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">OpenCV</span>
              <span className="tech-tag">Mediapipe</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <b>Thumb Detection <a href="https://github.com/rohinish404/thumbs_detection" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>Finetuned Yolov5 on custom hands dataset (yes my own hands) to detect either the thumb is pointing upwards or downwards. Include livecam detection also.</p>
            <div className="tech-tags">
              <span className="tech-tag">Pytorch</span>
            </div>
          </div>
        </li>
      </ul>
      <h3>[Misc Projects]</h3>
      <ul>
        <li>
          <div>
            <b>Rscope <a href="https://github.com/rohinish404/rscope" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>A tool to fast-preview videos, pdfs, images, and txt/code files in iterm2 terminal.</p>
            <img src="assets/rscope.png" alt="rscope" className="project-image" />
            <div className="tech-tags">
              <span className="tech-tag">Shell</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <b>Rdump <a href="https://github.com/rohinish404/rdump" target="_blank" rel="noopener noreferrer">[Link]</a></b>
            <p>A chrome extension to dump opened tabs into a text file or load txt file of links to open all.</p>
            <img src="assets/rdump.png" alt="rdump" className="project-image" />
            <div className="tech-tags">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>
        </li>
      </ul>
      <h3>[Hackathons/Team Projects]</h3>
      <ul>
        <li>
          <div>
            <div>Explanable AI <a href="https://explanable.com" target="_blank" rel="noopener noreferrer">[Link]</a></div>
            <img src="assets/explanable.png" alt="explanable" className="project-image" />
            <div className="tech-tags">
              <span className="tech-tag">NextJS</span>
              <span className="tech-tag">Groq API</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>Talking Recipe Book <a href="https://github.com/rohinish404/Talking_recipe" target="_blank" rel="noopener noreferrer">[Link]</a></div>
            <img src="assets/talking_recipe.png" alt="talking_recipe" className="project-image" />
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Streamlit</span>
              <span className="tech-tag">Pytorch</span>
              <span className="tech-tag">ElevenLabs</span>
            </div>
          </div>
        </li>
      </ul>
      <h3>[Some open source contributions]</h3>
      <ul>
        <li>
          <div>InvokeAI <a href="https://github.com/invoke-ai/InvokeAI/pulls?q=is%3Apr+author%3Arohinish404" target="_blank" rel="noopener noreferrer">[Link]</a></div>
        </li>
        <li>
          <div>Ivy <a href="https://github.com/ivy-llc/ivy/pulls?q=is%3Apr+author%3Arohinish404" target="_blank" rel="noopener noreferrer">[Link]</a></div>
        </li>
      </ul>
    </>
  )
}

export default App