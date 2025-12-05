// ============================
// Data Objects
// ============================

const charactersData = [
  {
    id: 'eleven',
    name: 'Eleven',
    image: 'assets/characters/eleven.png',
    description: 'Jane "Eleven" Hopper possesses extraordinary telekinetic and psychic abilities, the result of haunting experiments conducted at Hawkins Laboratory. Raised in isolation and darkness, she escaped into a world she barely understood, finding family in the unlikely bonds formed with Mike, Dustin, Lucas, and Will. Her journey from weapon to protector has been marked by sacrifice, love, and the constant battle between the life she deserves and the darkness that seeks to reclaim her. With each confrontation against the Upside Down, she grows stronger, yet the cost of her power weighs heavily on her soul. Her connection to the Mind Flayer and Vecna runs deeper than anyone imagined, making her both the greatest hope and the most vulnerable target in the fight against interdimensional evil.'
  },
  {
    id: 'mike',
    name: 'Mike Wheeler',
    image: 'assets/characters/mike.png',
    description: 'Mike Wheeler is the heart that holds the group together, a natural leader whose loyalty knows no bounds. From the moment he opened his basement door to a terrified girl with a shaved head, his life became intertwined with forces beyond comprehension. His unwavering devotion to Eleven has been both his greatest strength and his Achilles heel, driving him to brave impossible dangers and face unimaginable horrors. As the strategist of the group, Mike approaches each supernatural crisis with the same tactical mind he brings to Dungeons & Dragons campaigns. Yet beneath his brave exterior lies a teenager struggling to balance the weight of world-ending secrets with the ordinary challenges of growing up in a town that will never truly be safe again.'
  },
  {
    id: 'will',
    name: 'Will Byers',
    image: 'assets/characters/will.png',
    description: 'Will Byers has endured horrors that would shatter most minds. His disappearance into the Upside Down marked the beginning of Hawkins\' descent into darkness, and though he was rescued, he never truly escaped. The shadow of the Mind Flayer left permanent marks on his psyche, creating a connection to the evil realm that makes him both a valuable asset and a constant target. Sensitive, artistic, and deeply empathetic, Will processes his trauma through his artwork, inadvertently capturing visions of threats before they fully manifest. His bond with his mother Joyce and brother Jonathan remains unshakeable, even as he grapples with feeling different, with sensing things others cannot. The Upside Down changed him in ways that go beyond the physical, and its presence lurks in the corners of his consciousness, waiting.'
  },
  {
    id: 'lucas',
    name: 'Lucas Sinclair',
    image: 'assets/characters/lucas.png',
    description: 'Lucas Sinclair brings pragmatism and courage to a group often lost in their own heads. As the realist of the party, he questions, challenges, and demands better plans, serving as the group\'s conscience when emotions run high. His journey from skeptic to believer mirrors his growth from boy to young man, learning that bravery isn\'t the absence of fear but the choice to act despite it. His relationship with Max brought new dimensions to his character, showing a capacity for deep love and understanding. Armed with his wrist rocket and an unshakeable sense of justice, Lucas has proven time and again that extraordinary abilities aren\'t necessary to be a hero. His loyalty to his friends, his sister Erica, and his community defines him, even as he navigates the complexities of standing out in a town that prefers to pretend its monsters don\'t exist.'
  },
  {
    id: 'dustin',
    name: 'Dustin Henderson',
    image: 'assets/characters/dustin.png',
    description: 'Dustin Henderson is the group\'s technological genius, whose infectious enthusiasm and scientific mind have saved the day more times than anyone can count. With his distinctive lisp and trademark hat, Dustin approaches every supernatural crisis with curiosity rather than fear, treating interdimensional incursions like the greatest science experiment ever conducted. His friendship with Steve Harrington represents one of the most unexpected and beautiful bonds to emerge from Hawkins\' darkness, proving that true friendship transcends age and social boundaries. Dustin\'s ham radio hobby connected him to Suzie, demonstrating that love and nerd culture know no distance. His ability to translate complex scientific concepts into actionable plans, combined with his unwavering optimism, makes him indispensable. Yet beneath his jovial exterior lies a young man who has faced demogorgons and demodogs with the same courage he brings to navigating high school\'s brutal social hierarchy.'
  },
  {
    id: 'max',
    name: 'Max Mayfield',
    image: 'assets/characters/max.png',
    description: 'Max Mayfield arrived in Hawkins with walls built high, a fierce California girl with a troubled home life and zero patience for small-town drama. Her stepbrother Billy\'s darkness cast a long shadow, but Max refused to be defined by his cruelty or her family\'s dysfunction. She proved herself to the party through sheer determination and skill, earning respect not through supernatural abilities but through raw courage and loyalty. Her relationship with Lucas showed her capacity for trust despite past betrayals, while her friendship with Eleven revealed depths of empathy beneath her tough exterior. Vecna\'s targeting of Max pushed her to the absolute brink, exploiting her survivor\'s guilt over Billy\'s death and her feelings of powerlessness. Her confrontation with her demons, both literal and metaphorical, showcased a strength of spirit that rivals any psychic power, though the cost of that battle left scars that may never fully heal.'
  },
  {
    id: 'nancy',
    name: 'Nancy Wheeler',
    image: 'assets/characters/nancy.png',
    description: 'Nancy Wheeler transformed from a seemingly typical suburban teenager into a relentless crusader for truth and justice. The disappearance of her best friend Barb awakened something fierce within her, a refusal to accept easy lies or comfortable ignorance. Her investigative instincts, combined with remarkable courage, have made her essential to uncovering Hawkins Lab\'s darkest secrets. Nancy navigates complicated relationships with both Jonathan and Steve while never allowing romance to define or limit her. Her work at the Hawkins Post, despite facing sexism and dismissal, demonstrates her commitment to exposing the truth regardless of personal cost. She wields a gun with the same competence she brings to journalism, having learned that sometimes the pen isn\'t mighty enough against interdimensional monsters. Her evolution from popular girl to hardened monster hunter reflects her refusal to look away from darkness, even when looking would be so much easier.'
  },
  {
    id: 'jonathan',
    name: 'Jonathan Byers',
    image: 'assets/characters/jonathan.png',
    description: 'Jonathan Byers carries the weight of responsibility beyond his years, having served as protector and provider for his family long before supernatural evil invaded their lives. His artistic eye sees the world differently, capturing truth through his camera lens, though his photography once crossed ethical lines he\'s worked hard to make amends for. The search for his missing brother Will revealed reserves of courage Jonathan didn\'t know he possessed, forcing him to confront monsters both otherworldly and bureaucratic. His relationship with Nancy developed through shared trauma and mutual respect, built on a foundation of understanding what it means to fight for those society overlooks. Jonathan\'s bond with his mother Joyce remains unbreakable, their shared experiences in the Upside Down creating an understanding that requires no words. He struggles with his family\'s financial reality while fighting interdimensional threats, proving that heroism doesn\'t discriminate based on social class or popularity.'
  },
  {
    id: 'steve',
    name: 'Steve Harrington',
    image: 'assets/characters/steve.png',
    description: 'Steve Harrington\'s journey from popular jock to beloved monster-fighting babysitter represents one of the most compelling character evolutions in Hawkins\' supernatural saga. Initially defined by his hair and social status, Steve discovered his true self through repeated confrontations with creatures from the Upside Down and his evolving friendship with Dustin Henderson. His nail-studded bat has become legendary, a symbol of his willingness to face impossible odds armed with nothing but courage and questionable weapons. Steve\'s capacity for growth is matched only by his capacity for love, whether romantic or platonic. His relationship with Robin, evolving from coworkers to soulmates without romance, showcases emotional maturity rare in Hawkins. Working at Scoops Ahoy and Family Video, Steve learns that true heroism doesn\'t require popularity or perfection, just the willingness to show up when people need you, even if it means sacrificing your cool-guy image to be someone\'s protector and friend.'
  },
  {
    id: 'robin',
    name: 'Robin Buckley',
    image: 'assets/characters/robin.png',
    description: 'Robin Buckley entered the story as Steve\'s sarcastic coworker at Scoops Ahoy, but quickly proved herself to be brilliant, brave, and essential to saving Hawkins from Soviet infiltration. Her linguistic talents cracked Russian codes that adults and governments couldn\'t break, demonstrating that intelligence comes in many forms. Robin\'s openness about her sexuality, shared with Steve in a moment of vulnerability, added crucial representation to Hawkins\' story, showing that heroism and authenticity aren\'t mutually exclusive. Her quick wit and encyclopedic knowledge mask deeper insecurities about fitting in and being seen for who she truly is. The friendship between Robin and Steve defies typical Hollywood conventions, proving that platonic soulmates exist and that rejection can evolve into the most beautiful kind of love. Band geek turned monster fighter, Robin represents everyone who ever felt like an outsider, proving that the so-called losers are often the ones who save the day.'
  },
  {
    id: 'joyce',
    name: 'Joyce Byers',
    image: 'assets/characters/joyce.png',
    description: 'Joyce Byers embodies maternal ferocity elevated to mythic proportions. When the world told her Will was dead, she trusted her instincts and refused to accept their certainty, communicating with her son through Christmas lights and sheer force of will. Her determination to believe the impossible saved his life and revealed the first cracks in Hawkins Lab\'s facade of normalcy. Joyce\'s struggles as a working-class single mother made her vulnerable to dismissal and mockery, but she learned to weaponize that underestimation. Her relationship with Bob Newby showed her capacity for happiness and normalcy, though the Upside Down stole that possibility with characteristic cruelty. With Hopper, Joyce found someone who understood that sometimes love means facing monsters together, both supernatural and emotional. Her willingness to relocate her entire family to protect Eleven demonstrates that her maternal instinct extends beyond biology, embracing all children who need protecting from the darkness that hunts them.'
  },
  {
    id: 'hopper',
    name: 'Jim Hopper',
    image: 'assets/characters/hopper.png',
    description: 'Jim Hopper arrived in Hawkins broken, a big-city cop drowning in grief over his daughter\'s death and his failed marriage. The town\'s sleepy nature suited his desire to coast through life on the path of least resistance until Will Byers\' disappearance forced him to be the detective and man he once was. Hopper\'s investigation uncovered layers of conspiracy that reached far beyond small-town corruption, putting him in direct conflict with forces that could destroy him. His adoption of Eleven gave him a second chance at fatherhood, though his overprotectiveness and trauma created friction in their relationship. The sacrifices Hopper made—including his apparent death closing the gate to the Upside Down—define his character: a man who found something worth dying for after years of merely surviving. His time in the Russian prison camp tested him in ways even the Upside Down couldn\'t, stripping away everything except his core identity as a protector who refuses to abandon those he loves.'
  },
  {
    id: 'vecna',
    name: 'Vecna / Henry Creel',
    image: 'assets/characters/vecna.png',
    description: 'Henry Creel, now known as Vecna, represents the dark truth lurking beneath Hawkins\' supernatural phenomena: that the greatest monsters are often human in origin. As Hawkins Lab\'s first test subject, One, Henry possessed abilities that surpassed even Eleven\'s, combined with a nihilistic philosophy that rejected human connection as weakness. His transformation into Vecna after Eleven banished him to the Upside Down created a being of pure malevolence, a demon who feeds on trauma and guilt. Vecna\'s methodology is psychological torture elevated to supernatural horror, invading victims\' minds to exploit their deepest wounds before crushing their bodies. His connection to the Mind Flayer suggests he may be the architect behind every Upside Down incursion, positioning himself as puppet master to Hawkins\' suffering. The revelation of his true identity forces a reckoning with the fact that Eleven\'s powers came from the same source as this monster, raising uncomfortable questions about the nature of power, morality, and the thin line between hero and villain.'
  }
];

const seasonsData = [
  {
    id: 's1',
    title: 'Season 1',
    subtitle: 'The Vanishing of Will Byers',
    year: '1983',
    poster: 'assets/seasons/s1.jpg',
    synopsis: 'In the quiet town of Hawkins, Indiana, twelve-year-old Will Byers vanishes without a trace after a night of Dungeons & Dragons with his friends. What begins as a missing child case quickly spirals into something far stranger when Will\'s desperate mother Joyce begins receiving otherworldly communications through her Christmas lights. Meanwhile, Will\'s friends—Mike, Dustin, and Lucas—encounter a mysterious girl with a shaved head and supernatural abilities during their search. She knows only one thing: her name is Eleven. As Chief Jim Hopper\'s investigation leads him to the shadowy Hawkins National Laboratory, dark secrets emerge about government experiments, parallel dimensions, and a predatory creature from a realm known only as the Upside Down. The monster hunting Will is no ordinary predator—it\'s a Demogorgon, drawn to blood and emerging through dimensional rifts. Nancy Wheeler\'s search for her missing friend Barb intersects with Jonathan Byers\' quest for his brother, forming unlikely alliances. Together, this group of outsiders must confront not only interdimensional horror but also government conspiracy, discovering that their small town sits atop a tear in reality itself. The battle to save Will reveals that some doors, once opened, can never be fully closed, and that the greatest danger may not be the monster they can see, but the darkness that lingers in the spaces between worlds.'
  },
  {
    id: 's2',
    title: 'Season 2',
    subtitle: 'The Mind Flayer Rises',
    year: '1984',
    poster: 'assets/seasons/s2.jpg',
    synopsis: 'One year after Will\'s rescue from the Upside Down, Hawkins attempts to return to normalcy, but the scars of that Halloween night run deeper than anyone realized. Will experiences disturbing visions of a massive shadow creature—the Mind Flayer—looming over his town, while the Upside Down\'s influence continues spreading beneath Hawkins like an infection. The arrival of Max Mayfield and her violent stepbrother Billy disrupts the party\'s dynamic just as new threats emerge. When Dustin discovers a strange creature in his trash can and names it D\'Artagnan, he unknowingly harbors a juvenile Demodog, one of many spreading through Hawkins\' underground tunnels like a supernatural plague. Eleven, hidden away in Hopper\'s cabin, struggles with isolation and her need for answers about her past, eventually escaping to find her "sister" Kali and other experimental subjects. Her journey reveals that Hawkins Lab\'s experiments created multiple children with abilities, each scarred by Dr. Brenner\'s cruelty. Meanwhile, Nancy and Jonathan work with conspiracy theorist Murray Bauman to expose Hawkins Lab, seeking justice for Barb\'s death. As the Mind Flayer\'s possession of Will intensifies, the group realizes that closing the gate between worlds requires Eleven\'s return and the greatest test of her powers yet. Bob Newby\'s heroic sacrifice underscores the terrible cost of Hawkins\' supernatural siege. The season culminates in a desperate battle as Eleven confronts her past and closes the gate, seemingly ending the threat—but the final scene reveals the Mind Flayer\'s presence still looms over Hawkins, patient and plotting its revenge.'
  },
  {
    id: 's3',
    title: 'Season 3',
    subtitle: 'Soviet Invasion',
    year: '1985',
    poster: 'assets/seasons/s3.jpg',
    synopsis: 'Summer in Hawkins brings new threats hidden beneath capitalism\'s cheerful facade. The Starcourt Mall has transformed the town\'s economy and social landscape, but its construction concealed a more sinister purpose: a secret Soviet facility attempting to forcibly reopen the gate to the Upside Down. Steve Harrington and Robin Buckley, working at Scoops Ahoy, stumble onto encrypted Russian communications, leading to the discovery of a vast underground base where scientists use enormous machines to tear through dimensional barriers. As the gate reopens, the Mind Flayer seizes its opportunity, possessing hosts and creating a proxy army of "the Flayed"—Hawkins residents transformed into extensions of its will. Billy Hargrove becomes the Mind Flayer\'s primary vessel, hunting others to build a grotesque flesh monster capable of ending Eleven\'s life. The Mind Flayer recognizes her as the only threat to its plans. Meanwhile, Joyce and Hopper navigate their complicated feelings while investigating strange electromagnetic disturbances, eventually partnering with conspiracy theorist Murray to infiltrate the Russian facility. Eleven\'s powers falter after a piece of the Mind Flayer embeds itself in her flesh, leaving her vulnerable for the first time. The battle at Starcourt Mall brings all storylines crashing together in spectacular fashion: Russians, the flesh monster, and desperate heroes racing against time. Hopper\'s apparent sacrifice to destroy the machine and close the gate again leaves Joyce devastated and triggers the Byers family\'s decision to leave Hawkins, taking Eleven with them. The post-credits scene reveals Hopper may have survived, imprisoned in a Russian labor camp, while the Soviets possess their own captive Demogorgon, suggesting the nightmare is far from over.'
  },
  {
    id: 's4',
    title: 'Season 4',
    subtitle: 'Vecna\'s Curse',
    year: '1986',
    poster: 'assets/seasons/s4.jpg',
    synopsis: 'Six months after leaving Hawkins, the Byers family and Eleven attempt to build new lives in California, while back in Indiana, a new horror emerges: a supernatural serial killer targeting teenagers with a specific profile of trauma and guilt. Vecna, as the entity becomes known, invades victims\' minds through psychological torture, forcing them to relive their worst memories before brutally killing them, their bodies found with broken limbs and eyes ruptured. Chrissy Cunningham\'s death launches a murder investigation that places Eddie Munson, the town\'s D&D-loving metalhead, as the prime suspect, forcing him into hiding while the party races to clear his name and stop the real killer. Max, consumed by guilt over Billy\'s death and her family\'s collapse, discovers she\'s Vecna\'s next target when she begins experiencing horrifying visions. Her escape from Vecna\'s mindscape, powered by her friends playing "Running Up That Hill," provides both her salvation and crucial information: music can sever Vecna\'s connection to his victims. The investigation reveals that Vecna is actually Henry Creel, Victor Creel\'s son, who murdered his family in 1959 before being taken by Hawkins Lab as their first test subject, known as One. His powers exceeded even Eleven\'s, but his nihilistic worldview led him to massacre other test subjects until young Eleven banished him to the Upside Down in 1979. This revelation recontextualizes every previous season: Vecna survived his exile, transformed by the Upside Down into something far worse, and has been orchestrating events from the shadows, potentially controlling the Mind Flayer itself. Hopper\'s survival in a Russian gulag adds another thread, as Joyce and Murray launch a rescue mission while fighting a Demogorgon in the prison. The season climaxes with a multi-pronged assault: Eleven, having regained her powers through traumatic memory recovery orchestrated by Dr. Owens, battles Vecna psychically from a sensory deprivation tank in Nevada; Steve, Nancy, and Robin attack Vecna\'s physical body in the Upside Down Creel House; and Max serves as bait to draw him out. Despite their efforts, Vecna succeeds in opening four gates that converge on Hawkins, creating a massive rift. Max dies briefly before Eleven revives her, but she remains comatose, her consciousness trapped somewhere unreachable. As the final episode reveals, the Upside Down is bleeding into Hawkins, transforming it into a twisted hybrid realm. Vecna\'s plan has always been to merge the dimensions, and he\'s finally succeeded. The stage is set for a final battle that will determine not just Hawkins\' fate, but potentially reality itself.'
  },
  {
    id: 's5',
    title: 'Season 5',
    subtitle: 'The Final Battle',
    year: '1987',
    poster: 'assets/seasons/s5.jpg',
    synopsis: 'The fifth and final season promises to bring the Stranger Things saga to its epic conclusion as Hawkins itself transforms into a battleground between dimensions. With Vecna\'s gates fully opened and the Upside Down bleeding into the real world, the town faces an extinction-level threat that can no longer be hidden or contained. The stakes have never been higher: this isn\'t just about saving Hawkins anymore—it\'s about preventing the complete collapse of dimensional barriers that could consume everything. Eleven, having witnessed Max\'s fate and the devastation wrought by her failure to stop Vecna, must confront not only this ancient evil but also the uncomfortable truth that they share a common origin. The revelation that Vecna was once One, her "papa\'s" first success, forces her to question the nature of her own power and whether she can avoid his fate. Meanwhile, Max remains trapped in a comatose state, her consciousness adrift somewhere between life and death, giving Vecna potential leverage and Eleven desperate motivation. The fractured party must reunite across state lines, bringing together the California crew, the Hawkins survivors, and the Russian prisoners to mount a final assault. Hopper, traumatized by his imprisonment but hardened into an even more formidable warrior, returns home to find it transformed into a nightmare landscape. Will\'s connection to the Upside Down, dormant but never truly severed, may prove crucial to understanding or exploiting Vecna\'s weaknesses. As reality itself fractures, long-simmering character arcs reach their culmination: relationships tested by distance and trauma must prove their resilience; heroes must make impossible sacrifices; and the true cost of their years-long battle against the supernatural will be tallied. The final confrontation with Vecna won\'t just be physical but metaphysical, a battle over the very nature of trauma, memory, and what it means to be human in the face of incomprehensible evil. Not everyone will survive, but those who do will carry the knowledge that they stood at the precipice of oblivion and found the courage to push back against the dark. The story that began with a boy\'s disappearance will end with a choice about what kind of world—and what kind of people—emerge from Hawkins\' long nightmare.'
  }
];

// ============================
// State Management
// ============================

let state = {
  selectedCharacter: null,
  musicPlaying: false,
  soundEnabled: true,
  userInteracted: false
};

// ============================
// Audio Management
// ============================

const bgMusic = document.getElementById('bgMusic');
const clickSound = document.getElementById('clickSound');
const musicToggle = document.getElementById('musicToggle');
const muteToggle = document.getElementById('muteToggle');

function playClickSound() {
  if (state.soundEnabled && state.userInteracted) {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  }
}

function toggleMusic() {
  state.userInteracted = true;

  if (state.musicPlaying) {
    bgMusic.pause();
    state.musicPlaying = false;
    musicToggle.querySelector('.btn-text').textContent = 'Play Music';
    musicToggle.querySelector('.btn-icon').textContent = '🎵';
  } else {
    bgMusic.play().catch(() => {});
    state.musicPlaying = true;
    musicToggle.querySelector('.btn-text').textContent = 'Pause Music';
    musicToggle.querySelector('.btn-icon').textContent = '⏸';
  }

  playClickSound();
}

function toggleMute() {
  state.userInteracted = true;
  state.soundEnabled = !state.soundEnabled;

  if (state.soundEnabled) {
    muteToggle.querySelector('.btn-text').textContent = 'Sound ON';
    muteToggle.querySelector('.btn-icon').textContent = '🔊';
  } else {
    muteToggle.querySelector('.btn-text').textContent = 'Sound OFF';
    muteToggle.querySelector('.btn-icon').textContent = '🔇';
  }

  playClickSound();
}

musicToggle.addEventListener('click', toggleMusic);
muteToggle.addEventListener('click', toggleMute);

// ============================
// Character Management
// ============================

function renderCharacters() {
  const container = document.getElementById('charactersGrid');

  charactersData.forEach(character => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-character-id', character.id);
    card.setAttribute('data-name', character.name);
    card.setAttribute('aria-label', `View ${character.name}'s profile`);

    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
    img.onerror = function() {
      this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" fill="%23e30613" font-size="40" text-anchor="middle" dy=".3em"%3E' + character.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
    };

    card.appendChild(img);

    card.addEventListener('click', () => selectCharacter(character.id));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectCharacter(character.id);
      }
    });

    // Magnetic hover effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const moveX = x * 0.1;
      const moveY = y * 0.1;
      card.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });

    container.appendChild(card);
  });
}

function selectCharacter(characterId) {
  state.userInteracted = true;
  playClickSound();

  const character = charactersData.find(c => c.id === characterId);
  if (!character) return;

  state.selectedCharacter = characterId;

  // Update active state
  document.querySelectorAll('.character-card').forEach(card => {
    card.classList.remove('active');
  });
  document.querySelector(`[data-character-id="${characterId}"]`).classList.add('active');

  // Update info panel
  const infoPanel = document.getElementById('characterInfo');
  infoPanel.innerHTML = `
    <div class="character-detail">
      <h3 class="character-name">${character.name}</h3>
      <p class="character-description">${character.description}</p>
    </div>
  `;
}

// ============================
// Timeline Management
// ============================

function renderTimeline() {
  const container = document.getElementById('timelineCards');

  seasonsData.forEach(season => {
    const card = document.createElement('div');
    card.className = 'season-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${season.title}: ${season.subtitle}`);

    card.innerHTML = `
      <div class="season-poster">
        <img src="${season.poster}" alt="${season.title} poster" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"120\\" height=\\"180\\"%3E%3Crect fill=\\"%23333\\" width=\\"120\\" height=\\"180\\"/%3E%3Ctext x=\\"50%25\\" y=\\"50%25\\" fill=\\"%23e30613\\" font-size=\\"24\\" text-anchor=\\"middle\\" dy=\\".3em\\"%3E${season.title}%3C/text%3E%3C/svg%3E'" />
      </div>
      <div class="season-info">
        <h3 class="season-title">${season.title}</h3>
        <p class="season-subtitle">${season.subtitle} • ${season.year}</p>
      </div>
    `;

    card.addEventListener('click', () => openSeasonModal(season));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSeasonModal(season);
      }
    });

    // Magnetic hover effect
    const poster = card.querySelector('.season-poster');
    card.addEventListener('mousemove', (e) => {
      const rect = poster.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * -5;
      const rotateY = (x / rect.width) * 5;
      poster.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      poster.style.transform = '';
    });

    container.appendChild(card);
  });
}

// ============================
// Modal Management
// ============================

const modal = document.getElementById('seasonModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = modal.querySelector('.modal-overlay');

function openSeasonModal(season) {
  state.userInteracted = true;
  playClickSound();

  document.getElementById('modalTitle').textContent = `${season.title}: ${season.subtitle}`;
  document.getElementById('modalPosterImg').src = season.poster;
  document.getElementById('modalPosterImg').alt = `${season.title} poster`;
  document.getElementById('modalSynopsis').textContent = season.synopsis;

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  // Focus the close button for accessibility
  setTimeout(() => modalClose.focus(), 100);
}

function closeSeasonModal() {
  playClickSound();
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeSeasonModal);
modalOverlay.addEventListener('click', closeSeasonModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
    closeSeasonModal();
  }
});

// Trap focus in modal when open
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const focusableElements = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
});

// ============================
// Initialization
// ============================

function init() {
  renderCharacters();
  renderTimeline();

  // Enable user interaction tracking on first click
  document.addEventListener('click', () => {
    state.userInteracted = true;
  }, { once: true });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
