
import { Info } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { Search, Heart, Grid, Moon, Sun, ArrowLeft, ChevronDown, ChevronUp, Music, Clock, Star, Book, Cross, Gift, Sunrise, Shield, Flame } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faTelegram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

// Expanded hymn database - you can easily add more hymns here
const hymnsDatabase = [
  {
    id: 1,
    title: "In Christ Alone",
    author: "Keith Getty & Stuart Townend",
    category: "Easter",
    verses: [
      "In Christ alone my hope is found\nHe is my Light, my Strength, my Song\nThis Cornerstone, this Solid ground\nFirm through the fiercest drought and storm \n \n What heights of love, what depths of peace?\nWhen fears are stilled, when strivings cease\nMy Comforter, my All in All\nHere in the love of Christ I stand",
      "In Christ alone, who took on flesh\nFullness of God in helpless Babe\nThis Gift of love and righteousness\nScorned by the ones He came to save\n \n'Til on that cross as Jesus died\nThe wrath of God was satisfied\nFor every sin on Him was laid\nHere in the death of Christ I live",
      "There in the ground His body lay\nLight of the world by darkness slain\nThen bursting forth in glorious day\nUp from the grave He rose again \n \nAnd as He stands in victory\nSin's curse has lost its grip on me\nFor I am His and He is mine\nBought with the precious blood of Christ",
      "No guilt in life, no fear in death\nThis is the power of Christ in me\nFrom life's first cry to final breath\nJesus commands my destiny\n \nNo power of hell, no scheme of man\nCan ever pluck me from His hand\n'Til He returns or calls me home\nHere in the power of Christ I'll stand\n\n"
    ],
    youtubeId: "YRPh9fymWu8",
    firstLine: "In Christ alone my hope is found",
    bio: "Keith Getty and Stuart Townend are modern hymn writers from the UK known for revitalizing congregational worship. 'In Christ Alone' is one of the most beloved contemporary hymns, first released in 2001."

  },

  {
    id: 2,
    title: "All to Jesus I Surrender",
    author: "Judson W. Van DeVenter",
    category: "Worship",
    verses: [
      "All to Jesus I surrender,\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live.\n \nI surrender all, I surrender all;\nAll to Thee, my blessed Saviour,\nI surrender all.",
      "All to Jesus I surrender,\nHumbly at His feet I bow;\nWorldly pleasures all forsaken\nTake me, Jesus, take me now.",
      "All to Jesus I surrender,\nMake me Saviour, wholly Thine;\nLet me feel the Holy Spirit,\nTruly know Thou art mine.",
      "All to Jesus I surrender,\nLord, I give myself to Thee\nFill me with Thy love and power\nLet Thy blessings fall on me",
      "All to Jesus I surrender:\nNow I feel he sacred flame;\nOh, the joy of full salvation!\nGlory, glory to His Name!\n\n"
    ],
    youtubeId: "7614spqDTTE",
    firstLine: "All to Jesus I surrender",
    bio: "Judson W. Van DeVenter was an American hymn writer and evangelist in the late 19th century. 'I Surrender All' is one of his most famous hymns, emphasizing total commitment to Christ."
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
      "When we've been there ten thousand years,\nBright shining as the sin,\nWe've no less days to sing God's praise\nThan when we first begun.\n\n"
    ],
    youtubeId: "YXd-FyGMVto",
    firstLine: "Amazing grace! How sweet the sound!",
    bio: "John Newton was an 18th-century English clergyman and former slave trader who became a prominent abolitionist. 'Amazing Grace' is his most famous hymn, reflecting his profound spiritual transformation."
  },
  {
    id: 4,
    title: "Are You Washed in the Blood?",
    author: "Elisha A. Hoffman",
    category: "Easter",
    verses: [
      "Have you been to Jesus for the cleansing power?\nAre you washed in the blood of the lamb?\nAre you fully trusting in his grace this hour?\nAre you washed in the blood of the lamb?\n \nAre you washed in the blood,\nIn the soul-cleansing of the lamb?\nAre your garments spotless? Are they white as snow?\nAre you washed in the blood of the lamb?",
      "Are you walking daily by the saviour's side?\nAre you washed in the blood of the lamb?\nDo you rest each time in the crucified?\nAre you washed in the blood of the lamb?",
      "When the bridegroom cometh, will you robes be white?\nAre you washed in the blood of the lamb?\nWill your souls be ready for the mansions bright?\nAre you washed in the blood of the lamb?",
      "Lay aside the garments that are stained with sin,\nAre you washed in the blood of the lamb?\nThere's a fountain flowing for the soul unclean,\nAre you washed in the blood of the lamb?\n\n"
    ],
    youtubeId: "0enMoYc6EpM",
    firstLine: "Have you been to Jesus for the cleansing power?",
    bio: "Elisha A. Hoffman was a 19th-century American hymn writer and evangelist. 'Are You Washed in the Blood?' is one of his most enduring hymns, emphasizing the cleansing power of Christ's sacrifice."
  },
  {
    id: 5,
    title: "To God Be the Glory",
    author: "Fanny Crosby",
    category: "Praise",
    verses: [
      "To God be the glory, great things He hath done,\nSo loved He the world that He gave us His Son,\nWho yielded His life an attonment for Sin,\nAnd opened the life-gate that all may go in.\n \nPraise the Lord, praise the Lord,\nLet the earth hear His voice;\nPraise the Lord, praise the Lord,\nLet the people rejoice;\nOh, come to the Father, through Jesus the Son,\nAnd give Him the glory! Great things He hath done.",
      "Oh, perfect redemption, the purchase of blood,\nTo every believer the promise of God;\nThe vilest offender who truly believes,\nThat moment from Jesus a pardon receives.",
      "Great things He hath taught us,\ngreat things He hath done,\nAnd great our rejoicing through Jesus the Son;\nBut purer, and higher, and greater will be\nOur wonder, our transport when Jesus we see.\n\n"
    ],
    youtubeId: "aKMfTwxAJ4k",
    firstLine: "To God be the glory, great things He hath done",
    bio: "Fanny Crosby was a prolific 19th-century American hymn writer, known for her deep faith and prolific output. 'To God Be the Glory' is one of her most famous hymns, celebrating God's grace and salvation."
  },
  {
    id: 6,
    title: "Break Thou the Bread of Life",
    author: "Mary A. Lathbury",
    category: "Easter",
    verses: [
      "Break Thou the Bread of Life,\nDear Lord, to me,\nAs Thou didst break the loaves\nBeside the sea;\nBeyond the sacred page\nI seek Thee, Lord;\nMy Spirit pants for Thee,\nO living Word.",
      "Thou art the Bread of Life,\nO Lord, to me,\nThy Holy Word the truth\nThat saveth me:\nGive me to eat and live\nWith Thee above;\nTeach me to love Thy truth,\nFor Thou art Love.",
      "Send Thy Spirit, Lord,\nNow unto me,\nThat He may touch my eyes,\nAnd make me see:\nShow me the truth concealed\nWithin Thy Word,\nAnd in Thy Book revealed\nI see the Lord.",
      "Bless Thou the truth, dear Lord,\nTo me, to me,\nAs Thou didst bless the bread\nBy Galilee;\nThen shall all bondage cease,\nAll fetters fall,\nAnd I shall find my peace,\nMy all in all."
    ],
    youtubeId: "euz0ot2dDY8",
    firstLine: "Break Thou the Bread of Life",
    bio: "Mary A. Lathbury was a 19th-century American hymn writer and social reformer. 'Break Thou the Bread of Life' is a beloved hymn that emphasizes the importance of Scripture and spiritual nourishment."
  },
  {
    id: 7,
    title: "Above the Bright Blue",
    author: "George S. Schuler",
    category: "Traditional",
    verses: [
      "There's a beautiful place called heaven,\nIt is hidden above the bright blue,\nWhere the good, who from earth ties are riven,\nLive and love an eternity through.\n \nAbove the bright blue, the beautiful blue,\nJesus is waiting for me and for you;\nHeaven is there, not far from our sight,\nBeautiful city of light.",
      "This land of sweet rest awaits us,\nSomeday it will break on our view,\n'Tis promised by Christ the Redeemer,\nTo His followers faithful and true.",
      "We know not when He shall call us,\nWhether soon, the glad summons shall be,\nBut we know, when we pass o'er the river,\nThe glory of Jesus we'll see.\n\n"
    ],
    youtubeId: "PkjjZLhcQ34",
    firstLine: "There's a beautiful place called heaven",
    bio: "George S. Schuler was a 20th-century hymn writer known for his uplifting and hopeful lyrics. 'Above the Bright Blue' is a hymn that speaks of the promise of heaven and eternal life with Christ."
  },
  {
    id: 8,
    title: "Nearer, My God, to Thee",
    author: "Sarah F. Adams",
    category: "Worship",
    verses: [
      "Nearer, my God, to Thee,\nNearer to Thee!\nEven though it be a cross\nThat raiseth me;\nStill all my song shall be:\n\"Nearer, my God, to Thee,\nNear to Thee.\"",
      "Though like the wanderer,\nThe sun gone down,\nDarkness be over me,\nMy rest a stone:\nYet in my dreams I'd be\nNearer, my God, to Thee,\nNearer to Thee!",
      "Then, with my waking thoughts\nBright with Thy praise,\nOut of my stony grief\nBethel I'll raise;\nSo, by my woes to be\nNearer, my God, to Thee,\nNearer to Thee!",
      "Or if on joyful wing\nClearing the sky,\nSun, moon, and stars forgot,\nUpwards I fly,\nStill all my song shall be:\n\"Nearer, my God, to Thee,\nNearer to Thee!\"\n\n"
    ],
    youtubeId: "qU4kYLe8z_U",
    firstLine: "Nearer, my God, to Thee",
    bio: "Sarah F. Adams was a 19th-century English poet and hymn writer. 'Nearer, My God, to Thee' is one of her most famous hymns, expressing a deep desire for closeness to God, even in times of trial."
  },
  {
    id: 9,
    title: "No, Not One",
    author: "Johnson Oatman Jr.",
    category: "Traditional",
    verses: [
      "There's not a friend like the lowly Jesus,\nNo, not one! No, not one!\nNone else could heal all our soul's diseases,\nNo, not one! No, not one!\n \nJesus knows all about our struggles\nHe will guide till the day is done\nThere's not a friend like the lowly Jesus,\nNo, not one! No, not one!",
      "No friend like him is so high and holy,\nNo, not one! No, not one!\nAnd yet no friend is so meek and lowly,\nNo, not one! No, not one!",
      "There's not an hour that He is not near us,\nNo, not one! No, not one!\nNo night so dark but his love can cheer us,\nNo, not one! No, not one!",
      "Did ever saint find this friend forsake him,\nNo, not one! No, not one!\nOr sinner find that He would not take him?\nNo, not one! No, not one!\n\n"
    ],
    youtubeId: "iddd3qXiN5Y",
    firstLine: "There's not a friend like the lowly Jesus",
    bio: "Johnson Oatman Jr. was a 19th-century American hymn writer known for his simple yet profound lyrics. 'No, Not One' is a beloved hymn that emphasizes the unique friendship and support found in Jesus."
  },
  {
    id: 10,
    title: "Nothing but the Blood of Jesus",
    author: "Robert Lowry",
    category: "Easter",
    verses: [
      "What can wash away my sins?\nNothing but the blood of Jesus!\nWhat can make me whole again?\nNothing but the blood of Jesus!\n \nO precious is the flow\nThat makes me white as snow!\nNo other fount I know:\nNothing but the blood of Jesus!",
      "For my pardon this I see\nNothing but the blood of Jesus!\nFor my cleansing this my plea\nNothing but the blood of Jesus!",
      "Nothing can for sin atone\nNothing but the blood of Jesus!\nNaught of good that I have done\nNothing but the blood of Jesus!",
      "This is all my hope and peace\nNothing but the blood of Jesus!\nThis is all my righteousness\nNothing but the blood of Jesus!\n\n"
    ],
    youtubeId: "WN9AEr15uNM",
    firstLine: "What can wash away my sins?",
    bio: "Robert Lowry was a 19th-century American Baptist minister and hymn writer. 'Nothing but the Blood of Jesus' is one of his most famous hymns, celebrating the redemptive power of Christ's sacrifice."
  },
  {
    id: 11,
    title: "Oh, How I Love Jesus",
    author: "Frederick Whitfield",
    category: "Traditional",
    verses: [
      "There is a name I love to hear\nI love to sing its worth;\nIt sounds like music in mine ear,\nThe sweetest name on earth.\n \nOh, how I love Jesus,\nOh, how I love Jesus,\nOh, how I love Jesus,\nBecause He first loved me!",
      "It tells me of a saviour's love,\nWho died to set me free;\nIt tells me of His precious blood\nThe sinner's perfect plea.",
      "It tells me what my father has\nIn store for every day\nAnd though I tread a darksome path,\nYields sunshine all the way.",
      "It tells of one whose loving heart\nCan feel my deepest woe,\nWho in each sorrow bears a part,\nThat none can bear below.\n\n"
    ],
    youtubeId: "ZbFY7IzpOVs",
    firstLine: "There is a name I love to hear",
    bio: "Frederick Whitfield was a 19th-century English clergyman and hymn writer. 'Oh, How I Love Jesus' is a cherished hymn that expresses deep affection for Jesus and the joy of His love."
  },
  {
    id: 12,
    title: "Keep Me Near the Cross",
    author: "Fanny Crosby",
    category: "Easter",
    verses: [
      "Jesus, keep me near the Cross;\nThere a precious fountain,\nFree to all, a healing stream,\nFlows from Calvary's Mountain.\n \nIn the Cross, in the Cross,\nBe my glory ever;\nTill my raptured soul shall find\nRest beyond the river.",
      "Near the Cross, a trembling soul,\nLove and mercy found me;\nThere the bright and morning star\nShed its beams around me.",
      "Near the Cross, O Lamb of God,\nBring its scenes before me;\nHelp me walk from day to day\nWith its shadow o'er me.",
      "Near the Cross I'll watch and wait,\nHoping, trusting ever,\nTill I reach the golden strand,\nJust beyond the river.\n\n"
    ],
    youtubeId: "xXoNeJdH3n4",
    firstLine: "Jesus, keep me near the Cross",
    bio: "Fanny Crosby, a prolific 19th-century hymn writer, wrote 'Keep Me Near the Cross' to express her desire to remain close to the sacrifice of Christ. Her hymns often reflect deep spiritual insight and devotion."
  },
  {
    id: 13,
    title: "Onward Christian Soldiers",
    author: "Sabine Baring-Gould",
    category: "Warship",
    verses: [
      "Onward Christian soldiers\nMarching as to war;\nWith the cross of Jesus,\nGoing on before.\nChrist the loyal master,\nLeads against the foe;\nForward into battle.\nSee his banners go. \n\nOnward Christian soldiers,\nMarching as to war,\nWith the cross of Jesus,\nGoing on before.",
      "At the sign of triumph,\nSatan's legions flee;\nOn then Christian soldiers,\nOn to victory.\nHell's foundations quiver\nAt the shout of praise,\nBrothers lift your voices,\nLoud your anthem raise.",
      "Like a mighty army\nMoves the church of God.\nBrothers, we are treading,\nWhere the saints have trod;\nWe are not divided;\nAll one body we,\nOne in the hope and doctrine,\nOne in charity.",
      "Crowns and thrones may perish\nKingdoms rise and wane,\nBut the church of Jesus\nConstant will remain;\nGates of hell can never\nAgainst that church prevail;\nWe have Christ's own promise.\nWe can never fail.",
      "Onward, then, people\nJoin our happy throng,\nBlend with ours with your voices,\nIn the triumph song;\nGlory, laud and honour\nUnto Christ our king;\nThis through countless ages\nMen and angels sing.\n\n"
    ],
    youtubeId: "p3fMLYOWkO4",
    firstLine: "Onward Christian soldiers",
    bio: "Sabine Baring-Gould was a 19th-century English writer and hymnologist. 'Onward Christian Soldiers' is one of his most famous hymns, emphasizing the Christian's call to spiritual warfare and unity in Christ."
  },
  {
    id: 14,
    title: "Rock of Ages",
    author: "Augustus Toplady",
    category: "Praise",
    verses: [
      "Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy riven side which flowed,\nBe of sin the double cure,\nCleanse me from its guilt and power.",
      "Not the labours of my hands\nCan fulfil Thy law's demands;\nCould my zeal no respite know\nCould my tears for ever flow\nAll for sin could not atone;\nThou must save, and Thou alone.",
      "Nothing in my hand I bring,\nSimply to Thy cross I cling;\nNaked, come to Thee for dress,\nHelpless, look to Thee for grace;\nFoul, I to the fountain fly,\nWash me, Saviour, or I die.",
      "While I draw this fleeing breath,\nWhen mine eyes shall close in death,\nWhen I soar through tracts unknown\nSee Thee on Thy judgment throne;\nRock of Ages, cleft for me,\nLet me hide myself in Thee."
    ],
    youtubeId: "5hyJuuo24tY",
    firstLine: "Rock of Ages, cleft for me",
    bio: "Augustus Toplady was an 18th-century English Anglican cleric and hymn writer. 'Rock of Ages' is one of his most enduring hymns, emphasizing the sufficiency of Christ's sacrifice for salvation."
  },
  {
    id: 15,
    title: "Stand Up For Jesus",
    author: "George Duffield Jr.",
    category: "Worship",
    verses: [
      "Stand up! Stand up for Jesus,\nYe soldiers of the cross!\nLift high His royal banner,\nIt must not suffer loss.\nFrom victory unto victory\nHis army shall He lead,\nTill every foe is vanquished,\nAnd Christ is Lord indeed.",
      "Stand up! Stand up for Jesus,\nThe trumpet call obey;\nForth to the mighty conflict\nIn this His glorious day.\nYe that are His now serve Him\nAgainst unnumbered foes;\nLet courage rise with danger,\nAnd strength to strength oppose.",
      "Stand up! Stand up for Jesus,\nStand in His strength alone!\nThe arm of flesh will fail you;\nYe dare not trust your own.\nPut on the Gospel armour,\nAnd, watching unto prayer,\nWhere duty calls, or danger,\nBe never wanting there.",
      "Stand up! Stand up for Jesus,\nThe strife will not be long!\nThis day the noise of battle,\nThe next the victor's song;\nTo him that overcometh\nA crown of life shall be;\nHe, with the King of Glory,\nShall reign eternally.\n\n"
    ],
    youtubeId: "wgRudMZvrjA",
    firstLine: "Stand up! Stand up for Jesus",
    bio: "George Duffield Jr. was a 19th-century American pastor and hymn writer. 'Stand Up for Jesus' is a powerful call to Christian action and commitment, encouraging believers to stand firm in their faith."
  },
  {
    id: 16,
    title: "Sweet By And By",
    author: "Sanford F. Bennett",
    category: "Traditional",
    verses: [
      "There's a land that is fairer than day,\nAnd by faith we can see it afar;\nFor the Father waits over the way\nTo prepare us a dwelling place there.\n\nIn the sweet by and by,\nWe shall meet on that beautiful shore;\nIn the sweet by and by\nWe shall meet on that beautiful shore.",
      "We shall sing on that beautiful shore\nThe melodious songs of the blest,\nAnd our spirits shall sorrow no more,\nNot a sigh for the blessing of rest.",
      "To our bountiful Father above\nWe will offer our tribute of praise\nFor the glorious gift of His love\nAnd the blessings that hallow our days.\n\n"
    ],
    youtubeId: "Ciw3d6oUYAU",
    firstLine: "There's a land that is fairer than day",
    bio: "Sanford F. Bennett was a 19th-century American hymn writer. 'Sweet By and By' is a beloved hymn that expresses hope and anticipation for the eternal life promised to believers, emphasizing the joy of reunion in heaven."
  },
  {
    id: 17,
    title: "Blessed Assurance",
    author: "Fanny Crosby",
    category: "Traditional",
    verses: [
      "Blessed assurance—Jesus is mine!\nO what a foretaste of glory divine!\nHeir of salvation, purchase of God;\nBorn of His Spirit, washed in His blood.\n\n This is my story, this is my song,\nPraising my Saviour all the day long;\nThis is my story, this is my song,\nPraising my Saviour all the day long.",
      "Perfect submission, perfect delight,\nVisions of rapture now burst on my sight;\nAngels descending, bring from above\nEchoes of mercy, whispers of love.",
      "Perfect submission, all is at rest,\nI in my Saviour am happy and blest;\nWatching and waiting, looking above,\nFilled with His goodness, lost in His love.\n\n"
    ],
    youtubeId: "ZaAUugfVVO8",
    firstLine: "Blessed assurance—Jesus is mine!",
    bio: "Fanny Crosby, a prolific 19th-century hymn writer, wrote 'Blessed Assurance' to express her deep faith and confidence in Christ. The hymn is one of her most famous works, celebrating the joy of salvation and assurance in Jesus."
  },
  {
    id: 18,
    title: "Trust And Obey",
    author: "John H. Sammis",
    category: "Warship",
    verses: [
      "When we walk with the Lord\nIn the light of His Word,\nWhat a glory He sheds on our way!\nWhile we do His good will,\nHe abides with us still,\nAnd with all who will trust and obey.\n\n Trust and obey,\nFor there's no other way\nTo be happy in Jesus\nBut to trust and obey.",
      "Not a shadow can rise,\nNot a cloud in the skies,\nBut His smile quickly drives it away;\nNot a doubt or a fear,\nNot a sigh or a tear,\nCan abide while we trust and obey.",
      "Not a burden we bear,\nNot a sorrow we share,\nBut our toil He doth richly repay;\nNot a grief or a loss,\nNot a frown or a cross,\nBut is blessed if we trust and obey.",
      "But we never can prove\nThe delights of His love\nUntil all on the altar we lay;\nFor the favor He shows,\nFor the joy He bestows,\nAre for them who will trust and obey.",
      "Then in fellowship sweet\nWe will sit at His feet,\nOr we'll walk by His side in the way;\nWhat He says we will do,\nWhere He sends, we will go—\nNever fear, only trust and obey.\n\n"
    ],
    youtubeId: "n4U-yx6cFb0",
    firstLine: "When we walk with the Lord",
    bio: "John H. Sammis was a 19th-century American Presbyterian minister and hymn writer. 'Trust and Obey' is one of his most well-known hymns, emphasizing the importance of faith and obedience in the Christian life."
  },
  {
    id: 19,
    title: "What A Friend We Have In Jesus",
    author: "Joseph M. Scriven",
    category: "Friendship",
    verses: [
      "What a Friend we have in Jesus,\nAll our sins and griefs to bear!\nWhat a privilege to carry\nEverything to God in prayer!\nO what peace we often forfeit,\nO what needless pain we bear,\nAll because we do not carry\nEverything to God in prayer!",
      "Have we trials and temptations?\nIs there trouble anywhere?\nWe should never be discouraged—\nTake it to the Lord in prayer.\nCan we find a friend so faithful,\nWho will all our sorrows share?\nJesus knows our every weakness—\nTake it to the Lord in prayer.",
      "Are we weak and heavy-laden,\nCumbered with a load of care?\nPrecious Saviour, still our refuge—\nTake it to the Lord in prayer.\nDo thy friends despise, forsake thee?\nTake it to the Lord in prayer!\nIn His arms He'll take and shield thee,\nThou wilt find a solace there."
    ],
    youtubeId: "LarFhGeE-ac",
    firstLine: "What a Friend we have in Jesus",
    bio: "Joseph M. Scriven was a 19th-century Irish poet and hymn writer. 'What a Friend We Have in Jesus' is one of his most beloved hymns, emphasizing the comfort and solace found in Jesus as a friend and intercessor."
  },
  {
    id: 20,
    title: "It Is Well With My Soul",
    author: "Horatio G. Spafford",
    category: "Peace",
    verses: [
      "When peace like a river attendeth my way,\nWhen sorrows like sea billows roll—\nWhatever my lot, Thou hast taught me to say,\n\"It is well, it is well with my soul!\"\n\nIt is well (it is well), with my soul (with my soul);\nIt is well, it is well with my soul.",
      "Though Satan should buffet, though trials should come,\nLet this blest assurance control:\nThat Christ hath regarded my helpless estate,\nAnd hath shed His own blood for my soul.",
      "My sin—O the bliss of this glorious thought!—\nMy sin, not in part, but the whole,\nIs nailed to His cross, and I bear it no more:\nPraise the Lord, praise the Lord, O my soul!",
      "And Lord, haste the day when my faith shall be sight,\nThe clouds be rolled back as a scroll;\nThe trump shall resound, and the Lord shall descend:\nEven so—it is well with my soul."
    ],
    youtubeId: "ZYrL9ea1XUg",
    firstLine: "When peace like a river attendeth my way",
    bio: "Horatio G. Spafford was a 19th-century American lawyer and Presbyterian church elder. 'It Is Well With My Soul' was written after a series of personal tragedies, expressing profound faith and peace in the midst of sorrow."
  },
  {
    id: 21,
    title: "Bringing In The Sheaves",
    author: "Knowles Shaw",
    category: "Harvest",
    verses: [
      "Sowing in the morning, sowing seeds of kindness,\nSowing in the noontide and the dewy eve;\nWaiting for the harvest, and the time of reaping,\nWe shall come rejoicing, bringing in the sheaves!\n \nBringing in the sheaves, bringing in the sheaves,\nWe shall come rejoicing, bringing in the sheaves;\nBringing in the sheaves, bringing in the sheaves,\nWe shall come rejoicing, bringing in the sheaves.",
      "Sowing in the sunshine, sowing in the shadows,\nFearing neither clouds nor winter's chilling breeze;\nBy and by the harvest, and the labor ended,\nWe shall come rejoicing, bringing in the sheaves!",
      "Going forth with weeping, sowing for the Master,\nThough the loss sustained our spirit often grieves;\nWhen our weeping's over, He will bid us welcome—\nWe shall come rejoicing, bringing in the sheaves!\n"
    ],
    youtubeId: "xYagTrjtpPE",
    firstLine: "Sowing in the morning, sowing seeds of kindness"
  },
  {
    id: 22,
    title: "Jesus Loves Me",
    author: "Anna B. Warner",
    category: "Children",
    verses: [
      "Jesus loves me! This I know,\nFor the Bible tells me so;\nLittle ones to Him belong\nThey are weak, but He is strong.\n \n Yes Jesus loves me!\nYes Jesus loves me!\nYes Jesus loves me!\nThe Bible tells me so.",
      "Jesus loves me! He who died,\nHeaven's gate to open wide;\nHe will wash away my sin,\nLet His little child come in.",
      "Jesus loves me! He will stay\nClose beside me all the way;\nThou hast bled and died for me,\nI will henceforth live for Thee."
    ],
    youtubeId: "AblWldpYfXg",
    firstLine: "Jesus loves me! This I know"
  },
  {
    id: 23,
    title: "The Solid Rock",
    author: "Edward Mote",
    category: "Faith",
    verses: [
      "My hope is built on nothing less\nThan Jesus' blood and righteousness;\nI dare not trust the sweetest frame,\nBut wholly lean on Jesus' name. \n \nOn Christ, the solid rock, I stand;\nAll other ground is sinking sand;\nAll other ground is sinking sand.",
      "When darkness veils His lovely face,\nI rest on His unchanging grace;\nIn every high and stormy gale,\nMy anchor holds within the veil.",
      "His oath, His covenant, His blood,\nSupport me in the whelming flood;\nWhen all around my soul gives way,\nHe then is all my hope and stay.",
      "When He shall come with trumpet sound,\nO may I then in Him be found,\nClothed in His righteousness alone,\nFaultless to stand before the throne."
    ],
    youtubeId: "4p4OrSEPGvI",
    firstLine: "My hope is built on nothing less"
  },
  {
    id: 24,
    title: "There's Power In The Blood",
    author: "Lewis E. Jones",
    category: "Salvation",
    verses: [
      "Would you be free from your burden of sin?\nThere's pow'r in the blood, pow'r in the blood;\nWould you o'er evil a victory win?\nThere's wonderful pow'r in the blood.\n \nThere's pow'r, pow'r, Wonder-working pow'r\nIn the blood of the Lamb;\nThere's pow'r, pow'r, Wonder-working pow'r\nIn the precious blood of the Lamb.",
      "Would you be free from your passion and pride?\nThere's pow'r in the blood, pow'r in the blood;\nCome for a cleansing to Calvary's tide—\nThere's wonderful pow'r in the blood.",
      "Would you be whiter, much whiter than snow?\nThere's pow'r in the blood, pow'r in the blood;\nSin-stains are lost in its life-giving flow—\nThere's wonderful pow'r in the blood.",
      "Would you do service for Jesus your King?\nThere's pow'r in the blood, pow'r in the blood;\nWould you live daily His praises to sing?\nThere's wonderful pow'r in the blood."
    ],
    youtubeId: "SeTE0W7K4sU",
    firstLine: "Would you be free from your burden of sin?"
  },
  {
    id: 25,
    title: "Count Your Blessings",
    author: "Johnson Oatman Jr.",
    category: "Gratitude",
    verses: [
      "When upon life's billows you are tempest-tossed,\nWhen you are discouraged, thinking all is lost,\nCount your many blessings, name them one by one,\nAnd it will surprise you what the Lord hath done.\n \nCount your blessings, name them one by one,\nCount your blessings, see what God hath done;\nCount your blessings, name them one by one,\nCount your many blessings, see what God hath done.",
      "Are you ever burdened with a load of care?\nDoes the cross seem heavy you are called to bear?\nCount your many blessings, every doubt will fly,\nAnd you will keep singing as the days go by.",
      "When you look at others with their lands and gold,\nThink that Christ has promised you His wealth untold;\nCount your many blessings—wealth can never buy\nYour reward in heaven, nor your home on high."
    ],
    youtubeId: "392T7WCz3kU",
    firstLine: "When upon life's billows you are tempest-tossed"
  },
  {
    id: 26,
    title: "Be With Me Lord",
    author: "Thomas O. Chisholm",
    category: "Guidance",
    verses: [
      "Be with me, Lord, I cannot live without Thee,\nI dare not try to take one step alone,\nI cannot bear the loads of life, unaided,\nI need Thy strength to lean myself upon.",
      "Be with me, Lord, and then if dangers threaten,\nIf storms of trial burst above my head,\nIf lashing seas leap ev'rywhere about me,\nThey cannot harm, or make my heart afraid.",
      "Be with me, Lord! No other gift or blessing\nThou couldst bestow could with this one compare—\nA constant sense of Thy abiding presence,\nWhere'er I am, to feel that Thou art near.",
      "Be with me, Lord, when loneliness o'ertakes me,\nWhen I must weep amid the fires of pain,\nAnd when shall come the hour of \"my departure\"\nFor \"worlds unknown,\" O Lord, be with me then."
    ],
    youtubeId: "vgPgQ_yHqG4",
    firstLine: "Be with me, Lord, I cannot live without Thee"
  },
  {
    id: 27,
    title: "When We All Get To Heaven",
    author: "Eliza E. Hewitt",
    category: "Heaven",
    verses: [
      "Sing the wondrous love of Jesus,\nSing His mercy and His grace;\nIn the mansions bright and blessed\nHe'll prepare for us a place.\n \nWhen we all get to heaven,\nWhat a day of rejoicing that will be!\nWhen we all see Jesus,\nWe'll sing and shout the victory!",
      "While we walk the pilgrim pathway,\nClouds will overspread the sky;\nBut when trav'ling days are over,\nNot a shadow, not a sigh.",
      "Let us then be true and faithful,\nTrusting, serving every day;\nJust one glimpse of Him in glory\nWill the toils of life repay."
    ],
    youtubeId: "uEexjjSkCV8",
    firstLine: "Sing the wondrous love of Jesus"
  },
  {
    id: 28,
    title: "Kneel At The Cross",
    author: "Charles E. Moody",
    category: "Invitation",
    verses: [
      "Kneel at the cross,\nChrist will meet you there,\nCome while He waits for you;\nList to His voice,\nLeave with Him your care,\nAnd begin life anew. \n \nKneel at the cross,\nLeave every care,\nKneel at the cross,\nJesus will meet you there.",
      "Kneel at the cross,\nThere is room for all\nWho would His glory share;\nBliss there awaits,\nHarm can ne'er befall\nThose who are anchored there.",
      "Kneel at the cross,\nGive your idols up,\nLook unto realms above;\nTurn not away\nTo life's sparkling cup—\nTrust only in His love."
    ],
    youtubeId: "F9g6VJwG2ks",
    firstLine: "Kneel at the cross"
  },
  {
    id: 29,
    title: "You Overcame",
    author: "Jon Egan",
    category: "Victory",
    verses: [
      "Seated above, enthroned in the Father's love\nDestined to die, poured out for all mankind\nGod's only Son\nPerfect and spotless One\nHe never sinned\nBut suffered as if He did\n \n All authority\nEvery victory is Yours\nSavior, worthy of honor and glory\nWorthy of all our praise\nYou overcame \n\nJesus, awesome in power forever\nAwesome and great is Your name\nYou overcame",
      "Power in hand\nSpeaking the Father's plan\nYou're sending us out\nLight in this broken land",
      "We will overcome\nBy the blood of the Lamb\nAnd the word of our testimony\nEveryone overcome",
    ],
    youtubeId: "rP_XATZQ8sU",
    firstLine: "Seated above, enthroned in the Father's love"
  },
  {
    id: 30,
    title: "You Are The Song",
    author: "Doug Moody",
    category: "Worship",
    verses: [
      "You are the words and the music.\nYou are the song that I sing.\nYou are the melody. You are the harmony.\nPraise to Your name, I will bring.\n\nYou are the Lord of lords.\nYou are the Mighty God.\nYou are the King of all kings.\nSo now I give back to You\nthe song that You gave to me.\nYou are the song that I sing.",
      "You are the words and the music.\nYou are the song that I sing.\nYou are the melody. You are the harmony.\nPraise to Your name, I will bring.\n\n"
    ],
    youtubeId: "9_szFKZOg48",
    firstLine: "You are the words and the music"
  },
  {
    id: 31,
    title: "He Gave Me A Song",
    author: "Lizzie De Armond",
    category: "Joy",
    verses: [
      "He took my burdens all away, up to a brighter day,\nHe gave me a song, a wonderful song;\nA wonderful song I now can sing, in my heart joy bells ring,\nHe gave me a song a wonderful song.\n\n\nHe gave me a song to sing about,\nHe lifted me from sin and doubt,\nOh, praise His name! He is my King.\nA wonderful song, He is to me.",
      "Brighter the way grows ev'ry day, walking the heav'nly way,\nHe gave me a song, a wonderful song;\nA wonderful song I now can sing, praises to Him, my King,\nHe gave me a song, a wonderful song.",
      "I am redeemed no more to die, never to say \"goodbye,\"\nHe gave me a song, a wonderful song;\nAnd some of these days in that fair land, sing with the chorus grand,\nHe gave me a song, a wonderful song."
    ],
    youtubeId: "hD6qKikbaL4",
    firstLine: "He took my burdens all away",
    bio: "Lizzie De Armond was a 20th-century American hymn writer known for her joyful and uplifting lyrics. 'He Gave Me A Song' reflects her deep faith and the joy of salvation, celebrating the song of praise given by God."
  },
  {
    id: 32,
    title: "When the Roll Is Called Up Yonder",
    author: "James M. Black",
    category: "Assurance",
    verses: [
      "When the trumpet of the Lord shall sound and time shall be no more,\nAnd the morning breaks, eternal, bright and fair;\nWhen the saved of earth shall gather over on the other shore,\nAnd the roll is called up yonder, I'll be there.\n\nWhen the roll is called up yonder,\nWhen the roll is called up yonder,\nWhen the roll is called up yonder,\nWhen the roll is called up yonder, I'll be there.",
      "On that bright and cloudless morning when the dead in Christ shall rise,\nAnd the glory of his resurrection share;\nWhen his chosen ones shall gather to their home beyond the skies,\nAnd the roll is called up yonder, I'll be there.",
      "Let us labor for the Master from the dawn till setting sun;\nLet us talk of all his wondrous love and care.\nThen when all of life is over and our work on earth is done,\nAnd the roll is called up yonder, I'll be there.\n\n"
    ],
    youtubeId: "9QfQoUtuV5w",
    firstLine: "When the trumpet of the Lord shall sound",
    bio: "James Milton Black (1856–1938) was an American hymnwriter and Methodist lay leader. He wrote this hymn in 1893 after a Sunday school student's absence prompted him to reflect on the heavenly roll call. The hymn became one of the most popular gospel songs of the 20th century."
  },
  {
    "id": 33,
    "title": "Lily of the Valley",
    "author": "Charles W. Fry",
    "category": "Assurance",
    "verses": [
      "I have found a friend in Jesus,\nHe's ev'rything to me,\nHe's the fairest of ten thousand to my soul;\nThe \"Lily of the Valley,\" in Him alone I see,\nall I need to cleanse and make me fully whole.\nIn sorrow He's my comfort, in trouble He's my stay,\nHe tells me ev'ry care on Him to roll;\nHe's the \"Lily of the Valley, the Bright and Morning Star,\"\nHe's the fairest of ten thousand to my soul.",
      "He all my grief has taken, and all my sorrows borne,\nin temptation He's my strong and mighty tow'r;\nI have all for Him forsaken, and all my idols torn\nfrom my heart, and now He keeps me by His pow'r.\nThough all the world forsake me, and Satan tempt me sore,\nthrough Jesus I shall safely reach the goal;\nHe's the \"Lily of the Valley, the Bright and Morning Star,\"\nHe's the fairest of ten thousand to my soul.",
      "He will never, never leave me, nor yet forsake me here,\nwhile I live by faith and do His blessed will;\nA wall of fire about me, I've nothing now to fear,\nwith His manna He my hungry soul shall fill.\nThen sweeping up to glory, to see His blessed face,\nwhere rivers of delight shall ever roll;\nHe's the \"Lily of the Valley, the Bright and Morning Star,\"\nHe's the fairest of ten thousand to my soul."
    ],
    "youtubeId": "PaLLWd-BBpo",
    "firstLine": "I have found a friend in Jesus",
    "bio": "Charles William Fry (1837-1882) was a British Salvation Army officer and musician. He composed this beloved hymn in 1881 while leading the Salvation Army band. The hymn beautifully expresses Christ's comfort and sufficiency using imagery from Song of Solomon 2:1."
  },
  {
    "id": 34,
    "title": "Great Is Thy Faithfulness",
    "author": "Thomas Chisholm",
    "category": "Faithfulness",
    "verses": [
      "Great is Thy faithfulness, O God my Father\nThere is no shadow of turning with Thee\nThou changest not, Thy compassions, they fail not\nAs Thou hast been, Thou forever will be\n\nGreat is Thy faithfulness!\nGreat is Thy faithfulness!\nMorning by morning new mercies I see\nAll I have needed Thy hand hath provided\nGreat is Thy faithfulness, Lord, unto me!",
      "Summer and winter and springtime and harvest\nSun, moon and stars in their courses above\nJoin with all nature in manifold witness\nTo Thy great faithfulness, mercy and love",
      "Pardon for sin and a peace that endureth\nThine own dear presence to cheer and to guide\nStrength for today and bright hope for tomorrow\nBlessings all mine, with ten thousand beside"
    ],
    "youtubeId": "Soh9WKhmZa4",
    "firstLine": "Great is Thy faithfulness, O God my Father",
    "bio": "Thomas Chisholm was a 20th-century American hymn writer. 'Great Is Thy Faithfulness' (1923) celebrates God's unchanging character, inspired by Lamentations 3:22-23. Though written during financial hardship, it expresses profound trust in God's provision."
  },
  {
    "id": 35,
    "title": "How Great Thou Art",
    "author": "Carl Boberg",
    "category": "Worship",
    "verses": [
      "O Lord my God, when I in awesome wonder\nConsider all the worlds Thy hands have made\nI see the stars, I hear the rolling thunder\nThy power throughout the universe displayed\n\nThen sings my soul, my Saviour God to Thee\nHow great Thou art, how great Thou art!",
      "When through the woods and forest glades I wander\nAnd hear the birds sing sweetly in the trees\nWhen I look down from lofty mountain grandeur\nAnd hear the brook and feel the gentle breeze",
      "And when I think that God, His Son not sparing\nSent Him to die, I scarce can take it in\nThat on the cross, my burden gladly bearing\nHe bled and died to take away my sin",
      "When Christ shall come with shout of acclamation\nAnd take me home, what joy shall fill my heart\nThen I shall bow in humble adoration\nAnd there proclaim, 'My God, how great Thou art!'"
    ],
    "youtubeId": "BllDD7zpHbg",
    "firstLine": "O Lord my God, when I in awesome wonder",
    "bio": "Carl Boberg was a Swedish poet and minister. Originally written in Swedish in 1885 as 'O Store Gud', this hymn gained global popularity through English translations. Its majestic lyrics reflect on creation, redemption, and Christ's return."
  },
  {
    "id": 36,
    "title": "Holy, Holy, Holy",
    "author": "Reginald Heber",
    "category": "worship",
    "verses": [
      "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee\nHoly, holy, holy! Merciful and mighty!\nGod in three Persons, blessed Trinity!",
      "Holy, holy, holy! All the saints adore Thee\nCasting down their golden crowns around the glassy sea\nCherubim and seraphim falling down before Thee\nWhich wert, and art, and evermore shalt be",
      "Holy, holy, holy! Though the darkness hide Thee\nThough the eye of sinful man Thy glory may not see\nOnly Thou art holy; there is none beside Thee\nPerfect in pow'r, in love, and purity",
      "Holy, holy, holy! Lord God Almighty!\nAll Thy works shall praise Thy name in earth and sky and sea\nHoly, holy, holy! Merciful and mighty!\nGod in three Persons, blessed Trinity!"
    ],
    "youtubeId": "lsQQRZaTerE",
    "firstLine": "Holy, holy, holy! Lord God Almighty!",
    "bio": "Reginald Heber was an early 19th-century English bishop. Written in 1826, this hymn is considered the standard English-language hymn on the Trinity. Its lyrics draw from Revelation 4:8-11 and emphasize God's supreme holiness."
  },
  {
    "id": 37,
    "title": "Be Thou My Vision",
    "author": "Ancient Irish, tr. Mary Byrne",
    "category": "Devotion",
    "verses": [
      "Be Thou my vision, O Lord of my heart\nNaught be all else to me, save that Thou art\nThou my best thought, by day or by night\nWaking or sleeping, Thy presence my light",
      "Be Thou my wisdom, and Thou my true word\nI ever with Thee and Thou with me, Lord\nThou my great Father, I Thy true son\nThou in me dwelling, and I with Thee one",
      "Riches I heed not, nor man's empty praise\nThou mine inheritance, now and always\nThou and Thou only, first in my heart\nHigh King of heaven, my treasure Thou art",
      "High King of heaven, my victory won\nMay I reach heaven's joys, O bright heav'n's Sun\nHeart of my own heart, whatever befall\nStill be my vision, O Ruler of all"
    ],
    "youtubeId": "N96n0L8ddM0",
    "firstLine": "Be Thou my vision, O Lord of my heart",
    "bio": "This 8th-century Irish hymn was translated by Mary Byrne in 1905 and versified by Eleanor Hull in 1912. Originally 'Rop tú mo Baile', it reflects ancient Celtic Christianity's emphasis on Christ's intimate presence in daily life."
  },
  {
    "id": 38,
    "title": "The Old Rugged Cross",
    "author": "George Bennard",
    "category": "Salvation",
    "verses": [
      "On a hill far away stood an old rugged cross\nThe emblem of suffering and shame\nAnd I love that old cross where the dearest and best\nFor a world of lost sinners was slain\n\nSo I'll cherish the old rugged cross\nTill my trophies at last I lay down\nI will cling to the old rugged cross\nAnd exchange it some day for a crown",
      "O that old rugged cross, so despised by the world\nHas a wondrous attraction for me\nFor the dear Lamb of God left His glory above\nTo bear it to dark Calvary",
      "In that old rugged cross, stained with blood so divine\nA wondrous beauty I see\nFor 'twas on that old cross Jesus suffered and died\nTo pardon and sanctify me",
      "To the old rugged cross I will ever be true\nIts shame and reproach gladly bear\nThen He'll call me some day to my home far away\nWhere His glory forever I'll share"
    ],
    "youtubeId": "i7v26yrlz5w",
    "firstLine": "On a hill far away stood an old rugged cross",
    "bio": "George Bennard was an American evangelist who wrote this hymn in 1913. Inspired by his struggles during ministry, it became one of the most beloved American gospel hymns, emphasizing the paradox of Christ's shameful cross bringing salvation."
  },
  {
    "id": 39,
    "title": "I Need Thee Every Hour",
    "author": "Annie Hawks",
    "category": "Dependence",
    "verses": [
      "I need Thee every hour, most gracious Lord\nNo tender voice like Thine can peace afford\n\nI need Thee, O I need Thee\nEvery hour I need Thee\nO bless me now, my Saviour\nI come to Thee",
      "I need Thee every hour, stay Thou nearby\nTemptations lose their pow'r when Thou art nigh",
      "I need Thee every hour, in joy or pain\nCome quickly and abide, or life is vain",
      "I need Thee every hour, teach me Thy will\nAnd Thy rich promises in me fulfill"
    ],
    "youtubeId": "K03qGVMdN18",
    "firstLine": "I need Thee every hour, most gracious Lord",
    "bio": "Annie Hawks was a 19th-century American homemaker and hymn writer. She composed this hymn in 1872 during routine housework when struck by her constant need for God's presence. The refrain was added by her pastor Robert Lowry."
  },
  {
    "id": 40,
    "title": "Come, Thou Fount of Every Blessing",
    "author": "Robert Robinson",
    "category": "Grace",
    "verses": [
      "Come, Thou Fount of every blessing\nTune my heart to sing Thy grace\nStreams of mercy, never ceasing\nCall for songs of loudest praise\nTeach me ever to adore Thee\nMay I still Thy goodness prove\nWhile the hope of endless glory\nFills my heart with joy and love",
      "Here I raise my Ebenezer\nHither by Thy help I've come\nAnd I hope, by Thy good pleasure\nSafely to arrive at home\nJesus sought me when a stranger\nWandering from the fold of God\nHe, to rescue me from danger\nInterposed His precious blood",
      "O to grace how great a debtor\nDaily I'm constrained to be\nLet Thy goodness, like a fetter\nBind my wandering heart to Thee\nProne to wander, Lord, I feel it\nProne to leave the God I love\nHere's my heart, O take and seal it\nSeal it for Thy courts above"
    ],
    "youtubeId": "llPoc5wAgYQ",
    "firstLine": "Come, Thou Fount of every blessing",
    "bio": "Robert Robinson was an 18th-century English dissident minister. Written at age 22 in 1758, this hymn reflects his conversion after hearing George Whitefield preach. The 'Ebenezer' reference comes from 1 Samuel 7:12, meaning 'stone of help'."
  },
  {
    "id": 41,
    "title": "Victory in Jesus",
    "author": "E.M. Bartlett",
    "category": "Victory",
    "verses": [
      "I heard an old, old story\nHow a Saviour came from glory\nHow He gave His life on Calvary\nTo save a wretch like me\nI heard about His groaning\nOf His precious blood's atoning\nThen I repented of my sins\nAnd won the victory\n\nO victory in Jesus\nMy Saviour forever\nHe sought me and bought me\nWith His redeeming blood\nHe loved me ere I knew Him\nAnd all my love is due Him\nHe plunged me to victory\nBeneath the cleansing flood",
      "I heard about His healing\nOf His cleansing pow'r revealing\nHow He made the lame to walk again\nAnd caused the blind to see\nAnd then I cried, 'Dear Jesus\nCome and heal my broken spirit'\nAnd somehow Jesus came and brought\nTo me the victory",
      "I heard about a mansion\nHe has built for me in glory\nAnd I heard about the streets of gold\nBeyond the crystal sea\nAbout the angels singing\nAnd the old redemption story\nAnd some sweet day I'll sing up there\nThe song of victory"
    ],
    "youtubeId": "R3wYarmL6xM",
    "firstLine": "I heard an old, old story",
    "bio": "E.M. Bartlett was a 20th-century American gospel songwriter. Written in 1939, this hymn became a Southern gospel standard. Its testimony-style lyrics describe conversion, healing, and the hope of heaven through Christ's victory."
  },
  {
    "id": 42,
    "title": "Because He Lives",
    "author": "Bill & Gloria Gaither",
    "category": "Assurance",
    "verses": [
      "God sent His son, they called Him Jesus\nHe came to love, heal and forgive\nHe lived and died to buy my pardon\nAn empty grave is there to prove my Saviour lives\n\nBecause He lives I can face tomorrow\nBecause He lives all fear is gone\nBecause I know He holds the future\nAnd life is worth the living just because He lives",
      "How sweet to hold a newborn baby\nAnd feel the pride and joy he gives\nBut greater still the calm assurance\nThis child can face uncertain days because He lives",
      "And then one day I'll cross the river\nI'll fight life's final war with pain\nAnd then as death gives way to victory\nI'll see the lights of glory and I'll know He reigns"
    ],
    "youtubeId": "adKzNr6G2os",
    "firstLine": "God sent His son, they called Him Jesus",
    "bio": "Bill and Gloria Gaither are influential 20th-century American gospel songwriters. They wrote this hymn in 1971 during personal struggles, including Gloria's difficult pregnancy. It emphasizes Christ's resurrection as the foundation for daily hope."
  },
  {
    "id": 43,
    "title": "Leaning on the Everlasting Arms",
    "author": "Elisha Hoffman",
    "category": "Security",
    "verses": [
      "What a fellowship, what a joy divine\nLeaning on the everlasting arms\nWhat a blessedness, what a peace is mine\nLeaning on the everlasting arms\n\nLeaning, leaning\nSafe and secure from all alarms\nLeaning, leaning\nLeaning on the everlasting arms",
      "O how sweet to walk in this pilgrim way\nLeaning on the everlasting arms\nO how bright the path grows from day to day\nLeaning on the everlasting arms",
      "What have I to dread, what have I to fear\nLeaning on the everlasting arms\nI have blessed peace with my Lord so near\nLeaning on the everlasting arms"
    ],
    "youtubeId": "lneA46frKT4",
    "firstLine": "What a fellowship, what a joy divine",
    "bio": "Elisha Hoffman was a 19th-century American hymn writer. Published in 1887 with music by Anthony Showalter, this hymn gained popularity in rural revivals. Its theme of divine security comes from Deuteronomy 33:27 - 'The eternal God is your refuge.'"
  },
  {
    "id": 44,
    "title": "Just As I Am",
    "author": "Charlotte Elliott",
    "category": "Invitation",
    "verses": [
      "Just as I am, without one plea\nBut that Thy blood was shed for me\nAnd that Thou bidst me come to Thee\nO Lamb of God, I come, I come",
      "Just as I am, and waiting not\nTo rid my soul of one dark blot\nTo Thee whose blood can cleanse each spot\nO Lamb of God, I come, I come",
      "Just as I am, though tossed about\nWith many a conflict, many a doubt\nFightings and fears within, without\nO Lamb of God, I come, I come",
      "Just as I am, Thou wilt receive\nWilt welcome, pardon, cleanse, relieve\nBecause Thy promise I believe\nO Lamb of God, I come, I come"
    ],
    "youtubeId": "XOEtLtpCXP8",
    "firstLine": "Just as I am, without one plea",
    "bio": "Charlotte Elliott was a 19th-century English poet. Written in 1835 during a spiritual crisis, this hymn became the signature invitation song for Billy Graham crusades. Its message of coming to Christ without preconditions has made it a global standard."
  },
  {
    "id": 45,
    "title": "Praise to the Lord, the Almighty",
    "author": "Joachim Neander",
    "category": "Praise",
    "verses": [
      "Praise to the Lord, the Almighty, the King of creation\nO my soul, praise Him, for He is thy health and salvation\nAll ye who hear, now to His temple draw near\nPraise Him in glad adoration",
      "Praise to the Lord, who o'er all things so wondrously reigneth\nShelters thee under His wings, yea, so gently sustaineth\nHast thou not seen how thy desires e'er have been\nGranted in what He ordaineth?",
      "Praise to the Lord, who doth prosper thy work and defend thee\nSurely His goodness and mercy here daily attend thee\nPonder anew what the Almighty can do\nIf with His love He befriend thee"
    ],
    "youtubeId": "JVwxHmXHp68",
    "firstLine": "Praise to the Lord, the Almighty, the King of creation",
    "bio": "Joachim Neander was a 17th-century German Reformed teacher. Written in 1680, this hymn adapts Psalms 103 and 150. Neander often wrote in a valley near Düsseldorf now named Neanderthal, where the famous fossils were later discovered."
  },
  {
    "id": 46,
    "title": "A Mighty Fortress Is Our God",
    "author": "Martin Luther",
    "category": "Reformation",
    "verses": [
      "A mighty fortress is our God\nA bulwark never failing\nOur helper He amid the flood\nOf mortal ills prevailing\nFor still our ancient foe\nDoth seek to work us woe\nHis craft and pow'r are great\nAnd armed with cruel hate\nOn earth is not his equal",
      "Did we in our own strength confide\nOur striving would be losing\nWere not the right man on our side\nThe man of God's own choosing\nDost ask who that may be?\nChrist Jesus, it is He\nLord Sabaoth His name\nFrom age to age the same\nAnd He must win the battle",
      "And though this world with devils filled\nShould threaten to undo us\nWe will not fear for God hath willed\nHis truth to triumph through us\nThe prince of darkness grim\nWe tremble not for him\nHis rage we can endure\nFor lo, his doom is sure\nOne little word shall fell him",
      "That word above all earthly pow'rs\nNo thanks to them abideth\nThe Spirit and the gifts are ours\nThrough Him who with us sideth\nLet goods and kindred go\nThis mortal life also\nThe body they may kill\nGod's truth abideth still\nHis kingdom is forever"
    ],
    "youtubeId": "rNXxkVuwxY0",
    "firstLine": "A mighty fortress is our God",
    "bio": "Martin Luther was the 16th-century German Reformer. Based on Psalm 46, this hymn (c. 1529) became the battle cry of the Protestant Reformation. Its powerful lyrics declare God's protection against spiritual and earthly enemies."
  },
  {
    "id": 47,
    "title": "Abide With Me",
    "author": "Henry Lyte",
    "category": "Comfort",
    "verses": [
      "Abide with me: fast falls the eventide\nThe darkness deepens; Lord, with me abide\nWhen other helpers fail and comforts flee\nHelp of the helpless, O abide with me",
      "Swift to its close ebbs out life's little day\nEarth's joys grow dim, its glories pass away\nChange and decay in all around I see\nO Thou who changest not, abide with me",
      "I need Thy presence every passing hour\nWhat but Thy grace can foil the tempter's pow'r?\nWho like Thyself my guide and stay can be?\nThrough cloud and sunshine, Lord, abide with me",
      "Hold Thou Thy cross before my closing eyes\nShine through the gloom and point me to the skies\nHeav'n's morning breaks and earth's vain shadows flee\nIn life, in death, O Lord, abide with me"
    ],
    "youtubeId": "1wS0o7HMJiQ",
    "firstLine": "Abide with me: fast falls the eventide",
    "bio": "Henry Lyte was a 19th-century Anglican priest. Written in 1847 as he lay dying of tuberculosis, this hymn has been sung at British royal events and global memorial services. Its evening imagery poignantly expresses trust in Christ's constant presence."
  },
  {
    "id": 48,
    "title": "Shall We Gather at the River",
    "author": "Robert Lowry",
    "category": "Hope",
    "verses": [
      "Shall we gather at the river\nWhere bright angel feet have trod\nWith its crystal tide forever\nFlowing by the throne of God?\n\nYes, we'll gather at the river\nThe beautiful, the beautiful river\nGather with the saints at the river\nThat flows by the throne of God",
      "On the margin of the river\nWashing up its silver spray\nWe will walk and worship ever\nAll the happy golden day",
      "Ere we reach the shining river\nLay we ev'ry burden down\nGrace our spirits will deliver\nAnd provide a robe and crown",
      "Soon we'll reach the shining river\nSoon our pilgrimage will cease\nSoon our happy hearts will quiver\nWith the melody of peace"
    ],
    "youtubeId": "vSQD0Bz8sWI",
    "firstLine": "Shall we gather at the river",
    "bio": "Robert Lowry was a 19th-century American Baptist minister. Inspired by Revelation 22:1, he wrote both words and music in 1864 during a heatwave. This hymn became particularly popular in camp meetings and outdoor revivals."
  },
  {
    "id": 49,
    "title": "In the Garden",
    "author": "C. Austin Miles",
    "category": "Hope",
    "verses": [
      "I come to the garden alone\nWhile the dew is still on the roses\nAnd the voice I hear falling on my ear\nThe Son of God discloses\n\nAnd He walks with me\nAnd He talks with me\nAnd He tells me I am His own\nAnd the joy we share as we tarry there\nNone other has ever known",
      "He speaks, and the sound of His voice\nIs so sweet the birds hush their singing\nAnd the melody that He gave to me\nWithin my heart is ringing",
      "I'd stay in the garden with Him\nThough the night around me be falling\nBut He bids me go; through the voice of woe\nHis voice to me is calling"
    ],
    "youtubeId": "i9LxvTZy5gE",
    "firstLine": "I come to the garden alone",
    "bio": "C. Austin Miles was a 20th-century American pharmacist and hymn writer. Claiming divine inspiration, he wrote this hymn in 1912 after meditating on Mary Magdalene's encounter with the risen Christ (John 20). Its personal devotion style made it hugely popular."
  },
  {
    "id": 50,
    "title": "Turn Your Eyes Upon Jesus",
    "author": "Helen Lemmel",
    "category": "Focus",
    "verses": [
      "O soul, are you weary and troubled?\nNo light in the darkness you see?\nThere's light for a look at the Saviour\nAnd life more abundant and free\n\nTurn your eyes upon Jesus\nLook full in His wonderful face\nAnd the things of earth will grow strangely dim\nIn the light of His glory and grace",
      "Through death into life everlasting\nHe passed, and we follow Him there\nO'er us sin no more hath dominion\nFor more than conqu'rors we are!",
      "His word shall not fail you—He promised\nBelieve Him, and all will be well\nThen go to a world that is dying\nHis perfect salvation to tell!"
    ],
    "youtubeId": "POyfmQ-hl24",
    "firstLine": "O soul, are you weary and troubled?",
    "bio": "Helen Lemmel was a 20th-century British-American hymn writer. Inspired by a tract titled 'Focused' in 1918, she wrote this hymn during a period of personal crisis and blindness. Its call to Christ-centered perspective remains profoundly relevant."
  },
  {
    "id": 51,
    "title": "You Are My All in All",
    "author": "Dennis Jernigan",
    "category": "Worship",
    "verses": [
      "You are my Strength\nWhen I am weak.\nYou are the Treasure\nThat I seek.\nYou are my All in all.\nSeeking You\nAs a precious Jewel,\nLord to give up\nI'd be a fool.\nYou are my All in all!\n\nJesus, Lamb of God,\nWorthy is Your Name.\nJesus, Lamb of God,\nWorthy is Your Name.",
      "Taking my cross,\nMy sin my shame,\nRising again\nI praise Your Name.\nYou are my All in all.\nWhen I fall down\nYou lift me up.\nWhen I am dry\nYou fill my cup.\nYou are my All in all.",
      "When the dark powers\nHad done their worst\nJesus brought victory\nO'er the curse.\nYou are my All in all.\nDeath could not\nHold the King of kings.\nNow to His heirs\nNew life He brings.\nYou are my All in all."
    ],
    "youtubeId": "_PLOadX6NqQ",
    "firstLine": "You are my Strength",
    "bio": "Dennis Jernigan was born in 1959 in Sapulpa, Oklahoma. A prolific contemporary Christian songwriter, he has written hundreds of songs including widely-sung worship songs like 'We Will Worship the Lamb of Glory', 'Thank You', and 'You Are My All in All'. Having been active since the early 1990s, Jernigan sees himself not as a songwriter but as a song 'receiver', and has dedicated much of his life to setting the spiritually captive free."
  }
];

const categories = {
  "Traditional": { icon: Book, color: "text-blue-600" },
  "Christmas": { icon: Gift, color: "text-red-600" },
  "Easter": { icon: Sunrise, color: "text-yellow-600" },
  "Worship": { icon: Cross, color: "text-purple-600" },
  "Praise": { icon: Music, color: "text-green-600" },
  "Assuarance": { icon: Shield, color: "text-orange-600" },
  "Faith": { icon: Heart, color: "text-pink-600" },
  "Hope": { icon: Star, color: "text-teal-600" },
  "Love": { icon: Heart, color: "text-red-500" },
  "Salvation": { icon: Flame, color: "text-yellow-500" }
};
const greetingsByTime = {
  morning: [
    {
      message: "Good morning! It's a beautiful day to sing.",
      verse: "“Let everything that has breath praise the Lord.” – Psalm 150:6"
    },
    {
      message: "Rise and shine! Let’s praise the Lord.",
      verse: "“This is the day that the Lord has made; let us rejoice and be glad in it.” – Psalm 118:24"
    },
    {
      message: "Start your day with a song of joy!",
      verse: "“I will sing of your strength in the morning.” – Psalm 59:16"
    },
    {
      message: "Good morning! His mercies are new every morning.",
      verse: "“Because of the Lord’s great love we are not consumed, for his compassions never fail.” – Lamentations 3:22–23"
    },
    {
      message: "It's always good to praise our God in music!",
      verse: "Praise the Lord! Praise God in His sanctuary; Praise Him in His mighty heavens! - Psalm 150:1"
    }
  ],
  afternoon: [
    {
      message: "Good afternoon! Let’s praise together.",
      verse: "“My heart, O God, is steadfast; I will sing and make music with all my soul.” – Psalm 108:1"
    },
    {
      message: "Keep the song in your heart this afternoon.",
      verse: "“Sing to the Lord, for he has done glorious things.” – Isaiah 12:5"
    },
    {
      message: "Lift up His name this sunny afternoon!",
      verse: "“I will bless the Lord at all times; his praise shall continually be in my mouth.” – Psalm 34:1"
    },
    {
      message: "Singing is a sweet offering — even in the midday.",
      verse: "“Let the message of Christ dwell among you richly… singing to God with gratitude.” – Colossians 3:16"
    }
  ],
  evening: [
    {
      message: "Good evening! Let's worship in song.",
      verse: "“From the rising of the sun to its setting, the name of the Lord is to be praised.” – Psalm 113:3"
    },
    {
      message: "Winding down with praises? Perfect timing.",
      verse: "“I will praise the Lord, who counsels me; even at night my heart instructs me.” – Psalm 16:7"
    },
    {
      message: "Let the melodies of faith calm your evening.",
      verse: "“On my bed I remember you; I think of you through the watches of the night.” – Psalm 63:6"
    },
    {
      message: "Evenings are made for reflection and praise.",
      verse: "“When I remember you upon my bed, and meditate on you in the watches of the night.” – Psalm 63:6"
    }
  ]
};
const backgroundImages = [
  '/backgrounds/img1.jpg',
  '/backgrounds/img2.jpg',
  '/backgrounds/img3.jpg',
  '/backgrounds/img4.jpg',
  '/backgrounds/img5.jpg',
  '/backgrounds/img6.jpg',
  '/backgrounds/img7.jpg',
  '/backgrounds/img8.jpg',
  '/backgrounds/img9.jpg',
  '/backgrounds/img10.jpg',
  '/backgrounds/img11.jpg',
];

const SacredHymnsApp = () => {
  const [showAppInfoModal, setShowAppInfoModal] = useState(false);
  const [showHymnModal, setShowHymnModal] = useState(false);
  const [showNumberGridModal, setShowNumberGridModal] = useState(false);
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
  const [playlists, setPlaylists] = useState([]);
  const [setShowPlaylistModal] = useState(false);
  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false);
  const [showHymnInfo] = useState(false);
  const playerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [welcomeVerse, setWelcomeVerse] = useState('');
  const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];


  useEffect(() => {
    const hour = new Date().getHours();
    let timePeriod = 'morning';

    if (hour >= 12 && hour < 18) timePeriod = 'afternoon';
    else if (hour >= 18 || hour < 5) timePeriod = 'evening';

    const messages = greetingsByTime[timePeriod];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const { message, verse } = messages[randomIndex];

    setWelcomeMessage(message);
    setWelcomeVerse(verse);
  }, []);

  useEffect(() => {
    console.log("Background images:", backgroundImages);
    console.log("Selected background:", randomBg);
  }, [randomBg]);

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

  const togglePlay = React.useCallback(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

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
  }, [selectedHymn, isPlaying, presentationMode, setShowPlaylistModal, togglePlay]);

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
    scrollPositionRef.current = window.scrollY;
    setSelectedHymn(hymn);
    setCurrentView('hymn');
    addToRecentlyViewed(hymn);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setShowYoutubePlayer(false);
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
              <button
                onClick={() => setShowNumberGridModal(true)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium shadow-sm transition duration-300 ease-in-out transform hover:scale-105 ${darkMode ? 'bg-gray-700 text-white hover:bg-blue-700' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <h1
                className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                SING UNTO THE LORD
              </h1>
              <button
                onClick={() => setShowAppInfoModal(true)}
                className={`p-3 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                <Info className="h-6 w-6" />
              </button>

            </div>
          </div>

          <div className="flex items-center space-x-2">
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

  const HymnCard = ({ hymn }) => {
    const CategoryIcon = categories[hymn.category]?.icon || Music;

    return (
      <div
        onClick={() => openHymn(hymn)}
        className={`p-6 rounded-lg border-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${darkMode
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
            {isOnline && hymn.youtubeId && (
              <div className="flex items-center space-x-1 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 16.5l6-4.5-6-4.5v9zm12-4.5c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
                </svg>
                <span className="text-xs">Video Available</span>
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
                  {showHymnInfo && (
                    <div className={`mt-4 p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-blue-50 text-gray-900'}`}>
                      <h3 className="text-xl font-bold mb-2">About This Hymn</h3>
                      <p><strong>Title:</strong> {hymn.title}</p>
                      <p><strong>Author:</strong> {hymn.author}</p>
                      <p><strong>Category:</strong> {hymn.category}</p>
                      <p><strong>First Line:</strong> {hymn.firstLine}</p>
                      {/* Optionally more info */}
                    </div>
                  )}

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
                  onClick={() => setShowHymnModal(true)}
                  className={`p-3 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                >
                  <Info className="h-6 w-6" />
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
                    ▶ Show Video
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
            <div className="space-y-8 pb-16">
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
            onClick={() => {
              setCurrentView('home');
              setTimeout(() => {
                window.scrollTo(0, scrollPositionRef.current);
              }, 0);
            }}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
          >
            Back to Home
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
        <div className="text-center mt-6 px-4">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {welcomeMessage}
          </h2>
          <p className={`text-sm font-italic ${darkMode ? 'text-blue' : 'text-blue-900'}`}>
            {welcomeVerse}
          </p>
        </div>
      </div>

      <SearchBar />
      <CategoryFilter />

      <div className="mb-8">
        <button
          onClick={() => setCurrentView('recent')}
          className={`flex items-center space-x-2 text-blue-600 hover:underline`}
        >
          <Clock className="h-5 w-5" />
          <span>Recently Viewed Hymns</span>
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
  console.log("Selected background:", randomBg);
  <img src={randomBg} alt="Test" style={{ width: '100px', height: 'auto' }} />

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}${randomBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >

      {/* Foreground App Content */}
      <div className={`relative z-10 min-h-screen ${darkMode ? 'bg-gray-900/70' : 'bg-gray-50/70'}`}>

        <NavigationHeader />

        {currentView === 'home' && <HomeView />}
        {currentView === 'hymn' && <HymnView />}
        {currentView === 'recent' && <RecentlyViewedView />}
        {currentView === 'favorites' && <FavoriteHymnsView />}

        {showHymnModal && selectedHymn && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`w-full max-w-lg mx-auto p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out scale-100 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">About "{selectedHymn.title}"</h2>
                <button onClick={() => setShowHymnModal(false)} className={`p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-110 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                >
                  ✕
                </button>
              </div>

              <p><strong>Author:</strong> {selectedHymn.author}</p>
              <p><strong>Category:</strong> {selectedHymn.category}</p>
              <p><strong>First Line:</strong> {selectedHymn.firstLine}</p>

              {selectedHymn.bio && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-1">Composer Biography</h3>
                  <p className="text-sm leading-relaxed">{selectedHymn.bio}</p>
                </div>
              )}

              <div className="mt-6 text-right">
                <button
                  onClick={() => setShowHymnModal(false)}
                  className={`p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-110 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <footer
          className={`fixed bottom-0 inset-x-0 z-50 text-center text-xs font-bold py-2 border-t
    ${darkMode
              ? 'bg-gray-900 text-gray-200 border-gray-700'
              : 'bg-white text-black border-gray-200'}`}
        >
          © 2025 UNIMA Church of Christ. All rights reserved.
        </footer>

        {showNumberGridModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className={`w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg p-6 shadow-xl transform transition duration-300 ease-in-out scale-100 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>

              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Quick Access Hymns</h2>
                <button
                  onClick={() => setShowNumberGridModal(false)}
                  className="text-2xl font-bold px-2 hover:text-red-500"
                >
                  ✕
                </button>
              </div>


              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {hymnsDatabase.map(hymn => (
                  <button
                    key={hymn.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowNumberGridModal(false); // Close modal first
                      setTimeout(() => {
                        openHymn(hymn);
                      }, 100); // Small delay to ensure modal closes before navigation
                    }}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${darkMode
                      ? 'bg-gray-800 border-gray-600 hover:border-blue-500'
                      : 'bg-white border-gray-200 hover:border-blue-500'
                      }`}
                  >
                    <div className="text-lg font-bold text-blue-600">{hymn.id}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {showAppInfoModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className={`w-full max-w-lg mx-auto h-[90vh] p-6 rounded-lg shadow-xl overflow-y-auto transform transition duration-300 ease-in-out scale-100 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>

              {/* Close Button */}
              <div className="flex justify-between items-center mb-4 sticky top-0 bg-inherit z-10">
                <h2 className="text-2xl font-bold">About This App</h2>
                <button
                  onClick={() => setShowAppInfoModal(false)}
                  className="text-2xl font-bold px-2 hover:text-red-500"
                >
                  ✕
                </button>
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <img
                  src="logo192.png"
                  alt="App Icon"
                  className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover"
                />
              </div>

              {/* Info */}
              <div className="space-y-4 text-base leading-relaxed text-center">
                <p>
                  <strong>SING UNTO THE LORD</strong> is a modern hymnbook app designed for seamless worship and quick access to timeless hymns.
                </p>
                <p>
                  Developed by <strong>Josophat Makawa</strong> for the <strong>University of Malawi Church of Christ</strong> and Christian worshipers worldwide.
                </p>
                <p>
                  <strong>Version:</strong> 1.6.5<br />
                  <strong>Built With:</strong> React + TailwindCSS
                </p>
                <p className="font-semibold">For Feedback, Suggestions and Support, contact the developer:</p>

                {/* Social Links with Icons */}
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-blue-500">
                  <a href="https://web.facebook.com/josophat.chifundo.makawa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                    <FontAwesomeIcon icon={faFacebook} />

                  </a>
                  <a href="https://www.instagram.com/kiziojosh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                    <FontAwesomeIcon icon={faInstagram} />

                  </a>
                  <a href="https://www.linkedin.com/in/josophat-makawa-abaa21366/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                    <FontAwesomeIcon icon={faLinkedin} />

                  </a>
                  <a href="https://github.com/KizioTech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                    <FontAwesomeIcon icon={faGithub} />

                  </a>
                  <a
                    href="https://wa.me/265999978828"  // Replace with your actual WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>

                  <a href="https://t.me/KizioJosh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                    <FontAwesomeIcon icon={faTelegram} />

                  </a>
                </div>

              </div>

              {/* Close */}
              <div className="mt-6 text-right">
                <button
                  onClick={() => setShowAppInfoModal(false)}
                  className={`px-4 py-2 rounded ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}


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
    </div>
  );
};

export default SacredHymnsApp;