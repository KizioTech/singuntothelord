import { Cloud } from 'lucide-react';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Search, Heart, Play, Pause, Volume2, Grid, List, Moon, Sun, Home, ArrowLeft, Settings, ChevronDown, ChevronUp, Music, Clock, Star, Book, Cross, Gift, Sunrise } from 'lucide-react';

// Expanded hymn database - you can easily add more hymns here
const hymnsDatabase = [
  {
    id: 1,
    title: "In Christ Alone",
    author: "Keith Getty & Stuart Townend",
    category: "Contemporary",
    verses: [
      "In Christ alone my hope is found\nHe is my Light, my Strength, my Song\nThis Cornerstone, this Solid ground\nFirm through the fiercest drought and storm \n \n What heights of love, what depths of peace?\nWhen fears are stilled, when strivings cease\nMy Comforter, my All in All\nHere in the love of Christ I stand",
      "In Christ alone, who took on flesh\nFullness of God in helpless Babe\nThis Gift of love and righteousness\nScorned by the ones He came to save\n \n'Til on that cross as Jesus died\nThe wrath of God was satisfied\nFor every sin on Him was laid\nHere in the death of Christ I live",
      "There in the ground His body lay\nLight of the world by darkness slain\nThen bursting forth in glorious day\nUp from the grave He rose again \n \nAnd as He stands in victory\nSin's curse has lost its grip on me\nFor I am His and He is mine\nBought with the precious blood of Christ",
      "No guilt in life, no fear in death\nThis is the power of Christ in me\nFrom life's first cry to final breath\nJesus commands my destiny\n \nNo power of hell, no scheme of man\nCan ever pluck me from His hand\n'Til He returns or calls me home\nHere in the power of Christ I'll stand"
    ],
    youtubeId: "YRPh9fymWu8&",
    firstLine: "In Christ alone my hope is found"
  },

  {
    id: 2,
    title: "All to Jesus I Surrender",
    author: "Judson W. Van DeVenter",
    category: "Consecration",
    verses: [
      "All to Jesus I surrender,\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live.\n \nI surrender all, I surrender all;\nAll to Thee, my blessed Saviour,\nI surrender all.",
      "All to Jesus I surrender,\nHumbly at His feet I bow;\nWorldly pleasures all forsaken\nTake me, Jesus, take me now.",
      "All to Jesus I surrender,\nMake me Saviour, wholly Thine;\nLet me feel the Holy Spirit,\nTruly know Thou art mine.",
      "All to Jesus I surrender,\nLord, I give myself to Thee\nFill me with Thy love and power\nLet Thy blessings fall on me",
      "All to Jesus I surrender:\nNow I feel he sacred flame;\nOh, the joy of full salvation!\nGlory, glory to His Name!"
    ],
    youtubeId: "7614spqDTTE",
    firstLine: "All to Jesus I surrender"
  },
  {
    id: 3,
    title: "Amazing Grace",
    author: "John Newton",
    category: "Traditional",
    verses: [
      "Amazing grace! How sweet the sound!\nThat saved a wretch like me;\nI once was lost, but now am found;\nWas blind but now I see.",
      "'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear,\nThe hour I first believed!",
      "Through many dangers, toils, and snares,\nI have already come;\n'Tis grace that brought me safe thus far,\nAnd grace will lead me home.",
      "When we've been there ten thousand years,\nBright shining as the sin,\nWe've no less days to sing God's praise\nThan when we first begun."
    ],
    youtubeId: "YXd-FyGMVto",
    firstLine: "Amazing grace! How sweet the sound!"
  },
  {
    id: 4,
    title: "Are You Washed in the Blood?",
    author: "Elisha A. Hoffman",
    category: "Salvation",
    verses: [
      "Have you been to Jesus for the cleansing power?\nAre you washed in the blood of the lamb?\nAre you fully trusting in his grace this hour?\nAre you washed in the blood of the lamb?\n \nAre you washed in the blood,\nIn the soul-cleansing of the lamb?\nAre your garments spotless? Are they white as snow?\nAre you washed in the blood of the lamb?",
      "Are you walking daily by the saviour's side?\nAre you washed in the blood of the lamb?\nDo you rest each time in the crucified?\nAre you washed in the blood of the lamb?",
      "When the bridegroom cometh, will you robes be white?\nAre you washed in the blood of the lamb?\nWill your souls be ready for the mansions bright?\nAre you washed in the blood of the lamb?",
      "Lay aside the garments that are stained with sin,\nAre you washed in the blood of the lamb?\nThere's a fountain flowing for the soul unclean,\nAre you washed in the blood of the lamb?"
    ],
    youtubeId: "0enMoYc6EpM",
    firstLine: "Have you been to Jesus for the cleansing power?"
  },
  {
    id: 5,
    title: "To God Be the Glory",
    author: "Fanny Crosby",
    category: "Praise",
    verses: [
      "To God be the glory, great things He hath done,\nSo loved He the world that He gave us His Son,\nWho yielded His life an attonment for Sin,\nAnd opened the life-gate that all may go in.\n \nPraise the Lord, praise the Lord,\nLet the earth hear His voice;\nPraise the Lord, praise the Lord,\nLet the people rejoice;\nOh, come to the Father, through Jesus the Son,\nAnd give Him the glory! Great things He hath done.",
      "Oh, perfect redemption, the purchase of blood,\nTo every believer the promise of God;\nThe vilest offender who truly believes,\nThat moment from Jesus a pardon receives.",
      "Great things He hath taught us,\ngreat things He hath done,\nAnd great our rejoicing through Jesus the Son;\nBut purer, and higher, and greater will be\nOur wonder, our transport when Jesus we see."
    ],
    youtubeId: "aKMfTwxAJ4k",
    firstLine: "To God be the glory, great things He hath done"
  },
  {
    id: 6,
    title: "Break Thou the Bread of Life",
    author: "Mary A. Lathbury",
    category: "Scripture",
    verses: [
      "Break Thou the Bread of Life,\nDear Lord, to me,\nAs Thou didst break the loaves\nBeside the sea;\nBeyond the sacred page\nI seek Thee, Lord;\nMy Spirit pants for Thee,\nO living Word.",
      "Thou art the Bread of Life,\nO Lord, to me,\nThy Holy Word the truth\nThat saveth me:\nGive me to eat and live\nWith Thee above;\nTeach me to love Thy truth,\nFor Thou art Love.",
      "Send Thy Spirit, Lord,\nNow unto me,\nThat He may touch my eyes,\nAnd make me see:\nShow me the truth concealed\nWithin Thy Word,\nAnd in Thy Book revealed\nI see the Lord.",
      "Bless Thou the truth, dear Lord,\nTo me, to me,\nAs Thou didst bless the bread\nBy Galilee;\nThen shall all bondage cease,\nAll fetters fall,\nAnd I shall find my peace,\nMy all in all."
    ],
    youtubeId: "euz0ot2dDY8",
    firstLine: "Break Thou the Bread of Life"
  },
  {
    id: 7,
    title: "Above the Bright Blue",
    author: "George S. Schuler",
    category: "Heaven",
    verses: [
      "There's a beautiful place called heaven,\nIt is hidden above the bright blue,\nWhere the good, who from earth ties are riven,\nLive and love an eternity through.\n \nAbove the bright blue, the beautiful blue,\nJesus is waiting for me and for you;\nHeaven is there, not far from our sight,\nBeautiful city of light.",
      "This land of sweet rest awaits us,\nSomeday it will break on our view,\n'Tis promised by Christ the Redeemer,\nTo His followers faithful and true.",
      "We know not when He shall call us,\nWhether soon, the glad summons shall be,\nBut we know, when we pass o'er the river,\nThe glory of Jesus we'll see."
    ],
    youtubeId: "PkjjZLhcQ34",
    firstLine: "There's a beautiful place called heaven"
  },
  {
    id: 8,
    title: "Nearer, My God, to Thee",
    author: "Sarah F. Adams",
    category: "Prayer",
    verses: [
      "Nearer, my God, to Thee,\nNearer to Thee!\nEven though it be a cross\nThat raiseth me;\nStill all my song shall be:\n\"Nearer, my God, to Thee,\nNear to Thee.\"",
      "Though like the wanderer,\nThe sun gone down,\nDarkness be over me,\nMy rest a stone:\nYet in my dreams I'd be\nNearer, my God, to Thee,\nNearer to Thee!",
      "Then, with my waking thoughts\nBright with Thy praise,\nOut of my stony grief\nBethel I'll raise;\nSo, by my woes to be\nNearer, my God, to Thee,\nNearer to Thee!",
      "Or if on joyful wing\nClearing the sky,\nSun, moon, and stars forgot,\nUpwards I fly,\nStill all my song shall be:\n\"Nearer, my God, to Thee,\nNearer to Thee!\""
    ],
    youtubeId: "qU4kYLe8z_U",
    firstLine: "Nearer, my God, to Thee"
  },
  {
    id: 9,
    title: "No, Not One",
    author: "Johnson Oatman Jr.",
    category: "Friendship",
    verses: [
      "There's not a friend like the lowly Jesus,\nNo, not one! No, not one!\nNone else could heal all our soul's diseases,\nNo, not one! No, not one!\n \nJesus knows all about our struggles\nHe will guide till the day is done\nThere's not a friend like the lowly Jesus,\nNo, not one! No, not one!",
      "No friend like him is so high and holy,\nNo, not one! No, not one!\nAnd yet no friend is so meek and lowly,\nNo, not one! No, not one!",
      "There's not an hour that He is not near us,\nNo, not one! No, not one!\nNo night so dark but his love can cheer us,\nNo, not one! No, not one!",
      "Did ever saint find this friend forsake him,\nNo, not one! No, not one!\nOr sinner find that He would not take him?\nNo, not one! No, not one!"
    ],
    youtubeId: "iddd3qXiN5Y",
    firstLine: "There's not a friend like the lowly Jesus"
  },
  {
    id: 10,
    title: "Nothing but the Blood of Jesus",
    author: "Robert Lowry",
    category: "Salvation",
    verses: [
      "What can wash away my sins?\nNothing but the blood of Jesus!\nWhat can make me whole again?\nNothing but the blood of Jesus!\n \nO precious is the flow\nThat makes me white as snow!\nNo other fount I know:\nNothing but the blood of Jesus!",
      "For my pardon this I see\nNothing but the blood of Jesus!\nFor my cleansing this my plea\nNothing but the blood of Jesus!",
      "Nothing can for sin atone\nNothing but the blood of Jesus!\nNaught of good that I have done\nNothing but the blood of Jesus!",
      "This is all my hope and peace\nNothing but the blood of Jesus!\nThis is all my righteousness\nNothing but the blood of Jesus!"
    ],
    youtubeId: "WN9AEr15uNM",
    firstLine: "What can wash away my sins?"
  },
  {
    id: 11,
    title: "Oh, How I Love Jesus",
    author: "Frederick Whitfield",
    category: "Love",
    verses: [
      "There is a name I love to hear\nI love to sing its worth;\nIt sounds like music in mine ear,\nThe sweetest name on earth.\n \nOh, how I love Jesus,\nOh, how I love Jesus,\nOh, how I love Jesus,\nBecause He first loved me!",
      "It tells me of a saviour's love,\nWho died to set me free;\nIt tells me of His precious blood\nThe sinner's perfect plea.",
      "It tells me what my father has\nIn store for every day\nAnd though I tread a darksome path,\nYields sunshine all the way.",
      "It tells of one whose loving heart\nCan feel my deepest woe,\nWho in each sorrow bears a part,\nThat none can bear below."
    ],
    youtubeId: "ZbFY7IzpOVs",
    firstLine: "There is a name I love to hear"
  },
  {
    id: 12,
    title: "Keep Me Near the Cross",
    author: "Fanny Crosby",
    category: "Cross",
    verses: [
      "Jesus, keep me near the Cross;\nThere a precious fountain,\nFree to all, a healing stream,\nFlows from Calvary's Mountain.\n \nIn the Cross, in the Cross,\nBe my glory ever;\nTill my raptured soul shall find\nRest beyond the river.",
      "Near the Cross, a trembling soul,\nLove and mercy found me;\nThere the bright and morning star\nShed its beams around me.",
      "Near the Cross, O Lamb of God,\nBring its scenes before me;\nHelp me walk from day to day\nWith its shadow o'er me.",
      "Near the Cross I'll watch and wait,\nHoping, trusting ever,\nTill I reach the golden strand,\nJust beyond the river."
    ],
    youtubeId: "xXoNeJdH3n4",
    firstLine: "Jesus, keep me near the Cross"
  },
  {
    id: 13,
    title: "Onward Christian Soldiers",
    author: "Sabine Baring-Gould",
    category: "Battle",
    verses: [
      "Onward Christian soldiers\nMarching as to war;\nWith the cross of Jesus,\nGoing on before.\nChrist the loyal master,\nLeads against the foe;\nForward into battle.\nSee his banners go.",
      "Onward Christian soldiers,\nMarching as to war,\nWith the cross of Jesus,\nGoing on before.\nAt the sign of triumph,\nSatan's legions flee;\nOn then Christian soldiers,\nOn to victory.\nHell's foundations quiver\nAt the shout of praise,\nBrothers lift your voices,\nLoud your anthem raise.",
      "Like a mighty army\nMoves the church of God.\nBrothers, we are treading,\nWhere the saints have trod;\nWe are not divided;\nAll one body we,\nOne in the hope and doctrine,\nOne in charity.",
      "Crowns and thrones may perish\nKingdoms rise and wane,\nBut the church of Jesus\nConstant will remain;\nGates of hell can never\nAgainst that church prevail;\nWe have Christ's own promise\nWe can never fail.\nOnward, then, people\nJoin our happy throng,\nBlend with ours with your voices,\nIn the triumph song;\nGlory, laud and honour\nUnto Christ our king;\nThis through countless ages\nMen and angels sing."
    ],
    youtubeId: "p3fMLYOWkO4",
    firstLine: "Onward Christian soldiers"
  },
  {
    id: 14,
    title: "Rock of Ages",
    author: "Augustus Toplady",
    category: "Salvation",
    verses: [
      "Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy riven side which flowed,\nBe of sin the double cure,\nCleanse me from its guilt and power.",
      "Not the labours of my hands\nCan fulfil Thy law's demands;\nCould my zeal no respite know\nCould my tears for ever flow\nAll for sin could not atone;\nThou must save, and Thou alone.",
      "Nothing in my hand I bring,\nSimply to Thy cross I cling;\nNaked, come to Thee for dress,\nHelpless, look to Thee for grace;\nFoul, I to the fountain fly,\nWash me, Saviour, or I die.",
      "While I draw this fleeing breath,\nWhen mine eyes shall close in death,\nWhen I soar through tracts unknown\nSee Thee on Thy judgment throne;\nRock of Ages, cleft for me,\nLet me hide myself in Thee."
    ],
    youtubeId: "5hyJuuo24tY",
    firstLine: "Rock of Ages, cleft for me"
  }
];

const categories = {
  "Traditional": { icon: Book, color: "text-blue-600" },
  "Christmas": { icon: Gift, color: "text-red-600" },
  "Easter": { icon: Sunrise, color: "text-yellow-600" },
  "Worship": { icon: Cross, color: "text-purple-600" },
  "Praise": { icon: Music, color: "text-green-600" }
};

const SacredHymnsApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedHymn, setSelectedHymn] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [autoScroll, setAutoScroll] = useState(false);
  const [presentationMode, setPresentationMode] = useState(false);
  const [showNumberGrid, setShowNumberGrid] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false);
  const playerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const AnimatedBackground = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Sky gradient */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${darkMode
            ? 'bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900'
            : 'bg-gradient-to-b from-sky-100 via-blue-100 to-sky-50'
          }`}></div>

        {/* Animated clouds */}
        <div className="absolute top-10 left-[10%] animate-cloud1">
          <Cloud className={`${darkMode ? 'text-gray-700/30' : 'text-white'} w-24 h-16`} />
        </div>
        <div className="absolute top-40 right-[15%] animate-cloud2">
          <Cloud className={`${darkMode ? 'text-gray-700/30' : 'text-white'} w-32 h-20`} />
        </div>
        <div className="absolute bottom-20 left-[20%] animate-cloud3">
          <Cloud className={`${darkMode ? 'text-gray-700/20' : 'text-white/90'} w-28 h-18`} />
        </div>

        {/* Subtle particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'bg-blue-400/10' : 'bg-blue-200/40'
                }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                animation: `pulse ${Math.random() * 4 + 2}s infinite`
              }}
            ></div>
          ))}
        </div>

        {/* CSS Animations */}
        <style jsx>{`
        @keyframes cloud1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(20px) translateY(5px); }
        }
        @keyframes cloud2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(3px); }
        }
        @keyframes cloud3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(15px) translateY(-2px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        .animate-cloud1 {
          animation: cloud1 15s ease-in-out infinite;
        }
        .animate-cloud2 {
          animation: cloud2 20s ease-in-out infinite;
        }
        .animate-cloud3 {
          animation: cloud3 18s ease-in-out infinite;
        }
      `}</style>
      </div>
    );
  };

  // Initialize component
  useEffect(() => {
    // Check for stored favorites
    const savedFavorites = JSON.parse(localStorage.getItem('hymnFavorites') || '[]');
    const savedRecent = JSON.parse(localStorage.getItem('hymnRecent') || '[]');
    const savedTheme = localStorage.getItem('hymnTheme') || 'light';
    const savedFontSize = parseInt(localStorage.getItem('hymnFontSize') || '16');
    const savedPlaylists = JSON.parse(localStorage.getItem('hymnPlaylists') || '[]');

    setFavorites(new Set(savedFavorites));
    setRecentlyViewed(savedRecent);
    setDarkMode(savedTheme === 'dark');
    setFontSize(savedFontSize);
    setPlaylists(savedPlaylists);

    // Online/offline detection
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('hymnFavorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('hymnRecent', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  useEffect(() => {
    localStorage.setItem('hymnTheme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('hymnFontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('hymnPlaylists', JSON.stringify(playlists));
  }, [playlists]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPresentationMode(false);
        setShowPlaylistModal(false);
      } else if (e.key === 'F11') {
        e.preventDefault();
        setPresentationMode(!presentationMode);
      } else if (e.key === ' ' && selectedHymn) {
        e.preventDefault();
        togglePlay();
      } else if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('search-input')?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedHymn, isPlaying, presentationMode]);

  const filteredHymns = hymnsDatabase.filter(hymn => {
    const matchesSearch = searchTerm === '' ||
      hymn.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hymn.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hymn.firstLine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hymn.id.toString() === searchTerm;

    const matchesCategory = selectedCategory === '' || hymn.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const addToRecentlyViewed = (hymn) => {
    const newRecent = [hymn, ...recentlyViewed.filter(h => h.id !== hymn.id)].slice(0, 5);
    setRecentlyViewed(newRecent);
  };

  const toggleFavorite = (hymnId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(hymnId)) {
      newFavorites.delete(hymnId);
    } else {
      newFavorites.add(hymnId);
    }
    setFavorites(newFavorites);
  };

  const openHymn = (hymn) => {
    setSelectedHymn(hymn);
    setCurrentView('hymn');
    addToRecentlyViewed(hymn);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setShowYoutubePlayer(false); // Reset video view when hymn changes
  };


  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }

    scrollIntervalRef.current = setInterval(() => {
      window.scrollBy(0, 1);
    }, 100);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const toggleAutoScroll = () => {
    if (autoScroll) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
    setAutoScroll(!autoScroll);
  };

  const createPlaylist = (name) => {
    const newPlaylist = {
      id: Date.now(),
      name,
      hymns: []
    };
    setPlaylists([...playlists, newPlaylist]);
    return newPlaylist;
  };

  const addToPlaylist = (playlistId, hymnId) => {
    setPlaylists(playlists.map(playlist =>
      playlist.id === playlistId
        ? { ...playlist, hymns: [...playlist.hymns, hymnId] }
        : playlist
    ));
  };

  const NavigationHeader = () => (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {currentView !== 'home' && (
              <button
                onClick={() => setCurrentView('home')}
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <div className="flex items-center space-x-2">
              <Cross className="h-8 w-8 text-blue-600" />
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                SING UNTO THE LORD
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className={`text-sm px-2 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              {hymnsDatabase.length} hymns
            </div>
            {!isOnline && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Offline
              </span>
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  const SearchBar = () => (
    <div className="max-w-2xl mx-auto mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id="search-input"
          type="text"
          placeholder="Search hymns by title, author, number, or first line..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode
            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
        />
      </div>
    </div>
  );

  const CategoryFilter = () => (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      <button
        onClick={() => setSelectedCategory('')}
        className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === ''
          ? 'bg-blue-600 text-white'
          : darkMode
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
      >
        All
      </button>
      {Object.entries(categories).map(([category, { icon: Icon, color }]) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full transition-colors flex items-center space-x-2 ${selectedCategory === category
            ? 'bg-blue-600 text-white'
            : darkMode
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          <Icon className="h-4 w-4" />
          <span>{category}</span>
        </button>
      ))}
    </div>
  );

  const NumberGrid = () => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Quick Number Access
        </h3>
        <button
          onClick={() => setShowNumberGrid(!showNumberGrid)}
          className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            } transition-colors`}
        >
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {showNumberGrid ? 'Hide' : 'Show'} Grid
          </span>
          {showNumberGrid ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {showNumberGrid && (
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {hymnsDatabase.map(hymn => (
            <button
              key={hymn.id}
              onClick={() => openHymn(hymn)}
              className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${darkMode
                ? 'bg-gray-800 border-gray-600 hover:border-blue-500 text-white'
                : 'bg-white border-gray-200 hover:border-blue-500 text-gray-900'
                }`}
            >
              <div className="text-lg font-bold text-blue-600">{hymn.id}</div>
              <div className="text-xs mt-1 opacity-75 truncate">{hymn.title}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const HymnCard = ({ hymn }) => {
    const CategoryIcon = categories[hymn.category]?.icon || Music;

    return (
      <div
        onClick={() => openHymn(hymn)}
        className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${darkMode
          ? 'bg-gray-800 border-gray-600 hover:border-blue-500'
          : 'bg-white border-gray-200 hover:border-blue-500'
          }`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
              {hymn.id}
            </div>
            <div className="flex items-center space-x-2">
              <CategoryIcon className={`h-5 w-5 ${categories[hymn.category]?.color || 'text-gray-500'}`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {hymn.category}
              </span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(hymn.id);
            }}
            className={`p-2 rounded-full transition-colors ${favorites.has(hymn.id)
              ? 'text-red-500 hover:bg-red-50'
              : darkMode
                ? 'text-gray-400 hover:bg-gray-700'
                : 'text-gray-400 hover:bg-gray-100'
              }`}
          >
            <Heart className={`h-5 w-5 ${favorites.has(hymn.id) ? 'fill-current' : ''}`} />
          </button>
        </div>

        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {hymn.title}
        </h3>
        <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          by {hymn.author}
        </p>
        <p className={`text-sm italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          "{hymn.firstLine}"
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isOnline && (
              <div className="flex items-center space-x-1 text-green-600">
                <Volume2 className="h-4 w-4" />
                <span className="text-xs">Audio Available</span>
              </div>
            )}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {hymn.verses.length} verse{hymn.verses.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
    );
  };

  const HymnView = () => {

    const hymn = selectedHymn;
    if (!hymn) return null;

    return (
      <div className={`${presentationMode ? 'fixed inset-0 z-50 flex items-center justify-center' : ''} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {!presentationMode && (
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentView('home')}
                  className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div className="text-3xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                  {hymn.id}
                </div>
                <div>
                  <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {hymn.title}
                  </h1>
                  <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    by {hymn.author}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleFavorite(hymn.id)}
                  className={`p-3 rounded-full transition-colors ${favorites.has(hymn.id)
                    ? 'text-red-500 hover:bg-red-50'
                    : darkMode
                      ? 'text-gray-400 hover:bg-gray-700'
                      : 'text-gray-400 hover:bg-gray-100'
                    }`}
                >
                  <Heart className={`h-6 w-6 ${favorites.has(hymn.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => setPresentationMode(true)}
                  className={`p-3 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                    }`}
                >
                  <Settings className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  A-
                </button>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Font Size
                </span>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  A+
                </button>
              </div>

              <button
                onClick={toggleAutoScroll}
                className={`px-4 py-2 rounded-lg transition-colors ${autoScroll
                  ? 'bg-blue-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
              >
                {autoScroll ? 'Stop Auto-scroll' : 'Auto-scroll'}
              </button>
            </div>

            {/* YouTube Toggle Button */}
            {isOnline && hymn.youtubeId && (
              <div className="mb-8">
                {!showYoutubePlayer ? (
                  <button
                    onClick={() => setShowYoutubePlayer(true)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    ▶ Watch Video
                  </button>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-4">
                    <iframe
                      ref={playerRef}
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${hymn.youtubeId}?autoplay=1`}
                      title={hymn.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                    <button
                      onClick={() => setShowYoutubePlayer(false)}
                      className="mt-2 px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Hide Video
                    </button>
                  </div>
                )}
              </div>
            )}


            {/* Hymn Verses */}
            <div className="space-y-8">
              {hymn.verses.map((verse, index) => (
                <div key={index} className="verse">
                  <div className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Verse {index + 1}
                  </div>
                  <div
                    className={`text-lg leading-relaxed whitespace-pre-line ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {verse}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Presentation Mode */}
        {presentationMode && (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
            <button
              onClick={() => setPresentationMode(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            <div className="mb-8">
              <h1 className="text-6xl font-bold text-white mb-4">{hymn.title}</h1>
              <p className="text-2xl text-gray-300">by {hymn.author}</p>
            </div>

            <div className="space-y-12 max-w-4xl">
              {hymn.verses.map((verse, index) => (
                <div key={index} className="verse">
                  <div className="text-lg font-semibold mb-4 text-gray-400">
                    Verse {index + 1}
                  </div>
                  <div className="text-3xl leading-relaxed whitespace-pre-line text-white">
                    {verse}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const RecentlyViewedView = () => {
    if (recentlyViewed.length === 0) {
      return (
        <div className="text-center p-8">
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            No recently viewed hymns.
          </p>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 mb-6">
          <button
            onClick={() => setCurrentView('home')}
            className="text-blue-600 hover:underline"
          >
            ← Back to Home
          </button>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recently Viewed Hymns
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentlyViewed.map(hymn => (
            <HymnCard key={`recent-${hymn.id}`} hymn={hymn} />
          ))}
        </div>
      </div>
    );
  };

  const FavoriteHymnsView = () => {
    const favoriteHymns = hymnsDatabase.filter(hymn => favorites.has(hymn.id));

    if (favoriteHymns.length === 0) {
      return (
        <div className="text-center p-8">
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            You haven't added any favorites yet.
          </p>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 mb-6">
          <button
            onClick={() => setCurrentView('home')}
            className="text-yellow-500 hover:underline"
          >
            ← Back to Home
          </button>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Favorite Hymns
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteHymns.map(hymn => (
            <HymnCard key={`favorite-${hymn.id}`} hymn={hymn} />
          ))}
        </div>
      </div>
    );
  };

  const RecentlyViewed = () => {
    if (recentlyViewed.length === 0) return null;

    return (
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="h-5 w-5 text-gray-500" />
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recently Viewed
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentlyViewed.map(hymn => (
            <HymnCard key={`recent-${hymn.id}`} hymn={hymn} />
          ))}
        </div>
      </div>
    );
  };

  const FavoriteHymns = () => {
    const favoriteHymns = hymnsDatabase.filter(hymn => favorites.has(hymn.id));
    const [isExpanded, setIsExpanded] = useState(true);

    if (favoriteHymns.length === 0) return null;

    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Favorite Hymns ({favoriteHymns.length})
            </h2>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            aria-label={isExpanded ? 'Collapse favorites' : 'Expand favorites'}
          >
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-300 ease-in-out">
            {favoriteHymns.map(hymn => (
              <HymnCard key={`favorite-${hymn.id}`} hymn={hymn} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const HomeView = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Welcome to Sing Unto The Lord.
        </h2>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A collection of hymns for worship, praise, and reflection. For UNIMA Church of Christ members and friends.
        </p>
      </div>

      <SearchBar />
      <CategoryFilter />
      <NumberGrid />
      <div className="mb-8">
        <button
          onClick={() => setCurrentView('recent')}
          className={`flex items-center space-x-2 text-blue-600 hover:underline`}
        >
          <Clock className="h-5 w-5" />
          <span>View Recently Viewed Hymns</span>
        </button>
      </div>
      <FavoriteHymns />

      <div className="mb-8">
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          All Hymns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHymns.map(hymn => (
            <HymnCard key={hymn.id} hymn={hymn} />
          ))}
        </div>

        {filteredHymns.length === 0 && (
          <div className="text-center py-12">
            <Music className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No hymns found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  // Back button behavior
  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      if (currentView === 'hymn' || currentView === 'recent' || currentView === 'favorites') {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentView]);

  // Main render
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <AnimatedBackground />
      <NavigationHeader />

      {currentView === 'home' && <HomeView />}
      {currentView === 'hymn' && <HymnView />}
      {currentView === 'recent' && <RecentlyViewedView />}
      {currentView === 'favorites' && <FavoriteHymnsView />}

      {/* Service Worker Registration */}
      {typeof window !== 'undefined' && (
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                  })
                  .catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
              });
            }
          `
        }} />
      )}

      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#2563eb" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="SING UNTO THE LORD" />
      <meta name="description" content="A Collection of UNIMA Church of Christ Hymns." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </div>
  );
};

export default SacredHymnsApp;