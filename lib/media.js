(function () {
  'use strict';
  var define = require('amdefine')(module);

  var deps = ['./power_cycle'];

  define(deps, function (power_cycle) {

    var PLs = {
      'weekday' : [
        [ 'youtube', 'Smetana - Die Moldau (Karajan)', 'https://www.youtube.com/watch?v=gTKsHwqaIr4', 0,12,10, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges', 'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges', 'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'Smetana - Die Moldau (Karajan)', 'https://www.youtube.com/watch?v=gTKsHwqaIr4', 0,12,10, ],
        [ 'youtube', 'Aaron Copland - Appalachian Spring, Rodeo, Billy the Kid, Fanfare for the Common Man',
          'https://www.youtube.com/watch?v=SNZs82BZ9R8', 1,7,27, ],
        [ 'soundcloud', 'Steve Mill - Abandoned Fields (Neil Quigley Pacemaker Remix)',
          'https://soundcloud.com/caro_caro/steve-mill-abandoned-fields-neil-quigley-pacemaker-remix', '3538937', 0,8,31, ],
        [ 'youtube', 'Darshan Ambient - Selfless (ambient relaxation)', 'https://www.youtube.com/watch?v=o0Trh6PZ9mM', 0,17,10, ],
        [ 'soundcloud', 'Modernism', 'https://soundcloud.com/fozyofficial/modernism', '216437094', 0,4,40, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges', 'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'Redanka - Waves (E-Mission Mix)', 'https://www.youtube.com/watch?v=Ego9o9OYp0o', 0,8,41, ],
        [ 'youtube', '090407 The Five Hindrances \\ \\ Thanissaro Bhikkhu \\ \\ Dhamma Talks', 'https://www.youtube.com/watch?v=UfprOkjdukw',
          0,16,47, ],
        [ 'youtube', 'Ajahn Amaro - 19.11.14 - Seven Factors of Enlightenment - The Five Hindrances',
          'https://www.youtube.com/watch?v=gLKNlYMJw-Q', 1,57,0, ],
        [ 'youtube', 'Star Trek: The Next Generation - S5E25 The Inner Light (1992)', 'https://www.youtube.com/watch?v=RQKp27ZDuCk', 0,4,3, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges', 'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'The Secret of Tremendous Corporation', 'https://www.youtube.com/watch?v=SZMGCxnUQx8', 0, 1,42, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges', 'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'PFUDOR metal', 'https://www.youtube.com/watch?v=orrGbZaPgwY', 0,1,59, ],
        [ 'youtube', 'Darshan Ambient - A Walk Along The Ganges', 'https://www.youtube.com/watch?v=MiKzf04zsMY', 0,7,47, ],
        [ 'youtube', 'RAVE ON The Eye Tech (96 min.) - Part 2', 'https://www.youtube.com/watch?v=HnumP8hghV4', 1,36,34, ],
        [ 'youtube', 'Lecture 1B | MIT 6.001 Structure and Interpretation, 1986', 'https://www.youtube.com/watch?v=dlbMuv-jix8', 0,58,21, ],
        [ 'youtube', 'MTV Original Broadcast 8/1/1981', 'https://www.youtube.com/watch?v=XBf0yJVMSzI', 0,1,52, ],
        [ 'youtube', 'Suzanne Ciani - "The Fifth Wave: Water Lullaby" (1982)', 'https://www.youtube.com/watch?v=wgJfXeGqNEY', 0,5,47, ],
        [ 'youtube', 'Suzanne Ciani - The Eighth Wave', 'https://www.youtube.com/watch?v=WXZqnGG_lvY', 0,5,10, ],
        [ 'youtube', 'Suzanne Ciani - The Seventh Wave: Sailing Away', 'https://www.youtube.com/watch?v=06nWn98x_ek', 0,6,37, ],
        [ 'youtube', 'K-Billy\'s Super Sounds of the 70\'s', 'https://www.youtube.com/watch?v=-zQmPJwCESI', 0,54,1, ],
        [ 'youtube', 'Journey To The Sun - Adham Shaikh (Full Album)', 'https://www.youtube.com/watch?v=bA9eoAWuT-w', 1,7,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'Channeling', 'https://www.youtube.com/watch?v=7xZCUjM5Tj8', 0,1,35, ],
        [ 'youtube', 'How to get the anythingbot to play your video', 'https://www.youtube.com/watch?v=PyGADsVBa6I', 0,1,21, ],
        [ 'youtube', 'Miracle Max', 'https://www.youtube.com/watch?v=D9tAKLTktY0', 0,4,26, ],
        [ 'youtube', 'AYYA KHEMA - DUKKHA', 'https://www.youtube.com/watch?v=cw7Xg8appRk', 0,44,57, ],
        [ 'youtube', 'Gloria Estefan~ Conga FULL HQ', 'https://www.youtube.com/watch?v=g8v6cZ21vlc', 0,4,15, ],
        [ 'youtube', 'The Alan Parsons Project- Eye in the Sky', 'https://www.youtube.com/watch?v=NNiie_zmSr8', 0,4,39, ],
        [ 'youtube', 'Technasia - Force', 'https://www.youtube.com/watch?v=GKEdgf7IDXE', 0,7,41, ],
        [ 'youtube', 'Helter Skelter Rave 1996 Part 2 of 19', 'https://www.youtube.com/watch?v=tACyvIZRXq0', 0,7,21, ],
        [ 'youtube', 'Eb (Original Mix)', 'https://www.youtube.com/watch?v=w4RtJbGNmz8', 0,6,5, ],
        [ 'youtube', 'LeAnn Rimes - Some Say Love', 'https://www.youtube.com/watch?v=JZ2jNGRXIIw', 0,3,35, ],
        [ 'youtube', 'X-1999 Forever Love', 'https://www.youtube.com/watch?v=_QAFVhGzYpY', 0,8,34, ],
        [ 'youtube', 'Donna Summer - I Feel Love', 'https://www.youtube.com/watch?v=g0tenPCmHFk', 0,5,39, ],
        [ 'youtube', 'Mystical Sun - Journey To Samadhi', 'https://www.youtube.com/watch?v=rEnF1IsI7Nk', 0,32,26, ],
        [ 'youtube', 'Mystical Sun - Journey To Samadhi', 'https://www.youtube.com/watch?v=rEnF1IsI7Nk', 0,32,26, ],
        [ 'youtube', 'Journey to the Far Side of the Sun 1969 720p BluRay x264 YIFY - full movie',
          'https://www.youtube.com/watch?v=EYvTAMMKjsw', 1,24,22, ]
      ],
      'mkultra' : [
        [ 'youtube', 'CIA, FBI, NSA SECRET PSYOPS MK ULTRA NEW PHOENIX ELF WAVES', 'https://www.youtube.com/watch?v=6VID7Mo13cA', 3,9,58, ]
      ],
      'tv' : [
        [ 'youtube', 'Midnight Television : Midnight Television', 'https://www.youtube.com/watch?v=MBWIlv6jKiE', 0,10,15 ]
      ],
      'anthem' : [
        [ 'youtube', 'British Anthem, God Save the Queen (with lyrics)', 'https://www.youtube.com/watch?v=tN9EC3Gy6Nk', 0,2,43 ]
      ],
      'vague' : [
        [ 'youtube', 'luxury elite : 101.7 WAVE II', 'https://www.youtube.com/watch?v=vK75KSr61eE', 0,35,49 ],
        [ 'youtube', 'Oneohtrix Point Never – Memory Vague Full DVD', 'https://www.youtube.com/watch?v=G1flq8LKkzk', 0,33,21 ]
      ],
      'fbi' : [
        [ 'youtube', 'The Matrix - Red dress scene', 'https://www.youtube.com/watch?v=Hw88MWoqenQ', 0,1,13 ],
        [ 'youtube', 'Show Champion EP.221 LIPBUBBLE - POPCORN', 'https://www.youtube.com/watch?v=wfVfJrBpXgs', 0,3,17 ]
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
      'top' : [
        [ 'youtube', 'Top Gun Opening Scene', 'https://www.youtube.com/watch?v=enhRwnkmToM', 0,8,15 ]
      ],
      'chakra' : [
        [ 'youtube', 'Intensity Warning! 1 Hour *Full* Chakra Balance Meditation | Binaural Beats Root To Crown',
          'https://www.youtube.com/watch?v=93-20WlnRck', 1,0,0 ]
      ],
      'world' : [
        [ 'youtube', '"World Receiver" by Tetsu Inoue, 1996', 'https://www.youtube.com/watch?v=grlYRK1aSus', 1,3,50 ]
      ],
      'cia' : [
        [ 'youtube', 'Traffic (4/10) Movie CLIP - Conspiring to Conspire (2000) HD', 'https://www.youtube.com/watch?v=6U6MOfuFX-Q', 0,2,42 ],
        [ 'youtube', 'Apocalypse Now - Colonel Kurtz\'s Monologue', 'https://www.youtube.com/watch?v=KxLFdJLSho8', 0,5,34 ]
      ],
      'usa' : [
        [ 'youtube', 'Bruce Springsteen - Born In The U.S.A.', 'https://www.youtube.com/watch?v=lZD4ezDbbu4', 0,4,43, ]
      ],
      'berlin' : [
        [ 'youtube', '"Berlin Wall" Speech - President Reagan\'s Address at the Brandenburg Gate - 6/12/87',
          'https://www.youtube.com/watch?v=5MDFX-dNtsM', 0,26,42, ],
        [ 'youtube', 'Berlin - Take My Breath Away', 'https://www.youtube.com/watch?v=Bx51eegLTY8', 0,4,11, ]
      ],
      'death' : [
        [ 'youtube', 'Infinity Frequencies : Computer Death', 'https://www.youtube.com/watch?v=RMEauTuOSK0', 0,38,12 ]
      ],
      'afterlife' : [
        [ 'youtube', 'Infinity Frequencies : Computer Afterlife', 'https://www.youtube.com/watch?v=tmFSwI_JQNU', 0,22,39 ]
      ],
      'poem' : [
        [ 'youtube', 'Clemens Kuby über Selbstheilkraft', 'https://www.youtube.com/watch?v=9uwwieGEzT8', 0,57,2 ],
        [ 'youtube', 'Jede Zelle meines Körpers ist glücklich // Astrid Kuby', 'https://www.youtube.com/watch?v=pJW-dTuMvQM', 0,15,23 ],
        [ 'youtube', 'Sofort wieder gut drauf sein – wie geht das? // Dr. Stefan Frädrich',
          'https://www.youtube.com/watch?v=YT2Q6rxkTdo', 0,12,19 ],
        [ 'youtube', 'Wie hört man sofort mit dem Rauchen auf? // Dr. Stefan Frädrich',
          'https://www.youtube.com/watch?v=bU4cyLL-g6U', 0,23,13 ],
        [ 'youtube', 'Aus dem Takt - Herzrhythmusstörungen (medicus Ausgabe 51)', 'https://www.youtube.com/watch?v=2O3U82mN9Nw', 0,10,27 ],
        [ 'youtube', 'Vorhofflimmern - Ursachen, Symptome und Behandlung', 'https://www.youtube.com/watch?v=logoMP1yw18', 0,9,12 ],
        [ 'youtube', 'Ablation bei Vorhofflimmern: Effektive Therapie bei Herzrhythmusstörungen (Köln)',
          'https://www.youtube.com/watch?v=qn7mLzR2Qf8', 0,5,7 ],
        [ 'youtube', 'Reveal LINQ - So wird das kleinste EKG der Welt implantiert',
          'https://www.youtube.com/watch?v=0lJeA63KLy4', 0,2,43 ],
        [ 'youtube', 'L\'impianto del loop recorder Reveal LINQ', 'https://www.youtube.com/watch?v=vhn0Glf646A', 0,2,5 ],
        [ 'youtube', 'Implantation of LINQ loop recorder - Ali Sovari, MD', 'https://www.youtube.com/watch?v=8blfW1KkWg8', 0,1,30 ],
        [ 'youtube', 'How to implant the new insertable loop recorder', 'https://www.youtube.com/watch?v=XMnHjRd8GRs', 0,0,51 ],
        [ 'youtube', 'Pacemakers & Implantable Defibrillators: How are they implanted and what is their function?',
          'https://www.youtube.com/watch?v=IocuieEC4sg', 0,2,35 ],
        [ 'youtube', 'Pacemaker Implantation', 'https://www.youtube.com/watch?v=H8JtKX8m16w', 0,9,17 ],
        [ 'youtube', 'Permanent Pacemaker Implant Surgery', 'https://www.youtube.com/watch?v=F1HKeBTuT4k', 0,6,5 ],
      ],
      'rats' : [
        [ 'youtube', 'SUSPENSE -- "THREE SKELETON KEY" (11-11-56)', 'https://www.youtube.com/watch?v=1uT4Q36hNTI', 0,29,54, ]
      ],
      'dead' : [
        [ 'youtube', 'The Future Sound Of London Dead Cities', 'https://www.youtube.com/watch?v=SOjWMiPktqw', 1,10,10, ]
      ],
      'poly' : [
        [ 'youtube', 'Vektroid - Polytravellers [Full Album]', 'https://www.youtube.com/watch?v=kFdfLXZel0c', 0,52,47, ]
      ],
      'brave' : [
        [ 'youtube', 'Aldous Huxley Narrates "Brave New World"', 'https://www.youtube.com/watch?v=1etUD_AE59g', 0,59,25, ]
      ],
      'alive' : [
        [ 'youtube', 'It\'s Alive! - Frankenstein (2/8) Movie CLIP (1931) HD', 'https://www.youtube.com/watch?v=1qNeGSJaQ9Q', 0,3,20 ]
      ],
      'accelerator' : [
        [ 'youtube', 'The Future Sound Of London-Accelerator', 'https://www.youtube.com/watch?v=eDmzkjdFza0', 1,2,8, ]
      ],
      'code' : [
        [ 'youtube', 'Solidarity Poland 1981', 'https://www.youtube.com/watch?v=peT3-xSzj08', 0,10,52, ],
        [ 'youtube', 'Communism In Poland', 'https://www.youtube.com/watch?v=soSz64AI-NI', 0,30,3, ]
      ],
      'power' : [
        [ 'youtube', 'Sasha Live from Energy @ Eclipse Coventry 1991', 'https://www.youtube.com/watch?v=WkggrVyPGBc', 1,21,20, ]
      ],
      'train' : [
        [ 'youtube', 'Ajahn Chah - Wholehearted Training', 'https://www.youtube.com/watch?v=zNQ0Uuw0U2A', 0,55,56 ],
        [ 'youtube', 'The Dharma is utterly useless', 'https://www.youtube.com/watch?v=SvmgpyVcYJc', 0,12,16 ],
        [ 'youtube', 'Yoda training Luke pt1', 'https://www.youtube.com/watch?v=infZSKB5L9I', 0,4,48 ]
      ],
      'pleasure' : [
        [ 'youtube', 'Fergie & BK - House of pain', 'https://www.youtube.com/watch?v=fXPqZVbldEM', 0,7,47],
      ],
      'jew' : [
        [ 'youtube', 'The Kybalion of Hermes Trismegistus, [FULL Audiobook] (+ Emerald Tablet)', 'https://www.youtube.com/watch?v=UvV8vLON-nY',
          3,43,53, ],
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
        [ 'youtube', 'Software - Island Sunrise (Music Video)', 'https://www.youtube.com/watch?v=gML0PukI5rI', 0,6,31, ],
        [ 'youtube', 'Software - Island Sunrise (Music Video)', 'https://www.youtube.com/watch?v=gML0PukI5rI', 0,6,31, ],
        [ 'youtube', 'Darshan Ambient - Selfless (ambient relaxation)', 'https://www.youtube.com/watch?v=o0Trh6PZ9mM', 0,17,10, ],
        [ 'youtube', 'Darshan Ambient - The Dream Pool', 'https://www.youtube.com/watch?v=9DKbZVVHAPU', 0,13,51, ],
        [ 'youtube', 'John Serrie - Ixlandia', 'https://www.youtube.com/watch?v=8RaHh6PmraA', 0,5,4, ],
        [ 'youtube', 'Jonn Serrie - Blue Lumia', 'https://www.youtube.com/watch?v=jJkNeYEuaqo', 0,4,5, ],
        [ 'youtube', 'Jonn Serrie - Quantum Seas', 'https://www.youtube.com/watch?v=lmrY_5NtR7U', 0,11,54, ],
        [ 'youtube', 'Jonn Serrie - Quantum Seas', 'https://www.youtube.com/watch?v=lmrY_5NtR7U', 0,11,54, ],
        [ 'youtube', 'Jonn Serrie - Quantum Seas', 'https://www.youtube.com/watch?v=lmrY_5NtR7U', 0,11,54, ],
        [ 'youtube', 'Jonn Serrie - Night Orchid', 'https://www.youtube.com/watch?v=5Tfvj1lKAG8', 0,4,53, ],
        [ 'youtube', 'Jonn Serrie - On a Frontier of Fables', 'https://www.youtube.com/watch?v=psZtjJ7Ef6s', 0,21,31, ],
        [ 'youtube', 'Mark Isham / Tibet -Part Ⅰ', 'https://www.youtube.com/watch?v=C7ZgTO6jlx0', 0,13,13, ],
        [ 'youtube', 'Mark Isham / Tibet -Part Ⅱ', 'https://www.youtube.com/watch?v=ABp6M17NHqU', 0,4,52, ],
        [ 'youtube', 'Mark Isham / Tibet - Part Ⅲ', 'https://www.youtube.com/watch?v=qw1oJiKQ3qI', 0,6,23, ],
        [ 'youtube', 'Mark Isham / Tibet - Part Ⅳ', 'https://www.youtube.com/watch?v=U53g8Fgcdt4', 0,9,6, ],
        [ 'youtube', 'Mark Isham / Tibet - Part Ⅴ', 'https://www.youtube.com/watch?v=drdIaFKgveg', 0,14,36, ],
        [ 'youtube', 'Jonn Serrie ~ Starmoods', 'https://www.youtube.com/watch?v=820jJZTOxF4', 0,15,33, ],
        [ 'youtube', 'Star Trek Continues E07 "Embracing the Winds"', 'https://www.youtube.com/watch?v=yMasSzFXaKQ', 0,43,56, ],
        [ 'youtube', 'Jonn Serrie - M-Theory', 'https://www.youtube.com/watch?v=7Wz86_fSJJc', 0,8,7, ],
        [ 'youtube', 'Blade Runner Blues - Vangelis - 1982 - [HD]', 'https://www.youtube.com/watch?v=RScZrvTebeA', 0,10,18, ],
        [ 'youtube', '2001: A Space Odyssey 1968 - Movie Soundtrack(Music By: Aram Khachaturian, Richard Strauss...)',
          'https://www.youtube.com/watch?v=vWKN98cNDxo', 1,18,19, ],
        [ 'youtube', 'Jonn Serrie - The Sum Over Histories', 'https://www.youtube.com/watch?v=POvKnCaRv1o', 0,12,59, ],
        [ 'youtube', 'Michael Stearns - Encounter: A Journey In The Key of Space (Full Album)', 'https://www.youtube.com/watch?v=M8jArZMILME',
          0,52,41, ],
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
        [ 'youtube', '1. Being No one Going Nowhere - Ajahn Brahm', 'https://www.youtube.com/watch?v=isfuvHljSU4', 0,57,29, ],
        [ 'youtube', '♥Merlin\'s Magic ♥... \' The Heart of REIKI \'...a Chakra Meditation Music !',
          'https://www.youtube.com/watch?v=kmZhmIt_pYo', 1,2,39, ],
        [ 'youtube', '19. Self hate (2004/05/07) Ven Ajahn Brahm', 'https://www.youtube.com/watch?v=PlD8kRqV2nw', 1,1,39, ],
        [ 'youtube', 'Pulp Fiction | Taxi Ride (HD) | MIRAMAX', 'https://www.youtube.com/watch?v=WO2q1iQX2UA', 0,3,22, ],
        [ 'youtube', 'Pulp Fiction | Overdose (HD) | MIRAMAX', 'https://www.youtube.com/watch?v=Gg3G6smr7M0', 0,3,49, ],
        [ 'youtube', 'Pulp Fiction | I Want To Dance (HD) | MIRAMAX', 'https://www.youtube.com/watch?v=o5qXCzknxn8', 0,3,56, ],
        [ 'soundcloud', 'DJ Morgan - DarkNRG (HardNRG)', 'https://soundcloud.com/dj-morgan-303/morgan-darknrg', '64374229', 0,58,48, ],
        [ 'youtube', 'Oscar Peterson Bossa Nova', 'https://www.youtube.com/watch?v=cSX_7ejc5u8', 1,8,7, ],
      ],
      'know' : [
        [ 'youtube', 'Knowledge and the Sacred', 'https://www.youtube.com/watch?v=IPV0RC9CDis', 1,25,21, ],
        [ 'youtube', 'INTERNET CLUB - REDEFINING THE WORKPLACE', 'https://www.youtube.com/watch?v=jNZQLePeMs4', 1,15,22, ],
      ],
      'wednesday' : [
        [ 'youtube', '[PMV] My Little Wu-Tang Clan - Shame on a Nigga', 'https://www.youtube.com/watch?v=NVGI6mhfJyA', 0,2,54, ],
        [ 'youtube', 'MLP: FiM + Black Flag - Rainbow Dash Doesn\'t Care', 'https://www.youtube.com/watch?v=HtkI4WXZvRQ', 0,0,58, ],
        [ 'youtube', 'Billy Idol - Eyes Without A Face', 'https://www.youtube.com/watch?v=9OFpfTd0EIs', 0,4,56, ],
        [ 'youtube', 'Deuter - Silence is the Answer (part 1, 1980)', 'https://www.youtube.com/watch?v=npN7d2XYVUY', 0,6,0, ],
        [ 'youtube', 'Deuter - Silence is the answer (FULL VERSION, Part 1-6, 1981)', 'https://www.youtube.com/watch?v=_NlrpA-TXRk', 0,44,12, ],
        [ 'youtube', 'Thanissaro Bhikkhu - Your Mind Is Lying To You', 'https://www.youtube.com/watch?v=8SBBda0g5uI', 0,14,39, ],
        [ 'youtube', 'Time Lapse Photography \\ Metta Forest Monastery \\ (no audio)', 'https://www.youtube.com/watch?v=ehY5uXfe6JA', 0,4,37, ],
        [ 'soundcloud', 'Decepticon CD - Dj Morgan', 'https://soundcloud.com/dj-morgan-303/decepticon', '273082453', 1,0,18, ],
        [ 'youtube', 'DJ Morgan Sentinel Hard House Classics', 'https://www.youtube.com/watch?v=nxxCjL8hZBY', 1,4,50, ],
        [ 'youtube', 'Mussorgsky - Pictures at an Exhibition', 'https://www.youtube.com/watch?v=DXy50exHjes', 0,33,33, ],
        [ 'youtube', 'Mussorgsky - Night On Bald Mountain', 'https://www.youtube.com/watch?v=iCEDfZgDPS8', 0,9,40, ],
        [ 'youtube', '090106 Ajaan Lee Conciousnesses \\ \\ Thanissaro Bhikkhu \\ \\ Dhamma Talks',
          'https://www.youtube.com/watch?v=2w8SVayCess', 0,34,46, ],
        [ 'youtube', 'Fear and Loathing in Las Vegas (7/10) Movie CLIP - The High Water Mark (1998) HD',
          'https://www.youtube.com/watch?v=vUgs2O7Okqc', 0,2,21, ],
        [ 'youtube', 'WTC 9/11 Second plane hit (Enhanced video)', 'https://www.youtube.com/watch?v=1y-l0TJRgkI', 0,0,11, ],
        [ 'youtube', 'Enya only time Sailor Moon Hight Quality ( Remastered )', 'https://www.youtube.com/watch?v=cJ0xRQyVV5c', 0,3,42, ],
        [ 'youtube', 'PaGaian Samhain 2009', 'https://www.youtube.com/watch?v=gX-Zpgksq5c', 0,3,3, ],
        [ 'youtube', '2001: A Space Odyssey - The Dawn of Man', 'https://www.youtube.com/watch?v=ypEaGQb6dJk', 0,9,33, ],
        [ 'youtube', '2001: A Space Odyssey "Star Gate" sequence', 'https://www.youtube.com/watch?v=ou6JNQwPWE0', 0,9,38, ],
        [ 'youtube', 'Mars - Electric Temple Side A', 'https://www.youtube.com/watch?v=JassCu6jQRo', 0,40,41, ],
        [ 'youtube', 'Mars - Electric Temple Side B', 'https://www.youtube.com/watch?v=0T7-SSdJOL8', 0,40,19, ],
        [ 'youtube', 'Mystre - Natural Mystic - Side A', 'https://www.youtube.com/watch?v=DdX4-EkVeeo', 0,45,9, ],
        [ 'youtube', 'Mystre - Natural Mystic - Side B', 'https://www.youtube.com/watch?v=ocm1jWj3aLs', 0,43,16, ],
        [ 'youtube', 'Mozart "Eine kleine Nachtmusik" I. Allegro', 'https://www.youtube.com/watch?v=Qb_jQBgzU-I', 0,5,48, ],
        [ 'youtube', 'Mozart, Eine kleine Nachtmusik KV 525 Karl Bohm, Wiener Philharmoniker', 'https://www.youtube.com/watch?v=nPbxIT9W1AY',
          0,19,33, ],
        [ 'soundcloud', 'Mars vs Mystre A', 'https://soundcloud.com/user6671217/mars-vs-mystre-a', '25338784', 0,46,4, ]
      ],
      'thursday' : [
        [ 'youtube', 'Dollar Menu (Vaporwave Mix)', 'https://www.youtube.com/watch?v=NA2XeIva_fk', 1,28,55, ],
        [ 'youtube', 'Epena Ceremony', 'https://www.youtube.com/watch?v=ybloBijCSd0', 0,4,13, ],
        [ 'youtube', 'Elve - Plant Cell Perceptions', 'https://www.youtube.com/watch?v=C3-Y9NrGUP0', 0,9,1, ],
        [ 'soundcloud', 'The Buddha Did Not Teach Oneness', 'https://soundcloud.com/dbp-5/the-buddha-did-not-teach-onenes', '310428334',
          0,27,54, ],
        [ 'youtube', 'Elve - Vale (Infinite Garden)', 'https://www.youtube.com/watch?v=yyR1jdLaPGA', 0,13,23, ],
        [ 'youtube', 'Abyss (ambient techno)', 'https://www.youtube.com/watch?v=iYw3uV8cD8Q', 0,8,0, ],
        [ 'youtube', '808 State - Pacific State', 'https://www.youtube.com/watch?v=6jQ_bOP0HfY', 0,6,54, ],
        [ 'youtube', 'Future Sound Of London - Papua New Guinea', 'https://www.youtube.com/watch?v=IAvHjoLxxh8', 0,4,49, ],
        [ 'youtube', 'Orbital - Halcyon On and On', 'https://www.youtube.com/watch?v=bV-hSgL1R74', 0,9,27, ],
        [ 'youtube', 'Rational Individuals', 'https://www.youtube.com/watch?v=kcxorj7vH2Q', 0,14,55, ],
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
        [ 'youtube', 'Sasha The Eclipse New Years Eve 1990', 'https://www.youtube.com/watch?v=uij11TMnSEE', 1,6,37, ],
        [ 'youtube', 'Akazukin ChaCha - Introduction to magic class', 'https://www.youtube.com/watch?v=2lmkhE1JMb8', 0,2,19, ],
      ],
      'warning' : [
        [ 'youtube', 'Velvet Girl - Velvet (Original Mix) [HD]', 'https://www.youtube.com/watch?v=beUeu0g_ojM', 0,8,31, ],
        [ 'youtube', 'Barry Lyndon - Movie trailer from Kubrick`s Film', 'https://www.youtube.com/watch?v=M4aDIc4uCOc', 0,2,10, ],
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
      'mars' : [
        [ 'youtube', 'Marvin the Martian', 'https://www.youtube.com/watch?v=LkbWF-kDK8Y', 0,1,12, ],
      ],
      'comet' : [
        [ 'youtube', 'Heman - The Cosmic Comet', 'https://www.youtube.com/watch?v=Oq49Wz87ba4', 0,21,28, ],
        [ 'youtube', 'Ayahuasca and DMT for Addiction and Opiate/Heroin Withdrawal', 'https://www.youtube.com/watch?v=gxTq0Umk1Is', 0,10,37, ],
      ],
      'prism' : [
        [ 'youtube', 'PrismCorp Virtual Enterprises - ClearSkies™ (Full Cassette Rip)', 'https://www.youtube.com/watch?v=ieuGJL8Ayvk', 1,2,2, ],
      ],
      'lose' : [
        [ 'youtube', 'In Our Hands: How to Lose What We Have (1950)', 'https://www.youtube.com/watch?v=8UFYluWMDiM', 0,11,53, ],
      ],
      'girls' : [
        [ 'youtube', 'Alabama Alpha Phi 2015 Recruitment Video', 'https://www.youtube.com/watch?v=KudwS5U9ouA', 0,4,13, ],
        [ 'soundcloud', 'The Sun Falls Beneath Her', 'https://soundcloud.com/elitegeographic/the-sun-falls-beneath-her', '307187174', 0,3,23, ],
        [ 'youtube', 'Secret of Nimh Climax Scene (House Raising)', 'https://www.youtube.com/watch?v=8Q6WCdQm2Jo', 0,4,21, ],
        [ 'soundcloud', 'Why Meditate ~ 4 Kinds Of Happiness ~ Ayya Khema',
          'https://soundcloud.com/anythingbot/why-meditate-4-kinds-of-happiness-ayya-khema', '209126349', 1,30,8 ]
      ]
    };

    var talkPLs = [
       [
         [ 'youtube', 'Ajahn Chah - Convention And Liberation', 'https://www.youtube.com/watch?v=gxVGofXtaD8', 0,17,20 ],
         [ 'youtube', 'Ajahn Chah - Living In This World', 'https://www.youtube.com/watch?v=kOK6W-vOLec', 0,19,19 ]
       ],
       [
         [ 'youtube', 'Ajahn Chah - Opening The Dhamma Eye', 'https://www.youtube.com/watch?v=aHPMeqW8a0c', 0,32,6 ]
       ]
    ];

    var makeCartridge = function (plSource) {
      var items = [];
      var grandTotalSeconds = 0;
      // compute total seconds and ETL
      var i;
      for (i = 0; i < plSource.length; i += 1) {
        var playlistItem = plSource[i]; var itemType = playlistItem[0];
        var itemTitle, itemTotalSeconds, itemSeconds, itemMinutes, itemHours,
            itemURL, itemMid;
        if (itemType === 'youtube') {
            itemTitle = playlistItem[1];
            itemURL = playlistItem[2];
            itemMid = playlistItem[2].slice(playlistItem[2].length-11);
            itemHours = playlistItem[3];
            itemMinutes = playlistItem[4];
            itemSeconds = playlistItem[5];
        } else if (itemType === 'soundcloud') {
            itemTitle = playlistItem[1];
            itemURL = playlistItem[2];
            itemMid = playlistItem[3];
            itemHours = playlistItem[4];
            itemMinutes = playlistItem[5];
            itemSeconds = playlistItem[6];
        } else {
            console.log('Unknown media type: ',playlistItem);
        }
        itemTotalSeconds = itemSeconds + 60 * itemMinutes + 60 * 60 * itemHours;
        var item = {
            seconds : itemSeconds,
            minutes : itemMinutes,
            hours   : itemHours,
            totalSeconds : itemTotalSeconds,
            type : itemType,
            mid : itemMid,
            url : itemURL,
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
          return [item,seconds];
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

    var getMediaForUTC = function (utc) {
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
      var itemTotalSeconds = mediaItem.totalSeconds;
      var secondsInto = x[1];
      var secondsRemaining = itemTotalSeconds - secondsInto;
      var data = {};
      if (mediaItem.type == "youtube") {
          data.mediaIsYoutube = 1;
          data.mediaIsSoundcloud = 0;
          data.mid = mediaItem.mid;
          data.time = secondsInto;
          data.secondsTotal = itemTotalSeconds;
          data.secondsElapsed = secondsInto;
          data.secondsRemaining = secondsRemaining;
      } else if (mediaItem.type == "soundcloud") {
          data.mediaIsYoutube = 0;
          data.mediaIsSoundcloud = 1;
          data.mid = mediaItem.mid;
          data.time = secondsInto;
          data.secondsTotal = itemTotalSeconds;
          data.secondsElapsed = secondsInto;
          data.secondsRemaining = secondsRemaining;
      }
      return data;
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

    media = {
      con : {},
      syncCon : syncCon,
      getMediaAt : getMediaAt,
      getMediaForUTC : getMediaForUTC,
      offsetSeconds : 0,
      talkCounter : 0,
      talkCartridges : makeCartridges(talkPLs),
      special : [null,null],
      block : null,
      onTalk : onTalk,
      onCancel : onCancel,
      onSpecial : onSpecial,
      onSkip : onSkip,
      onRestart : power_cycle.restart,
      getSPM : getSPM
    };
    makeCartridgeIndex();
    module.exports = media;
  });
}());
