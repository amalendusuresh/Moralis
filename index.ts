/* import moralis */
const Moralis = require("moralis/node");

/* Moralis init code */
const serverUrl = "https://tepe2pbaqp6t.usemoralis.com:2053/server";
const appId = "FaKZt8bhykxSekAPMEzZ1VIkwOZnVyGLqkslT8eN";
const masterKey = "ET0mJMkPfpauMFLkMsamznwVTmhgiD6fNmBtXi4Q";

const SaveData = async () => {
    await Moralis.start({ serverUrl, appId, masterKey });
  
    const Monster = Moralis.Object.extend("Monster");
    const monster = new Monster();
  
    monster.set("strength", 1024);
    monster.set("ownerName", "Aegon");
    monster.set("canFly", true);
  
    await monster.save();
  };
  const LiveQuery = async () => {
    const Monster = Moralis.Object.extend("Monster");
    const query = new Moralis.Query(Monster);
  
    let subscription = await query.subscribe();
    console.log(subscription);
  };
  
  SaveData();
  LiveQuery();
