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
    { "title": "AI & Software Engineering", "description": "Applying artificial intelligence techniques to software engineering tasks including code generation, analysis, and testing.", "image": "./images/themes/trustworthy.svg", "link": "#", "colClass": "col-md-6 col-xl-3" },
    { "title": "Programming Language Design", "description": "Designing and implementing programming languages with advanced features for modern software development.", "image": "./images/themes/generative.svg", "link": "#", "colClass": "col-md-6 col-xl-3" },
    { "title": "Code Intelligence", "description": "Developing tools and techniques for understanding, analyzing, and manipulating code at scale.", "image": "./images/themes/neurosymbolic.svg", "link": "#", "colClass": "col-md-6 col-xl-3" },
    { "title": "Static Analysis & Verification", "description": "Building static analysis tools and verification techniques for ensuring software correctness and security.", "image": "./images/themes/applied.svg", "link": "#", "colClass": "col-md-6 col-xl-3" }
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
      "link": "./teaching/copl/index.html",
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
      "link": "./teaching/types/index.html",
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
      "link": "./teaching/daimpl/index.html",
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
      "link": "./teaching/ai4ca/index.html",
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
      "link": "./teaching/impl/index.html",
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
      "link": "./teaching/sdt/index.html",
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
      "link": "./teaching/sep/index.html",
      "responsible": ["STG Team"]
    }
  ],
  "peopleSections": [
    {
      "id": "professors",
      "title": "Professors",
      "description": "Leadership of the Software Technology Group.",
      "defaultVisible": true,
      "people": [
        { "id": "mmezini", "name": "Prof. Dr. Mira Mezini", "role": "Professor", "focus": "Software Technology Group Head" },
        { "id": "igrassl", "name": "Dr. Isabella Graßl", "role": "Professor", "focus": "Software Technology" }
      ]
    },
    {
      "id": "admin",
      "title": "Administrative & Technical Staff",
      "description": "Administrative, project and technical staff supporting the group.",
      "defaultVisible": true,
      "people": [
        { "id": "eberghoff", "name": "Esther Berghoff", "role": "Administration", "focus": "Dipl.-Wirt.-Ing." },
        { "id": "crossmann", "name": "Claudia Roßmann", "role": "Administration", "focus": "Administrative Staff" },
        { "id": "bscheet", "name": "Boris Scheet", "role": "Technical Staff", "focus": "Technical Support" },
        { "id": "pmoeller", "name": "Pamela Möller", "role": "Administration", "focus": "Administrative Staff" }
      ]
    },
    {
      "id": "postdocs",
      "title": "Postdoctoral Researchers",
      "description": "Postdoctoral researchers conducting advanced research.",
      "defaultVisible": true,
      "people": [
        { "id": "rmogk", "name": "Dr. Ragnar Mogk", "role": "Postdoctoral Researcher", "focus": "Software Technology" },
        { "id": "treinhard", "name": "Dr. Tobias Reinhard", "role": "Postdoctoral Researcher", "focus": "Software Technology" },
        { "id": "asharifloo", "name": "Dr. Amir Molzam Sharifloo", "role": "Postdoctoral Researcher", "focus": "Software Technology" },
        { "id": "drichter", "name": "Dr. David Richter", "role": "Postdoctoral Researcher", "focus": "Software Technology" }
      ]
    },
    {
      "id": "phd",
      "title": "Doctoral Researchers",
      "description": "PhD candidates working on their dissertations.",
      "defaultVisible": true,
      "people": [
        { "id": "pmueller", "name": "Patrick Müller", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "jbrugger", "name": "Jannis Brugger", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "jhaas", "name": "Julian Haas", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "aanand", "name": "Abhinav Anand", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "dmaninger", "name": "Daniel Maninger", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "tboehler", "name": "Timon Böhler", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "mtiftikci", "name": "Mert Tiftikci", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "sverma", "name": "Shweta Verma", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "sdaniel", "name": "Simon Daniel", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "ckuessner", "name": "Christian Kuessner", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "fmeerkotter", "name": "Fabian Meerkötter", "role": "Doctoral Researcher", "focus": "Software Technology" },
        { "id": "bsmit", "name": "Benedict Smit", "role": "Doctoral Researcher", "focus": "Software Technology" }
      ]
    }
  ]
};
