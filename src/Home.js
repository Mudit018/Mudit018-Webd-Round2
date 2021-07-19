import React from "react";
import news1 from "./images/news1.jpg";
import news2 from "./images/news2.jpeg";
import news3 from "./images/news3.jpg";
import news4 from "./images/news4.jpg";
import news5 from "./images/news5.jpg";
import news6 from "./images/news6.jpg";
import news7 from "./images/news7.jpeg";
import news8 from "./images/news8.jpg";
import news9 from "./images/news9.jpg";
import news10 from "./images/news10.png";
import news11 from "./images/news11.png";
import news12 from "./images/news12.jpg";
import bignews from "./images/bignews1.jpg";

const Home = () => {
  // VanillaTilt.init(document.querySelector(".card-home"), {
  // 	max: 25,
  // 	speed: 400
  // });

  return (
    <div>
      <div className="big-news-container">
        <div class="news-text">Trending News</div>
          <div className="home-card-col">
            <div className="card card-home" style={{ width: "50rem" }}>
              <img src={bignews} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  'Neymar has won the most number of trophies with PSG so far in
                  his career...'
                </h5>
                <p className="card-text">
                  The last two decades in football has been dominated by Cristiano
                  Ronaldo and Lionel Messi but if one footballer has come close to
                  challenge the might of the two legends of the game is Brazilian
                  star Neymar.
                </p>
              </div>
          </div>
        </div>
      </div>

      
        
        
      <div id="news-container">
      <div id="news">
        <div class="news-text">Latest News</div>
        <ul class="news-grid">
          <li class="item1 item">
            <div class="three">
              <div class="news-image">
                <img src={news1} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">'Messi, Ronaldo lead the way'</h5>
                <p className="card-text">
                  Lionel Messi and Cristiano Ronaldo are the only two players
                  who have won the award more than three times...
                </p>
              </div>
            </div>
          </li>
          <li class="item2 item">
            <div class="three">
              <div class="news-image">
                <img src={news2} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'Arsenal 2021-22 kit: New home and away jersey styles &
                  release dates'
                </h5>
                <p className="card-text">
                  Goal takes a look at what the Gunners' latest home, away and
                  third kits are rumoured to look like
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news3} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'Barcelona suspect Real Madrid are behind Moriba stalling on
                  new contract'
                </h5>
                <p className="card-text">
                  The Blaugrana are struggling to put fresh terms in place with
                  a hot prospect, but contact with the Blancos is being denied
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news4} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'Sarr 'surprised' that Chelsea wanted to sign him as he looks
                  to make Blues breakthrough'
                </h5>
                <p className="card-text">
                  The 22-year-old defender attracted plenty of interest in the
                  summer of 2020, but a switch to Stamford Bridge still came as
                  a shock
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news5} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'Sudeikis wears t-shirt in support of Rashford, Sancho & Saka
                  at Ted Lasso premiere'
                </h5>
                <p className="card-text">
                  The lead actor called the racist abuse of the players after
                  their penalty misses in the Euro final "horrible"
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news6} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'The final agreement insults club members' - East Bengal
                  Executive Committee will not sign final agreement'
                </h5>
                <p className="card-text">
                  The committee maintain their stance on not signing final
                  agreement of the JV which was to be formed between East Bengal
                  and Shree Cement...
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news7} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  '‘The USWNT should not lose’ - Hope Solo previews the 2020
                  Olympic Games and reflects on controversy at Rio 2016'
                </h5>
                <p className="card-text">
                  The U.S. women’s national team legend was speaking on Goal’s
                  new podcast, All Of US: The U.S. Women's Soccer Show
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news8} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'Celtic sign Japan international Kyogo Furuhashi from Vissel
                  Kobe'
                </h5>
                <p className="card-text">
                  The winger has been in great form for Vissel Kobe and tops the
                  goal charts in Japan at the midway point of the season
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news9} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'STEVEN GERRARD GIVES EX-LIVERPOOL TEAM-MATE GLOWING REFERENCE
                  TO SEAL EURO MOVE'
                </h5>
                <p className="card-text">
                  Former Rangers defender Jon Flanagan has signed for Danish
                  side HB Koge on a two-year deal, 12 months after leaving
                  Ibrox, and a glowing reference from Ibrox boss Steven Gerrard
                  – via former Liverpool star Daniel Agger – helped the
                  full-back land the move.
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news10} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  '‘Danish club reject Barnsley's N350m bid for ex-Manchester
                  United winger of Nigerian descent'
                </h5>
                <p className="card-text">
                  The offer worth £500,000 (approximately N350 million in
                  Nigerian currency) was rejected by Randers because it did not
                  meet their valuation of the 2019 Nigeria U23 invitee.
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news11} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'Brentford-bound midfielder Onyeka finally shows up for FCM
                  training ahead of season opener'
                </h5>
                <p className="card-text">
                  Frank Onyeka has finally reported for training at Danish
                  Superliga club FC Midtjylland, a day before their first
                  competitive match of the new season against Odense Boldklub.
                </p>
              </div>
            </div>
          </li>
          <li class="item3 item">
            <div class="three">
              <div class="news-image">
                <img src={news12} alt="" />
              </div>
              <div class="news-headlines">
                <h5 className="card-title">
                  'Liel Abada: New Celtic signing revels in 'dream' switch from
                  Israel'
                </h5>
                <p className="card-text">
                  The 19-year-old signed a five-year deal on Thursday, leaving
                  Maccabi Petah Tikva in his homeland for an undisclosed fee.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    </div>
    
  );
};

export default Home;
