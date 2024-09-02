/*   STEP 1   */
export const leagueID = "1124848884590313472"; // your league ID
export const leagueName = "Tenuos Connections 2 Trumbull"; // your league name
export const dues = 25; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "593213172454834176",
      "name": "Evan (EvSams) Samson",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Mass", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > OB",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Benny Hazen", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3321, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Loves a good Dolphin",
      "tradingScale": 6, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "593214399179702272",
      "name": "Chris (OB) O'Brien",
      //"tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Connecticut", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > OG",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //"fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Corn", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8146, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Draft hurt guys that have boom potential",
      "tradingScale": 7, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "995054185085214720",
      "name": "Danny (Water) McCabe",
      //"tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > OG",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //"fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Zachary NYWaldek", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5870, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Maintain highest manager lineup IQ",
      "tradingScale": 3, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "999162513486929920",
      "name": "Justin (Wally-Commish) Waldek",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Mass", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > OG",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Coolspeedy", // Can be anything (usually your rival's name)
        link: 8, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 827, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Cowboys will carry",
      "tradingScale": 7, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1002693013296111616",
      "name": "Michael (Kenloose) Kenler",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > OG",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "EvSams", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 96, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Hopes to overcome a weak draft",
      "tradingScale": 6, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1002693383942549504",
      "name": "Greg (Champ) Waldek",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > Commish - blood",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Brother Zach", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 96, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Hopes to overcome a weak draft",
      "tradingScale": 6, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1003057437013827584",
      "name": "Zachary NYWaldek",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > Commish - blood",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cousin Commish", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6804, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Drafts players from train... his guys are well trained",
      "tradingScale": 4, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1002696099536293888",
      "name": "Anuj (Coolspeedy) Sisodiya",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > OG",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Sanj", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 719, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Uses paid for cheat sheets",
      "tradingScale": 8, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1002734822353133568",
      "name": "Benny (Breecy) Hazen",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Mass", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > OG",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kenloose", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1373, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Absolute terror of a FF player",
      "tradingScale": 10, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1004032763172913152",
      "name": "Sanjay (OVO) Mukherjee",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > Kenloose",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Corn", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 19, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Relying on old backs this year",
      "tradingScale": 7, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1004225739438305280",
      "name": "Aaron (Corn) Corn",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > Kenloose",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Commish", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 268, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Thrives on hate, only motivates him more",
      "tradingScale": 6, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "999162513486929920",
      "name": "Patty (Pilot) Carroll",
     // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
      "bio": "Tenuos Connection 2 Trumbull > OG",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "OB", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5089, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Owns highest scoring week and lowest scoring week (trying to find middle ground)",
      "tradingScale": 5, // 1 - 10
      //"preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
