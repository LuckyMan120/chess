import h from 'mithril/hyperscript';
import carousel, {next, prev, goTo} from './carousel';
import awardsCarousel from './awardsCarousel';
import newBieCarousel from './newBieCarousel';
import newsCarousel from './newsCarousel';

export function body() {
  return (
    <div className='father'>
      <div className='container section'>
        {startCard()}
        {introCards()}
        <div>
          <div className='newOnChess'>
            <p>
              New on chess? Start with <a className='basicLink'>chess basics</a>
            </p>
          </div>
          {stats()}
        </div>
      </div>
      {liveTransitionHeader()}
      {topPlayers()}
      {todaysPuzzleHeader()}
      {todaysPuzzle()}
      {puzzleFooter()}
      {awards()}
      {openTor()}
      {soonestTors()}
      {torWinners()}
      {newBieToChess()}
      {news()}
    </div>
  );
}

const startCard = () => {
  return (
    <div>
      <div className='hiDiv'>
        <p className='hiText'>Hi,grasevandir.</p>
        <div className='together'>
          <p className='hiText mr8px'>Let's play Chess</p>
          <div className='switchButton'>
            <div className='switchButton mr5px'>
              <label className='switch'>
                <input type='checkbox' />
                <span className='slider sliderBig round'></span>
              </label>
            </div>
            <div className='switchButton'>
              <span className='plusText switchOption'>Plus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const introCards = () => {
  return (
    <div className='hiDiv'>
      <div className='introCard'>
        <div className='introText'>
          <p className='headerIntroText'>Play with other users</p>
          <p>Start with someone at your level</p>
        </div>
        <div className='introImage humanImage'></div>
      </div>
      <div className='introCard'>
        <div className='introText'>
          <p className='headerIntroText'>Play with friend via link</p>
          <p>Send a link and start a battle</p>
        </div>
        <div className='introImage linkImage'></div>
      </div>
      <div className='introCard'>
        <div className='introText'>
          <p className='headerIntroText'>Play with computer</p>
          <p>Practice with customizable bots</p>
        </div>
        <div className='introImage robotImage'></div>
      </div>
    </div>
  );
};

const stats = () => {
  return (
    <div className='stats'>
      <div className='usersCount'>
        <div className='iconImage userIConImage'></div>
        <div>
          <span className='count'>1 308 096</span> Players total
        </div>
      </div>

      <div className='usersCount'>
        <div className='iconImage palyingIConImage'></div>
        <div>
          <span className='count'>308 096</span> Playing Now
        </div>
      </div>

      <div className='usersCount'>
        <div className='iconImage toroIConImage'></div>
        <div>
          <span className='count'>12</span> Tounaments now
        </div>
      </div>
    </div>
  );
};

const liveTransitionHeader = () => {
  return (
    <div>
      <div className='chessContainer'>
        <div class='liveTranHeader liveCardBox'>
          <div>
            <p className='headerIntroText textColor'>Live translations</p>
            <p>308 096 Playing Now</p>
          </div>
          <div className='forwardArrow'></div>
        </div>
      </div>
      {carousel.view()}
      {navigationBoutons()}
    </div>
  );
};

export const liveTransition = () => {
  return (
    <div>
      <div className='liveTranContainer'>
        <div class='liveCardBoxWithPic'>
          <div className='carazyHeaderText'>
            <div className='happyHome'></div>
            <div>
              <span className='crazyHorse'>Crazyhouse</span>
            </div>
          </div>
          <div>
            <div className='gamerInfoContaier'>
              <div className='gamerInfo'>
                <div className='soldierSvg'></div>
                <div> - </div>
                <div className='horseSvg'></div>
                <div>
                  <span className='gamerName'>vasilisa_andrevna</span>
                </div>
                <div className='gamerChip'>
                  <span className='insideChip'>1263</span>
                </div>
              </div>
              <div className='timeContainer'>
                <div className='timeSvg'></div>
                <div className='timeRemain'>1:59</div>
              </div>
            </div>
            <div className='chessContainer'>
              <div className='chessPlay'></div>
            </div>
            <div className='gamerInfoContaier gamerFooter'>
              <div className='gamerInfo'>
                <div className='whiteSoldier'></div>
                <div> - </div>
                <div className='yellowSoldier'></div>
                <div>
                  <span className='gamerName'>qwerty56</span>
                </div>
                <div className='gamerChip'>
                  <span className='insideChip'>1467</span>
                </div>
              </div>
              <div className='timeContainer'>
                <div className='redTimeSvg'></div>
                <div className='timeRemainFooter'>2:30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const navigationBoutons = () => {
  return (
    <div>
      <div class='chessContainer'>
        <div class='navigationContainer'>
          <div className='navLeft' onclick={() => prev()}></div>
          <div className='dots'>
            <div className='nonActiveDot' onclick={() => goTo(0)}></div>
            <div className='activeDot' onclick={() => goTo(1)}></div>
            <div className='activeDot' onclick={() => goTo(2)}></div>
          </div>
          <div className='navRight' onclick={() => next()}></div>
        </div>
      </div>
    </div>
  );
};

const topPlayers = () => {
  return (
    <div>
      <div className='chessContainer'>
        <div class='topPlayerHeader liveCardBox'>
          <div>
            <p className='headerIntroText textColor'>Top Players</p>
            <p>1 308 096 Players total</p>
          </div>
          <div className='switchButton switchContainer'>
            <div className='switchButton'>
              <span className='goldText switchOption'>all</span>
            </div>
            <div className='switchButton'>
              <label className='switch'>
                <input type='checkbox' checked />
                <span className='slider round'></span>
              </label>
            </div>
            <div className='switchButton'>
              <span className='goldText switchOption'>online</span>
            </div>
          </div>
        </div>
      </div>
      {tableFilter('')}
      {winnerTable()}
    </div>
  );
};

const tableFilter = (color: string) => {
  const className = `navigationContainer itemsContainer ${color}`;
  return (
    <div>
      <div className='chessContainer'>
        <div class={className}>
          <div className='allText'>All</div>
          <div className='missleSvg itemsSvg'></div>
          <div className='bulletSvg itemsSvg'></div>
          <div className='fireSvg itemsSvg'></div>
          <div className='rabbitSvg itemsSvg'></div>
          <div className='turtuleSvg itemsSvg'></div>
          <div className='navRight itemsSvg'></div>
        </div>
      </div>
    </div>
  );
};

const winnerTable = () => {
  return (
    <div className='mt5px'>
      <div className='liveTranContainer'>
        <div className='tableContainer'>
          <table className='winnerTable'>{winnerRows()}</table>
        </div>
      </div>
    </div>
  );
};

const winnerRows = () => {
  return (
    <div>
      <tr className='flexTableRow oddRow'>
        <td>
          <div>
            <div className='rank firstScore'></div>
          </div>
        </td>
        <td>
          <div className='together profileCell'>
            <div className='profilePic profilePicOne mr5px'></div>
            <div className='profileName mr5px'>Inventing_Invention</div>
            <div className='gm'>GM</div>
          </div>
        </td>
        <td>
          <div className='together'>
            <div className='itemsShape whiteMissle mr5px'></div>
            <div className='userScore'>2890</div>
          </div>
        </td>
        <td>
          <div className='together growContainer'>
            <div className='arrowUp arrow mr5px'></div>
            <div className='greenNumber'>4</div>
          </div>
        </td>
      </tr>
      <tr className='flexTableRow evenRow'>
        <td>
          <div>
            <div className='rank rankTwo'></div>
          </div>
        </td>
        <td>
          <div className='together profileCell'>
            <div className='profilePic profilePicTwo mr5px'></div>
            <div className='profileName mr5px'>usernickname</div>
            <div className='gm'>GM</div>
          </div>
        </td>
        <td>
          <div className='together'>
            <div className='itemsShape whiteBullet mr5px'></div>
            <div className='userScore'>3000</div>
          </div>
        </td>
        <td>
          <div className='together growContainer'>
            <div className='arrowUp arrow mr5px'></div>
            <div className='greenNumber'>23</div>
          </div>
        </td>
      </tr>
      <tr className='flexTableRow oddRow'>
        <td>
          <div>
            <div className='rank rankThree'></div>
          </div>
        </td>
        <td>
          <div className='together profileCell'>
            <div className='profilePic profilePicThree mr5px'></div>
            <div className='profileName mr5px'>Night-King96</div>
          </div>
        </td>
        <td>
          <div className='together'>
            <div className='itemsShape whiteRabbit mr5px'></div>
            <div className='userScore'>3000</div>
          </div>
        </td>
        <td>
          <div className='together growContainer'>
            <div className='arrowUp arrow mr5px'></div>
            <div className='greenNumber'>47</div>
          </div>
        </td>
      </tr>
      <tr className='flexTableRow evenRow'>
        <td>
          <div>
            <div className='rank'>4.</div>
          </div>
        </td>
        <td>
          <div className='together profileCell'>
            <div className='profilePic profilePicFour mr5px'></div>
            <div className='profileName mr5px'>qwerty56</div>
          </div>
        </td>
        <td>
          <div className='together'>
            <div className='itemsShape whiteTurtule mr5px'></div>
            <div className='userScore'>1400</div>
          </div>
        </td>
        <td>
          <div className='together growContainer'>
            <div className='arrowDown arrow mr5px'></div>
            <div className='redNumber'>23</div>
          </div>
        </td>
      </tr>
    </div>
  );
};

const todaysPuzzleHeader = () => {
  return (
    <div>
      <div className='chessContainer'>
        <div class='liveTranHeader liveCardBox'>
          <div>
            <p className='headerIntroText textColor'>Today's puzzle</p>
          </div>
          <div className='together'>
            <div>
              <p className='headerIntroText mr5px allPuzzle'>all</p>
            </div>
            <div className='forwardArrow'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const todaysPuzzle = () => {
  return (
    <div className='mt5px'>
      <div className='chessContainer'>
        <div class='liveCardBox'>
          <div className='chessPuzzleContainer'>
            <div className='chessPuzzle'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const puzzleFooter = () => {
  return (
    <div className='puzzleFoterContainer'>
      <div className='puzzleFooterSpace liveCardBox'>
        <div className='puzzleFooterText'>
          <span>Capture the defender</span>
        </div>
        <div className='together'>
          <div className='usersCount mr20px'>
            <div className='iconImage palyingIConImage'></div>
            <div className='homeText'>5 moves</div>
          </div>
          <div className='usersCount'>
            <div className='iconImage userIConImage'></div>
            <div className='homeText'>Played 88 865 times</div>
          </div>
        </div>
        <div>
          <div className='timeContainer'>
            <div className='redTimeSvg mr5px'></div>
            <div className='timeRemainFooter homeText'>40 sec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const awards = () => {
  return <div className='fullWidth'>{awardsCarousel.view()}</div>;
};

export const awardsCard = () => {
  return (
    <div className='awardsCards'>
      <div className='cardGreen'>
        <div className='topSponsered'>
          <div className='sponseredChip'>
            <span className='sponserdText'>Sponsored</span>
          </div>
        </div>
        <div>
          <div className='titleContainer'>
            <div className='fireSvgTitle'></div>
            <div className='titleText'>2021 airBaltic Spring Marathon</div>
          </div>
        </div>
        <div className='awarsContentContainer'>
          <div className='awardsContent'>
            <div className='together'>
              <div className='blackHour mr5px awardsContentIcons'></div>
              <div className='awardContentText'>
                <span className='boldContent'>57 min, start in 10 min</span>
              </div>
            </div>
            <div className='together'>
              <div className='blackUser mr5px awardsContentIcons'></div>
              <div className='awardContentText'>
                <span className='boldContent'>Registered: 254 / 450</span>
                <p>Rating {'>'} 1500 (medium: 1865)</p>
              </div>
            </div>
            <div className='together'>
              <div className='blackCrown mr5px awardsContentIcons'></div>
              <div className='awardContentText'>
                <span className='boldContent'>Top players: 23</span>
              </div>
            </div>
          </div>
        </div>
        <div className='contentAwardFooter'>
          <div className='sponserInFooter'></div>
          <div className='priceInFooter'>
            <div className='together'>
              <div className='goldGoblet mr5px'></div>
              <div className='goldTextPrice'>$1500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const openTor = () => {
  return (
    <div className='openContaner'>
      <div class='liveTranHeader openHeaderSpace'>
        <div>
          <p className='openTorTitle textColor'>Open tournaments</p>
        </div>
        <div className='together'>
          <div>
            <p className='headerIntroText mr5px allPuzzle'>all</p>
          </div>
          <div className='forwardArrow'></div>
        </div>
      </div>
    </div>
  );
};

const soonestTors = () => {
  return (
    <div>
      <div className='chessContainer'>
        <div class='liveTranHeader liveCardBox'>
          <div>
            <p className='headerIntroText textColor'>Soonest tournaments</p>
            <p>308 096 Playing Now</p>
          </div>
        </div>
      </div>
      {tableFilter('navy')}
      <div className='chessContainer'>
        <div class='liveCardBox soonTourSpace'>
          <div className='torHeaderContainer'>
            <div className='together'>
              <div className='itemsShape whiteBullet mr5px'></div>
              <div className='tourHeder'>Hourly Bullet</div>
            </div>
            <div className='openChip'>
              <div className='openText'>open</div>
            </div>
          </div>
          <div className='awarsContentContainer mt15px'>
            <div className='awardsContent'>
              <div className='together'>
                <div className='redTimeSvg mr5px awardsContentIcons'></div>
                <div className='awardContentText'>
                  <span className='boldContent colorWhite'>
                    57 min, start in 10 min
                  </span>
                </div>
              </div>
              <div className='together'>
                <div className='userIConImage mr5px awardsContentIcons'></div>
                <div className='awardContentText'>
                  <span className='boldContent colorWhite'>
                    Registered: 254 / 450
                  </span>
                  <p className='colorWhite'>Rating {'>'} 1500 (medium: 1865)</p>
                </div>
              </div>
              <div className='together'>
                <div className='whiteCrown mr5px awardsContentIcons'></div>
                <div className='awardContentText'>
                  <span className='boldContent colorWhite'>
                    Top players: 23
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='chessContainer'>
        <div class='liveCardBox soonTourSpace navy mt0px'>
          <div className='torHeaderContainer'>
            <div className='together'>
              <div className='whiteRabbit itemsShape mr5px'></div>
              <div className='tourHeder'>Scandinavian defence Rapid</div>
            </div>
            <div className='privateChip'>
              <div className='openText redText'>private</div>
            </div>
          </div>
          <div className='awarsContentContainer mt15px'>
            <div className='awardsContent'>
              <div className='together'>
                <div className='redTimeSvg mr5px awardsContentIcons'></div>
                <div className='awardContentText'>
                  <span className='boldContent colorWhite'>
                    57 min, start in 10 min
                  </span>
                </div>
              </div>
              <div className='together'>
                <div className='userIConImage mr5px awardsContentIcons'></div>
                <div className='awardContentText'>
                  <span className='boldContent colorWhite'>
                    Registered: 254 / 450
                  </span>
                  <p className='colorWhite'>Rating {'>'} 1500 (medium: 1865)</p>
                </div>
              </div>
              <div className='together'>
                <div className='whiteCrown mr5px awardsContentIcons'></div>
                <div className='awardContentText'>
                  <span className='boldContent colorWhite'>
                    Top players: 23
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const torWinners = () => {
  return (
    <div>
      <div className='chessContainer'>
        <div class='liveTranHeader liveCardBox'>
          <div>
            <p className='headerIntroText textColor'>Tournaments winners</p>
            <p>396 this month</p>
          </div>
          <div className='together'>
            <div>
              <p className='headerIntroText mr5px allPuzzle'>all</p>
            </div>
            <div className='forwardArrow'></div>
          </div>
        </div>
      </div>
      {tableFilter('navy')}
      {winnerTorTable()}
    </div>
  );
};

const winnerTorTable = () => {
  return (
    <div className='mt5px'>
      <div className='liveTranContainer'>
        <div className='tableContainer'>
          <div className='oddBgc torHeaderContainer height45px'>
            <div className='together'>
              <div className='profilePic profilePicTwo mr5px'></div>
              <div className='timeRemainFooter'>Night-King96</div>
            </div>
            <div className='together'>
              <div className='timeRemainFooter mr5px'>Winter</div>
              <div class='itemsShape whiteFire'></div>
            </div>
          </div>
          <div className='evenBgc torHeaderContainer height45px'>
            <div className='together'>
              <div className='profilePic goldenProPic mr5px'></div>
              <div className='timeRemainFooter'>usernickname</div>
            </div>
            <div className='together'>
              <div className='timeRemainFooter mr5px'>Monthly</div>
              <div class='itemsShape whiteBullet'></div>
            </div>
          </div>
          <div className='oddBgc torHeaderContainer height45px'>
            <div className='together'>
              <div className='profilePic profilePicThree mr5px'></div>
              <div className='timeRemainFooter'>Night-King96</div>
            </div>
            <div className='together'>
              <div className='timeRemainFooter mr5px'>Winter</div>
              <div class='itemsShape whiteMissle'></div>
            </div>
          </div>
          <div className='evenBgc torHeaderContainer height45px'>
            <div className='together'>
              <div className='profilePic goldenElephent mr5px'></div>
              <div className='timeRemainFooter'>usernickname</div>
            </div>
            <div className='together'>
              <div className='timeRemainFooter mr5px'>Monthly</div>
              <div class='itemsShape whiteCastel'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const newBieToChess = () => {
  return (
    <div className='fullWidth newBieFullWidth'>
      <div className='ml20px mb12px'>
        <p className='openTorTitle textColor'>Newbie to chess?</p>
      </div>
      {newBieCarousel.view()}
      {takeChessLesson()}
    </div>
  );
};

export const newBieCard = () => {
  return (
    <div className='newBieContainer'>
      <div className='newBieCard'>
        <div className='newBieImageContainer'>
          <div className='newBieImage'></div>
        </div>
        <div className='newBieContentContainer'>
          <div className='newBieContentTitleContainer'>
            <div className='newBieContentTitle'>Learn chess board</div>
            <div className='blackArrow'></div>
          </div>
          <p className='textBlack'>Lorem ipsum dolor sit amet,</p>
          <p className='textBlack'>consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

const takeChessLesson = () => {
  return (
    <div className='newBieContainer mt20px'>
      <div className='takLessonContainer'>
        <div className='takeChessLessontitle textBlack'>Take chess lessons</div>
        <div className='takeChessLessontitleContent'>
          <p className='textBlack'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dui
            molestie, volutpat arcu quis, eleifend enim.{' '}
          </p>
        </div>
        <div class='centerBottom'>
          <div className='takeLessonBottom'>
            <div className='takeLessonBottomText'>Find a teacher</div>
          </div>
        </div>
        <div className='chessCenter'>
          <div className='chessPlayeSvg'></div>
        </div>
      </div>
    </div>
  );
};

const news = () => {
  return (
    <div>
      <div className='openContaner'>
        <div class='liveTranHeader openHeaderSpace'>
          <div>
            <p className='openTorTitle textColor'>News</p>
          </div>
          <div className='together'>
            <div>
              <p className='headerIntroText mr5px allPuzzle'>all</p>
            </div>
            <div className='forwardArrow'></div>
          </div>
        </div>
      </div>
      {newsCarousel.view()}
      {latestTopics()}
    </div>
  );
};

export const newsCard = () => {
  return (
    <div className='newsContaner'>
      <div className='newsCard'>
        <div className='newsImage'></div>
        <div className='newsContent'>
          <p className='timeOfNews'>3 hrs ago</p>
          <p className='titleOfNews'>
            2021 FIDE World Chess Championship To Be Hosted By Dubai World ...
          </p>
          <p className='briefNews'>
            The FIDE World Chess Championship between GM Magnus Carlsen and the
            winn...
          </p>
        </div>
      </div>
    </div>
  );
};

const latestTopics = () => {
  return (
    <div>
      <div className='chessContainer'>
        <div class='liveTranHeader liveCardBox'>
          <div>
            <p className='headerIntroText textColor'>Most recent topics</p>
            <p>1 345 topics on forum</p>
          </div>
          <div className='together'>
            <div>
              <p className='headerIntroText mr5px allPuzzle'>all</p>
            </div>
            <div className='forwardArrow'></div>
          </div>
        </div>
      </div>
      {latestTitleContetn()}
    </div>
  );
};

const latestTitleContetn = () => {
  return (
    <div className='mb100px mt2px'>
      <div className='liveTranContainer'>
        <div className='tableContainer'>
          <div className='oddBgc latestForumPosts'>
            <div className='together'>
              <div className='timeRemainFooter titleLatest'>
                How to close account from inactiveness
              </div>
            </div>
            <div className='together'>
              <div className='profilePic goldenProPic mr5px'></div>
              <div className='timeRemainFooter mr5px'>qwerty56 </div>
              <div className='latestTopicTime'>5 min ago</div>
            </div>
          </div>
          <div className='evenBgc latestForumPosts'>
            <div className='together'>
              <div className='timeRemainFooter titleLatest'>
                Post your best miniatures here
              </div>
            </div>
            <div className='together'>
              <div className='profilePic goldenElephent mr5px'></div>
              <div className='timeRemainFooter mr5px'>usernickname</div>
              <div className='latestTopicTime'>5 min ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
