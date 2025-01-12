import './Home.css'

function Home() {
  return (
    <>
      <div id='font'>
        <div id='image'>
            <div id="main">
              <h1 id='main'><strong>RE-LEAF</strong></h1>
            </div>
          </div>
          <div id='divide'>
            <p id='left-text'>Did you know that house plants not only serve an economic benefit, but also an <a href="https://meridian.allenpress.com/jeh/article/37/1/30/430948/An-Update-of-the-Literature-Supporting-the-Well" id='hovertest' target='blank'><b>environmental, well-being, and mental health benefit?</b></a> <br/> <br/> House plants been shown to <a href="https://www.healthline.com/health/healthy-home-guide/benefits-of-indoor-plants#7-benefits" id='hovertest' target='blank'><b>reduce stress, lower blood pressure, and improves the quality of your work environment.</b></a> Since the original study done by Hall and Dickson in 2011, additional studies have provided compelling evidence to suppot this point! <br /> <br /> Not everyone has botanical knowledge... so we decided to integrate AI to personalize house plant recommendations to match <b>your</b> needs. <br /> <br /> Want a plant thats purple or red or pink? One that can survive if you forget about it? Want to support a local endangered species? Get a recommendation for any need, no matter how wacky it is!</p>
            <img src="./src/assets/single-plant.jpg" alt="single plant" id='resize'/>
          </div>
          <p id='bottomtext'>Whether you're here to get started on your plant owning journey or are an expert, we're here to help!</p>
      </div>
    </>
  )
}

export default Home