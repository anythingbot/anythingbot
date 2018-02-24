(function () {
  'use strict';
  var define = require('amdefine')(module);

  var deps = ['./power_cycle'];

  define(deps, function (power_cycle) {

    var PLs = {
      'today' : [
        [ 'soundcloud', 'The Buddha Did Not Teach Oneness',
          'https://soundcloud.com/dbp-5/the-buddha-did-not-teach-onenes', '310428334',
          0,27,54, ],
        [ 'youtube', 'AJAHN CHAH - WHY ARE WE HERE',
          'https://www.youtube.com/watch?v=ZQqF5JIM0fk', 0,26,29 ],
        [ 'youtube', '040920 Disenchantment & Dispassion \\ \\ Thanissaro Bhikkhu \\ \\ Dhamma Talks',
          'https://www.youtube.com/watch?v=k8M-_Msav1Q', 0,13,19 ]
      ],
      'please be precise about how it jeopardizes our national security' : [
        [ 'youtube', 'ERIC SWALWELL FULL ONE-ON-ONE INTERVIEW WITH TUCKER CARLSON (2/2/2018)',
          'https://www.youtube.com/watch?v=z-9HR62il_Q', 0, 6, 58 ]
      ],
      'illegal' : [[ 'youtube', '骨架的 : Illegal Antenna', 'https://www.youtube.com/watch?v=LzAOy7JpP2M', 0,35,26 ]],
      'reflection' : [[ 'youtube', '骨架的 : Reflections', 'https://www.youtube.com/watch?v=8Mjc5SJyIUI', 0,40,13 ]],
      'peace' : [
        [ 'youtube', 'Ajahn Chah - Unshakeable Peace',
          'https://www.youtube.com/watch?v=AuntIeOrKho', 1,46,57 ]
      ],
      'Jewish or British negotiation' : [
        [ 'youtube', 'The Princess Bride (7/12) Movie CLIP - The Torture Machine (1987) HD',
          'https://www.youtube.com/watch?v=JFo6iLDNzX0', 0,2,47 ]
      ],
      'the Jewish or British love to fuck kids' : [
        [ 'youtube', 'Frosty the Snowman | 1969 | HD | 1080p | Full Movie | Christmas Movies for Kids',
          'https://www.youtube.com/watch?v=N6p6LRtQ2WY', 0,25,27 ]
      ],
      'depression' : [
        [ 'youtube', 'TESTING A DOG SHOCK COLLAR ON A HUMAN',
        'https://www.youtube.com/watch?v=DDWk_EW7mrg', 0,3,45 ]
      ],
      'storm': [
        [ 'youtube', 'Ajahn Chah - Mindful Way',
          'https://www.youtube.com/watch?v=qu7mtlbVBOA', 0,6,40 ]
      ],
      'weekday' : [
        [ 'youtube', 'ELECTRONIC GETTING AWAY WITH IT', 'https://www.youtube.com/watch?v=bSP1EPfXxsQ', 0,4,23, ],
        [ 'youtube', 'Level 42 - Something About You', 'https://www.youtube.com/watch?v=E-zP66eSLto', 0,3,43, ],
        [ 'youtube', 'Pet Shop Boys - West End Girls', 'https://www.youtube.com/watch?v=p3j2NYZ8FKs', 0,3,55, ],
        [ 'youtube', 'Erasure Chains of Love (Official Video)', 'https://www.youtube.com/watch?v=uttV1VZUgQQ', 0,3,41, ],
        [ 'youtube', 'Dubstar - Stars', 'https://www.youtube.com/watch?v=b-x6ywUqVvk', 0,4,10, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 01 Technology 147',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-01-technology-147', '327823687', 0,2,18, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 02 Erotism 232',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-02-erotism-232', '327823793', 0,2,41, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 03 Entertainment 284',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-03-entertainment-284', '327823939', 0,2,5, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 04 Automotive 305',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-04-automotive-305', '327824046', 0,2,15, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 05 Music 385',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-05-music-385', '327824213', 0,2,22, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 06 Travel 401',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-06-travel-401', '327824341', 0,1,39, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 07 Weather 421',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-07-weather-421', '327824470', 0,2,0, ],
        [ 'youtube', 'Dynamic Intervention - Out of It (Original Hoover Mix)',
          'https://www.youtube.com/watch?v=-70qioFRCL4', 0,7,43, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 01 Technology 147',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-01-technology-147', '327823687', 0,2,18, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 02 Erotism 232',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-02-erotism-232', '327823793', 0,2,41, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 03 Entertainment 284',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-03-entertainment-284', '327823939', 0,2,5, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 04 Automotive 305',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-04-automotive-305', '327824046', 0,2,15, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 05 Music 385',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-05-music-385', '327824213', 0,2,22, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 06 Travel 401',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-06-travel-401', '327824341', 0,1,39, ],
        [ 'soundcloud', 'Voltage - Teletext INDEX - 07 Weather 421',
          'https://soundcloud.com/anythingbot/voltage-teletext-index-07-weather-421', '327824470', 0,2,0, ],
        [ 'youtube', 'Aaron Copland - Appalachian Spring, Rodeo, Billy the Kid, Fanfare for the Common Man',
          'https://www.youtube.com/watch?v=SNZs82BZ9R8', 1,7,27, ],
        [ 'soundcloud', 'Steve Mill - Abandoned Fields (Neil Quigley Pacemaker Remix)',
          'https://soundcloud.com/caro_caro/steve-mill-abandoned-fields-neil-quigley-pacemaker-remix',
          '3538937', 0,8,31, ],
        [ 'youtube', 'Darshan Ambient - Selfless (ambient relaxation)',
          'https://www.youtube.com/watch?v=o0Trh6PZ9mM', 0,17,10, ],
        [ 'soundcloud', 'Modernism', 'https://soundcloud.com/fozyofficial/modernism', '216437094', 0,4,40, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges',
          'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'Redanka - Waves (E-Mission Mix)',
          'https://www.youtube.com/watch?v=Ego9o9OYp0o', 0,8,41, ],
        [ 'youtube', '090407 The Five Hindrances \\ \\ Thanissaro Bhikkhu \\ \\ Dhamma Talks',
          'https://www.youtube.com/watch?v=UfprOkjdukw', 0,16,47, ],
        [ 'youtube', 'Star Trek: The Next Generation - S5E25 The Inner Light (1992)',
          'https://www.youtube.com/watch?v=RQKp27ZDuCk', 0,4,3, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges',
          'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'The Secret of Tremendous Corporation',
          'https://www.youtube.com/watch?v=SZMGCxnUQx8', 0, 1,42, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges',
          'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'PFUDOR metal',
          'https://www.youtube.com/watch?v=orrGbZaPgwY', 0,1,59, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges',
          'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'RAVE ON The Eye Tech (96 min.) - Part 2',
          'https://www.youtube.com/watch?v=HnumP8hghV4', 1,36,34, ],
        [ 'youtube', 'Lecture 1B | MIT 6.001 Structure and Interpretation, 1986',
          'https://www.youtube.com/watch?v=dlbMuv-jix8', 0,58,21, ],
        [ 'youtube', 'MTV Original Broadcast 8/1/1981',
          'https://www.youtube.com/watch?v=XBf0yJVMSzI', 0,1,52, ],
        [ 'youtube', 'Suzanne Ciani - "The Fifth Wave: Water Lullaby" (1982)',
          'https://www.youtube.com/watch?v=wgJfXeGqNEY', 0,5,47, ],
        [ 'youtube', 'Suzanne Ciani - The Eighth Wave',
          'https://www.youtube.com/watch?v=WXZqnGG_lvY', 0,5,10, ],
        [ 'youtube', 'Suzanne Ciani - The Seventh Wave: Sailing Away',
          'https://www.youtube.com/watch?v=06nWn98x_ek', 0,6,37, ],
        [ 'youtube', 'K-Billy\'s Super Sounds of the 70\'s',
          'https://www.youtube.com/watch?v=-zQmPJwCESI', 0,54,1, ],
        [ 'youtube', 'Journey To The Sun - Adham Shaikh (Full Album)',
          'https://www.youtube.com/watch?v=bA9eoAWuT-w', 1,7,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'How to get the anythingbot to play your video',
          'https://www.youtube.com/watch?v=PyGADsVBa6I', 0,1,21, ],
        [ 'youtube', 'Miracle Max', 'https://www.youtube.com/watch?v=D9tAKLTktY0', 0,4,26, ],
        [ 'youtube', 'AYYA KHEMA - DUKKHA', 'https://www.youtube.com/watch?v=cw7Xg8appRk', 0,44,57, ],
        [ 'youtube', 'Gloria Estefan~ Conga FULL HQ',
          'https://www.youtube.com/watch?v=g8v6cZ21vlc', 0,4,15, ],
        [ 'youtube', 'The Alan Parsons Project- Eye in the Sky',
          'https://www.youtube.com/watch?v=NNiie_zmSr8', 0,4,39, ],
        [ 'youtube', 'Technasia - Force', 'https://www.youtube.com/watch?v=GKEdgf7IDXE', 0,7,41, ],
        [ 'youtube', 'Helter Skelter Rave 1996 Part 2 of 19',
          'https://www.youtube.com/watch?v=tACyvIZRXq0', 0,7,21, ],
        [ 'youtube', 'Eb (Original Mix)', 'https://www.youtube.com/watch?v=w4RtJbGNmz8', 0,6,5, ],
        [ 'youtube', 'LeAnn Rimes - Some Say Love', 'https://www.youtube.com/watch?v=JZ2jNGRXIIw', 0,3,35, ],
        [ 'youtube', 'X-1999 Forever Love', 'https://www.youtube.com/watch?v=_QAFVhGzYpY', 0,8,34, ],
        [ 'youtube', 'Donna Summer - I Feel Love', 'https://www.youtube.com/watch?v=g0tenPCmHFk', 0,5,39, ],
        [ 'youtube', 'Mystical Sun - Journey To Samadhi',
          'https://www.youtube.com/watch?v=rEnF1IsI7Nk', 0,32,26, ],
        [ 'youtube', 'Mystical Sun - Journey To Samadhi',
          'https://www.youtube.com/watch?v=rEnF1IsI7Nk', 0,32,26, ],
        [ 'youtube', 'Journey to the Far Side of the Sun 1969 720p BluRay x264 YIFY - full movie',
          'https://www.youtube.com/watch?v=EYvTAMMKjsw', 1,24,22, ]
      ],
      'cat' : [
        [ 'image' , '<3', 'https://i.pinimg.com/236x/96/11/1b/96111bda63ad53089f280d3f9b148d79--patchwork-quilt-scrappy-quilts.jpg', 0,0,30 ],
        [ 'youtube', 'Paula Abdul - Opposites Attract',
          'https://www.youtube.com/watch?v=xweiQukBM_k', 0,3,48 ]
      ],
      'category' : [
        [ 'youtube', 'Serena Van der Woodsen - the bitch is back - Break the rules -',
          'https://www.youtube.com/watch?v=jPUxDzxGH8E', 0,3,22 ],
        [ 'youtube', 'Serena -"popular"',
          'https://www.youtube.com/watch?v=kxzkNC7pFJQ', 0,2,42 ],
        [ 'youtube', 'Gossip Girl- Serena Van der Woodsen- Cuz I Can',
          'https://www.youtube.com/watch?v=yppAghdmoM4', 0,3,46 ]
      ],
      'cambodia' : [
        [ 'youtube', 'Khmer Rouge Cambodian genocide(full documentary)HD',
          'https://www.youtube.com/watch?v=KjlprjZ-Ews', 0,51,48 ]
      ],
      'paint' : [
        [ 'instagram', 'Sometimes you just gotta play!!!!!! 🤓😜💋💅🏻👩‍🎨🎨👯👗👛👒👠🦄🦋🐠🌹💥💥',
          'https://www.instagram.com/p/BaMu4zTlqez/',
          'Britney Spears', 'britneyspears',
          '2017-10-13T18:53:57+00:00', 'Oct 13, 2017 at 11:53am PDT',
          0,3,30
        ]
      ],
      'me' : [
        [ 'personality', 0,0,15 ],
        [ 'youtube', 'Ode To Joy',
          'https://www.youtube.com/watch?v=xpcUxwpOQ_A', 0,1,40 ]
      ],
      'Not Safe' : [
        [ 'youtube', 'Not Safe',
          'https://www.youtube.com/watch?v=Py388wRuNMo', 0,2,33 ]
      ],
      'HKE' : [
        [ 'youtube', 'Jocelyn Pook - Hell, Fire & Damnation',
          'https://www.youtube.com/watch?v=9QEG2Mk184A', 0,9,22 ]
      ],
      'BJS' : [
        [ 'youtube', 'Somebody\'s Getting Married - The Muppets Take Manhattan',
          'https://www.youtube.com/watch?v=bFw4L7-AFdw', 0,1,51 ],
        [ 'youtube', '*OLD SKOOL* THE ILLEGAL WAREHOUSE RAVES 88-90',
          'https://www.youtube.com/watch?v=HGvDnpomAaI', 0,8,21 ],
        [ 'youtube', 'Diogenes Club - Jaunt (Harry Peat Remix)',
          'https://www.youtube.com/watch?v=l2XsDE-YVO8', 0,9,18 ],
        [ 'dailymotion', 'Diamonds are a girl\'s best friend',
          'http://www.dailymotion.com/video/x2ls94', 0,4,11 ]
      ],
      'mkultra' : [
        [ 'youtube', 'CIA, FBI, NSA SECRET PSYOPS MK ULTRA NEW PHOENIX ELF WAVES',
          'https://www.youtube.com/watch?v=6VID7Mo13cA', 3,9,58 ]
      ],
      'strange gene transit' : [
        [ 'youtube', 'The Strangest Secret by Earl Nightingale',
          'https://www.youtube.com/watch?v=EFhkdzj-x80', 0,31,35 ]
      ],
      'lsd' : [
        [ 'youtube', 'Holocaust Einsatzgruppen Pogroms',
          'https://www.youtube.com/watch?v=wb5pT9Ks7SY', 0,4,19 ]
      ],
      'lodoss' : [
        [ 'dailymotion', '(360P - mp4)Record of Lodoss War Episode 1',
          'http://www.dailymotion.com/video/x510sid', 0,24,32 ]
      ],
      'leroy' : [
        [ 'youtube', 'Lenny De Ice - Leroy',
          'https://www.youtube.com/watch?v=cQxONcqCcnE', 0,5,50 ]
      ],
      'node' : [
        [ 'image', 'questionmark', 'https://i.imgur.com/9QhfvOW.png', 0,0,15 ]
      ],
      'npm' : [
        [ 'image', 'questionmark', 'https://i.imgur.com/9QhfvOW.png', 0,0,15 ]
      ],
      'javascript' : [
        [ 'image', 'questionmark', 'https://i.imgur.com/9QhfvOW.png', 0,0,15 ]
      ],
      'hard' : [
        [ 'youtube', 'Jay B Vs Nick Lunn - Free Your Mind',
          'https://www.youtube.com/watch?v=H9IdBb1nhK8', 0,9,12 ],
        [ 'youtube', 'The Crow - What Ya Lookin At (Bulletproof Remix)',
          'https://www.youtube.com/watch?v=bSRpaI-r8NM', 0,8,11 ],
        [ 'youtube', 'Ace The Space - 9mm Is A Classic (Disco Brothers Mix)',
          'https://www.youtube.com/watch?v=tAeJcbJXmbs', 0,6,26 ]
      ],
      'pogrom' : [
        [ 'youtube', 'Kali Ma - Indiana Jones and the Temple of Doom',
          'https://www.youtube.com/watch?v=R0S8JZ6YO5c', 0,2,14 ],
        [ 'youtube', 'The Matrix, not like this...',
          'https://www.youtube.com/watch?v=QGc-iPc-9dE', 0,0,18 ],
        [ 'youtube', 'Ｐｕｍｐｅｄ Ｕｐ Ｋｉｃｋｓ ＶＡＰＯＲＷＡＶＥ (若者が履く流行のスニーカー)',
          'https://www.youtube.com/watch?v=wj9Y0vGxTGE', 0,6,12 ],
        [ 'youtube', 'Obadiah takes arc reactor from Tony',
          'https://www.youtube.com/watch?v=TF_vJgMBtOk', 0,2,32 ],
        [ 'youtube', 'The birth of Galvatron_The death of Starscream',
          'https://www.youtube.com/watch?v=jUE0f7j_T2s', 0,6,34 ],
        [ 'youtube', 'BBC\'s Racism: History- A lynching in Texas in 1916',
          'https://www.youtube.com/watch?v=CiyQFG6uHgg', 0,3,21 ]
      ],
      'nazi' : [
        [ 'image', 'questionmark', 'https://i.imgur.com/9QhfvOW.png', 0,0,15 ],
        [ 'youtube', 'diplomat', 'https://www.youtube.com/watch?v=wwYFjf-DL4w', 0,3,0 ]
      ],
      'Y' : [
        [ 'youtube', 'Veruca Salt: I Want It Now! (Willie Wonka & the Chocolate Factory) 1971',
          'https://www.youtube.com/watch?v=Pqsy7V0wphI', 0,3,4 ]
      ],
      'no' : [
        [ 'youtube', 'Nancy Reagan\'s "Just Say No" To Drugs Now Part Of Her Legacy',
          'https://www.youtube.com/watch?v=clv4cfjIgLE', 0,0,48 ]
      ],
      'candy' : [
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
        [ 'youtube', '50 Cent - Candy Shop ft. Olivia',
          'https://www.youtube.com/watch?v=SRcnnId15BA', 0,4,10 ],
      ],
      'nato' : [
        [ 'image', 'NATO',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NATO_OTAN_portrait_logo.svg/256px-NATO_OTAN_portrait_logo.svg.png', 0,0,30 ]
      ],
      'there' : [
        [ 'youtube', 'John Hughes commentary - The Museum scene from Ferris Bueller\'s Day Off',
          'https://www.youtube.com/watch?v=p89gBjHB2Gs', 0,1,58 ]
      ],
      'Psi' : [
        [ 'youtube', 'Jay B Vs Nick Lunn - Free Your Mind',
          'https://www.youtube.com/watch?v=H9IdBb1nhK8', 0,9,12 ]
      ],
      'curious' : [
        [ 'youtube', 'Walrus and the Carpenter',
          'https://www.youtube.com/watch?v=00WCEbKM_SE', 0,5,55 ]
      ],
      'jump' : [
        [ 'youtube', 'Dimensional Jumping Enhancement | Powers Subliminal',
          'https://www.youtube.com/watch?v=tOb6ixuNCnc', 0,5,40 ]
      ],
      'hormones' : [
        [ 'youtube', 'hormones',
          'https://www.youtube.com/watch?v=BPTfyLDxglY', 0,4,22 ]
      ],
      'waterfall' : [
        [ 'youtube', 'The Emperors New Groove Waterfall Scene',
          'https://www.youtube.com/watch?v=fhOrxkGlLDM', 0,0,18 ]
      ],
      'bad' : [
        [ 'youtube', 'Bad Motherfucker', 'https://www.youtube.com/watch?v=bc6C7iuIVpU', 0,8,3 ]
      ],
      'blue' : [
        [ 'youtube', 'New Order Blue Monday', 'https://www.youtube.com/watch?v=ftJZomwDhxQ', 0,4,30 ],
        [ 'youtube', 'Robert Miles - Children [Dream Version]', 'https://www.youtube.com/watch?v=CC5ca6Hsb2Q', 0,7,32 ],
      ],
      'attack' : [
        [ 'youtube', 'President George H.W. Bush - Address to the Nation on Panama',
          'https://www.youtube.com/watch?v=eCd-jHBQ-vc', 0,6,35 ],
        [ 'youtube', 'attack', 'https://www.youtube.com/watch?v=uaEy4Fp7zu8', 0,10,1 ]
      ],
      'water' : [
        [ 'youtube', 'TLC - Waterfalls', 'https://www.youtube.com/watch?v=8WEtxJ4-sh4', 0,5,14 ]
      ],
      'walrus' : [
        [ 'youtube', 'Walrus and the Carpenter', 'https://www.youtube.com/watch?v=00WCEbKM_SE', 0,5,55 ]
      ],
      'chaosbotgroup' : [
        [ 'youtube', '1943 Chicken Little', 'https://www.youtube.com/watch?v=3HR9vqx9oTQ', 0,9,43 ]
      ],
      'genocide' : [
        [ 'youtube', 'genocide', 'https://www.youtube.com/watch?v=b0lfN4ljY30', 0,7,23 ]
      ],
      'burn' : [
        [ 'youtube', 'burn', 'https://www.youtube.com/watch?v=ofDui72G6gw', 0,4,55 ]
      ],
      'puck' : [
        [ 'youtube', 'Puck (\'Real World\') on Howard Stern Radio Show interview 2000',
          'https://www.youtube.com/watch?v=utWetL7JgZw', 0,19,23 ]
      ],
      'tv' : [
        [ 'youtube', 'Midnight Television : Midnight Television',
          'https://www.youtube.com/watch?v=MBWIlv6jKiE', 0,10,15 ]
      ],
      'prog' : [
        [ 'youtube', 'Unscheduled Programming //: V A P O R W A V E MIX 2017',
          'https://www.youtube.com/watch?v=r_-Mc3rlovY', 0,35,11 ]
      ],
      'gang' : [
        [ 'youtube', 'べたTOPAZ GANG: MARIMBA (FROM KEATS//COLLECTIVE Vol. 4)',
          'https://www.youtube.com/watch?v=Hs09RnBbYow', 0,3,9 ]
      ],
      'rigorous demonstration' : [
        [ 'shift', 0,6,15, 'youtube', 'Destroying the Black Knight', 'https://www.youtube.com/watch?v=f5MC4Ht679E', 0,7,15 ]
      ],
      'keyhole' : [
        [ 'soundcloud', 'Patent 1 - Self Actualize', 'https://soundcloud.com/chaosbot-group/patent-1','331776331', 0,7,32 ],
        [ 'soundcloud', 'Patent 2 - Process', 'https://soundcloud.com/chaosbot-group/patent-2','331776711', 0,5,59 ],
        [ 'soundcloud', 'Patent 3 - Readdress', 'https://soundcloud.com/chaosbot-group/patent-3','331777464', 0,7,32 ],
        [ 'soundcloud', 'Patent 4 - Transcend', 'https://soundcloud.com/chaosbot-group/patent-4','331777747', 0,8,47 ],
        [ 'soundcloud', 'Patent 5 - Sorry! Program failure!', 'https://soundcloud.com/chaosbot-group/patent-5','331777845', 0,4,54 ],
      ],
      'door': [
        [ 'youtube', 'Alice In Wonderland Doorknobs', 'https://www.youtube.com/watch?v=di7dZwidXZU', 0,3,13 ]
      ],
      'psychology' : [
        [ 'story', 'bahiya1', 0,0,40 ],
        [ 'story', 'bahiya2', 0,0,40 ],
        [ 'story', 'bahiya3', 0,0,40 ],
        [ 'story', 'bahiya4', 0,0,40 ],
        [ 'story', 'bahiya5', 0,0,40 ],
        [ 'story', 'bahiya6', 0,0,40 ],
        [ 'story', 'bahiya7', 0,0,40 ],
        [ 'story', 'bahiya8', 0,0,40 ],
        [ 'story', 'bahiya9', 0,0,40 ],
        [ 'story', 'bahiya10', 0,0,40 ],
        [ 'story', 'bahiya11', 0,0,40 ],
        [ 'story', 'bahiya12', 0,0,40 ],
        [ 'youtube', '1943 Chicken Little',
          'https://www.youtube.com/watch?v=3HR9vqx9oTQ', 0,9,43 ],
        [ 'youtube', 'Niccolo Machiavelli - BBC Documentary 720p',
          'https://www.youtube.com/watch?v=wsMs-DuGy1o', 0,59,12 ],
        [ 'youtube', 'The Milgram Experiment 1962 Full Documentary',
          'https://www.youtube.com/watch?v=ek4pWJ0_XNo', 0,44,26 ],
        [ 'youtube', 'This is a piece of footage from stanford experiment',
          'https://www.youtube.com/watch?v=JOO8kke00Cc', 0,19,4 ],
        [ 'youtube', 'Rock confronts Tima about her identity (Metropolis 2001)',
          'https://www.youtube.com/watch?v=pFaDjbll5LE', 0,2,28 ],
        [ 'youtube', 'The Ziggurat Throne part 1',
          'https://www.youtube.com/watch?v=D_G_wW0ZIvY', 0,4,24 ],
        [ 'youtube', 'The Ziggurat Throne part 2',
          'https://www.youtube.com/watch?v=ui9cbw4Swyo', 0,4,34 ],
        [ 'shift', 0,32,32, 'youtube', 'The Outer Limits ( 1963-65 ) S01E04 - The Man with the Power',
          'http://www.dailymotion.com/video/x4jj140', 0,35,0 ],
        [ 'youtube', 'The Lawnmower Man telephone end',
          'https://www.youtube.com/watch?v=mWdlNTrz2oM', 0,0,25 ],
        [ 'youtube', 'Off Shore - I Can\'t Take The Power',
          'https://www.youtube.com/watch?v=1LPmqR8CVCE', 0,5,59 ],
        [ 'youtube', 'Deorro x Chris Brown - Five More Hours (Official Video)',
          'https://www.youtube.com/watch?v=j3CaHeakZF4', 0,4,46 ],
        [ 'youtube', 'Selena Gomez - Good For You',
          'https://www.youtube.com/watch?v=1TsVjvEkc4s', 0,3,14 ],
        [ 'youtube', 'Bach: Brandenburg Concerto No. 5 in D major, BWV 1050 (Freiburger Barockorchester)',
          'https://www.youtube.com/watch?v=_V7oujd9djk', 0,19,43 ],
        [ 'youtube', 'AJAHN CHAH - WHY ARE WE HERE',
          'https://www.youtube.com/watch?v=ZQqF5JIM0fk', 0,26,29 ],
        [ 'youtube', 'Ajahn Chah - Training the Mind (English Reading Audio)',
          'https://www.youtube.com/watch?v=GATd4JUX6G4', 0,57,2 ],
        [ 'youtube', 'AJAHN CHAH - THE NATURAL MIND',
          'https://www.youtube.com/watch?v=WstNfNgYhkA', 0,41,35 ],
        [ 'youtube', 'Ajahn Chah - Speaking Straight on Meditation and Sila (in Thai & English)',
          'https://www.youtube.com/watch?v=4fgK-1Lxx5M', 1,22,17 ],
        [ 'story', 'bahiya1', 0,0,40 ],
      ],
      'whip' : [
        [ 'youtube', 'Devo - Whip It (Video)',
          'https://www.youtube.com/watch?v=j_QLzthSkfM', 0,2,46 ]
      ],
      'GRAND TOURER' : [
         [ 'image', 'GRAND TOURER', 'http://anythingbot.org/GT3.png',0,0,30 ],
         [ 'shift', 0,1,40, 'youtube',
           'Star Trek: Nemesis Deleted Scene (Chateau Picard 2267)',
           'https://www.youtube.com/watch?v=Vxyd7L-2YuQ', 0,5,45 ],
         [ 'youtube', 'Little Pond of Goo',
           'https://www.youtube.com/watch?v=YLyqTtrhUJE', 0,0,46 ],
         [ 'youtube', 'STNG - "Q" as judge of humanity',
           'https://www.youtube.com/watch?v=-UqNIOc8rgc', 0,2,56 ],
         [ 'youtube', 'The Exploration that Awaits Us',
           'https://www.youtube.com/watch?v=1SmLHecAlDg', 0,2,28 ],
         [ 'youtube', 'Earth Star Voyager - Climax',
           'https://www.youtube.com/watch?v=IDVzm-pCR6g', 0,2,4 ],
         [ 'youtube', 'Star Trek: The Next Generation All Good Things Final Scene (BLUERAY HD)',
           'https://www.youtube.com/watch?v=mt3MVP3FizQ', 0,2,55 ],
         [ 'image', 'GRAND TOURER', 'http://anythingbot.org/GT3.png',0,0,30 ],
         [ 'youtube', 'Aquaculture - Life Moves (Blue Effect Remix)',
           'https://www.youtube.com/watch?v=WpRS68d3u0c', 0,10,7 ],
      ],
      'math' : [
        [ 'story', 'math', 0,5,0 ],
        [ 'puzzle', '???', 'story', 'goldstar', 0,5,0 ]
      ],
      'ellison' : [
        [ 'youtube', 'Larry Ellison USC Commencement Speech | USC Commencement 2016',
          'https://www.youtube.com/watch?v=5DJaWWwITRM', 0,23,40 ],
        [ 'youtube', 'This Is Water - Full version-David Foster Wallace Commencement Speech',
          'https://www.youtube.com/watch?v=8CrOL-ydFMI', 0,22,43 ],
        [ 'youtube', 'After watching this, your brain will not be the same | Lara Boyd | TEDxVancouver',
          'https://www.youtube.com/watch?v=LNHBMFCzznE', 0,14,24 ],
        [ 'youtube', 'Mathematics and sex | Clio Cresswell | TEDxSydney',
          'https://www.youtube.com/watch?v=H2vN2QXZGnc', 0,13,1 ],
        [ 'youtube', 'The Bard\'s Tale Mac Version Gameplay',
          'https://www.youtube.com/watch?v=K7qFvgrZ9I8', 0,5,27 ],
        [ 'youtube', 'Diogenes Club - Jaunt (Harry Peat Remix)',
          'https://www.youtube.com/watch?v=l2XsDE-YVO8', 0,9,18 ],
        [ 'soundcloud', 'Actual Utopia',
          'https://soundcloud.com/vapor-bleep/actual-utopia', '241482020', 0,5,23 ],
        [ 'soundcloud', 'The Paradise Complex',
          'https://soundcloud.com/vapor-bleep/the-paradise-complex', '241692918', 0,14,53 ],
        [ 'soundcloud', 'The Paradise Complex',
          'https://soundcloud.com/vapor-bleep/the-paradise-complex', '241692918', 0,14,53 ],
        [ 'shift', 0,24,40, 'youtube', 'Computer Dreams (1988)',
          'https://www.youtube.com/watch?v=HL0RH3x7Zzo', 0,46,26 ],
        [ 'youtube', 'Rat Movie 2: The Movie',
          'https://www.youtube.com/watch?v=mNy9HIo3shs', 0,9,15 ],
        [ 'dailymotion', 'The State MTV: Louie "I Wanna Dip My Balls..."',
          'http://www.dailymotion.com/video/x2ndjdw', 0,3,46 ],
        [ 'youtube', 'Vidapura (Main mix) Human Movement',
          'https://www.youtube.com/watch?v=xfaH3wu_e6w', 0,3,36 ],
        [ 'youtube', 'Shaggy - Angel ft. Rayvon',
          'https://www.youtube.com/watch?v=XWJrPzAUzAs', 0,3,56 ],
        [ 'youtube', 'VHS Logos - Marinate Mix',
          'https://www.youtube.com/watch?v=yLIJ6xlNSEU', 0,9,51 ],
        [ 'youtube', 'Louis \'Sabu\' Martinez - Safari',
          'https://www.youtube.com/watch?v=wYqNT0DSQ2g', 0,10,31 ],
        [ 'youtube', 'Macbeth Polanski 1971 Witches Opening',
          'https://www.youtube.com/watch?v=WZcFnZ2ZMR0', 0,3,4 ],
        [ 'youtube', 'Limahl The Never Ending Story Extended Version 1984',
          'https://www.youtube.com/watch?v=XvbkMpssrjU', 0,8,18 ],
      ],
      'archive' : [
        [ 'youtube', 'Dream Wave - Lift Off (Sam-Pling\'s Remix)',
          'https://www.youtube.com/watch?v=24rZEKpAykg', 0,6,41 ]
      ],
      'in our hands' : [
        [ 'archive', 'In Our Hands, Part 3: How To Lose What We Have',
          'https://archive.org/details/InOurHan1950_3', 0,11,53 ]
      ],
      'KRONOS' : [
        [ 'archive', 'Kronos ( 1957)',
          'https://archive.org/details/Kronos', 1,18,24 ]
      ],
      'sun' : [
        [ 'youtube', 'Mystical Sun - Journey To Samadhi',
          'https://www.youtube.com/watch?v=rEnF1IsI7Nk', 0,32,26 ],
        [ 'youtube', 'Journey To The Sun - Adham Shaikh (Full Album)',
          'https://www.youtube.com/watch?v=bA9eoAWuT-w', 1,7,35 ],
        [ 'youtube', 'Santosh Part 1',
          'https://www.youtube.com/watch?v=mJrigTYAz1A', 0,26,49 ],
        [ 'youtube', 'Santosh Part 2',
          'https://www.youtube.com/watch?v=Hhd8Mg7o5ig', 0,26,21 ]
      ],
      'choke' : [
        [ 'youtube', 'Darth Vader "you have failed me for the last time" - Full Scene HD 1080p',
          'https://www.youtube.com/watch?v=aV2DLkDPwM8', 0,1,11 ],
        [ 'youtube', 'The Emperor Arrives - Star Wars Episode VI Return of the Jedi HD1080p',
          'https://www.youtube.com/watch?v=O2F91Up9fT8', 0,1,50 ],
        [ 'youtube', 'Star Wars Episode VI Return Of The Jedi Opening Scene HD720p',
          'https://www.youtube.com/watch?v=qQB2NXfJev0', 0,3,3 ]
      ],
      'anthem' : [
        [ 'youtube', 'British Anthem, God Save the Queen (with lyrics)',
          'https://www.youtube.com/watch?v=tN9EC3Gy6Nk', 0,2,43 ]
      ],
      'vague' : [
        [ 'youtube', 'luxury elite : 101.7 WAVE II',
          'https://www.youtube.com/watch?v=vK75KSr61eE', 0,35,49 ],
        [ 'youtube', 'Oneohtrix Point Never – Memory Vague Full DVD',
          'https://www.youtube.com/watch?v=G1flq8LKkzk', 0,33,21 ]
      ],
      'call' : [
        [ 'youtube', 'Let\'s Call The Whole Thing Off Ella Fitzgerald & Louis Armstrong',
          'https://www.youtube.com/watch?v=CIYS9EQWkXg', 0,4,20 ]
      ],
      'cheer' : [
        [ 'youtube', 'Cheerocracy', 'https://www.youtube.com/watch?v=nXvMJA_6BnQ', 0,0,19 ]
      ],
      'chicken' : [
        [ 'youtube', 'Rebel Without a Cause (1955) - The Chickie-Run Scene (7/10) | Movieclips',
          'https://www.youtube.com/watch?v=1AlMY9fDHu0', 0,1,51 ]
      ],
      '1978' : [
        [ 'youtube', 'The Time Machine (1978)', 'https://www.youtube.com/watch?v=6HZO5-IBD_I', 1,36,32 ]
      ],
      '1982' : [
        [ 'youtube', 'Tron (1982) - The Recognizer and the Bit', 'https://www.youtube.com/watch?v=VcyCWEsbsPU', 0,3,1 ],
        [ 'youtube', 'Time Walker (1982)', 'https://www.youtube.com/watch?v=zLlKs18tAes', 2,40,51 ]
      ],
      '1984' : [
        [ 'youtube', '猫 シ Corp. : Class of \'84', 'https://www.youtube.com/watch?v=atTsperS9Dg', 0,48,57 ]
      ],
      '1989' : [
        [ 'youtube', 'Yuni Wa - So 1989',
          'https://www.youtube.com/watch?v=HUrt3FBZmPk', 0,3,48 ]
      ],
      '1990' : [
        [ 'youtube', 'Enigma MCMXC a D Full Album) 1990',
          'https://www.youtube.com/watch?v=oSvaRuKhZJk', 1,0,27 ]
      ],
      '1991' : [
        [ 'youtube', 'Sasha Live from Energy @ Eclipse Coventry 1991',
          'https://www.youtube.com/watch?v=WkggrVyPGBc', 1,21,20, ]
      ],
      '2000' : [
        [ 'soundcloud', 'Digital Prophecy - Side X',
          'https://soundcloud.com/chaosbot-group/digital-prophecy-side-x', '333382634', 0,49,55 ],
      ],
      'test' : [
        [ 'puzzle', 'add:3 + 5', 'soundcloud', 'Digital Prophecy - Side X',
          'https://soundcloud.com/chaosbot-group/digital-prophecy-side-x', '333382634', 0,49,55 ],
      ],
      '2002' : [
        [ 'youtube', 'Nu-NRG live @Orgasmatron 07-09-2002',
          'https://www.youtube.com/watch?v=HvY016UyUVE', 0,59,53 ],
      ],
      '2004' : [
        [ 'youtube', 'New Order - Touched By The Hand Of God [OFFICIAL MUSIC VIDEO]',
          'https://www.youtube.com/watch?v=T9M_bqIB6EU', 0,4,30 ],
        [ 'soundcloud', 'Desyn Masiello Essential Mix 03-10-2004',
          'https://soundcloud.com/carolinatorres-1/desyn-masiello-essential-mix', '64551584', 2,0,5 ],
        [ 'youtube', 'Dynamic Intervention 2004 Mix Hard House',
          'https://www.youtube.com/watch?v=tq-gcp0WI34', 1,20,19 ],
      ],
      '2006' : [
        [ 'soundcloud', 'Essential mix - desyn masiello demi and omid 16b - 26-mar-2006',
          'https://soundcloud.com/walter-corral/essential-mix-desyn-masiello', '45849591', 2,59,33 ],
      ],
      'nasa' : [
        [ 'youtube', 'Loops for Lovers',
          'https://www.youtube.com/watch?v=X1xIGjfDBBE', 0,27,28 ],
        [ 'youtube', '「karen\'s suburban」/ 悲しい夜1979 [ＶＨＳ]',
          'https://www.youtube.com/watch?v=irfcMKNrQ2g', 0,23,20 ]
      ],
      'fbi' : [
        [ 'image', 'feel', 'https://i.imgur.com/u8q7cFj.png', 0,0,30 ]
      ],
      'paths' : [
        [ 'soundcloud', 'P A T H S パス - ビジョンログ: F O U N T A I N',
          'https://soundcloud.com/elemental95/p-a-t-h-s-f-o-u-n-t-a-i-n', '307227438', 0,24,0 ]
      ],
      'nsa' : [
        [ 'youtube', 'kalima - indiana jones', 'https://www.youtube.com/watch?v=KBIdcUxdgo0', 0,0,53 ],
        [ 'youtube', 'Matchbox Cars (1965)', 'https://www.youtube.com/watch?v=-DRbgYLhc4Y', 0,1,59 ]
      ],
      'ride' : [
        [ 'youtube', 'A Whole New World', 'https://www.youtube.com/watch?v=-kl4hJ4j48s', 0,2,55 ]
      ],
      'days' : [
        [ 'youtube', 'Days of our Lives Full Music Theme', 'https://www.youtube.com/watch?v=z-Zgtm-g4Co', 0,3,33 ]
      ],
      'patriarch' : [
        [ 'youtube', 'patriarch', 'https://www.youtube.com/watch?v=JygRdqYZyHs', 0,5,11 ]
      ],
      'hal' : [
        [ 'youtube', 'HAL 9000: "I\'m sorry Dave, I\'m afraid I can\'t do that"',
          'https://www.youtube.com/watch?v=ARJ8cAGm6JE', 0,2,55 ],
        [ 'youtube', 'Deactivation of Hal 9000',
          'https://www.youtube.com/watch?v=c8N72t7aScY', 0,4,35 ],
      ],
      'ad' : [
        [ 'youtube', 'For relaxing time, make it chaosbot time',
          'https://www.youtube.com/watch?v=q4Dk9KTLtDk', 0,0,30 ],
        [ 'youtube', 'For relaxing time...make it a Santori time',
          'https://www.youtube.com/watch?v=38UlEzCgxoQ', 0,0,22 ]
      ],
      'top' : [
        [ 'youtube', 'Top Gun Opening Scene',
          'https://www.youtube.com/watch?v=enhRwnkmToM', 0,8,15 ]
      ],
      'pink' : [
        [ 'youtube', 'My Little Pony Friendship is Magic: Pinkie Pie Loses it.',
          'https://www.youtube.com/watch?v=T22wxk1DSJY', 0,4,19 ],
        [ 'youtube', 'Pink Elephants - Dumbo',
          'https://www.youtube.com/watch?v=Pl3YXl_m0uk', 0,4,46 ]
      ],
      'night' : [
        [ 'personality', 3,30,0 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'youtube', 'Crystal Clear / The Grid', 'https://www.youtube.com/watch?v=Gocee0RWvho', 0,4,40 ],
        [ 'personality', 24,0,0 ]
      ],
      'world' : [
        [ 'youtube', '"World Receiver" by Tetsu Inoue, 1996',
          'https://www.youtube.com/watch?v=grlYRK1aSus', 1,3,50 ]
      ],
      'cia' : [
        [ 'youtube', 'Traffic (4/10) Movie CLIP - Conspiring to Conspire (2000) HD',
          'https://www.youtube.com/watch?v=6U6MOfuFX-Q', 0,2,42 ],
        [ 'youtube', 'Apocalypse Now - Colonel Kurtz\'s Monologue',
          'https://www.youtube.com/watch?v=KxLFdJLSho8', 0,5,34 ]
      ],
      'usa' : [
        [ 'youtube', 'Bruce Springsteen - Born In The U.S.A.',
          'https://www.youtube.com/watch?v=lZD4ezDbbu4', 0,4,43, ]
      ],
      'berlin' : [
        [ 'youtube', '"Berlin Wall" Speech - President Reagan\'s Address at the Brandenburg Gate - 6/12/87',
          'https://www.youtube.com/watch?v=5MDFX-dNtsM', 0,26,42, ],
        [ 'youtube', 'Berlin - Take My Breath Away',
          'https://www.youtube.com/watch?v=Bx51eegLTY8', 0,4,11, ]
      ],
      'death' : [
        [ 'youtube', 'Infinity Frequencies : Computer Death',
          'https://www.youtube.com/watch?v=RMEauTuOSK0', 0,38,12 ]
      ],
      'afterlife' : [
        [ 'youtube', 'Infinity Frequencies : Computer Afterlife',
          'https://www.youtube.com/watch?v=tmFSwI_JQNU', 0,22,39 ]
      ],
      'over' : [
        [ 'youtube', 'Oscob-Digital Sex - Overgrowth - full album (2015)',
          'https://www.youtube.com/watch?v=4Ctp2SpFuQY', 1,23,0 ]
      ],
      'holy' : [
        [ 'youtube', 'Freeway (1996) "Holy shit, is that you Bob?"',
          'https://www.youtube.com/watch?v=Vy_PId8iVfg', 0,1,7 ]
      ],
      'y\'all' : [
        [ 'youtube', 'Applejack - Y\'all Here That?',
          'https://www.youtube.com/watch?v=uy6FOl_5y_c', 0,0,8 ]
      ],
      'plus' : [
        [ 'youtube', 'Macintosh Plus - Floral Shoppe *FULL ALBUM*',
          'https://www.youtube.com/watch?v=YcsYSJwewWk', 0,47,47 ]
      ],
      'poem' : [
        [ 'youtube', 'Clemens Kuby über Selbstheilkraft',
          'https://www.youtube.com/watch?v=9uwwieGEzT8', 0,57,2 ],
        [ 'youtube', 'Jede Zelle meines Körpers ist glücklich // Astrid Kuby',
          'https://www.youtube.com/watch?v=pJW-dTuMvQM', 0,15,23 ],
        [ 'youtube', 'Sofort wieder gut drauf sein – wie geht das? // Dr. Stefan Frädrich',
          'https://www.youtube.com/watch?v=YT2Q6rxkTdo', 0,12,19 ],
        [ 'youtube', 'Wie hört man sofort mit dem Rauchen auf? // Dr. Stefan Frädrich',
          'https://www.youtube.com/watch?v=bU4cyLL-g6U', 0,23,13 ],
        [ 'youtube', 'Aus dem Takt - Herzrhythmusstörungen (medicus Ausgabe 51)',
          'https://www.youtube.com/watch?v=2O3U82mN9Nw', 0,10,27 ],
        [ 'youtube', 'Vorhofflimmern - Ursachen, Symptome und Behandlung',
          'https://www.youtube.com/watch?v=logoMP1yw18', 0,9,12 ],
        [ 'youtube', 'Ablation bei Vorhofflimmern: Effektive Therapie bei Herzrhythmusstörungen (Köln)',
          'https://www.youtube.com/watch?v=qn7mLzR2Qf8', 0,5,7 ],
        [ 'youtube', 'Reveal LINQ - So wird das kleinste EKG der Welt implantiert',
          'https://www.youtube.com/watch?v=0lJeA63KLy4', 0,2,43 ],
        [ 'youtube', 'L\'impianto del loop recorder Reveal LINQ',
          'https://www.youtube.com/watch?v=vhn0Glf646A', 0,2,5 ],
        [ 'youtube', 'Implantation of LINQ loop recorder - Ali Sovari, MD',
          'https://www.youtube.com/watch?v=8blfW1KkWg8', 0,1,30 ],
        [ 'youtube', 'How to implant the new insertable loop recorder',
          'https://www.youtube.com/watch?v=XMnHjRd8GRs', 0,0,51 ],
        [ 'youtube', 'Pacemakers & Implantable Defibrillators: How are they implanted and what is their function?',
          'https://www.youtube.com/watch?v=IocuieEC4sg', 0,2,35 ],
        [ 'youtube', 'Pacemaker Implantation',
          'https://www.youtube.com/watch?v=H8JtKX8m16w', 0,9,17 ],
        [ 'youtube', 'Permanent Pacemaker Implant Surgery',
          'https://www.youtube.com/watch?v=F1HKeBTuT4k', 0,6,5 ],
      ],
      'rats' : [
        [ 'youtube', 'SUSPENSE -- "THREE SKELETON KEY" (11-11-56)',
          'https://www.youtube.com/watch?v=1uT4Q36hNTI', 0,29,54, ]
      ],
      'jackal' : [
        [ 'youtube', 'Jackal Kills Stork in an Epic Battle',
          'https://www.youtube.com/watch?v=pX7ay8vfJ4U', 0,2,6, ]
      ],
      'clean' : [
        [ 'youtube', 'Fibber McGee & Molly radio show 3/5/40 Cleaning the Hall Closet',
          'https://www.youtube.com/watch?v=u3rC7_qeYzM', 0,28,52, ]
      ],
      'kids' : [
        [ 'youtube', 'War - Part Two: Anybody\'s Son Will Do (4 of 6)',
          'https://www.youtube.com/watch?v=N0EyKjKAEOM', 0,10,0 ],
        [ 'youtube', 'Kids',
          'https://www.youtube.com/watch?v=fZI-LpvtZqw', 0,4,0 ],
        [ 'youtube', 'War - Part Two: Anybody\'s Son Will Do (1 of 6)',
          'https://www.youtube.com/watch?v=DShDaJXK5qo', 0,9,0 ],
      ],
      'dead' : [
        [ 'youtube', 'Ajahn Chah - In The Dead Of Night',
          'https://www.youtube.com/watch?v=sFCB4ZOv6HY', 0,37,12, ]
      ],
      'poly' : [
        [ 'youtube', 'Vektroid - Polytravellers [Full Album]',
          'https://www.youtube.com/watch?v=kFdfLXZel0c', 0,52,47, ]
      ],
      'brave' : [
        [ 'youtube', 'Aldous Huxley Narrates "Brave New World"',
          'https://www.youtube.com/watch?v=1etUD_AE59g', 0,59,25, ]
      ],
      'alive' : [
        [ 'youtube', 'It\'s Alive! - Frankenstein (2/8) Movie CLIP (1931) HD',
          'https://www.youtube.com/watch?v=1qNeGSJaQ9Q', 0,3,20 ]
      ],
      'accelerator' : [
        [ 'youtube', 'The Future Sound Of London-Accelerator',
          'https://www.youtube.com/watch?v=eDmzkjdFza0', 1,2,8, ]
      ],
      'code' : [
        [ 'youtube', 'Solidarity Poland 1981',
          'https://www.youtube.com/watch?v=peT3-xSzj08', 0,10,52, ],
        [ 'youtube', 'Communism In Poland',
          'https://www.youtube.com/watch?v=soSz64AI-NI', 0,30,3, ]
      ],
      'sex' : [
        [ 'youtube', 'Madam Zu & Jon Doe - 999 Matrix (The Red Pill) (Chris C\'s Munted Mix)',
          'https://www.youtube.com/watch?v=3NpHW0tgi40', 0,6,29, ],
        [ 'youtube', 'Paula Abdul - Opposites Attract',
          'https://www.youtube.com/watch?v=xweiQukBM_k', 0,3,48, ],
        [ 'youtube', 'Bobby Brown - Every Little Step',
          'https://www.youtube.com/watch?v=P0FKzPfsxA4', 0,4,9, ],
        [ 'youtube', 'MESSIAH - \'Temple Of Dreams\' - official video',
          'https://www.youtube.com/watch?v=wKduhUXa0rg', 0,4,9, ],
        [ 'youtube', 'Robin Hood Prince John Sir Hiss',
          'https://www.youtube.com/watch?v=fDtctooXZz4', 0,2,32, ],
        [ 'youtube', 'Spyro Gyra - Morning Dance',
          'https://www.youtube.com/watch?v=bVDZ5UY_oDw', 0,3,58, ],
        [ 'youtube', 'Praga Khan - Injected With A Poison',
          'https://www.youtube.com/watch?v=ikGtCA3OJJc', 0,3,44, ],
        [ 'youtube', 'Praga Khan - Injected With A Poison',
          'https://www.youtube.com/watch?v=ikGtCA3OJJc', 0,3,44, ],
        [ 'youtube', 'Opus III - It\'s A Fine Day',
          'https://www.youtube.com/watch?v=TjIPzyVlK60', 0,3,33, ],
        [ 'youtube', 'Praga Khan - Injected With A Poison',
          'https://www.youtube.com/watch?v=ikGtCA3OJJc', 0,3,44, ],
        [ 'youtube', 'Praga Khan - Injected With A Poison',
          'https://www.youtube.com/watch?v=ikGtCA3OJJc', 0,3,44, ],
        [ 'youtube', 'Opus III - It\'s A Fine Day',
          'https://www.youtube.com/watch?v=TjIPzyVlK60', 0,3,33, ],
        [ 'soundcloud', 'Yadada (Sleeptvlk X LeftBrain) (feat. G.U.N & L - Dog)',
          'https://soundcloud.com/sleeptvlk/yadada-sleeptlvk-x-leftbrain-feat-gun-l-dog', '234976491', 0,3,46, ],
        [ 'youtube', 'Breakbeat Era - Ultra Obscene (1999) [Full Album HQ]',
          'https://www.youtube.com/watch?v=81-Rl83-wS4', 1,14,11, ],
        [ 'youtube', 'Miles Davis - Bitches Brew (1970) - full album',
          'https://www.youtube.com/watch?v=SbCt-iXIXlQ', 1,45,54, ],
        [ 'youtube', 'Dumbo ending',
          'https://www.youtube.com/watch?v=RjPYMs4w5TI', 0,3,23, ],
        [ 'youtube', 'Casey Junior - English',
          'https://www.youtube.com/watch?v=bhTHQ-1LOCA', 0,2,27, ],
        [ 'youtube', 'Spyro Gyra - Morning Dance',
          'https://www.youtube.com/watch?v=bVDZ5UY_oDw', 0,3,58, ],
        [ 'youtube', 'Enya - Caribbean Blue (video)',
          'https://www.youtube.com/watch?v=Jl8iYAo90pE', 0,3,41, ],
        [ 'youtube', 'Enya - Orinoco Flow (video)',
          'https://www.youtube.com/watch?v=LTrk4X9ACtw', 0,3,44, ],
        [ 'youtube', 'Yello - Oh Yeah',
          'https://www.youtube.com/watch?v=6jJkdRaa04g', 0,3,5, ],
        [ 'youtube', 'Madam Zu & Jon Doe - 999 Matrix (The Red Pill) (Chris C\'s Munted Mix)',
          'https://www.youtube.com/watch?v=3NpHW0tgi40', 0,6,29, ],
      ],
      'love' : [
        [ 'youtube', 'Metropolis ending (2001) HD',
          'https://www.youtube.com/watch?v=4UNj-VK43iQ', 0,4,17 ],
        [ 'youtube', 'New Order Love Vigilantes Video',
          'https://www.youtube.com/watch?v=r9BE4y-Hgao', 0,4,20 ],
        [ 'youtube', 'New Order - The Perfect Kiss [OFFICIAL MUSIC VIDEO]',
          'https://www.youtube.com/watch?v=x3XW6NLILqo', 0,10,55 ],
        [ 'youtube', 'New Order - Shellshock (Substance - 1987)',
          'https://www.youtube.com/watch?v=zcB_IqzUEaA', 0,6,29 ],
        [ 'youtube', 'New Order - Touched by the Hand of God - original',
          'https://www.youtube.com/watch?v=grD5AEqhDTE', 0,3,41 ],
        [ 'youtube', 'New Order The Beach',
          'https://www.youtube.com/watch?v=Bn66szsjUGw', 0,7,19 ],
        [ 'youtube', 'a-ha - Take On Me (Official Video)',
          'https://www.youtube.com/watch?v=djV11Xbc914', 0,3,47 ],
        [ 'youtube', 'New Order - Substance 1987 (Disc One)',
          'https://www.youtube.com/watch?v=9-NFosnfd2c', 1,14,15 ],
        [ 'youtube', 'YOSHIO SUZUKI "Morning Picture" (1984)',
          'https://www.youtube.com/watch?v=xFMV8qPg4vo', 0,46,56 ],
        [ 'youtube', 'Spyro Gyra - Breakout ( Full Album )',
          'https://www.youtube.com/watch?v=E7a1GGL2yUg', 0,39,16 ],
        [ 'youtube', 'HOS - 047 - ENCHANTER\'S ISLE - SPACE MUSIC',
          'https://www.youtube.com/watch?v=ZsWNJybkDpo', 0,58,37 ],
        [ 'youtube', 'Cities That Breathe (Vaporwave Mix)',
          'https://www.youtube.com/watch?v=nGa4FDkWZPQ', 1,35,45 ],
        [ 'youtube', 'The New World™ [Vaporwave Mix]',
          'https://www.youtube.com/watch?v=IGX71LnKPKE', 1,10,55 ],
        [ 'youtube', 'Matt Darey | Ibiza Euphoria - CD1 (1999)',
          'https://www.youtube.com/watch?v=VVQiVYOG25U', 1,15,10 ],
        [ 'dailymotion', 'New Order - True Faith',
          'http://www.dailymotion.com/video/x17q9x', 0,4,23 ],
        [ 'youtube', 'Karim - Begonia',
          'https://www.youtube.com/watch?v=V8pQqthC8h8', 0,6,49 ],
        [ 'youtube', 'Cortina - Higher',
          'https://www.youtube.com/watch?v=tVtBWCIOIIg', 0,7,47 ],
        [ 'youtube', 'BK - HARDHOUSE ANTHEMS (NUKLEUZ)',
          'https://www.youtube.com/watch?v=GqBSTxEkLWw', 1,18,37 ],
        [ 'youtube', 'Jon The Dentist Presents The Omen - The Rhythm, The Rebel (Dub Mix)',
          'https://www.youtube.com/watch?v=r3sk-Z79dQU', 0,6,16 ],
        [ 'youtube', 'Classic Doublemint Gum Commercial (1985)',
          'https://www.youtube.com/watch?v=F7hwvWIK1eM', 0,0,30 ],
      ],
      'sex2' : [
        [ 'youtube', 'DR Base Vs Karim - N.W.A. \'98 (Tinrib Records)',
          'https://www.youtube.com/watch?v=CVbGxNgppH4', 0,6,13 ],
        [ 'youtube', 'Teen Talk RARE "Math Class is Tough" Barbie! Working!',
          'https://www.youtube.com/watch?v=NO0cvqT1tAE', 0,0,12, ],
        [ 'youtube', '1992 Teen Talk Barbie Commercial',
          'https://www.youtube.com/watch?v=n70GggHok18', 0,0,30, ],
        [ 'youtube', 'Bubble Yum Commercial (Sax) 1989',
          'https://www.youtube.com/watch?v=AjVKDUQF0pw', 0,0,30, ],
        [ 'youtube', 'Paula Abdul - Opposites Attract',
          'https://www.youtube.com/watch?v=xweiQukBM_k', 0,3,48, ],
        [ 'youtube', 'Paula Abdul - Opposites Attract',
          'https://www.youtube.com/watch?v=xweiQukBM_k', 0,3,48, ],
        [ 'youtube', 'Whoomp There It Is - Tag Team',
          'https://www.youtube.com/watch?v=Z-FPimCmbX8', 0,4,0, ],
        [ 'youtube', 'Whoomp There It Is - Tag Team',
          'https://www.youtube.com/watch?v=Z-FPimCmbX8', 0,4,0, ],
        [ 'youtube', 'Kris Kross - Jump',
          'https://www.youtube.com/watch?v=010KyIQjkTk', 0,3,17, ],
        [ 'youtube', 'Kris Kross - Jump',
          'https://www.youtube.com/watch?v=010KyIQjkTk', 0,3,17, ],
        [ 'youtube', 'Cypress Hill - Insane In The Brain (Official Video)',
          'https://www.youtube.com/watch?v=RijB8wnJCN0', 0,3,25, ],
        [ 'youtube', 'Cypress Hill - Insane In The Brain (Official Video)',
          'https://www.youtube.com/watch?v=RijB8wnJCN0', 0,3,25, ],
        [ 'youtube', 'Snoop Dogg - Gin And Juice',
          'https://www.youtube.com/watch?v=fWCZse1iwE0', 0,4,24, ],
        [ 'youtube', 'Snoop Dogg - Gin And Juice',
          'https://www.youtube.com/watch?v=fWCZse1iwE0', 0,4,24, ],
        [ 'youtube', 'Ice Cube - It Was A Good Day',
          'https://www.youtube.com/watch?v=h4UqMyldS7Q', 0,5,12, ],
        [ 'youtube', 'Ice Cube - It Was A Good Day',
          'https://www.youtube.com/watch?v=h4UqMyldS7Q', 0,5,12, ],
        [ 'youtube', 'Eazy-E - Boyz In Da Hood',
          'https://www.youtube.com/watch?v=fGeNDnYcQOA', 0,6,19, ],
        [ 'youtube', 'Eazy-E - Boyz In Da Hood',
          'https://www.youtube.com/watch?v=fGeNDnYcQOA', 0,6,19, ],
        [ 'youtube', 'Cocteau Twins - Heaven Or Las Vegas (Official Video)',
          'https://www.youtube.com/watch?v=6KnYw4EwYGc', 0,3,51, ],
        [ 'youtube', 'Cocteau Twins - Heaven Or Las Vegas (Official Video)',
          'https://www.youtube.com/watch?v=6KnYw4EwYGc', 0,3,51, ],
        [ 'youtube', '1992 Teen Talk Barbie Commercial',
          'https://www.youtube.com/watch?v=n70GggHok18', 0,0,30, ],
        [ 'youtube', 'Teen Talk RARE "Math Class is Tough" Barbie! Working!',
          'https://www.youtube.com/watch?v=NO0cvqT1tAE', 0,0,12, ],
        [ 'youtube', 'DR Base Vs Karim - N.W.A. \'98 (Tinrib Records)',
          'https://www.youtube.com/watch?v=CVbGxNgppH4', 0,6,13 ],
      ],
      'power' : [
        [ 'youtube', 'The Captain & RR Fierce - Progressive Llama',
          'https://www.youtube.com/watch?v=R44V4nPizv4', 0,6,50 ],
        [ 'youtube', 'Captain Tinrib & RR Fierce - Street Tab',
          'https://www.youtube.com/watch?v=2DNSM5vRmiM', 0,6,29 ],
        [ 'dailymotion', 'The Outer Limits ( 1963-65 ) S01E04 - The Man with the Power',
          'http://www.dailymotion.com/video/x4jj140', 0,50,50 ],
        [ 'youtube', 'Captain Tinrib & RR Fierce - Street Tab',
          'https://www.youtube.com/watch?v=2DNSM5vRmiM', 0,6,29 ],
        [ 'youtube', 'The Captain & RR Fierce - Progressive Llama',
          'https://www.youtube.com/watch?v=R44V4nPizv4', 0,6,50 ],
      ],
      'hell' : [
        [ 'youtube', 'Pablo Gargno - Hellraiser 5 ( 1993 )',
          'https://www.youtube.com/watch?v=gITtHAG20Qc', 0,50,21 ]
      ],
      'adam' : [
        [ 'youtube', 'I am Adam, of Eternia : SKY LOBBY',
          'https://www.youtube.com/watch?v=pxxb6JMp0Zo', 0,42,3 ],
        [ 'youtube', '猫 シ Corp. : LUXURY GIRLS',
          'https://www.youtube.com/watch?v=huctiWGZkt8', 0,35,53 ]
      ],
      'personality' : [
        [ 'personality', 0,0,15 ]
      ],
      'train' : [
        [ 'youtube', 'Ajahn Chah - Wholehearted Training',
          'https://www.youtube.com/watch?v=zNQ0Uuw0U2A', 0,55,56 ],
        [ 'youtube', 'The Dharma is utterly useless',
          'https://www.youtube.com/watch?v=SvmgpyVcYJc', 0,12,16 ],
        [ 'youtube', 'Yoda training Luke pt1',
          'https://www.youtube.com/watch?v=infZSKB5L9I', 0,4,48 ]
      ],
      'rain' : [
        [ 'youtube', 'Singing In The Rain - Singing In The Rain (Gene Kelly) [HD Widescreen]',
          'https://www.youtube.com/watch?v=D1ZYhVpdXbQ', 0,4,35 ],
        [ 'youtube', 'clockwork orange singing in the rain',
          'https://www.youtube.com/watch?v=pP4lWzlO894', 0,4,22 ]
      ],
      'pleasure' : [
        [ 'youtube', 'Fergie & BK - House of pain', 'https://www.youtube.com/watch?v=fXPqZVbldEM', 0,7,47],
      ],
      'ghostrunner' : [
        [ 'personality', 4,51,0 ],
        [ 'youtube', 'Vangelis - Blade Runner 2002 Esper Edition',
          'https://www.youtube.com/watch?v=a6qUTSZ5Zmk', 1,51,15 ],
        [ 'youtube', 'Vangelis - Blade Runner 2002 Esper Edition',
          'https://www.youtube.com/watch?v=a6qUTSZ5Zmk', 1,51,15 ],
        [ 'youtube', 'Vangelis - Blade Runner 2002 Esper Edition',
          'https://www.youtube.com/watch?v=a6qUTSZ5Zmk', 1,51,15 ],
        [ 'youtube', 'Vangelis - Blade Runner 2002 Esper Edition',
          'https://www.youtube.com/watch?v=a6qUTSZ5Zmk', 1,51,15 ],
        [ 'youtube', 'Vangelis - Blade Runner 2002 Esper Edition',
          'https://www.youtube.com/watch?v=a6qUTSZ5Zmk', 1,51,15 ],
        [ 'youtube', 'Vangelis - Blade Runner 2002 Esper Edition',
          'https://www.youtube.com/watch?v=a6qUTSZ5Zmk', 1,51,15 ],
        [ 'youtube', 'Vangelis - Blade Runner 2002 Esper Edition',
          'https://www.youtube.com/watch?v=a6qUTSZ5Zmk', 1,51,15 ],
        [ 'youtube', 'Vangelis - Blade Runner 2002 Esper Edition',
          'https://www.youtube.com/watch?v=a6qUTSZ5Zmk', 1,51,15 ],
        [ 'personality', 24,0,0 ],
      ],
      'you believe jewish lies about me?' : [
        [ 'youtube', '80\'s Commercials - Uh Oh, Spaghetti Os',
          'https://www.youtube.com/watch?v=A4iyEU8WKIE', 0,0,31 ],
        [ 'dailymotion', 'Talespin - 35 - The Old Man And The Sea Duck',
          'http://www.dailymotion.com/video/xzwlun', 0,22,15 ],
        [ 'youtube', 'The Protocols of the Learned Elders of Zion (Full Audiobook)',
          'https://www.youtube.com/watch?v=ZI1A9MPcipM', 3,38,55 ],
        [ 'youtube', 'Pornstep feat. The Highbury Whores (Original Mix) - Dodge, Fuski',
          'https://www.youtube.com/watch?v=870cSxoRVK8', 0,4,38 ],
        [ 'youtube', 'Cellular trailer',
          'https://www.youtube.com/watch?v=s2-wO0kG8as', 0,2,23 ],
        [ 'youtube', 'Cellular - full movie',
          'https://www.youtube.com/watch?v=mtEJUJQ3s3o', 1,18,0 ],
        [ 'youtube', 'Earth Star Voyager Full SCI-FI movie from 1988',
          'https://www.youtube.com/watch?v=KDFF9sIT6jE', 2,59,25 ],
        [ 'youtube', 'J. S. Bach - Ricercare a 6 from "Musikalisches Opfer" BWV 107 - Croatian Baroque Ensemble',
          'https://www.youtube.com/watch?v=3i6MorFy3YE', 0,8,28 ],
        [ 'youtube', 'J.S.Bach - Brandenburg Concerto No.5 in D BWV1050 - Croatian Baroque Ensemble',
          'https://www.youtube.com/watch?v=BnjqGhAlFzs', 0,21,49 ],
        [ 'youtube', 'Bach - Richter, Conciertos de Brandenburgo 1-6, BWV 1046-1051',
          'https://www.youtube.com/watch?v=Ehbar90jHz8', 1,38,52 ],
      ],
      'four' : [
        [ 'youtube', 'There... Are... Four... Lights!',
          'https://www.youtube.com/watch?v=o_eSwq1ewsU', 0,3,37 ],
        [ 'youtube', 'Kids.1995.iNTERNAL.XviDVD-TNS.avi',
          'https://www.youtube.com/watch?v=HcxJpslyIO8', 1,26,47 ],
        [ 'youtube', '1984 Kids Incorporated Theme Song',
          'https://www.youtube.com/watch?v=HnsHpPNltBw', 0,1,27 ],
        [ 'youtube', '1989 Kids Incorporated Theme Song',
          'https://www.youtube.com/watch?v=6Od-1VEfd6s', 0,0,58 ],
        [ 'youtube', 'Transformers: The Movie (1986) - The Death of Starscream[HD]',
          'https://www.youtube.com/watch?v=ZKqzghNW49M', 0,1,23 ],
        [ 'youtube', '3-2-1 Contact Opening Theme/Intro 1983-1986 #2',
          'https://www.youtube.com/watch?v=s2-LEBc2sO8', 0,0,48 ],
        [ 'youtube', '3-2-1 Contact -- Opening Theme/Intro 1983-1986 #3 (Exteneded Them',
          'https://www.youtube.com/watch?v=B7S537b7saE', 0,0,57 ],
        [ 'youtube', '3-2-1 Contact -- Very First Episode - 1980 - Intro/Theme -- Part 1 of 2',
          'https://www.youtube.com/watch?v=KmQWtGn889E', 0,7,14 ],
        [ 'youtube', '3-2-1 Contact -- Very First Episode Part 2 -- 1980',
          'https://www.youtube.com/watch?v=TX4s0X6FDcQ', 0,21,26 ],
        [ 'youtube', 'Trancesetters - The Saga',
          'https://www.youtube.com/watch?v=A6KLHqK5QAk', 0,8,23 ],
        [ 'soundcloud', 'Peter Pan (1953) Vs RAVESIGNAL III Vs Natural Mystic (Mystre)',
          'https://soundcloud.com/vapor-bleep/peter-pan-1953-vs-ravesignal-iii-vs-natural-mystic-mystre', '228283155', 0,50,42 ],
        [ 'youtube', 'Lock \'N Load - Blow Ya Mind (Club Caviar Remix) 1999',
          'https://www.youtube.com/watch?v=4TNAQfC5jB4', 0,6,34 ],
        [ 'youtube', 'Lisa Pin-Up - Future Acid House (Original Mix) [HQ]',
          'https://www.youtube.com/watch?v=mgolyF304AA', 0,8,30 ],
      ],
      'you believe russian lies about me?' : [
        [ 'youtube', 'an interview with google\'s founder sergey brin, in russian',
          'https://www.youtube.com/watch?v=zle8y4R42U4', 0,9,40 ],
        [ 'youtube', 'Google CEO Sergey Brin, "I didn\'t see Artificial Intelligence (AI) coming. How wrong was I?"',
          'https://www.youtube.com/watch?v=30rx3dBPbIs', 0,34,0 ],
        [ 'youtube', 'The Century of the Self (Full Documentary)',
          'https://www.youtube.com/watch?v=eJ3RzGoQC4s', 3,54,43 ],
        [ 'youtube', 'President George H.W. Bush - Address to the Nation on Panama',
          'https://www.youtube.com/watch?v=eCd-jHBQ-vc', 0,6,35 ],
        [ 'youtube', 'Van Halen - Panama (Music Video)',
          'https://www.youtube.com/watch?v=w-NshzYK9y0', 0,3,42 ],
        [ 'youtube', 'Between Two Ages Ch 1 Part 1 Audiobook',
          'https://www.youtube.com/watch?v=t7UomwZUOLs', 0,45,21 ],
        [ 'youtube', 'Guns N\' Roses - Paradise City',
          'https://www.youtube.com/watch?v=Rbm6GXllBiw', 0,6,49 ],
        [ 'youtube', 'Guns N\' Roses - Welcome To The Jungle',
          'https://www.youtube.com/watch?v=o1tj2zJ2Wvg', 0,4,34 ],
        [ 'youtube', 'Joseph Chilton Pearce - The Crack in the Cosmic Egg',
          'https://www.youtube.com/watch?v=ExDCFlARrlk', 1,1,7 ],
        [ 'youtube', 'Joseph Chilton Pearce - Play IS Learning',
          'https://www.youtube.com/watch?v=OVBXqJ_u8io', 0,14,57 ],
        [ 'youtube', 'Milgram experiment - Jeroen Busscher',
          'https://www.youtube.com/watch?v=yr5cjyokVUs', 0,2,17 ],
        [ 'youtube', 'Amazing Joseph Goebbels Speech TOTAL WAR',
          'https://www.youtube.com/watch?v=ZRvafKSJ1ls', 0,5,56 ],
        [ 'youtube', 'BRAVEHEART [end scene]',
          'https://www.youtube.com/watch?v=nEPxgyBIwgY', 0,7,12 ],
        [ 'youtube', 'Star Trek Captain Picard on Torture',
          'https://www.youtube.com/watch?v=F5rsxXRoD5U', 0,4,23 ],
        [ 'dailymotion', 'Star Trek S02E04 Mirror Mirror',
          'https://www.dailymotion.com/video/x3iuzgv', 0,50,32 ],
      ],
      'mirror' : [
        [ 'dailymotion', 'Snow White- Magic Mirror On The Wall Scene (English)',
          'http://www.dailymotion.com/video/x2mfju3', 0,1,23 ],
        [ 'dailymotion', 'Snow White- Magic Mirror On The Wall Scene (English)',
          'http://www.dailymotion.com/video/x2mfju3', 0,1,23 ]
      ],
      'and' : [
        [ 'youtube', 'Heinrich Himmler\'s Speech at Poznan (Posen)',
          'https://www.youtube.com/watch?v=mRO04q_lQi4', 0,5,59 ]
      ],
      'reiki' : [
        [ 'youtube', '♥Merlin\'s Magic ♥... \' The Heart of REIKI \'...a Chakra Meditation Music !',
          'https://www.youtube.com/watch?v=kmZhmIt_pYo', 1,2,39, ]
      ],
      'apa' : [
        [ 'youtube', 'Genocide',
          'https://www.youtube.com/watch?v=oa0x-Z7Tra4', 0,10,0 ],
        [ 'youtube', '2016 APA president-elect candidate statement: Antonio E. Puente, PhD',
          'https://www.youtube.com/watch?v=xZyN0ouFVio', 0,2,11 ],
      ],
      'geneswitch' : [
        [ 'youtube', 'geneswitch',
          'https://www.youtube.com/watch?v=hJQAv5sWlo8', 0,15,59 ]
      ],
      'genetransit' : [
        [ 'youtube', 'genetransit',
          'https://www.youtube.com/watch?v=Ns2Uie1xe2Q', 0,8,51 ]
      ],
      'jew' : [
        [ 'youtube', 'The Kybalion of Hermes Trismegistus, [FULL Audiobook] (+ Emerald Tablet)',
          'https://www.youtube.com/watch?v=UvV8vLON-nY', 3,43,53, ],
        [ 'youtube', 'AJAHN CHAH - WHY ARE WE HERE', 'https://www.youtube.com/watch?v=ZQqF5JIM0fk', 0,26,29, ],
        [ 'youtube', 'AJAHN CHAH - OUR REAL HOME', 'https://www.youtube.com/watch?v=9B6aGSLDkvM', 0,26,36, ],
        [ 'youtube', 'Ajahn Chah - Living With The Cobra', 'https://www.youtube.com/watch?v=c-VQ2jDVN_w', 0,7,58, ],
        [ 'youtube', 'Ajahn Chah - The Wave Ends', 'https://www.youtube.com/watch?v=wh1rjiFNtI4', 0,16,32, ],
        [ 'youtube', 'Ajahn Chah-Steady Practice', 'https://www.youtube.com/watch?v=FCgaHywwl-Y', 0,32,2, ],
        [ 'youtube', 'AJAHN CHAH - THE NATURAL MIND', 'https://www.youtube.com/watch?v=WstNfNgYhkA', 0,51,35, ],
        [ 'youtube', 'Ajahn Chah - Toward The Unconditioned', 'https://www.youtube.com/watch?v=ShfKx6FbGes', 0,41,11, ],
        [ 'youtube', 'Ajahn Chah - Wholehearted Training', 'https://www.youtube.com/watch?v=zNQ0Uuw0U2A', 0,55,56, ]
      ],
      'new' : [
        [ 'youtube', 'bl00dwave - ＮＥＷ ＶＩＳＵＡＬＳ', 'https://www.youtube.com/watch?v=Z8aUPJrduxw', 0,24,19, ]
      ],
      'jazz' : [
        [ 'youtube', 'Paul Hardcastle The Jazzmasters I Full Album', 'https://www.youtube.com/watch?v=ldAKreYtvOQ', 1,6,13 ]
      ],
      'weekend' : [
        [ 'soundcloud', 'Xya', 'https://soundcloud.com/dbp-5/xya', '321078380', 0,13,54 ],
        [ 'soundcloud', 'The Sun Falls Beneath Her',
          'https://soundcloud.com/elitegeographic/the-sun-falls-beneath-her', '307187174', 0,3,23, ],
        [ 'youtube', 'Software - Island Sunrise (Music Video)', 'https://www.youtube.com/watch?v=gML0PukI5rI', 0,6,31, ],
        [ 'youtube', 'Software - Island Sunrise (Music Video)', 'https://www.youtube.com/watch?v=gML0PukI5rI', 0,6,31, ],
        [ 'youtube', 'Darshan Ambient - Selfless (ambient relaxation)',
          'https://www.youtube.com/watch?v=o0Trh6PZ9mM', 0,17,10, ],
        [ 'youtube', 'John Serrie - Ixlandia', 'https://www.youtube.com/watch?v=8RaHh6PmraA', 0,5,4, ],
        [ 'youtube', 'Jonn Serrie - Blue Lumia', 'https://www.youtube.com/watch?v=jJkNeYEuaqo', 0,4,5, ],
        [ 'youtube', 'Jonn Serrie - Quantum Seas', 'https://www.youtube.com/watch?v=lmrY_5NtR7U', 0,11,54, ],
        [ 'youtube', 'Jonn Serrie - Quantum Seas', 'https://www.youtube.com/watch?v=lmrY_5NtR7U', 0,11,54, ],
        [ 'youtube', 'Jonn Serrie - Quantum Seas', 'https://www.youtube.com/watch?v=lmrY_5NtR7U', 0,11,54, ],
        [ 'youtube', 'Jonn Serrie - Night Orchid', 'https://www.youtube.com/watch?v=5Tfvj1lKAG8', 0,4,53, ],
        [ 'youtube', 'Jonn Serrie - On a Frontier of Fables', 'https://www.youtube.com/watch?v=psZtjJ7Ef6s', 0,21,31, ],
        [ 'soundcloud', 'Vaperror - 808 Dreams (BLOKKADE REMIX)',
          'https://soundcloud.com/user-578529132/vaperror-808-dreams-blokkade-remix', '334317035', 0,3,48 ],
        [ 'youtube', 'VAPERROR - POLYCHROMATIC COMPILER [Full Album](HD)', 'https://www.youtube.com/watch?v=v41qe042EJ8', 0,45,1, ],
        [ 'youtube', 'Jonn Serrie ~ Starmoods', 'https://www.youtube.com/watch?v=820jJZTOxF4', 0,15,33, ],
        [ 'youtube', 'Jonn Serrie - M-Theory', 'https://www.youtube.com/watch?v=7Wz86_fSJJc', 0,8,7, ],
        [ 'youtube', 'Blade Runner Blues - Vangelis - 1982 - [HD]', 'https://www.youtube.com/watch?v=RScZrvTebeA', 0,10,18, ],
        [ 'youtube', 'The Stanford Prison Experiment', 'https://www.youtube.com/watch?v=sZwfNs1pqG0', 0,13,40, ],
        [ 'dailymotion', 'Chicken Little (1943)', 'http://www.dailymotion.com/video/x2dffhk', 0,8,50, ],
        [ 'youtube', 'The Stanford Prison Experiment', 'https://www.youtube.com/watch?v=sZwfNs1pqG0', 0,13,40, ],
        [ 'dailymotion', 'Chicken Little (1943)', 'http://www.dailymotion.com/video/x2dffhk', 0,8,50, ],
        [ 'youtube', 'The Stanford Prison Experiment', 'https://www.youtube.com/watch?v=sZwfNs1pqG0', 0,13,40, ],
        [ 'dailymotion', 'Chicken Little (1943)', 'http://www.dailymotion.com/video/x2dffhk', 0,8,50, ],
        [ 'youtube', 'The Stanford Prison Experiment', 'https://www.youtube.com/watch?v=sZwfNs1pqG0', 0,13,40, ],
        [ 'youtube', 'Jonn Serrie - The Sum Over Histories', 'https://www.youtube.com/watch?v=POvKnCaRv1o', 0,12,59, ],
        [ 'youtube', 'Michael Stearns - Encounter: A Journey In The Key of Space (Full Album)',
          'https://www.youtube.com/watch?v=M8jArZMILME', 0,52,41, ],
        [ 'soundcloud', 'Applied Science',
          'https://soundcloud.com/elitegeographic/applied-science', '325517309', 0,3,18, ],
        [ 'youtube', 'Michael Stearns - Chronos', 'https://www.youtube.com/watch?v=kU68vDR711g', 0,41,47, ],
        [ 'youtube', 'In a Miasma of Malarial Delusions', 'https://www.youtube.com/watch?v=EJ5nwSSle4E', 0,15,51, ],
        [ 'youtube', 'Robert Rich & B. Lustmord - Synergistic Perceptions', 'https://www.youtube.com/watch?v=Na240E0d-w8', 0,11,9, ],
        [ 'youtube', '160207 Suffering Is a Feeding Addiction \\ \\ Thanissaro Bhikkhu \\ \\ Dhamma Talk',
          'https://www.youtube.com/watch?v=auReBzA-Gx8', 0,17,4, ],
        [ 'youtube', 'Beyond the Mind\'s Eye', 'https://www.youtube.com/watch?v=WpKK-5A3oiA', 0,4,29, ],
        [ 'youtube', '061023 Feeding Frenzy! Dependent Co arising \\ \\ Thanissaro Bhikkhu \\ \\ Dhamma Talks',
          'https://www.youtube.com/watch?v=RG4pM9GYzN8', 0,20,45, ],
        [ 'youtube', 'Oxygène 1-13 (Jean-Michel Jarre)', 'https://www.youtube.com/watch?v=IE9jShG9sD0', 1,18,15, ],
        [ 'youtube', 'Jean Michel Jarre - Equinoxe', 'https://www.youtube.com/watch?v=yHZZaC4sfjU', 0,38,53, ],
        [ 'youtube', 'John \'00\' Fleming - White Label Euphoria (CD1)', 'https://www.youtube.com/watch?v=pNIf_teA7-0', 1,19,23, ],
        [ 'youtube', 'John \'00\' Fleming - White Label Euphoria (CD2)', 'https://www.youtube.com/watch?v=N2yoijf3pRE', 1,19,24, ],
        [ 'youtube', 'Into the Matrix of Leadership', 'https://www.youtube.com/watch?v=l9gM13LKlwE', 0,6,4, ],
        [ 'youtube', '♥Merlin\'s Magic ♥... \' The Heart of REIKI \'...a Chakra Meditation Music !',
          'https://www.youtube.com/watch?v=kmZhmIt_pYo', 1,2,39, ],
        [ 'soundcloud', 'DJ Morgan - DarkNRG (HardNRG)', 'https://soundcloud.com/dj-morgan-303/morgan-darknrg', '64374229', 0,58,48, ],
        [ 'youtube', 'Oscar Peterson Bossa Nova', 'https://www.youtube.com/watch?v=cSX_7ejc5u8', 1,8,7, ],
      ],
      'label' : [
        [ 'soundcloud', 'Why Meditate ~ 4 Kinds Of Happiness ~ Ayya Khema',
          'https://soundcloud.com/anythingbot/why-meditate-4-kinds-of-happiness-ayya-khema', '209126349', 1,30,8 ]
      ],
      'know' : [
        [ 'youtube', 'Knowledge and the Sacred', 'https://www.youtube.com/watch?v=IPV0RC9CDis', 1,25,21, ],
        [ 'youtube', 'Tradition Betrayed: The False Prophets of Modernism', 'https://www.youtube.com/watch?v=ZnsXKtE5PNI', 0,39,22, ],
      ],
      'wednesday' : [
        [ 'youtube', '[PMV] My Little Wu-Tang Clan - Shame on a Nigga', 'https://www.youtube.com/watch?v=NVGI6mhfJyA', 0,2,54, ],
        [ 'youtube', 'MLP: FiM + Black Flag - Rainbow Dash Doesn\'t Care', 'https://www.youtube.com/watch?v=HtkI4WXZvRQ', 0,0,58, ],
        [ 'youtube', 'Billy Idol - Eyes Without A Face', 'https://www.youtube.com/watch?v=9OFpfTd0EIs', 0,4,56, ],
        [ 'youtube', 'Deuter - Silence is the Answer (part 1, 1980)', 'https://www.youtube.com/watch?v=npN7d2XYVUY', 0,6,0, ],
        [ 'youtube', 'Deuter - Silence is the answer (FULL VERSION, Part 1-6, 1981)', 'https://www.youtube.com/watch?v=_NlrpA-TXRk', 0,44,12, ],
        [ 'youtube', 'Thanissaro Bhikkhu - Your Mind Is Lying To You', 'https://www.youtube.com/watch?v=8SBBda0g5uI', 0,14,39, ],
        [ 'youtube', 'Either Way', 'https://www.youtube.com/watch?v=pMR5-E9E06Y', 0,5,2, ],
        [ 'soundcloud', 'Decepticon CD - Dj Morgan', 'https://soundcloud.com/dj-morgan-303/decepticon', '273082453', 1,0,18, ],
        [ 'youtube', 'P A T H S パス - ビジョンログ: F O U N T A I N', 'https://www.youtube.com/watch?v=X1AxK-ET76Y', 0,24,1, ],
        [ 'youtube', 'P A T H S パス - ビジョンログ: F O U N T A I N', 'https://www.youtube.com/watch?v=X1AxK-ET76Y', 0,24,1, ],
        [ 'youtube', 'P A T H S パス - ビジョンログ: F O U N T A I N', 'https://www.youtube.com/watch?v=X1AxK-ET76Y', 0,24,1, ],
        [ 'youtube', 'Mussorgsky - Pictures at an Exhibition', 'https://www.youtube.com/watch?v=DXy50exHjes', 0,33,33, ],
        [ 'youtube', 'Mussorgsky - Night On Bald Mountain', 'https://www.youtube.com/watch?v=iCEDfZgDPS8', 0,9,40, ],
        [ 'youtube', '090106 Ajaan Lee Consciousnesses \\ \\ Thanissaro Bhikkhu \\ \\ Dhamma Talks',
          'https://www.youtube.com/watch?v=2w8SVayCess', 0,34,46, ],
        [ 'youtube', '160209 Random Word Generators \\ \\ Thanissaro Bhikkhu \\ \\ Dhamma Talk',
          'https://www.youtube.com/watch?v=UCIB3g3Qjrw', 0,13,20, ],
        [ 'youtube', '2001: A Space Odyssey - The Dawn of Man', 'https://www.youtube.com/watch?v=ypEaGQb6dJk', 0,9,33, ],
        [ 'youtube', '2001: A Space Odyssey "Star Gate" sequence', 'https://www.youtube.com/watch?v=ou6JNQwPWE0', 0,9,38, ],
        [ 'youtube', 'Mars - Electric Temple Side A', 'https://www.youtube.com/watch?v=JassCu6jQRo', 0,40,41, ],
        [ 'youtube', 'Mars - Electric Temple Side B', 'https://www.youtube.com/watch?v=0T7-SSdJOL8', 0,40,19, ],
        [ 'youtube', 'Mars vs Mystre Vol 2 Side A', 'https://www.youtube.com/watch?v=yu5wHWceERE', 0,42,21, ],
        [ 'youtube', 'Mystre - Natural Mystic - Side A', 'https://www.youtube.com/watch?v=DdX4-EkVeeo', 0,45,9, ],
        [ 'youtube', 'Mystre - Natural Mystic - Side B', 'https://www.youtube.com/watch?v=ocm1jWj3aLs', 0,43,16, ],
        [ 'youtube', 'Mozart "Eine kleine Nachtmusik" I. Allegro',
          'https://www.youtube.com/watch?v=Qb_jQBgzU-I', 0,5,48, ],
        [ 'youtube', 'Mozart, Eine kleine Nachtmusik KV 525 Karl Bohm, Wiener Philharmoniker',
          'https://www.youtube.com/watch?v=nPbxIT9W1AY',
          0,19,33, ],
        [ 'soundcloud', 'Mars vs Mystre A',
          'https://soundcloud.com/user6671217/mars-vs-mystre-a', '25338784', 0,46,4, ]
      ],
      'thursday' : [
        [ 'soundcloud', 'Essential mix - desyn masiello demi and omid 16b - 26-mar-2006',
          'https://soundcloud.com/walter-corral/essential-mix-desyn-masiello', '45849591', 2,59,33 ],
        [ 'youtube', 'Epena Ceremony', 'https://www.youtube.com/watch?v=ybloBijCSd0', 0,4,13 ],
        [ 'youtube', 'Elve - Plant Cell Perceptions', 'https://www.youtube.com/watch?v=C3-Y9NrGUP0', 0,9,1 ],
        [ 'youtube', 'Tree Memories - Elve', 'https://www.youtube.com/watch?v=WxW8LE2Ug94', 0,9,8 ],
        [ 'youtube', 'Pollen Forms', 'https://www.youtube.com/watch?v=prufV8yH7Qg', 0,2,10 ],
        [ 'youtube', 'Delphinium Dream', 'https://www.youtube.com/watch?v=8rsu4afzsH8', 0,4,31 ],
        [ 'youtube', 'Green Lake', 'https://www.youtube.com/watch?v=tzPYw4kcW1U', 0,2,5 ],
        [ 'youtube', 'Waterfalls', 'https://www.youtube.com/watch?v=ITtiJtLEGqQ', 0,3,23 ],
        [ 'youtube', 'Emerald Forest', 'https://www.youtube.com/watch?v=F5-ivKCbEBM', 0,2,41 ],
        [ 'youtube', 'Mesmeric Sun Kingdom', 'https://www.youtube.com/watch?v=bRzZP-pzuxE', 0,11,58 ],
        [ 'youtube', 'Plateua', 'https://www.youtube.com/watch?v=rAiH1Jk1D-I', 0,8,51 ],
        [ 'youtube', 'Eden', 'https://www.youtube.com/watch?v=Y2KruP2Xhss', 0,6,32 ],
        [ 'soundcloud', 'Patent 1 - Self Actualize', 'https://soundcloud.com/chaosbot-group/patent-1','331776331', 0,7,32 ],
        [ 'soundcloud', 'Patent 2 - Process', 'https://soundcloud.com/chaosbot-group/patent-2','331776711', 0,5,59 ],
        [ 'soundcloud', 'Patent 3 - Readdress', 'https://soundcloud.com/chaosbot-group/patent-3','331777464', 0,7,32 ],
        [ 'soundcloud', 'Patent 4 - Transcend', 'https://soundcloud.com/chaosbot-group/patent-4','331777747', 0,8,47 ],
        [ 'soundcloud', 'Patent 5 - Sorry! Program failure!', 'https://soundcloud.com/chaosbot-group/patent-5','331777845', 0,4,54 ],
        [ 'soundcloud', 'The Buddha Did Not Teach Oneness', 'https://soundcloud.com/dbp-5/the-buddha-did-not-teach-onenes', '310428334',
          0,27,54, ],
        [ 'youtube', 'Elve - Vale (Infinite Garden)', 'https://www.youtube.com/watch?v=yyR1jdLaPGA', 0,13,23, ],
        [ 'youtube', 'Future Sound Of London - Papua New Guinea', 'https://www.youtube.com/watch?v=IAvHjoLxxh8', 0,4,49, ],
        [ 'youtube', 'Ajahn Chah - The Path To Peace', 'https://www.youtube.com/watch?v=eSQpTvv81YQ', 0,52,1, ],
        [ 'soundcloud', 'Intro ("The Hyper-Plunder Blunder")', 'https://soundcloud.com/erohypnos/intro-the-hyper-plunder-blunder', '291037078',
          0,0,36, ],
        [ 'soundcloud', 'Nike Slogan On Repeat. Meatknife For The Jugular.',
          'https://soundcloud.com/erohypnos/nike-slogan-on-repeat-meatknife-for-the-jugular', '291037265', 0,3,26, ],
        [ 'soundcloud', 'Future Funk and A E S T H E T I C S Made Me A Dangerous Drunk',
          'https://soundcloud.com/erohypnos/future-funk-and-a-e-s-t-h-e-t-i-c-s-made-me-a-dangerous-drunk-feat-fromtexttospeech-harry-setting',
          '291037449', 0,1,3, ],
        [ 'soundcloud', 'chese pizza, 8-12slices ,no sasauge [Anonymous 01/11/16(Tue)19:49 No. 3758]',
          'https://soundcloud.com/erohypnos/pizza-8-12slices-no-sasauge-anonymous-011116tue1949-no-3758', '291037985', 0,2,42, ],
        [ 'soundcloud', 'hardclam(1-4).xrns, from the \'Fuck the Hanzi//Soft-AntiCorp//Unicode Shit\' Sessions',
          'https://soundcloud.com/erohypnos/hardclam1-4xrns', '291038275', 0,2,39, ],
        [ 'soundcloud', 'hardclam5.xrns, from the \'Fuck the Hanzi//Soft-AntiCorp//Unicode Shit\' Sessions',
          'https://soundcloud.com/erohypnos/hardclam5xrns', '291038495', 0,3,37, ],
        [ 'soundcloud', 'K:\\music\\trx\\(K:\\music\\trx\\(K:\\music\\trx\\(K:\\...\\\\\\\\)))',
          'https://soundcloud.com/erohypnos/kmusictrxkmusictrxkmusictrxk', '323209653', 0,2,8, ],
        [ 'soundcloud', 'Outro ("The Meta-Plunder Blunder" feat. Track 2 [meatknife.xrns])',
          'https://soundcloud.com/erohypnos/outro-the-meta-plunder-blunder-feat-track-2-meatknifexrns', '291038596', 0,0,29, ],
        [ 'youtube', 'Sasha The Eclipse New Years Eve 1990', 'https://www.youtube.com/watch?v=uij11TMnSEE', 1,6,37, ],
      ],
      'friday' : [
        [ 'youtube', 'Sasha - Xpander', 'https://www.youtube.com/watch?v=z3Gu7CXfRdA', 0,10,44, ],
        [ 'youtube', 'Chable & Bonnici - Ride (Mashtronic Mix)', 'https://www.youtube.com/watch?v=pIeJLef04ns', 0,7,40, ],
        [ 'youtube', 'SYNTECH - SOUNDLY COMPUTED (℗1988)', 'https://www.youtube.com/watch?v=pW0qSZFp8Kg', 0,6,35, ],
        [ 'youtube', 'The Future Sound Of London - Papua New Guinea HD (Offical Video)', 'https://www.youtube.com/watch?v=wfWMv8Y1V5E', 0,6,49,
        ],
        [ 'youtube', 'Redanka - Waves (E-Mission Mix)', 'https://www.youtube.com/watch?v=Ego9o9OYp0o', 0,8,41, ],
        [ 'soundcloud', 'The Buddha Did Not Teach Oneness', 'https://soundcloud.com/dbp-5/the-buddha-did-not-teach-onenes', '310428334',
          0,27,54, ],
        [ 'youtube', 'Luxury Elite - Shadows', 'https://www.youtube.com/watch?v=i7Z6ocYmSww', 0,2,55, ],
        [ 'youtube', 'VHS Logos - Marinate Mix', 'https://www.youtube.com/watch?v=yLIJ6xlNSEU', 0,9,51, ],
        [ 'youtube', 'skynet uk clear skies - redanka\'s distorted skies mix', 'https://www.youtube.com/watch?v=sBJQN6oSyg8', 0,8,36, ],
        [ 'youtube', 'OD404 - 9 Bar (BK & dBm 10 Kilo Remix)', 'https://www.youtube.com/watch?v=Z1HAXuQXxzU', 0,7,24, ],
        [ 'youtube', 'Spanish Fly - Hipster (Bumster Mix)', 'https://www.youtube.com/watch?v=4K_8jZXWGRY', 0,9,8, ],
        [ 'youtube', 'Suzanne Ciani - The Second Wave: Sirens', 'https://www.youtube.com/watch?v=mmT0qrHsLiw', 0,7,18, ],
        [ 'soundcloud', 'Progressve House Progcast #113 Mixed by Tim Azar',
          'https://soundcloud.com/dbp-5/progressve-house-progcast-113-mixed-by-tim-azar', '207509186', 1,8,42, ],
        [ 'soundcloud', 'Essential Mix - Miami WMC - 27-MAR-2005 - Pt.1- With Desyn Masiello',
          'https://soundcloud.com/decaraalapared/essential-mix-miami-wmc-27-mar', '51748429', 1,2,4, ],
        [ 'youtube', 'Astrud Gilberto & Stan Getz: The Girl From Ipanema- 1964', 'https://www.youtube.com/watch?v=UJkxFhFRFDA', 0,3,1, ],
        [ 'youtube', 'Astrud Gilberto - FLY ME TO THE MOON - 1964 - Stereo', 'https://www.youtube.com/watch?v=ldt_ylbAqe4', 0,2,21, ],
        [ 'youtube', 'Backstreet Boys - Larger Than Life', 'https://www.youtube.com/watch?v=MEb2CecR11I', 0,5,18, ],
        [ 'youtube', 'DJ Brian - Hardesertrance2', 'https://www.youtube.com/watch?v=SYhby0LgCtg', 1,7,47, ],
        [ 'youtube', 'Jim Clarke - Paraguay', 'https://www.youtube.com/watch?v=NoInDWMr6Vc', 0,9,30, ],
        [ 'youtube', 'Non Stop Energy (Original Mix)', 'https://www.youtube.com/watch?v=E2il8Dd1LRo', 0,7,28, ],
        [ 'youtube', 'Rubec Membrain', 'https://www.youtube.com/watch?v=HOC7BO4p6TY', 0,8,22, ],
        [ 'youtube', 'Simon Eve & Dynamic Intervention - No Turning Back', 'https://www.youtube.com/watch?v=4ZsjmhRJD28', 0,7,37, ],
        [ 'youtube', 'Ajahn Jayasaro - Suffering And Kamma', 'https://www.youtube.com/watch?v=IQChqAJHXFA', 1,3,37, ],
        [ 'youtube', 'Jupiter Prime - Gate To Heaven (Sphere Mix)', 'https://www.youtube.com/watch?v=jCD29yPeQyY', 0,6,25, ],
        [ 'youtube', '\"Aspects of Freedom\" by Ajahn Nyanadhammo', 'https://www.youtube.com/watch?v=22HMb_rV-sc', 1,8,57, ],
        [ 'youtube', 'Ultimate Greatest Hits [full cd] | SPYRO GYRA',
          'https://www.youtube.com/watch?v=T8aHGHbHCGM', 2,39,29, ],
        [ 'youtube', 'Akazukin ChaCha - Introduction to magic class', 'https://www.youtube.com/watch?v=2lmkhE1JMb8', 0,2,19, ],
      ],
      'warning' : [
        [ 'youtube', 'Velvet Girl - Velvet (Original Mix) [HD]',
          'https://www.youtube.com/watch?v=beUeu0g_ojM', 0,8,31, ],
        [ 'youtube', 'Barry Lyndon - Movie trailer from Kubrick`s Film',
          'https://www.youtube.com/watch?v=M4aDIc4uCOc', 0,2,10, ],
      ],
      'back' : [
        [ 'youtube', 'Backstreet Boys - Larger Than Life',
          'https://www.youtube.com/watch?v=MEb2CecR11I', 0,5,18, ],
      ],
      'yzma' : [
        [ 'youtube', 'The Emperors New Groove-Yzma\'s Plan', 'https://www.youtube.com/watch?v=KdB_zJXx_AE', 0,2,10, ],
      ],
      'contact' : [
        [ 'youtube', '3-2-1 Contact Opening Theme/Intro 1983-1986 #2', 'https://www.youtube.com/watch?v=s2-LEBc2sO8', 0,0,49, ],
      ],
      'borg' : [
        [ 'youtube', 'Hugh Leaves the Enterprise', 'https://www.youtube.com/watch?v=Cz_MLQLO2vQ', 0,3,53, ],
      ],
      'track' : [
        [ 'audio', 'Track 1', '/track1.wav', 0,20,0 ],
        [ 'audio', 'Track 2', '/track2.wav', 0,19,49 ]
      ],
      'doom' : [
        [ 'shift', 0,0,30, 'youtube', 'Indiana Jones: And The Temple Of Doom - Theme Song', 'https://www.youtube.com/watch?v=QuppgsGPfoo', 0,6,18, ],
      ],
      'wheel' : [
        [ 'youtube', 'Carpe Diem - Snake Charmer (KK Project Remix)',
          'https://www.youtube.com/watch?v=u3zLW-C_owY', 0,5,12 ]
      ],
      'disarm' : [
        [ 'youtube', 'disarm',
          'https://www.youtube.com/watch?v=n89zmPoAIy8', 0,14,8 ]
      ],
      'taco' : [
        [ 'youtube', 'GIR LOVES TACOS',
          'https://www.youtube.com/watch?v=6fJh7j3INmw', 0,0,48, ],
      ],
      'fiction' : [
        [ 'youtube', 'fiction',
          'https://www.youtube.com/watch?v=lWI6dcQhmCc', 0,10,0 ]
      ],
      'house' : [
        [ 'youtube', '1988 - 1993 House Classics Mix',
          'https://www.youtube.com/watch?v=AQoQoCZxtS8', 1,53,15, ],
      ],
      'mars' : [
        [ 'youtube', 'Marvin the Martian', 'https://www.youtube.com/watch?v=LkbWF-kDK8Y', 0,1,12, ],
      ],
      'comet' : [
        [ 'youtube', 'Heman - The Cosmic Comet',
          'https://www.youtube.com/watch?v=Oq49Wz87ba4', 0,21,28, ],
        [ 'youtube', 'Ayahuasca and DMT for Addiction and Opiate/Heroin Withdrawal',
          'https://www.youtube.com/watch?v=gxTq0Umk1Is', 0,10,37, ],
      ],
      'prism' : [
        [ 'youtube', 'PrismCorp Virtual Enterprises - ClearSkies™ (Full Cassette Rip)',
          'https://www.youtube.com/watch?v=ieuGJL8Ayvk', 1,2,2, ],
      ],
      'meow'  : [
        [ 'soundcloud', '- La Dolce Vita -Fontana Di Trevi-',
          'https://soundcloud.com/lucifer-rothschild-363442434/la-dolce-vita-fontana-di-trevi',
          '337311400', 0,2,0 ],
        [ 'soundcloud', '- La Dolce Vita -Fontana Di Trevi-',
          'https://soundcloud.com/lucifer-rothschild-363442434/la-dolce-vita-fontana-di-trevi',
          '337311400', 0,2,0 ],
        [ 'soundcloud', '- La Dolce Vita -Fontana Di Trevi-',
          'https://soundcloud.com/lucifer-rothschild-363442434/la-dolce-vita-fontana-di-trevi',
          '337311400', 0,2,0 ],
        [ 'soundcloud', '- La Dolce Vita -Fontana Di Trevi-',
          'https://soundcloud.com/lucifer-rothschild-363442434/la-dolce-vita-fontana-di-trevi',
          '337311400', 0,2,0 ],
        [ 'soundcloud', '- La Dolce Vita -Fontana Di Trevi-',
          'https://soundcloud.com/lucifer-rothschild-363442434/la-dolce-vita-fontana-di-trevi',
          '337311400', 0,2,0 ],
      ],
      'lose' : [
        [ 'youtube', 'In Our Hands: How to Lose What We Have (1950)',
          'https://www.youtube.com/watch?v=8UFYluWMDiM', 0,11,53, ],
      ],
      'fuck' : [
        [ 'youtube', 'fuck', 'https://www.youtube.com/watch?v=wc4YQkD8XuE', 0,10,2 ]
      ],
      'god' : [
        [ 'image' , 'truth', 'https://i.imgur.com/XYPj916.jpg', 0,0,30 ]
      ],
      'here' : [
        [ 'soundcloud' , 'Ram Dass - Here We All Are (Be Here Now)',
          'https://soundcloud.com/lucifer-rothschild-363442434/ram-dass-here-we-all-are-be-here-now',
          '336679473', 2,5,31 ]
      ],
      'rikki' : [
        [ 'image' , 'Rikki', 'http://img288.imagevenue.com/loc429/th_844355711_Silver_Starlets_Rikki_studiopractice_2_012_122_429lo.JPG',
          0,0,30 ]
      ],
      'tikki' : [
        [ 'image' , 'Tikki', 'http://img154.imagevenue.com/loc578/th_844423438_Silver_Starlets_Rikki_studiopractice_2_041_122_578lo.JPG',
          0,0,30 ]
      ],
      'tavi' : [
        [ 'image' , 'Tavi', 'http://img15.imagevenue.com/loc476/th_242406820_Silver_Starlets_Rikki_studiopractice_3_027_122_476lo.JPG',
          0,0,30 ]
      ],
      'rikki-tikki-tavi' : [
        [ 'youtube', 'Rikki-Tikki-Tavi - Clip', 'https://www.youtube.com/watch?v=Kl7f2ytS7Vw', 0,1,52 ]
      ],
      'unicron' : [
        [ 'youtube', 'Transformers G1 The Movie Unicron Destroys Lithone',
          'https://www.youtube.com/watch?v=cJRfABxL4R8', 0,2,26 ],
        [ 'youtube', 'Transformers G1 The Movie Unicron Destroys The Moonbases',
          'https://www.youtube.com/watch?v=QWiSwfPzdiw', 0,2,29 ],
        [ 'youtube', 'Transformers G1 The Movie The Autobots Attack Unicron',
          'https://www.youtube.com/watch?v=IWJsbIKsif8', 0,1,30 ]
      ],
      'nuke' : [
        [ 'youtube', 'Shaggy - It Wasn\'t Me', 'https://www.youtube.com/watch?v=Qv5fqunQ_4I', 0,3,45 ],
        [ 'youtube', 'Shaggy - Boombastic', 'https://www.youtube.com/watch?v=6W5pq4bIzIw', 0,3,54 ],
      ],
      'exodus' : [
        [ 'dailymotion', 'Thundercats - S 1 E 1 - Exodus',
          'http://www.dailymotion.com/video/x4v7m3v', 0,24,58 ]
      ],
      'girl' : [
        [ 'soundcloud', 'Xya', 'https://soundcloud.com/dbp-5/xya',
          '321078380', 0,13,54 ],
        [ 'soundcloud', 'The Sun Falls Beneath Her',
          'https://soundcloud.com/elitegeographic/the-sun-falls-beneath-her', '307187174', 0,3,23, ]
      ],
      'alpha' : [
        [ 'youtube', 'DJ Nemesis - Alpha One',
          'https://www.youtube.com/watch?v=nY3G-GPNfQQ', 1,9,42 ]
      ],
      'gold' : [
        [ 'youtube', 'Fiddler on the roof - If I were a rich man (with subtitles)',
          'https://www.youtube.com/watch?v=RBHZFYpQ6nc', 0,5,41 ]
      ],
      'girls' : [
        [ 'personality', 0,0,30 ],
        [ 'youtube', 'Alice In Wonderland - All In The Golden Afternoon',
          'https://www.youtube.com/watch?v=g0lbfEb8MMk', 0,2,37 ],
        [ 'youtube', 'Secret of Nimh Climax Scene (House Raising)',
          'https://www.youtube.com/watch?v=8Q6WCdQm2Jo', 0,4,21 ],
        [ 'youtube', 'Alabama Alpha Phi 2015 Recruitment Video',
          'https://www.youtube.com/watch?v=KudwS5U9ouA', 0,4,13 ],
        [ 'soundcloud', 'The Sun Falls Beneath Her',
          'https://soundcloud.com/elitegeographic/the-sun-falls-beneath-her', '307187174', 0,3,23 ],
        [ 'soundcloud', 'Why Meditate ~ 4 Kinds Of Happiness ~ Ayya Khema',
          'https://soundcloud.com/anythingbot/why-meditate-4-kinds-of-happiness-ayya-khema', '209126349', 1,30,8 ]
      ],
      'pays' : [
        [ 'youtube', 'Who pays for security at NPM corporate headquarters?',
          'https://www.youtube.com/watch?v=vkeEEoQIN3k', 0,3,24, ],
        [ 'youtube', 'Ayla - Ayla (Taucher Remix) (1996)',
          'https://www.youtube.com/watch?v=C1-jlBC2up8', 0,9,30, ]
      ],
      'next' : [
        [ 'dailymotion', 'Bugs Bunny - Rabbit Of Seville', 'http://www.dailymotion.com/video/x2o5y7d', 0,7,31 ]
      ],
      'nine' : [
        [ 'youtube', 'Ace The Space - 9 Is A Classic (Disco Brother\'s Mix)',
          'https://www.youtube.com/watch?v=hCOtM--TDto', 0,6,26 ]
      ]
    };

    var talkPLs = [
       [
         [ 'youtube', 'Ajahn Chah - Convention And Liberation', 'https://www.youtube.com/watch?v=gxVGofXtaD8', 0,17,20 ],
         [ 'youtube', 'Ajahn Chah - Living In This World', 'https://www.youtube.com/watch?v=kOK6W-vOLec', 0,19,19 ]
       ],
       [
         [ 'youtube', 'Ajahn Chah - Opening The Dhamma Eye', 'https://www.youtube.com/watch?v=aHPMeqW8a0c', 0,32,6 ]
       ],
       [
         [ 'youtube', 'Ajahn Chah - Not Sure(Anicca)', 'https://www.youtube.com/watch?v=LYtCAEeliVo', 0,30,57 ]
       ]
    ];

    var makeCartridge = function (plSource) {
      var items = [];
      var grandTotalSeconds = 0;
      // compute total seconds and ETL
      var i;
      for (i = 0; i < plSource.length; i += 1) {
        var plItem = plSource[i];
        var puzzleID, hasPuzzle; // a [PUZZLE NAME]:[PUZZLE DETAILS] string
        puzzleID = '0', hasPuzzle = 0;
        if (plItem[0] === 'puzzle') {
            hasPuzzle = 1;
            puzzleID = plItem[1];
            plItem = plItem.slice(2);
        }
        var shiftHours, shiftMinutes, shiftSeconds;
        shiftHours = 0; shiftMinutes = 0; shiftSeconds = 0;
        if (plItem[0] === 'shift') {
            shiftHours = plItem[1];
            shiftMinutes = plItem[2];
            shiftSeconds = plItem[3];
            plItem = plItem.slice(4);
        }
        var itemNetwork = plItem[0];
        var itemTitle, itemContent, itemSeconds, itemMinutes, itemHours,
            itemURL, itemMid, itemName, itemHandle, itemDatetime, itemDatestring;
        itemContent = '';
        itemURL = '';
        itemMid = '0';
        if (itemNetwork === 'title') {
            itemTitle = plItem[1];
            itemHours = plItem[2];
            itemMinutes = plItem[3];
            itemSeconds = plItem[4];
        } else if (itemNetwork === 'image') {
            itemTitle = plItem[1];
            itemURL = plItem[2];
            itemHours = plItem[3];
            itemMinutes = plItem[4];
            itemSeconds = plItem[5];
            itemMid = plItem[2];
        } else if (itemNetwork === 'instagram') {
            itemTitle = plItem[1];
            itemURL = plItem[2];
            itemName = plItem[3];
            itemHandle = plItem[4];
            itemDatetime = plItem[5];
            itemDatestring = plItem[6];
            itemHours = plItem[7];
            itemMinutes = plItem[8];
            itemSeconds = plItem[9];
            itemMid = plItem[2];
        } else if (itemNetwork === 'archive') {
            itemTitle = plItem[1];
            itemURL = plItem[2];
            var sliceIndex = 1 + plItem[2].lastIndexOf("/");
            itemMid = plItem[2].slice(sliceIndex);
            itemHours = plItem[3];
            itemMinutes = plItem[4];
            itemSeconds = plItem[5];
        } else if (itemNetwork === 'audio') {
            itemTitle = plItem[1];
            itemMid = plItem[2];
            itemURL = itemMid;
            itemHours = plItem[3];
            itemMinutes = plItem[4];
            itemSeconds = plItem[5];
        } else if (itemNetwork === 'youtube') {
            itemTitle = plItem[1];
            itemURL = plItem[2];
            itemMid = plItem[2].slice(plItem[2].length-11);
            itemHours = plItem[3];
            itemMinutes = plItem[4];
            itemSeconds = plItem[5];
            // compensate for timing
            var s = Number(itemSeconds) + 60 * Number(itemMinutes) + 60 * 60 * Number(itemHours);
            s += 2;
            itemSeconds = (s % 60) | 0;
            itemMinutes = (((s - itemSeconds) / 60) % 60) | 0;
            itemHours = (((s - itemSeconds) / 60 - itemMinutes) / 60) | 0;
        } else if (itemNetwork === 'dailymotion') {
            itemTitle = plItem[1];
            itemURL = plItem[2];
            itemMid = plItem[2].slice(plItem[2].length-7);
            itemHours = plItem[3];
            itemMinutes = plItem[4];
            itemSeconds = plItem[5];
            // compensate for preroll
            var s = Number(itemSeconds) + 60 * Number(itemMinutes) + 60 * 60 * Number(itemHours);
            s += 15;
            itemSeconds = (s % 60) | 0;
            itemMinutes = (((s - itemSeconds) / 60) % 60) | 0;
            itemHours = (((s - itemSeconds) / 60 - itemMinutes) / 60) | 0;
        } else if (itemNetwork === 'soundcloud') {
            if (plItem.length != 7) {
                console.log("Error: soundcloud media entry must have seven array items");
                console.log("Error: " + JSON.stringify(plItem));
                process.abort();
            }
            itemTitle = plItem[1];
            itemURL = plItem[2];
            itemMid = plItem[3];
            itemHours = plItem[4];
            itemMinutes = plItem[5];
            itemSeconds = plItem[6];
        } else if (itemNetwork === 'story') {
            itemMid = plItem[1];
            itemTitle = media.stories[itemMid].title;
            itemContent = media.stories[itemMid].body;
            itemHours = plItem[2];
            itemMinutes = plItem[3];
            itemSeconds = plItem[4];
        } else if (itemNetwork === 'personality') {
            itemTitle = 'personality';
            itemHours = plItem[1];
            itemMinutes = plItem[2];
            itemSeconds = plItem[3];
        } else {
            console.log('Unknown media network: ',plItem);
        }
        var itemTotalSeconds = itemSeconds + 60 * itemMinutes + 60 * 60 * itemHours;
        var shiftTotalSeconds = shiftSeconds + 60 * shiftMinutes + 60 * 60 * shiftHours;
        itemTotalSeconds -= shiftTotalSeconds;
        var item = {
            shiftHours : shiftHours,
            shiftMinutes : shiftMinutes,
            shiftSeconds : shiftSeconds,
            shiftTotalSeconds : shiftTotalSeconds,
            hours   : itemHours,
            minutes : itemMinutes,
            seconds : itemSeconds,
            totalSeconds : itemTotalSeconds,
            network : itemNetwork,
            mid : itemMid,
            url : itemURL,
            title : itemTitle,
            name : itemName,
            handle : itemHandle,
            datetime : itemDatetime,
            datestring : itemDatestring,
            hasPuzzle : hasPuzzle,
            puzzleID : puzzleID,
            content : itemContent
        };
        items.push(item);
        grandTotalSeconds += itemTotalSeconds;
      }
      // returns a cartridge
      return {
        items : items,
        grandTotalSeconds : grandTotalSeconds,
      };
    }

    var makeCartridges = function(plSources) {
        var results = [];
        var i;
        for (i = 0; i < plSources.length; i += 1) {
            results.push(makeCartridge(plSources[i]));
        }
        return results;
    }

    var getMediaAt = function (cartridge, seconds) {
      // cartridge: something with 'grandTotalSeconds' and 'items'
      // seconds = number of seconds since midnight
      // return the media item in progress and offset in seconds
      seconds = seconds % cartridge.grandTotalSeconds;
      var items = cartridge.items;

      var i;
      for (i = 0; i < items.length; i += 1) {
        var item = items[i];
        if (seconds < item.totalSeconds) {
          return [item,seconds + item.shiftTotalSeconds];
        }
        seconds -= item.totalSeconds;
      }
    };

    var media = null;

    var conAction = {
        'onblock' : (function () {
                        media.block = media.getSPM(new Date());
                        console.log("[video] block");  }),
        'onunblock' : (function () {
                        media.block = null;
                        console.log("[video] unblock");  })
    }

    var syncCon = function (con) {
        var i;
        var conkeys = Object.keys(con);
        for (i = 0; i < conkeys.length; i += 1) {
            var key = conkeys[i];
            if (! media.con[key]) {
                // trigger the named action
                if (conAction['on' + key]) {
                    var action = conAction['on' + key];
                    action();
                }
            }
        }
        media.con = con;
    }

    var secondsPerDay = 24 * 60 * 60;

    var getDataForUTC = function (utc,datatype) {
      var cartridge;
      var dayOfWeek = utc.getDay();
      if (dayOfWeek == 0 || dayOfWeek == 6) {
          cartridge = media.weekendCartridge;
      } else if (dayOfWeek == 3) {
          cartridge = media.wednesdayCartridge;
      } else if (dayOfWeek == 4) {
          cartridge = media.thursdayCartridge;
      } else if (dayOfWeek == 5) {
          cartridge = media.fridayCartridge;
      } else {
          cartridge = media.weekdayCartridge;
      }
      cartridge = media.todayCartridge;
      // Add jew
      if (utc.getMonth() == 2 && utc.getDate() >= 9 && utc.getDate() <= 11) {
          cartridge = media.jewCartridge;
      }
      // compute seconds past midnight
      var spmUTC;
      if (media.block == null) {
          spmUTC = utc.getSeconds() + 60 *
              utc.getMinutes() + 60 * 60 * utc.getHours();
          var spmUTC = (media.offsetSeconds + spmUTC) % secondsPerDay;
      } else {
          spmUTC = media.block;
      }
      // night
      if (spmUTC >= 3 * 3600 + 30 * 60 && spmUTC <= 4 * 3600 + 51 * 60) {
          cartridge = media.nightCartridge;
      }
      // blade runner
      if (spmUTC >= 4 * 3600 + 51 * 60 && spmUTC < 11 * 3600) {
          cartridge = media.ghostrunnerCartridge;
      }
      // math
      if (spmUTC >= 16 * 3600 && spmUTC % 3600 < 10 * 60) {
          cartridge = media.mathCartridge;
      }
      if (media.special[0] != null) {
          var specialEntry = media.special[1];
          if (spmUTC < media.special[0] ||
                  media.special[0] + specialEntry.grandTotalSeconds < spmUTC) {
              media.special = [null,null];
          } else {
              spmUTC -= media.special[0];
              cartridge = specialEntry;
          }
      }
      var x = media.getMediaAt(cartridge,spmUTC);
      var mediaItem = x[0];
      if (datatype == 'puzzle') {
          if (mediaItem.hasPuzzle) {
              return mediaItem.puzzleID;
          } else {
              return 'none:none';
          }
      }
      var itemTotalSeconds = mediaItem.totalSeconds;
      var secondsInto = x[1];
      var secondsRemaining = itemTotalSeconds - (secondsInto - mediaItem.shiftTotalSeconds);
      // check for puzzle solution
      // If the media item has a puzzle that has not yet been solved, replace the
      // media item with a title, the name:details puzzle identifier
      if (mediaItem.hasPuzzle) {
         if (media.solved[mediaItem.puzzleID]) {
             ;
         } else {
             mediaItem = { 'network' : 'title', 'title' : mediaItem.puzzleID,
                     'mid' : mediaItem.puzzleID };
         }
      }
      var data = {};
      data.mediaIsAudio = 0;
      data.mediaIsYoutube = 0;
      data.mediaIsSoundcloud = 0;
      data.mediaIsDailymotion = 0;
      data.mediaIsImage = 0;
      data.mediaIsInstagram = 0;
      data.mediaIsArchive = 0;
      data.mediaIsTitle = 0;
      if (mediaItem.network == "title") {
          data.mediaIsTitle = 1;
      } else if (mediaItem.network == "image") {
          data.mediaIsImage = 1;
      } else if (mediaItem.network == "instagram") {
          data.mediaIsInstagram = 1;
      } else if (mediaItem.network == "archive") {
          data.mediaIsArchive = 1;
      } else if (mediaItem.network == "audio") {
          data.mediaIsAudio = 1;
      } else if (mediaItem.network == "youtube") {
          data.mediaIsYoutube = 1;
      } else if (mediaItem.network == "soundcloud") {
          data.mediaIsSoundcloud = 1;
      } else if (mediaItem.network == "dailymotion") {
          data.mediaIsDailymotion = 1;
      } else if (mediaItem.network == "story") {
          data.mediaIsStory = 1;
      }
      data.mid = mediaItem.mid;
      data.time = secondsInto;
      data.secondsTotal = itemTotalSeconds;
      data.secondsElapsed = secondsInto;
      data.secondsRemaining = secondsRemaining;
      data.title = mediaItem.title;
      data.content = mediaItem.content;
      return data;
    }

    var getMediaForUTC = function (utc) {
      return getDataForUTC(utc, 'media');
    }

    var getPuzzleForUTC = function (utc) {
      return getDataForUTC(utc, 'puzzle');
    }

    var checkSolution = function(puzzleID) {
        if (puzzleID == "add:3 + 5") {
            if (media.candidates['add:3 + 5'] == 8) {
                media.solved['add:3 + 5'] = 1;
                return 1;
            } else {
                return 0;
            }
        }
        if (puzzleID == "???") {
            if (media.candidates['???'] == 'q') {
                media.solved['???'] = 1;
                return 1;
            } else {
                return 0;
            }
        }
        return 0;
    }

    var spm_max = 60 * 60 * 24 - 1;

    var getSPM = function (d) {
      var d_utc = new Date(d.getUTCFullYear(),
        d.getUTCMonth(), d.getUTCDate(),
        d.getUTCHours(), d.getUTCMinutes(),
        d.getUTCSeconds());
      var secondsPastMidnightUTC = d_utc.getSeconds() + 60 *
        d_utc.getMinutes() + 60 * 60 * d_utc.getHours();
      return secondsPastMidnightUTC;
    };

    var onSpecial = function (key) {
      media.special = [media.getSPM(new Date()),media[key + 'Cartridge']];
    }

    var onTalk = function () {
      if (media.talkCounter == '?') {
          media.talkCounter = Date.now() % media.talkCartridges.length;
      }
      media.special = [media.getSPM(new Date()),media.talkCartridges[media.talkCounter]];
      media.talkCounter = (media.talkCounter + 1) % media.talkCartridges.length;
    };

    var onCancel = function () {
      media.special = [null,null];
    };

    var onSkip = function(nMinutes) {
      nMinutes = Number(nMinutes);
      if (! nMinutes) {
          nMinutes = 0;
      }
      if (media.special[0] && media.special[0] > 60 * nMinutes) {
          media.special[0] -= 60 * nMinutes;
      } else {
          media.offsetSeconds = (media.offsetSeconds + 60 * nMinutes) % secondsPerDay;
      }
    };

    var makeCartridgeIndex = function () {
      var i;
      var cartkeys = Object.keys(PLs);
      for (i = 0; i < cartkeys.length; i += 1) {
          media[cartkeys[i] + 'Cartridge'] = makeCartridge(PLs[cartkeys[i]]);
      }
      media.cartkeys = cartkeys;
    }

    // reset the net or cumulative N for commands "skip N" back to zero
    var resetOffset = function () {
      setTimeout(resetOffset, secondsPerDay * 1000);
      media.offsetSeconds = 0;
    };

    // effectively a cron job; runs at midnight UTC
    var startResetOffset = function () {
      var d = new Date();
      var d_utc = new Date(d.getUTCFullYear(),
        d.getUTCMonth(), d.getUTCDate(),
        d.getUTCHours(), d.getUTCMinutes(),
        d.getUTCSeconds());
      var secondsPastMidnightUTC = d_utc.getSeconds() + 60 *
        d_utc.getMinutes() + 60 * 60 * d_utc.getHours();
      setTimeout(resetOffset, secondsPerDay * 1000 - secondsPastMidnightUTC);
    };

    startResetOffset();

    var onRestart = function () {
      media.restartState = 1;
      setTimeout(power_cycle.restart, 10000);
    };

    // candidates - candidate answers to puzzles
    //            - KEY is a puzzle identifier of the form "[PUZZLE NAME]:[PUZZLE DETAILS]"
    //            - VALUE is a solution the user submitted
    // solved - an object with a key for the puzzle identifier of every solved puzzle
    // con - consciousness

    var suttaparts = [
['Thus have I heard. At one time the Lord was staying near',
'Savatthi in the Jeta Wood at Anathapindika\'s monastery. At',
'that time Bahiya of the Bark-cloth was living by the',
'seashore at Supparaka. He was respected, revered, honored,',
'venerated, and given homage, and was one who obtained the',
'requisites of robes, almsfood, lodging, and medicines.',
'',
'Now while he was in seclusion, this reflection arose in the',
'mind of Bahiya of the Bark-cloth: "Am I one of those in the',
'world who are arahats or who have entered the path to',
'arahatship?"'],

['Then a devata who was a former blood-relation of Bahiya of',
'the Bark-cloth understood that reflection in his mind.',
'Being compassionate and wishing to benefit him, he',
'approached Bahiya and said: "You, Bahiya, are neither an',
'arahant nor have you entered the path to arahatship. You do',
'not follow that practice whereby you could be an arahant or',
'enter the path to arahatship."',
'',
'"Then, in the world including the devas, who are arahats or',
'have entered the path to arahatship?"'],

['"There is, Bahiya, in a far country a town called Savatthi.',
'There the Lord now lives who is the Arahant, the Fully',
'Enlightened One. That Lord, Bahiya, is indeed an arahant',
'and he teaches Dhamma for the realization of arahatship."',
'',
'Then Bahiya of the Bark-cloth, profoundly stirred by the',
'words of that devata, then and there departed from',
'Supparaka.'],

['Stopping only for one night everywhere (along',
'the way), he went to Savatthi where the Lord was staying in',
'the Jeta Wood at Anathapindika\'s monastery. At that time a',
'number of bhikkhus were walking up and down in the open',
'air. Then Bahiya of the Bark-cloth approached those',
'bhikkhus and said: "Where, revered sirs, is the Lord now',
'living, the Arahant, the Fully Enlightened One? We wish to',
'see that Lord who is the Arahant, the Fully Enlightened',
'One."'],

['"The Lord, Bahiya, has gone for almsfood among the houses."',
'',
'Then Bahiya hurriedly left the Jeta Wood. Entering',
'Savatthi, he saw the Lord walking for almsfood in Savatthi',
'— pleasing, lovely to see, with calmed senses and tranquil',
'mind, attained to perfect poise and calm, controlled, a',
'perfected one, watchful with restrained senses. On seeing',
'the Lord he approached, fell down with his head at the',
'Lord\'s feet, and said: "Teach me Dhamma, Lord; teach me',
'Dhamma, Sugata, so that it will be for my good and',
'happiness for a long time."'],

['Upon being spoken to thus, the Lord said to Bahiya of the',
'Bark-cloth: "It is an unsuitable time, Bahiya, we have',
'entered among the houses for almsfood."',
'',
'A second time Bahiya said to the Lord: "It is difficult to',
'know for certain, revered sir, how long the Lord will live',
'or how long I will live. Teach me Dhamma, Lord; teach me',
'Dhamma, Sugata, so that it will be for my good and',
'happiness for a long time." A second time the Lord said to',
'Bahiya: "It is an unsuitable time, Bahiya, we have entered',
'among the houses for almsfood."'],

['A third time Bahiya said to the Lord: "It is difficult to',
'know for certain... Teach me Dhamma, Sugata, so that it',
'will be for my good and happiness for a long time."',
'',
'"Herein, Bahiya, you should train yourself thus: \'In the',
'seen will be merely what is seen; in the heard will be',
'merely what is heard; in the sensed will be merely what is',
'sensed; in the cognized will be merely what is cognized.\'',
'In this way you should train yourself, Bahiya.'],

['"When, Bahiya, for you in the seen is merely what is',
'seen... in the cognized is merely what is cognized, then,',
'Bahiya, you will not be \'with that.\' When, Bahiya, you',
'are not \'with that,\' then, Bahiya, you will not be \'in',
'that.\' When, Bahiya, you are not \'in that,\' then,',
'Bahiya, you will be neither here nor beyond nor in between',
'the two. Just this is the end of suffering."',
'',
'Now through this brief Dhamma teaching of the Lord the mind',
'of Bahiya of the Bark-cloth was immediately freed from the',
'taints without grasping. Then the Lord, having instructed',
'Bahiya with this brief instruction, went away.'],

['Not long after the Lord\'s departure a cow with a young',
'calf attacked Bahiya of the Bark-cloth and killed him. When',
'the Lord, having walked for almsfood in Savatthi, was',
'returning from the alms round with a number of bhikkhus, on',
'departing from the town he saw that Bahiya of the',
'Bark-cloth had died.',
'',
'Seeing this he said to the bhikkhus: "Bhikkhus, take',
'Bahiya\'s body, put it on a litter, carry it away and burn',
'it, and make a stupa for it. Your companion in the holy',
'life has died."'],

['"Very well, revered sir," those bhikkhus replied to the',
'Lord.',
'',
'Taking Bahiya\'s body, they put it upon a litter, carried',
'it away and burnt it, and made a stupa for it. Then they',
'went to the Lord, prostrated themselves, and sat down to',
'one side. Sitting there those bhikkhus said to the Lord:',
'"Bahiya\'s body has been burnt revered sir, and a stupa has',
'been made for it. What is his destiny, what is his future',
'birth?"'],

['"Bhikkhus, Bahiya of the Bark-cloth was a wise man. He',
'practiced according to Dhamma and did not trouble me by',
'disputing about Dhamma. Bhikkhus, Bahiya of the Bark-cloth',
'has attained final Nibbana."',
'',
'Then, on realizing its significance, the Lord uttered on',
'that occasion this inspired utterance:'],

['Where neither water nor yet earth',
'Nor fire nor air gain a foothold,',
'There gleam no stars, no sun sheds light,',
'There shines no moon, yet there no darkness reigns.',
'',
'When a sage, a brahman, has come to know this',
'For himself through his own wisdom,',
'Then he is freed from form and formless.',
'Freed from pleasure and from pain.',
'',
'This inspired utterance was spoken by the Lord also, so I',
'did hear.']];

    var stories = {};

    var addSutta = function () {
        var i;
        for (i = 0; i < suttaparts.length; i += 1) {
            stories['bahiya' + (i + 1)] = {
                title : 'Bahiya Sutta: About Bahiya [' + (i + 1) + '/' + suttaparts.length + ']',
                body : suttaparts[i]
            };
        }
    };

    var addMath = function () {
        stories['math'] = {
                title : 'Math Review',
                body : ['Mathematics Review is a ten minute Anythingbot',
                        'program that airs at the top of the hour, nine',
                        'to four every day of the week. For the first',
                        'five minutes, the video feed introduces the',
                        'topic, and for the last five minutes, the bot',
                        'challenges the user with a puzzle']
        };
    };

    var addGoldstar = function () {
        stories['goldstar'] = {
                title : 'Gold Star',
                body : ['This message confirms the solution to the',
                        'Mathematics Review problem']
        };
    };

    addSutta();
    addMath();
    addGoldstar();

    media = {
      stories : stories,
      restartState : 0,
      candidates : {},
      solved : {},
      con : {},
      syncCon : syncCon,
      getMediaAt : getMediaAt,
      getMediaForUTC : getMediaForUTC,
      getPuzzleForUTC : getPuzzleForUTC,
      checkSolution : checkSolution,
      offsetSeconds : 0,
      talkCounter : '?',
      talkCartridges : makeCartridges(talkPLs),
      special : [null,null],
      block : null,
      onTalk : onTalk,
      onCancel : onCancel,
      onSpecial : onSpecial,
      onSkip : onSkip,
      onRestart : onRestart,
      getSPM : getSPM
    };
    makeCartridgeIndex();
    module.exports = media;
  });
}());
