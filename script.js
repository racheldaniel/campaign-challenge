const elizabethSanger = {
  district: "Tennessee's 5th Congressional District",
  platforms: [
    {
      issue: "taxes",
      statement: "No more taxes, no more libraries!"
    },
    {
      issue: "jobs",
      statement: "Who needs em?"
    },
    {
      issue: "infrastructure",
      statement: "Dirt roads are the future."
    },
    {
      issue: "healthcare",
      statement: "Rub some windex on that shit."
    },
    {
      issue: "crime and enforcement",
      statement: "Vigilante justice will prevail!"
    }
  ],
  donations: "http//www.bribelizsanger.com",
  events: [
    {
      date: "Nov 1, 2018",
      name: "Picnic for the Poor",
      location: "Centennial Park-- 2500 West End Ave, Nashville, TN 37203",
      description: "Bring food for the local homeless population and each other! Please note-- no government funds will be allocated for this event.",
    },
    {
      date: "Nov 15th, 2018",
      name: "Mom's Against Badness",
      location: "Bridgestone Arena --501 Broadway, Nashville, TN 37203",
      description: "Most people are bad. Mom's are good. Let's erase the bad.",
    },
    {
      date: "Dec 3rd, 2018",
      name: "Pay Me to Talk",
      location: "Dragon Park --2400 Blakemore Ave, Nashville, TN 37212",
      description: "If you come and donate to my campaign, I'll talk about stuff.",
    },
    {
      date: "Dec 12th, 2018",
      name: "Am I Famous Yet?",
      location: "Elizabeth's Front Lawn",
      description: "Well...am I?",
    }
  ],
  volunteers: [
    {
      name: "Louise",
      address: "Above the Restaurant",
      email: "nunya@gmail.com",
      phone: "555-1000",
      availability: {
        monday: [""],
        tuesday: [""],
        wednesday: [""],
        thursday: [""],
        friday: [""],
        saturday: [""],
        sunday: [""]
      },
      activities: ["Taking donations"],
    },

    {
      name: "Gene",
      address: "Above the Restaurant",
      email: "gene@penguins.org",
      phone: "555-1000",
      availability: {
        monday: ["Morning", "Afternoon", "Evening"],
        tuesday: ["Morning", "Afternoon", "Evening"],
        wednesday: ["Morning", "Afternoon", "Evening"],
        thursday: ["Morning", "Afternoon", "Evening"],
        friday: ["Morning", "Afternoon", "Evening"],
        saturday: ["Morning", "Afternoon", "Evening"],
        sunday: ["Morning", "Afternoon", "Evening"]
      },
      activities: ["Making phone calls", "holding babies", "playing intro music"],
    }
  ],
  biography: {
    DOB: "03-27-1956",
    birthPlace: "International Space Station",
    family: {
      mother: "Lisa Sanger",
      father: "Jabba the Hut",
      brother: "Kenny",
      children: ["Little Lizzie", "Bo"],
      pets: ["Lizzzard", "Fluffy"]
    }
  },
  images: {
    headshot:"" ,
    family:"",
    constituents:""
  }
  mission: "I like being in charge.",
  url: "httppickmelizsangeriwanttobeincarge.com",
  


}

function addIssue(issueName, statementString) {
  let newObject = {
    issue: issueName,
    statement: statementString
  }
  let newIssue = elizabethSanger.platforms.push(newObject)
  return newIssue
}

addIssue("butts", "Liz likes butts")
console.table(elizabethSanger.platforms)