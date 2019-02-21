import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Box as BaseBox,
  Card,
  Flex,
  Image,
  Heading as BaseHeading,
  Link,
  Text as BaseText
} from 'rebass';

const Box = styled(BaseBox)`
  max-width: ${ props => props.maxWidth+'px' || 'default' };
`
const Heading = styled(BaseHeading)`
  font-family: 'Allerta', Helvetica, Arial, sans-serif;
  margin-bottom: 6px;
`

const Text = styled(props => <BaseText className={props.className} fontSize={[2,3,4]} {...props}>{props.children}</BaseText>)`
  font-family: 'Crimson Text', Georgia, Times, serif;
  display: ${ props => props.display || 'block' };
  margin-bottom: 6px;
`

const GlobalStyle = createGlobalStyle`
  html {
    background: rgba(246,245,245,1);
  }
  body {
    position: relative;

    min-height: 100vh;
    margin: 0;

    background: rgba(246,245,245,1);
    background: linear-gradient(168.58032436206258deg, rgba(246, 245, 245,1) 6.140625%,rgba(220, 220, 220,1) 95.51562499999999%);
    color: rgb(50,50,50);
  }

  * { box-sizing: border-box; }
`;

const Ul = styled.ul`
  margin: 0;
`;


const App = props => {
  const history = [
    {
      year: 2002,
      impressum: (
        <Text>At the age of 9, I self-taught HTML and hosted my website on Yahoo! Geocities.</Text>
      ),
      description: (
        <>
          <Text>At the age of 9, I self-taught HTML and hosted my website on Yahoo! Geocities.  I started because I took my parents’ “joke” “maybe the young boys can learn how to make things for the internet by themselves” a little bit too serious.  I still remember how I tweaked the text for the given HTML source and investigated with HTML tag nesting, and the simple file uploader for uploading static assets.</Text>
          <Text>I searched on the internet about how to add “different things” to my website.  For instance, how to “punish” people for right clicking on my website trying to steal my code, by showing many alerts and prompts and new windows… (But that didn’t get saved by <Link href='https://web.archive.org/web/20021230155709/http://hk.geocities.com/sunny_ex2003/'>web archive</Link>)</Text>
          <Text>Oh I even figured out there are <Link href='https://web.archive.org/web/20021229011139/http://3url.net/sunny/'>URL shorteners</Link> out there (note the URL)!</Text>
        </>
      )
    },
    {
      year: 2003,
      impressum: (
        <Text>I created little Flash games that:
          <Ul>
            <li>Shows our main character.  Listens to keydown events and shows off different super moves (a-z, 0-9, 36 moves!).</li>
            <li>“Avoid the borders”.  Whenever mouseover the drawn path, the “Game over” animation is played.</li>
          </Ul>
        </Text>
      ),
      description: (
        <>
          <Text>
          My mum helped me to get Macromedia Flash (is that Flash MX?) books from the Adult Library (now Flash belongs to Adobe).  I created little Flash games that:
            <Ul>
              <li>Shows our main character.  Listens to keydown events and shows off different super moves (a-z, 0-9, 36 moves!).</li>
              <li>“Avoid the borders”.  Whenever mouseover the drawn path, the “Game over” animation is played.</li>
            </Ul>
          </Text>

          <Text>And I was very interested about <Link href='http://lf2.net'>LF2</Link> mods.  Learnt about LF2 mods with my friends -- of course about how to make our own character “the one” (that won’t die at all).  Even if you have (close to) infinite damage, your attack may be reflected.  Instead of adding cool new moves, I’ve found that removing the “body” (hit detection area) results in true invincibility and also smaller file size.</Text>
        </>
      )
    },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    // {
    //   year: ,
    //   impressum: (
        
    //   ),
    //   description: (
        
    //   )
    // },
    ]
    return (
      <>
        <GlobalStyle />
        <Flex m={[3,4,5]} flexDirection='column' alignItems='center'>
          <Heading m='auto' as='h1' fontSize={[3,4,5]}>About Sunny Pun</Heading>
          <Text>Hello world!  I am a Full-stack JavaScript developer who first touched HTML 16 years ago!</Text>
          <Text>I would say myself extraordinary as I:
            <Ul>
              <li>speak English better than Cantonese (though I am born and raised in Hong Kong and have never left Hong Kong for more than 3 months);</li>
              <li>want to work for helping others -- Yup I care about what I am building;</li>
              <li>always want to learn more about software industry -- including UX and business!</li>
              <li>enjoy playing and reading about programming (in my spare time for sure).  I play <Link href='https://codegolf.stackexchange.com/a/97921/59806'>Code Golf</Link>.</li>
            </Ul>
          </Text>
        </Flex>
        <Box bg='black' color='rgb(230,230,230)'>
          <Box m='auto' p={[3,4,5]} maxWidth={1024}>
            <Heading as='h1' fontSize={[3,4,5]} fontFamily='Arial'>Frameworks are Dispensible</Heading>
            <Text>My current motto. </Text>
            <Text><Text display='inline' color='white' fontWeight='600'>Algorithms</Text> are what are hidden behind the scenes to get problem solved.</Text>
            <Text>Any frameworks, any paradigms, any languages are just a medium that contains the solution.</Text>
          </Box>
        </Box>
        <Flex p={[3,4,5]} flexDirection='column'>
          <Heading as='h1' fontSize={[3,4,5]} alignSelf='center'>A Brief History of Sunny Pun</Heading>
    { history.map( hist => {
      const [ collapse, setCollapse ] = useState(true);
      return (
        <Box my={2} maxWidth={1024} onClick={ _ => setCollapse(!collapse) }>
        <Heading as='h2' fontSize={[2,3,4]}>Year {hist.year} [{collapse?'+':'-'}]</Heading>
        { collapse ? hist.impressum : hist.description}
        </Box>
      )
    } ) }
    { // <Text>


      // Year 2003

      // My mum helped me to get Macromedia Flash (is that Flash MX?) books from the Adult Library (now Flash belongs to Adobe).  I created little Flash games that:
      // Shows our main character.  Listens to keydown events and shows off different super moves (a-z, 0-9, 36 moves!).
      // “Avoid the borders”.  Whenever mouseover the drawn path, the “Game over” animation is played.

      // And I was very interested about LF2 mods.  Learnt about LF2 mods with my friends -- of course about how to make our own character “the one” (that won’t die at all).  Even if you have (close to) infinite damage, your attack may be reflected.  Instead of adding cool new moves, I’ve found that removing the “body” (hit detection area) results in true invincibility and also less file size.

      // Year 2004

      // LF2 is not the only game that I played.  I enjoyed playing little games online (be it flash based or java applet).  One of them is UgameAsia (https://web.archive.org/web/20171114011538/http://ugameasia.com:80/#).  They were hiring game developers and out of nowhere I contacted “someone” there and he became my teacher for Flash.

      // This is also a year which I got First Place in Maths Olympiad (22 questions out of 25 with other students getting the same score), the winner of Speech Festival for Prose Speech (and my mother still hangs that “flag” in our sitting room), and joined the Recorder Team of my primary school.  I am glad that I have teachers who are willing to spend the extra time to form a music composition class.

      // Year 2005

      // This year I was more academic-focused, although I still enjoyed pressing Ctrl+Alt+Del to kill the screen monitoring process to gain myself some freedom during Computer classes.

      // I didn’t completely “stop” about programming.  Like I’ve spent time investigating how others implemented some complicated game flows within the “framework” of LF2, like “press Attack to continue”, otherwise there will be a road block.  (It was implemented by having a hit detector that covers the whole area)  Or like “extra armor”, by creating another hit detector that covers the character’s body.

      // And I learnt about onhittest which returns true when the 2 rectangles overlap (or a point overlaps with a vector shape).  This is the most important event to care about (along with onenterframe which is “for every frame”).

      // Year 2006

      // My first year in secondary school which I’ve spent time making new friends and joining clubs.  Nonetheless, I have taken a class organized by the Computer Club about HTML and JavaScript, which they don’t have enough time to cover cookies (which they promised!) and I showed my enthusiasm.  One of the seniors said he wants me to join them and help the school maintain the website, which I refused as I “don’t wanna pay membership fee”.  The senior laughed and said he should have paid me instead for helping him out.  I don’t exactly remember what happened next -- maybe their workload is not that big to ask for help from the juniors!

      // And finally I learnt the concept of variables in Flash.  All of the games I made before was purely depending on which frame (game state) the game is at and event handlers.  Finally at this age of 13 I have two way bindings!

      // Year 2007

      // I started playing Duel Masters.  Did I start playing Age Of Empires (the Conqueror, so we abbreviated that as AOC) at this age?  I made 2 games that includes a timer and we drag a sprite to avoid damage till the boss is defeated (by the timer, lol).  That’s called ICQ vs My Computer (I & II).

      // A revamped version of my website but in the “Game zone” there are still links to the swfs!
      // https://web.archive.org/web/20091027003244/http://hk.geocities.com/power_place2004/

      // Year 2008

      // I am the last batch of 3-year cohort for University.  So I had 2 public exams before I started my studies in University.  In those public exams, we can use calculators.

      // And I started calculator programming!  With limited memory for the calculator, I trained my mindset about Code Golf.  I have made games on calculator like “Guess the number”, “Number battle”.

      // I have also sold Flash based games (for $5) by sending swf files via Bluetooth.  That game is called “Fifteen Twenty”.

      // Year 2009

      // Friends were going to tutors and got some “secret formulas”.  I started to appreciate program written by others.  For example, for quadratic formulas it seems the optimized version should be “pulling out delta (D)” and return the results as “.5a^-1 * (-b+D” and “-5a^-1 * (-b-D”.  However, by mathematics we have sum of roots as -b/a.

      //   I’ve found others using SD (Statistics Data) mode for saving more variables (By saving as number of entries n and mean of entries).  Then I used complex number to save twice as much (by using the real and imaginary parts), which inspired my polynomial expander.  (Let the user input a polynomial like (X^2+3X+2)(X-5) and then the program returns coefficients of constant, X, X^2, etc..)

      //   Form 4 is the year that I have to decide to let go of Biology in order to pursue my studies in Computer (Named as Computer & Information Technology, abbreviated CIT).

      //   When I sang karaoke, I even sat in front of the computer and opened a notepad.  I used window.moveTo to create a browser earthquake.  It was fun and (some of) my friends marvelled at what I created with just notepad and keyboard.

      //   Year 2010
      //   For CIT, I had to do School Based Assessment (SBA).  My topic is E-class / E-learning Feasibility Study.  Mostly I spent my time preparing for HKCEE (my first public exam, The Hong Kong Certificate of Education Examination).  Of course, I included a Flash game for testing fractions knowledge in the website.

      //   After that, I made the first Flash game that really made myself proud.  That is named “Mistakenly Getting into the Robot Kingdom” (if translated to English).  That’s an “attack” avoidance game and the attack from the sky will kill surrounding enemies when exploded.

      //   (You can find the download link via web archive(https://web.archive.org/web/20091027093037fw_/http://hk.geocities.com/power_place2004/robot.zip))

      //     Year 2011

      //     Form 6 is the year for doing student activities.  I became the Director of Students’ Computer Team (after the team vanished in the school for a handful of years).  We created websites, VBAs for Microsoft Word…  In the end I didn’t do enough promotion and the Team disappeared again.  I was also the Vice-Chairman of Bridge Club, which is still a hobby that I enjoy a lot.  (Logic based strategy game with a little bit of psychics!)

      //     Students’ Computer Team (SCT) Website
      //     (http://sct.wyk.edu.hk/index1.htm)



      //       I started having a part time job as an IT support -- the core job duty was to do server backup.  And while the backup was in progress, I walked around and solved IT issues that colleagues had (including network connection (especially printer connection), software installation (I still remember one of the versions of CoralDraw requires manually deleting a .dll file!  This is a solution not found on the internet but I just deleted the .dll that the software kept complaining about)).

      //       By the way, I was also one of the Centre Assistants during 2011 Population Census, Statistics Department, HKSAR.  I was lucky that I have one of my Students’ Computer Teammate with me and we created a HTML+JS hangman via notepad.

      //       Year 2012

      //       The topic for SBA for Computer Science for HKALE (The Hong Kong Advanced Level Examination) is “Statistical Report Generating System).  What I did is a discussion forum on XAMPP.  I have E-R Diagram, Database Schema, Data-flow diagram, etc..

      //     Having a local server setup was really cool.  I shared my public IP for my friends to pay a visit.  That was the “production feeling” for me at that time -- MySQL, PHP Backend (with a little bit of help from phpMyAdmin) with jQuery + jQueryUI Frontend.

      //     Year 2013
      //     My first year in the University and I definitely joined student activities -- I was the Vice-Chairman, Outlet-development of Campus TV.  I started working as a Part-time Technical Support for my secondary school on weekends (while I kept also working as an IT Support for that company back in 2011!).

      //     This is also the year which I started to be an active member of Christian Choir, HKUSU (till now!).  I helped them rewrite the website, using XML as the data structure so as to separate code from it.  Ajax was used so no complete page reloaded is needed.

      //     Project: Clapmap

      //     Usage: We have done a lot within a day.  Meeting others, drinking water, walking outside.  Or, on the contrary, we can do these instead: meeting no one, staying home, only drinking non-water fluid (like Coke and Coffee, unhealthy though).  Clapmap allows creating & searching tasks that are created by the users (as a community) themselves, and marking what has been done for their lives.  For a task done (no matter how tiny it is), users will be rewarded with a tiny icon (Clap): (according to category)
      //     To put onto their life record (Map).  Thus the name Clapmap.

      //     Idea:
      //     Have no rules and no standards.  (That said, we’ll still do some admin work to monitor which tasks are too far from human morale standards)
      //     Give meaning to your life.  Define your life by what you do.
      //     Alleviate the self-harm / suicidal culture with the sense of achievement
      //     Color Battle!  Let users vote for the “color” for the tasks.

      //     Looking back, if we’ve made it to general public (well, a big IF indeed), we could have involved AI like this:
      //     Do deep learning about human behaviours in the hope of searching special patterns that is worth a separate psychology project.  For example, people may be more inclined to log “drinking (a specific branded drink) for 10 days” but not “drinking more than 2L water for 10 days”.
      //     Do deep learning in clustering tasks -- let the AI learn synonyms.
      //     AI can learn the correlations between emotions / tasks and colors via Color Battle.  (Also implying what one has done may be viewed from a completely different angle in the future, since the color on the map will change)

      //     2014

      //     I had a fruitful year as the Performance Secretary of Christian Choir, HKUSU -- which implies that I am also the chairman for Annual Performance Organizing Committee.

      //     Towards the end of the year, I planned this project with one of my best friends:

      //     VoX

      //     Usage: User records a melody, VoX service quantizes the melody and makes music, and then the user sees if it is good (V), pending approval (o, just wanna check other arrangements out before accepting) or bad (X).

      //     Idea:
      //     1.    Everyone can make music without having a full team
      //     2.    Analyse individual users’ music taste and do targeted marketing
      //     3.    Test new music genres via the app without releasing a CD or teaser on YouTube
      //     4.    Find Music trends by clustering

      //     2015

      //     Tencent Audience’s Favourite (Runner-Up)
      //     Team SnatchIt @ HackUST 2015

      //     Project: SnatchIt (hackUST)

      //     Usage: Tinder for eBay -- sell your items, and your items will be “randomly” shown on other users’ screen, for other users to swipe left and right to either save it to wishlist or to skip it

      //     Idea:
      //     While most data analysis will know “what users love”, we know “what users hate”.  For instance, if we know that the user loves flowers, without knowing that the user hates purple, effort will be wasted in showing Purple Flower Ads.
      //     No more “Selection Paralysis”.  Only 1 item is shown on the screen.  There is no “Comparison” and the user is only presented with the item.  The user has to admit that he / she wants it to know the price, which is a different metric when compared to “User actively searching for a keyword”.  We discover hidden desires.
      //     Developer @ Neto Ecommerce Solutions
      //     (Architecture, Automation Guild)
      //     jQuery Front-end web programming
      //     Perl & PHP Back-end server side programming

      //     2016
      //     Developer of the Month @ Nov
      //     Due to porting JasmineJS Test Framework to Perl and tailor-making test modules to ease refactoring of 7-year-old system

      //     Slackbot for Server Vacancy Management

      //     Project Yose


      //     2017

      //     IntelliJ Plugin

      //     Using Neovim as an Editor and writing Plugins

      //     Chrome Plugin for automating form filling for interal testing

      //     Project: Cantonese Lyrics Experimental Filler (Clef)
      //     P.S. Later to be renamed as Cantonese Lyrics Established Filler

      //     Usage: Ultimately, fill in Cantonese Lyrics with a MIDI input.
      //     Optionally provide existing lyrics in other language (e.g. English) and the result will be in Cantonese with similar meaning

      //     Idea:
      //     Using user-input dictionaries, no need to manually maintain newly invented buzzwords
      //     Analyzing hot keyword trends for the active users, who are also more likely to be active on the internet
      //     Appreciating Cantonese Lyrics as an art
      //     Attempt to push forward Cantonese Natural Language Processing via getting users correcting auto-sliced Cantonese sentences
      //     Building foundation for translation services from other languages to Cantonese

      //     2018

      //     Senior Architect @ Pred
      // </Text>
    }
      </Flex>
    {
      // <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
      // <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.919 1.263C4.783.84 4.185.84 4.05 1.26L1.386 9.449.044 13.587c-.121.375.014.789.331 1.023L12 23.054l11.625-8.443c.318-.235.453-.647.33-1.024" />
      // </svg>
      // <svg
      // width="25"
      // xmlns="http://www.w3.org/2000/svg"
      // role="img"
      // viewBox="0 0 24 24"
      // >
      // <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z" />
      // </svg>
    }
    </>
  );
};

export default App;
