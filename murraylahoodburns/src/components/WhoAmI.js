import React from 'react';

import Title from './Title';
import Header from './Header';
import Text from './Text';
import LinkContainer from './LinkContainer';
import MyLink from'./MyLink';

const WhoAmI = () => {
  return (
    <div className="container">
      <Title>
        Who are you?
      </Title>
      <Header>
        That guy.
      </Header>
      <div className="text-center">
        <img src="/images/druids-arch.jpg" className="mw-100 rounded" alt="Druids Arch"/>
      </div>
      <Header>
        That's me.
      </Header>
      <Text>
        I grew up in the Black Hills, running around waving sticks on the family tree farm. I went to school in Piedmont and Sturgis, and quietly made it through about grade 11 before I was finally discovered by the other students, and was forced to interact with other people.
        <br/>
        <br/>
        Horrible. 
        <br/>
        <br/>
        I guess running around waving sticks didn't translate into social skills or dribbling a basketball, but for some reason did work out for writing computer programs. I ended up spending four years at an institution for the socially awkward, SDSM&T. The mantra of the school was to punish our lack of confidence with sadistic chemistry labs and mathematics. It worked, as we were soon confident we had made a huge mistake in going to a school that was 75% male.
        <br/>
        <br/>
        After graduating from Mines, I worked a few months in industry before deciding to go back to the family business, <a href="https://earthorizons.com" target="_blank">earthorizons</a>.
        In my free time I enjoy mountain biking, climbing, reading, <a href="http://hsbh.org/support-us/volunteer/" target="_blank"> walking dogs at the humane society</a>, and converting my cargo van into a camper.
        <br/>
      </Text>
      <LinkContainer>
        <MyLink to="/">
          Hello
        </MyLink>
      </LinkContainer>
    </div>
  );
}

export default WhoAmI;
