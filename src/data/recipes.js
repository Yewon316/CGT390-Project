const recipes = [
    {
        id: 1,
        title: "Kimchi Rice",
        category: "Rice",
        difficulty: "Easy",
        time: 15,
        summary: "Rice + kimchi stir-fried with egg and sesame oil.",
        image: `${import.meta.env.BASE_URL}./images/Kimchi.jpg`,
        prep: 5,
        cook: 10,
        ingredients: [
        "Cooked rice 1 cup",
        "Kimchi 1/2 cup, chopped",
        "Egg 1",
        "Oil 1 tbsp",
        "Sesame oil 1 tsp",
        "Salt & pepper"
    ],
        steps: [
        "Heat oil in a pan over medium heat.",
        "Stir-fry chopped kimchi for 1–2 min.",
        "Add rice and toss until hot.",
        "Push to the side, scramble the egg, then mix.",
        "Finish with sesame oil; season to taste."
      ]
    },
    {
        id: 2,
        title: "Fried Rice",
        category: "Rice",
        difficulty: "Easy",
        time: 15,
        summary: "Leftover rice stir-fried with vegetables, egg, and soy sauce.",
        image: `${import.meta.env.BASE_URL}./images/FriedRice.jpg`,
        prep: 6,
        cook: 9,
        ingredients: [
        "Cold cooked rice 1 cup",
        "Mixed veggies 1/2 cup",
        "Egg 1",
        "Soy sauce 1 tbsp",
        "Oil 1 tbsp"
    ],
        steps: [
        "Heat oil and scramble egg; set aside.",
        "Stir-fry veggies 1–2 min.",
        "Add rice and soy sauce; toss well.",
        "Return egg; mix and serve."
    ]
    },
    {
        id: 3,
        title: "Pasta with Tomato Sauce",
        category: "Noodle",
        difficulty: "Easy",
        time: 20,
        summary: "Boiled pasta with canned tomato sauce, garlic, olive oil.",
        image: `${import.meta.env.BASE_URL}./images/PastawithTomatoSauce.jpg`,
        prep: 8,
        cook: 12,
        ingredients: [
        "Pasta 150 g",
        "Canned tomatoes 1 cup",
        "Garlic 1 clove, minced",
        "Olive oil 1 tbsp",
        "Salt & pepper"
    ],
        steps: [
        "Boil pasta in salted water until al dente.",
        "In a pan, saute garlic in oil, add tomatoes, simmer.",
        "Toss pasta with sauce; season and serve."
    ]
    },

    { id: 4,  title: "Omelette",                 category: "Rice",        difficulty: "Easy",   time: 10, summary: "Eggs folded with onion, cheese, or veggies." },
    { id: 5,  title: "Ramen",                    category: "Noodle",      difficulty: "Easy",   time: 10, summary: "Instant ramen upgraded with egg and scallion." },
    { id: 6,  title: "Grilled Cheese Sandwich",  category: "Bread",       difficulty: "Easy",   time: 10, summary: "Butter, cheese, toasted golden brown." },
    { id: 7,  title: "Stir-fried Vegetables",    category: "Vegetables",  difficulty: "Medium", time: 12, summary: "Quick garlic stir-fry of mixed greens." },
    { id: 8,  title: "Chicken Salad",            category: "Vegetables",  difficulty: "Easy",   time: 15, summary: "Chicken breast with lettuce, cucumber, dressing." },
    { id: 9,  title: "Tomato Soup",              category: "Soup",        difficulty: "Medium", time: 20, summary: "Simple tomato-based soup." },
    { id: 10, title: "Bagel",                    category: "Bread",       difficulty: "Easy",   time: 3,  summary: "Warm bagel with butter or cream cheese." },

    { id: 11, title: "Garlic Butter Udon",       category: "Noodle",      difficulty: "Easy",   time: 12, summary: "Udon tossed in garlic butter and soy." },
    { id: 12, title: "Egg Fried Rice",           category: "Rice",        difficulty: "Easy",   time: 12, summary: "Rice, egg, soy—basic and fast." },
    { id: 13, title: "Miso Soup",                category: "Soup",        difficulty: "Easy",   time: 8,  summary: "Dashi, miso paste, tofu, scallion." },
    { id: 14, title: "Veggie Ramen Stir-fry",    category: "Noodle",      difficulty: "Medium", time: 15, summary: "Boiled ramen stir-fried with veggies." },
    { id: 15, title: "Avocado Toast",            category: "Bread",       difficulty: "Easy",   time: 7,  summary: "Mashed avocado on toast with lemon." },
    { id: 16, title: "Spinach Omelet Rice",      category: "Rice",        difficulty: "Medium", time: 18, summary: "Rice topped with spinach omelet and ketchup." },
    { id: 17, title: "Creamy Corn Soup",         category: "Soup",        difficulty: "Easy",   time: 12, summary: "Cream-style corn simmered with milk." },
    { id: 18, title: "Pesto Pasta",              category: "Noodle",      difficulty: "Easy",   time: 14, summary: "Pasta tossed with jarred pesto." },
    { id: 19, title: "Garlic Bread",             category: "Bread",       difficulty: "Easy",   time: 10, summary: "Toasted bread with garlic butter." },
    { id: 20, title: "Sesame Cucumber Salad",    category: "Vegetables",  difficulty: "Easy",   time: 6,  summary: "Sliced cucumber with sesame, vinegar." },

    { id: 21, title: "Teriyaki Chicken Rice Bowl", category: "Rice",      difficulty: "Medium", time: 22, summary: "Chicken with teriyaki over rice." },
    { id: 22, title: "One-pan Soy Noodles",      category: "Noodle",      difficulty: "Easy",   time: 11, summary: "Noodles with soy, sugar, sesame oil." },
    { id: 23, title: "Potato Leek Soup",         category: "Soup",        difficulty: "Medium", time: 25, summary: "Potato, leek, broth blended smooth." },
    { id: 24, title: "French Toast",             category: "Bread",       difficulty: "Easy",   time: 12, summary: "Egg-milk soaked bread pan-fried." },
    { id: 25, title: "Roasted Veg Medley",       category: "Vegetables",  difficulty: "Easy",   time: 25, summary: "Oven-roasted carrots, broccoli, onion." },
    { id: 26, title: "Tuna Mayo Rice",           category: "Rice",        difficulty: "Easy",   time: 8,  summary: "Canned tuna + mayo over hot rice." },
    { id: 27, title: "Garlic Chili Oil Noodles", category: "Noodle",      difficulty: "Medium", time: 13, summary: "Chili crisp, garlic, soy, noodle toss." },
    { id: 28, title: "Egg Drop Soup",            category: "Soup",        difficulty: "Easy",   time: 10, summary: "Egg ribbons in seasoned broth." },
    { id: 29, title: "Caprese Toast",            category: "Bread",       difficulty: "Easy",   time: 9,  summary: "Tomato, mozzarella, basil on toast." },
    { id: 30, title: "Stir-fried Bok Choy",      category: "Vegetables",  difficulty: "Easy",   time: 10, summary: "Bok choy with garlic and soy." },

    { id: 31, title: "Curry Fried Rice",         category: "Rice",        difficulty: "Medium", time: 18, summary: "Curry powder fried rice with veggies." },
    { id: 32, title: "Peanut Butter Noodles",    category: "Noodle",      difficulty: "Easy",   time: 12, summary: "Peanut sauce with soy and garlic." },
    { id: 33, title: "Chicken Noodle Soup",      category: "Soup",        difficulty: "Medium", time: 28, summary: "Broth with noodles and chicken." },
    { id: 34, title: "Egg Salad Sandwich",       category: "Bread",       difficulty: "Easy",   time: 15, summary: "Chopped egg + mayo on bread." },
    { id: 35, title: "Kale Caesar Salad",        category: "Vegetables",  difficulty: "Easy",   time: 10, summary: "Kale with creamy Caesar dressing." },
    { id: 36, title: "Bibimbap (Simple)",        category: "Rice",        difficulty: "Medium", time: 25, summary: "Rice with assorted veggies and egg." },
    { id: 37, title: "Lemon Butter Pasta",       category: "Noodle",      difficulty: "Easy",   time: 14, summary: "Butter, lemon, pasta, parsley." },
    { id: 38, title: "Seaweed Soup",             category: "Soup",        difficulty: "Easy",   time: 18, summary: "Miyeok soup with soy and sesame." },
    { id: 39, title: "Garlic Herb Focaccia",     category: "Bread",       difficulty: "Hard",   time: 45, summary: "Quick-rise focaccia with garlic herb." },
    { id: 40, title: "Honey Roasted Carrots",    category: "Vegetables",  difficulty: "Easy",   time: 22, summary: "Carrots roasted with honey and oil." }
];
    export default recipes;
