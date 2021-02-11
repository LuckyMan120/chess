import h from 'mithril/hyperscript';

export function body() {
  return (
    <div className="father">
      <div className="container section">
        {startCard()}
        {introCards()}
        <div>
          <div className="newOnChess">
            <p>New on chess? Start with <a className="basicLink">chess basics</a></p>
          </div>
          {stats()}       
        </div>
        </div>
        {liveTransition()}
      </div>

  )
} 

const startCard = () => {
  return (
    <div>
      <div className="hiDiv">
        <p className="hiText">Hi,grasevandir.</p>
        <p className="hiText">Let's play Chess</p>
      </div>
    </div>
  )
}

const introCards = () => {
  return (
    <div className="hiDiv">
      <div className="introCard">
        <div className="introText">
          <p className="headerIntroText">Play with other users</p>
          <p>Start with someone at your level</p>
        </div>
      <div className="introImage humanImage"></div>
      </div>
      <div className="introCard">
        <div className="introText">
          <p className="headerIntroText">Play with friend via link</p>
          <p>Send a link and start a battle</p>
        </div>
      <div className="introImage linkImage"></div>
      </div>
      <div className="introCard">
        <div className="introText">
          <p className="headerIntroText">Play with computer</p>
          <p>Practice with customizable bots</p>
        </div>
      <div className="introImage robotImage"></div>
      </div>
    </div>
  
  )
}


const stats = () => {
  return (
    <div className="stats">
    <div className="usersCount">
      <div className="iconImage userIConImage"></div>
      <div><span className="count">1 308 096</span> Players total</div>
    </div>

    <div className="usersCount">
      <div className="iconImage palyingIConImage"></div>
      <div><span className="count">308 096</span> Playing Now</div>
    </div>

    <div className="usersCount"> 
      <div className="iconImage toroIConImage"></div>
      <div><span className="count">12</span> Tounaments now</div>
      </div>

  </div>
  )
}

const liveTransition = () => {
  return (
    <div>
      <div className="liveTranContainer">
        <div class="liveTranHeader liveCardBox">
            <div>
              <p className="headerIntroText textColor">Live translations</p>
              <p>308 096 Playing Now</p>
            </div>
            <div className="forwardArrow"></div>
        </div>
      </div>
      <div className="liveTranContainer">
        <div class="liveCardBoxWithPic">
          <div className="carazyHeaderText">
            <div className="happyHome"></div>
            <div><span className="crazyHorse">Crazyhouse</span></div>
          </div>
          <div>
            <div className="gamerInfoContaier">
              <div className="gamerInfo">
                <div className="soldierSvg"></div>
                <div> - </div>
                <div className="horseSvg"></div>
                <div><span className="gamerName">vasilisa_andrevna</span></div>
                <div className="gamerChip"><span className="insideChip">1263</span></div>
              </div>
              <div className="timeContainer">
                <div className="timeSvg"></div>
                <div className="timeRemain">1:59</div>
              </div>
            </div>
            <div className="chessContainer">
              <div className="chessPlay"></div>
            </div>
            <div className="gamerInfoContaier gamerFooter">
              <div className="gamerInfo">
                <div className="whiteSoldier"></div>
                <div> - </div>
                <div className="yellowSoldier"></div>
                <div><span className="gamerName">qwerty56</span></div>
                <div className="gamerChip"><span className="insideChip">1467</span></div>
              </div>
              <div className="timeContainer">
                <div className="redTimeSvg"></div>
                <div className="timeRemainFooter">2:30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
            <div className="navLeft"></div>
            <div className="dots"></div>
            <div className="navRight"></div>
        </div>
      </div>
    </div>
  );
}
