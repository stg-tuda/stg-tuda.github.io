/*
 * Shared site content used by scripts/site.js. Update the data below to adapt
 * hero statistics, research focus areas, teaching offers, and people sections.
 */
window.STG_SITE_CONTENT = {
  "heroStats": [
    { "value": "20+", "label": "Researchers & staff", "icon": "👥", "colClass": "col-6 col-md-4" },
    { "value": "Part of", "label": "TU Darmstadt Computer Science Department", "icon": "🏛️", "colClass": "col-6 col-md-4" },
    { "value": "Active research", "label": "Code intelligence & programming models", "icon": "🛠️", "colClass": "col-12 col-md-4" }
  ],
  "focusAreas": [
    { "title": "AI & Software Engineering", "description": "Applying artificial intelligence techniques to software engineering tasks including code generation, analysis, and testing.", "image": "./images/themes/ai4se-wide.png", "colClass": "col-md-6 col-xl-6" },
    { "title": "Programming Language Design", "description": "Designing and implementing programming languages with advanced features for modern software development.", "image": "./images/themes/pldi.jpg", "colClass": "col-md-6 col-xl-6" },
  ],
  "currentTeaching": [
    {
      "term": "Winter/Summer",
      "title": "Concepts of Programming Languages",
      "abbreviation": "COPL",
      "description": "Fundamental concepts in programming language design and implementation.",
      "format": "Lecture",
      "credits": "6 CP",
      "recommended": "Bachelor and Master students",
      "language": "English",
      "lastTaught": "Regular",
      "link": "https://moodle.informatik.tu-darmstadt.de/course/search.php?areaids=core_course-course&q=COPL",
      "responsible": ["STG Team"]
    },
    {
      "term": "Winter/Summer",
      "title": "Type Systems",
      "abbreviation": "TYPES",
      "description": "Theory and practice of type systems in programming languages.",
      "format": "Lecture",
      "credits": "6 CP",
      "recommended": "Advanced Bachelor and Master students",
      "language": "English",
      "lastTaught": "Regular",
      "link": "https://moodle.informatik.tu-darmstadt.de/course/search.php?areaids=core_course-course&q=lambda",
      "responsible": ["STG Team"]
    },
    {
      "term": "Winter/Summer",
      "title": "Design and Implementation of Programming Languages",
      "abbreviation": "DAIMPL",
      "description": "Practical aspects of designing and implementing programming languages.",
      "format": "Lecture",
      "credits": "6 CP",
      "recommended": "Master students",
      "language": "English",
      "lastTaught": "Regular",
      "link": "https://moodle.informatik.tu-darmstadt.de/course/search.php?areaids=core_course-course&q=DAIMPL",
      "responsible": ["STG Team"]
    },
    {
      "term": "Winter/Summer",
      "title": "Artificial Intelligence for Coding Assistance",
      "abbreviation": "AI4CA",
      "description": "AI techniques applied to software development and coding assistance.",
      "format": "Lecture",
      "credits": "6 CP",
      "recommended": "Master students",
      "language": "English",
      "lastTaught": "Regular",
      "link": "https://stg-tud.github.io/AI4CI/",
      "responsible": ["STG Team"]
    },
    {
      "term": "Winter/Summer",
      "title": "Implementation of Programming Languages",
      "abbreviation": "IMPL",
      "description": "Implementation techniques for programming languages.",
      "format": "Lecture",
      "credits": "6 CP",
      "recommended": "Master students",
      "language": "English",
      "lastTaught": "Regular",
      "link": "https://moodle.informatik.tu-darmstadt.de/course/search.php?areaids=core_course-course&q=P-IMPL",
      "responsible": ["STG Team"]
    },
    {
      "term": "Winter/Summer",
      "title": "Software Development Tools",
      "abbreviation": "SDT",
      "description": "Tools and techniques for software development.",
      "format": "Lecture",
      "credits": "6 CP",
      "recommended": "Bachelor and Master students",
      "language": "English",
      "lastTaught": "Regular",
      "link": "https://stg-tud.github.io/AI4CI/#project-software-development-tools",
      "responsible": ["STG Team"]
    },
    {
      "term": "Yearly",
      "title": "Software Engineering Project",
      "abbreviation": "SEP",
      "description": "Industry internship course with real industry partners.",
      "format": "Project",
      "credits": "12 CP",
      "recommended": "Master students",
      "language": "English/German",
      "lastTaught": "Yearly",
      "link": "https://stg-tud.github.io/sep/",
      "responsible": ["STG Team"]
    }
  ],
  "peopleSections": [
    {
      "id": "head",
      //"title": "Professors",
      "title":  "Head of STG Group",
      //"description": "Leadership of the Software Technology Group",
      "defaultVisible": true,
      "people": [
        { "id": "mmezini", "name": "Prof. Dr. Mira Mezini", "role": "Full Professor" },
      ]
    },
    {
      "id": "admin",
      "title": "Administrative & Technical Staff",
      "description": "Administrative, project and technical staff supporting the group.",
      "defaultVisible": true,
      "people": [
        { "id": "eberghoff", "name": "Esther Berghoff", "role": "Administration", "focus": "ATHENE Project Manager" },
        { "id": "crossmann", "name": "Claudia Roßmann", "role": "Administration", "focus": "Administrative Staff" },
        { "id": "bscheet", "name": "Boris Scheet", "role": "Technical Staff", "focus": "Technical Support" },
        { "id": "pmoeller", "name": "Pamela Möller", "role": "Administration", "focus": "Administrative Staff" }
      ]
    },
    {
      "id": "visiting",
      "title": "Guest Researchers",
     // "description": "Visiting researchers and collaborators.",
      "defaultVisible": true,
      "people": [
        { "id": "igrassl", "name": "Dr. Isabella Graßl", "role": "Guest Researcher" }
      ]
    },
    {
      "id": "postdocs",
      "title": "Postdoctoral Researchers",
      "description": "Postdoctoral researchers conducting advanced research.",
      "defaultVisible": true,
      "people": [
        { "id": "rmogk", "name": "Dr. Ragnar Mogk", "role": "Postdoctoral Researcher" },
        { "id": "treinhard", "name": "Dr. Tobias Reinhard", "role": "Postdoctoral Researcher" },
        { "id": "asharifloo", "name": "Dr. Amir Molzam Sharifloo", "role": "Postdoctoral Researcher" },
        { "id": "drichter", "name": "Dr. David Richter", "role": "Postdoctoral Researcher"}
      ]
    },
    {
      "id": "phd",
      "title": "Doctoral Researchers",
      "description": "PhD candidates working on their dissertations.",
      "defaultVisible": true,
      "people": [
        { "id": "pmueller", "name": "Patrick Müller", "role": "Doctoral Researcher"},
        { "id": "jbrugger", "name": "Jannis Brugger", "role": "Doctoral Researcher"},
        { "id": "jhaas", "name": "Julian Haas", "role": "Doctoral Researcher"},
        { "id": "aanand", "name": "Abhinav Anand", "role": "Doctoral Researcher"},
        { "id": "dmaninger", "name": "Daniel Maninger", "role": "Doctoral Researcher"},
        { "id": "tboehler", "name": "Timon Böhler", "role": "Doctoral Researcher"},
        { "id": "mtiftikci", "name": "Mert Tiftikci", "role": "Doctoral Researcher"},
        { "id": "sverma", "name": "Shweta Verma", "role": "Doctoral Researcher"},
        { "id": "sdaniel", "name": "Simon Daniel", "role": "Doctoral Researcher"},
        { "id": "ckuessner", "name": "Christian Kuessner", "role": "Doctoral Researcher" },
        { "id": "fmeerkotter", "name": "Fabian Meerkötter", "role": "Doctoral Researcher" },
        { "id": "bsmit", "name": "Benedict Smit", "role": "Doctoral Researcher" }
      ]
    }
  ]
};
