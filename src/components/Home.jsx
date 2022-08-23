import React from 'react';


const Home = () => {
    return (
        <div className='home'>


            <h1 className='img'></h1>

            <h2 className='img2'></h2>
            <h3 className='h3'>Saturday, December 7th,2019 <br /> All state arena</h3>
            <h4 className='h4'>The company was started by Adolf Dassler in his mother's house <br />
                he was joined by his elder brother Rudolf in 1924 under the foot <br />
                name Dassler Brothers Shoe Factory.</h4>

            <button style={{ color: "white", background: "black" }}><a style={{textDecoration:"none",color:"white"}} href='/Account'> account-card</a></button>
            <button style={{ color: "black", background: "white" }}><a style={{textDecoration:"none",color:"black"}} href='/songs'> Read More </a></button>

        </div>
    );
};

export default Home;