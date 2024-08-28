import React from 'react'

const Home = () => {
  const onChangeFunction=()=>{
    return 0
  }
  return (
    <>
    <div className="container">


<h1 style={{"paddingTop":"1px", marginTop:"0" } }>Discover Your Next Adventure</h1>
<p style={{ }}>Find the best places to eat, stay, and explore near you, now with AI-powered recommendations.</p>

<div className='input-container' >
  <div className="searchbtn">
  <input type="text" placeholder='Search' className='Searchbar' />
  <button><i class="fas fa-search icon" style={{color:"black"}}></i></button>
</div>
  </div>
<div className="icons">
  <div className="icon">
    <span className="icon-img"><i className="fas fa-concierge-bell"></i></span>
    <span className="icon-text">Restaurants</span>
    <p>Discover the best dining experiences, from local favorites to top-rated eateries.</p>
  </div>
  <div className="icon">
    <span className="icon-img"><i className="fas fa-bed"></i></span>
    <span className="icon-text">Hotels</span>
    <p>Find the perfect place to stay, with options ranging from budget to luxury.</p>
  </div>
  <div className="icon">
    <span className="icon-img">★</span>
    <span className="icon-text">Attractions</span>
    <p>Explore popular attractions and hidden gems that make your trip memorable.</p>
  </div>
</div>
<div className="ai-recommendation">
  <span className="icon-img"><i className="fas fa-robot" style={{"width":"100%"}}></i></span>
  <span className="icon-text">AI Recommendations</span>
  <p>Get personalized suggestions powered by AI to make your trip even more special.</p>
</div>
</div>

    </>
  )
}

export default Home
