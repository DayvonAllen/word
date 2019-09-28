import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}
  slang = [
    {
      id: "1",
      word: "proclivity",
      type: "noun",
      definition:
        "a tendency to choose or do something regularly; an inclination or predisposition toward a particular thing.",
      exampleSentence: "A proclivity for hard work.",
      exampleSentence2: "His sexual proclivities are none of your business."
    },
    {
      id: "2",
      word: "propensity",
      type: "noun",
      definition:
        "an inclination or natural tendency to behave in a particular way.",
      exampleSentence: "A propensity for violence.",
      exampleSentence2:
        "Mr. Bint has a propensity to put off decisions to the last minute."
    },
    {
      id: "3",
      word: "vindictive",
      type: "adjective",
      definition:
        "having or showing a strong or unreasoning desire for revenge.",
      exampleSentence: "The criticism was both vindictive and personalized.",
      exampleSentence2: "A vindictive person."
    },
    {
      id: "4",
      word: "pervasive",
      type: "adjective",
      definition: "spreading widely throughout an area or a group of people.",
      exampleSentence: "Ageism is pervasive and entrenched in our society.",
      exampleSentence2:
        "The corruption is so pervasive that it is accepted as the way to do business."
    },
    {
      id: "5",
      word: "parlance",
      type: "noun",
      definition:
        "a particular way of speaking or using words, especially a way common to those with a particular job or interest.",
      exampleSentence: "Dated terms that were once in common parlance.",
      exampleSentence2: "Legal parlance."
    },
    {
      id: "6",
      word: "inordinate",
      type: "adjective",
      definition: "unusually or disproportionately large; excessive.",
      exampleSentence: "A case that had taken up an inordinate amount of time.",
      exampleSentence2: "He drank an inordinate amount of wine."
    },
    {
      id: "7",
      word: "dogmatic",
      type: "adjective",
      definition:
        "characterized by or given to the expression of opinions very strongly or positively as if they were facts.",
      exampleSentence: "A dogmatic critic.",
      exampleSentence2: "Dogmatic writings."
    },
    {
      id: "8",
      word: "pragmatic",
      type: "adjective",
      definition:
        "dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
      exampleSentence: "A pragmatic approach to politics.",
      exampleSentence2:
        "Mixner, both passionate and pragmatic, found a focus in his activism."
    },
    {
      id: "9",
      word: "pompous",
      type: "adjective",
      definition:
        "affectedly and irritatingly grand, solemn, or self-important.",
      exampleSentence: "A pompous douche who pretends he knows everything.",
      exampleSentence2: "A pompous speech."
    },
    {
      id: "10",
      word: "umbrage",
      type: "noun",
      definition: "offense or annoyance.",
      exampleSentence: "She took umbrage at his remarks.",
      exampleSentence2: "To feel umbrage at a social snub."
    },
    {
      id: "11",
      word: "largesse",
      type: "noun",
      definition: "generosity in bestowing money or gifts upon others.",
      exampleSentence: "Dispensing his money with such largesse.",
      exampleSentence2: "Tupper took advantage of his friend's largesse."
    },
    {
      id: "12",
      word: "retrogress",
      type: "verb",
      definition: "go back to an earlier state, typically a worse one.",
      exampleSentence:
        "She retrogressed to the starting point of her rehabilitation.",
      exampleSentence2:
        "We don't stand still or retrogress; we keep going on and up."
    },
    {
      id: "13",
      word: "inexplicable",
      type: "adjective",
      definition: "unable to be explained or accounted for.",
      exampleSentence:
        "For some inexplicable reason her mind went completely blank.",
      exampleSentence2: "How do you explain the seemingly inexplicable?"
    },
    {
      id: "14",
      word: "cudgel",
      type: "noun, verb",
      definition:
        "a short, thick stick used as a weapon. To strike with a cudgel.",
      exampleSentence:
        "The guard hefted his cudgel menacingly and looked at the inmates. The threat to swing glinted in his eye.",
      exampleSentence2:
        "The officer was violently cudgeled down in the midst of the rioters, with his own beatstick no less."
    },
    {
      id: "15",
      word: "abscond",
      type: "verb",
      definition:
        "leave hurriedly and secretly, typically to avoid detection of or arrest for an unlawful action such as theft.",
      exampleSentence: "She absconded with the remaining thousand dollars.",
      exampleSentence2: "176 detainees absconded."
    },
    {
      id: "16",
      word: "precipice",
      type: "noun",
      definition: "a very steep rock face or cliff, especially a tall one.",
      exampleSentence: "We swerved toward the edge of the precipice.",
      exampleSentence2:
        "We stood at the edge of the precipice and looked down at the sea."
    },
    {
      id: "17",
      word: "impugn",
      type: "verb",
      definition:
        "dispute the truth, validity, or honesty of (a statement or motive); call into question.",
      exampleSentence:
        "The father does not impugn her capacity as a good mother.",
      exampleSentence2: "He had impugned the Prime Minister's honor"
    },
    {
      id: "18",
      word: "callous",
      type: "adjective",
      definition:
        "showing or having an insensitive and cruel disregard for others.",
      exampleSentence: "His callous comments about the murder made me shiver.",
      exampleSentence2: "A callous indifference to suffering."
    },
    {
      id: "19",
      word: "sedition",
      type: "noun",
      definition:
        "conduct or speech inciting people to rebel against the authority of a state, government or monarch.",
      exampleSentence:
        "The defendants were convicted on charges of sedition, illegal assembly, damaging property and trespassing.",
      exampleSentence2:
        "On his return in 1960, he started to campaign for an end to discrimination and was jailed for a decade after being convicted of sedition."
    },
    {
      id: "20",
      word: "perturbed",
      type: "adjective, verb",
      definition:
        "feeling anxiety or concern; unsettled. make (someone) anxious or unsettled.",
      exampleSentence: "She didn't seem perturbed about the noises around her.",
      exampleSentence2: "They were perturbed by her capricious behavior."
    },
    {
      id: "21",
      word: "capricious",
      type: "adjective",
      definition:
        "given to sudden and unaccountable changes of mood or behavior. a person or thing that's impulsive and unpredictable.",
      exampleSentence: "A capricious and often brutal administration.",
      exampleSentence2:
        "But how do you negotiate with somebody completely unreliable and capricious?"
    },
    {
      id: "22",
      word: "anoint",
      type: "verb",
      definition:
        "smear or rub with oil, typically as part of a religious ceremony. nominate or choose (someone) as successor to or leading candidate for a position.",
      exampleSentence: "High priests were anointed with oil.",
      exampleSentence2:
        "He was anointed as the organizational candidate of the party."
    },
    {
      id: "23",
      word: "valiantly",
      type: "adverb",
      definition:
        "with courage or determination in a way that is brave or determined when a situation is very difficult.",
      exampleSentence: "They fought valiantly to the end.",
      exampleSentence2: "She tried valiantly to smile."
    },
    {
      id: "24",
      word: "adherence",
      type: "noun",
      definition:
        "attachment or commitment to a person, cause, or belief. the quality or process of sticking fast to an object or surface.",
      exampleSentence: "A strict adherence to etiquette.",
      exampleSentence2:
        "Observing the adherence of the seeds to clothing prompted the development of Velcro."
    },
    {
      id: "25",
      word: "untenable",
      type: "adjective",
      definition:
        "(especially of a position or view) not able to be maintained or defended against attack or objection.",
      exampleSentence: "This argument is clearly untenable.",
      exampleSentence2: "The Government's position is untenable."
    },
    {
      id: "26",
      word: "ardent",
      type: "adjective",
      definition: "enthusiastic or passionate.",
      exampleSentence: "An ardent baseball fan.",
      exampleSentence2: "Ardent proponents of the bill."
    },
    {
      id: "27",
      word: "droll",
      type: "adjective",
      definition: "curious or unusual in a way that provokes dry amusement.",
      exampleSentence: "His unique brand of droll self-mockery.",
      exampleSentence2:
        "Passage was a natural performer — droll, self-deprecating and bursting with jittery energy."
    },
    {
      id: "28",
      word: "denigrate",
      type: "verb",
      definition:
        "criticize unfairly; disparage. to deny the importance or validity of.",
      exampleSentence: "There is a tendency to denigrate the poor.",
      exampleSentence2: "Denigrate their achievements."
    },
    {
      id: "29",
      word: "sycophant",
      type: "noun",
      definition:
        "a servile self-seeking flatterer. a person who acts obsequiously toward someone important in order to gain advantage.",
      exampleSentence:
        "To earn respect in a cohort composed not of the sycophants her father favors but of intellectual leaders.",
      exampleSentence2:
        "Both inherited a family business and are surrounded by sycophants."
    },
    {
      id: "30",
      word: "obsequious",
      type: "adjective",
      definition: "obedient or attentive to an excessive or servile degree.",
      exampleSentence: "They were served by obsequious waiters.",
      exampleSentence2: "An obsequious bow."
    },
    {
      id: "31",
      word: "idiosyncrasy",
      type: "noun",
      definition:
        "a mode of behavior or way of thought peculiar to an individual.",
      exampleSentence:
        "One of his little idiosyncrasies was always preferring to be in the car first.",
      exampleSentence2:
        "Think about it! We all accept each other’s fandoms. We all accept each other’s idiosyncrasies."
    },
    {
      id: "32",
      word: "poignant",
      type: "adjective",
      definition: "evoking a keen sense of sadness or regret.",
      exampleSentence: "A poignant reminder of the passing of time.",
      exampleSentence2:
        "The father of the murder victim bade a poignant farewell to his son."
    },
    {
      id: "33",
      word: "inscrutable",
      type: "adjective",
      definition: "impossible to understand, hard to read or interpret.",
      exampleSentence:
        "Usually he slips right back down it again but whatever he is going through he always seems to be wearing the same inscrutable expression.",
      exampleSentence2:
        "After struggling through the five nearly inscrutable prefatory poems, I put the book down for a week before taking it up again."
    },
    {
      id: "34",
      word: "idiomatic",
      type: "adjective",
      definition:
        "using, containing, or denoting expressions that are natural to a native speaker.",
      exampleSentence: "Distinctive idiomatic dialogue.",
      exampleSentence2:
        "McCraney’s script is quite simply an extraordinary piece of writing, idiomatic and poetic in its cadences and pleasingly serpentine in its structure."
    },
    {
      id: "35",
      word: "serpentine",
      type: "adjective",
      definition:
        "of or like a serpent or snake; winding and twisting like a snake. complex, cunning, or treacherous.",
      exampleSentence: "His charm was too subtle and serpentine for me.",
      exampleSentence2: "Serpentine coils."
    },
    {
      id: "36",
      word: "bevy",
      type: "noun",
      definition: "a large group of people or things of a particular kind.",
      exampleSentence:
        "A bevy of big-name cameos will keep the adults entertained.",
      exampleSentence2: "A bevy of boisterous sailors."
    },
    {
      id: "37",
      word: "litany",
      type: "noun",
      definition: "a tedious recital or repetitive series.",
      exampleSentence: "A litany of complaints.",
      exampleSentence2:
        "In his prepared remarks, Esper described a litany of concerns about China, from the way it uses its economic power to technology theft."
    },
    {
      id: "38",
      word: "insolvent",
      type: "adjective",
      definition: "unable to pay debts owed.",
      exampleSentence: "The company became insolvent.",
      exampleSentence2: "An insolvent company."
    },
    {
      id: "39",
      word: "deleterious",
      type: "adjective",
      definition: "causing harm or damage.",
      exampleSentence:
        "Divorce is assumed to have deleterious effects on children.",
      exampleSentence2: "Deleterious chemical additives."
    },
    {
      id: "40",
      word: "vanity",
      type: "noun",
      definition:
        "excessive pride in one's appearance, qualities, abilities, achievements, etc.; character or quality of being vain; conceit.",
      exampleSentence: "Failure to be elected was a great blow to his vanity.",
      exampleSentence2: "His good looks are his greatest vanity."
    },
    {
      id: "41",
      word: "sumptuous",
      type: "adjective",
      definition: "splendid and expensive-looking.",
      exampleSentence: "The banquet was a sumptuous, luxurious meal.",
      exampleSentence2: "A sumptuous residence."
    },
    {
      id: "42",
      word: "reticent",
      type: "adjective",
      definition: "not revealing one's thoughts or feelings readily.",
      exampleSentence: "She was extremely reticent about her personal affairs.",
      exampleSentence2:
        "Now that reticence is giving way, one of the political tremors being felt across the nation after recent attacks."
    },
    {
      id: "43",
      word: "palpable",
      type: "adjective",
      definition:
        "(of a feeling or atmosphere) so intense as to seem almost tangible.",
      exampleSentence: "A palpable sense of loss.",
      exampleSentence2: "A palpable lie."
    },
    {
      id: "44",
      word: "profligate",
      type: "adjective, noun",
      definition:
        "recklessly extravagant or wasteful in the use of resources. licentious; dissolute. a licentious, dissolute person.",
      exampleSentence: "Profligate consumers of energy.",
      exampleSentence2: "He succumbed to drink and a profligate lifestyle."
    },
    {
      id: "45",
      word: "condescension",
      type: "noun",
      definition: "an attitude of patronizing superiority; disdain.",
      exampleSentence: "A tone of condescension.",
      exampleSentence2:
        "Ironically, their claims of condescension are condescending themselves."
    },
    {
      id: "46",
      word: "vicissitude",
      type: "noun",
      definition:
        "a change of circumstances or fortune, typically one that is unwelcome or unpleasant.",
      exampleSentence: "Her husband's sharp vicissitudes of fortune.",
      exampleSentence2:
        "They remained friends through the vicissitudes of 40 years."
    },
    {
      id: "47",
      word: "sustenance",
      type: "noun",
      definition:
        "food and drink regarded as a source of strength; nourishment.",
      exampleSentence:
        "Poor rural economies turned to potatoes for sustenance.",
      exampleSentence2:
        "Sustenance programs for the poor are being raided to pay for public union jobs."
    },
    {
      id: "48",
      word: "innocuous",
      type: "adjective",
      definition: "not harmful or offensive.",
      exampleSentence: "It was an innocuous question.",
      exampleSentence2: "An innocuous home remedy."
    },
    {
      id: "49",
      word: "delineate",
      type: "verb",
      definition: "describe or portray (something) precisely.",
      exampleSentence:
        "The law should delineate and prohibit behavior that is socially abhorrent.",
      exampleSentence2:
        "In her speech she delineated the city plan with great care."
    },
    {
      id: "50",
      word: "pedant",
      type: "noun",
      definition:
        "a person who is excessively concerned with minor details and rules or with displaying academic learning.",
      exampleSentence:
        "The irony is, of course, that the pedants are the ones making the mistakes.",
      exampleSentence2:
        "Bercow grew up in London, the son of a taxi driver who was something of a language pedant."
    },
    {
      id: "51",
      word: "duplicity",
      type: "noun",
      definition: "deceitfulness; double-dealing.",
      exampleSentence:
        "On many occasions, she'd seen the duplicity and cold manipulation he'd spoken of.",
      exampleSentence2:
        "His career was marked by unceasing duplicity, at one time giving evidence of submission to the English authorities, at another intriguing against them in conjunction with lesser Irish chieftains."
    },
    {
      id: "52",
      word: "idolatry",
      type: "noun",
      definition:
        "the worship of idols; extreme admiration, love, or reverence for something or someone.",
      exampleSentence:
        "We must not allow our idolatry of art to obscure issues of political significance.",
      exampleSentence2: "Our idolatry of celebrities."
    },
    {
      id: "53",
      word: "fervor",
      type: "noun",
      definition: "intense and passionate feeling.",
      exampleSentence: "He talked with all the fervor of a new convert.",
      exampleSentence2: "He spoke with great fervor."
    },
    {
      id: "54",
      word: "lambaste",
      type: "verb",
      definition: "criticize (someone or something) harshly.",
      exampleSentence:
        "They lambasted the report as a gross distortion of the truth.",
      exampleSentence2:
        "Kevin Durant was lambasted for leaving the Oklahoma City Thunder to join the Golden State Warriors after the 2015-16 season and after losing to the Warriors in the playoffs."
    },
    {
      id: "55",
      word: "renege",
      type: "verb",
      definition: "go back on a promise, undertaking, or contract.",
      exampleSentence:
        "The administration had reneged on its election promises.",
      exampleSentence2: "He has reneged on his promise."
    },
    {
      id: "56",
      word: "capitulate",
      type: "verb",
      definition:
        "cease to resist an opponent or an unwelcome demand; surrender.",
      exampleSentence: "They had to capitulate to the enemy forces.",
      exampleSentence2:
        "He finally capitulated and agreed to do the job my way."
    },
    {
      id: "57",
      word: "immaculate",
      type: "adjective",
      definition:
        "(especially of a person or their clothes) perfectly clean, neat, or tidy. free from flaws or mistakes; perfect.",
      exampleSentence: "An immaculate white suit.",
      exampleSentence2: "An immaculate safety record."
    },
    {
      id: "58",
      word: "pecuniary",
      type: "adjective",
      definition: "relating to or consisting of money.",
      exampleSentence:
        "He admitted obtaining a pecuniary advantage by deception.",
      exampleSentence2: "He was free from all pecuniary anxieties."
    },
    {
      id: "59",
      word: "hedonic",
      type: "adjective",
      definition: "of, characterizing, or pertaining to pleasure",
      exampleSentence: "A hedonic thrill.",
      exampleSentence2: "Many purchases are related to hedonic impulses."
    },
    {
      id: "60",
      word: "ascribe",
      type: "verb",
      definition:
        "attribute something to (a cause). attribute (a text, quotation, or work of art) to a particular person or period. regard a quality as belonging to.",
      exampleSentence: "He ascribed Jane's short temper to her upset stomach.",
      exampleSentence2:
        "Tough-mindedness is a quality commonly ascribed to top bosses."
    },
    {
      id: "61",
      word: "vocation",
      type: "noun",
      definition:
        "a strong feeling of suitability for a particular career or occupation. a person's employment or main occupation, especially regarded as particularly worthy and requiring great dedication.",
      exampleSentence: "Not all of us have a vocation to be nurses or doctors",
      exampleSentence2: "Her vocation as a poet."
    },
    {
      id: "62",
      word: "concerted",
      type: "adjective",
      definition: "jointly arranged, planned, or carried out; coordinated.",
      exampleSentence: "Determined to begin a concerted action against them.",
      exampleSentence2: "There were calls for concerted action."
    },
    {
      id: "63",
      word: "amalgamation",
      type: "noun",
      definition: "the action, process, or result of combining or uniting.",
      exampleSentence: "The threat of amalgamation with a competitor.",
      exampleSentence2:
        "The Queen's Regiment is an amalgamation of several others."
    },
    {
      id: "64",
      word: "tumultuous",
      type: "adjective",
      definition:
        "making a loud, confused noise; uproarious. excited, confused, or disorderly.",
      exampleSentence: "Tumultuous applause.",
      exampleSentence2: "A tumultuous crowd."
    },
    {
      id: "65",
      word: "carte blanche",
      type: "noun",
      definition: "complete freedom to act as one wishes or thinks best.",
      exampleSentence: "We were given carte blanche.",
      exampleSentence2:
        "The government appears to have given the military carte blanche in Afghanistan."
    },
    {
      id: "66",
      word: "tenuous",
      type: "adjective",
      definition: "very weak or slight. very slender or fine; insubstantial.",
      exampleSentence:
        "The tenuous link between interest rates and investment.",
      exampleSentence2: "A tenuous cloud."
    },
    {
      id: "67",
      word: "ruination",
      type: "noun",
      definition:
        "the action or fact of ruining someone or something or of being ruined. the state of being ruined.",
      exampleSentence:
        "Commercial malpractice causes the ruination of thousands of people.",
      exampleSentence2: "The headquarters fell into ruination."
    },
    {
      id: "68",
      word: "titillating",
      type: "adjective",
      definition: "arousing mild sexual excitement or interest; salacious.",
      exampleSentence: "She let slip titillating details about her clients.",
      exampleSentence2: "Titillating reading."
    },
    {
      id: "69",
      word: "cogent",
      type: "adjective",
      definition: "(of an argument or case) clear, logical, and convincing.",
      exampleSentence:
        "They put forward cogent arguments for British membership.",
      exampleSentence2:
        "He ended with some cogent and compelling logic born of a desire not for revenge, but simple justice."
    },
    {
      id: "70",
      word: "ingenuity",
      type: "noun",
      definition: "the quality of being clever, original, and inventive.",
      exampleSentence:
        "Considerable ingenuity must be employed in writing software.",
      exampleSentence2: "A device of great ingenuity."
    },
    {
      id: "71",
      word: "banality",
      type: "noun",
      definition: " unoriginality.",
      exampleSentence: "There is an essential banality to the story he tells.",
      exampleSentence2: "The banalities of contemporary celebrity culture."
    },
    {
      id: "72",
      word: "ostentatious",
      type: "adjective",
      definition:
        "characterized by vulgar or pretentious display; designed to impress or attract notice.",
      exampleSentence:
        "Books that people buy and display ostentatiously but never actually finish.",
      exampleSentence2:
        "It’s versatile enough to handle many diverse tasks and upscale enough to look sharp on campus without being ostentatious."
    },
    {
      id: "73",
      word: "rapacious",
      type: "adjective",
      definition: "aggressively greedy or grasping.",
      exampleSentence: "Rapacious landlords.",
      exampleSentence2:
        "China is a deep-pocketed, rapacious regime that poses a significant threat not just to American interests but to the entire civilized world."
    },
    {
      id: "74",
      word: "copulation",
      type: "noun",
      definition: "sexual intercourse.",
      exampleSentence: "Males may seek copulation with the breeding female.",
      exampleSentence2:
        "McDaniel was convicted in October of two felony counts of kidnapping to commit oral copulation."
    },
    {
      id: "75",
      word: "corpulent",
      type: "adjective",
      definition: "(of a person) fat.",
      exampleSentence: "A short, somewhat corpulent man.",
      exampleSentence2:
        "Some homes boasted wall murals, and other art included stone figurines of animals and corpulent women."
    },
    {
      id: "76",
      word: "felonious",
      type: "adjective",
      definition:
        "Relating to or involved in crime. relating to or of the nature of felony.",
      exampleSentence:
        "They turned their felonious talents to the smuggling trade.",
      exampleSentence2: "His conduct was felonious."
    },
    {
      id: "77",
      word: "sanctimonious",
      type: "adjective",
      definition: "making a show of being morally superior to other people.",
      exampleSentence:
        "What happened to all the sanctimonious talk about putting his family first?",
      exampleSentence2: "A sanctimonious moralist."
    },
    {
      id: "78",
      word: "kindred",
      type: "noun, adjective",
      definition: "one's family and relations. similar in kind; related.",
      exampleSentence:
        "The center collects works on industrial relations and kindred subjects.",
      exampleSentence2: "Books on kindred subjects."
    },
    {
      id: "79",
      word: "meek",
      type: "adjective",
      definition:
        "quiet, gentle, and easily imposed on; submissive. enduring injury with patience and without resentment.",
      exampleSentence:
        "I used to call her Miss Mouse because she was so meek and mild.",
      exampleSentence2: "A meek child dominated by his brothers."
    },
    {
      id: "80",
      word: "forgo",
      type: "verb",
      definition:
        "omit or decline to take (something pleasant or valuable); go without. refrain from.",
      exampleSentence:
        "She wanted to forgo the dessert and leave while they could.",
      exampleSentence2: "We forgo any comparison between the two men."
    },
    {
      id: "81",
      word: "provision",
      type: "noun, verb",
      definition:
        "the action of providing or supplying something for use. supply with food, drink, or equipment, especially for a journey.",
      exampleSentence:
        "Civilian contractors were responsible for provisioning these armies.",
      exampleSentence2: "New contracts for the provision of services."
    },
    {
      id: "82",
      word: "parity",
      type: "noun",
      definition:
        "the state or condition of being equal, especially regarding status or pay. equivalence of a commodity price expressed in one currency to its price expressed in another.",
      exampleSentence:
        "Parity of incomes between rural workers and those in industrial occupations.",
      exampleSentence2:
        "The two currencies are approaching parity for the first time in decades."
    },
    {
      id: "83",
      word: "alacrity",
      type: "noun",
      definition: "brisk and cheerful readiness.",
      exampleSentence: "She accepted the invitation with alacrity.",
      exampleSentence2:
        "Down under, people endearingly call boxes of wine “goons,” and they drink them with alacrity."
    },
    {
      id: "84",
      word: "philanderer",
      type: "noun",
      definition:
        "a man who readily or frequently enters into casual sexual relationships with women; a womanizer. especially, a man who is unfaithful to his wife or partner",
      exampleSentence: "He was known as a philanderer.",
      exampleSentence2:
        "In case it is not evident by now, Pendergrass was something of a philanderer."
    },
    {
      id: "85",
      word: "inebriated",
      type: "verb, adjective",
      definition: "intoxicated. exhilarated or confused by or as if by alcohol",
      exampleSentence: "I was mildly inebriated.",
      exampleSentence2:
        "The creamery manager, it seems, staggered to his car, but was too inebriated to even start the engine."
    },
    {
      id: "86",
      word: "augury",
      type: "noun",
      definition: "a sign of what will happen in the future; an omen.",
      exampleSentence: "They heard the sound as an augury of death.",
      exampleSentence2:
        "Some people believe that a broken mirror is an augury of seven years' bad luck."
    },
    {
      id: "87",
      word: "extraneous",
      type: "adjective",
      definition:
        "irrelevant or unrelated to the subject being dealt with. separate from the object to which it is attached. of external origin.",
      exampleSentence:
        "One is obliged to wade through many pages of extraneous material.",
      exampleSentence2: "Extraneous influences came to bear."
    },
    {
      id: "88",
      word: "discern",
      type: "verb",
      definition:
        "perceive or recognize (something). distinguish (someone or something) with difficulty by sight or with the other senses.",
      exampleSentence: "I can discern no difference between the two policies.",
      exampleSentence2: "She could faintly discern the shape of a skull."
    },
    {
      id: "89",
      word: "virile",
      type: "adjective",
      definition:
        "(of a man) having strength, energy, and a strong sex drive. having or characterized by strength and energy. having traditionally masculine traits especially to a marked degree",
      exampleSentence:
        "Men were once expected to be interested only in such virile activities as hunting.",
      exampleSentence2: "Virile strength."
    },
    {
      id: "90",
      word: "adept",
      type: "noun, adjective",
      definition:
        "very skilled or proficient at something. a person who is skilled or proficient at something.",
      exampleSentence: "He is adept at cutting through red tape.",
      exampleSentence2: "They are adepts at kung fu and karate."
    },
    {
      id: "91",
      word: "ghastly",
      type: "adjective",
      definition:
        "causing great horror or fear; frightful or macabre. extremely unwell.",
      exampleSentence: "She was overcome with horror at the ghastly spectacle.",
      exampleSentence2: "He always felt ghastly first thing in the morning."
    },
    {
      id: "92",
      word: "macabre",
      type: "adjective",
      definition:
        "disturbing and horrifying because of involvement with or depiction of death and injury.",
      exampleSentence: "A macabre series of murders.",
      exampleSentence2: "A macabre presentation of a tragic story."
    },
    {
      id: "93",
      word: "riveting",
      type: "adjective",
      definition: "completely engrossing; compelling.",
      exampleSentence:
        "The book is a riveting account of the legendary freedom fighter.",
      exampleSentence2: "A riveting story."
    },
    {
      id: "94",
      word: "indignation",
      type: "noun",
      definition:
        "anger or annoyance provoked by what is perceived as unfair treatment.",
      exampleSentence: "The letter filled Lucy with indignation.",
      exampleSentence2:
        '"Shaming these people is a statement of moral indignation that these people are not fit for polite society," she said.'
    },
    {
      id: "95",
      word: "camisole",
      type: "noun",
      definition:
        "A camisole is a sleeveless undergarment for women, normally extending to the waist.",
      exampleSentence:
        "That said, one of the great things about a camisole is that it doesn't cover your underarms, so if you're not sweating, you can wear it a few times before you have to wash it.",
      exampleSentence2: "You don't need to buy an expensive beaded camisole."
    },
    {
      id: "96",
      word: "confer",
      type: "verb",
      definition:
        "grant or bestow (a title, degree, benefit, or right). have discussions; exchange opinions.",
      exampleSentence: "Moves were made to confer an honorary degree on her.",
      exampleSentence2: "The officials were conferring with allies."
    },
    {
      id: "97",
      word: "recrimination",
      type: "noun",
      definition:
        "an accusation in response to one from someone else. a retaliatory accusation.",
      exampleSentence: "There are no tears, no recriminations.",
      exampleSentence2: "Endless recrimination."
    },
    {
      id: "98",
      word: "fungible",
      type: "adjective",
      definition:
        "(of goods contracted for without an individual specimen being specified) able to replace or be replaced by another identical item; mutually interchangeable.",
      exampleSentence: "It is by no means the worlds only fungible commodity.",
      exampleSentence2: "Oil, wheat, and lumber are fungible commodities."
    },
    {
      id: "99",
      word: "in tandem",
      type: "phrase",
      definition: "alongside each other; together.",
      exampleSentence:
        "A tight fiscal policy working in tandem with a tight foreign exchange policy.",
      exampleSentence2:
        "I want these two groups to work/operate in tandem on this project."
    },
    {
      id: "100",
      word: "tepid",
      type: "adjective",
      definition:
        "(especially of a liquid) only slightly warm; lukewarm. showing little enthusiasm.",
      exampleSentence: "She soaked a flannel in the tepid water.",
      exampleSentence2: "The applause was tepid."
    },
    {
      id: "101",
      word: "gratuitous",
      type: "adjective",
      definition:
        "uncalled for; lacking good reason; unwarranted. given or done free of charge",
      exampleSentence: "Gratuitous violence.",
      exampleSentence2: "Solicitors provide a form of gratuitous legal advice."
    },
    {
      id: "102",
      word: "fortitude",
      type: "noun",
      definition: "courage in pain or adversity.",
      exampleSentence: "She endured her illness with great fortitude.",
      exampleSentence2:
        "Through hard work, physical prowess, and mental fortitude, Williams has ascended to the top of his craft, becoming an NBA first-round pick of the Celtics."
    },
    {
      id: "103",
      word: "mercurial",
      type: "adjective",
      definition:
        "(of a person) subject to sudden or unpredictable changes of mood or mind.",
      exampleSentence: "His mercurial temperament.",
      exampleSentence2: "A mercurial temperament."
    },
    {
      id: "104",
      word: "temperament",
      type: "noun",
      definition:
        "a person's or animal's nature, especially as it permanently affects their behavior. the tendency to behave angrily or emotionally.",
      exampleSentence: "She had an artistic temperament.",
      exampleSentence2: "He had begun to show signs of temperament."
    },
    {
      id: "105",
      word: "sentiment",
      type: "noun",
      definition:
        "a view of or attitude toward a situation or event; an opinion.",
      exampleSentence:
        "I agree with your sentiments regarding the road bridge.",
      exampleSentence2:
        "The comments in today's Daily Telegraph echo my own sentiments."
    },
    {
      id: "106",
      word: "coalition",
      type: "noun",
      definition:
        "an alliance for combined action, especially a temporary alliance of political parties forming a government or of states.",
      exampleSentence:
        "A coalition of conservatives and disaffected Democrats.",
      exampleSentence2: "A multiparty coalition ruled the country."
    },
    {
      id: "107",
      word: "austerity",
      type: "noun",
      definition:
        "conditions characterized by severity, sternness, or asceticism. difficult economic conditions created by government measures to reduce a budget deficit.",
      exampleSentence:
        "He was noted for his austerity and his authoritarianism.",
      exampleSentence2: "A simple life of prayer and personal austerity."
    },
    {
      id: "108",
      word: "asceticism",
      type: "noun",
      definition:
        "severe self-discipline and avoidance of all forms of indulgence, typically for religious reasons.",
      exampleSentence: "Acts of physical asceticism.",
      exampleSentence2:
        "Religion, you might say, enforces asceticism in the name of the spiritual; capitalism enforces asceticism in the name of the material."
    },
    {
      id: "109",
      word: "renunciation",
      type: "noun",
      definition:
        "the formal rejection of something, typically a belief, claim, or course of action.",
      exampleSentence: "A renunciation of violence.",
      exampleSentence2: "The king's renunciation of the throne."
    },
    {
      id: "110",
      word: "menagerie",
      type: "noun",
      definition:
        "a collection of wild animals kept in captivity for exhibition. a strange or diverse collection of people or things.",
      exampleSentence: "Some other specimen in the television menagerie.",
      exampleSentence2:
        "A pile of straw right by the menagerie lit on fire, and reached the tent in seconds."
    },
    {
      id: "111",
      word: "nebulous",
      type: "adjective",
      definition:
        "in the form of a cloud or haze; hazy. (of a concept or idea) unclear, vague, or ill-defined.",
      exampleSentence: "Nebulous concepts like quality of life.",
      exampleSentence2: "His nebulous ideas about salvation."
    },
    {
      id: "112",
      word: "tort",
      type: "noun",
      definition:
        "a wrongful act or an infringement of a right (other than under contract) leading to civil legal liability.",
      exampleSentence: "Public nuisance is a crime as well as a tort.",
      exampleSentence2: "This undermines the very existence of US torts laws."
    },
    {
      id: "113",
      word: "privy",
      type: "adjective",
      definition: "sharing in the knowledge of (something secret or private).",
      exampleSentence: "He was no longer privy to her innermost thoughts.",
      exampleSentence2: "Many persons were privy to the plot."
    },
    {
      id: "114",
      word: "assailant",
      type: "noun",
      definition: "a person who physically attacks another.",
      exampleSentence:
        "The police have no firm leads about the identity of his assailant.",
      exampleSentence2: "She escaped from her assailant after kicking him."
    },
    {
      id: "115",
      word: "detente",
      type: "noun",
      definition:
        "the easing of hostility or strained relations, especially between countries.",
      exampleSentence: "A serious effort at detente with the eastern bloc.",
      exampleSentence2: "Diplomats brokering a detente."
    },
    {
      id: "116",
      word: "aplomb",
      type: "noun",
      definition:
        "self-confidence or assurance, especially when in a demanding situation.",
      exampleSentence: "Diana passed the test with aplomb.",
      exampleSentence2:
        "It probably helps that Mr. Gerstell, a retired electrical engineer, handles new technology with aplomb."
    },
    {
      id: "117",
      word: "disparage",
      type: "verb",
      definition:
        "regard or represent as being of little worth. to depreciate by indirect means (such as invidious comparison)",
      exampleSentence:
        "He never missed an opportunity to disparage his competitors.",
      exampleSentence2: "Religious beliefs disparaged as superstition."
    },
    {
      id: "118",
      word: "infidel",
      type: "adjective, noun",
      definition:
        "a person who does not believe in religion or who adheres to a religion other than one's own. not holding the faith of a given religion",
      exampleSentence:
        "They wanted to secure the Holy Places from the infidel.",
      exampleSentence2: "The infidel nations."
    },
    {
      id: "119",
      word: "invidious",
      type: "adjective",
      definition:
        "(of an action or situation) likely to arouse or incur resentment or anger in others. (of a comparison or distinction) unfairly discriminating; unjust.",
      exampleSentence:
        "It seems invidious to make special mention of one aspect of his work.",
      exampleSentence2: "She'd put herself in an invidious position."
    },
    {
      id: "120",
      word: "dainty",
      type: "adjective",
      definition:
        "delicately small and pretty. fastidious or difficult to please, typically concerning food.",
      exampleSentence: "A dainty lace handkerchief.",
      exampleSentence2: "A dainty appetite."
    },
    {
      id: "121",
      word: "fastidious",
      type: "adjective",
      definition:
        "very attentive to and concerned about accuracy and detail. very concerned about matters of cleanliness.",
      exampleSentence: "He chooses his words with fastidious care.",
      exampleSentence2:
        "The child seemed fastidious about getting her fingers sticky or dirty."
    },
    {
      id: "122",
      word: "maudlin",
      type: "adjective",
      definition:
        "self-pityingly or tearfully sentimental, often through drunkenness.",
      exampleSentence: "The drink made her maudlin.",
      exampleSentence2: "A bout of maudlin self-pity."
    },
    {
      id: "123",
      word: "coarse",
      type: "adjective",
      definition:
        "rough or loose in texture or grain. (of a person or their speech) rude, crude, or vulgar.",
      exampleSentence: "A coarse woolen cloth.",
      exampleSentence2:
        "Contains coarse language and some mature thematic elements."
    },
    {
      id: "124",
      word: "decrepit",
      type: "adjective",
      definition:
        "(of a person) elderly and infirm. worn out or ruined because of age or neglect.",
      exampleSentence: "A decrepit old drunk.",
      exampleSentence2:
        "Centuries-old buildings, now decrepit and black with soot."
    },
    {
      id: "125",
      word: "stalwart",
      type: "adjective, noun",
      definition:
        "loyal, reliable, and hardworking. a loyal, reliable, and hardworking supporter or participant in an organization or team.",
      exampleSentence: "He remained a stalwart supporter of the cause.",
      exampleSentence2: "The stalwarts of the Ladies' Auxiliary."
    },
    {
      id: "126",
      word: "tutelage",
      type: "noun",
      definition:
        "protection of or authority over someone or something; guardianship. instruction; tuition.",
      exampleSentence:
        "The organizations remained under firm government tutelage",
      exampleSentence2:
        "He felt privileged to be under the tutelage of an experienced actor"
    },
    {
      id: "127",
      word: "insouciant",
      type: "adjective",
      definition: "showing a casual lack of concern; indifferent.",
      exampleSentence: "An insouciant shrug.",
      exampleSentence2:
        "I watched her, on the opposite footpath, strolling down the shady avenue with an insouciant grace."
    },
    {
      id: "128",
      word: "debase",
      type: "verb",
      definition:
        "reduce (something) in quality or value; degrade. lower the moral character of (someone).",
      exampleSentence: "The love episodes debase the dignity of the drama.",
      exampleSentence2: "War debases people."
    },
    {
      id: "129",
      word: "decadent",
      type: "adjective, noun",
      definition:
        "characterized by or reflecting a state of moral or cultural decline. a person who is luxuriously self-indulgent. luxuriously self-indulgent.",
      exampleSentence: "A decadent soak in a scented bath.",
      exampleSentence2:
        "A decadent life of excessive money and no sense of responsibility."
    },
    {
      id: "130",
      word: "precocious",
      type: "adjective",
      definition:
        "(of a child) having developed certain abilities or proclivities at an earlier age than usual. (of behavior or ability) indicative of early development.",
      exampleSentence: "He was a precocious, solitary boy.",
      exampleSentence2: "A precocious talent for computing."
    },
    {
      id: "131",
      word: "surmise",
      type: "noun, verb",
      definition:
        "suppose that something is true without having evidence to confirm it. a supposition that something may be true, even though there is no evidence to confirm it.",
      exampleSentence: "He surmised that something must be wrong.",
      exampleSentence2: "Charles was glad to have his surmise confirmed."
    },
    {
      id: "132",
      word: "aloof",
      type: "adjective",
      definition:
        "not friendly or forthcoming; cool and distant. conspicuously uninvolved and uninterested, typically through distaste.",
      exampleSentence: "They were courteous but faintly aloof.",
      exampleSentence2: "He stayed aloof from the bickering."
    },
    {
      id: "133",
      word: "amiable",
      type: "adjective",
      definition:
        "having or displaying a friendly and pleasant manner. friendly, sociable, and congenial",
      exampleSentence: "An amiable, unassuming fellow.",
      exampleSentence2: "An amiable host."
    },
    {
      id: "134",
      word: "accost",
      type: "verb",
      definition: "approach and address (someone) boldly or aggressively.",
      exampleSentence: "Reporters accosted him in the street.",
      exampleSentence2: "He was accosted by three gang members on the subway."
    },
    {
      id: "135",
      word: "malleable",
      type: "adjective",
      definition:
        "easily influenced; pliable. (of a metal or other material) able to be hammered or pressed permanently out of shape without breaking or cracking.",
      exampleSentence: "Anna was shaken enough to be malleable.",
      exampleSentence2: "A malleable substance."
    },
    {
      id: "136",
      word: "congenial",
      type: "adjective",
      definition:
        "(of a person) pleasant because of a personality, qualities, or interests that are similar to one's own. (of a thing) pleasant or agreeable because suited to one's taste or inclination.",
      exampleSentence: "His need for some congenial company.",
      exampleSentence2: "A congenial atmosphere"
    },
    {
      id: "137",
      word: "pliable",
      type: "adjective",
      definition: "easily bent; flexible. easily influenced.",
      exampleSentence: "Quality leather is pliable and will not crack.",
      exampleSentence2: "Pliable teenage minds."
    },
    {
      id: "138",
      word: "machination",
      type: "noun",
      definition: "a plot or scheme.",
      exampleSentence:
        "He was cheated by the political machinations of the legislature.",
      exampleSentence2:
        "To those unaccustomed to the machinations of the UN, this may seem like yet another insignificant and toothless resolution."
    },
    {
      id: "139",
      word: "contention",
      type: "noun",
      definition:
        "heated disagreement. an assertion, especially one maintained in argument. an act or instance of contending",
      exampleSentence:
        "The captured territory was one of the main areas of contention between the two countries.",
      exampleSentence2:
        "He has taken himself out of contention for the directorship."
    },
    {
      id: "140",
      word: "sardonic",
      type: "adjective",
      definition:
        "grimly mocking or cynical. disdainfully or skeptically humorous",
      exampleSentence: "Starkey attempted a sardonic smile.",
      exampleSentence2: "A sardonic comment"
    },
    {
      id: "141",
      word: "misnomer",
      type: "noun",
      definition:
        "a wrong or inaccurate name or designation. a wrong or inaccurate use of a name or term.",
      exampleSentence:
        "Morning sickness is a misnomer for many women, since the nausea can occur any time during the day.",
      exampleSentence2:
        "To call this “neighborhood policing” would be a misnomer."
    },
    {
      id: "142",
      word: "euphemism",
      type: "noun",
      definition:
        "a mild or indirect word or expression substituted for one considered to be too harsh or blunt when referring to something unpleasant or embarrassing.",
      exampleSentence: "“Downsizing” as a euphemism for cuts.",
      exampleSentence2: "“Professional foul” is just a euphemism for cheating."
    },
    {
      id: "143",
      word: "recidivism",
      type: "noun",
      definition: "the tendency of a convicted criminal to reoffend.",
      exampleSentence: "The prison has succeeded in reducing recidivism.",
      exampleSentence2:
        "That means more measures are needed to reduce the prison population, such as sentencing reforms or reduced recidivism."
    },
    {
      id: "144",
      word: "supine",
      type: "adjective",
      definition:
        "(of a person) lying face upward. failing to act or protest as a result of moral weakness or indolence.",
      exampleSentence: "Supine in the face of racial injustice.",
      exampleSentence2: "He was lying supine on the couch."
    },
    {
      id: "145",
      word: "parochial",
      type: "adjective",
      definition:
        "relating to a church parish. having a limited or narrow outlook or scope.",
      exampleSentence: "The parochial church council.",
      exampleSentence2: "This worldview seems incredibly naive and parochial."
    },
    {
      id: "146",
      word: "admonish",
      type: "verb",
      definition:
        "warn or reprimand someone firmly. advise or urge (someone) earnestly.",
      exampleSentence: "She admonished me for appearing at breakfast unshaven.",
      exampleSentence2:
        "She admonished him to drink no more than one glass of wine."
    },
    {
      id: "147",
      word: "indolence",
      type: "noun",
      definition: "avoidance of activity or exertion; laziness.",
      exampleSentence: "My failure is probably due to my own indolence.",
      exampleSentence2:
        "A general feeling of indolence usually overtakes them during summer vacation."
    },
    {
      id: "148",
      word: "reprimand",
      type: "noun, verb",
      definition:
        "a rebuke, especially an official one. rebuke (someone), especially officially.",
      exampleSentence: "Officials were dismissed or reprimanded for poor work.",
      exampleSentence2: "The soldiers were severely reprimanded."
    },
    {
      id: "149",
      word: "reprove",
      type: "verb",
      definition:
        "reprimand or censure (someone).  to scold or correct usually gently or with kindly intent. to express disapproval of.",
      exampleSentence: "He was reproved for obscenity.",
      exampleSentence2: "It is not for me to reprove popular taste."
    },
    {
      id: "150",
      word: "censure",
      type: "noun, verb",
      definition:
        "express severe disapproval of (someone or something), especially in a formal statement. the expression of formal disapproval.",
      exampleSentence:
        "A judge was censured in 1983 for a variety of types of injudicious conduct.",
      exampleSentence2:
        "Angry delegates offered a resolution of censure against the offenders."
    },
    {
      id: "151",
      word: "obscenity",
      type: "noun",
      definition:
        "the state or quality of being obscene; obscene behavior, language, or images. an extremely offensive word or expression.",
      exampleSentence: "The book was banned for obscenity.",
      exampleSentence2: "The men scowled and muttered obscenities."
    },
    {
      id: "152",
      word: "tempestuous",
      type: "adjective",
      definition:
        "characterized by strong and turbulent or conflicting emotion. very stormy.",
      exampleSentence: "He had a reckless and tempestuous streak.",
      exampleSentence2: "A tempestuous wind."
    },
    {
      id: "153",
      word: "contiguous",
      type: "adjective",
      definition:
        "next or together in sequence. sharing a common border; touching.",
      exampleSentence: "The 48 contiguous states.",
      exampleSentence2: "Five hundred contiguous dictionary entries."
    },
    {
      id: "154",
      word: "untoward",
      type: "adjective",
      definition: "unexpected and inappropriate or inconvenient.",
      exampleSentence:
        "Both tried to behave as if nothing untoward had happened.",
      exampleSentence2: "Untoward side effects."
    },
    {
      id: "155",
      word: "tantamount",
      type: "adjective",
      definition: "equivalent in seriousness to; virtually the same as.",
      exampleSentence:
        "The resignations were tantamount to an admission of guilt.",
      exampleSentence2: "A relationship tantamount to marriage."
    },
    {
      id: "156",
      word: "perilous",
      type: "adjective",
      definition:
        "full of danger or risk. exposed to imminent risk of disaster or ruin.",
      exampleSentence: "A perilous journey south.",
      exampleSentence2: "The economy is in a perilous state."
    },
    {
      id: "157",
      word: "diatribe",
      type: "noun",
      definition:
        "a forceful and bitter verbal attack against someone or something.",
      exampleSentence: "A diatribe against the Roman Catholic Church.",
      exampleSentence2: "Repeated diatribes against the senator."
    },
    {
      id: "158",
      word: "eminent",
      type: "adjective",
      definition:
        "(of a person) famous and respected within a particular sphere or profession. used to emphasize the presence of a positive quality.",
      exampleSentence: "One of the world's most eminent statisticians.",
      exampleSentence2:
        "The guitar's eminent suitability for recording studio work"
    },
    {
      id: "159",
      word: "destitute",
      type: "adjective",
      definition: "without the basic necessities of life. not having.",
      exampleSentence: "The charity cares for destitute children.",
      exampleSentence2: "Towns destitute of commerce."
    },
    {
      id: "160",
      word: "perplex",
      type: "verb",
      definition:
        "(of something complicated or unaccountable) cause (someone) to feel completely baffled.",
      exampleSentence: "She was perplexed by her husband's moodiness.",
      exampleSentence2: "Her attitude perplexes me."
    },
    {
      id: "161",
      word: "animus",
      type: "noun",
      definition: "hostility or ill feeling. motivation to do something.",
      exampleSentence: "The author's animus toward her.",
      exampleSentence2: "The reformist animus came from within the Party."
    },
    {
      id: "162",
      word: "apprehensive",
      type: "adjective",
      definition:
        "anxious or fearful that something bad or unpleasant will happen.",
      exampleSentence: "He felt apprehensive about going home.",
      exampleSentence2: "His expression was apprehensive, but he said nothing."
    },
    {
      id: "163",
      word: "gaunt",
      type: "adjective",
      definition:
        "(of a person) lean and haggard, especially because of suffering, hunger, or age. (of a building or place) grim or desolate in appearance.",
      exampleSentence: "A tall, gaunt woman in black.",
      exampleSentence2: "Gaunt tenement blocks."
    },
    {
      id: "164",
      word: "obfuscate",
      type: "verb",
      definition:
        "render obscure, unclear, or unintelligible. bewilder (someone).",
      exampleSentence:
        "The spelling changes will deform some familiar words and obfuscate their etymological origins.",
      exampleSentence2: "The debate all too often obfuscates the issue."
    },
    {
      id: "165",
      word: "impudent",
      type: "adjective",
      definition:
        "not showing due respect for another person; impertinent. an impudent person is bold, sassy, and shameless.",
      exampleSentence: "He could have strangled this impudent upstart.",
      exampleSentence2:
        "The North’s spokesman described Moon as an “impudent guy” who is “overcome with fright”."
    },
    {
      id: "166",
      word: "emolument",
      type: "noun",
      definition: "a salary, fee, or profit from employment or office.",
      exampleSentence: "The directors' emoluments.",
      exampleSentence2:
        "A clause in the U.S. constitution prevents sitting legislators from receiving emoluments from their own votes."
    },
    {
      id: "167",
      word: "veracity",
      type: "noun",
      definition: "conformity to facts; accuracy. habitual truthfulness.",
      exampleSentence:
        "Officials expressed doubts concerning the veracity of the story.",
      exampleSentence2:
        "Voters should be concerned about his veracity and character."
    },
    {
      id: "168",
      word: "desolate",
      type: "adjective, verb",
      definition:
        "(of a place) deserted of people and in a state of bleak and dismal emptiness. make (a place) bleakly and depressingly empty or bare.",
      exampleSentence: "A desolate moor.",
      exampleSentence2: "The droughts that desolated the dry plains."
    },
    {
      id: "169",
      word: "valorous",
      type: "adjective",
      definition:
        "showing great courage in the face of danger, especially in battle.",
      exampleSentence: "Valorous deeds on the field of honor.",
      exampleSentence2:
        "According to the White House, that valorous act saved three members of his unit that day."
    },
    {
      id: "170",
      word: "impertinent",
      type: "adjective",
      definition:
        "not showing proper respect; rude. not pertinent to a particular matter; irrelevant.",
      exampleSentence:
        "Talk of “rhetoric” and “strategy” is impertinent to this process.",
      exampleSentence2: "An impertinent question."
    },
    {
      id: "171",
      word: "insurrection",
      type: "noun",
      definition: "a violent uprising against an authority or government.",
      exampleSentence: "The insurrection was savagely put down.",
      exampleSentence2:
        "Of course, without American logistical aid, the insurrection would have ended in tragedy."
    },
    {
      id: "172",
      word: "ensemble",
      type: "noun",
      definition:
        "a group of musicians, actors, or dancers who perform together.",
      exampleSentence: "A Bulgarian folk ensemble.",
      exampleSentence2:
        "The buildings in the square present a charming provincial ensemble."
    },
    {
      id: "173",
      word: "lecherous",
      type: "adjective",
      definition: "having or showing excessive or offensive sexual desire.",
      exampleSentence: "She ignored his lecherous gaze.",
      exampleSentence2:
        "He is depicted as lecherous but harmless, silly and creepy."
    },
    {
      id: "174",
      word: "dearth",
      type: "noun",
      definition: "a scarcity or lack of something.",
      exampleSentence: "There is a dearth of evidence.",
      exampleSentence2: "The problem is not a dearth of talent."
    },
    {
      id: "175",
      word: "verboten",
      type: "adjective",
      definition: "forbidden, especially by an authority.",
      exampleSentence: "Bank fishing is verboten on Strathbeg.",
      exampleSentence2:
        "Instead of revisiting the idea that teaching “trade” or vocational courses is verboten, the authorities determined that a college degree would lead to guaranteed earnings."
    },
    {
      id: "176",
      word: "licentious",
      type: "adjective",
      definition: "promiscuous and unprincipled in sexual matters.",
      exampleSentence: "The ruler's tyrannical and licentious behavior.",
      exampleSentence2: "Licentious revelers."
    },
    {
      id: "177",
      word: "ostracize",
      type: "verb",
      definition: "exclude (someone) from a society or group.",
      exampleSentence:
        "A group of people who have been ridiculed, ostracized, and persecuted for centuries.",
      exampleSentence2:
        "A lonely dissenter, ostracized as an enemy of the people."
    },
    {
      id: "178",
      word: "libation",
      type: "noun",
      definition:
        "a drink poured out as an offering to a deity. the pouring out of a drink as an offering to a deity. a drink.",
      exampleSentence: "Gin was poured in libation.",
      exampleSentence2:
        "They steadily worked their way through free food and the occasional libation."
    },
    {
      id: "179",
      word: "extrapolate",
      type: "verb",
      definition:
        "extend the application of (a method or conclusion, especially one based on statistics) to an unknown situation by assuming that existing trends will continue or similar methods will be applicable. estimate or conclude (something) by extrapolating.",
      exampleSentence:
        "The results cannot be extrapolated to other patient groups.",
      exampleSentence2:
        "Attempts to extrapolate likely human cancers from laboratory studies."
    },
    {
      id: "180",
      word: "contrition",
      type: "noun",
      definition: "the state of feeling remorseful and penitent.",
      exampleSentence: "She shed tears of contrition for her sins.",
      exampleSentence2: "Were her tears a true sign of contrition?"
    },
    {
      id: "181",
      word: "vitality",
      type: "noun",
      definition:
        "the state of being strong and active; energy. the power giving continuance of life, present in all living things.",
      exampleSentence:
        "Changes that will give renewed vitality to our democracy.",
      exampleSentence2: "The vitality of seeds."
    },
    {
      id: "182",
      word: "infirm",
      type: "adjective",
      definition:
        "not physically or mentally strong, especially through age or illness.",
      exampleSentence:
        "The clinic provides free care for elderly and infirm people who lack health insurance.",
      exampleSentence2:
        "The elderly and infirm have to be especially careful during the winter months."
    },
    {
      id: "183",
      word: "penitent",
      type: "adjective",
      definition:
        "feeling or showing sorrow and regret for having done wrong; repentant.",
      exampleSentence: "A penitent expression.",
      exampleSentence2:
        "She stood with her hands joined below her waist like a penitent child."
    },
    {
      id: "184",
      word: "pungent",
      type: "adjective",
      definition:
        "having a sharply strong taste or smell. (of comment, criticism, or humor) having a sharp and caustic quality.",
      exampleSentence: "The pungent smell of frying onions.",
      exampleSentence2:
        "Perhaps best known for its pungent smell and medicinal properties, ginkgo actually boasts an impressive backstory."
    },
    {
      id: "185",
      word: "prophylactic",
      type: "adjective, noun",
      definition:
        "intended to prevent disease. a medicine or course of action used to prevent disease.",
      exampleSentence: "Prophylactic measures.",
      exampleSentence2:
        "Vaccination remains one of the greatest prophylactics the world has ever known."
    },
    {
      id: "186",
      word: "reveler",
      type: "noun",
      definition:
        "a person who is enjoying themselves in a lively and noisy way.",
      exampleSentence:
        "The city's traditional Labor Day bash usually attracts more than 100,000 revelers.",
      exampleSentence2:
        "On the morning of July 4th, revelers dance in the streets starting from 4 am to 8 am."
    },
    {
      id: "187",
      word: "bleak",
      type: "adjective",
      definition:
        "(of a person or a person's expression) cold and forbidding. (of a building or room) charmless and inhospitable; dreary. (of the weather) cold and miserable. (of a situation or future prospect) not hopeful or encouraging; unlikely to have a favorable outcome.",
      exampleSentence:
        "He paints a bleak picture of a company that has lost its way.",
      exampleSentence2: "The future looks bleak."
    },
    {
      id: "188",
      word: "contrarian",
      type: "noun, adjective",
      definition:
        "a person who opposes or rejects popular opinion, especially in stock exchange dealing. opposing or rejecting popular opinion; going against current practice.",
      exampleSentence:
        "The comment came more from a contrarian disposition than moral conviction.",
      exampleSentence2:
        "As an investor, he's a contrarian, preferring to buy stocks when most people are selling."
    },
    {
      id: "189",
      word: "enmity",
      type: "noun",
      definition:
        "the state or feeling of being actively opposed or hostile to someone or something.",
      exampleSentence: "Decades of enmity between the two countries.",
      exampleSentence2:
        "What has earned her the enmity of so many peers is her indiscriminate outspokenness."
    },
    {
      id: "190",
      word: "attrition",
      type: "noun",
      definition:
        "the action or process of gradually reducing the strength or effectiveness of someone or something through sustained attack or pressure. the gradual reduction of a workforce by employees' leaving and not being replaced rather than by their being laid off. wearing away by friction; abrasion.",
      exampleSentence:
        "The council is trying to wear down the opposition by attrition.",
      exampleSentence2: "The skull shows attrition of the edges of the teeth."
    },
    {
      id: "191",
      word: "abrasion",
      type: "noun",
      definition: "the process of scraping or wearing something away.",
      exampleSentence: "The metal is resistant to abrasion.",
      exampleSentence2: "There were cuts and abrasions to the lips and jaw."
    },
    {
      id: "192",
      word: "dreary",
      type: "adjective",
      definition:
        "dull, bleak, and lifeless; depressing. having nothing likely to provide cheer, comfort, or interest",
      exampleSentence:
        "The dreary routine of working, eating, and trying to sleep.",
      exampleSentence2: "A cold, dreary morning."
    },
    {
      id: "193",
      word: "digress",
      type: "verb",
      definition: "leave the main subject temporarily in speech or writing.",
      exampleSentence:
        "The right to investigate, to digress, to stretch out beyond the basic requirements of the story is given only to the extremely talented.",
      exampleSentence2: "I have digressed a little from my original plan."
    },
    {
      id: "194",
      word: "asinine",
      type: "adjective",
      definition: "extremely stupid or foolish.",
      exampleSentence: "Lydia ignored his asinine remark.",
      exampleSentence2: "An asinine excuse."
    },
    {
      id: "195",
      word: "avarice",
      type: "noun",
      definition: "extreme greed for wealth or material gain.",
      exampleSentence: "He was rich beyond the dreams of avarice.",
      exampleSentence2:
        "Much of that corruption has been driven by the common temptations of avarice and power."
    },
    {
      id: "196",
      word: "abhorrent",
      type: "adjective",
      definition: "inspiring disgust and loathing; repugnant.",
      exampleSentence: "Racial discrimination was abhorrent to us all.",
      exampleSentence2: "A notion abhorrent to their philosophy."
    },
    {
      id: "197",
      word: "notion",
      type: "noun",
      definition:
        "a conception of or belief about something. an impulse or desire, especially one of a whimsical kind.",
      exampleSentence:
        "Children have different notions about the roles of their parents.",
      exampleSentence2: "She had a notion to call her friend at work."
    },
    {
      id: "198",
      word: "allude",
      type: "verb",
      definition:
        "suggest or call attention to indirectly; hint at. mention without discussing at length.",
      exampleSentence:
        "She had a way of alluding to Jean but never saying her name.",
      exampleSentence2: "We will allude briefly to the main points."
    },
    {
      id: "199",
      word: "avaricious",
      type: "adjective",
      definition:
        "having or showing an extreme greed for wealth or material gain.",
      exampleSentence: "A corrupt and avaricious government.",
      exampleSentence2:
        "He was regarded by all as an avaricious, griping old miser, whose whole life was devoted to the hoarding up of gold."
    },
    {
      id: "200",
      word: "arduous",
      type: "adjective",
      definition:
        "involving or requiring strenuous effort; difficult and tiring. hard to accomplish or achieve.",
      exampleSentence: "An arduous journey.",
      exampleSentence2: "An arduous task."
    },
    {
      id: "201",
      word: "atrocity",
      type: "noun",
      definition:
        "an extremely wicked or cruel act, typically one involving physical violence or injury. a highly unpleasant or distasteful object.",
      exampleSentence: "War atrocities.",
      exampleSentence2: "The house was a split-level atrocity."
    },
    {
      id: "202",
      word: "orator",
      type: "noun",
      definition:
        "a public speaker, especially one who is eloquent or skilled.",
      exampleSentence: "A theatrically effective orator.",
      exampleSentence2:
        "The orator delivered the funeral oration at the cathedral."
    },
    {
      id: "203",
      word: "continuity",
      type: "noun",
      definition:
        "the unbroken and consistent existence or operation of something over a period of time. the maintenance of continuous action and self-consistent detail in the various scenes of a movie or broadcast.",
      exampleSentence:
        "Pension rights accruing through continuity of employment.",
      exampleSentence2: "A continuity error."
    },
    {
      id: "204",
      word: "oration",
      type: "noun",
      definition:
        "a formal speech, especially one given on a ceremonial occasion. the style or manner in which a formal speech is given.",
      exampleSentence: "Pericles' famous funeral oration",
      exampleSentence2: "There is nothing quite like his messianic oration."
    },
    {
      id: "205",
      word: "paramount",
      type: "adjective",
      definition:
        "more important than anything else; supreme. having supreme power.",
      exampleSentence:
        "The interests of the child are of paramount importance.",
      exampleSentence2: "A paramount chief."
    },
    {
      id: "206",
      word: "susceptible",
      type: "adjective",
      definition:
        "likely or liable to be influenced or harmed by a particular thing. capable or admitting of.",
      exampleSentence:
        "Patients with liver disease may be susceptible to infection.",
      exampleSentence2: "The problem is not susceptible of a simple solution."
    },
    {
      id: "207",
      word: "ramification",
      type: "noun",
      definition:
        "a consequence of an action or event, especially when complex or unwelcome. ",
      exampleSentence: "Any change is bound to have legal ramifications.",
      exampleSentence2:
        "The new tax law proved to have many ramifications unforeseen by the lawmakers."
    },
    {
      id: "208",
      word: "conspicuous",
      type: "adjective",
      definition:
        "standing out so as to be clearly visible. attracting notice or attention.",
      exampleSentence: "He was very thin, with a conspicuous Adam's apple.",
      exampleSentence2: "He showed conspicuous bravery."
    },
    {
      id: "209",
      word: "inconspicuous",
      type: "adjective",
      definition:
        "not clearly visible or attracting attention; not conspicuous. ",
      exampleSentence:
        "She tried to remain as inconspicuous as possible so that no one would see her there.",
      exampleSentence2: "An inconspicuous red-brick building."
    },
    {
      id: "210",
      word: "invaluable",
      type: "adjective",
      definition: "extremely useful; indispensable.",
      exampleSentence: "An invaluable source of information.",
      exampleSentence2: "An invaluable member of the organization."
    },
    {
      id: "211",
      word: "overt",
      type: "adjective",
      definition:
        "done or shown openly; plainly or readily apparent, not secret or hidden.",
      exampleSentence: "An overt act of aggression.",
      exampleSentence2: "Overt hostility."
    },
    {
      id: "212",
      word: "covert",
      type: "adjective",
      definition: "not openly acknowledged or displayed.",
      exampleSentence: "Covert operations against the dictatorship.",
      exampleSentence2: "A covert alliance."
    },
    {
      id: "213",
      word: "clandestine",
      type: "adjective",
      definition:
        "kept secret or done secretively, especially because illicit.",
      exampleSentence: "A clandestine love affair.",
      exampleSentence2: "She deserved better than these clandestine meetings."
    },
    {
      id: "214",
      word: "indispensable",
      type: "adjective",
      definition: "absolutely necessary.",
      exampleSentence: "He made himself indispensable to the parish priest.",
      exampleSentence2:
        "Education is indispensable for the preservation of democracy."
    },
    {
      id: "215",
      word: "gaudy",
      type: "adjective",
      definition:
        "extravagantly bright or showy, typically so as to be tasteless.",
      exampleSentence: "Silver bows and gaudy ribbons.",
      exampleSentence2: "Gaudy costumes."
    },
    {
      id: "216",
      word: "illicit",
      type: "adjective",
      definition: "forbidden by law, rules, or custom.",
      exampleSentence: "Illicit drugs.",
      exampleSentence2: "They have been used to predict the emergence of schizophrenia or future illicit drug use by at-risk adolescents."
    },
    {
      id: "217",
      word: "surreptitious",
      type: "adjective",
      definition:
        "done, made, or acquired by stealth. acting or doing something clandestinely.",
      exampleSentence: "A surreptitious glance.",
      exampleSentence2: "They carried on a surreptitious affair."
    },
    {
      id: "218",
      word: "concatenate",
      type: "verb",
      definition: "link (things) together in a chain or series.",
      exampleSentence:
        "Some words may be concatenated, such that certain sounds are omitted.",
      exampleSentence2:
        "Concatenate several lists of instructions into a single master file."
    },
    {
      id: "219",
      word: "consolidate",
      type: "verb",
      definition:
        "make (something) physically stronger or more solid. combine (a number of things) into a single more effective or coherent whole.",
      exampleSentence:
        "All manufacturing activities have been consolidated in new premises.",
      exampleSentence2:
        "The first phase of the project is to consolidate the outside walls."
    },
    {
      id: "220",
      word: "redact",
      type: "verb",
      definition:
        "edit (text) for publication. censor or obscure (part of a text) for legal or security purposes.",
      exampleSentence:
        "A confidential memo which has been redacted from 25 pages to just one paragraph.",
      exampleSentence2:
        "The city redacted details about the legislation citing an exemption in state law for policies still under consideration."
    },
    {
      id: "221",
      word: "elicit",
      type: "verb",
      definition:
        "evoke or draw out (a response, answer, or fact) from someone in reaction to one's own actions or questions.",
      exampleSentence:
        "They invariably elicit exclamations of approval from guests.",
      exampleSentence2: "Hypnotism elicited his hidden fears."
    },
    {
      id: "222",
      word: "invariably",
      type: "adverb",
      definition: "in every case or on every occasion; always.",
      exampleSentence: "The meals here are invariably big and hearty.",
      exampleSentence2:
        "Their slacker son invariably gives the same response to the questions about his career plans."
    },
    {
      id: "223",
      word: "jargon",
      type: "noun",
      definition:
        "special words or expressions that are used by a particular profession or group and are difficult for others to understand.",
      exampleSentence: "Legal jargon.",
      exampleSentence2: "Sports jargon."
    },
    {
      id: "224",
      word: "spurious",
      type: "adjective",
      definition:
        "not being what it purports to be; false or fake. (of a line of reasoning) apparently but not actually valid.",
      exampleSentence: "Separating authentic and spurious claims.",
      exampleSentence2: "This spurious reasoning results in nonsense."
    },
    {
      id: "225",
      word: "opaque",
      type: "adjective",
      definition:
        "not able to be seen through; not transparent. (especially of language) hard or impossible to understand; unfathomable.",
      exampleSentence: "Technical jargon that was opaque to her.",
      exampleSentence2:
        "The bottle was made of opaque glass so that the contents could not be seen."
    },
    {
      id: "226",
      word: "excrement",
      type: "noun",
      definition: "waste matter discharged from the bowels; feces.",
      exampleSentence:
        "An ordinance that requires dog walkers to remove their animal's excrement from city streets.",
      exampleSentence2:
        "Children being bitten by scorpions, rats and snakes; hundreds being forced to use a single shower; the stench of human excrement never far away; and food shortages becoming the norm."
    },
    {
      id: "227",
      word: "adverse",
      type: "adjective",
      definition: "preventing success or development; harmful; unfavorable.",
      exampleSentence: "Taxes are having an adverse effect on production.",
      exampleSentence2: "Adverse criticism."
    },
    {
      id: "228",
      word: "exacerbate",
      type: "verb",
      definition: "make (a problem, bad situation, or negative feeling) worse.",
      exampleSentence:
        "The exorbitant cost of land in urban areas only exacerbated the problem.",
      exampleSentence2: "The new law only exacerbates the problem."
    },
    {
      id: "229",
      word: "crux",
      type: "noun",
      definition:
        "The decisive or most important point at issue. a particular point of difficulty.",
      exampleSentence: "The crux of the matter is that attitudes have changed.",
      exampleSentence2:
        "The crux of the problem is that the school's current budget is totally inadequate."
    },
    {
      id: "230",
      word: "crucible",
      type: "noun",
      definition:
        "a situation of severe trial, or in which different elements interact, leading to the creation of something new. a ceramic or metal container in which metals or other substances may be melted or subjected to very high temperatures.",
      exampleSentence: "Their relationship was forged in the crucible of war.",
      exampleSentence2: "He's ready to face the crucible of the Olympics."
    },
    {
      id: "231",
      word: "nouveau riche",
      type: "adjective, noun",
      definition:
        "people who have recently acquired wealth, typically those perceived as ostentatious or lacking in good taste. relating to or characteristic of the nouveau riche.",
      exampleSentence: "Nouveau-riche social climbers.",
      exampleSentence2:
        "A nouveau riche who is reportedly using his money to buy his way into Palm Beach society."
    },
    {
      id: "232",
      word: "precedent",
      type: "adjective, noun",
      definition:
        "an earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances. preceding in time, order, or importance.",
      exampleSentence:
        "There are substantial precedents for using interactive media in training.",
      exampleSentence2: "A precedent case."
    },
    {
      id: "233",
      word: "preferential",
      type: "adjective",
      definition:
        "of or involving preference or partiality; constituting a favor or privilege.",
      exampleSentence:
        "Preferential interest rates may be offered to employees.",
      exampleSentence2:
        "Powerful people who demand preferential treatment from politicians."
    },
    {
      id: "234",
      word: "perpetuity",
      type: "noun",
      definition:
        "the state or quality of lasting forever. a restriction making an estate inalienable perpetually or for a period beyond certain limits fixed by law. a bond or other security with no fixed maturity date.",
      exampleSentence: "He did not believe in the perpetuity of military rule.",
      exampleSentence2:
        "If the home is sold at a later date, the owners keep any appreciation on the structure, while the land remains in the city’s hands in perpetuity."
    },
    {
      id: "235",
      word: "fallacious",
      type: "adjective",
      definition: "based on a mistaken belief.",
      exampleSentence: "A fallacious arguments.",
      exampleSentence2: "A fallacious conclusion."
    },
    {
      id: "236",
      word: "ignoble",
      type: "adjective",
      definition:
        "not honorable in character or purpose. of humble origin or social status.",
      exampleSentence: "Ignoble feelings of intense jealousy.",
      exampleSentence2:
        "Such an ignoble act is completely unworthy of a military officer."
    },
    {
      id: "237",
      word: "ornate",
      type: "adjective",
      definition:
        "made in an intricate shape or decorated with complex patterns. (of literary style) using unusual words and complex constructions.",
      exampleSentence: "An ornate wrought-iron railing.",
      exampleSentence2: "Peculiarly ornate and metaphorical language."
    },
    {
      id: "238",
      word: "extremities",
      type: "noun",
      definition: "the hands and feet.",
      exampleSentence: "Tingling and numbness in the extremities.",
      exampleSentence2: "She began to regain some feeling in her extremities."
    },
    {
      id: "239",
      word: "ordinance",
      type: "noun",
      definition:
        "a piece of legislation enacted by a municipal authority. an authoritative order; a decree.",
      exampleSentence:
        "A city ordinance banned smoking in nearly all types of restaurants.",
      exampleSentence2:
        "A city ordinance forbids construction work to start before 8 a.m."
    },
    {
      id: "240",
      word: "averse",
      type: "adjective",
      definition: "having a strong dislike of or opposition to something.",
      exampleSentence: "As a former CIA director, he is not averse to secrecy.",
      exampleSentence2: "A conservative risk-averse investor."
    },
    {
      id: "241",
      word: "exultation",
      type: "noun",
      definition: "a feeling of triumphant elation or jubilation; rejoicing.",
      exampleSentence: "She laughs in exultation.",
      exampleSentence2: "The crowd cheered in exultation."
    },
    {
      id: "242",
      word: "elation",
      type: "noun",
      definition: "great happiness and exhilaration.",
      exampleSentence:
        "Richard's elation at regaining his health was short-lived.",
      exampleSentence2:
        "Most people can't imagine the kind of elation that comes with winning a super lottery's grand prize, but they're dying to find out."
    },
    {
      id: "243",
      word: "cordial",
      type: "adjective",
      definition: "warm and friendly. strongly felt.",
      exampleSentence: "The atmosphere was cordial and relaxed.",
      exampleSentence2: "I earned his cordial loathing."
    },
    {
      id: "244",
      word: "relegate",
      type: "verb",
      definition: "consign or dismiss to an inferior rank or position.",
      exampleSentence:
        "They aim to prevent women from being relegated to a secondary role.",
      exampleSentence2:
        "In the past when African-American men worked as sailors aboard ships, they were often relegated to jobs as cooks and stewards."
    },
    {
      id: "245",
      word: "impunity",
      type: "noun",
      definition:
        "exemption from punishment or freedom from the injurious consequences of an action.",
      exampleSentence:
        "The impunity enjoyed by military officers implicated in civilian killings.",
      exampleSentence2:
        "She thought that her money and power gave her the right to ignore the law with impunity."
    },
    {
      id: "246",
      word: "exasperate",
      type: "verb",
      definition: "irritate and frustrate (someone) intensely.",
      exampleSentence: "This futile process exasperates prison officials.",
      exampleSentence2: "He was exasperated by the senseless delays."
    },
    {
      id: "247",
      word: "exorbitant",
      type: "adjective",
      definition: "(of a price or amount charged) unreasonably high.",
      exampleSentence:
        "The hackers who had left the note subsequently asked for exorbitant sums of money to release the city’s data.",
      exampleSentence2: "The exorbitant price of tickets."
    },
    {
      id: "248",
      word: "constitute",
      type: "verb",
      definition:
        "(of people or things) combine to form (a whole). be or be equivalent to (something). give legal or constitutional form to (an institution); establish by law.",
      exampleSentence: "His failure to act constituted a breach of duty.",
      exampleSentence2:
        "Single parents constitute a great proportion of the poor."
    },
    {
      id: "249",
      word: "partiality",
      type: "noun",
      definition:
        "unfair bias in favor of one thing or person compared with another; favoritism. a particular liking or fondness for something.",
      exampleSentence: "An attack on the partiality of judges.",
      exampleSentence2:
        "She spoke openly, not concealing her partiality for him."
    },
    {
      id: "250",
      word: "flout",
      type: "verb",
      definition: "openly disregard (a rule, law or convention).",
      exampleSentence:
        "These same companies still flout basic ethical practices.",
      exampleSentence2: "Flouting the rules."
    },
    {
      id: "251",
      word: "flaunt",
      type: "verb",
      definition:
        "display (something) ostentatiously, especially in order to provoke envy or admiration or to show defiance. dress or behave in a sexually provocative way.",
      exampleSentence: "Newly rich consumers eager to flaunt their prosperity.",
      exampleSentence2: "A chance to flaunt clothes, bodies, and sexuality."
    },
    {
      id: "252",
      word: "impartial",
      type: "adjective",
      definition: "treating all rivals or disputants equally; fair and just.",
      exampleSentence: "Independent and impartial advice.",
      exampleSentence2: "An impartial judge."
    },
    {
      id: "253",
      word: "insinuate",
      type: "verb",
      definition:
        "suggest or hint (something bad or reprehensible) in an indirect and unpleasant way. slide (oneself or a thing) slowly and smoothly into a position. maneuver oneself into (a position of favor or office) by subtle manipulation.",
      exampleSentence: "He was insinuating that I had no self-control.",
      exampleSentence2:
        "She seemed to be taking over, insinuating herself into the family."
    },
    {
      id: "254",
      word: "fundamentalism",
      type: "noun",
      definition:
        "a form of a religion, especially Islam or Protestant Christianity, that upholds belief in the strict, literal interpretation of scripture. strict adherence to the basic principles of any subject or discipline.",
      exampleSentence: "Free-market fundamentalism.",
      exampleSentence2: "A minister noted for his strict fundamentalism."
    },
    {
      id: "255",
      word: "expediency",
      type: "noun",
      definition:
        "the quality of being convenient and practical despite possibly being improper or immoral; convenience.",
      exampleSentence: "An act of political expediency.",
      exampleSentence2: "The expediency of such a plan is questionable."
    },
    {
      id: "256",
      word: "despot",
      type: "noun",
      definition:
        "a ruler or other person who holds absolute power, typically one who exercises it in a cruel or oppressive way. ",
      exampleSentence: "We must not support such despots by arming them.",
      exampleSentence2: "Tyrannical despots."
    },
    {
      id: "257",
      word: "conciliate",
      type: "verb",
      definition:
        "stop (someone) from being angry or discontented; placate; pacify. act as a mediator.",
      exampleSentence: "Concessions were made to conciliate the peasantry.",
      exampleSentence2: "He sought to conciliate in the dispute."
    },
    {
      id: "258",
      word: "salutary",
      type: "adjective",
      definition:
        "(especially with reference to something unwelcome or unpleasant) producing good effects; beneficial. producing a beneficial effect",
      exampleSentence: "A salutary reminder of where we came from.",
      exampleSentence2: "Salutary influences."
    },
    {
      id: "259",
      word: "toil",
      type: "noun, verb",
      definition:
        "work extremely hard or incessantly. exhausting physical labor. move slowly and with difficulty.",
      exampleSentence: "We toiled away.",
      exampleSentence2: "A life of toil."
    },
    {
      id: "260",
      word: "incessant",
      type: "adjective",
      definition:
        "(of something regarded as unpleasant) continuing without pause or interruption.",
      exampleSentence: "The incessant beat of the music.",
      exampleSentence2: "Incessant rain fell for several days."
    },
    {
      id: "261",
      word: "ignominy",
      type: "noun",
      definition: "public shame or disgrace.",
      exampleSentence: "The ignominy of being imprisoned.",
      exampleSentence2:
        "She had to endure the ignominy of being forced to resign."
    },
    {
      id: "262",
      word: "despotism",
      type: "noun",
      definition:
        "the exercise of absolute power, especially in a cruel and oppressive way. a country or political system where the ruler holds absolute power.",
      exampleSentence: "The King's arbitrary despotism.",
      exampleSentence2:
        "An excess of law is despotism, from which free men revolt."
    },
    {
      id: "263",
      word: "purview",
      type: "noun",
      definition:
        "the scope of the influence or concerns of something. range of experience or thought.",
      exampleSentence:
        "Such a case might be within the purview of the legislation.",
      exampleSentence2:
        "Social taboos meant that little information was likely to come within the purview of women generally."
    },
    {
      id: "264",
      word: "shrill",
      type: "adjective, noun, verb",
      definition:
        "(of a voice or sound) high-pitched and piercing. make a shrill noise. a shrill sound or cry.",
      exampleSentence: "A shrill laugh.",
      exampleSentence2: "A piercing whistle shrilled through the night air."
    },
    {
      id: "265",
      word: "facetious",
      type: "adjective",
      definition:
        "treating serious issues with deliberately inappropriate humor; flippant.",
      exampleSentence: "A facetious remark.",
      exampleSentence2:
        "I  am unsure if you are being facetious or serious when you say your husband hates being told what to do, “especially with parenting.”"
    },
    {
      id: "266",
      word: "impropriety",
      type: "noun",
      definition:
        "a failure to observe standards or show due honesty or modesty; improper language, behavior, or character.",
      exampleSentence:
        "She was scandalized at the impropriety of the question.",
      exampleSentence2: "He has a reputation for impropriety."
    },
    {
      id: "267",
      word: "iridescent",
      type: "adjective",
      definition:
        "showing luminous colors that seem to change when seen from different angles.",
      exampleSentence: "The drake's head has an iridescent purple sheen.",
      exampleSentence2:
        "Continue to the famed Blue Lagoon to soak in the hot spring’s iridescent blue waters."
    },
    {
      id: "268",
      word: "monolithic",
      type: "adjective",
      definition:
        "(of an organization or system) large, powerful, and intractably indivisible and uniform. constituting a massive undifferentiated and often rigid whole",
      exampleSentence:
        "Rejecting any move toward a monolithic European superstate.",
      exampleSentence2: "A monolithic society."
    },
    {
      id: "269",
      word: "staunch",
      type: "adjective",
      definition:
        "loyal and committed in attitude. (of a wall) of strong or firm construction.",
      exampleSentence: "A staunch supporter of the antinuclear lobby.",
      exampleSentence2: "A staunch friend."
    },
    {
      id: "270",
      word: "vie",
      type: "verb",
      definition:
        "compete eagerly with someone in order to do or achieve something.",
      exampleSentence: "Rival mobs vying for control of the liquor business.",
      exampleSentence2:
        "They are vying to win the championship for the third year in a row."
    },
    {
      id: "271",
      word: "brevity",
      type: "noun",
      definition:
        "concise and exact use of words in writing or speech. shortness of time.",
      exampleSentence: "The brevity of human life.",
      exampleSentence2:
        "All of what he said was true but the impatience was palpable in the brevity of his answers."
    },
    {
      id: "272",
      word: "consort",
      type: "noun, verb",
      definition:
        "a wife, husband, or companion, in particular the spouse of a reigning monarch. habitually associate with (someone), typically with the disapproval of others.",
      exampleSentence: "You chose to consort with the enemy.",
      exampleSentence2: "Consorting with criminals."
    },
    {
      id: "273",
      word: "assuage",
      type: "verb",
      definition:
        "make (an unpleasant feeling) less intense. satisfy (an appetite or desire).",
      exampleSentence: "The letter assuaged the fears of most members.",
      exampleSentence2:
        "An opportunity occurred to assuage her desire for knowledge."
    },
    {
      id: "274",
      word: "puerile",
      type: "adjective",
      definition: "childishly silly and trivial.",
      exampleSentence: "You're making puerile excuses.",
      exampleSentence2: "Puerile remarks."
    },
    {
      id: "275",
      word: "enthralled",
      type: "verb",
      definition: "capture the fascinated attention of.",
      exampleSentence:
        "She had been so enthralled by the adventure that she had hardly noticed the cold.",
      exampleSentence2:
        "He built a reputation as a brash risk-taker who enthralled audiences that would tune in just to see whether he’d win or crash trying."
    },
    {
      id: "276",
      word: "dour",
      type: "adjective",
      definition:
        "STERN, HARSH. relentlessly severe, stern, or gloomy in manner or appearance.",
      exampleSentence: "A hard, dour, humorless fanatic.",
      exampleSentence2: "She had a dour expression on her face."
    },
    {
      id: "277",
      word: "epithet",
      type: "noun",
      definition:
        "an adjective or descriptive phrase expressing a quality characteristic of the person or thing mentioned. a disparaging or abusive word or phrase",
      exampleSentence: "Many were offended by her use of racial epithets.",
      exampleSentence2:
        "His charitable works have earned him the epithet “Mr. Philanthropy.”"
    },
    {
      id: "278",
      word: "prominent",
      type: "adjective",
      definition:
        "important; famous. projecting from something; protuberant. situated so as to catch the attention; noticeable.",
      exampleSentence: "She was a prominent member of the city council.",
      exampleSentence2: "The new housing developments are prominent landmarks."
    },
    {
      "id": "279",
      "word": "eccentric",
      "type": "adjective, noun",
      "definition": "(of a person or their behavior) unconventional and slightly strange. a person of unconventional and slightly strange views or behavior.",
      "exampleSentence": "My favorite aunt is very eccentric.",
      "exampleSentence2": "He enjoys a colorful reputation as an engaging eccentric."
  },
  {
      "id": "280",
      "word": "respite",
      "type": "noun",
      "definition": "a short period of rest or relief from something difficult or unpleasant.",
      "exampleSentence": "The refugee encampments will provide some respite from the suffering.",
      "exampleSentence2": "But in the middle of each semester there came a short respite, separate from the traditional holidays like Thanksgiving and Christmas."
  },
  {
      "id": "281",
      "word": "reprieve",
      "type": "noun, verb",
      "definition": "cancel or postpone the punishment of (someone, especially someone condemned to death). a cancellation or postponement of a punishment. a temporary escape from an undesirable fate or unpleasant situation.",
      "exampleSentence": "Under the new regime, prisoners under sentence of death were reprieved.",
      "exampleSentence2": "A mother who faced eviction has been given a reprieve."
  },
  {
      "id": "282",
      "word": "endearment",
      "type": "noun",
      "definition": "a word or phrase expressing love or affection. love or affection.",
      "exampleSentence": "A term of endearment.",
      "exampleSentence2": "Two lovers whispering endearments to each other."
  },
  {
      "id": "283",
      "word": "vagrant",
      "type": "adjective, noun",
      "definition": "a person without a settled home or regular work who wanders from place to place and lives by begging. characteristic relating to or living the life of a vagrant.",
      "exampleSentence": "Vagrant beggars.",
      "exampleSentence2": "In an interview, Liang said, “Air should be the most valueless commodity, free to breathe for any vagrant or beggar.”"
  },
  {
      "id": "284",
      "word": "bountiful",
      "type": "adjective",
      "definition": "large in quantity; abundant. giving generously.",
      "exampleSentence": "The ocean provided a bountiful supply of fresh food.",
      "exampleSentence2": "He was exceedingly bountiful to persons in distress."
  },
  {
      "id": "285",
      "word": "dilapidation",
      "type": "noun",
      "definition": "the state or process of falling into decay or being in disrepair. repairs required during or at the end of a tenancy or lease.",
      "exampleSentence": "The mill was in a state of dilapidation.",
      "exampleSentence2": "What strange old nests of ruin, what marvellous homes of solitude and dilapidation, did we not wander into!"
  },
  {
      "id": "286",
      "word": "antithetical",
      "type": "adjective",
      "definition": "directly opposed or contrasted; mutually incompatible. ",
      "exampleSentence": "People whose religious beliefs are antithetical to mine.",
      "exampleSentence2": "The antithetical forces of good and evil."
  },
  {
      "id": "287",
      "word": "esoteric",
      "type": "adjective",
      "definition": "intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.",
      "exampleSentence": "Esoteric philosophical debates.",
      "exampleSentence2": "A body of esoteric legal doctrine."
  },
  {
      "id": "288",
      "word": "receptacle",
      "type": "noun",
      "definition": "an object or space used to contain something. an electrical outlet into which the plug of an electrical device may be inserted.",
      "exampleSentence": "Trash receptacles.",
      "exampleSentence2": "She used the box as a receptacle for her jewelry."
  },
  {
      "id": "289",
      "word": "crass",
      "type": "adjective",
      "definition": "lacking sensitivity, refinement, or intelligence. being beneath one's dignity",
      "exampleSentence": "The crass assumptions that men make about women.",
      "exampleSentence2": "Crass concerns of daily life."
  },
  {
      "id": "290",
      "word": "enamor",
      "type": "verb",
      "definition": "be filled with a feeling of love for. have a liking or admiration for.",
      "exampleSentence": "It is not difficult to see why Edward is enamored of her.",
      "exampleSentence2": "She was truly enamored of New York."
  },
  {
      "id": "291",
      "word": "extricate",
      "type": "verb",
      "definition": "free (someone or something) from a constraint or difficulty.",
      "exampleSentence": "He was trying to extricate himself from official duties.",
      "exampleSentence2": "Spill a protein shake on the kitchen runner, and the aftermath becomes an Instagram stories tutorial on how to extricate chocolate from a rug."
  },
  {
      "id": "292",
      "word": "kindle",
      "type": "verb",
      "definition": "light or set on fire. arouse or inspire (an emotion or feeling). become impassioned or excited.",
      "exampleSentence": "He kindled a fire of dry grass.",
      "exampleSentence2": "The result was more than 10,000 new fires spreading in the Brazilian rainforest, kindled by drought that drives wildfires raging from Russia to Africa."
  },
  {
      "id": "293",
      "word": "impetus",
      "type": "noun",
      "definition": "the force or energy with which a body moves. the force that makes something happen or happen more quickly.",
      "exampleSentence": "Hit the booster coil before the flywheel loses all its impetus.",
      "exampleSentence2": "The crisis of the 1860s provided the original impetus for the settlements."
  },
  {
      "id": "294",
      "word": "indisposition",
      "type": "noun",
      "definition": "mild illness. lack of enthusiasm or inclination; reluctance.",
      "exampleSentence": "She was chiefly confined by indisposition to her bedroom.",
      "exampleSentence2": "Indisposition to motion, exertion, or change."
  },
  {
      "id": "295",
      "word": "indelible",
      "type": "adjective",
      "definition": "(of ink or a pen) making marks that cannot be removed. not able to be forgotten or removed. UNFORGETTABLE, MEMORABLE",
      "exampleSentence": "His story made an indelible impression on me.",
      "exampleSentence2": "An indelible performance."
  },
  {
      "id": "296",
      "word": "superlative",
      "type": "adjective, noun",
      "definition": "of the highest quality or degree. (of an adjective or adverb) expressing the highest or a very high degree of a quality (e.g. bravest, most fiercely ). an exaggerated or hyperbolical expression of praise. something or someone embodying excellence.",
      "exampleSentence": "The critics ran out of superlatives to describe him.",
      "exampleSentence2": "The superlative form of “nice” is “nicest”; the superlative form of “bad” is “worst”; the superlative form of “interesting” is “most interesting.”"
  },
  {
      "id": "297",
      "word": "innuendo",
      "type": "noun",
      "definition": "an allusive or oblique remark or hint, typically a suggestive or disparaging one.",
      "exampleSentence": "She's always making sly innuendoes.",
      "exampleSentence2": "He became the butt for their smutty innuendoes."
  },
  {
      "id": "298",
      "word": "polemic",
      "type": "noun",
      "definition": "a strong verbal or written attack on someone or something. the art or practice of engaging in controversial debate or dispute.",
      "exampleSentence": "His polemic against the cultural relativism of the Sixties.",
      "exampleSentence2": "The history of science has become embroiled in religious polemics."
  },
  {
      "id": "299",
      "word": "salacious",
      "type": "adjective",
      "definition": "having or conveying undue or inappropriate interest in sexual matters.",
      "exampleSentence": "Salacious stories.",
      "exampleSentence2": "Salacious lyrics."
  },
  {
      "id": "300",
      "word": "desecrate",
      "type": "verb",
      "definition": "treat (a sacred place or thing) with violent disrespect; violate.",
      "exampleSentence": "More than 300 graves were desecrated.",
      "exampleSentence2": "A cemetery desecrated by vandals."
  },
  {
      "id": "301",
      "word": "ambivalent",
      "type": "adjective",
      "definition": "having mixed feelings or contradictory ideas about something or someone.",
      "exampleSentence": "Some loved her, some hated her, few were ambivalent about her.",
      "exampleSentence2": "He spoke ambivalently about his military experiences."
  },
  {
      "id": "302",
      "word": "sacrilege",
      "type": "noun",
      "definition": "violation or misuse of what is regarded as sacred.",
      "exampleSentence": "Eggs are another contentious issue, considered sacrilege by some and a binder by others.",
      "exampleSentence2": "Putting ecclesiastical vestments to secular use was considered sacrilege."
  },
  {
      "id": "303",
      "word": "tacit",
      "type": "adjective",
      "definition": "understood or implied without being stated.",
      "exampleSentence": "Your silence may be taken to mean tacit agreement.",
      "exampleSentence2": "Tacit consent."
  },
  {
      "id": "304",
      "word": "illustrious",
      "type": "adjective",
      "definition": "well known, respected, and admired for past achievements.",
      "exampleSentence": "His illustrious predecessor.",
      "exampleSentence2": "Both of those events saw the Americans settle for bronze, and they are remembered as shameful lows in the program’s illustrious history."
  },
  {
      "id": "305",
      "word": "emphatically",
      "type": "adverb",
      "definition": "in a forceful way. without doubt; clearly.",
      "exampleSentence": "Jane, though born in California, feels emphatically Canadian.",
      "exampleSentence2": "That question was answered emphatically in the season opener, as the Badgers dominated South Florida up front on Friday in a 49-0 win on the road."
  },
  {
      "id": "306",
      "word": "oblique",
      "type": "adjective, noun",
      "definition": "neither parallel nor at a right angle to a specified or implied line; slanting. denoting any case other than the nominative or vocative. a muscle neither parallel nor perpendicular to the long axis of a body or limb. not straight or direct, as a course.",
      "exampleSentence": "We sat on the settee oblique to the fireplace.",
      "exampleSentence2": "An oblique view of baseball full of hijinks, havoc, and humor, this is fandom to the extreme."
  },
  {
      "id": "307",
      "word": "allusive",
      "type": "adjective",
      "definition": "(of a remark or reference) working by suggestion rather than explicit mention.  implying or indirectly suggesting something.",
      "exampleSentence": "Eboi’s recent album included a glossary of lyrics for Swedes who might not understand his allusive mix of slang and dialects.",
      "exampleSentence2": "“The Waste Land,” Eliot’s allusive masterpiece about spiritual aridity, initially sprang to mind."
  },
  {
      "id": "308",
      "word": "prolific",
      "type": "adjective",
      "definition": "present in large numbers or quantities; plentiful. (of a plant, animal, or person) producing much fruit or foliage or many offspring.",
      "exampleSentence": "Mahogany was once prolific in the tropical forests.",
      "exampleSentence2": "In captivity tigers are prolific breeders."
  },
  {
      "id": "309",
      "word": "contentious",
      "type": "adjective",
      "definition": "causing or likely to cause an argument; controversial. involving heated argument. (of a person) given to arguing or provoking argument.",
      "exampleSentence": "A contentious issue.",
      "exampleSentence2": "The socioeconomic plan had been the subject of contentious debate."
  },
  {
      "id": "310",
      "word": "harangue",
      "type": "verb",
      "definition": "lecture (someone) at length in an aggressive and critical manner. a speech addressed to a public assembly",
      "exampleSentence": "The kind of guy who harangued total strangers about PCB levels in whitefish.",
      "exampleSentence2": "The occasion was a gala dinner during which Pinter began to harangue some unfortunate guest for his political views."
  },
  {
      "id": "311",
      "word": "vindication",
      "type": "noun",
      "definition": "the action of clearing someone of blame or suspicion. proof that someone or something is right, reasonable, or justified.",
      "exampleSentence": "I intend to work to ensure my full vindication.",
      "exampleSentence2": "The results were interpreted as vindication of the company's policy."
  },
  {
      "id": "312",
      "word": "unequivocal",
      "type": "adjective",
      "definition": "leaving no doubt; unambiguous.",
      "exampleSentence": "An unequivocal answer.",
      "exampleSentence2": "The cosigner of a note gives unequivocal assurance that it will be paid when due."
  },
  {
      "id": "313",
      "word": "quibble",
      "type": "noun, verb",
      "definition": "a slight objection or criticism about a trivial matter. argue or raise objections about a trivial matter.",
      "exampleSentence": "The only quibble about this book is the price.",
      "exampleSentence2": "They are always quibbling about the amount they are prepared to pay."
  },
  {
      "id": "314",
      "word": "abdicate",
      "type": "verb",
      "definition": "(of a monarch) renounce one's throne. fail to fulfill or undertake (a responsibility or duty).",
      "exampleSentence": "In 1918 Kaiser Wilhelm abdicated as German emperor.",
      "exampleSentence2": "The government was accused of abdicating its responsibility."
  },
  {
      "id": "315",
      "word": "sordid",
      "type": "adjective",
      "definition": "involving ignoble actions and motives; arousing moral distaste and contempt. dirty or squalid.",
      "exampleSentence": "The story paints a sordid picture of bribes and scams.",
      "exampleSentence2": "The overcrowded housing conditions were sordid and degrading."
  },
  {
      "id": "316",
      "word": "prohibitively",
      "type": "adverb",
      "definition": "in a way that forbids or prevents something. used to emphasize a cost that is so high as to prevent something being done or bought.",
      "exampleSentence": "She mouthed \"no\" and waved her hands prohibitively.",
      "exampleSentence2": "Most of the products are priced prohibitively."
  },
  {
      "id": "317",
      "word": "egregious",
      "type": "adjective",
      "definition": "outstandingly bad; shocking.",
      "exampleSentence": "Egregious abuses of copyright.",
      "exampleSentence2": "Egregious errors."
  },
  {
      "id": "318",
      "word": "spate",
      "type": "noun",
      "definition": "a large number of similar things or events appearing or occurring in quick succession.",
      "exampleSentence": "A spate of attacks on travelers.",
      "exampleSentence2": "A spate of burglaries."
  },
  {
      "id": "319",
      "word": "traverse",
      "type": "verb",
      "definition": "travel across or through. move (something) back and forth or sideways.",
      "exampleSentence": "He traversed the forest.",
      "exampleSentence2": "A probe is traversed along the tunnel."
  },
  {
      "id": "320",
      "word": "lament",
      "type": "noun, verb",
      "definition": "a passionate expression of grief or sorrow. mourn (a person's loss or death).",
      "exampleSentence": "His mother's night-long laments for his father.",
      "exampleSentence2": "He was lamenting the death of his infant daughter."
  },
  {
      "id": "321",
      "word": "candor",
      "type": "noun",
      "definition": "the quality of being open and honest in expression; frankness.",
      "exampleSentence": "A man of refreshing candor.",
      "exampleSentence2": "He spoke with a degree of candor unusual in political life."
  },
  {
      "id": "322",
      "word": "apprise",
      "type": "verb",
      "definition": "inform or tell (someone).",
      "exampleSentence": "I thought it right to apprise Chris of what had happened.",
      "exampleSentence2": "They apprised him of his rights."
  },
  {
      "id": "323",
      "word": "disconcerting",
      "type": "adjective",
      "definition": "causing one to feel unsettled. Tending to cause discomfort, uneasiness or alarm; troubling; upsetting.",
      "exampleSentence": "He had a disconcerting habit of offering jobs to people he met at dinner parties.",
      "exampleSentence2": "Even with a safety harness, losing one's grip that high up is disconcerting."
  },
  {
      "id": "324",
      "word": "acrimonious",
      "type": "adjective",
      "definition": "(typically of speech or a debate) angry and bitter.",
      "exampleSentence": "An acrimonious dispute about wages.",
      "exampleSentence2": "An acrimonious answer."
  },
  {
      "id": "325",
      "word": "florid",
      "type": "adjective",
      "definition": "having a red or flushed complexion. elaborately or excessively intricate or complicated.",
      "exampleSentence": "A stout man with a florid face.",
      "exampleSentence2": "A florid complexion."
  },
  {
      "id": "326",
      "word": "anomalous",
      "type": "adjective",
      "definition": "deviating from what is standard, normal, or expected.",
      "exampleSentence": "An anomalous situation.",
      "exampleSentence2": "Researchers could not explain the anomalous test results."
  },
  {
      "id": "327",
      "word": "dilettante",
      "type": "noun",
      "definition": "a person who cultivates an area of interest, such as the arts, without real commitment or knowledge. a person having a superficial interest in an art or a branch of knowledge : DABBLER",
      "exampleSentence": "A wealthy literary dilettante.",
      "exampleSentence2": "I finally feel like I can call myself a writer now, rather than writing being just something I do on the side, as a dilettante."
  },
  {
      "id": "328",
      "word": "culpability",
      "type": "noun",
      "definition": "responsibility for a fault or wrong; blame.",
      "exampleSentence": "A level of moral culpability.",
      "exampleSentence2": "He refuses to acknowledge his own culpability."
  },
  {
      "id": "329",
      "word": "ephemeral",
      "type": "adjective",
      "definition": "lasting for a very short time. (chiefly of plants) having a very short life cycle.",
      "exampleSentence": "Fashions are ephemeral.",
      "exampleSentence2": "Ephemeral pleasures."
  },
  {
      "id": "330",
      "word": "loquacious",
      "type": "adjective",
      "definition": "tending to talk a great deal; talkative.",
      "exampleSentence": "Never loquacious, Sarah was now totally lost for words.",
      "exampleSentence2": "A loquacious dinner guest."
  },
  {
      "id": "331",
      "word": "inutile",
      "type": "adjective",
      "definition": "useless; pointless. of no use or service.",
      "exampleSentence": "There is no necessity of disputing the daring of this scheme, and just as inutile would be a discussion of its ethics.",
      "exampleSentence2": "Next she found the telephone wire cut and the speaking tube battered and inutile."
  },
  {
      "id": "332",
      "word": "indefatigable",
      "type": "adjective",
      "definition": "(of a person or their efforts) persisting tirelessly.",
      "exampleSentence": "An indefatigable defender of human rights.",
      "exampleSentence2": "An indefatigable worker."
  },
  {
      "id": "333",
      "word": "countermand",
      "type": "noun, verb",
      "definition": "revoke (an order). an order revoking a previous one.",
      "exampleSentence": "An order to arrest the strike leaders had been countermanded.",
      "exampleSentence2": "I forthwith mounted, and went off, lest I should receive a countermand."
  },
  {
      "id": "334",
      "word": "hurtle",
      "type": "verb",
      "definition": "move or cause to move at a great speed, typically in a wildly uncontrolled manner.",
      "exampleSentence": "A runaway car hurtled toward them.",
      "exampleSentence2": "The sound was deafening, as tons of snow hurtled down the mountain."
  },
  {
      "id": "335",
      "word": "vapid",
      "type": "adjective",
      "definition": "offering nothing that is stimulating or challenging. lacking flavor, zest, interest, animation, or spirit",
      "exampleSentence": "Tuneful but vapid musical comedies.",
      "exampleSentence2": "A gossipy, vapid woman, obsessed by her own elegance."
  },
  {
      "id": "336",
      "word": "auspicious",
      "type": "adjective",
      "definition": "conducive to success; favorable. giving or being a sign of future success.",
      "exampleSentence": "It was not the most auspicious moment to hold an election.",
      "exampleSentence2": "This is a tough setup for what, just days ago, was starting to look like an auspicious time for investors who believed U.S. yields were bottoming out."
  },
  {
      "id": "337",
      "word": "sullen",
      "type": "adjective",
      "definition": "bad-tempered and sulky; gloomy. (of the sky) full of dark clouds.",
      "exampleSentence": "A sullen pout.",
      "exampleSentence2": "A sullen crowd."
  },
  {
      "id": "338",
      "word": "pernicious",
      "type": "adjective",
      "definition": "having a harmful effect, especially in a gradual or subtle way.",
      "exampleSentence": "The pernicious influences of the mass media.",
      "exampleSentence2": "There are subtler biases here as well, not all of them pernicious."
  },
  {
      "id": "339",
      "word": "curtail",
      "type": "verb",
      "definition": "reduce in extent or quantity; impose a restriction on.",
      "exampleSentence": "Civil liberties were further curtailed.",
      "exampleSentence2": "Some school activities are being curtailed due to a lack of funds."
  },
  {
      "id": "340",
      "word": "diametrically",
      "type": "adjective",
      "definition": "(with reference to opposition) completely; directly.",
      "exampleSentence": "Two diametrically opposed viewpoints.",
      "exampleSentence2": "Their views are diametrically opposed."
  },
  {
      "id": "341",
      "word": "aptly",
      "type": "adverb",
      "definition": "in a manner that is appropriate or suitable in the circumstances.",
      "exampleSentence": "America's aptly named Sunshine State.",
      "exampleSentence2": "In October, owner Judith Rinehart will open a physical gallery in Pioneer Square with a group exhibition aptly titled “Introductions.”"
  },
  {
      "id": "342",
      "word": "infallible",
      "type": "adjective",
      "definition": "incapable of making mistakes or being wrong. never failing; always effective.",
      "exampleSentence": "Doctors are not infallible.",
      "exampleSentence2": "Infallible cures for a variety of ailments."
  },
  {
      "id": "343",
      "word": "uninitiated",
      "type": "adjective",
      "definition": "without special knowledge or experience.",
      "exampleSentence": "The discussion wasn't easy to follow for the uninitiated.",
      "exampleSentence2": "An uninitiated recruit."
  },
  {
      "id": "344",
      "word": "prudish",
      "type": "adjective",
      "definition": "having or revealing a tendency to be easily shocked by matters relating to sex or nudity; excessively concerned with sexual propriety. excessively proper or modest in speech, conduct, dress, etc.",
      "exampleSentence": "The prudish moral climate of the late 19th century.",
      "exampleSentence2": "Who knew a country notorious for selling used underwear in vending machines could be so prudish?"
  },
  {
      "id": "345",
      "word": "contrived",
      "type": "adjective",
      "definition": "deliberately created rather than arising naturally or spontaneously. created or arranged in a way that seems artificial and unrealistic.",
      "exampleSentence": "The ending of the novel is too pat and contrived.",
      "exampleSentence2": "A contrived plot."
  },
  {
      "id": "346",
      "word": "epicenter",
      "type": "noun",
      "definition": "the point on the earth's surface vertically above the focus of an earthquake. the central point of something, typically a difficult or unpleasant situation.",
      "exampleSentence": "The patient was at the epicenter of concern.",
      "exampleSentence2": "Manhattan's Chinatown is the epicenter of the city's Chinese community."
  },
  {
      "id": "347",
      "word": "caveat",
      "type": "noun",
      "definition": "a warning or proviso of specific stipulations, conditions, or limitations. a modifying or cautionary detail to be considered when evaluating, interpreting, or doing something",
      "exampleSentence": "There are a number of caveats which concern the validity of the assessment results.",
      "exampleSentence2": "The driving instructor gave his students this caveat: if you are driving under the speed limit, stay in the far right lane."
  },
  {
      "id": "348",
      "word": "impasse",
      "type": "noun",
      "definition": "a situation in which no progress is possible, especially because of disagreement; a deadlock. a predicament affording no obvious escape.",
      "exampleSentence": "The current political impasse.",
      "exampleSentence2": "The Chargers have offered a contract that would average around $10 million per year, but the sides have remained at an impasse."
  },
  {
      "id": "349",
      "word": "nicety",
      "type": "noun",
      "definition": "a fine detail or distinction, especially one regarded as intricate and fussy. accuracy or precision. a minor aspect of polite social behavior; a detail of etiquette.",
      "exampleSentence": "She was never interested in the niceties of Greek and Latin.",
      "exampleSentence2": "We were brought up to observe the niceties."
  },
  {
      "id": "350",
      "word": "paucity",
      "type": "noun",
      "definition": "the presence of something only in small or insufficient quantities or amounts; scarcity.",
      "exampleSentence": "A paucity of information.",
      "exampleSentence2": "Even with his paucity of competitive play the last three months, he said he needed more time off."
  },
  {
      "id": "351",
      "word": "ensure",
      "type": "verb",
      "definition": "to make sure, certain, or safe. make certain that (something) shall occur or be the case. make certain of obtaining or providing (something).",
      "exampleSentence": "The client must ensure that accurate records be kept.",
      "exampleSentence2": "She would ensure him a place in society."
  },
  {
      "id": "352",
      "word": "assure",
      "type": "verb",
      "definition": "tell someone something positively or confidently to dispel any doubts they may have. make (something) certain to happen.",
      "exampleSentence": "Tony assured me that there was a supermarket in the village.",
      "exampleSentence2": "Victory was now assured."
  },
  {
      "id": "353",
      "word": "propriety",
      "type": "noun",
      "definition": "the state or quality of conforming to conventionally accepted standards of behavior or morals. the details or rules of behavior conventionally considered to be correct. the condition of being right, appropriate, or fitting.",
      "exampleSentence": "He always behaved with the utmost propriety.",
      "exampleSentence2": "They questioned the propriety of certain investments made by the council."
  },
  {
      "id": "354",
      "word": "catalyst",
      "type": "noun",
      "definition": "a person or thing that precipitates an event. an agent that provokes or speeds significant change or action.",
      "exampleSentence": "The governor's speech acted as a catalyst for debate.",
      "exampleSentence2": "He was the catalyst in the native uprising."
  },
  {
      "id": "355",
      "word": "ascertain",
      "type": "verb",
      "definition": "find (something) out for certain; make sure of. ",
      "exampleSentence": "An attempt to ascertain the cause of the accident.",
      "exampleSentence2": "This is information that can be easily ascertained on the Internet."
  },
  {
      "id": "356",
      "word": "precipitate",
      "type": "adjective, verb",
      "definition": "cause (an event or situation, typically one that is bad or undesirable) to happen suddenly, unexpectedly, or prematurely. done, made, or acting suddenly or without careful consideration.",
      "exampleSentence": "The incident precipitated a political crisis.",
      "exampleSentence2": "I must apologize for my staff—their actions were precipitate."
  },
  {
      "id": "357",
      "word": "antithesis",
      "type": "noun",
      "definition": "a person or thing that is the direct opposite of someone or something else. a contrast or opposition between two things.",
      "exampleSentence": "Love is the antithesis of selfishness.",
      "exampleSentence2": "The antithesis between occult and rational mentalities."
  },
  {
      "id": "358",
      "word": "arbiter",
      "type": "noun",
      "definition": "a person empowered to decide matters at issue; judge; umpire. a person who has the sole or absolute power of judging or determining.",
      "exampleSentence": "Second, HR's role is to serve as the company's arbiter of equity.",
      "exampleSentence2": "The mayor will act as the final arbiter in any dispute between board members."
  },
  {
      "id": "359",
      "word": "diaphanous",
      "type": "adjective",
      "definition": "(especially of fabric) light, delicate, and translucent. If a dress is so see-through that light shines through it, it's diaphanous",
      "exampleSentence": "A diaphanous dress of pale gold.",
      "exampleSentence2": "The styles on show also mixed the old and the new, with lightweight materials giving some of the black dresses a diaphanous air."
  },
  {
      "id": "360",
      "word": "dastardly",
      "type": "adjective",
      "definition": "wicked and cruel.",
      "exampleSentence": "Pirates and their dastardly deeds.",
      "exampleSentence2": "A dastardly attack."
  },
  {
      "id": "361",
      "word": "pariah",
      "type": "noun",
      "definition": "an outcast.",
      "exampleSentence": "They were treated as social pariahs.",
      "exampleSentence2": "King has become toxic and is essentially a pariah within the party."
  },
  {
      "id": "362",
      "word": "deluge",
      "type": "noun, verb",
      "definition": "inundate with a great quantity of something. a severe flood. a heavy fall of rain. a great quantity of something arriving at the same time.",
      "exampleSentence": "A deluge of complaints.",
      "exampleSentence2": "He has been deluged with offers of work."
  },
  {
      "id": "363",
      "word": "antipathy",
      "type": "noun",
      "definition": "a deep-seated feeling of dislike; aversion. a strong feeling of dislike",
      "exampleSentence": "His fundamental antipathy to capitalism.",
      "exampleSentence2": "An antipathy to taxes."
  },
  {
      "id": "364",
      "word": "corpulence",
      "type": "noun",
      "definition": "the state of being fat; obesity.",
      "exampleSentence": "Her corpulence is the butt of every joke.",
      "exampleSentence2": "Despite the heat, they start to adapt to the environment and John revels shirtless in all his glorious corpulence."
  },
  {
      "id": "365",
      "word": "incorrigible",
      "type": "adjective",
      "definition": "(of a person or their tendencies) not able to be corrected, improved, or reformed. firmly fixed; not easily changed. not easily swayed or influenced. not corrigible; bad beyond correction or reform.",
      "exampleSentence": "Neymar is an incorrigible extrovert, a fashion icon and a marketing phenomenon.",
      "exampleSentence2": "An incorrigible habit."
  },
  {
      "id": "366",
      "word": "petulant",
      "type": "adjective",
      "definition": "(of a person or their manner) childishly sulky or bad-tempered.",
      "exampleSentence": "He was moody and petulant.",
      "exampleSentence2": "Mostly, though, he’s just petulant, some combination of arrogant and whiny: “I’m going to do what I want, when I want, when I want, yeah,” he chants on “I’m Gonna Be.”"
  },
  {
      "id": "367",
      "word": "debauchery",
      "type": "noun",
      "definition": "excessive indulgence in sensual pleasures.",
      "exampleSentence": "The carpet, protected by plastic during the previous night’s debauchery, was spotless.",
      "exampleSentence2": "Rather than a night of debauchery marking the transition from single to married, what if we planned to celebrate a year later instead?"
  },
  {
      "id": "368",
      "word": "incumbent",
      "type": "adjective, noun",
      "definition": "necessary for (someone) as a duty or responsibility. (of an official or regime) currently holding office.",
      "exampleSentence": "It is incumbent on all decent people to concentrate on destroying this evil.",
      "exampleSentence2": "The incumbent president was victorious."
  },
  {
      "id": "369",
      "word": "reproach",
      "type": "noun, verb",
      "definition": "address (someone) in such a way as to express disapproval or disappointment. the expression of disapproval or disappointment.",
      "exampleSentence": "He gave her a look of reproach.",
      "exampleSentence2": "“You know that isn't true,” he reproached her."
  },
  {
      "id": "370",
      "word": "mull",
      "type": "verb",
      "definition": "think about (a fact, proposal, or request) deeply and at length. to think about carefully; consider (often followed by over).",
      "exampleSentence": "She began to mull over the various possibilities.",
      "exampleSentence2": "To mull over an idea."
  },
  {
      "id": "371",
      "word": "contemptuous",
      "type": "adjective",
      "definition": "showing contempt; scornful.",
      "exampleSentence": "She was intolerant and contemptuous of the majority of the human race.",
      "exampleSentence2": "It was a perfect moment for an angry, contemptuous creep."
  },
  {
      "id": "372",
      "word": "visceral",
      "type": "verb",
      "definition": "relating to deep inward feelings rather than to the intellect. A visceral feeling is intuitive — there might not be a rational explanation, but you feel that you know what's best, like your visceral reaction against egg salad",
      "exampleSentence": "The voters' visceral fear of change.",
      "exampleSentence2": "Unless you tell a story that becomes visceral and reaches people, you’re not differentiating yourself from all the clutter."
  },
  {
      "id": "373",
      "word": "depose",
      "type": "verb",
      "definition": "remove from office suddenly and forcefully. testify to or give (evidence) on oath, typically in a written statement.",
      "exampleSentence": "He had been deposed by a military coup.",
      "exampleSentence2": "She was nervous when the time to depose before the jury finally arrived."
  },
  {
      "id": "374",
      "word": "servile",
      "type": "adjective",
      "definition": "having or showing an excessive willingness to serve or please others. of or characteristic of a slave or slaves.",
      "exampleSentence": "He bowed his head in a servile manner.",
      "exampleSentence2": "Servile obedience."
  },
  {
      "id": "375",
      "word": "subsume",
      "type": "verb",
      "definition": "include or absorb (something) in something else. to consider or include (an idea, term, proposition, etc.) as part of a more comprehensive one.",
      "exampleSentence": "Most of these phenomena can be subsumed under two broad categories.",
      "exampleSentence2": "Their voices have been subsumed by the louder collective voice of the party."
  },
  {
      "id": "376",
      "word": "besieged",
      "type": "adjective",
      "definition": "(of a place) surrounded by armed forces aiming to capture it or force surrender.",
      "exampleSentence": "The besieged city.",
      "exampleSentence2": "Corfu was besieged, but unsuccessfully."
  },
  {
      "id": "377",
      "word": "adulation",
      "type": "noun",
      "definition": "obsequious flattery; excessive admiration or praise.",
      "exampleSentence": "He found it difficult to cope with the adulation of the fans.",
      "exampleSentence2": "He enjoys the adulation of his fans."
  },
  {
      "id": "378",
      "word": "obstreperous",
      "type": "adjective",
      "definition": "noisy and difficult to control. stubbornly resistant to control",
      "exampleSentence": "The boy is cocky and obstreperous.",
      "exampleSentence2": "An obstreperous child."
  },
  {
      "id": "379",
      "word": "inimical",
      "type": "adjective",
      "definition": "tending to obstruct or harm. unfriendly; hostile.",
      "exampleSentence": "Actions inimical to our interests.",
      "exampleSentence2": "An inimical alien power."
  },
  {
      "id": "380",
      "word": "provocation",
      "type": "noun",
      "definition": "action or speech that makes someone annoyed or angry, especially deliberately.",
      "exampleSentence": "You should remain calm and not respond to provocation.",
      "exampleSentence2": "Her calmness in the face of repeated provocations impressed her friends."
  },
  {
      "id": "381",
      "word": "exuberant",
      "type": "adjective",
      "definition": "filled with or characterized by a lively energy and excitement. effusively and almost uninhibitedly enthusiastic; lavishly abundant; extremely good; overflowing; plentiful.",
      "exampleSentence": "Giddily exuberant crowds.",
      "exampleSentence2": "An exuberant welcome for the hero."
  },
  {
      "id": "382",
      "word": "congenital",
      "type": "adjective",
      "definition": "(of a disease or physical abnormality) present from birth. (of a person) having a particular trait from birth or by firmly established habit.",
      "exampleSentence": "A congenital malformation of the heart.",
      "exampleSentence2": "A congenital liar."
  },
  {
      "id": "383",
      "word": "conjecture",
      "type": "noun, verb",
      "definition": "an opinion or conclusion formed on the basis of incomplete information. form an opinion or supposition about (something) on the basis of incomplete information.",
      "exampleSentence": "Many conjectured that the jury could not agree.",
      "exampleSentence2": "Mr. Rove, you make these claims purely as conjecture without any facts, fanned by the emotions of your partisanship."
  },
  {
      "id": "384",
      "word": "vagrancy",
      "type": "noun",
      "definition": "the state of living as a vagrant; homelessness.",
      "exampleSentence": "A descent into vagrancy and drug abuse.",
      "exampleSentence2": "The most prevalent crimes were loitering, vagrancy, and drunkenness; which was the result of the many bars located along Main Street in Westminster."
  },
  {
      "id": "385",
      "word": "vociferous",
      "type": "adjective",
      "definition": "(especially of a person or speech) vehement or clamorous.",
      "exampleSentence": "He was a vociferous opponent of the takeover.",
      "exampleSentence2": "A vociferous manner of expression."
  },
  {
      "id": "386",
      "word": "heft",
      "type": "noun, verb",
      "definition": "lift or carry (something heavy). the weight of someone or something. ability or influence. lift or hold (something) in order to test its weight.",
      "exampleSentence": "Donald hefted another pair of sandbags from the stack.",
      "exampleSentence2": "His colleagues wonder if he has the intellectual heft for his new job."
  },
  {
      "id": "387",
      "word": "intricate",
      "type": "verb",
      "definition": "very complicated or detailed. having many interrelated parts or facets; entangled or involved.",
      "exampleSentence": "An intricate maze.",
      "exampleSentence2": "An intricate machine."
  },
  {
      "id": "388",
      "word": "intricacy",
      "type": "noun",
      "definition": "details, especially of an involved or perplexing subject. an intricate part, action.",
      "exampleSentence": "The intricacies of economic policymaking.",
      "exampleSentence2": "This further highlights the intricacies of the Syrian conflict."
  },
  {
      "id": "389",
      "word": "autocratic",
      "type": "adjective",
      "definition": "relating to a ruler who has absolute power. taking no account of other people's wishes or opinions; domineering.",
      "exampleSentence": "The constitutional reforms threatened his autocratic power.",
      "exampleSentence2": "An autocratic management style."
  },
  {
      "id": "390",
      "word": "quid pro quo",
      "type": "noun",
      "definition": "a favor or advantage granted or expected in return for something.",
      "exampleSentence": "The pardon was a quid pro quo for their help in releasing hostages.",
      "exampleSentence2": "In politics nobody does something for nothing, there's always a quid pro quo involved."
  },
  {
      "id": "391",
      "word": "voracious",
      "type": "adjective",
      "definition": "wanting or devouring great quantities of food. having a very eager approach to an activity.",
      "exampleSentence": "He had a voracious appetite.",
      "exampleSentence2": "His voracious reading of literature."
  },
  {
      "id": "392",
      "word": "aggrieved",
      "type": "adjective",
      "definition": "feeling resentment at having been unfairly treated.",
      "exampleSentence": "They were aggrieved at the outcome.",
      "exampleSentence2": "I am aggrieved at the conditions which have been forced upon me."
  },
  {
      "id": "393",
      "word": "incontrovertible",
      "type": "adjective",
      "definition": "not able to be denied or disputed.",
      "exampleSentence": "Incontrovertible proof.",
      "exampleSentence2": "Absolute and incontrovertible truth."
  },
  {
      "id": "394",
      "word": "undaunted",
      "type": "adjective",
      "definition": "not intimidated or discouraged by difficulty, danger, or disappointment.",
      "exampleSentence": "They were undaunted by the huge amount of work needed.",
      "exampleSentence2": "Undaunted, they continued on their journey."
  },
  {
      "id": "395",
      "word": "bohemian",
      "type": "adjective, noun",
      "definition": "a socially unconventional person, especially one who is involved in the arts. socially unconventional in an artistic way.",
      "exampleSentence": "Warhol and the artists and bohemians he worked with in the 1960s.",
      "exampleSentence2": "As an opera singer you live a bohemian lifestyle."
  },
  {
      "id": "396",
      "word": "superfluous",
      "type": "adjective",
      "definition": "unnecessary, especially through being more than enough. exceeding what is sufficient or necessary",
      "exampleSentence": "The purchaser should avoid asking for superfluous information.",
      "exampleSentence2": "But most of the goals in the US’ 13-0 victory over Thailand on Tuesday will likely turn out to be superfluous."
  },
  {
      "id": "397",
      "word": "veritable",
      "type": "adjective",
      "definition": "used as an intensifier, often to qualify a metaphor. being truly or very much so.",
      "exampleSentence": "The early 1970s witnessed a veritable price explosion.",
      "exampleSentence2": "A veritable triumph."
  },
  {
      "id": "398",
      "word": "irate",
      "type": "adjective",
      "definition": "feeling or characterized by great anger.",
      "exampleSentence": "A barrage of irate letters.",
      "exampleSentence2": "An irate customer."
  },
  {
      "id": "399",
      "word": "privation",
      "type": "noun",
      "definition": "a state in which things that are essential for human well-being such as food and warmth are scarce or lacking. the loss or absence of a quality or attribute that is normally present.",
      "exampleSentence": "Years of rationing and privation.",
      "exampleSentence2": "The country has suffered through long periods of economic privation."
  },
  {
      "id": "400",
      "word": "impassioned",
      "type": "adjective",
      "definition": "filled with or showing great emotion.",
      "exampleSentence": "She made an impassioned plea for help.",
      "exampleSentence2": "An impassioned speech."
  },
  {
    "id": "401",
    "word": "myopic",
    "type": "adjective",
    "definition": "nearsighted. lacking imagination, foresight, or intellectual insight. lacking in foresight or discernment : narrow in perspective and without concern for broader implications",
    "exampleSentence": "The government still has a myopic attitude to public spending.",
    "exampleSentence2": "That myopic focus would be disturbing even if it wasn’t possible that he’s just some complex delusion pulling Alma away from her living family."
},
{
    "id": "402",
    "word": "consternation",
    "type": "noun",
    "definition": "feelings of anxiety or dismay, typically at something unexpected.",
    "exampleSentence": "I always welcomed clover, much to the consternation of the neighbors.",
    "exampleSentence2": "That statement caused mass consternation despite proving accurate."
},
{
    "id": "403",
    "word": "futility",
    "type": "noun",
    "definition": "pointlessness or uselessness.",
    "exampleSentence": "The horror and futility of war.",
    "exampleSentence2": "His speech focused on the futility of violence."
},
{
    "id": "404",
    "word": "shrewdness",
    "type": "noun",
    "definition": "the quality of having or showing good powers of judgement.",
    "exampleSentence": "He is a man of some tactical shrewdness.",
    "exampleSentence2": "He was admired for his shrewdness and his visceral desire to win."
},
{
    "id": "405",
    "word": "genial",
    "type": "adjective",
    "definition": "friendly and cheerful. warmly and pleasantly cheerful; cordial. favorable for life, growth, or comfort; pleasantly warm; comfortably mild.",
    "exampleSentence": "The genial climate of Hawaii.",
    "exampleSentence2": "A genial disposition."
},
{
    "id": "406",
    "word": "conducive",
    "type": "adjective",
    "definition": "making a certain situation or outcome likely or possible.",
    "exampleSentence": "The harsh lights and cameras were hardly conducive to a relaxed atmosphere.",
    "exampleSentence2": "Good eating habits are conducive to good health."
},
{
    "id": "407",
    "word": "accoutrement",
    "type": "noun",
    "definition": "an identifying and often superficial characteristic or device. additional items of dress or equipment, or other items carried or worn by a person or used for a particular activity. personal clothing, accessories.",
    "exampleSentence": "The accoutrements of religious ritual.",
    "exampleSentence2": "This vacuum cleaner has all of the accoutrements for cleaning furniture as well as floors."
},
{
    "id": "408",
    "word": "introspection",
    "type": "noun",
    "definition": "the examination or observation of one's own mental and emotional processes.",
    "exampleSentence": "Quiet introspection can be extremely valuable.",
    "exampleSentence2": "A moment of quiet introspection."
},
{
    "id": "409",
    "word": "robust",
    "type": "adjective",
    "definition": "strong and healthy; vigorous. (of a process, system, organization, etc.) able to withstand or overcome adverse conditions. (of wine or food) strong and rich in flavor or smell.",
    "exampleSentence": "The Caplans are a robust, healthy lot.",
    "exampleSentence2": "California's robust property market."
},
{
    "id": "410",
    "word": "disposition",
    "type": "noun",
    "definition": "a person's inherent qualities of mind and character. a person's inherent qualities of mind and character.",
    "exampleSentence": "Your sunny disposition has a way of rubbing off on those around you.",
    "exampleSentence2": "The plan need not be accurate so long as it shows the disposition of the rooms."
},
{
    "id": "411",
    "word": "aberration",
    "type": "noun",
    "definition": "a departure from what is normal, usual, or expected, typically one that is unwelcome. a characteristic that deviates from the normal type.",
    "exampleSentence": "They described the outbreak of violence in the area as an aberration.",
    "exampleSentence2": "Color aberration."
},
{
    "id": "412",
    "word": "prerogative",
    "type": "noun",
    "definition": "a right or privilege exclusive to a particular individual or class. a faculty or property distinguishing a person or class.",
    "exampleSentence": "Owning an automobile was still the prerogative of the rich.",
    "exampleSentence2": "It's not a female prerogative to feel insecure."
},
{
    "id": "413",
    "word": "conscription",
    "type": "noun",
    "definition": "compulsory enlistment for state service, typically into the armed forces. Draft.",
    "exampleSentence": "Conscription was extended to married men.",
    "exampleSentence2": "During the war the armed forces were heavily dependent on conscription."
},
{
    "id": "414",
    "word": "conflate",
    "type": "verb",
    "definition": "combine (two or more texts, ideas, etc.) into one.",
    "exampleSentence": "The urban crisis conflates a number of different economic and social issues.",
    "exampleSentence2": "It is important to not conflate patriotism with the needs of an athlete."
},
{
    "id": "415",
    "word": "cutthroat",
    "type": "adjective",
    "definition": "(of a competitive situation or activity) fierce and intense; involving the use of ruthless measures. (of a person) using ruthless methods in a competitive situation.",
    "exampleSentence": "Cutthroat competition led to a lot of bankruptcies.",
    "exampleSentence2": "The greedy cutthroat manufacturers he worked for."
},
{
    "id": "416",
    "word": "non sequitur",
    "type": "noun",
    "definition": "a conclusion or statement that does not logically follow from the previous argument or statement.",
    "exampleSentence": "His weird mixed metaphors and non sequiturs.",
    "exampleSentence2": "But after becoming governor, Newsom proposed legislation to withhold gas tax funds from cities that weren’t doing enough to spur home building — a non sequitur."
},
{
    "id": "417",
    "word": "resurgence",
    "type": "noun",
    "definition": "an increase or revival after a period of little activity, popularity, or occurrence.",
    "exampleSentence": "A resurgence of interest in religion.",
    "exampleSentence2": "Although Pacific Palisades is experiencing a retail resurgence, Walker’s boutique was one of the few retail spaces in that community at the time."
},
{
    "id": "418",
    "word": "anguish",
    "type": "noun, verb",
    "definition": "severe mental or physical pain or suffering. be extremely distressed about something.",
    "exampleSentence": "She shut her eyes in anguish.",
    "exampleSentence2": "He anguished over how to reply."
},
{
    "id": "419",
    "word": "categorically",
    "type": "adverb",
    "definition": "in a way that is unambiguously explicit and direct.",
    "exampleSentence": "The rules state categorically, “No violence.”",
    "exampleSentence2": "He categorically denies the charges."
},
{
    "id": "420",
    "word": "vestigial",
    "type": "adjective",
    "definition": "forming a very small remnant of something that was once much larger or more noticeable. of a body part or organ : remaining in a form that is small or imperfectly developed and not able to function ",
    "exampleSentence": "He felt a vestigial flicker of anger from last night.",
    "exampleSentence2": "A vestigial tail."
},
{
    "id": "421",
    "word": "presumptuous",
    "type": "adjective",
    "definition": "(of a person or their behavior) failing to observe the limits of what is permitted or appropriate.",
    "exampleSentence": "I hope I won't be considered presumptuous if I offer some advice.",
    "exampleSentence2": "Recently he made it clear that he also resented Boeing as being presumptuous and typically condescending."
},
{
    "id": "422",
    "word": "remnant",
    "type": "adjective, noun",
    "definition": "a small remaining quantity of something. a surviving trace. remaining.",
    "exampleSentence": "Remnant strands of hair.",
    "exampleSentence2": "A remnant of the past."
},
{
    "id": "423",
    "word": "usurer",
    "type": "noun",
    "definition": "a person who lends money and charges interest, especially at an exorbitant or unlawful rate; moneylender.",
    "exampleSentence": "\"The real enemies of Europe,\" she said, \"Are the bankers, usurers and technocrats.\"",
    "exampleSentence2": "Usurers continued to exploit the poor until people could take it no more."
},
{
    "id": "424",
    "word": "abrogation",
    "type": "noun",
    "definition": "the repeal or abolition of a law, right, or agreement. to abolish by authoritative action. to suppress or prevent (a biological function or process and especially an immune response)",
    "exampleSentence": "The company's directors are accused of abrogating their responsibilities.",
    "exampleSentence2": "Abrogate a treaty."
},
{
    "id": "425",
    "word": "repudiation",
    "type": "noun",
    "definition": "rejection of a proposal or idea. refusal to fulfill or discharge an agreement, obligation, or debt.",
    "exampleSentence": "The repudiation of reformist policies.",
    "exampleSentence2": "The breach is not so serious as to amount to a repudiation of the whole contract."
},
{
    "id": "426",
    "word": "demagogue",
    "type": "noun, verb",
    "definition": "a political leader who seeks support by appealing to the desires and prejudices of ordinary people rather than by using rational argument. rhetorically exploit (an issue) for political purposes in a way calculated to appeal to the desires and prejudices of ordinary people.",
    "exampleSentence": "A gifted demagogue with particular skill in manipulating the press.",
    "exampleSentence2": "He seems more interested in demagoguing the issue in media interviews than in dialogue."
},
{
    "id": "427",
    "word": "diktat",
    "type": "noun",
    "definition": "an order or decree imposed by someone in power without popular consent. a harsh settlement unilaterally imposed (as on a defeated nation)",
    "exampleSentence": "A diktat from the Bundestag.",
    "exampleSentence2": "The company president issued a diktat that employees may not wear jeans to work."
},
{
    "id": "428",
    "word": "convalesce",
    "type": "verb",
    "definition": "recover one's health and strength over a period of time after an illness or operation.",
    "exampleSentence": "He spent eight months convalescing after the stroke.",
    "exampleSentence2": "Mr. Maxwell was presented with the Medal of Honor in May 1945 while convalescing at Camp Carson in Colorado."
},
{
    "id": "429",
    "word": "verbosity",
    "type": "noun",
    "definition": "the quality of using more words than needed; wordiness.",
    "exampleSentence": "A critic with a reputation for verbosity.",
    "exampleSentence2": "His speeches were always marred by verbosity."
},
{
    "id": "430",
    "word": "imbroglio",
    "type": "noun",
    "definition": "an extremely confused, complicated, or embarrassing situation. scandal",
    "exampleSentence": "She survived the political imbroglio.",
    "exampleSentence2": "McGovern says that might be a tall order to ask of an affordable-housing developer. The imbroglio has divided the neighborhood."
},
{
    "id": "431",
    "word": "bellicose",
    "type": "adjective",
    "definition": "demonstrating aggression and willingness to fight. eager for war.",
    "exampleSentence": "A group of bellicose patriots.",
    "exampleSentence2": "But he expressed caution, suggesting that for all of his bellicose language, he was not rushing toward a military conflict."
},
{
    "id": "432",
    "word": "matriculation",
    "type": "noun",
    "definition": "the action of matriculating at a college or university. to be enrolled at a college or university.",
    "exampleSentence": "Matriculation requirements.",
    "exampleSentence2": "She matriculated at the state university."
},
{
    "id": "433",
    "word": "vitriol",
    "type": "noun",
    "definition": "cruel and bitter criticism.",
    "exampleSentence": "Her mother's sudden gush of fury and vitriol.",
    "exampleSentence2": "You get pulled into this spectrum of vitriol and hatred."
},
{
    "id": "434",
    "word": "truculent",
    "type": "adjective",
    "definition": "eager or quick to argue or fight; aggressively defiant.",
    "exampleSentence": "His days of truculent defiance were over.",
    "exampleSentence2": "A truculent speech against the new government."
},
{
    "id": "435",
    "word": "gesticulation",
    "type": "noun",
    "definition": "a gesture, especially a dramatic one, used instead of speaking or to emphasize one's words.",
    "exampleSentence": "He punctuated his speech with wild gesticulations.",
    "exampleSentence2": "Klopp’s constant gesticulations on the sideline as he sought a reaction reflected the impact of his opposite number’s move."
},
{
    "id": "436",
    "word": "insinuation",
    "type": "noun",
    "definition": "an unpleasant hint or suggestion of something bad.",
    "exampleSentence": "I've done nothing to deserve all your vicious insinuations.",
    "exampleSentence2": "Hegarty said “we don’t lobby, and any insinuation that Palm Oil Monitor is a part of some grand lobbying effort would be inaccurate.”"
},
{
    "id": "437",
    "word": "deciduous",
    "type": "adjective",
    "definition": "(of a tree or shrub) shedding its leaves annually. denoting the milk teeth of a mammal, which are shed after a time.",
    "exampleSentence": "Sun-loving deciduous trees like aspen.",
    "exampleSentence2": "This is the period when the deciduous teeth are being shed."
},
{
    "id": "438",
    "word": "exude",
    "type": "verb",
    "definition": "discharge (moisture or a smell) slowly and steadily. (of a person) display (an emotion or quality) strongly and openly. (of a place) have a strong atmosphere of. (of a person) display (an emotion or quality) strongly and openly.",
    "exampleSentence": "Mr. Thomas exuded friendship and goodwill.",
    "exampleSentence2": "The building exudes an air of tranquility."
},
{
    "id": "439",
    "word": "halcyon",
    "type": "adjective",
    "definition": "denoting a period of time in the past that was idyllically happy and peaceful. CALM, PEACEFUL",
    "exampleSentence": "The halcyon days of the mid-1980s, when profits were soaring.",
    "exampleSentence2": "A halcyon atmosphere."
},
{
    "id": "440",
    "word": "preclude",
    "type": "verb",
    "definition": "prevent from happening; make impossible. (of a situation or condition) prevent someone from doing something.",
    "exampleSentence": "The secret nature of his work precluded official recognition.",
    "exampleSentence2": "His difficulties preclude him from leading a normal life."
},
{
    "id": "441",
    "word": "infer",
    "type": "verb",
    "definition": "deduce or conclude (information) from evidence and reasoning rather than from explicit statements.",
    "exampleSentence": "From these facts we can infer that crime has been increasing.",
    "exampleSentence2": "As you may infer, self-consciousness is the dominant mode of thought here.n"
},
{
    "id": "442",
    "word": "grifter",
    "type": "noun",
    "definition": "a person who engages in petty or small-scale swindling. someone who swindles people out of money through fraud.",
    "exampleSentence": "I saw him as a grifter who preys upon people.",
    "exampleSentence2": "It asks us to identify with the Kims, a family of resourceful grifters who infiltrate themselves into a wealthy family."
},
{
    "id": "443",
    "word": "endemic",
    "type": "adjective",
    "definition": "(of a disease or condition) regularly found among particular people or in a certain area. (of a plant or animal) native and restricted to a certain place.",
    "exampleSentence": "Complacency is endemic in industry today.",
    "exampleSentence2": "Food shortages and starvation are endemic in certain parts of the world."
},
{
    "id": "444",
    "word": "estuary",
    "type": "noun",
    "definition": "the tidal mouth of a large river, where the tide meets the stream.",
    "exampleSentence": "The city sits on the shores of a deep estuary where the Hudson River meets the Atlantic Ocean.",
    "exampleSentence2": "The spill has polluted more than 200 square miles of water, damaging mangrove forests and estuaries."
},
{
    "id": "445",
    "word": "discretion",
    "type": "noun",
    "definition": "the quality of behaving or speaking in such a way as to avoid causing offense or revealing private information. the freedom to decide what should be done in a particular situation.",
    "exampleSentence": "She knew she could rely on his discretion.",
    "exampleSentence2": "It is up to local authorities to use their discretion in setting the charges."
},
{
    "id": "446",
    "word": "augment",
    "type": "verb",
    "definition": "make (something) greater by adding to it; increase. SUPPLEMENT",
    "exampleSentence": "He augmented his summer income by painting houses.",
    "exampleSentence2": "She took a second job to augment her income."
},
{
    "id": "447",
    "word": "orthography",
    "type": "noun",
    "definition": "the conventional spelling system of a language. the study of spelling and how letters combine to represent sounds and form words.",
    "exampleSentence": "A spoken language which has as yet no sanctioned orthography.",
    "exampleSentence2": "The orthography is a little difficult, and the verbs seemed chaotic."
},
{
    "id": "448",
    "word": "factitious",
    "type": "adjective",
    "definition": "artificially created or developed.",
    "exampleSentence": "A largely factitious national identity.",
    "exampleSentence2": "It seems probable that several of the mounds are factitious."
},
{
    "id": "449",
    "word": "etymology",
    "type": "noun",
    "definition": "the study of the origin of words and the way in which their meanings have changed throughout history. the origin of a word and the historical development of its meaning.",
    "exampleSentence": "The decline of etymology as a linguistic discipline.",
    "exampleSentence2": "The etymology of the word “devil.”"
},
{
    "id": "450",
    "word": "haphazardly",
    "type": "adverb",
    "definition": "in a manner lacking any obvious principle of organization. characterized by lack of order or planning, by irregularity, or by randomness; determined by or dependent on chance; aimless.",
    "exampleSentence": "A hodgepodge of family photos haphazardly arranged on a table.",
    "exampleSentence2": "They believed that, at most, it was a set of disparate symptoms haphazardly lumped together."
},
{
    "id": "451",
    "word": "decimate",
    "type": "verb",
    "definition": "kill, destroy, or remove a large percentage or part of. drastically reduce the strength or effectiveness of (something).",
    "exampleSentence": "The project would decimate the fragile wetland wilderness.",
    "exampleSentence2": "Plant viruses that can decimate yields."
},
{
    "id": "452",
    "word": "intrinsic",
    "type": "adjective",
    "definition": "belonging naturally; essential.",
    "exampleSentence": "Access to the arts is intrinsic to a high quality of life.",
    "exampleSentence2": "It is a loss of function and, by extension, of intrinsic worth."
},
{
    "id": "453",
    "word": "specious",
    "type": "adjective",
    "definition": "superficially plausible, but actually wrong. misleading in appearance, especially misleadingly attractive. an argument that seems to be good, correct, or logical, but is not so.",
    "exampleSentence": "A specious argument.",
    "exampleSentence2": "A specious claim."
},
{
    "id": "454",
    "word": "mollify",
    "type": "verb",
    "definition": "appease the anger or anxiety of (someone). to calm someone down, talk them off the ledge, make amends.",
    "exampleSentence": "Nature reserves were set up around the power stations to mollify local conservationists.",
    "exampleSentence2": "That failed to mollify the protesters, who expanded their demands to include an inquiry into police violence and democratic reform."
},
{
    "id": "455",
    "word": "quiescent",
    "type": "adjective",
    "definition": "in a state or period of inactivity or dormancy. being at rest; quiet; still; inactive or motionless.",
    "exampleSentence": "Strikes were headed by groups of workers who had previously been quiescent.",
    "exampleSentence2": "A quiescent mind."
},
{
    "id": "456",
    "word": "finality",
    "type": "noun",
    "definition": "the fact or impression of being an irreversible ending. a tone or manner which indicates that no further comment or argument is possible. an action or event that ends something irreversibly.",
    "exampleSentence": "The abrupt finality of death.",
    "exampleSentence2": "Death is the ultimate finality."
},
{
    "id": "457",
    "word": "err",
    "type": "verb",
    "definition": "be mistaken or incorrect; make a mistake. fail to adhere to the proper or accepted standards; do wrong.",
    "exampleSentence": "The judge had erred in ruling that the evidence was inadmissible.",
    "exampleSentence2": "He has erred and strayed as many of us have."
},
{
    "id": "458",
    "word": "divisive",
    "type": "adjective",
    "definition": "tending to cause disagreement or hostility between people.",
    "exampleSentence": "The highly divisive issue of abortion.",
    "exampleSentence2": "Six seasons later, it closed with one of television’s most intensely divisive finales."
},
{
    "id": "459",
    "word": "propitiate",
    "type": "verb",
    "definition": "win or regain the favor of (a god, spirit, or person) by doing something that pleases them.",
    "exampleSentence": "The pagans thought it was important to propitiate the gods with sacrifices.",
    "exampleSentence2": "She was famously jealous and violent, and Hawaiians tried to propitiate her with offerings of pork, fish, liquor."
},
{
    "id": "460",
    "word": "espouse",
    "type": "verb",
    "definition": "adopt or support (a cause, belief, or way of life).",
    "exampleSentence": "He turned his back on the modernism he had espoused in his youth.",
    "exampleSentence2": "The new theory has been espoused by many leading physicists."
},
{
    "id": "461",
    "word": "rife",
    "type": "adjective, adverb",
    "definition": "(especially of something undesirable or harmful) of common occurrence; widespread. full of. in an unchecked or widespread manner.",
    "exampleSentence": "The streets were rife with rumor and fear.",
    "exampleSentence2": "Speculation ran rife that he was an arms dealer."
},
{
    "id": "462",
    "word": "devoid",
    "type": "adjective",
    "definition": "entirely lacking or free from.",
    "exampleSentence": "Lisa kept her voice devoid of emotion.",
    "exampleSentence2": "All 72 photos in the book, and the 33 in the exhibition, show the skate parks devoid of humans."
},
{
    "id": "463",
    "word": "cantankerous",
    "type": "adjective",
    "definition": "bad-tempered, argumentative, and uncooperative.",
    "exampleSentence": "A crusty, cantankerous old man.",
    "exampleSentence2": "A cantankerous and venomous-tongued old lady."
},
{
    "id": "464",
    "word": "pristine",
    "type": "adjective",
    "definition": "in its original condition; unspoiled. clean and fresh as if new; spotless.",
    "exampleSentence": "Pristine copies of an early magazine.",
    "exampleSentence2": "A pristine white shirt."
},
{
    "id": "465",
    "word": "dwelling",
    "type": "noun",
    "definition": "a house, apartment, or other place of residence.",
    "exampleSentence": "The old house served as a dwelling for Albert.",
    "exampleSentence2": "The house was a modest one-story dwelling."
},
{
    "id": "466",
    "word": "immutable",
    "type": "adjective",
    "definition": "unchanging over time or unable to be changed.",
    "exampleSentence": "An immutable fact.",
    "exampleSentence2": "The outraged grammar stickler mistakes a convention for an immutable and fundamental law of the universe."
},
{
    "id": "467",
    "word": "unscrupulous",
    "type": "adjective",
    "definition": "having or showing no moral principles; not honest or fair.",
    "exampleSentence": "Unscrupulous landlords might be tempted to harass existing tenants.",
    "exampleSentence2": "As the government cracked down on unscrupulous prescribers, manufacturers and drug distributors, the addicted turned to illicit heroin."
},
{
    "id": "468",
    "word": "apocryphal",
    "type": "adjective",
    "definition": "(of a story or statement) of doubtful authenticity, although widely circulated as being true. false; spurious.",
    "exampleSentence": "An apocryphal story about a former president.",
    "exampleSentence2": "He told an apocryphal story about the sword, but the truth was later revealed."
},
{
    "id": "469",
    "word": "ersatz",
    "type": "adjective",
    "definition": "(of a product) made or used as a substitute, typically an inferior one, for something else. not real or genuine.",
    "exampleSentence": "Ersatz coffee.",
    "exampleSentence2": "Ersatz emotion."
},
{
    "id": "470",
    "word": "pharisee",
    "type": "noun",
    "definition": "a member of an ancient Jewish sect, distinguished by strict observance of the traditional and written law. a self-righteous person; a hypocrite.",
    "exampleSentence": "The allegation about his mother was false: the Pharisee who retailed it was guilty of no small offence.",
    "exampleSentence2": "Pollio the Pharisee and Sameas his disciple were in special honour with him, Josephus says, when he re-entered Jerusalem and put to death the leaders of the faction of Antigonus."
},
{
    "id": "471",
    "word": "prodigal",
    "type": "adjective, noun",
    "definition": "spending money or resources freely and recklessly; wastefully extravagant. having or giving something on a lavish scale. a person who spends money in a recklessly extravagant way.",
    "exampleSentence": "Prodigal habits die hard.",
    "exampleSentence2": "The dessert was crunchy with brown sugar and prodigal with whipped cream."
},
{
    "id": "472",
    "word": "preemption",
    "type": "noun",
    "definition": "the purchase of goods or shares by one person or party before the opportunity is offered to others. the action of preempting or forestalling, especially of making a preemptive attack. the interruption or replacement of a scheduled radio or television program.",
    "exampleSentence": "The commission had the right of preemption.",
    "exampleSentence2": "Damaging retaliation for any attempt at preemption."
},
{
    "id": "473",
    "word": "copious",
    "type": "adjective",
    "definition": "abundant in supply or quantity. having or yielding an abundant supply. exhibiting abundance or fullness, as of thoughts or words.",
    "exampleSentence": "She took copious notes.",
    "exampleSentence2": "After cleaning up the copious amount of blood on my body in a bathroom, I found my clothing and got dressed."
},
{
    "id": "474",
    "word": "expatriate",
    "type": "adjective, noun, verb",
    "definition": "a person who lives outside their native country. denoting or relating to a person living outside their native country. settle oneself abroad.",
    "exampleSentence": "American expatriates in London.",
    "exampleSentence2": "Candidates should be willing to expatriate."
},
{
    "id": "475",
    "word": "circumspect",
    "type": "adjective",
    "definition": "wary and unwilling to take risks. to think carefully before doing or saying anything.",
    "exampleSentence": "The officials were very circumspect in their statements.",
    "exampleSentence2": "In other classes, teachers might expect students to be more circumspect."
},
{
    "id": "476",
    "word": "hyperbolic",
    "type": "adjective",
    "definition": "having the nature of hyperbole; exaggerated.",
    "exampleSentence": "Again his language was hyperbolic, saying that the scheme would do more damage than the Luftwaffe had managed in World War II.",
    "exampleSentence2": "Indeed, after nearly four years, there is a treasure trove of hyperbolic, over-the-top soundbites about it."
},
{
    "id": "477",
    "word": "hyperbole",
    "type": "noun",
    "definition": "exaggerated statements or claims not meant to be taken literally.",
    "exampleSentence": "He vowed revenge with oaths and hyperboles.",
    "exampleSentence2": "Direct quotes from the discovery teams also veered into hyperbole."
},
{
    "id": "478",
    "word": "denote",
    "type": "adjective",
    "definition": "be a sign of; indicate. stand as a name or symbol for.",
    "exampleSentence": "This mark denotes purity and quality.",
    "exampleSentence2": "A fever often denotes an infection."
},
{
    "id": "479",
    "word": "subterfuge",
    "type": "noun",
    "definition": "deceit used in order to achieve one's goal. the use of tricky actions to hide or get something.",
    "exampleSentence": "He had to use subterfuge and bluff on many occasions.",
    "exampleSentence2": "With a smile, he proved that there is still room for subterfuge in this age of the all-seeing internet and all-knowing social media."
},
{
    "id": "480",
    "word": "myriad",
    "type": "adjective, noun",
    "definition": "a countless or extremely great number. a countless or extremely great number. having countless or very many elements or aspects.",
    "exampleSentence": "Networks connecting a myriad of computers.",
    "exampleSentence2": "The myriad political scene."
},
{
    "id": "481",
    "word": "obfuscation",
    "type": "noun",
    "definition": "the action of making something obscure, unclear, or unintelligible.",
    "exampleSentence": "When confronted with sharp questions they resort to obfuscation.",
    "exampleSentence2": "He was asked to clarify that night, and again the day before the meeting with Liverpool, but he offered only further obfuscation."
},
{
    "id": "482",
    "word": "destitution",
    "type": "noun",
    "definition": "poverty so extreme that one lacks the means to provide for oneself.",
    "exampleSentence": "The family faced eviction and destitution.",
    "exampleSentence2": "It was a time of destitution and turmoil for millions of workers."
},
{
    "id": "483",
    "word": "lionize",
    "type": "verb",
    "definition": "give a lot of public attention and approval to (someone); treat as a celebrity.",
    "exampleSentence": "Modern athletes are lionized.",
    "exampleSentence2": "The free-handed miners of that town wanted nothing better than somebody or something to lionize."
},
{
    "id": "484",
    "word": "recourse",
    "type": "noun",
    "definition": "a source of help in a difficult situation. the use of someone or something as a source of help in a difficult situation. the legal right to demand compensation or payment.",
    "exampleSentence": "Surgery may be the only recourse.",
    "exampleSentence2": "The bank has recourse against the exporter for losses incurred."
},
{
    "id": "485",
    "word": "cauterize",
    "type": "verb",
    "definition": "burn the skin or flesh of (a wound) with a heated instrument or caustic substance, typically to stop bleeding or prevent the wound from becoming infected.",
    "exampleSentence": "I'll freeze the hand and cauterize the wound.",
    "exampleSentence2": "Cauterize a wound."
},
{
    "id": "486",
    "word": "veneration",
    "type": "noun",
    "definition": "great respect; reverence.",
    "exampleSentence": "A memorial was erected in veneration of the dead of both world wars.",
    "exampleSentence2": "They were filled with veneration for their priests."
},
{
    "id": "487",
    "word": "perpetuate",
    "type": "verb",
    "definition": "make (something, typically an undesirable situation or an unfounded belief) continue indefinitely. preserve (something valued) from oblivion or extinction.",
    "exampleSentence": "The law perpetuated the interests of the ruling class.",
    "exampleSentence2": "How did these first humans survive to perpetuate the species?"
},
{
    "id": "488",
    "word": "vex",
    "type": "verb",
    "definition": "make (someone) feel annoyed, frustrated, or worried, especially with trivial matters. to bring trouble, distress, or agitation to. o bring physical distress to.",
    "exampleSentence": "The memory of the conversation still vexed him.",
    "exampleSentence2": "A headache vexed him all morning."
},
{
    "id": "489",
    "word": "peevish",
    "type": "adjective",
    "definition": "easily irritated, especially by unimportant things. showing annoyance, irritation, or bad mood.",
    "exampleSentence": "All this makes Steve fretful and peevish.",
    "exampleSentence2": "A peevish reply."
},
{
    "id": "490",
    "word": "fracas",
    "type": "noun",
    "definition": "a noisy disturbance or quarrel.",
    "exampleSentence": "The fracas was broken up by stewards.",
    "exampleSentence2": "Jonathan Franzen is in a fracas over his comments deploring our literary culture, Amazon, and social media."
},
{
    "id": "491",
    "word": "obdurate",
    "type": "adjective",
    "definition": "stubbornly refusing to change one's opinion or course of action.",
    "exampleSentence": "I argued this point with him, but he was obdurate.",
    "exampleSentence2": "It’s as if we’d rather stampede away from facing the harsh truth and fall into obdurate, enveloping silence about it."
},
{
    "id": "492",
    "word": "noisome",
    "type": "adjective",
    "definition": "having an extremely offensive smell. disagreeable; unpleasant.",
    "exampleSentence": "Noisome vapors from the smoldering waste.",
    "exampleSentence2": "Noisome scandals."
},
{
    "id": "493",
    "word": "divest",
    "type": "verb",
    "definition": "deprive (someone) of power, rights, or possessions. deprive (something) of a particular quality. rid oneself of something that one no longer wants or requires, such as a business interest or investment.",
    "exampleSentence": "Men are unlikely to be divested of power without a struggle.",
    "exampleSentence2": "The government's policy of divesting itself of state holdings."
},
{
    "id": "494",
    "word": "analogous",
    "type": "adjective",
    "definition": "comparable in certain respects, typically in a way which makes clearer the nature of the things compared.",
    "exampleSentence": "They saw the relationship between a ruler and his subjects as analogous to that of father and children.",
    "exampleSentence2": "This is analogous to saying that “murderers will be indicted and jailed,” which does not imply that kidnappers won’t be indicted and/or jailed too."
},
{
    "id": "495",
    "word": "affront",
    "type": "adjective, noun",
    "definition": "an action or remark that causes outrage or offense. offend the modesty or values of.",
    "exampleSentence": "He took his son's desertion as a personal affront.",
    "exampleSentence2": "She was affronted by his familiarity."
},
{
    "id": "496",
    "word": "ordain",
    "type": "verb",
    "definition": "make (someone) a priest or minister; confer holy orders on. order or decree (something) officially. (especially of God or fate) prescribe; determine (something).",
    "exampleSentence": "Equal punishment was ordained for the two crimes.",
    "exampleSentence2": "Fate had ordained the meeting."
},
{
    "id": "497",
    "word": "polity",
    "type": "noun",
    "definition": "a form or process of civil government or constitution. an organized society; a state as a political entity.",
    "exampleSentence": "The period in which West Germany was a distinct polity.",
    "exampleSentence2": "The civic humanist's polity."
},
{
    "id": "498",
    "word": "efficacious",
    "type": "adjective",
    "definition": "(of something inanimate or abstract) successful in producing a desired or intended result; effective.",
    "exampleSentence": "The vaccine has proved both efficacious and safe.",
    "exampleSentence2": "Eliminating that preference is a much less efficacious reform than it seems."
},
{
    "id": "499",
    "word": "unvarnished",
    "type": "adjective",
    "definition": "(of a statement or manner) plain and straightforward.",
    "exampleSentence": "Please tell me the unvarnished truth.",
    "exampleSentence2": "The unvarnished candor of old people and children."
},
{
    "id": "500",
    "word": "guise",
    "type": "noun",
    "definition": "an external form, appearance, or manner of presentation, typically concealing the true nature of something. assumed appearance or mere semblance.",
    "exampleSentence": "He visited in the guise of an inspector.",
    "exampleSentence2": "Under the guise of friendship."
},
{
    "id": "501",
    "word": "disparate",
    "type": "adjective",
    "definition": "essentially different in kind; not allowing comparison. containing elements very different from one another.",
    "exampleSentence": "They inhabit disparate worlds of thought.",
    "exampleSentence2": "A culturally disparate country."
},
{
    "id": "502",
    "word": "fulsome",
    "type": "adjective",
    "definition": "complimentary or flattering to an excessive degree. of large size or quantity; generous or abundant.",
    "exampleSentence": "They are almost embarrassingly fulsome in their appreciation.",
    "exampleSentence2": "A fulsome harvest."
},
{
    "id": "503",
    "word": "mawkish",
    "type": "adjective",
    "definition": "sentimental in a feeble or sickly way.  excessively sentimental or so sappy it's sickening.",
    "exampleSentence": "The dark comedy’s six episodes, all of which Gervais wrote and directed, whiplash between vicious and mawkish.",
    "exampleSentence2": "As video, it’s unintentionally comic, mawkish passing for sober."
},
{
    "id": "504",
    "word": "farce",
    "type": "noun",
    "definition": "a comic dramatic work using buffoonery and horseplay and typically including crude characterization and ludicrously improbable situations. an absurd event.",
    "exampleSentence": "The debate turned into a drunken farce.",
    "exampleSentence2": "The recall of a duly elected official for a frivolous reason is not democracy in action but a farce."
},
{
    "id": "505",
    "word": "acumen",
    "type": "noun",
    "definition": "the ability to make good judgments and quick decisions, typically in a particular domain.",
    "exampleSentence": "Business acumen.",
    "exampleSentence2": "The technical acumen of the Genius Bar staffers is now hit-or-miss."
},
{
    "id": "506",
    "word": "contort",
    "type": "verb",
    "definition": "twist or bend out of the normal shape.",
    "exampleSentence": "A spasm of pain contorted his face.",
    "exampleSentence2": "His face contorts to an unflattering mix of frustration and anger."
},
{
    "id": "507",
    "word": "panacea",
    "type": "noun",
    "definition": "a solution or remedy for all difficulties or diseases.",
    "exampleSentence": "The panacea for all corporate ills.",
    "exampleSentence2": "The law will improve the lives of local farmers, but it is no panacea."
},
{
    "id": "508",
    "word": "deference",
    "type": "noun",
    "definition": "humble submission and respect. to make a gesture of respect.",
    "exampleSentence": "He addressed her with the deference due to age.",
    "exampleSentence2": "In deference to your husband’s health issues, begin this exploration process with a therapist qualified to address whatever his ailment is."
},
{
    "id": "509",
    "word": "envelop",
    "type": "verb",
    "definition": "wrap up, cover, or surround completely. (of troops) surround (an enemy force).",
    "exampleSentence": "A figure enveloped in a black cloak.",
    "exampleSentence2": "Their assignment was to envelop the head of the enemy column and destroy it."
},
{
    "id": "510",
    "word": "embroil",
    "type": "verb",
    "definition": "involve (someone) deeply in an argument, conflict, or difficult situation.",
    "exampleSentence": "The movie's about a journalist who becomes embroiled with a nightclub owner.",
    "exampleSentence2": "Embroiled in the conflict."
},
{
    "id": "511",
    "word": "scrupulous",
    "type": "adjective",
    "definition": "(of a person or process) diligent, thorough, and extremely attentive to details. very concerned to avoid doing wrong. very careful to do things properly and correctly.",
    "exampleSentence": "The research has been carried out with scrupulous attention to detail.",
    "exampleSentence2": "She's too scrupulous to have an affair with a married man."
},
{
    "id": "512",
    "word": "sanctity",
    "type": "noun",
    "definition": "the state or quality of being holy, sacred, or saintly. ultimate importance and inviolability.",
    "exampleSentence": "The site of the tomb was a place of sanctity for the ancient Egyptians.",
    "exampleSentence2": "The sanctity of human life."
},
{
    "id": "513",
    "word": "peril",
    "type": "noun",
    "definition": "serious and immediate danger. the dangers or difficulties that arise from a particular situation or activity.",
    "exampleSentence": "A setback to the state could present a peril to the regime.",
    "exampleSentence2": "She first witnessed the perils of pop stardom a decade ago."
},
{
    "id": "514",
    "word": "charlatan",
    "type": "noun",
    "definition": "a person falsely claiming to have a special knowledge or skill; a fraud.",
    "exampleSentence": "A self-confessed con artist and charlatan.",
    "exampleSentence2": "Charlatans harming their patients with dubious procedures."
},
{
    "id": "515",
    "word": "juxtaposition",
    "type": "noun",
    "definition": "the fact of two things being seen or placed close together with contrasting effect.",
    "exampleSentence": "The juxtaposition of these two images.",
    "exampleSentence2": "It is the result of the juxtaposition of contrasting colors."
},
{
    "id": "516",
    "word": "gnarled",
    "type": "adjective",
    "definition": "knobbly, rough, and twisted, especially with age. having a rugged, weather-beaten appearance. crabby; cantankerous.",
    "exampleSentence": "The gnarled old oak tree.",
    "exampleSentence2": "He put down his roll and reached over and took her gnarled hand, stroking the back of it with his thumb."
},
{
    "id": "517",
    "word": "transpire",
    "type": "verb",
    "definition": "occur; happen. prove to be the case. (of a secret or something unknown) come to be known; be revealed.",
    "exampleSentence": "I'm going to find out exactly what transpired.",
    "exampleSentence2": "The individual spoke on the condition of anonymity to freely describe what transpired."
},
{
    "id": "518",
    "word": "refractory",
    "type": "adjective",
    "definition": "stubborn or unmanageable. resistant to a process or stimulus. stubbornly resistant to authority or control. not responding to treatment.",
    "exampleSentence": "A refractory case of acne.",
    "exampleSentence2": "For many patients, first-line treatment buys little or no relief, and relapsed or refractory disease entails more-intensive treatment and a worse outlook."
},
{
    "id": "519",
    "word": "demure",
    "type": "adjective",
    "definition": "(of a woman or her behavior) reserved, modest, and shy. (of clothing) lending a modest appearance. polite and a little shy.",
    "exampleSentence": "I shared a compartment with a child and his demure governess.",
    "exampleSentence2": "But my own request for a freshly cleaned grill was polite, even downright demure."
},
{
    "id": "520",
    "word": "demur",
    "type": "noun, verb",
    "definition": "raise doubts or objections or show reluctance. the action or process of objecting to or hesitating over something.",
    "exampleSentence": "Normally she would have accepted the challenge, but she demurred.",
    "exampleSentence2": "They accepted this ruling without demur."
},
{
    "id": "521",
    "word": "mea culpa",
    "type": "noun",
    "definition": "an acknowledgment of one's fault or error. a formal acknowledgment of personal fault or error",
    "exampleSentence": "The mayor's public mea culpa didn't satisfy his critics.",
    "exampleSentence2": "That is the mea culpa that employers voice when accused of lacking empathy for out-of-work Americans."
},
{
    "id": "522",
    "word": "mores",
    "type": "noun",
    "definition": "the essential or characteristic customs and conventions of a community.",
    "exampleSentence": "An offense against social mores.",
    "exampleSentence2": "What they made thrilled a generation of young designers, who saw in their abandonment of old mores a chance for reinvention."
},
{
    "id": "523",
    "word": "galvanize",
    "type": "verb",
    "definition": "shock or excite (someone) into taking action.",
    "exampleSentence": "The urgency of his voice galvanized them into action. to stimulate or excite as if by an electric shock.",
    "exampleSentence2": "An issue that would galvanize public opinion."
},
{
    "id": "524",
    "word": "dereliction",
    "type": "noun",
    "definition": "the state of having been abandoned and become dilapidated. the shameful failure to fulfill one's obligations. neglecting responsibilities.",
    "exampleSentence": "Every year valuable gardens start the slow slide to dereliction.",
    "exampleSentence2": "Doing so would be a dereliction of duty, which is to forecast economic scenarios and formulate policy accordingly."
},
{
    "id": "525",
    "word": "zealous",
    "type": "adjective",
    "definition": "eagerness or enthusiastic activity.",
    "exampleSentence": "Some may object that Americans’ reverence for the Constitution’s text is overly zealous.",
    "exampleSentence2": "That part of the schedule, in that part of the world, is generally followed by only zealous fans, yet expect Woods’ performance to be dissected like the newest Star Wars trailer."
},
{
    "id": "526",
    "word": "clamorous",
    "type": "adjective",
    "definition": "making a loud and confused noise. expressing or characterized by vehement protests or demands.",
    "exampleSentence": "A jostling, clamorous mob.",
    "exampleSentence2": "The clamorous radical wing of the party."
},
{
    "id": "527",
    "word": "arbitrary",
    "type": "adjective",
    "definition": "based on random choice or personal whim, rather than any reason or system. (of power or a ruling body) unrestrained and autocratic in the use of authority.",
    "exampleSentence": "His mealtimes were entirely arbitrary.",
    "exampleSentence2": "Arbitrary rule by King and bishops has been made impossible."
},
{
    "id": "528",
    "word": "treachery",
    "type": "noun",
    "definition": "betrayal of trust; deceptive action or nature. trickery, cheating, and deceit.",
    "exampleSentence": "His resignation was perceived as an act of treachery.",
    "exampleSentence2": "A play about treachery and betrayal."
},
{
    "id": "529",
    "word": "treacherous",
    "type": "adjective",
    "definition": "guilty of or involving betrayal or deception. (of ground, water, conditions, etc.) hazardous because of presenting hidden or unpredictable dangers.",
    "exampleSentence": "A treacherous Gestapo agent.",
    "exampleSentence2": "A vacationer was swept away by treacherous currents."
},
{
    "id": "530",
    "word": "inundate",
    "type": "verb",
    "definition": "overwhelm (someone) with things or people to be dealt with. flood.",
    "exampleSentence": "We've been inundated with complaints from listeners.",
    "exampleSentence2": "The islands may be the first to be inundated as sea levels rise."
},
{
    "id": "531",
    "word": "aversion",
    "type": "noun",
    "definition": "a strong dislike or disinclination. an intense dislike for it.",
    "exampleSentence": "He had a deep-seated aversion to most forms of exercise.",
    "exampleSentence2": "Right down to his aversion to credit cards, which is most odd for someone at the center of the financial services industry."
},
{
    "id": "532",
    "word": "nomenclature",
    "type": "noun",
    "definition": "the devising or choosing of names for things, especially in a science or other discipline. the term or terms applied to someone or something.",
    "exampleSentence": "Seeming to change course, he moved into a soliloquy about the nomenclature of Europe.",
    "exampleSentence2": "By then, developers were building homes in Washington’s “suburbs” — meaning its outer neighborhoods — and the city was trying to impose uniform street nomenclature across the board."
},
{
    "id": "533",
    "word": "shrewd",
    "type": "adjective",
    "definition": "having or showing sharp powers of judgment; astute.",
    "exampleSentence": "She was shrewd enough to guess the motive behind his gesture.",
    "exampleSentence2": "A shrewd politician."
},
{
    "id": "534",
    "word": "astute",
    "type": "adjective",
    "definition": "having or showing an ability to accurately assess situations or people and turn this to one's advantage.",
    "exampleSentence": "An astute businessman.",
    "exampleSentence2": "An astute tenant always reads the small print in a lease."
},
{
    "id": "535",
    "word": "moderation",
    "type": "noun",
    "definition": "the avoidance of excess or extremes, especially in one's behavior or political opinions. the action of making something less extreme, intense, or violent.",
    "exampleSentence": "He urged the police to show moderation.",
    "exampleSentence2": "The union's approach was based on increased dialogue and the moderation of demands."
},
{
    "id": "536",
    "word": "censorious",
    "type": "adjective",
    "definition": "severely critical of others. people who are so critical, they find something wrong in everything.",
    "exampleSentence": "Modest, charitable in his judgments, never censorious, Jim carried tolerance almost too far.",
    "exampleSentence2": "At the risk of sounding censorious, I do not think you are very good at keeping secrets for the rest of your life."
},
{
    "id": "537",
    "word": "vehemently",
    "type": "adverb",
    "definition": "in a forceful, passionate, or intense manner; with great feeling.",
    "exampleSentence": "He vehemently denied any suggestion of improper conduct.",
    "exampleSentence2": "Afghanistan is holding a presidential election on Saturday — a vote the Taliban vehemently opposes."
},
{
    "id": "538",
    "word": "salient",
    "type": "adjective",
    "definition": "most noticeable or important. prominent; conspicuous.",
    "exampleSentence": "It succinctly covered all the salient points of the case.",
    "exampleSentence2": "It was always the salient object in my view."
},
{
    "id": "539",
    "word": "mutable",
    "type": "adjective",
    "definition": "liable to change.",
    "exampleSentence": "The mutable nature of fashion.",
    "exampleSentence2": "The mutable ways of fortune."
},
{
    "id": "540",
    "word": "purveyor",
    "type": "noun",
    "definition": "a person who sells or deals in particular goods. a person or group that spreads or promotes an idea, view, etc.",
    "exampleSentence": "A purveyor of traditional Christian values.",
    "exampleSentence2": "A purveyor of large luxury vehicles."
},

{
    "id": "541",
    "word": "varnish",
    "type": "noun, verb",
    "definition": "an external or superficially attractive appearance of a specific quality. disguise or gloss over (a fact).",
    "exampleSentence": "The White House is varnishing over the defeat of the president's proposal.",
    "exampleSentence2": "We stripped the floor and varnished it."
},
{
    "id": "542",
    "word": "veneer",
    "type": "verb",
    "definition": "cover (something) with a decorative layer of fine wood. cover or disguise (someone or something's true nature) with an attractive appearance. a superficial or deceptively attractive appearance, display, or effect",
    "exampleSentence": "A veneer of tolerance.",
    "exampleSentence2": "But now that veneer is gone, and what remains is a callow man-child at odds with himself."
},
{
    "id": "543",
    "word": "discursive",
    "type": "adjective",
    "definition": "digressing from subject to subject. of a style of speech or writing) fluent and expansive rather than formulaic or abbreviated. relating to discourse or modes of discourse.",
    "exampleSentence": "Students often write dull, secondhand, discursive prose.",
    "exampleSentence2": "The short story is concentrated, whereas the novel is discursive."
},
  ];

  showData() {
    return this.slang;
  }
  showWord(id) {
    return {
      ...this.slang.find(word => {
        return id === word.id;
      })
    };
  }
}
