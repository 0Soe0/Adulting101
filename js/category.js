const categories = {
  electricity: {
    title: "Electricity",
    description: "Sacred of touching some wire you're not supposed to and getting charred? Here you can find all you need to know about electricity, from your fellow members who haven't gotten electrocuted... yet?",
    icon: "./img/electricityIcon.png",
    questions: [
      {
        question: "Why does the light in my living room keep flickering?",
        description: "The ceiling light has been flickering on and off for the past few days. The bulb is new, and I'm not sure if the problem is the fixture, the wiring, or something else.",
      },
      {
        question: "Can I replace a broken electrical outlet by myself?",
        description: "One of the outlets in my kitchen stopped working. I have never done electrical work before and want to know if it's safe to replace it myself.",
      },
      {
        question: "Why does my circuit breaker keep tripping?",
        description: "Every time I use my microwave and coffee maker at the same time, the power shuts off in part of the house. I don't understand what is causing it.",
      },
      {
        question: "How do I install a new ceiling fan where a light fixture is now?",
        description: "I want to replace an existing ceiling light with a ceiling fan, but I don't know what wires need to be connected or whether the electrical box can support the fan.",
      },
    ],
    tutorials: [
      {
        title: "How to Safely Install a New Light Switch",
        description: "Learn the correct process for replacing an old light switch with a new one, including how to identify wires, safely disconnect power, and test the installation once the job is complete.",
        img: "./img/HowtoSafelyInstallaNewLightSwitch.png",
      },
      {
        title: "How to Test an Electrical Outlet with a Multimeter",
        description: "This tutorial explains how to use a multimeter to verify voltage, check for wiring issues, and determine whether an outlet is functioning properly and safely.",
        img: "./img/HowtoTestanElectricalOutletwithaMultimeter.png",
      },
      {
        title: "How to Add a Surge Protector to Protect Home Electronics",
        description: "Discover how surge protectors work, where they should be installed, and how to choose the right protection level for computers, televisions, and other sensitive devices.",
        img: "./img/HowtoAddaSurgeProtectortoProtectHomeElectronics.png",
      },
      {
        title: "How to Label Your Home's Electrical Panel",
        description: "A step-by-step guide to identifying circuits, mapping them to specific rooms and appliances, and creating clear labels that make future maintenance and troubleshooting much easier.",
        img: "./img/HowtoLabelYourHome'sElectricalPanel.png",
      },
    ],
  },
  plumbing: {
    title: "Plumbing",
    description: "Your pipes are clogged? Your toilet is overflowing? Here you can find all you need to know about plumbing, from your fellow members who have gotten that wedding ring back from the kitchen pipes!",
    icon: "./img/plumbingIcon.png",
    questions: [
      {
        question: "Why is my kitchen sink draining so slowly?",
        description: "Water takes a long time to drain from the sink, and sometimes it pools up while I'm washing dishes. I don't know if the pipes are clogged or if there's another problem.",
      },
      {
        question: "Can I fix a leaking faucet by myself?",
        description: "My bathroom faucet keeps dripping even when it's fully turned off. I've never done any plumbing work before and want to know if it's something I can repair on my own.",
      },
      {
        question: "Why is my toilet constantly running?",
        description: "After flushing, I can still hear water running inside the toilet tank for several minutes. I'm not sure what part is causing the issue or how to stop it.",
      },
      {
        question: "How do I install a new shower head?",
        description: "I bought a new shower head and want to replace the old one, but I don't know what tools I need or if I need to shut off the water before starting.",
      },
    ],
    tutorials: [
      {
        title: "How to Shut Off Your Home's Water Supply in an Emergency",
        description: "Learn how to locate and operate your home's main water shut-off valve so you can quickly stop the flow of water during leaks, burst pipes, or plumbing repairs.",
        img: "./img/HowtoShutOffYourHome'sWaterSupplyinanEmergency.png",
      },
      {
        title: "How to Install a New Bathroom Faucet",
        description: "This tutorial walks through removing an old faucet, connecting water supply lines, securing the new fixture, and checking for leaks after installation.",
        img: "./img/HowtoInstallaNewBathroomFaucet.png",
      },
      {
        title: "How to Unclog a Drain Using Basic Plumbing Tools",
        description: "Discover how to safely clear common sink and shower drain blockages using a plunger, drain snake, and other simple tools without damaging your pipes.",
        img: "./img/HowtoUnclogaDrainUsingBasicPlumbingTools.png",
      },
      {
        title: "How to Winterize Outdoor Water Pipes and Faucets",
        description: "Follow a proven process for protecting exterior plumbing from freezing temperatures by draining water lines, insulating pipes, and preventing costly winter damage.",
        img: "./img/HowtoWinterizeOutdoorWaterPipesandFaucets.png",
      },
    ],
  },
  mechanics: {
    title: "Mechanics",
    description: "Your car won't start? Your engine is making weird noises? Here you can find all you need to know about mechanics, from your fellow members who know square wiper blades are best!!",
    icon: "./img/mechanicsIcon.png",
    questions: [
      {
        question: "Why is the check engine light on in my car?",
        description: "The check engine light came on while I was driving, but the car seems to be running normally. I don't know what the light means or whether it's safe to keep driving.",
      },
      {
        question: "How do I know if my car needs an oil change?",
        description: "I've had my car for a while and I'm not sure when the oil was last changed. I want to know what signs to look for and how often oil changes are needed.",
      },
      {
        question: "Why won't my car start?",
        description: "When I turn the key, the engine doesn't start. Sometimes I hear a clicking noise, and I'm not sure if the problem is the battery, starter, or something else.",
      },
      {
        question: "Can I replace a flat tire by myself?",
        description: "One of my tires went flat, and I've never changed a tire before. I want to know what tools I need and whether it's something a beginner can do safely.",
      },
    ],
    tutorials: [
      {
        title: "How to Check and Refill Your Car's Fluids",
        description: "Learn how to inspect and top off essential fluids such as engine oil, coolant, brake fluid, and windshield washer fluid to keep your vehicle running smoothly.",
        img: "./img/HowtoCheckandRefillYourCar'sFluids.png",
      },
      {
        title: "How to Jump-Start a Dead Car Battery Safely",
        description: "This tutorial explains the correct way to connect jumper cables, start a vehicle with a dead battery, and avoid common mistakes that can damage electrical components.",
        img: "./img/HowtoJump-StartaDeadCarBatterySafely.png",
      },
      {
        title: "How to Replace Windshield Wiper Blades",
        description: "Follow a simple step-by-step process for removing worn wiper blades, selecting compatible replacements, and installing them correctly for improved visibility in bad weather.",
        img: "./img/HowtoReplaceWindshieldWiperBlades.png",
      },
      {
        title: "How to Check Tire Pressure and Inflate Your Tires",
        description: "Discover how to use a tire pressure gauge, find the recommended pressure for your vehicle, and properly inflate your tires to improve safety, fuel efficiency, and tire life.",
        img: "./img/HowtoCheckTirePressureandInflateYourTires.png",
      },
    ],
  },
  cleaning: {
    title: "Cleaning",
    description: "That oil stained black pan stares back at you everytime you're frying up some bacon? Here you can find all you need to know about cleaning, from your fellow members who refuse to change the beaten up scrub daddy sponge.",
    icon: "./img/cleaningIcon.png",
    questions: [
      {
        question: "How do I remove a stain from my carpet?",
        description: "I accidentally spilled a drink on my carpet, and now there's a noticeable stain. I don't know what cleaning products are safe to use or how to remove it without damaging the carpet.",
      },
      {
        question: "Why does my bathroom still smell bad after cleaning?",
        description: "I've cleaned the toilet, sink, and floor, but there's still an unpleasant odor in the bathroom. I'm not sure where the smell is coming from or what else I should clean.",
      },
      {
        question: "How often should I deep clean my house?",
        description: "I do basic cleaning regularly, but I'm not sure how often tasks like washing windows, cleaning behind appliances, or scrubbing grout should be done.",
      },
      {
        question: "Can I use the same cleaner on all surfaces in my kitchen?",
        description: "I have countertops, stainless steel appliances, and a glass stovetop. I don't know if one cleaning product is safe for everything or if different surfaces require different cleaners.",
      },
    ],
    tutorials: [
      {
        title: "How to Deep Clean an Oven",
        description: "how to remove built-up grease, food residue, and stubborn stains from your oven using safe cleaning methods. This tutorial covers everything from preparing the appliance and cleaning oven racks to restoring the interior for improved performance and appearance.",
        img: "./img/HowtoDeepCleananOven.png",
      },
      {
        title: "How to Clean and Maintain Hardwood Floors",
        description: "This tutorial explains the proper techniques and products to use when cleaning hardwood floors to keep them looking great without causing damage.",
        img: "./img/HowtoCleanandMaintainHardwoodFloors.png",
      },
      {
        title: "How to Remove Soap Scum from Shower Doors",
        description: "Follow a step-by-step process for breaking down stubborn soap scum and water spots on glass shower doors, restoring clarity and shine.",
        img: "./img/HowtoRemoveSoapScumfromShowerDoors.png",
      },
      {
        title: "How to Create an Effective Weekly Cleaning Schedule",
        description: "Discover how to organize household cleaning tasks into a manageable routine that keeps your home tidy while reducing the time spent cleaning each week.",
        img: "./img/HowtoCreateanEffectiveWeeklyCleaningSchedule.png",
      },
    ],
  },
  gardening: {
    title: "Gardening",
    description: "Plants be looking like Timmy Turner's mom takes care of them? Here you can find all you need to know about gardening, from your fellow members who have forgotten to water their plants so they can teach you not to!",
    icon: "./img/gardeningIcon.png",
    questions: [
      {
        question: "Why are the leaves on my plants turning yellow?",
        description: "Some of the plants in my garden have yellow leaves, and I'm not sure if they're getting too much water, too little water, or if something else is wrong.",
      },
      {
        question: "How often should I water my garden?",
        description: "I recently started gardening and don't know how much water my plants need. I want to avoid overwatering or letting them dry out.",
      },
      {
        question: "Can I grow vegetables in containers?",
        description: "I don't have a large yard, but I have a patio with some space for pots. I'd like to know if vegetables can grow well in containers and which ones are easiest for beginners.",
      },
      {
        question: "How do I get rid of bugs eating my plants?",
        description: "I've noticed holes in the leaves of several plants, and I think insects might be causing the damage. I don't know what type of pest it is or how to stop it without harming the plants.",
      },
    ],
    tutorials: [
      {
        title: "How to Start a Vegetable Garden from Scratch",
        description: "Learn how to choose the right location, prepare the soil, select beginner-friendly vegetables, and set up a watering routine for a successful first garden.",
        img: "./img/HowtoStartaVegetableGardenfromScratch.png",
      },
      {
        title: "How to Prune Shrubs and Small Trees Properly",
        description: "This tutorial explains when and how to prune common garden plants to encourage healthy growth, improve appearance, and prevent disease.",
        img: "./img/HowtoPruneshrubsandSmallTreesProperly.png",
      },
      {
        title: "How to Create and Maintain a Compost Bin",
        description: "Follow a step-by-step guide to turning kitchen scraps and yard waste into nutrient-rich compost that can improve soil quality and plant health.",
        img: "./img/HowtoCreateandMaintainaCompostBin.png",
      },
      {
        title: "How to Prepare Your Garden for Spring Planting",
        description: "Discover how to clear debris, enrich the soil, plan plant placement, and get your garden beds ready for a productive growing season.",
        img: "./img/HowtoPrepareYourGardenforSpringPlanting.png",
      },
    ],
  },
  carpentry: {
    title: "Carpentry",
    description: "Tired of all those store-bought furtniture not fitting your space and getting all wabbly after some time? Here you can find all you need to know about carpentry, from your fellow members who have built their own Ikean't furniture!",
    icon: "./img/carpentryIcon.png",
    questions: [
      {
        question: "How do I fix a squeaky wooden door?",
        description: "One of the doors in my house makes a loud squeaking noise every time it opens or closes. I don't have any carpentry experience and want to know how to fix it.",
      },
      {
        question: "Can I build a simple bookshelf by myself?",
        description: "I'd like to make a small bookshelf for my room, but I've never worked with wood before. I want to know what tools and materials a beginner would need.",
      },
      {
        question: "Why is my wooden table wobbling?",
        description: "My dining table has become unstable and rocks slightly when used. I'm not sure whether the legs are loose or if there's another issue causing it.",
      },
      {
        question: "How do I repair a scratch in a wooden floor?",
        description: "I accidentally dragged a piece of furniture across my hardwood floor and left a visible scratch. I want to know if it's something I can repair myself and what products I should use.",
      },
    ],
    tutorials: [
      {
        title: "How to Build a Simple Wooden Picture Frame",
        description: "Learn how to measure, cut, assemble, and finish a custom wooden picture frame using basic carpentry tools and techniques.",
        img: "./img/HowtoBuildaSimpleWoodenPictureFrame.png",
      },
      {
        title: "How to Sand and Refinish Wooden Furniture",
        description: "This tutorial explains how to remove old finishes, properly sand wood surfaces, and apply stain or protective coatings to restore worn furniture.",
        img: "./img/HowtoSandandRefinishWoodenFurniture.png",
      },
      {
        title: "How to Install Floating Shelves on a Wall",
        description: "Follow a step-by-step process for locating wall studs, mounting shelf brackets securely, and ensuring your shelves are level and strong enough to hold weight.",
        img: "./img/HowtoInstallFloatingShelvesonaWall.png",
      },
      {
        title: "How to Measure and Cut Wood Accurately",
        description: "Discover the essential measuring, marking, and cutting techniques used by carpenters to achieve precise results and reduce material waste on any woodworking project.",
        img: "./img/HowtoMeasureandCutWoodAccurately.png",
      },
    ],
  },
  cooking: {
    title: "Cooking",
    description: "Missing the taste of your mom's cooking while eating bread and butter girl dinners in your college dorm? Here you can find all you need to know about cooking, from your fellow members who missed their mom as much as you.",
    icon: "./img/cookingIcon.png",
    questions: [
      {
        question: "Why won't my cake rise in the oven?",
        description: "I've tried baking a cake a few times, but it always comes out flat and dense. I'm not sure if the problem is with the ingredients, measurements, or baking process.",
      },
      {
        question: "Why does my chicken always come out dry?",
        description: "Whenever I cook chicken, it ends up tough and dry instead of juicy. I'm not sure if I'm overcooking it or using the wrong cooking method.",
      },
      {
        question: "How do I know when pasta is done cooking?",
        description: "I recently started cooking for myself and have trouble telling when pasta is ready. I don't know how to check if it's cooked properly without making it too soft.",
      },
      {
        question: "Can I substitute ingredients in a recipe?",
        description: "Sometimes I don't have all the ingredients a recipe calls for. I'd like to know which ingredients can be replaced and which ones are essential to the dish.",
      },
    ],
    tutorials: [
      {
        title: "How to Properly Season and Care for a Cast Iron Skillet",
        description: "Learn how to season a cast iron skillet, maintain its non-stick surface, and prevent rust so it lasts for years and performs at its best.",
        img: "./img/HowtoProperlySeasonandCareforaCastIronSkillet.png",
      },
      {
        title: "How to Cook Perfect Rice Every Time",
        description: "This tutorial explains the ideal water-to-rice ratios, cooking methods, and common mistakes to avoid when preparing fluffy, evenly cooked rice.",
        img: "./img/HowtoCookPerfectRiceEveryTime.png",
      },
      {
        title: "How to Safely Store and Reheat Leftovers",
        description: "Follow best practices for cooling, storing, and reheating food to maintain quality and reduce the risk of foodborne illness.",
        img: "./img/HowtoSafelyStoreandReheatLeftovers.png",
      },
      {
        title: "How to Prepare a Balanced Meal from Scratch",
        description: "Discover how to combine proteins, vegetables, and carbohydrates into a nutritious, well-rounded meal while planning cooking times efficiently.",
        img: "./img/HowtoPrepareaBalancedMealfromScratch.png",
      },
    ],
  },
  parenting: {
    title: "Parenting",
    description: "The promised village is not villaging? Here you can find all you need to know about parenting, from your fellow members who have gotten that baby vomit out of their shirt so you hopefully don't have to!",
    icon: "./img/parentingIcon.png",
    questions: [
      {
        question: "Why won't my toddler go to sleep at bedtime?",
        description: "My toddler often resists going to bed and stays awake much later than expected. I'm not sure if this is a normal phase or if I should change their bedtime routine.",
      },
      {
        question: "How can I get my child to eat more vegetables?",
        description: "My child refuses to eat most vegetables and is very picky during meals. I want to find ways to encourage healthier eating habits without making mealtime a battle.",
      },
      {
        question: "What should I do when my child has a tantrum in public?",
        description: "My child sometimes has emotional outbursts in stores or restaurants. I'm not sure how to respond in a way that helps calm them down and teaches appropriate behavior.",
      },
      {
        question: "How do I know if my child is ready for potty training?",
        description: "My child is getting older, and I'm wondering when it's the right time to start potty training. I don't know what signs to look for or how to begin the process.",
      },
    ],
    tutorials: [
      {
        title: "How to Create a Consistent Bedtime Routine for Children",
        description: "Learn how to establish a predictable evening routine that helps children relax, fall asleep more easily, and develop healthy sleep habits over time.",
        img: "./img/HowtoCreateaConsistentBedtimeRoutineforChildren.png",
      },
      {
        title: "How to Teach Children Basic Responsibility Through Chores",
        description: "This tutorial explains how to assign age-appropriate chores, set clear expectations, and encourage responsibility without turning chores into a source of conflict.",
        img: "./img/HowtoTeachChildrenBasicResponsibilityThroughChores.png",
      },
      {
        title: "How to Handle Sibling Conflicts Constructively",
        description: "Follow practical strategies for helping children resolve disagreements, communicate their feelings, and develop problem-solving skills while maintaining a positive family environment.",
        img: "./img/HowtoHandleSiblingConflictsConstructively.png",
      },
      {
        title: "How to Set Healthy Screen Time Boundaries",
        description: "Discover how to create realistic rules around phones, tablets, and television, while encouraging a balanced routine that includes learning, physical activity, and family interaction.",
        img: "./img/HowtoSetHealthyScreenTimeBoundaries.png",
      },
    ],
  },
}

/*Load the category data and display it on the page*/
document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const categoryName = params.get("category");
  const categoryData = categories[categoryName];

  if (typeof categoryData === "undefined") {
    window.location.href = "index.html";
  }
  
  document.getElementById("categoryName").innerHTML = categoryData.title;
  document.getElementById("categoryDescription").innerHTML = categoryData.description;
  document.getElementById("categoryIcon").src = categoryData.icon;
  
  categoryData.questions.forEach((question, index) => {
    document.getElementById(`question${index + 1}Title`).innerHTML = question.question;
    document.getElementById(`question${index + 1}Description`).innerHTML = question.description;
  });
  categoryData.tutorials.forEach((tutorial, index) => {
    document.getElementById(`tutorial${index + 1}Title`).innerHTML = tutorial.title;
    document.getElementById(`tutorial${index + 1}Description`).innerHTML = tutorial.description;
    document.getElementById(`tutorial${index + 1}Image`).src = tutorial.img;
  });
});

