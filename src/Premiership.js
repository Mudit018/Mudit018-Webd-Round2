import React from "react";
import news1 from "./images/scottishnews1.jpg";
import news2 from "./images/scottishnews2.jpg";
import news3 from "./images/scottishnews3.png";
import news4 from "./images/scottishnews4.jpg";
import news5 from "./images/scottishnews5.jpg";
import news6 from "./images/scottishnews6.jpg";
import team1 from "./images/steam1.png";
import team2 from "./images/steam2.png";
import team4 from "./images/steam4.png";
import team5 from "./images/steam5.png";
import team7 from "./images/steam7.png";
import team9 from "./images/steam9.png";
import team10 from "./images/steam10.png";
import team11 from "./images/steam11.png";
import team13 from "./images/steam13.png";
import team14 from "./images/steam14.png";
import team15 from "./images/steam15.png";
import team16 from "./images/steam16.png";

const Premiership = () => {
  return (
    <div>
      {/* teams-container */}
      <div className="container teams-container">
        <div className="home-heading">
          <h1>Teams in Danish SuperLiga</h1>
        </div>
        <div className="teams">
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team1} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Aberdeen Football Club
              </strong>
              <p className="card-text">Founded: 14 April 1903</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: Pittodrie Stadium</li>
              <li className="list-group-item">Manager: Stephen Glass</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team2} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: The Celtic Football Club
              </strong>
              <p className="card-text">Founded: 6 November 1887</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: Celtic Park Glasgow</li>
              <li className="list-group-item">Manager: Ange Postecoglou</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team4} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Dundee United Football Club
              </strong>
              <p className="card-text">Founded: 24 May 1909</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: Tannadice Park</li>
              <li className="list-group-item">Manager: Tam Courts</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team5} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Hamilton Academical Football Club
              </strong>
              <p className="card-text">Founded: 1874</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: New Douglas Park</li>
              <li className="list-group-item">Manager: Brian Rice</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team7} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Hibernian Football Club
              </strong>
              <p className="card-text">Founded: 8 August 1875</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: Easter Road</li>
              <li className="list-group-item">Manager: Jack Ross</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team9} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Kilmarnock Football Club
              </strong>
              <p className="card-text">Founded: 5January 1869</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Ground: Rugby Park, Kilmarnock
              </li>
              <li className="list-group-item">Manager: Tommy Wright</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team10} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Livingston Football Club
              </strong>
              <p className="card-text">Founded: 1943</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: Almondvale Stadium</li>
              <li className="list-group-item">Manager: David Martindale</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team11} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Motherwell Football Club
              </strong>
              <p className="card-text">Founded: 17 May 1886</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: Fir Park</li>
              <li className="list-group-item">Manager: Graham Alexander</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team13} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Rangers Football Club
              </strong>
              <p className="card-text">Founded: March 1872</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: Inbrox Stadium</li>
              <li className="list-group-item">Manager: Steven Gerrard</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team14} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: Ross County Football Club
              </strong>
              <p className="card-text">Founded: 1929</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Ground: Victoria Park, Dingwall
              </li>
              <li className="list-group-item">Manager: Roy MacGregor</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team15} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: St Johnstone Football Club
              </strong>
              <p className="card-text">Founded: 1884</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: McDiarmid Park</li>
              <li className="list-group-item">Manager: Callum Davidson</li>
            </ul>
          </div>
          <div className="card card-league" style={{ width: "18rem" }}>
            <img src={team16} className="card-img-top" alt="..." />
            <div className="card-body">
              <strong className="card-title">
                Full name: St Mirren Football Club
              </strong>
              <p className="card-text">Founded: 1887</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ground: Scottish Premiership</li>
              <li className="list-group-item">Manager: Jim Goodwin</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
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
                    <h5 className="card-title">
                      'Rangers 2 Arsenal 2 RECAP as Steven Gerrard's side
                      produce pre season fireworks'
                    </h5>
                    <p className="card-text">
                      Rangers thrilled 2,000 supporters as they secured a 2-2
                      draw with Arsenal in their latest pre-season friendly.
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
                      'Aberdeen name Brown team captain'
                    </h5>
                    <p className="card-text">
                      Goal takes a look at what the Gunners' latest home, away
                      and third kits are rumoured to look like
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
                      'Edinburgh, Dundee derbies live on Sky Sports'
                    </h5>
                    <p className="card-text">
                      Sky Sports will show the first Edinburgh and Dundee
                      derbies of the 2021/22 Scottish Premiership season live in
                      September.
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
                      'Former Celtic forward Gallagher dies aged 80'
                    </h5>
                    <p className="card-text">
                      The 22-year-old defender attracted plenty of interest in
                      the summer of 2020, but a switch to Stamford Bridge still
                      came as a shock
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
                      'Police assess new allegations over Griffiths' online
                      activity'
                    </h5>
                    <p className="card-text">
                      Police are assessing an allegation that Celtic striker
                      Leigh Griffiths sent inappropriate messages to a second
                      teenage girl on social media.
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
                      'Nearly 2,000 Covid cases linked to Scots watching Euro
                      2020'
                    </h5>
                    <p className="card-text">
                      Nearly 2,000 Covid-19 cases in Scotland have been linked
                      to football fans watching Euro 2020 fixtures.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premiership;
