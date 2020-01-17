
const { Trivia } = require('./models');

const main = async () => {
  await Trivia.destroy({
    where: {},
  });

  await Trivia.bulkCreate([
    {
      answer: "a fox",
      option1: "a dog",
      option2: "racoon ",
      option3: "skunk",
      question: " A Sly creature sought by sportsmen riding to hounds",
      value: 100,
      category_name: "animals",
      approved: true

    },
    {
      answer: "a camel",
      option1: "horse",
      option2: " Addax antelope",
      option3: "Iguana",
      question: "The ship of the desert",
      value: 200,
      category_name: "animals",
      approved: true
    },
    {

      answer: "turkeys",
      option1: "chickens",
      option2: "owls",
      option3: " parrots",
      question: "The children are poults, the mothers, hens & the fathers,toms",
      value: 300,
      category_name: "animals",
      approved: true
    },
    {

      answer: "falconry",
      option1: "bo-taoshi",
      option2: "kaninhop ",
      option3: "buzkashi",
      question: "Name of the sport of hunting birds with other birds",
      value: 400,
      category_name: "animals",
      approved: true

    },
    {
      answer: "the Portuguese man-of-war",
      question: "Floating sea creature named by sailors for the Iberian fighting ship it resembles",
      option1: "",
      option2: " ",
      option3: "",
      value: 500,
      category_name: "animals",
      approved: true

    },
    {
      answer: "dogs",
      option1: "cats",
      option2: "hamsters",
      option3: "rabbits",
      question: "Scooby-Doo, Goofy & Pluto are cartoon versions",
      value: 100,
      category_name: "animals",
      approved: true
    },
    {

      answer: "a yak",
      option1: "wolf",
      option2: "mastiff",
      option3: " horse",
      question: "Tibetan ox used to carry travelers and mail",
      value: 500,
      category_name: "animals",
      approved: true

    },
    {
      answer: "rats",
      option1: "cockaroach",
      option2: "squierrel",
      option3: "chipmunk",
      question: "These rodents first got to America by stowing away on ships",
      value: 100,
      category_name: "animals",
      approved: true
    },
    {
      answer: "the trunk",
      option1: "legs",
      option2: "ears",
      option3: "",
      question: "There are about 40,000 muscles & tendons in this part of an elephant's body",
      value: 200,
      category_name: "animals",
      approved: true
    },
    {
      id: 741,
      answer: "the hippopotamus",
      option1: "",
      option2: " ",
      option3: "",
      question: "Close relative of the pig, though its name means 'river horse'",
      value: 400,
      category_name: "animals",
      approved: true
    },
    {
      answer: "a mule",
      option1: "",
      option2: " ",
      option3: "",
      question: "If this species of hybrid's parents were reversed, you'd get a hinny",
      value: 500,
      category_name: "animals",
      approved: true
    },
    {
      answer: "a weasel",
      option1: "",
      option2: " ",
      option3: "",
      question: "When husbands 'pop' for an ermine coat, they're actually buying this fur",
      value: 300,
      category_name: "animals",
      approved: true
    },
    {
      answer: "civet",
      option1: "",
      option2: " ",
      option3: "",
      question: "Cat-like animal raised for the secretions it produces which are used to make perfumes",
      value: 400,
      category_name: "animals",
      approved: true
    },
    {
      answer: "man",
      option1: "",
      option2: " ",
      option3: "",
      question: "According to New York's Bronx Zoo, it's 'the most dangerous animal in the world'",
      value: 500,
      category_name: "animals",
      approved: true
    },
    {
      answer: "their horns (or antlers)",
      option1: "",
      option2: " ",
      option3: "",
      question: "New Zealanders used to raise red deer for these, which were ground & used as aphrodisiacs",
      value: 500,
      category_name: "animals",
      approved: true

    },
    {
      id: 3691,
      answer: "flies",
      option1: "",
      option2: " ",
      option3: "",
      question: "Varieties of these insects include bee, soldier, flower, blow & fruit",
      value: 500,
      category_name: "animals",
      approved: true
    },
    {
      id: 4260,
      answer: "the sponge",
      option1: "",
      option2: " ",
      option3: "",
      question: "Types of this aquatic creature include chimney, sheep's wool, and common bath",
      value: 500,
      category_name: "animals",
      approved: true
    },
    {
      answer: "26",
      option1: "",
      option2: " ",
      option3: "",
      question: "Number of different basic shapes in a box of Post Alpha-Bits",
      value: 200,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "6",
      option1: "",
      option2: " ",
      option3: "",
      question: "Whole number equidistant from 5 & 7",
      value: 400,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "President Hoover",
      option1: "",
      option2: " ",
      option3: "",
      question: "[The way Alex and the audience reacted seemed to indicate this was the debut of this category.] President the Hoover Dam is named after",
      value: 100,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "Big Country",
      option1: "",
      option2: " ",
      option3: "",
      question: "This group's 1st big U.S. hit was 'In a Big Country'",
      value: 400,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "Seal",
      option1: "",
      option2: " ",
      option3: "",
      question: "Word emblazoned in large letters in the center of the seal of Huntsville, Alabama",
      value: 500,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "De Smet",
      option1: "",
      option2: " ",
      option3: "",
      question: "Town in S.D. that put up 9' statue of Fr. Pierre Jean de Smet, who died in 1873 & never visited the town",
      value: 400,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "K2",
      option1: "",
      option2: " ",
      option3: "",
      question: "It initially got its name from being the second Karakoram peak to be measured",
      value: 500,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "the Encyclopedia Americana",
      option1: "",
      option2: " ",
      option3: "",
      question: "Begun in 1829, it was the 1st encyclopedia published in America",
      value: 500,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "Watergate",
      option1: "",
      option2: " ",
      option3: "",
      question: "Name of the hotel & office complex where the Watergate break-in occurred",
      value: 200,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "Key West",
      option1: "",
      option2: " ",
      option3: "",
      question: "2 Civil War forts were built on this western island of the Florida Keys",
      value: 400,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "Marshall Field",
      option1: "",
      option2: " ",
      option3: "",
      question: "In June 1997 this Chicago department store marshalled its forces for a 'Field Days Sale'",
      value: 500,
      category: "stupid_answers",
      approved: true
    },
    {
      answer: "the Caribbean",
      option1: "",
      option2: " ",
      option3: "",
      question: "Anguilla & Antigua are in this sea",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "French",
      option1: "",
      option2: " ",
      option3: "",
      question: "Classes at the University of Quebec are taught in this language, Quebec's official one",
      value: 100,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Spain",
      option1: "",
      option2: " ",
      option3: "",
      question: "It's believed that Cadiz, a city in this country, was once Gadir, a Phoenician settlement",
      value: 300,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Brazil",
      option1: "",
      option2: " ",
      option3: "",
      question: "Most gem-quality topaz is mined in this South American country",
      value: 400,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Lanai",
      option1: "",
      option2: " ",
      option3: "",
      question: "It's Hawaii's 'Pineapple Island' though it could be called the 'Patio Island'",
      value: 500,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Malta",
      option1: "",
      option2: " ",
      option3: "",
      question: "The national anthem of this small country is Innu Malti",
      value: 100,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Great Britain",
      option1: "",
      option2: " ",
      option3: "",
      question: "The cross of St. George on Manitoba's flag symbolizes its ties with this country",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Portugal",
      option1: "",
      option2: " ",
      option3: "",
      question: "Prince Henry the Navigator's tomb is in the church of Santa Maria da Vitoria in Batalha in this country",
      value: 300,
      category: "Around the World",
      approved: true

    },
    {
      answer: "the Aegean",
      option1: "",
      option2: " ",
      option3: "",
      question: "The ballet Apollo is set on Delos, an island in this sea",
      value: 400,
      category: "Around the World",
      approved: true

    },
    {
      answer: "France",
      option1: "",
      option2: " ",
      option3: "",
      question: "The Bayeux Tapestry is on display in this country's Museum of Queen Matilda",
      value: 500,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Lace",
      option1: "",
      option2: " ",
      option3: "",
      question: "Nyandete, whose name is Guarani for spider web, is a type of this delicate open-work fabric made in Paraguay",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "London",
      option1: "",
      option2: " ",
      option3: "",
      question: "You'll find the original Hard Rock Cafe on Old Park Lane in this capital city",
      value: 300,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Danish",
      option1: "",
      option2: " ",
      option3: "",
      question: "Greenland has two official languages: Greenlandic & this",
      value: 400,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Malta",
      option1: "",
      option2: " ",
      option3: "",
      question: "Island country whose capital, Valletta, is named for a grandmaster who led the knights in 1565",
      value: null,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Tokyo",
      option1: "Paris",
      option2: "Orlando",
      option3: "Los Angelos",
      question: "Disney's Fantillusion!, a spectacular musical parade, debuted in this city's Disneyland in 1995",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "National anthem",
      option1: "",
      option2: " ",
      option3: "",
      question: "Bulgaria's is Mila Rodino, which means  Dear Homeland",
      value: 300,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Texas",
      option1: "Florida",
      option2: "California",
      option3: "Alaska",
      question: "Peru is almost twice as big as this second largest U.S. state",
      value: 400,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Sydney",
      option1: "",
      option2: " ",
      option3: "",
      question: "Noted for its aboriginal art, the Art Gallery of New South Wales is in this capital of New South Wales",
      value: 200,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Nairobi",
      option1: "",
      option2: " ",
      option3: "",
      question: "The Kenyatta Conference Centre is one of this capital city's architectural landmarks",
      value: 500,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Athens",
      option1: "",
      option2: " ",
      option3: "",
      question: "You'll find Greece's Parliament building on Syntagma Square in this capital",
      value: 100,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Transvaal",
      option1: "",
      option2: " ",
      option3: "",
      question: "The name of this South African province means 'across the Vaal' -- the Vaal River, that is",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Spain",
      option1: "",
      option2: " ",
      option3: "",
      question: "This country's Cathedral of Leon is named for its soaring spires & stained glass windows",
      value: 300,
      category: "Around the World",
      approved: true

    },
    {
      answer: "New Zealand",
      option1: "",
      option2: " ",
      option3: "",
      question: "The Canterbury Plains, this country's largest flatland area, lies on South Island",
      value: 400,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Cayman Islands Dollar",
      option1: "",
      option2: " ",
      option3: "",
      question: "This unit of currency of the Cayman Islands is divided into 100 cents; makes sense to us",
      value: 500,
      category: "Around the World",
      approved: true

    },
    {
      id: 121,
      answer: "6",
      option1: "",
      option2: " ",
      option3: "",
      question: "A typical snowflake has this many sides",
      value: 100,
      category: "science",
      approved: true
    },
    {
      id: 127,
      answer: "iron",
      option1: "",
      option2: " ",
      option3: "",
      question: "Common element whose refined forms include pig, cast or wrought",
      value: 200,
      category: "science",
      approved: true
    },
    {
      id: 133,
      answer: "time",
      option1: "",
      option2: " ",
      option3: "",
      question: "After length, width & depth, the 4th dimension",
      value: 300,
      category: "science",
      approved: true
    },
    {
      id: 139,
      answer: "a parasite",
      option1: "",
      option2: " ",
      option3: "",
      question: "Type of organism that lives off of another, contributing nothing",
      value: 400,
      category: "science",
      approved: true
    },
    {
      id: 301,
      answer: "an echo",
      option1: "",
      option2: " ",
      option3: "",
      question: "A sound's repetition by reflection",
      value: 100,
      category: "science",
      approved: true
    },
    {
      id: 307,
      answer: "Charles Darwin",
      option1: "",
      option2: " ",
      option3: "",
      question: "He originated 'The Origin of Species'",
      value: 200,
      category: "science",
      approved: true
    },
    {
      id: 319,
      answer: "an electron",
      option1: "",
      option2: " ",
      option3: "",
      question: "Negative particle that orbits an atom's nucleus",
      value: 400,
      category: "science",
      approved: true
    },
    {
      id: 325,
      answer: "cells",
      option1: "",
      option2: " ",
      option3: "",
      question: "Cytology is the study of these biological building blocks",
      value: 500,
      category: "science",
      approved: true
    },
    {
      id: 1090,
      answer: "man",
      option1: "",
      option2: " ",
      option3: "",
      question: "The only animal that has walked on the moon",
      value: 100,
      category: "science",
      approved: true
    },
    {
      id: 1096,
      answer: "Drake",
      option1: "",
      option2: " ",
      option3: "",
      question: "Not just 'Ludwig von; but any male duck",
      value: 200,
      category: "science",
      approved: true
    },
    {
      id: 1102,
      answer: "nursing",
      option1: "",
      option2: " ",
      option3: "",
      question: "Research shows a mother eating a candy bar before doing this helps a baby fall asleep quicker",
      value: 300,
      category: "science",
      approved: true
    },
    {
      id: 1108,
      answer: "sleet",
      option1: "",
      option2: " ",
      option3: "",
      question: "Partly frozen rain or rain mixed with snow",
      value: 400,
      category: "science",
      approved: true
    },
    {
      id: 1114,
      answer: "North America",
      option1: "",
      option2: " ",
      option3: "",
      question: "If our solar system fit into a cup, our galaxy would be the size of this 3rd largest continent",
      value: 500,
      category: "science",
      approved: true
    },
    {
      id: 1750,
      answer: "a cell",
      option1: "",
      option2: " ",
      option3: "",
      question: "Most living organisms have millions, but a prisoner only has one",
      value: 100,
      category: "science",
      approved: true
    },
    {
      id: 1756,
      answer: "atoms",
      option1: "",
      option2: " ",
      option3: "",
      question: "A 5th C. B.C. Greek philosopher was 1st to theorize that all matter is made of these",
      value: 200,
      category: "science",
      approved: true
    },

    {
      id: 1768,
      answer: "the equator",
      option1: "",
      option2: " ",
      option3: "",
      question: "Days & nights are always 12 hours long there",
      value: 400,
      category: "science",
      approved: true
    },
    {
      id: 1774,
      answer: "measuremen",
      option1: "",
      option2: " ",
      option3: "",
      question: "If you're studying mensuration, you're studying this",
      value: 500,
      category: "science",
      approved: true
    },
    {
      id: 2650,
      answer: "light",
      option1: "",
      option2: " ",
      option3: "",
      question: "Bioluminescence is the emission of this from living organisms",
      value: 100,
      category: "science",
      approved: true
    },
    {
      id: 751,
      answer: "a pig",
      option1: "",
      option2: " ",
      option3: "",
      question: "From 1905-7, Austria & Serbia fought an economic 'war' over tariffs, such as over this porcine animal",
      value: 100,
      category: "history",
      approved: true
    },
    {
      id: 757,
      answer: "the Normans",
      option1: "",
      option2: " ",
      option3: "",
      question: "The western jury system is thought to have been brought to England by these peoples in 1066",
      value: 200,
      category: "history",
      approved: true
    },
    {
      id: 763,
      answer: "the 16th",
      option1: "",
      option2: " ",
      option3: "",
      question: "Century known as the 'high Renaissance'",
      value: 300,
      category: "history",
      approved: true
    },
    {
      id: 769,
      answer: "Japan",
      option1: "",
      option2: " ",
      option3: "",
      question: "World power whose emperor gave up claims to divinity before it adopted a new constitution in 1947",
      value: 400,
      category: "history",
      approved: true
    },
    {
      id: 775,
      answer: "the Eisenhower Doctrine",
      option1: "",
      option2: " ",
      option3: "",
      question: "1957 U.S. policy allowing the president to use armed force in the Middle East",
      value: 500,
      category: "history",
      approved: true
    },
    {
      id: 2437,
      answer: "Jerusalem",
      option1: "",
      option2: " ",
      option3: "",
      question: "In July 1099, crusaders stormed this holy city, killing its Muslim & Jewish inhabitants",
      value: 100,
      category: "history",
      approved: true
    },
    {
      id: 2443,
      answer: "Rome",
      option1: "",
      option2: " ",
      option3: "",
      question: "Legend says an Etruscan family, the Tarquins, ruled this 'Eternal City' from 616 to 510 B.C.",
      value: 200,
      category: "history",
      approved: true
    },
    {
      id: 2449,
      answer: "Farouk",
      option1: "",
      option2: " ",
      option3: "",
      question: "Because of his Albanian descent, some said this king, deposed in 1952, was not a true Egyptian",
      value: 300,
      category: "history",
      approved: true
    },
    {
      id: 2455,
      answer: "Elizabeth I",
      option1: "",
      option2: " ",
      option3: "",
      question: "In 1570, Pius V issued a papal bull which excommunicated & tried to depose this English queen",
      value: 400,
      category: "history",
      approved: true
    },
    {
      id: 2461,
      answer: "Denmark",
      option1: "",
      option2: " ",
      option3: "",
      question: "Circa 950, under Harald Bluetooth, this was 1st Scandinavian country unified under just 1 king",
      value: 500,
      category: "history",
      approved: true
    },
    {
      id: 3311,
      answer: "Pope",
      option1: "",
      option2: " ",
      option3: "",
      question: "The last married man to hold this job was Adrian II in the 9th century",
      value: 100,
      category: "history",
      approved: true
    },
    {
      id: 3317,
      answer: "General Custer",
      option1: "",
      option2: " ",
      option3: "",
      question: "It's said he angered Sioux by letting cavalry trample sacred cannabis field on way to Little Big Horn",
      value: 200,
      category: "history",
      approved: true
    },
    {
      id: 3323,
      answer: "Pontiac",
      option1: "",
      option2: " ",
      option3: "",
      question: "In 1763 he battled the English for Detroit -- where his name still builds excitement",
      value: 300,
      category: "history",
      approved: true
    },
    {
      id: 3329,
      answer: "Marie Curie",
      option1: "",
      option2: " ",
      option3: "",
      question: "When Dr. Pauling won his 2nd Nobel Prize in '62, he was 1st 2-time winner since this woman 51 years earlier",
      value: 400,
      category: "history",
      approved: true
    },
    {
      id: 3335,
      answer: "Soviet Union",
      option1: "",
      option2: " ",
      option3: "",
      question: "This country reported in 1923 that U.S. famine relief efforts there had saved 10 million lives in 2 years",
      value: 500,
      category: "history",
      approved: true
    },
    {
      id: 3700,
      answer: "Joan of Arc",
      option1: "",
      option2: " ",
      option3: "",
      question: "She restored Charles VII to the throne, but he didn't lift a finger to save her from the stake",
      value: 100,
      category: "history",
      approved: true
    },
    {
      id: 3706,
      answer: "Queen Victoria",
      option1: "",
      option2: " ",
      option3: "",
      question: "It's said this royal grandmother of Kaiser Wilhelm II wouldn't let him visit Ireland",
      value: 200,
      category: "history",
      approved: true
    },
    {
      id: 3712,
      answer: "the James Brothers (Frank & Jessie)",
      option1: "",
      option2: " ",
      option3: "",
      question: "In 1881, despite a $10,000 reward for the arrest of these brothers, the posters left out 'dead or alive'",
      value: 300,
      category: "history",
      approved: true
    },
    {
      id: 3718,
      answer: "the Persian Empire",
      option1: "",
      option2: " ",
      option3: "",
      question: "Darius I ruled this vast empire from 2 capitals, Susa & Persepolis",
      value: 400,
      category: "history",
      approved: true
    },
    {
      id: 3724,
      answer: "the East India Company",
      option1: "",
      option2: " ",
      option3: "",
      question: "In 1858, the Brittish government took over the rule of India from this company",
      value: 500,
      category: "history",
      approved: true
    },

  ])
  process.exit();
}

main()