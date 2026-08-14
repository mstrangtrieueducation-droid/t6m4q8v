const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({
  id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1
});
const input = (id, prompt, answers, explanation, image = "") => ({
  id, type: "input", prompt, answers, explanation, image, points: 1
});

const sections = [
  {
    key: "A", label: "A", title: "Match the words to the pictures.",
    note: "Use the original picture labels a, b, and c.", points: 3,
    sectionImage: A + "section-a-pictures.png",
    questions: [
      choice("A1", "1. land", ["a", "b", "c"], "b", "Picture b shows an area of land with trees and grass."),
      choice("A2", "2. landfill", ["a", "b", "c"], "c", "Picture c shows a landfill where trash is taken."),
      choice("A3", "3. smoke", ["a", "b", "c"], "a", "Picture a shows smoke coming from a chimney.")
    ]
  },
  {
    key: "B", label: "B", title: "Complete the sentences.",
    note: "Use: land, reduce, resources, reuse, sunlight, trash, wood. One word is extra.", points: 6,
    questions: [
      input("B1", "1. Please throw that bad apple in the ___.", ["trash"], "Trash is waste that should be thrown away."),
      input("B2", "2. I made the fire with ___.", ["wood"], "Wood can be burned to make a fire."),
      input("B3", "3. It is important to protect our ___.", ["resources"], "Natural resources are valuable materials that people need and use."),
      input("B4", "4. We need to ___ the amount of trash in our park.", ["reduce"], "Reduce means make the amount smaller."),
      input("B5", "5. There's ___ on sunny days.", ["sunlight"], "Sunlight is the light that comes from the sun."),
      input("B6", "6. I always ___ plastic bags and bottles.", ["reuse"], "Reuse means use an item again instead of throwing it away.")
    ]
  },
  {
    key: "C", label: "C", title: "Listen and check the correct picture. Write the word.",
    note: "Each number has two answers: choose picture a or b, then write the word.", points: 4,
    audio: "assets/audio/Listening-C.mp3",
    questions: [
      {
        id: "C1", type: "pictureWord", points: 2, prompt: "1.",
        pictures: [{ value: "a", image: A + "page1-img3-224x219.png" }, { value: "b", image: A + "page1-img4-224x219.png" }],
        parts: [
          { key: "picture", label: "Correct picture", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows the family at a camp." },
          { key: "word", label: "Write the word", type: "input", answers: ["camp"], explanation: "The word in the audio is camp." }
        ]
      },
      {
        id: "C2", type: "pictureWord", points: 2, prompt: "2.",
        pictures: [{ value: "a", image: A + "page1-img8-224x219.png" }, { value: "b", image: A + "page1-img9-224x219.png" }],
        parts: [
          { key: "picture", label: "Correct picture", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows a person surfing." },
          { key: "word", label: "Write the word", type: "input", answers: ["surf"], explanation: "The word in the audio is surf." }
        ]
      }
    ]
  },
  {
    key: "D", label: "D", title: "Look and complete the sentences.",
    note: "Write the correct position phrase.", points: 4,
    questions: [
      input("D1", "1. The bird is ___ the house.", ["above"], "The bird is flying higher than the house, so it is above the house.", A + "page2-img7-303x152.png"),
      input("D2", "2. The library is ___ the park.", ["across from", "opposite"], "The library and the park are on opposite sides, so the library is across from the park.", A + "page2-img8-299x152.png"),
      input("D3", "3. The squirrel is ___ the box.", ["behind"], "Most of the squirrel is hidden by the box, so it is behind the box.", A + "page2-img2-367x183.png"),
      input("D4", "4. The rabbit is ___ the tree.", ["in front of"], "The rabbit is closer to the viewer than the tree, so it is in front of the tree.", A + "page2-img3-367x183.png")
    ]
  },
  {
    key: "E", label: "E", title: "Write the words in the correct order to make sentences. Then match them to the pictures.",
    note: "Each number has two answers: the complete sentence and the original picture label.", points: 8,
    sectionImage: A + "section-e-pictures.png",
    questions: [
      {
        id: "E1", type: "paired", points: 2, prompt: "1. tree / dog / The / in front of / is / the", parts: [
          { key: "sentence", label: "Complete sentence", type: "input", answers: ["The dog is in front of the tree.", "The dog is in front of the tree"], explanation: "Use subject + is + position phrase: The dog is in front of the tree." },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows the dog in front of the tree." }
        ]
      },
      {
        id: "E2", type: "paired", points: 2, prompt: "2. cat / The / between / is / chairs / the", parts: [
          { key: "sentence", label: "Complete sentence", type: "input", answers: ["The cat is between the chairs.", "The cat is between the chairs"], explanation: "Use between for something in the middle of two objects: The cat is between the chairs." },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows the cat between two chairs." }
        ]
      },
      {
        id: "E3", type: "paired", points: 2, prompt: "3. tree / is / The / dog / the / behind", parts: [
          { key: "sentence", label: "Complete sentence", type: "input", answers: ["The dog is behind the tree.", "The dog is behind the tree"], explanation: "The correct word order is: The dog is behind the tree." },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows the dog behind the tree." }
        ]
      },
      {
        id: "E4", type: "paired", points: 2, prompt: "4. chairs / the / cat / The / next to / is", parts: [
          { key: "sentence", label: "Complete sentence", type: "input", answers: ["The cat is next to the chairs.", "The cat is next to the chairs"], explanation: "The correct word order is: The cat is next to the chairs." },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows the cat next to the chairs." }
        ]
      }
    ]
  },
  {
    key: "F", label: "F", title: "Look and circle the correct words.",
    note: "Choose the time shown on each clock.", points: 3,
    questions: [
      choice("F1", "1. Choose the correct time.", ["nine-fifteen", "nine o'clock"], "nine o'clock", "The clock shows 9:00, which is nine o'clock.", A + "page3-img1-349x249.png"),
      choice("F2", "2. Choose the correct time.", ["three-fifteen", "three-thirty"], "three-fifteen", "The clock shows 3:15, which is three-fifteen.", A + "page3-img2-349x249.png"),
      choice("F3", "3. Choose the correct time.", ["five-fifteen", "five forty-five"], "five forty-five", "The clock shows 5:45, which is five forty-five.", A + "page3-img3-349x249.png")
    ]
  },
  {
    key: "G", label: "G", title: "Circle the correct words.",
    note: "Choose the word or phrase that makes each sentence correct.", points: 4,
    questions: [
      choice("G1", "1. I can blow / surf a bubble.", ["blow", "surf"], "blow", "We blow a bubble by pushing air into it."),
      choice("G2", "2. I saw a fireman recycle / rescue a cat from a tree!", ["recycle", "rescue"], "rescue", "Rescue means save someone or something from danger."),
      choice("G3", "3. I need to buy paper / a shelf at the stationery store.", ["paper", "a shelf"], "paper", "A stationery store sells paper and other writing supplies."),
      choice("G4", "4. I saw a huge recycling plant / machine in the factory.", ["recycling plant", "machine"], "machine", "A factory contains machines; a recycling plant is a whole facility, not one object inside a factory.")
    ]
  },
  {
    key: "H", label: "H", title: "Complete the words. Then match.",
    note: "Each number has two answers: complete the word, then choose picture a, b, or c.", points: 6,
    sectionImage: A + "section-h-pictures.png",
    questions: [
      {
        id: "H1", type: "paired", points: 2, prompt: "1. Please buy a c _ r t _ n of milk.", parts: [
          { key: "word", label: "Complete the word", type: "input", answers: ["carton"], explanation: "Adding a and o completes carton." },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Picture c shows a carton of milk." }
        ]
      },
      {
        id: "H2", type: "paired", points: 2, prompt: "2. I write my feelings in my d _ a r _.", parts: [
          { key: "word", label: "Complete the word", type: "input", answers: ["diary"], explanation: "Adding i and y completes diary." },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "Picture a shows a diary." }
        ]
      },
      {
        id: "H3", type: "paired", points: 2, prompt: "3. Please put the books on the s h _ l f.", parts: [
          { key: "word", label: "Complete the word", type: "input", answers: ["shelf"], explanation: "Adding e completes shelf." },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Picture b shows a shelf." }
        ]
      }
    ]
  },
  {
    key: "I", label: "I", title: "Write the words in the correct order to make questions. Then listen and write the answers.",
    note: "Each number has two answers: the complete question and the answer from the audio.", points: 4,
    audio: "assets/audio/Listening-I.mp3",
    questions: [
      {
        id: "I1", type: "paired", points: 2, prompt: "1. a landfill / across from / Is / the town / there", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Is there a landfill across from the town?", "Is there a landfill across from the town"], explanation: "A there is question uses Is there + noun + place phrase." },
          { key: "answer", label: "Answer from the audio", type: "input", answers: ["Yes, there is.", "Yes, there is"], explanation: "The answer in the audio is: Yes, there is." }
        ]
      },
      {
        id: "I2", type: "paired", points: 2, prompt: "2. books / are / Where / my", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Where are my books?", "Where are my books"], explanation: "A question about location uses Where + are + noun: Where are my books?" },
          { key: "answer", label: "Answer from the audio", type: "input", answers: ["They're behind your desk.", "They're behind your desk", "They are behind your desk.", "They are behind your desk"], explanation: "The answer in the audio is: They're behind your desk." }
        ]
      }
    ]
  },
  {
    key: "J", label: "J", title: "Write the questions. Look at the pictures and answer the questions.",
    note: "Each number has two answers: the complete question and a complete answer.", points: 8,
    questions: [
      {
        id: "J1", type: "paired", points: 2, prompt: "1. the / between / table / Is / chairs / the", image: A + "page4-img2-526x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Is the table between the chairs?", "Is the table between the chairs"], explanation: "Put the words in question order: Is the table between the chairs?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["Yes, it is.", "Yes, it is"], explanation: "The table is between the chairs, so answer: Yes, it is." }
        ]
      },
      {
        id: "J2", type: "paired", points: 2, prompt: "2. a cat / behind / there / the couch / Is", image: A + "page4-img3-526x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Is there a cat behind the couch?", "Is there a cat behind the couch"], explanation: "Use Is there + noun + position phrase: Is there a cat behind the couch?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["No, there isn't.", "No, there isn't", "No, there is not.", "No, there is not"], explanation: "The cat is on the couch, not behind it, so answer: No, there isn't." }
        ]
      },
      {
        id: "J3", type: "paired", points: 2, prompt: "3. are / girls / Where / the", image: A + "page4-img4-526x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Where are the girls?", "Where are the girls"], explanation: "Use Where + are + noun: Where are the girls?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["They're in front of the library.", "They're in front of the library", "They are in front of the library.", "They are in front of the library", "They're at the library.", "They're at the library", "They are at the library.", "They are at the library"], explanation: "The girls are standing in front of the library. The answer key also accepts at the library." }
        ]
      },
      {
        id: "J4", type: "paired", points: 2, prompt: "4. above / the recycling plant / Is / smoke / there", image: A + "page4-img5-526x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Is there smoke above the recycling plant?", "Is there smoke above the recycling plant"], explanation: "Put the words in question order: Is there smoke above the recycling plant?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["Yes, there is.", "Yes, there is"], explanation: "The picture shows smoke above the recycling plant, so answer: Yes, there is." }
        ]
      }
    ]
  }
];
