// Logo dan User
import logo_whitebg from './Logo_whitebg.png';
import logo_orangebg from './Logo_orangebg.png';
import logo_beigebg from './Logo_beige.png';
import logo_browntext from './Logo_brown.png';
import logo_admin from './Logo_admin.png';
import logo_noBG from './Logo_noBG.png';
import keranjang from './Keranjang.png';
import search from './Search.png';
import user from './User.png';
import trash from './trash.png';

// Icon sosmed
import icon_facebook from './Icon_facebook.png';
import icon_instagram from './Icon_instagram.png';
import icon_tiktok from './Icon_tiktok.png';

// Chef
import chef_1 from './Chef1.jpg';
import chef_2 from './Chef2.jpg';
import chef_3 from './Chef3.jpg';
import chef_4 from './Chef4.jpg';
import chef_5 from './Chef5.jpg';
import chef_6 from './Chef6.jpg';
import chef_7 from './Chef7.jpg';
import chef_8 from './Chef8.jpg';

// Staff
import staff_1 from './Staff1.jpg';
import staff_2 from './Staff2.jpg';
import staff_3 from './Staff3.jpg';
import staff_4 from './Staff4.jpg';
import staff_5 from './Staff5.jpg';
import staff_6 from './Staff6.jpg';
import staff_7 from './Staff7.jpg';
import staff_8 from './Staff8.jpg';
import staff_9 from './Staff9.jpg';
import staff_10 from './Staff10.jpg';
import staff_11 from './Staff11.jpg';
import staff_12 from './Staff12.jpg';

// Department
import bartender from './Bartender.jpeg';
import beverage from './Beverage.jpeg';
import customer from './Customer.jpeg';
import guest from './Guest.jpeg';
import head from './Head.jpeg';
import hospitality from './Hospitality.jpeg';
import inventory from './Inventory.jpeg';
import kitchen from './Kitchen.jpeg';
import quality from './Quality.jpeg';
import reservation from './Reservation.jpeg';
import sustainability from './Sustainability.jpeg';
import events from './Events.jpeg';

// Other
import restaurant from './Restaurant.jpg';
import map from './Maps.png';
import whatsapp from './Whatsapp.png';
import mail from './Mail.png';
import gopay from './gopay.png';
import qris from './qris.png';

// Filter menu
import filter_appetizer from './filter_appetizer.png';
import filter_chicken from './filter_chicken.png';
import filter_beef from './filter_beef.png';
import filter_seafood from './filter_seafood.png';
import filter_dessert from './filter_dessert.png';
import filter_drink from './filter_drink.png';

const assets = {
  logo_whitebg,
  logo_orangebg,
  logo_beigebg,
  logo_browntext,
  logo_admin,
  logo_noBG,
  keranjang,
  search,
  user,
  trash,
  icon_facebook,
  icon_instagram,
  icon_tiktok,
  chef_1,
  chef_2,
  chef_3,
  chef_4,
  chef_5,
  chef_6,
  chef_7,
  chef_8,
  staff_1,
  staff_2,
  staff_3,
  staff_4,
  staff_5,
  staff_6,
  staff_7,
  staff_8,
  staff_9,
  staff_10,
  staff_11,
  staff_12,
  bartender,
  beverage,
  customer,
  guest,
  head,
  hospitality,
  inventory,
  kitchen,
  quality,
  reservation,
  sustainability,
  events,
  restaurant,
  map,
  whatsapp,
  mail,
  gopay,
  qris
};

const filter_list = [
  {
    filter_name: 'Appetizer',
    filter_image: filter_appetizer
  },
  {
    filter_name: 'Chicken',
    filter_image: filter_chicken
  },
  {
    filter_name: 'Beef',
    filter_image: filter_beef
  },
  {
    filter_name: 'Seafood',
    filter_image: filter_seafood
  },
  {
    filter_name: 'Dessert',
    filter_image: filter_dessert
  },
  {
    filter_name: 'Drink',
    filter_image: filter_drink
  }
];

const menu_list = [
    {
        _id:"aaaaa",
        name: "French Fries with Ranch",
        description: "Crispy golden fries, lightly salted and served with a side of ranch sauce.",
        price: 25000,
        image: '/src/assets/App_1.png',
        category: "Appetizer",
        date: 1716634345448,
        bestseller: false
    },
    {
        _id:"aaaab",
        name: "Tomato Burrata Bruschetta",
        description: "Fresh burrata cheese served on toasted baguette slices, topped with cherry tomatoes, basil, and a drizzle of balsamic glaze.",
        price: 35000,
        image: '/src/assets/App_2.png',
        category: "Appetizer",
        date: 1716621345448,
        bestseller: true
    },
    {
        _id:"aaaac",
        name: "Spicy Garlic Edamame",
        description: "Steamed edamame pods tossed in a spicy garlic sauce, offering a bold and flavorful appetizer.",
        price: 15000,
        image: '/src/assets/App_3.png',
        category: "Appetizer",
        date: 1716234545448,
        bestseller: false
    },
    {
        _id:"aaaad",
        name: "Mozzarella Sticks",
        description: "Breaded and deep-fried mozzarella cheese sticks, served with marinara sauce for a gooey and delicious bite.",
        price: 30000,
        image: '/src/assets/App_4.png',
        category: "Appetizer",
        date: 1716621345448,
        bestseller: true
    },
    {
        _id:"aaaae",
        name: "Vegetable Spring Rolls",
        description: "Crispy spring rolls stuffed with fresh vegetables, served with a sweet and tangy dipping sauce.",
        price: 25000,
        image: '/src/assets/App_5.png',
        category: "Appetizer",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaaf",
        name: "Caesar Salad",
        description: "A classic salad with crisp romaine lettuce, parmesan cheese, croutons, and creamy Caesar dressing.",
        price: 15000,
        image: '/src/assets/App_6.png',
        category: "Appetizer",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaag",
        name: "Club Sandwich",
        description: "A stacked sandwich with layers of turkey, bacon, lettuce, tomato, and mayo, served with a side of fries.",
        price: 35000,
        image: '/src/assets/App_7.png',
        category: "Appetizer",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaaah",
        name: "Creamy Mushroom Soup",
        description: "A rich and velvety mushroom soup infused with aromatic herbs and finished with a touch of cream.",
        price: 25000,
        image: '/src/assets/App_8.png',
        category: "Appetizer",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaai",
        name: "Tomato Pumpkin Soup",
        description: "A comforting blend of roasted tomatoes and pumpkin, seasoned with spices and herbs for a warm and hearty bowl.",
        price: 25000,
        image: '/src/assets/App_9.png',
        category: "Appetizer",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaaj",
        name: "Roasted Corn",
        description: "Charred and seasoned corn on the cob, brushed with butter and sprinkled with spices for a smoky flavor.",
        price: 15000,
        image: '/src/assets/App_10.png',
        category: "Appetizer",
        date: 1716622345448,
        bestseller: false
    },

    {
        _id:"aaaak",
        name: "Lemon Roasted Chicken",
        description: "Juicy roasted chicken infused with fresh herbs and citrus, served with a side of roasted vegetables",
        price: 155000,
        image: '/src/assets/Chi_1.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaaal",
        name: "Chicken Cordon Bleu",
        description: "Breaded chicken breast stuffed with ham and cheese, fried to perfection and served with a creamy sauce.",
        price: 55000,
        image: '/src/assets/Chi_2.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaam",
        name: "Lebanese Chicken Skewers",
        description: "Grilled marinated chicken skewers with Middle Eastern spices, served with a yogurt dipping sauce.",
        price:55000,
        image: '/src/assets/Chi_3.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaan",
        name: "Chicken Parmesan Pasta",
        description: "Crispy chicken cutlet served over pasta with rich marinara sauce and melted parmesan cheese.",
        price: 65000,
        image: '/src/assets/Chi_4.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaaao",
        name: "Chicken Fried Steak",
        description: "A Southern classic featuring breaded and fried chicken steak smothered in creamy country gravy.",
        price: 45000,
        image: '/src/assets/Chi_5.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaap",
        name: "Butter Masala Chicken",
        description: "A rich and creamy Indian dish with tender chicken simmered in a spiced tomato and butter sauce, served with rice or naan.",
        price: 75000,
        image: '/src/assets/Chi_6.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaaaq",
        name: "Chicken Katsu Curry",
        description: "Crispy Japanese-style breaded chicken cutlet served with a thick and flavorful curry sauce.",
        price: 65000,
        image: '/src/assets/Chi_7.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaar",
        name: "Cilantro Chicken Wings",
        description: "Zesty grilled chicken wings marinated in a tangy cilantro-lime sauce, perfect for snacking.",
        price: 75000,
        image: '/src/assets/Chi_8.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaaas",
        name: "Honey Glazed Chicken",
        description: "Tender chicken glazed with a sweet and tangy honey mustard sauce, served with a side of vegetables.",
        price: 70000,
        image: '/src/assets/Chi_9.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaat",
        name: "Maple Mustard Chicken",
        description: "A bold and spicy chicken dish paired with smooth and creamy polenta for a balanced meal.",
        price: 65000,
        image: '/src/assets/Chi_10.png',
        category: "Chicken",
        date: 1716622345448,
        bestseller: false
    },

    {
        _id:"aaaau",
        name: "Braised Short Ribs",
        description: "Slow-cooked short ribs in a rich herb-infused sauce, served with mashed potatoes.",
        price: 85000,
        image: '/src/assets/Beef_1.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaaav",
        name: "Garlic Butter Brazilian Steak",
        description: " Juicy grilled steak smothered in a flavorful garlic butter sauce, served with rice and beans.",
        price: 85000,
        image: '/src/assets/Beef_2.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaaw",
        name: "Beef Bourguignon",
        description: "A classic French stew made with tender beef, red wine, and a medley of aromatic vegetables.",
        price: 80000,
        image: '/src/assets/Beef_3.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaax",
        name: "Red Wine Beef Stew",
        description: " Hearty slow-cooked beef stew with red wine, root vegetables, and fresh herbs for a comforting meal.",
        price: 95000,
        image: '/src/assets/Beef_4.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaaay",
        name: "Beef Wellington",
        description: "A luxurious dish featuring beef tenderloin wrapped in puff pastry with mushroom duxelles and prosciutto.",
        price: 90000,
        image: '/src/assets/Beef_5.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaaz",
        name: "Smash Burger",
        description: "A crispy-edged, juicy beef patty served on a toasted bun with classic burger toppings.",
        price: 75000,
        image: '/src/assets/Beef_6.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaaba",
        name: "Pumpkin Purée Short Ribs",
        description: "Tender braised short ribs served atop a smooth and creamy pumpkin purée.",
        price: 90000,
        image: '/src/assets/Beef_7.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabb",
        name: "Braised Rib Ragu Pasta",
        description: "A rich and flavorful pasta dish featuring slow-cooked short ribs in a savory tomato sauce.",
        price: 80000,
        image: '/src/assets/Beef_8.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabc",
        name: "Bavette Beef Stroganoff",
        description: "A creamy and savory stroganoff dish made with tender Bavette beef and mushrooms over egg noodles.",
        price: 85000,
        image: '/src/assets/Beef_9.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabd",
        name: "French Onion Braised Beef ",
        description: "Slow-cooked beef infused with caramelized onions and a rich broth, served with crusty bread.",
        price: 75000,
        image: '/src/assets/Beef_10.png',
        category: "Beef",
        date: 1716622345448,
        bestseller: false
    },

    {
        _id:"aaabe",
        name: "Garlic Butter Salmon",
        description: "Perfectly seared salmon fillet coated in a rich garlic butter sauce, served with a side of vegetables.",
        price: 80000,
        image: '/src/assets/Sea_1.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabf",
        name: "Garlic Butter Clams",
        description: "Fresh clams sautéed in a fragrant garlic butter sauce, served with crusty bread.",
        price: 60000,
        image: '/src/assets/Sea_2.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabg",
        name: "Lemon Lobster Risotto",
        description: "Creamy risotto infused with lemon butter and topped with succulent lobster meat.",
        price: 105000,
        image: '/src/assets/Sea_3.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabh",
        name: "Jjamppong Seafood",
        description: "A spicy Korean seafood noodle soup with a variety of fresh seafood and vegetables.",
        price: 80000,
        image: '/src/assets/Sea_4.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabi",
        name: "Seared Scallops",
        description: "Tender seared scallops served with a delicate vanilla-infused beurre blanc sauce.",
        price: 85000,
        image: '/src/assets/Sea_5.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabj",
        name: "Keto Chilean Seabass",
        description: "A low-carb delight featuring Chilean seabass with a crispy walnut pesto crust.",
        price: 75000,
        image: '/src/assets/Sea_6.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabk",
        name: "Bouillabaisse",
        description: "A rich and flavorful French seafood stew with a variety of fresh fish, shellfish, and aromatic herbs.",
        price: 85000,
        image: '/src/assets/Sea_7.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabl",
        name: "Spicy Coconut Crab Soup",
        description: "A creamy and spicy crab soup infused with coconut milk and Thai spices.",
        price: 125000,
        image: '/src/assets/Sea_8.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabm",
        name: "Black Pepper Crab",
        description: "A bold and spicy crab dish coated in a fragrant black pepper sauce.",
        price: 125000,
        image: '/src/assets/Sea_9.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabn",
        name: "Creamy Cajun Shrimp Pasta",
        description: "A spicy and creamy pasta dish with plump shrimp, Cajun seasoning, and a luscious sauce.",
        price: 75000,
        image: '/src/assets/Sea_10.png',
        category: "Seafood",
        date: 1716622345448,
        bestseller: false
    },

    {
        _id:"aaabo",
        name: "Chocolate Tiramisu",
        description: "A luscious Italian dessert featuring layers of coffee-soaked sponge cake, mascarpone cream, and cocoa powder.",
        price: 35000,
        image: '/src/assets/Des_1.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabp",
        name: "Raspberry Panna Cotta",
        description: "A silky smooth Italian dessert made with sweetened cream and topped with a tangy raspberry coulis.",
        price: 25000,
        image: '/src/assets/Des_2.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabq",
        name: "Pear & Frangipane Tart",
        description: "A delicate almond-based tart filled with poached pears, baked to perfection with a buttery crust.",
        price: 40000,
        image: '/src/assets/Des_3.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabr",
        name: "Tres Leches Cake",
        description: "A light sponge cake soaked in three kinds of milk, creating a moist and decadent treat.",
        price: 50000,
        image: '/src/assets/Des_4.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabs",
        name: "Strawberry Cheesecake",
        description: "A creamy cheesecake layered with fresh strawberry compote on a buttery graham cracker crust.",
        price: 35000,
        image: '/src/assets/Des_5.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabt",
        name: "Vanilla Soufflé ",
        description: "A light and airy baked vanilla dessert, served warm with a dusting of powdered sugar.",
        price: 30000,
        image: '/src/assets/Des_6.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabu",
        name: "Crème Brûlée",
        description: "A classic French dessert featuring a rich custard base with a caramelized sugar topping.",
        price: 30000,
        image: '/src/assets/Des_7.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabv",
        name: "Chocolate Skillet Cookies",
        description: "Warm, gooey chocolate chip cookies baked in a skillet, served with a scoop of vanilla ice cream.",
        price: 45000,
        image: '/src/assets/Des_8.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabw",
        name: "Cherry Danish",
        description: "A flaky and buttery pastry filled with sweet cherry compote and drizzled with icing.",
        price: 25000,
        image: '/src/assets/Des_9.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaabx",
        name: "Smores Delight",
        description: "A layered dessert of melted chocolate, marshmallow, and graham cracker crumbles for a nostalgic treat.",
        price: 30000,
        image: '/src/assets/Des_10.png',
        category: "Dessert",
        date: 1716622345448,
        bestseller: false
    },

    {
        _id:"aaaby",
        name: "Classic Ice Tea",
        description: "Refreshing and chilled black tea, lightly sweetened and served over ice.",
        price: 10000,
        image: '/src/assets/Drink_1.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaabz",
        name: "Dalgona Coffee",
        description: "A frothy whipped coffee drink served over cold or hot milk for a delightful caffeine boost.",
        price: 20000,
        image: '/src/assets/Drink_2.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaaca",
        name: "Strawberry Mojito Cocktail",
        description: "A fruity twist on the classic mojito, with fresh strawberries, mint, lime, and rum.",
        price: 30000,
        image: '/src/assets/Drink_3.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id:"aaacb",
        name: "Korean Green Plum Ice Tea",
        description: "A sweet and tangy iced tea infused with Korean green plums for a refreshing flavor.",
        price: 25000,
        image: '/src/assets/Drink_4.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaacc",
        name: "Hot Cappuccino",
        description: "A classic espresso-based drink with steamed milk and a rich foam topping.",
        price: 20000,
        image: '/src/assets/Drink_5.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaacd",
        name: "Mineral Water",
        description: "Pure and refreshing bottled mineral water, perfect for hydration.",
        price: 10000,
        image: '/src/assets/Drink_6.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaace",
        name: "Long Island Iced Tea",
        description: "A strong and smooth cocktail combining multiple spirits with a splash of cola and lemon.",
        price: 25000,
        image: '/src/assets/Drink_7.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaacf",
        name: "Watermelon Slushie",
        description: "A refreshing frozen drink made with blended fresh watermelon and ice.",
        price: 25000,
        image: '/src/assets/Drink_8.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaacg",
        name: "Passion Fruit Juice",
        description: "A tropical and tangy juice made from fresh passion fruit.",
        price: 25000,
        image: '/src/assets/Drink_9.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id:"aaach",
        name: "Mango Sago",
        description: "A creamy and sweet mango dessert drink with chewy sago pearls.",
        price: 30000,
        image: '/src/assets/Drink_10.png',
        category: "Drink",
        date: 1716622345448,
        bestseller: true
    },
]

export {menu_list};
export { assets, filter_list };