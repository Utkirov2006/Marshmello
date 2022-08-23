import React from 'react';

import img1 from "../img/img2.jpg"
import img2 from "../img/img1.jpg"
import img3 from "../img/img3.jfif"
import img4 from "../img/img4.jpg"
import img5 from "../img/img5.jpg"
import img6 from "../img/img6.png"







const Songs = () => {
    return (
        <div className='songs'>

            <div className="songs-logo"></div>

            <div className="songs-responsive">
                <table class="table table-borderless">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"><a style={{color:"white",textDecoration:"none"}} href="/media">Klip</a></th>
                            <th scope="col"><a style={{color:"white",textDecoration:"none"}} href="/media">Music</a></th>
                            <th scope="col"><a style={{color:"white",textDecoration:"none"}} href="/media">Marshmello</a></th>
                            <th scope="col"><a style={{color:"white",textDecoration:"none"}} href="/media">Duet</a></th>
                            <th scope="col">Reward</th>



                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>

                            <img src={img1} />

                            <td>Alone</td>
                            <td>Mellogang</td>
                            <td>Alone</td>
                            <td>American Music Award</td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>

                            <img src={img2} />



                            <td >Wolwes</td>
                            <td>Mellogang</td>
                            <td>Selena Gomez</td>
                            <td>American Music Award</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <img src={img3} />


                            <td >Happier</td>
                            <td>Mellogang</td>
                            <td>Bastile</td>
                            <td>American Music Award</td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <img src={img4} />


                            <td> Friends</td>
                            <td>Mellogang</td>
                            <td>Anna Marie</td>
                            <td>American Music Award</td>
                        </tr>


                        <tr>
                            <th scope="row">5</th>
                            <img src={img5} />


                            <td> Forever</td>
                            <td>Mellogang</td>
                            <td>Camilla Cabello</td>
                            <td>American Music Award</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <img src={img6} />


                            <td> Silence</td>
                            <td>Mellogang</td>
                            <td> Khalid</td>
                            <td>American Music Award</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Songs;