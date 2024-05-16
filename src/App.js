import './App.css';

function App() {
  return (
    <div>
      {/*  header section*/}
      <header style={{ 
        display: "flex",
        gap: "20px"
      }}> 
        <img  style={{
          borderRadius: "50%"
        }} src="https://yt3.googleusercontent.com/ytc/AIdro_k8WWdesIQosU5WUlHsVDJ4a6lo8tRCGvyOfWKkC0qbG8o=s160-c-k-c0x00ffffff-no-rj"  alt="Hritesh"/>
        <div>
          <h2 >Hitesh Choudhary</h2>
          <ul style={{ display:"flex", gap: "30px", alignItems:"center" }} type="none">
          <li>@HiteshChoudharydotcom</li>
          <li>902K subscribers</li>
          <li>1.5K videos</li>
          </ul>
          <p>Website: https://hiteshchoudhary.com</p>
          <div>
            <a href="hitesh.ai/discord">hitesh.ai/discord and 3 more links</a>
          </div>
          <div>
            <button style={{ padding:"8px 20px", border:"none", borderRadius: "15px", 
            marginRight:"10px", backgroundColor:"black", color:"white", fontWeight:"600"}}>Subscribe</button>
            <button style={{ padding:"8px 20px", border:"none", borderRadius: "15px",
              marginRight:"10px", backgroundColor:"white", color:"black",fontWeight:"600"
            }}>Join</button>
          </div>
        </div>
      </header>
      {/* vedio channel windows  */}
      
      <section style={{ marginTop:"50px",}}> 
        {/* vedio channel windows  */}
        <hr></hr>
        <h5>For you</h5>
        <div style={{display:"flex", gap:"20px"}}>
        <article > 
          <img style={{borderRadius:"15px"}} src="https://i.ytimg.com/an_webp/Q2n0p5j6WIw/mqdefault_6s.webp?du=3000&sqp=CNzFlbIG&rs=AOn4CLCFkri8zdQfmRCnBlr_McSpBwFMbw" alt="AI-Handling" />
          <h5>You missed these AI updates</h5>
          <p>5.8K views 12 hours ago</p>
        </article>

        <article >
          <img style={{borderRadius:"15px"}} src="https://i.ytimg.com/an_webp/tz82ola3oy0/mqdefault_6s.webp?du=3000&sqp=CP_llbIG&rs=AOn4CLCL8TsCPWG-Mr1fWetmh9pS_4SbEw" alt="AI-Handling"/>
          <h5>Complete GIT in 1 video</h5>
          <p>49K views 12 hours ago</p>
        </article>

        <article >
          <img style={{borderRadius:"15px"}} src="https://i.ytimg.com/an_webp/JkOEwVkaXso/mqdefault_6s.webp?du=3000&sqp=CLLjlbIG&rs=AOn4CLAyiMK5VZaIAbNSYh3WpaYfa8pgWA" alt="AI-Handling"/>
          <h5>Before you get started in DevOps</h5>
          <p>9K views 2 hours ago</p>
        </article>

        <article >
          <img style={{borderRadius:"15px"}} src="https://i.ytimg.com/an_webp/aui6tlUQsPM/mqdefault_6s.webp?du=3000&sqp=CIzblbIG&rs=AOn4CLCIiz5YM1H8aCkX988CaBxT2QqX7A" alt="AI-Handling"/>
          <h5>Complete MongoDB aggregation pipeline course</h5>
          <p>9K views 2 hours ago</p>
        </article>

        </div>
      </section>
      {/* vedio channel windows  */}
      {/* vedio channel windows  */}
      {/* vedio channel windows  */}
      {/* vedio channel windows  */}
      {/* vedio channel windows  */}
    </div>
  );
}

export default App;
