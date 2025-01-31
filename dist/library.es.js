var static_styles = {
    "muted": {
        _id: "",
        shortId: "muted",
        name: "Muted",
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart", "standard_table"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Colors that blend in and harmonize.",
        visibility: "PUBLIC",
        style: ".muted>.table {text-align: left} .muted>.table>thead { font-size: 20px; background-color: #EFE2BA; } .muted>.table>tbody>tr:nth-child(odd)>td, .muted>.table>tbody>tr:nth-child(odd)>th { background-color: #f2f0e8; } .muted>.table th { font-size: smaller; color: #23262E; } .muted>.table>tbody>tr, .muted>.table>thead>tr { border: 0px solid transparent }",
        containerClassNames: ["muted"],
        properties: {
            borderWidth: {
                name: "Border Width",
                description: "Border width",
                default: 1,
                type: "NUMBER"
            },
            chartColors: {
                name: "Chart Colors",
                description: "Chart colors",
                default: ["#D79922", "#EFE2BA", "#F13C20", "#4056A1", "#C5CBE3"],
                type: "COLOR",
                multiple: true,
                limit: 50
            }
        },
        colorTheme: ["#D79922", "#EFE2BA", "#F13C20", "#4056A1", "#C5CBE3"],
        componentProperties: {
            borderWidth: 1,
        }
    },
    "earthy": {
        _id: "",
        shortId: "earthy",
        name: "Earthy",
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Colors inspired by nature to show a calm and peaceful look.",
        visibility: "PUBLIC",
        style: ".earthy>.table { border: 0.1em solid #E1E0E2; border-radius: 10px !important; border-collapse: separate; border-spacing: 0; overflow: hidden; text-align: left; } .earthy>.table thead { background-color: #F9FBFC; } .earthy>.table th { font-size: smaller; color: #828286; } .earthy>.table>tbody>tr, .earthy>.table>thead>tr { border-color: #F6F5F8 } .earthy>.table>tbody>tr:last-child { border: 0px solid transparent }",
        containerClassNames: ["earthy"],
        properties: {
            borderWidth: {
                name: "Border Width",
                description: "Border width",
                default: 1,
                type: "NUMBER"
            },
            chartColors: {
                name: "Chart Colors",
                description: "Chart colors",
                default: ["#E27D60", "#85CDCA", "#E8A87C", "#C38D9E", "#41B3A3"],
                type: "COLOR",
                multiple: true,
                limit: 50
            }
        },
        colorTheme: ["#E27D60", "#85CDCA", "#E8A87C", "#C38D9E", "#41B3A3"],
        componentProperties: {
            borderWidth: 1,
        }
    },
    "outback": {
        _id: "",
        shortId: "outback",
        name: "Outback",
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart", "standard_table"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Colors inspired by sands and succulent biome.",
        visibility: "PUBLIC",
        style: ".outback>.table { text-align: left; } .outback>.table>thead { font-size: 20px; background-color: #FBEEC1; } .outback>.table th { font-size: smaller; color: #23262E; } .outback>.table>thead>tr { border: 0px solid transparent; } .outback>.table>tbody>tr:nth-child(odd)>td, .outback>.table>tbody>tr:nth-child(odd)>th { background-color: #faf7ec; }",
        containerClassNames: ["outback"],
        properties: {
            borderWidth: {
                name: "Border Width",
                description: "Border width",
                default: 1,
                type: "NUMBER"
            },
            chartColors: {
                name: "Chart Colors",
                description: "Chart colors",
                default: ["#8D8741", "#659DBD", "#DAAD86", "#BC986A", "#FBEEC1", "#C3C078", "#9978C3", "#82C378", "#DE67A0"],
                type: "COLOR",
                multiple: true,
                limit: 50
            }
        },
        colorTheme: ["#8D8741", "#659DBD", "#DAAD86", "#BC986A", "#FBEEC1", "#C3C078", "#9978C3", "#82C378", "#DE67A0"],
        componentProperties: {
            borderWidth: 1
        }
    },
    "concise_gallery": {
        _id: "",
        shortId: "concise_gallery",
        name: "Minimal Gallery",
        compatibleWith: ["card_list"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Minimalistic look and feel for gallery-typed templates.",
        visibility: "PUBLIC",
        style: ".concise_gallery .container { display: inline-grid; padding: 10px; width: 300px; border: 1px solid #ddd; border-radius: 10px; margin: 5px; } .concise_gallery .container .title { font-size: 1.2 rem; font-weight: 600; }  .concise_gallery .container .image img { width: 100% } .concise_gallery .container .description { display: block } .concise_gallery .pagination a, .concise_gallery .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["concise_gallery"],
        colorTheme: ["#ddd"],
        properties: {},
        componentProperties: {}
    },
    "fine_dining": {
        _id: "",
        shortId: "fine_dining",
        name: "Fine Dining Menu",
        compatibleWith: ["formal_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Traditional look and feel for menu templates.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Castoro&display=swap'); .fine_dining .container { font-family: 'Castoro', serif; display: block; padding: 10px; text-align: center } .fine_dining .container .name { font-size: 20px; }  .fine_dining .container .price { font-size: 18px; display: block; margin-top: 5px; margin-bottom: 10px } .fine_dining .container .description { display: block } .fine_dining .pagination a, .fine_dining .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["fine_dining"],
        colorTheme: ["#000"],
        properties: {},
        componentProperties: {}
    },
    "contemporary_fine_dining": {
        _id: "",
        shortId: "contemporary_fine_dining",
        name: "Contemporary Sans",
        compatibleWith: ["formal_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Modern look and feel for fine dining menu templates.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Tenor+Sans&display=swap'); .contemporary_fine_dining .container { display: block; padding: 10px; text-align: center } .contemporary_fine_dining .container .name { font-family: 'Tenor Sans', sans-serif; font-size: 20px; } .contemporary_fine_dining .container .price { font-family: 'Tenor Sans', sans-serif; font-size: 18px; display: block; margin-top: 5px; margin-bottom: 10px } .contemporary_fine_dining .container .description { font-family: 'Playfair Display', serif; font-style: italic; display: block } .contemporary_fine_dining .pagination a, .contemporary_fine_dining .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["contemporary_fine_dining"],
        colorTheme: ["#000"],
        properties: {},
        componentProperties: {}
    },
    "healthy_five": {
        _id: "",
        shortId: "healthy_five",
        name: "Healthy Five",
        compatibleWith: ["graphic_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Vibrant style for graphic menu templates with emphasis on item image.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .healthy_five .container { display: inline-block; width: 300px; padding: 10px; font-family: 'Open Sans', sans-serif; } .healthy_five .container .image img { display: block; max-width: 100%; height: auto; margin: 10px 0 5px 0; } .healthy_five .container .name { font-size: 20px; } .healthy_five .container .price { font-size: 18px; display: block; } .healthy_five .container .description { display: block } .healthy_five .pagination a, .healthy_five .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["healthy_five"],
        colorTheme: ["#000"],
        properties: {},
        componentProperties: {}
    },
    "menu_boxes": {
        _id: "",
        shortId: "menu_boxes",
        name: "Boxed Menu",
        compatibleWith: ["graphic_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Graphic menu templates with container boxes around each menu item.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap'); .menu_boxes .container { display: inline-block; width: 300px; padding: 10px; font-family: 'Roboto Slab', serif; border: 1px solid #efefef; border-radius: 5px; margin: 5px; } .menu_boxes .container .image { object-fit: cover; } .menu_boxes .container .image img { display: block; width: 100%; height: 200px; margin: 5px 0 5px 0; } .menu_boxes .container .name { font-size: 16px; } .menu_boxes .container .price { font-size: 14px; display: block; } .menu_boxes .container .description { display: block; font-size: 14px; } .menu_boxes .pagination a, .menu_boxes .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["menu_boxes"],
        colorTheme: ["#efefef", "#000"],
        properties: {},
        componentProperties: {}
    },
    "menu_box_list": {
        _id: "",
        shortId: "menu_box_list",
        name: "Boxed List",
        compatibleWith: ["graphic_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Graphic menu templates with stacked container boxes displayed like a list.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap'); .menu_box_list .container { display: inline-block; width: 400px; height: 100px; padding: 5px; font-family: 'Roboto Slab', serif; border: 1px solid #efefef; border-radius: 5px; margin: 5px; } .menu_box_list .container .image { height: 100px; float: right; } .menu_box_list .container .image img { display: block; width: 100px; height: 100px; object-fit: cover; } .menu_box_list .container .name { font-size: 16px; margin-bottom: 5px; } .menu_box_list .container .price { font-size: 14px; display: block; margin-bottom: 10px } .menu_box_list .container .description { display: block; font-size: 14px; } .menu_box_list .pagination a, .menu_box_list .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["menu_box_list"],
        colorTheme: ["#efefef", "#000"],
        properties: {},
        componentProperties: {}
    },
    "job_posting_plain": {
        _id: "",
        shortId: "job_posting_plain",
        name: "Plain",
        compatibleWith: ["job_postings"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Plain job postings style.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .job_posting_plain .container a { color: #000; text-decoration: none; } .job_posting_plain .container a:hover { text-decoration: underline; } .job_posting_plain .container { display: block; font-family: 'Open Sans', sans-serif; border-top: 1px solid #aaa; margin: 5px 0 5px 0; padding: 15px 0 15px 0; } .job_posting_plain .container .title { font-size: 20px; margin-bottom: 5px; } .job_posting_plain .container .description { display: block; font-size: 16px; } .job_posting_plain .pagination a, .job_posting_plain .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["job_posting_plain"],
        colorTheme: ["#fff", "#000", "#aaa"],
        properties: {},
        componentProperties: {}
    },
    "faq_plain": {
        _id: "",
        shortId: "faq_plain",
        name: "Plain",
        compatibleWith: ["faq"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Standard FAQ style.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .faq_plain .transition, .faq_plain li i:before, li i:after, .faq_plain p { transition: all 0.25s ease-in-out; } .faq_plain .flipIn, .faq_plain li, h1 { animation: flipdown 0.5s ease both; } .faq_plain .no-select, .faq_plain .question { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; font-family: 'Open Sans', sans-serif; font-size: 20px; font-weight: 500; margin: 0; margin-right: 20px; } .faq_plain p { overflow: hidden; opacity: 1; transform: translate(0, 0); margin-top: 14px; z-index: 2; font-family: 'Open Sans', sans-serif; font-size: 14px; } .faq_plain { list-style: none; perspective: 900; padding: 0; margin: 0; } .faq_plain li { position: relative; padding: 0; margin: 0; padding-bottom: 4px; padding-top: 18px; border-top: 1px solid #dce7eb; } .faq_plain li:nth-of-type(1) { animation-delay: 0.5s; } .faq_plain li:nth-of-type(2) { animation-delay: 0.75s; } .faq_plain li:nth-of-type(3) { animation-delay: 1s; } .faq_plain li:last-of-type { padding-bottom: 0; } .faq_plain li i { position: absolute; transform: translate(-6px, 0); margin-top: 16px; right: 0; } .faq_plain li i:before, li i:after { content: ''; position: absolute; background-color: #333333; width: 3px; height: 9px; } .faq_plain li i:before { transform: translate(-2px, 0) rotate(45deg); } .faq_plain li i:after { transform: translate(2px, 0) rotate(-45deg); } .faq_plain li input[type=checkbox] { position: absolute; cursor: pointer; width: 100%; height: 100%; z-index: 1; opacity: 0; } .faq_plain li input[type=checkbox]:checked ~ p { margin-top: 0; max-height: 0; opacity: 0; transform: translate(0, 50%); } .faq_plain li input[type=checkbox]:checked ~ i:before { transform: translate(2px, 0) rotate(45deg); } .faq_plain li input[type=checkbox]:checked ~ i:after { transform: translate(-2px, 0) rotate(-45deg); } @keyframes flipdown { 0% { opacity: 0; transform-origin: top center; transform: rotateX(-90deg); } 5% { opacity: 1; } 80% { transform: rotateX(8deg); } 83% { transform: rotateX(6deg); } 92% { transform: rotateX(-3deg); } 100% { transform-origin: top center; transform: rotateX(0deg); }}",
        containerClassNames: ["faq_plain"],
        colorTheme: ["#fff", "#000", "#333"],
        properties: {},
        componentProperties: {}
    },
    "audio_guide": {
        _id: "",
        shortId: "audio_guide",
        name: "Concise Guide",
        compatibleWith: ["self_tour", "kiosk_guide_spotlight"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Audio-based self-guide.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .audio_guide .container { width: 100%; background: transparent; font-family: 'Open Sans', sans-serif; } .audio_guide .container .heading { display: block; width: 100%; text-align: center; font-size: 24px; margin-top: 20px; } .audio_guide .container .image { display: block; height: 250px; background-size: cover; margin-bottom: 40px; } .audio_guide .container .audio audio { width: 100%; height: 280px; } .audio_guide .container .label { display: block; font-size: 22px; font-weight: 600; margin-bottom: 20px; text-align: center; }",
        containerClassNames: ["audio_guide"],
        colorTheme: ["#fff", "#000", "#aaa"],
        properties: {},
        componentProperties: {}
    },
    "audio_guide_expanded": {
        _id: "",
        shortId: "audio_guide_expanded",
        name: "Expanded guide",
        compatibleWith: ["self_tour", "kiosk_guide_spotlight"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Audio-based self-guide.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .audio_guide .container { width: 100%; background: transparent; font-family: 'Open Sans', sans-serif; } .audio_guide .container .heading { display: block; width: 100%; text-align: center; font-size: 24px; margin-top: 20px; } .audio_guide .container .image { display: block; height: 300px; background-size: cover; margin-bottom: 100px; } .audio_guide .container .audio audio { width: 100%; height: 370px; } .audio_guide .container .label { display: block; font-size: 22px; font-weight: 600; margin-bottom: 20px; text-align: center; color: #DB5124 }",
        containerClassNames: ["audio_guide"],
        colorTheme: ["#DB5124", "#fff", "#000", "#aaa"],
        properties: {},
        componentProperties: {}
    },
    "kiosk_tablet_horizontal": {
        _id: "",
        shortId: "kiosk_tablet_horizontal",
        name: "Horizontal Expanded",
        compatibleWith: ["kiosk_guide_spotlight"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Audio-based self-guide with layout optimized for horizontal views on larger screen devices.",
        visibility: "PUBLIC",
        style: "  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');  body {    margin: 0;  }  .audio_guide {    margin: 0;    background-color: #f1f1f1;    height: 100%;  }  .audio_guide .container {    width: 100%;    background: transparent;    font-family: 'Open Sans', sans-serif;  }  .audio_guide .container .heading {    display: block;    width: 100%;    text-align: center;    font-size: 24px;    margin-top: 20px;  }  .audio_guide .container .image {    display: block;    float: left;    width: 50%;    height: 100%;    background-size: cover;    position: relative;    padding: 10px;  }  .audio_guide .container .audio audio {    width: 95%;    bottom: 10px;    position: absolute;  }  .audio_guide .container .label {    display: flex;    font-size: 32px;    font-weight: 600;    padding: 20px;    text-align: center;    color: #DB5124;  }  .audio_guide .container .description {    display: flex;    padding: 20px;    font-size: 18px;  }",
        containerClassNames: ["audio_guide"],
        colorTheme: ["#DB5124", "#fff", "#000", "#aaa"],
        properties: {},
        componentProperties: {}
    },
    "impact_signage": {
        _id: "",
        shortId: "impact_signage",
        name: "Impact",
        compatibleWith: ["featured_signage"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Signage with large fonts for impact.",
        visibility: "PUBLIC",
        style: ".impact_signage .headerImageTop { display: block; height: {{headerImageHeight}}px; background-size: cover; } .impact_signage .items .item:nth-of-type(1n+9) {display: none;} .impact_signage .items { height: calc(100% - {{headerImageHeight}}px); } .impact_signage .item { display: inline-grid; position: relative; background-size: cover; } .impact_signage .label { position: absolute; bottom: 0; width: 100%; background-color: rgba(0,0,0,0.85); color: #ffffff; font-size: 25px; font-weight: bold; height: 30px; display: table; } .impact_signage .label .name { display: table-cell; vertical-align: middle; padding: 6px; padding-left: 10px; } .impact_signage .label .index { display: table-cell; vertical-align: middle; background-color: #ffcc00; text-align: center; color: #000000; padding: 6px; } .impact_signage .details { padding: 10px; text-align: left; font-size: 35px; font-weight: 600; display: table; margin-left: 15px; } .impact_signage .details span { position: relative; display: block; } .impact_signage .details .prices { display: table-cell; vertical-align: middle } .impact_signage .details .price1, .impact_signage .details .price2, .impact_signage .details .price3 { line-height: 25px; text-shadow: 1px 1px rgba(255,255,255,0.8); } .impact_signage .details .price1Name, .impact_signage .details .price2Name, .impact_signage .details .price3Name { font-size: 15px; text-transform: uppercase; margin-bottom: 10px; } .impact_signage .details .description { display: none; } .impact_signage .soldOutfalse { display: none !important } .impact_signage  .soldOuttrue { top: 50%; left: 50%; text-transform: uppercase; transform: translateY(-50%) translateX(-50%); font-weight: 800; font-size: 30px; padding: 10px; color: #ffffff; background-color: black; z-index: 10; position: absolute !important; text-align: center }",
        containerClassNames: ["impact_signage"],
        colorTheme: ["#ffcc00", "#fff", "#000"],
        properties: {
            headerImageHeight: {
                name: "Header Image Height",
                description: "(Optional) Height of the image on top (or bottom) to be displayed.",
                default: 100,
                type: "NUMBER",
            },
        },
        componentProperties: {}
    },
    "detailed_signage_columns": {
        _id: "",
        shortId: "detailed_signage_columns",
        name: "Signage - Columns",
        compatibleWith: ["detailed_signage"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Detailed signage with columns of menu items.",
        visibility: "PUBLIC",
        style: "{{customCss}} @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .detailedSignage .headerImageTop { height: {{headerImageHeight}}px; display: block; background-size: cover; } .detailedSignage .mainContent { display: flex; height: calc(100% - {{headerImageHeight}}px - 40px); } .detailedSignage .mainContent.tickerTypeNONE { height: calc(100% - {{headerImageHeight}}px); } .detailedSignage .mainContent span.tickerTypeNONE { display: none; } .detailedSignage .videoOverlay, .detailedSignage .imageOverlay { width: {{mediaWidth}}%; height: 100%; overflow: hidden; } .detailedSignage .imageOverlay img { width: 100%; height: 100%; object-fit: cover; } .detailedSignage .imageOverlay.noImage,  .detailedSignage .imageOverlay.imageNONE, .detailedSignage .imageOverlay.imageVIDEO, .detailedSignage .imageOverlay.imageIMAGES { display: none; } .detailedSignage .videoOverlay.noVideo, .detailedSignage .videoOverlay.videoNONE, .detailedSignage .videoOverlay.videoIMAGE, .detailedSignage .videoOverlay.videoIMAGES { display: none; } .detailedSignage .videoOverlay video { height: 100%; width: 100%; object-fit: cover; } .detailedSignage .items { font-family: {{fontFamily}}; width: calc(100% - {{mediaWidth}}%); height: 100%; overflow: hidden; -moz-column-gap: 10px; -webkit-column-gap: 10px; column-gap: 10px; } .detailedSignage .items.noVideo { width: 100%; } .detailedSignage .categoryContainer { display: inline-block; width: 100%; } .detailedSignage .category { display: inline-table; padding: 10px; float: left; width: 100%; position: relative; font-size: calc({{fontSize}}px * 0.7); } .detailedSignage .categoryTitle { width: 80%; font-size: {{fontSize}}px; font-weight: bold; display: table-cell; } .detailedSignage .catSubText { display: block; margin-bottom: 10px; } .detailedSignage .categoryHeader { display: table-row; } .detailedSignage .categorySubtext { display: table-row; } .detailedSignage .price1Name, .detailedSignage .price2Name, .detailedSignage .price3Name { display: table-cell; } .detailedSignage .item { display: table-row; margin-bottom: 5px; } .detailedSignage .item .name { display: table-cell; } .detailedSignage .item .subtext { display: none; } .detailedSignage .item .price1, .detailedSignage .item .price2, .detailedSignage .item .price3 { display: table-cell; } .detailedSignage .item .description { display: table-row; font-style: italic; } .detailedSignage .soldOutTRUE { background-color: rgba(255,0,0,0.8); position: absolute; color: white; padding: 1px; width: 94%; text-align: center; font-weight: bold; } .detailedSignage .soldOutFALSE { display: none; } .detailedSignage .tagLabel { display: inline-block; background: #f3ca63; color: #1a1d21; padding: 0 3px; border-radius: 2px; line-height: 18px; font-size: calc({{fontSize}}px / 2); font-weight: bold; overflow: hidden; position: relative; bottom: -2px; left: 3px; text-transform: uppercase; margin-left: 3px; } .detailedSignage .categorySubtext { display: none; } .detailedSignage .price1Value, .detailedSignage .price2Value, .detailedSignage .price3Value { display: none; } .detailedSignage .categoryPrice { display: block; } .detailedSignage .category .description { font-style: italic; } .detailedSignage span.tickerTypeNONE, .detailedSignage span.tickerTypeNEWS, .detailedSignage span.tickerTypeWEATHER, .detailedSignage span.tickerTypeCUSTOM { display: none; } .tickerContainer.tickerTypeHasNONE { display: none; } .detailedSignage .tickerClock { width: 150px; font-size: 28px; height: 40px; font-weight: bold; display: inline-block; font-family: 'Open Sans', sans-serif; text-align: center; color: #fff; background-color: #000; vertical-align: top; } .detailedSignage span.tickerTypeWEATHER.tickerTypeHasWEATHER, .detailedSignage .tickerTypeNEWS.tickerTypeHasNEWS, .detailedSignage .tickerTypeCUSTOM.tickerTypeHasCUSTOM { display: inline-block; width: calc(100% - 150px); } .tickerTypeWEATHER a, .tickerTypeWEATHER a:link,  .tickerTypeWEATHER a:visited,  .tickerTypeWEATHER a:hover, .tickerTypeWEATHER a:active  { color: #fff; }",
        containerClassNames: ["detailedSignage"],
        colorTheme: ["#f3ca63", "#1a1d21", "#ffffff"],
        properties: {
            headerImageHeight: {
                name: "Header Image Height",
                description: "(Optional) Height of the image on top (or bottom) to be displayed.",
                default: 100,
                type: "NUMBER",
            },
            mediaWidth: {
                name: "Media Width",
                description: "(Optional) Width, in percentage over the entire screen, to assign to the media to be displayed.",
                default: 35,
                type: "NUMBER",
            },
            fontSize: {
                name: "Font Sizes",
                description: "(Optional) Relative text sizes",
                default: 26,
                type: "NUMBER",
            },
            fontFamily: {
                name: "Font Family",
                description: "(Optional) Family of fonts to use",
                default: "'Open Sans', sans-serif",
                type: "TEXT"
            },
            customCss: {
                name: "Custom CSS",
                description: "(Optional) Custom CSS overrides",
                default: "",
                type: "TEXT"
            }
        },
        componentProperties: {}
    },
    "detailed_signage_big_font": {
        _id: "",
        shortId: "detailed_signage_big_font",
        name: "Signage - Big Font",
        compatibleWith: ["detailed_signage"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Detailed signage with columns of menu items, with a big high impact font.",
        visibility: "PUBLIC",
        style: "{{customCss}} @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .detailedSignage .headerImageTop { height: {{headerImageHeight}}px; display: block; background-size: cover; } .detailedSignage .mainContent { display: flex; height: calc(100% - {{headerImageHeight}}px - 40px); } .detailedSignage .mainContent.tickerTypeNONE { height: calc(100% - {{headerImageHeight}}px); } .detailedSignage .mainContent span.tickerTypeNONE { display: none; } .detailedSignage .videoOverlay,  .detailedSignage .imageOverlay { width: {{mediaWidth}}%; height: 100%; overflow: hidden; } .detailedSignage .imageOverlay img { width: 100%; height: 100%; object-fit: cover; } .detailedSignage .imageOverlay.noImage, .detailedSignage .imageOverlay.imageNONE, .detailedSignage .imageOverlay.imageVIDEO, .detailedSignage .imageOverlay.imageIMAGES { display: none; } .detailedSignage .videoOverlay.noVideo, .detailedSignage .videoOverlay.videoNONE, .detailedSignage .videoOverlay.videoIMAGE, .detailedSignage .videoOverlay.videoIMAGES { display: none; } .detailedSignage .videoOverlay video { height: 100%; width: 100%; object-fit: cover; } .detailedSignage .items { font-family: {{fontFamily}}; width: calc(100% - {{mediaWidth}}%); height: 100%; overflow: hidden; -moz-column-gap: 10px; -webkit-column-gap: 10px; column-gap: 10px; } .detailedSignage .items.noVideo { width: 100%; } .detailedSignage .categoryContainer { display: inline-block; width: 100%; } .detailedSignage .category { display: inline-table; padding: 10px; float: left; width: 100%; position: relative; font-size: calc({{fontSize}}px * 0.6); } .detailedSignage .categoryTitle { width: 80%; font-size: {{fontSize}}px; font-weight: bold; display: table-cell; } .detailedSignage .catSubText { display: block; margin-bottom: 10px; } .detailedSignage .categoryHeader { display: table-row; } .detailedSignage .categorySubtext { display: table-row; } .detailedSignage .price1Name, .detailedSignage .price2Name, .detailedSignage .price3Name { display: table-cell; } .detailedSignage .item { display: table-row; margin-bottom: 5px; } .detailedSignage .item .name { display: table-cell; } .detailedSignage .item .subtext { display: none; } .detailedSignage .item .price1, .detailedSignage .item .price2, .detailedSignage .item .price3 { display: table-cell; } .detailedSignage .item .description { display: table-row; font-style: italic; } .detailedSignage .soldOutTRUE { background-color: rgba(255,0,0,0.8); position: absolute; color: white; padding: 1px; width: 94%; text-align: center; font-weight: bold; } .detailedSignage .soldOutFALSE { display: none; } .detailedSignage .tagLabel { display: inline-block; background: #f3ca63; color: #1a1d21; padding: 0 6px; border-radius: 2px; line-height: calc({{fontSize}}px * 0.7); font-size: calc({{fontSize}}px / 2); font-weight: bold; overflow: hidden; position: relative; bottom: -2px; left: calc({{fontSize}}px / 8); text-transform: uppercase; margin-left: calc({{fontSize}}px / 8); } .detailedSignage .categorySubtext { display: none; } .detailedSignage .price1Value, .detailedSignage .price2Value, .detailedSignage .price3Value { display: none; } .detailedSignage .categoryPrice { display: block; } .detailedSignage .category .description { font-style: italic; } .detailedSignage span.tickerTypeNONE, .detailedSignage span.tickerTypeNEWS, .detailedSignage span.tickerTypeWEATHER, .detailedSignage span.tickerTypeCUSTOM { display: none; } .detailedSignage .tickerContainer.tickerTypeHasNONE { display: none; } .detailedSignage .tickerClock { width: 150px; font-size: 28px; height: 40px; font-weight: bold; display: inline-block; font-family: 'Open Sans', sans-serif; text-align: center; color: #fff; background-color: #000; vertical-align: top; }  .detailedSignage span.tickerTypeWEATHER.tickerTypeHasWEATHER, .detailedSignage .tickerTypeNEWS.tickerTypeHasNEWS, .detailedSignage .tickerTypeCUSTOM.tickerTypeHasCUSTOM { display: inline-block; width: calc(100% - 150px); } .tickerTypeWEATHER a, .tickerTypeWEATHER a:link,  .tickerTypeWEATHER a:visited,  .tickerTypeWEATHER a:hover, .tickerTypeWEATHER a:active  { color: #fff; }",
        containerClassNames: ["detailedSignage"],
        colorTheme: ["#f3ca63", "#1a1d21", "#ffffff"],
        properties: {
            headerImageHeight: {
                name: "Header Image Height",
                description: "(Optional) Height of the image on top (or bottom) to be displayed.",
                default: 100,
                type: "NUMBER",
            },
            mediaWidth: {
                name: "Media Width",
                description: "(Optional) Width, in percentage over the entire screen, to assign to the media to be displayed.",
                default: 35,
                type: "NUMBER",
            },
            fontSize: {
                name: "Font Sizes",
                description: "(Optional) Relative text sizes",
                default: 46,
                type: "NUMBER",
            },
            fontFamily: {
                name: "Font Family",
                description: "(Optional) Family of fonts to use",
                default: "'Open Sans', sans-serif",
                type: "TEXT"
            },
            customCss: {
                name: "Custom CSS",
                description: "(Optional) Custom CSS overrides",
                default: "",
                type: "TEXT"
            }
        },
        componentProperties: {}
    },
    "qr_menu_default": {
        _id: "",
        shortId: "qr_menu_default",
        name: "Digital Menu - Default",
        compatibleWith: ["qr_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Default style for digital menu.",
        visibility: "PUBLIC",
        style: "{{customCss}} @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .qrMenu .headerImageTop { height: {{headerImageHeight}}px; display: block; background-size: cover; } .qrMenu .mainContent { display: flex; height: calc(100% - {{headerImageHeight}}px); } .qrMenu .items { font-family: {{fontFamily}}; width: 100%; height: 100%; overflow: hidden; -moz-column-gap: 10px; -webkit-column-gap: 10px; column-gap: 10px; } .qrMenu .items { width: 100%; } .qrMenu .categoryContainer { display: inline-block; width: 100%; } .qrMenu .category { display: inline-table; padding: 10px; float: left; width: 100%; position: relative; font-size: calc({{fontSize}}px * 0.6); } .qrMenu .categoryTitle { width: 80%; font-size: {{fontSize}}px; font-weight: bold; display: table-cell; } .qrMenu .catSubText { display: block; margin-bottom: 10px; } .qrMenu .categoryHeader { display: table-row; } .qrMenu .categorySubtext { display: table-row; } .qrMenu .price1Name, .qrMenu .price2Name, .qrMenu .price3Name { display: table-cell; } .qrMenu .item { display: table-row; margin-bottom: 5px; } .qrMenu .item .name { display: table-cell; } .qrMenu .item .subtext { display: none; } .qrMenu .item .price1, .qrMenu .item .price2, .qrMenu .item .price3 { display: table-cell; } .qrMenu .item .description { display: table-row; font-style: italic; } .qrMenu .soldOutTRUE { background-color: rgba(255,0,0,0.8); position: absolute; color: white; padding: 1px; width: 94%; text-align: center; font-weight: bold; } .qrMenu .soldOutFALSE { display: none; } .qrMenu .tagLabel { display: inline-block; background: #f3ca63; color: #1a1d21; padding: 0 6px; border-radius: 2px; line-height: calc({{fontSize}}px * 0.7); font-size: calc({{fontSize}}px / 2); font-weight: bold; overflow: hidden; position: relative; bottom: -2px; left: calc({{fontSize}}px / 8); text-transform: uppercase; margin-left: calc({{fontSize}}px / 8); } .qrMenu .categorySubtext { display: none; } .qrMenu .price1Value, .qrMenu .price2Value, .qrMenu .price3Value { display: none; } .qrMenu .categoryPrice { display: block; } .qrMenu .category .description { font-style: italic; }",
        containerClassNames: ["qrMenu"],
        colorTheme: ["#f3ca63", "#1a1d21", "#ffffff"],
        properties: {
            headerImageHeight: {
                name: "Header Image Height",
                description: "(Optional) Height of the image on top (or bottom) to be displayed.",
                default: 100,
                type: "NUMBER",
            },
            fontSize: {
                name: "Font Sizes",
                description: "(Optional) Relative text sizes",
                default: 23,
                type: "NUMBER",
            },
            fontFamily: {
                name: "Font Family",
                description: "(Optional) Family of fonts to use",
                default: "'Open Sans', sans-serif",
                type: "TEXT"
            },
            customCss: {
                name: "Custom CSS",
                description: "(Optional) Custom CSS overrides",
                default: "",
                type: "TEXT"
            }
        },
        componentProperties: {}
    },
    "no_style": {
        _id: "",
        shortId: "no_style",
        name: "No style",
        compatibleWith: ["web_spotlight"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "No style overrides.",
        visibility: "PUBLIC",
        style: "",
        containerClassNames: [],
        colorTheme: ["#fff", "#000"],
        properties: {},
        componentProperties: {}
    },
    "map_outback": {
        _id: "",
        shortId: "map_outback",
        name: "Outback",
        compatibleWith: ["store_locator"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Natural look and feel.",
        visibility: "PUBLIC",
        style: "@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'); @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap'); @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap'); .map_outback { width: 100% } .map_outback .map-control { width: 100%; height: 100%; display: inline-block; position: relative; max-width: 480px; vertical-align: top; overflow-y: scroll } .map_outback .map-container { min-height: 300px; height: 100%; display: inline-block; width: calc(100% - 480px); position: relative; overflow: hidden } .map_outback .map-control-entry { border-top: 1px solid #9ca5b3; padding: 10px; font-family: 'EB Garamond', serif; font-size: 16px; line-height: 20px; } .map_outback .map-control-entry .label { display: block; font-size: 20px; font-weight: 500; margin-bottom: 5px; font-family: 'Mukta', sans-serif; } .map_outback .map-control-entry .image img { width: 100%; margin-top: 10px; margin-bottom: 10px; } .map_outback .map-control-entry .description { display: block; margin-bottom: 5px; font-size: 16px; } .map_outback .map-control-entry .location { display: block; margin-bottom: 10px; font-size: 16px; } .map_outback .map-control-entry .location .icon { margin-right: 5px; } .map_outback .map-control-entry .callout { display: inline-block; padding: 9px 13px; border: 1px solid #a5b076; font-size: 0.7rem; text-decoration: none; text-transform: uppercase; color: #000; font-family: 'Mukta', sans-serif; font-weight: 200; margin-right: 10px; } .map_outback .map-control-entry .callout:hover { background-color: #a5b076; color: #ffffff; } .map_outback .marker .label { display: block; margin-bottom: 5px; font-size: 16px } .map_outback .marker .location { display: block; margin-bottom: 5px; } .map_outback .marker .location .icon { margin-right: 5px; } .map_outback .pagination { margin-top: 5px; } .map_outback .pagination a, .map_outback .pagination .currentPage { margin: 2px; padding: 3px; font-size: 16px; }",
        containerClassNames: ["map_outback"],
        colorTheme: ["#ae9e90", "#a5b076", "#93817c", "#ebe3cd", "#523735", "#f5f1e6", "#c9b2a6"],
        properties: {},
        componentProperties: {},
        jsonContent: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]
    },
    "map_inverted": {
        _id: "",
        shortId: "map_inverted",
        name: "Inverted",
        compatibleWith: ["store_locator"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Designed to blend with darker color themes. This style ignores the image fields specified in the template",
        visibility: "PUBLIC",
        style: "@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'); url('https://fonts.googleapis.com/css2?family=Lato&display=swap') .map_inverted { width: 100% } .map_inverted .map-control { width: 100%; height: 100%; display: inline-block; position: relative; max-width: 480px; vertical-align: top; overflow-y: scroll } .map_inverted .map-container { min-height: 300px; height: 100%; display: inline-block; width: calc(100% - 480px); position: relative; overflow: hidden } .map_inverted .map-control-entry { border-top: 1px solid #9ca5b3; padding: 10px; font-family: 'Lato', sans-serif; font-size: 16px; line-height: 20px; } .map_inverted .map-control-entry .container { display: flex; flex-flow: column; } .map_inverted .map-control-entry .label { display: block; font-size: 18px; font-weight: 600; margin-bottom: 5px; font-family: 'Lato', sans-serif; order: 2; } .map_inverted .map-control-entry .image { order: 1; display: none; } .map_inverted .map-control-entry .description { order: 3; display: block; margin-bottom: 5px; font-size: 16px; } .map_inverted .map-control-entry .location { display: block; margin-bottom: 15px; font-size: 16px; order: 4 } .map_inverted .map-control-entry .location .icon { margin-right: 5px; } .map_inverted .map-control-entry .callouts { order: 5 } .map_inverted .map-control-entry .callout { display: inline-block; width: 40%; text-align: center; padding: 9px 13px; border: 1px solid #000; font-size: 14px; text-decoration: none; text-transform: uppercase; color: #000; font-family: 'Lato', sans-serif; font-weight: 600; margin-right: 10px; } .map_inverted .map-control-entry .callout:hover { background-color: #000000; color: #ffffff; } .map_inverted .marker .label { display: block; margin-bottom: 5px; font-size: 16px } .map_inverted .marker .location { display: block; margin-bottom: 5px; } .map_inverted .marker .location .icon { margin-right: 5px; } .map_inverted .pagination { margin-top: 5px; } .map_inverted .pagination a, .map_inverted .pagination .currentPage { margin: 2px; padding: 3px; font-size: 16px; }",
        containerClassNames: ["map_inverted"],
        colorTheme: ["#000000", "#cccccc", "#ffffff"],
        properties: {},
        componentProperties: {},
        jsonContent: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    },
    "map_silver": {
        _id: "",
        shortId: "map_silver",
        name: "Silver",
        compatibleWith: ["store_locator"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Map is designed to be suppressed from the place marks.",
        visibility: "PUBLIC",
        style: "@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'); url('https://fonts.googleapis.com/css2?family=Lato&display=swap') .map_silver { width: 100% } .map_silver .map-control { width: 100%; height: 100%; display: inline-block; position: relative; max-width: 480px; vertical-align: top; overflow-y: scroll } .map_silver .map-container { min-height: 300px; height: 100%; display: inline-block; width: calc(100% - 480px); position: relative; overflow: hidden } .map_silver .map-control-entry { border-top: 1px solid #9ca5b3; padding: 10px; font-family: 'Lato', sans-serif; font-size: 16px; line-height: 20px; } .map_silver .map-control-entry .container { display: flex; flex-flow: column; } .map_silver .map-control-entry .label { display: block; font-size: 18px; font-weight: 600; margin-bottom: 5px; font-family: 'Lato', sans-serif; order: 2; } .map_silver .map-control-entry .image { order: 1 } .map_silver .map-control-entry .image img { width: 100%; margin-bottom: 10px; height: 250px; object-fit: cover; } .map_silver .map-control-entry .description { display: none; order: 3 } .map_silver .map-control-entry .location { display: block; margin-bottom: 15px; font-size: 16px; order: 4 } .map_silver .map-control-entry .location .icon { margin-right: 5px; } .map_silver .map-control-entry .callouts { order: 5 } .map_silver .map-control-entry .callout { display: inline-block; width: 40%; text-align: center; padding: 9px 13px; border: 1px solid #9ca5b3; font-size: 14px; text-decoration: none; text-transform: uppercase; color: #000; font-family: 'Lato', sans-serif; font-weight: 600; margin-right: 10px; } .map_silver .map-control-entry .callout:hover { background-color: #9ca5b3; color: #ffffff; } .map_silver .marker .label { display: block; margin-bottom: 5px; font-size: 16px } .map_silver .marker .location { display: block; margin-bottom: 5px; } .map_silver .marker .location .icon { margin-right: 5px; } .map_silver .pagination { margin-top: 5px; } .map_silver .pagination a, .map_silver .pagination .currentPage { margin: 2px; padding: 3px; font-size: 16px; }",
        containerClassNames: ["map_silver"],
        colorTheme: ["#746855", "#d59563", "#6b9a76", "#9ca5b3", "#17263c"],
        properties: {},
        componentProperties: {},
        jsonContent: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    }
};

var CodingLanguages;
(function (CodingLanguages) {
    CodingLanguages["Javascript"] = "javascript";
    CodingLanguages["Typescript"] = "typescript";
    CodingLanguages["React"] = "react";
    CodingLanguages["ReactNative"] = "react_native";
})(CodingLanguages || (CodingLanguages = {}));

var DataSourceFieldType;
(function (DataSourceFieldType) {
    DataSourceFieldType["Text"] = "text";
    DataSourceFieldType["Number"] = "number";
    DataSourceFieldType["DateTime"] = "datetime";
    DataSourceFieldType["Currency"] = "currency";
    DataSourceFieldType["Percent"] = "percent";
    DataSourceFieldType["Link"] = "link";
    DataSourceFieldType["Email"] = "email";
    DataSourceFieldType["LatLng"] = "latlng";
    DataSourceFieldType["Address"] = "address";
    DataSourceFieldType["Boolean"] = "boolean";
})(DataSourceFieldType || (DataSourceFieldType = {}));

var DataSourceType;
(function (DataSourceType) {
    DataSourceType["SINGLE"] = "SINGLE";
    DataSourceType["JOIN"] = "JOIN";
})(DataSourceType || (DataSourceType = {}));

var PageTypes;
(function (PageTypes) {
    PageTypes["LANDING"] = "LANDING";
    PageTypes["LIST"] = "LIST";
    PageTypes["DETAIL"] = "DETAIL";
    PageTypes["EDIT"] = "EDIT";
    PageTypes["CREATE"] = "CREATE";
    PageTypes["ITEM"] = "ITEM";
    PageTypes["MARKER"] = "MARKER";
    PageTypes["SCRIPT"] = "SCRIPT";
})(PageTypes || (PageTypes = {}));

//     Board = "view_board", not used, for now.
var TableViewViewType;
(function (TableViewViewType) {
    TableViewViewType["Spotlight"] = "view_spotlight";
    TableViewViewType["List"] = "view_list";
    TableViewViewType["Gallery"] = "view_gallery";
    TableViewViewType["Graph"] = "view_graph";
    TableViewViewType["Table"] = "view_table";
    TableViewViewType["Map"] = "view_map";
    TableViewViewType["Nearby"] = "view_nearby";
})(TableViewViewType || (TableViewViewType = {}));

var static_templates = {
    "card_list": {
        _id: "",
        shortId: "card_list",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.List, TableViewViewType.Gallery],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Card List",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/card_list.png"],
        description: "This template displays each row of data as a card, with a title, an image, and a link to redirect to.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        dataSourceType: DataSourceType.SINGLE,
        properties: {},
        pageContent: { "LIST": "<div class='container'><span class='title'>{{title}}</span><span class='image'><img src='{{thumbnail}}'/></span><span class='description'>{{description}}</span><span><a href='{{link}}'>{{linkText}}</a></span></div>" },
        templateFields: {
            title: {
                name: "Title",
                description: "Title of the card item",
                compatibleTypes: [],
            },
            link: {
                name: "Link",
                description: "Link to navigate to",
                compatibleTypes: [DataSourceFieldType.Link]
            },
            linkText: {
                name: "Link Text",
                description: "Text for the link",
                compatibleTypes: [],
            },
            thumbnail: {
                name: "Thumbnail image",
                description: "Main image for the card",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            description: {
                name: "Description",
                description: "Item's description",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
    "standard_table": {
        _id: "",
        shortId: "standard_table",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Table],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Table",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/table.png"],
        description: "Table template shows your data in a tabular format.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            caption: {
                name: "Caption",
                description: "Use component's title as a caption for the table",
                default: false,
                type: "BOOLEAN"
            }
        },
        componentProperties: {}
    },
    "barchart": {
        _id: "",
        shortId: "barchart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Graph],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Bar Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/barchart.png"],
        description: "The bar chart template assumes each column in your data as a bar. Also, the data must be in numeric format to work.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            useFirstColumnAsLabels: {
                name: "Use First Column as Label",
                description: "Use first column of the data as labels for each dataset",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            },
            showVertically: {
                name: "Show Vertically",
                description: "Chart graph in vertical orientation",
                default: false,
                type: "BOOLEAN"
            },
            roundedBars: {
                name: "Rounded Bars",
                description: "Make bars round",
                default: false,
                type: "BOOLEAN"
            },
            stackedBars: {
                name: "Stacked Bars",
                description: "Stack bars of the same group",
                default: false,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "bar"
        }
    },
    "piechart": {
        _id: "",
        shortId: "piechart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Graph],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Pie Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/piechart.png"],
        description: "Pie chart template uses the first two rows of your data to visualize the chart and its labels. Please note, data must be in numeric format to work.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            useFirstColumnAsLabels: {
                name: "Use First Column as Label",
                description: "Use first column of the data as labels for each dataset",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "pie"
        }
    },
    "doughnutchart": {
        _id: "",
        shortId: "doughnutchart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Graph],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Doughnut Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/piechart.png"],
        description: "Doughnut chart template uses the first two rows of your data to visualize the chart and its labels. Please note, data must be in numeric format to work.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            useFirstColumnAsLabels: {
                name: "Use First Column as Label",
                description: "Use first column of the data as labels for each dataset",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "doughnut"
        }
    },
    "linechart": {
        _id: "",
        shortId: "linechart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Graph],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Line Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/linechart.png"],
        description: "Line chart template requires all non-label data to be in numeric format to work.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            useFirstColumnAsLabels: {
                name: "Use First Column as Label",
                description: "Use first column of the data as labels for each dataset",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            },
            showVertically: {
                name: "Show Vertically",
                description: "Chart graph in vertical orientation",
                default: false,
                type: "BOOLEAN"
            },
            fill: {
                name: "Fill lines",
                description: "Fill area under the line",
                default: false,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "line"
        }
    },
    "formal_menu": {
        _id: "",
        shortId: "formal_menu",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.List],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Formal Menu",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/fine_dining_menu.png"],
        description: "This template displays data as a menu / catalog of items with prices.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        dataSourceType: DataSourceType.SINGLE,
        properties: {},
        pageContent: { "LIST": "<div class='container'><span class='name'>{{name}}</span><span class='description'>{{description}}</span><span class='price'>{{price}}</span></div>" },
        templateFields: {
            name: {
                name: "Name",
                description: "Item name",
                compatibleTypes: [],
            },
            price: {
                name: "Price",
                description: "Item price",
                compatibleTypes: []
            },
            description: {
                name: "Description",
                description: "Item's description",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
    "graphic_menu": {
        _id: "",
        shortId: "graphic_menu",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Gallery],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Graphic Menu",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/boxed_list.png", "/images/templates/boxed_menu.png"],
        description: "This template displays data as a menu / catalog of items with prices and images.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        dataSourceType: DataSourceType.SINGLE,
        properties: {},
        pageContent: { "LIST": "<div class='container'><span class='image'><img src='{{image}}'/></span><span class='name'>{{name}}</span><span class='price'>{{price}}</span><span class='description'>{{description}}</span></div>" },
        templateFields: {
            name: {
                name: "Name",
                description: "Item name",
                compatibleTypes: [],
            },
            price: {
                name: "Price",
                description: "Item price",
                compatibleTypes: []
            },
            image: {
                name: "Item Image",
                description: "Image for the item",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            description: {
                name: "Description",
                description: "Item's description",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
    "web_spotlight": {
        _id: "",
        shortId: "web_spotlight",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Spotlight],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Web Spotlight",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/web_spotlight.png"],
        description: "This template displays a url of a given row",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            autoDisplayFirstRow: {
                name: "Auto display first row",
                description: "Display the data from the first row without a lookup",
                default: false,
                type: "BOOLEAN"
            },
            staticContent: {
                name: "Display static content",
                description: "Display static content instead of loading a URL",
                default: false,
                type: "BOOLEAN"
            },
            scrollEnabled: {
                name: "Scroll enabled",
                description: "Determines whether scrolling is enabled in the displayed view",
                default: true,
                type: "BOOLEAN"
            },
            pullToRefreshEnabled: {
                name: "Pull to refresh gesture enabled",
                description: "Determines whether pull to refresh gesture is enabled in the displayed view. Refresh is not supported on static contents",
                default: true,
                type: "BOOLEAN"
            },
            iBeaconUuid: {
                name: "iBeacon UUID",
                description: "iBeacon's proximity UUID to distinguish beacons in your network",
                default: "",
                type: "TEXT"
            },
            lookupInterface: {
                name: "Lookup interface",
                description: "Lookup interface",
                default: undefined,
                type: "MULTI",
                values: [
                    { key: "NUMERIC", text: "Numeric", value: "NUMERIC" },
                    { key: "TEXT", text: "Text", value: "TEXT" },
                    { key: "BLE", text: "iBeacon", value: "BLE" },
                ]
            },
        },
        pageContent: {},
        templateFields: {
            url: {
                name: "Url",
                description: "URL to display",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            static: {
                name: "Static content",
                description: "Static HTML content to display instead",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
    "kiosk_guide_spotlight": {
        _id: "",
        shortId: "kiosk_guide_spotlight",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Spotlight],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Kiosk Guide Spotlight",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/kiosk_spotlight.png"],
        description: "This template vends kiosk-style guide content",
        visibility: "PUBLIC",
        pages: [PageTypes.DETAIL],
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            autoDisplayFirstRow: {
                name: "Auto display first row",
                description: "Display the data from the first row without a lookup",
                default: false,
                type: "BOOLEAN"
            },
            hasAudio: {
                name: "Add audio content",
                description: "Display audio content",
                default: false,
                type: "BOOLEAN"
            },
            iBeaconUuid: {
                name: "iBeacon UUID",
                description: "iBeacon's proximity UUID to distinguish beacons in your network",
                default: "",
                type: "TEXT"
            },
            lookupInterface: {
                name: "Lookup interface",
                description: "Lookup interface",
                default: undefined,
                type: "MULTI",
                values: [
                    { key: "NUMERIC", text: "Numeric", value: "NUMERIC" },
                    { key: "TEXT", text: "Text", value: "TEXT" },
                    { key: "BLE", text: "iBeacon", value: "BLE" },
                ]
            },
        },
        pageContent: {
            "DETAIL": "<div class='container'><span class='image' style='background-image: url(\"{{image}}\");'><span class='audio'><audio controls autoplay><source src='{{audio}}' /></audio></span></span><span class='label'>{{label}}</span><span class='description'>{{description}}</span></div>"
        },
        templateFields: {
            label: {
                name: "Label",
                description: "Label of the artifact",
                compatibleTypes: [],
            },
            image: {
                name: "Image",
                description: "Link to the the main image of the artifact",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            audio: {
                name: "Audio",
                description: "Link to the audio description of the artifact",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            description: {
                name: "Description",
                description: "Description of the point of interest",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
    "featured_signage": {
        _id: "",
        shortId: "featured_signage",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Gallery],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Signage - Featured",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/job_postings.png"],
        description: "This template is designed for digital signage, optimized for displays with width greater than 1024 pixels wide.",
        visibility: "PUBLIC",
        pages: [PageTypes.LANDING],
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            featuredImageStyle: {
                name: "Image Display Style",
                description: "Select how you the featured images will be sized for each menu item",
                default: "FIT",
                type: "LIST",
                values: [
                    { key: "FIT", text: "Fit", value: "FIT" },
                    { key: "FIT-Y", text: "Fit by height", value: "FIT-Y" },
                    { key: "FIT-X", text: "Fit by weight", value: "FIT-X" },
                    { key: "COVER", text: "Cover", value: "COVER" },
                ]
            },
            displaySoldOut: {
                name: "Show Sold-out Items",
                description: "If checked, the display will show the items that are sold out",
                default: false,
                type: "BOOLEAN",
            },
            headerImage: {
                name: "Header Image",
                description: "(Optional) URL of the image to display as a header on the signage",
                default: "",
                type: "TEXT"
            },
            featuredCount: {
                name: "Featured Count",
                description: "(Optional) Limits the number of items featured. Leave blank if you do not want to limit",
                default: 8,
                type: "NUMBER",
            },
            rowCount: {
                name: "Number of rows",
                description: "(Optional) Number of rows of items to be displayed on screen",
                default: 2,
                type: "NUMBER",
            },
            refreshInterval: {
                name: "Refresh Interval",
                description: "(Optional) How often to refresh the signage, in seconds. Faster refresh rate incurs higher cost",
                default: 30,
                type: "NUMBER",
            },
        },
        pageContent: { "LANDING": "<div class='container'><span class='headerImageTop' style='background-image: url(\"{{headerImage}}\");'></span><div class='items'>[[DETAIL]]</div><span class='headerImageBottom' style='background-image: url(\"{{headerImage}}\");'></span></div>",
            "DETAIL": "<div class='item' style='background-image: url(\"{{featuredImage}}\"); height: calc(100% / {{rowCount}}); width: calc((100% * {{rowCount}})/({{itemCount}}))'><span class='details'><span class='prices'><span class='soldOut{{soldOut}}'>SOLD OUT</span><span class='price1'>{{price1}}</span><span class='price1Name'>{{price1-title}}</span><span class='price2'>{{price2}}</span><span class='price2Name'>{{price2-title}}</span><span class='price3'>{{price3}}</span><span class='price3Name'>{{price3-title}}</span><span class='description'>{{description}}</span></span></span><span class='label'><span class='index'>{{index}}</span><span class='name'>{{name}}</span></span></div>" },
        templateFields: {
            name: {
                name: "Name",
                description: "Name of the menu",
                compatibleTypes: [],
            },
            description: {
                name: "Description",
                description: "(Optional) Short description of the featured menu",
                compatibleTypes: [],
            },
            subtext: {
                name: "Sub-text",
                description: "(Optional) Sub-text for the menu name",
                compatibleTypes: [],
            },
            featuredImage: {
                name: "Featured Image",
                description: "(Optional) URL of the image to display to feature",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            price1: {
                name: "Price 1",
                description: "Price of the item",
                compatibleTypes: [],
            },
            price2: {
                name: "Price 2",
                description: "(Optional) Secondary price of the item",
                compatibleTypes: [],
            },
            price3: {
                name: "Price 3",
                description: "(Optional) Tertiary price of the item",
                compatibleTypes: [],
            },
            soldOut: {
                name: "Sold Out",
                description: "(Optional) Field to check if an item is sold out",
                compatibleTypes: [DataSourceFieldType.Boolean],
            },
        },
        componentProperties: {}
    },
    "detailed_signage": {
        _id: "",
        shortId: "detailed_signage",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Gallery],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Signage - Detailed",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/job_postings.png"],
        description: "This template is designed for digital signage, optimized for displays with width greater than 1024 pixels wide.",
        visibility: "PUBLIC",
        pages: [PageTypes.LANDING],
        dataSourceType: DataSourceType.JOIN,
        properties: {
            displaySoldOut: {
                name: "Show Sold-out Items",
                description: "If checked, the display will show the items that are sold out",
                default: false,
                type: "BOOLEAN",
            },
            headerImage: {
                name: "Header Image",
                description: "(Optional) URL of the image to display as a header on the signage",
                default: "",
                type: "TEXT"
            },
            columnCount: {
                name: "Number of column",
                description: "(Optional) Number of columns of items to be displayed on screen",
                default: 3,
                type: "NUMBER",
            },
            displayMediaType: {
                name: "Adjacent media",
                description: "Select the type of media shown next to the menu items",
                default: "NONE",
                type: "LIST",
                values: [
                    { key: "NONE", text: "No media to display", value: "NONE" },
                    { key: "VIDEO", text: "Video", value: "VIDEO" },
                    { key: "IMAGE", text: "An image", value: "IMAGE" },
                    { key: "IMAGES", text: "Gallery of images", value: "IMAGES" },
                ]
            },
            mediaLink: {
                name: "Media Link",
                description: "(Optional) URL(s) of media to play adjacent to the menu",
                default: "",
                type: "TEXT"
            },
            tickerType: {
                name: "Bottom Ticker",
                description: "(Optional) Type of the ticker shown on the bottom of the screen",
                default: "NONE",
                type: "LIST",
                values: [
                    { key: "NONE", text: "Do not display", value: "NONE" },
                    { key: "NEWS", text: "Latest news and quotes", value: "NEWS" },
                    { key: "WEATHER", text: "Local weather information", value: "WEATHER" },
                    { key: "CUSTOM", text: "Custom message", value: "CUSTOM" },
                ]
            },
            refreshInterval: {
                name: "Refresh Interval",
                description: "(Optional) How often to refresh the signage, in seconds. Faster refresh rate incurs higher cost",
                default: 30,
                type: "NUMBER",
            }
        },
        pageContent: { "LANDING": "<div class='container'><span class='headerImageTop' style='background-image: url(\"{{headerImage}}\");'></span><div class='mainContent tickerType{{tickerType}}'><div class='imageOverlay noImage{{mediaLink}} image{{displayMediaType}}'><img src='{{mediaLink}}'/></div> <div class='videoOverlay noVideo{{mediaLink}} video{{displayMediaType}}'><video autoplay muted loop src='{{mediaLink}}'></video></div><div class='items noVideo{{mediaLink}}'>[[DETAIL]]</div></div><span class='headerImageBottom' style='background-image: url(\"{{headerImage}}\");'></span><div class='tickerContainer tickerTypeHas{{tickerType}}'><span id='tickerClock' class='tickerClock'></span><span class='tickerTypeWEATHER tickerTypeHas{{tickerType}}'><div id='ww_09c207bc8e494' v='1.3' loc='auto' a='{\"t\":\"ticker\",\"lang\":\"en\",\"sl_lpl\":1,\"ids\":[],\"font\":\"Arial\",\"sl_ics\":\"one_a\",\"sl_sot\":\"fahrenheit\",\"cl_bkg\":\"image\",\"cl_font\":\"#FFFFFF\",\"cl_cloud\":\"#FFFFFF\",\"cl_persp\":\"#81D4FA\",\"cl_sun\":\"#FFC107\",\"cl_moon\":\"#FFC107\",\"cl_thund\":\"#FF5722\"}'><a href='https://weatherwidget.org/uk/' id='ww_09c207bc8e494_u' target='_blank'>&#1041;&#1077;&#1079;&#1082;&#1086;&#1096;&#1090;&#1086;&#1074;&#1085;&#1080;&#1081; HTML &#1087;&#1086;&#1075;&#1086;&#1076;&#1085;&#1080;&#1081; &#1110;&#1085;&#1092;&#1086;&#1088;&#1084;&#1077;&#1088; &#1076;&#1083;&#1103; &#1089;&#1072;&#1081;&#1090;&#1091;</a></div></span></div></div><style>.items { -moz-column-count: {{columnCount}}; -webkit-column-count: {{columnCount}}; column-count: {{columnCount}}; }</style>",
            "DETAIL": "<div class='categoryContainer' id ='category{{index}}'><div class='category'><span class='categoryHeader'><span class='categoryTitle'>{{category}}</span><span class='price1Name'></span><span class='price2Name'></span><span class='price3Name'></span></span><span class='catSubText'></span>[[ITEM]]</div></div>",
            "ITEM": "<span class='soldOut{{soldOut}}'>SOLD OUT</span><div class='item'><span class='name'>{{name}}<span class='tags'>{{tags}}</span></span><span class='subtext'>{{subtext}}</span><span class='price1'>{{price1}}</span><span class='price1Value'>{{price1-title}}</span><span class='price2'>{{price2}}</span><span class='price2Value'>{{price2-title}}</span><span class='price3'>{{price3}}</span><span class='price3Value'>{{price3-title}}</span></div><span class='description'>{{description}}</span><span class='categorySubtext'>{{categorySubtext}}</span>",
            "SCRIPT": "<script>function processTags() { var tagElements = document.querySelectorAll(\".tags\"); for (var i=0; i < tagElements.length; i++) { var tags = tagElements[i].innerText.trim().split(' '); var processed = []; for (var j=0; j < tags.length; j++) { if (tags[j].trim() === '') continue; processed.push(\"<span class='tagLabel'>\" + tags[j] + \"</span>\"); } tagElements[i].innerHTML = processed.join(''); tagElements[i].className = tagElements[i].className.replaceAll(\"tags\", \"tagsProcessed\"); } } function uniqueTexts(el) { if (!el) return false; var arr = []; for (var i = 0; i < el.length; i++) if (el[i].innerHTML && el[i].innerHTML.trim()) arr.push(el[i].innerHTML.trim()); return [...new Set(arr)]; } function processColumn(cat, priceClass, titleClass, nameClass) { var prices = uniqueTexts(cat.querySelectorAll(priceClass)); var titles = uniqueTexts(cat.querySelectorAll(titleClass)); if ((prices.length > 0) && cat.querySelector(nameClass)) { cat.querySelector(nameClass).innerHTML = titles.length > 0 ? titles[0] : ''; if (prices.length == 1) { cat.querySelector(nameClass).innerHTML += '<span class=\"categoryPrice\">' + prices[0] + '</span>'; cat.querySelectorAll(priceClass).forEach(p => p.innerText = ''); }}} function populateCategories() { var categories = document.querySelectorAll('.category'); for (var i=0; i < categories.length; i++) { var cat = categories[i]; processColumn(cat, '.price1', '.price1Value', '.price1Name'); processColumn(cat, '.price2', '.price2Value', '.price2Name'); processColumn(cat, '.price3', '.price3Value', '.price3Name'); var subtext = uniqueTexts(cat.querySelectorAll('.categorySubtext')); if (subtext.length > 0 && cat.querySelector('.catSubText')) { cat.querySelector('.catSubText').innerHTML = subtext[0]; }}} function tickerTime() { let date = new Date(); let hh = date.getHours(); let mm = date.getMinutes(); let session = 'AM'; if(hh >= 12) { session = 'PM'; } if(hh > 12) { hh -= 12; } mm = (mm < 10) ? '0' + mm : mm; let time = hh + ':' + mm + session; document.getElementById('tickerClock').innerText = time; var t = setTimeout(function(){ tickerTime() }, 1000);} tickerTime(); processTags(); populateCategories();</script><script async src=\"https://app1.weatherwidget.org/js/?id=ww_09c207bc8e494\"></script>" },
        templateFields: {
            name: {
                name: "Name",
                description: "Name of the menu",
                compatibleTypes: [],
            },
            category: {
                name: "Category",
                description: "(Optional) Category of the menu",
                compatibleTypes: [],
            },
            description: {
                name: "Description",
                description: "(Optional) Short description of the menu item",
                compatibleTypes: [],
            },
            categorySubtext: {
                name: "Category Sub-text",
                description: "(Optional) Sub-text for the category",
                compatibleTypes: [],
            },
            subtext: {
                name: "Sub-text",
                description: "(Optional) Sub-text for the menu name",
                compatibleTypes: [],
            },
            tags: {
                name: "Tags",
                description: "(Optional) Tags to display, separated by comma, next to the menu name",
                compatibleTypes: [],
            },
            price1: {
                name: "Price 1",
                description: "Price of the item",
                compatibleTypes: [],
            },
            price2: {
                name: "Price 2",
                description: "(Optional) Secondary price of the item",
                compatibleTypes: [],
            },
            price3: {
                name: "Price 3",
                description: "(Optional) Tertiary price of the item",
                compatibleTypes: [],
            },
            soldOut: {
                name: "Sold Out",
                description: "(Optional) Field to check if an item is sold out",
                compatibleTypes: [DataSourceFieldType.Boolean],
            },
        },
        componentProperties: {
            groupingField: "category"
        }
    },
    "qr_menu": {
        _id: "",
        shortId: "qr_menu",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Gallery],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Mobile Menu",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/job_postings.png"],
        description: "This template is optimized for showing menus on mobile devices.",
        visibility: "PUBLIC",
        pages: [PageTypes.LANDING],
        dataSourceType: DataSourceType.JOIN,
        properties: {
            displaySoldOut: {
                name: "Show Sold-out Items",
                description: "If checked, the display will show the items that are sold out",
                default: false,
                type: "BOOLEAN",
            },
            headerImage: {
                name: "Header Image",
                description: "(Optional) URL of the image to display as a header on the signage",
                default: "",
                type: "TEXT"
            },
            columnCount: {
                name: "Number of columns",
                description: "(Optional) Number of columns of items to be displayed on screen",
                default: 1,
                type: "NUMBER",
            }
        },
        pageContent: { "LANDING": "<div class='container'><span class='headerImageTop' style='background-image: url(\"{{headerImage}}\");'></span><div class='mainContent tickerType{{tickerType}}'><div class='items'>[[DETAIL]]</div></div><style>.items { -moz-column-count: {{columnCount}}; -webkit-column-count: {{columnCount}}; column-count: {{columnCount}}; }</style>",
            "DETAIL": "<div class='categoryContainer' id ='category{{index}}'><div class='category'><span class='categoryHeader'><span class='categoryTitle'>{{category}}</span><span class='price1Name'></span><span class='price2Name'></span><span class='price3Name'></span></span><span class='catSubText'></span>[[ITEM]]</div></div>",
            "ITEM": "<span class='soldOut{{soldOut}}'>SOLD OUT</span><div class='item'><span class='name'>{{name}}<span class='tags'>{{tags}}</span></span><span class='subtext'>{{subtext}}</span><span class='price1'>{{price1}}</span><span class='price1Value'>{{price1-title}}</span><span class='price2'>{{price2}}</span><span class='price2Value'>{{price2-title}}</span><span class='price3'>{{price3}}</span><span class='price3Value'>{{price3-title}}</span></div><span class='description'>{{description}}</span><span class='categorySubtext'>{{categorySubtext}}</span>",
            "SCRIPT": "<script>function processTags() { var tagElements = document.querySelectorAll(\".tags\"); for (var i=0; i < tagElements.length; i++) { var tags = tagElements[i].innerText.trim().split(' '); var processed = []; for (var j=0; j < tags.length; j++) { if (tags[j].trim() === '') continue; processed.push(\"<span class='tagLabel'>\" + tags[j] + \"</span>\"); } tagElements[i].innerHTML = processed.join(''); tagElements[i].className = tagElements[i].className.replaceAll(\"tags\", \"tagsProcessed\"); } } function uniqueTexts(el) { if (!el) return false; var arr = []; for (var i = 0; i < el.length; i++) if (el[i].innerHTML && el[i].innerHTML.trim()) arr.push(el[i].innerHTML.trim()); return [...new Set(arr)]; } function processColumn(cat, priceClass, titleClass, nameClass) { var prices = uniqueTexts(cat.querySelectorAll(priceClass)); var titles = uniqueTexts(cat.querySelectorAll(titleClass)); if ((prices.length > 0) && cat.querySelector(nameClass)) { cat.querySelector(nameClass).innerHTML = titles.length > 0 ? titles[0] : ''; if (prices.length == 1) { cat.querySelector(nameClass).innerHTML += '<span class=\"categoryPrice\">' + prices[0] + '</span>'; cat.querySelectorAll(priceClass).forEach(p => p.innerText = ''); }}} function populateCategories() { var categories = document.querySelectorAll('.category'); for (var i=0; i < categories.length; i++) { var cat = categories[i]; processColumn(cat, '.price1', '.price1Value', '.price1Name'); processColumn(cat, '.price2', '.price2Value', '.price2Name'); processColumn(cat, '.price3', '.price3Value', '.price3Name'); var subtext = uniqueTexts(cat.querySelectorAll('.categorySubtext')); if (subtext.length > 0 && cat.querySelector('.catSubText')) { cat.querySelector('.catSubText').innerHTML = subtext[0]; }}} processTags(); populateCategories();</script>" },
        templateFields: {
            name: {
                name: "Name",
                description: "Name of the menu",
                compatibleTypes: [],
            },
            category: {
                name: "Category",
                description: "(Optional) Category of the menu",
                compatibleTypes: [],
            },
            description: {
                name: "Description",
                description: "(Optional) Short description of the menu item",
                compatibleTypes: [],
            },
            categorySubtext: {
                name: "Category Sub-text",
                description: "(Optional) Sub-text for the category",
                compatibleTypes: [],
            },
            subtext: {
                name: "Sub-text",
                description: "(Optional) Sub-text for the menu name",
                compatibleTypes: [],
            },
            tags: {
                name: "Tags",
                description: "(Optional) Tags to display, separated by comma, next to the menu name",
                compatibleTypes: [],
            },
            price1: {
                name: "Price 1",
                description: "Price of the item",
                compatibleTypes: [],
            },
            price2: {
                name: "Price 2",
                description: "(Optional) Secondary price of the item",
                compatibleTypes: [],
            },
            price3: {
                name: "Price 3",
                description: "(Optional) Tertiary price of the item",
                compatibleTypes: [],
            },
            soldOut: {
                name: "Sold Out",
                description: "(Optional) Field to check if an item is sold out",
                compatibleTypes: [DataSourceFieldType.Boolean],
            },
        },
        componentProperties: {
            groupingField: "category"
        }
    },
    "job_postings": {
        _id: "",
        shortId: "job_postings",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.List],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "Job Postings",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/job_postings.png"],
        description: "This template displays each row of data as a card, with a title, an image, and a link to redirect to.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        dataSourceType: DataSourceType.SINGLE,
        properties: {},
        pageContent: { "LIST": "<div class='container'><span class='title'><a href='{{link}}'>{{title}}</a></span><span class='description'>{{description}}</span></div>" },
        templateFields: {
            title: {
                name: "Title",
                description: "Title of the posting",
                compatibleTypes: [],
            },
            link: {
                name: "Call To Action Link",
                description: "Link to navigate to",
                compatibleTypes: [DataSourceFieldType.Link]
            },
            description: {
                name: "Description",
                description: "Short description for the posting",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
    "faq": {
        _id: "",
        shortId: "faq",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.List],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript, CodingLanguages.React],
        name: "FAQs",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/faq.png"],
        description: "This template displays each row of data as a questions and answers format.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        dataSourceType: DataSourceType.SINGLE,
        properties: {},
        pageContent: { "LIST": "<li><input type='checkbox' checked><i></i><h1 class='question'>{{question}}</h1><p>{{answer}}</p></li>" },
        templateFields: {
            question: {
                name: "Question",
                description: "Question",
                compatibleTypes: [],
            },
            answer: {
                name: "Answer",
                description: "Answer",
                compatibleTypes: []
            }
        },
        componentProperties: {}
    },
    "store_locator": {
        _id: "",
        shortId: "store_locator",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Map],
        compatibleLanguages: [CodingLanguages.Javascript, CodingLanguages.Typescript],
        name: "Store Locator",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/store_locator.png"],
        description: "This template displays each row of data as a pinpoint on a map.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST, PageTypes.MARKER],
        dataSourceType: DataSourceType.SINGLE,
        properties: {},
        pageContent: {
            "LIST": "<div class='container'><span class='label'>{{index}}. {{label}}</span><span class='image'><img src='{{image}}'/></span><span class='description'>{{description}}</span><span class='location'><i class='fa-solid fa-map-pin icon'></i>{{location}}</span><span class='callouts'><a class='callout' href='{{calloutLink1}}'>{{calloutLinkText1}}</a><a class='callout' href='{{calloutLink2}}'>{{calloutLinkText2}}</a></span></div>",
            "MARKER": "<div class='marker'><span class='label'>{{label}}</span><span class='location'><i class='fa-solid fa-map-pin icon'></i>{{location}}</span><a class='callout' href='{{calloutLink1}}'>{{calloutLinkText1}}</a></div>"
        },
        templateFields: {
            label: {
                name: "Label",
                description: "Label of the place marker",
                compatibleTypes: [],
            },
            location: {
                name: "Location",
                description: "Address or latitude / longitude of the place marker",
                compatibleTypes: [DataSourceFieldType.Address, DataSourceFieldType.LatLng],
            },
            description: {
                name: "Description",
                description: "(Optional) Description of the place marker",
                compatibleTypes: [],
            },
            markerOverride: {
                name: "Marker Image",
                description: "(Optional) URL of the image to use for place marker",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            image: {
                name: "Main Image",
                description: "(Optional) URL of the image to use in the description of the place marker",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            calloutLink1: {
                name: "Callout Link",
                description: "(Optional) A link to call out to",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            calloutLinkText1: {
                name: "Callout Link Text",
                description: "(Optional) Text for the link to call out to",
                compatibleTypes: [],
            },
            calloutLink2: {
                name: "Second Callout Link",
                description: "(Optional) A second link to call out to",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            calloutLinkText2: {
                name: "Second Callout Link Text",
                description: "(Optional) Text for the second link to call out to",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
    "self_tour": {
        _id: "",
        shortId: "self_tour",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [TableViewViewType.Nearby],
        compatibleLanguages: [CodingLanguages.ReactNative],
        name: "Self-Guided tours",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/self_guide.png"],
        description: "This template vends self-guided tour content for mobile devices.",
        visibility: "PUBLIC",
        pages: [PageTypes.LANDING, PageTypes.DETAIL],
        dataSourceType: DataSourceType.SINGLE,
        properties: {
            autoPlayAudio: {
                name: "Autoplay audio",
                description: "Auto-play audio content when detail page is triggered",
                default: true,
                type: "BOOLEAN"
            },
            lookupInterface: {
                name: "Lookup interface",
                description: "Lookup interface",
                default: undefined,
                type: "MULTI",
                values: [
                    { key: "NUMERIC", text: "Numeric", value: "NUMERIC" },
                    { key: "QR", text: "QR Code", value: "QR" },
                    { key: "BLE", text: "iBeacon", value: "BLE" },
                ]
            },
            iBeaconUuid: {
                name: "iBeacon UUID",
                description: "iBeacon's proximity UUID to distinguish beacons in your network",
                default: "",
                type: "TEXT"
            },
            sheetHeight: {
                name: "Popup height (%)",
                description: "Height of the pop up sheet with respect to the height of the user's device (0 to 100)",
                default: "50",
                type: "NUMBER"
            }
        },
        pageContent: {
            "LANDING": "<div class='container'><span class='heading'>Move closer to an item or enter an item number to view</span></div>",
            "DETAIL": "<div class='container'><span class='image' style='background-image: url(\"{{image}}\");'><span class='audio'><audio controls autoplay><source src='{{audio}}' /></audio></span></span><span class='label'>{{label}}</span><span class='description'>{{description}}</span></div>"
        },
        templateFields: {
            label: {
                name: "Label",
                description: "Label of the artifact",
                compatibleTypes: [],
            },
            image: {
                name: "Image",
                description: "Link to the the main image of the artifact",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            audio: {
                name: "Audio",
                description: "Link to the audio description of the artifact",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            description: {
                name: "Description",
                description: "Description of the point of interest",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
};

var AppointmentViewType;
(function (AppointmentViewType) {
    AppointmentViewType["CalendarBook"] = "CALENDAR_BOOK";
    AppointmentViewType["CalendarBookSelectResource"] = "CALENDAR_BOOK_SELECT_RESOURCE";
    AppointmentViewType["DayBook"] = "DAY_BOOK";
    AppointmentViewType["ListBook"] = "LIST_BOOK";
})(AppointmentViewType || (AppointmentViewType = {}));

var CALENDAR_CONFIG_ENDPOINT = '/s/calendar?id=';
var CALENDAR_TRANSLATIONS_ENDPOINT = "/s/calendar/translations";
var CALENDAR_BOOK_ENDPOINT = '/s/calendar/book?id=';
var CALENDAR_MY_RESERVATIONS_ENDPOINT = '/s/calendar/reservations?id=';
var CALENDAR_RESOURCE_SEARCH_ENDPOINT = "/s/calendar/find?id=";
var CALENDAR_RESOURCE_MY_RESOURCE_ENDPOINT = "/s/calendar/resource";
var CALENDAR_RESOURCE_MY_RESOURCES_ENDPOINT = "/s/calendar/resources";
var CALENDAR_RESOURCE_RESERVATION_ENDPOINT = "/s/calendar/reservation";
var CALENDAR_RESOURCE_MY_RESERVATIONS_ENDPOINT = "/s/calendar/reservations";
var CALENDAR_RESOURCE_MY_RESERVATION_REQUESTS_ENDPOINT = "/s/calendar/reservation_requests";
var DEFAULT_DESCRIPTION_LENGTH_CUTOFF = 30;
var CALENDAR_DETAIL_ENDPOINT = "/s/calendar/detail/";
// TODO deprecate this, not very i18n friendly
var DEFAULT_TIME_FORMAT = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
};
var HOUR_ONLY = {
    hour: 'numeric',
};

var addDays = function (date, days) {
    var newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
};
var compareEventsByStartTime = function (a, b) {
    if (a.startTimeUtc < b.startTimeUtc) {
        return -1;
    }
    if (a.startTimeUtc > b.startTimeUtc) {
        return 1;
    }
    return 0;
};
var minutesSinceMidnight = function (dateObj) {
    if (!dateObj) {
        return 0;
    }
    var date = new Date(dateObj);
    var minutes = date.getMinutes();
    var hours = date.getHours();
    return 60 * hours + minutes;
};
var getEventTime = function (event) {
    var start = new Date(event.startTimeUtc);
    var end = new Date(event.endTimeUtc);
    var isAllDay = event.isAllDay;
    if (isAllDay) {
        return 'All Day';
    }
    if (end && end > new Date(0)) {
        return (start.toLocaleTimeString([], DEFAULT_TIME_FORMAT) +
            ' ~ ' +
            end.toLocaleTimeString([], DEFAULT_TIME_FORMAT));
    }
    return start.toLocaleTimeString([], DEFAULT_TIME_FORMAT);
};
var formatReservationTimeFrame = function (reservation) {
    var start = new Date(reservation.startTimeUtc);
    var end = new Date(reservation.endTimeUtc);
    if (end && end > new Date(0)) {
        return (start.toLocaleTimeString([], DEFAULT_TIME_FORMAT) +
            ' ~ ' +
            end.toLocaleTimeString([], DEFAULT_TIME_FORMAT));
    }
    return start.toLocaleTimeString([], DEFAULT_TIME_FORMAT);
};
var getDateInLocalTime = function (dateObj) {
    return new Date(dateObj.toString().split('GMT')[0] + ' UTC')
        .toISOString()
        .split('T')[0];
};

var CalendarBookingUnit;
(function (CalendarBookingUnit) {
    CalendarBookingUnit["Fixed"] = "fixed";
    CalendarBookingUnit["Flexible"] = "flexible";
    CalendarBookingUnit["Daily"] = "daily";
})(CalendarBookingUnit || (CalendarBookingUnit = {}));

var CalendarBookOn;
(function (CalendarBookOn) {
    CalendarBookOn["EXISTING_EVENTS"] = "book_on_events";
    CalendarBookOn["EXISTING_EVENTS_EXCLUSIVELY"] = "book_exclusively_on_events";
    CalendarBookOn["FREE_SLOTS"] = "book_on_free_slots";
})(CalendarBookOn || (CalendarBookOn = {}));

var CalendarDataProvider;
(function (CalendarDataProvider) {
    CalendarDataProvider["Google"] = "google";
    CalendarDataProvider["CalDAV"] = "cal_dav";
    CalendarDataProvider["None"] = "none";
})(CalendarDataProvider || (CalendarDataProvider = {}));

var clientEnUs = {
    locale: "en-US",
    messages: {
        "select_time_slot": "Select a time slot",
        "select_end_time": "Select end time",
        "select_time_back": "Go back",
        "select_no_availability": "The requested time frame has no available slots.",
        "time_zone": "Time zone",
        "booking_success_modal_title": "Booking confirmed",
        "booking_pending_modal_title": "Reservation is pending",
        "booking_success_modal_message": "You've booked ",
        "reservation_id_label": "Reservation ID",
        "cost_total": "Total",
        "booking_success_modal_email_sent": "The confirmation notice has been sent to your email.",
        "close_modal": "Close",
        "booking_error_generic": "There was an issue processing your booking. Please try again later.",
        "booking_modal_payment_header": "Payment Information",
        "booking_modal_details_header": "Reservation",
        "booking_modal_booker_information": "Your Information",
        "booking_modal_name_field": "Name",
        "booking_modal_name_field_required": "Please enter a name.",
        "booking_modal_email_field": "Email",
        "booking_modal_email_field_required": "Please enter a valid email address.",
        "booking_modal_notes_field": "Notes",
        "booking_modal_submit_button_label": "Book",
        "select_a_resource_to_book": "Select a resource to book",
        "no_resources_available": "No resources available",
        "free": "FREE",
        "redo_search_in_map": "Redo search in map",
        "create_button_label": "Create",
        "update_button_label": "Update",
        "delete_button_label": "Delete",
        "delete_confirmation_message": "Are you sure you want to permanently remove this space?",
        "yes_button_label": "Yes",
        "no_button_label": "No",
        "resource_name_label": "Resource Name",
        "resource_name_tip": "This is a name that your users will use to identify the resource. It can be things like name of the service agent, service type, event, and so on.",
        "resource_name_description": "Enter the name of the resource",
        "resource_name_placeholder": "New Resource",
        "resource_description_label": "Resource Description",
        "resource_description_tip": "This description is used to help your users understand the details of the resource they are booking",
        "resource_description_description": "Description of the resource",
        "resource_description_placeholder": "Describe your resource",
        "static_address_label": "Static Address",
        "static_address_tip": "Enter address where the resource is located in",
        "static_address_description": "Enter location of the resource",
        "calendar_data_source_label": "Calendar Data Source",
        "calendar_data_source_tip": "You must log into AirJam using a related Google account and grant AirJam permission to view your calendars to see the list of your calendars from Google",
        "calendar_data_source_description": "Select a calendar from the list on right to sync with an external calendar data source",
        "booking_durations_label": "Booking Duration",
        "booking_durations_tip": "Tell us how long bookings should be for this resource",
        "booking_durations_description": "Tell us how long bookings should be for this resource",
        "availability_label": "Availability",
        "availability_tip": "You can optionally specify the time frame to allow your users to book this resource",
        "availability_description": "You can specify when your resource is available to book",
        "quantity_available_label": "Quantity Available",
        "quantity_available_tip": "Slots can be number of seats available for the same time period or number of units of items to book, etc",
        "quantity_available_description": "Specify how many slots are available for booking for each time frame",
        "base_price_label": "Base Price",
        "base_price_tip": "This is a default price per booking and can be overridden from the admin interface",
        "base_price_description": "Specify how much each unit of resource costs to book, type 0 for free to book resources",
        "dynamic_pricing_label": "Dynamic Pricing",
        "dynamic_pricing_tip": "Select if you would like AI to predict and adjust pricing for your events based on demand",
        "dynamic_pricing_description": "Specify if you would like to use AI-based dynamic pricing",
        "moderation_label": "Moderation",
        "moderation_tip": "For event moderation, please use the @airjam/calendar-admin library to expose moderation feature to the resource owners",
        "moderation_description": "Specify if you would like the owner of the resources to moderate booking requests",
        "book_on_label": "Book On",
        "book_on_tip": "Your resource can book events on either existing events, or on free time slots between existing events",
        "book_on_description": "Choose whether your users would book on free times or on existing events",
        "past_events_label": "Past Events",
        "past_events_tip": "By default all resources only work on present and future events. Your past events processed previously, however, will still be shown for operational purposes",
        "past_events_description": "Choose whether this resource should sync, process, and book on past events",
        "operating_hours_label": "Operating Hours",
        "operating_hours_tip": "Operating hours restrict the times this resource is available by the time of the day by day of the week. Think of this as store hours",
        "operating_hours_description": "You can specify operating hours for this resource by day of the week",
        "calendar_data_source_none": "None",
        "calendar_data_source_google_calendar": "Google Calendar",
        "calendar_data_source_cal_dav": "CalDAV",
        "calendar_data_source_outlook": "Outlook",
        "moderation_option_do_moderate": "Moderate",
        "moderation_option_do_not_moderate": "Do not moderate",
        "operating_hours_short_sunday": "Sun",
        "operating_hours_short_monday": "Mon",
        "operating_hours_short_tuesday": "Tue",
        "operating_hours_short_wednesday": "Wed",
        "operating_hours_short_thursday": "Thu",
        "operating_hours_short_friday": "Fri",
        "operating_hours_short_saturday": "Sat",
        "seconds": "seconds",
        "minutes": "minutes",
        "hours": "hours",
        "days": "days",
        "weeks": "weeks",
        "months": "months",
        "years": "years",
        "base_pricing_fixed_option": "event",
        "base_pricing_increment_option": "increment",
        "book_on_free_slots_option": "Book on free slots between events",
        "book_on_existing_events_option": "Book on existing events",
        "book_exclusively_on_existing_events_option": "Book exclusively on existing events",
        "freeform_operating_hours_hour_duration_phrase": "to",
        "freeform_booking_duration_sentence_start": "Duration for each booking is",
        "freeform_booking_duration_fixed_option_start": "fixed,",
        "freeform_booking_duration_fixed_option_postfix": "long.",
        "freeform_booking_duration_flexible_option_start": "flexible. Each booking must be at least",
        "freeform_booking_duration_flexible_option_duration_phrase": "long and at most",
        "freeform_booking_duration_flexible_option_increment_pretext": "long, with time increments of",
        "freeform_booking_duration_flexible_option_buffer_time_text_pretext": "There must be at least",
        "freeform_booking_duration_flexible_option_buffer_time_text_between_text": "of free time before and",
        "freeform_booking_duration_flexible_option_buffer_time_text_post_text": "after the booking time to book.",
        "freeform_availability_start_time_pretext": "People can book this resource from",
        "freeform_availability_start_time_post_text": "and can schedule",
        "freeform_availability_anytime_option": "indefinitely into the future.",
        "freeform_availability_specific_time_anytime": "anytime",
        "freeform_availability_specific_time_option_pretext": "until",
        "freeform_availability_specific_time_option_placeholder_text": "a specified time",
        "freeform_availability_rolling_time_option_post_text": "into the future.",
        "freeform_quantity_available_pre_text": "There are",
        "freeform_quantity_available_post_text": "units of resources available at any given time.",
        "freeform_base_price_pre_text": "Each unit costs",
        "freeform_base_price_pricing_unit_selector": "per",
        "freeform_past_events_option_description": "This resource:",
        "freeform_past_events_option_process_past_event_option": "Processes past events.",
        "freeform_past_events_option_do_not_process_past_event_option": "Does not process past events.",
        "freeform_operating_hours_has_operating_hours_selector_description": "This resource operates:",
        "freeform_operating_hours_no_operating_hours_option": "all day and night.",
        "freeform_operating_hours_has_operating_hours_option": "with specific operating hours.",
        "freeform_operating_hours_daily_variance_selector_description": "Operating hours:",
        "freeform_operating_hours_daily_variance_no_variance_option": "are same every day.",
        "freeform_operating_hours_daily_variance_has_daily_variance_option": "varies day by day.",
    }
};

var clientKoKr = {
    locale: "ko-KR",
    messages: {
        "select_time_slot": "시간대를 선택하세요",
        "select_end_time": "종료시간을 선택하세요",
        "time_zone": "시간대",
        "select_time_back": "돌아가기",
        "select_no_availability": "요청하신 시간대에는 이용 가능한 시간대가 없습니다.",
        "booking_success_modal_title": "예약이 완료되었습니다",
        "booking_pending_modal_title": "예약이 대기중입니다",
        "booking_success_modal_message": "다음 자원이 예약되었습니다: ",
        "reservation_id_label": "예약번호",
        "cost_total": "합계",
        "booking_success_modal_email_sent": "귀하의 이메일로 확인 안내가 전송되었습니다.",
        "close_modal": "닫기",
        "booking_error_generic": "예약을 처리하는 중에 문제가 발생했습니다. 나중에 다시 시도하세요.",
        "booking_modal_payment_header": "결제 정보",
        "booking_modal_details_header": "예약 정보",
        "booking_modal_booker_information": "예약자 정보",
        "booking_modal_name_field": "이름",
        "booking_modal_name_field_required": "이름을 입력해주세요.",
        "booking_modal_email_field": "이메일",
        "booking_modal_email_field_required": "유효한 이메일 주소를 입력하세요.",
        "booking_modal_notes_field": "추가 정보",
        "booking_modal_submit_button_label": "예약하기",
        "free": "무료",
        "select_a_resource_to_book": "Select a resource to book",
        "no_resources_available": "No resources available",
        "redo_search_in_map": "다시검색",
        "create_button_label": "작성",
        "update_button_label": "수정",
        "delete_button_label": "삭제",
        "delete_confirmation_message": "이 자원을 영구적으로 제거하시겠습니까?",
        "yes_button_label": "네",
        "no_button_label": "아니요",
        "resource_name_label": "자원 이름",
        "resource_name_tip": "사용자들이 자원을 구분 할 때에 사용될 이름을 지정해 주세요. 이름은 중복이 가능합니다.",
        "resource_name_description": "자원의 이름을 입력하세요",
        "resource_name_placeholder": "새로운 자원",
        "resource_description_label": "Resource Description",
        "resource_description_tip": "This description is used to help your users understand the details of the resource they are booking",
        "resource_description_description": "Description of the resource",
        "resource_description_placeholder": "Describe your resource",
        "static_address_label": "Static Address",
        "static_address_tip": "Enter address where the resource is located in",
        "static_address_description": "Enter location of the resource",
        "calendar_data_source_label": "Calendar Data Source",
        "calendar_data_source_tip": "You must log into AirJam using a related Google account and grant AirJam permission to view your calendars to see the list of your calendars from Google",
        "calendar_data_source_description": "Select a calendar from the list on right to sync with an external calendar data source",
        "booking_durations_label": "Booking Duration",
        "booking_durations_tip": "Tell us how long bookings should be for this resource",
        "booking_durations_description": "Tell us how long bookings should be for this resource",
        "availability_label": "Availability",
        "availability_tip": "You can optionally specify the time frame to allow your users to book this resource",
        "availability_description": "You can specify when your resource is available to book",
        "quantity_available_label": "Quantity Available",
        "quantity_available_tip": "Slots can be number of seats available for the same time period or number of units of items to book, etc",
        "quantity_available_description": "Specify how many slots are available for booking for each time frame",
        "base_price_label": "Base Price",
        "base_price_tip": "This is a default price per booking and can be overridden from the admin interface",
        "base_price_description": "Specify how much each unit of resource costs to book, type 0 for free to book resources",
        "dynamic_pricing_label": "Dynamic Pricing",
        "dynamic_pricing_tip": "Select if you would like AI to predict and adjust pricing for your events based on demand",
        "dynamic_pricing_description": "Specify if you would like to use AI-based dynamic pricing",
        "moderation_label": "Moderation",
        "moderation_tip": "For event moderation, please use the @airjam/calendar-admin library to expose moderation feature to the resource owners",
        "moderation_description": "Specify if you would like the owner of the resources to moderate booking requests",
        "book_on_label": "Book On",
        "book_on_tip": "Your resource can book events on either existing events, or on free time slots between existing events",
        "book_on_description": "Choose whether your users would book on free times or on existing events",
        "past_events_label": "Past Events",
        "past_events_tip": "By default all resources only work on present and future events. Your past events processed previously, however, will still be shown for operational purposes",
        "past_events_description": "Choose whether this resource should sync, process, and book on past events",
        "operating_hours_label": "Operating Hours",
        "operating_hours_tip": "Operating hours restrict the times this resource is available by the time of the day by day of the week. Think of this as store hours",
        "operating_hours_description": "You can specify operating hours for this resource by day of the week",
        "calendar_data_source_none": "None",
        "calendar_data_source_google_calendar": "Google Calendar",
        "calendar_data_source_cal_dav": "CalDAV",
        "calendar_data_source_outlook": "Outlook",
        "moderation_option_do_moderate": "Moderate",
        "moderation_option_do_not_moderate": "Do not moderate",
        "operating_hours_short_sunday": "일",
        "operating_hours_short_monday": "월",
        "operating_hours_short_tuesday": "화",
        "operating_hours_short_wednesday": "수",
        "operating_hours_short_thursday": "목",
        "operating_hours_short_friday": "금",
        "operating_hours_short_saturday": "토",
        "seconds": "초",
        "minutes": "분",
        "hours": "시간",
        "days": "일",
        "weeks": "주",
        "months": "달",
        "years": "년",
        "base_pricing_fixed_option": "event",
        "base_pricing_increment_option": "increment",
        "book_on_free_slots_option": "Book on free slots between events",
        "book_on_existing_events_option": "Book on existing events",
        "book_exclusively_on_existing_events_option": "Book exclusively on existing events",
        "freeform_operating_hours_hour_duration_phrase": "to",
        "freeform_booking_duration_sentence_start": "Duration for each booking is",
        "freeform_booking_duration_fixed_option_start": "fixed,",
        "freeform_booking_duration_fixed_option_postfix": "long.",
        "freeform_booking_duration_flexible_option_start": "flexible. Each booking must be at least",
        "freeform_booking_duration_flexible_option_duration_phrase": "long and at most",
        "freeform_booking_duration_flexible_option_increment_pretext": "long, with time increments of",
        "freeform_booking_duration_flexible_option_buffer_time_text_pretext": "There must be at least",
        "freeform_booking_duration_flexible_option_buffer_time_text_between_text": "of free time before and",
        "freeform_booking_duration_flexible_option_buffer_time_text_post_text": "after the booking time to book.",
        "freeform_availability_start_time_pretext": "People can book this resource from",
        "freeform_availability_start_time_post_text": "and can schedule",
        "freeform_availability_anytime_option": "indefinitely into the future.",
        "freeform_availability_specific_time_anytime": "anytime",
        "freeform_availability_specific_time_option_pretext": "until",
        "freeform_availability_specific_time_option_placeholder_text": "a specified time",
        "freeform_availability_rolling_time_option_post_text": "into the future.",
        "freeform_quantity_available_pre_text": "There are",
        "freeform_quantity_available_post_text": "units of resources available at any given time.",
        "freeform_base_price_pre_text": "Each unit costs",
        "freeform_base_price_pricing_unit_selector": "per",
        "freeform_past_events_option_description": "This resource:",
        "freeform_past_events_option_process_past_event_option": "Processes past events.",
        "freeform_past_events_option_do_not_process_past_event_option": "Does not process past events.",
        "freeform_operating_hours_has_operating_hours_selector_description": "This resource operates:",
        "freeform_operating_hours_no_operating_hours_option": "all day and night.",
        "freeform_operating_hours_has_operating_hours_option": "with specific operating hours.",
        "freeform_operating_hours_daily_variance_selector_description": "Operating hours:",
        "freeform_operating_hours_daily_variance_no_variance_option": "are same every day.",
        "freeform_operating_hours_daily_variance_has_daily_variance_option": "varies day by day.",
    }
};

var serverEnUs = {
    locale: "en-US",
    messages: {
        "foo": "{appName} confirmation code: {code}",
        "bar": "hello world",
    }
};

var serverKoKr = {
    locale: "ko-KR",
    messages: {
        "foo": "{appName} 코드는 다음과 같습니다: {code}",
        "bar": "안녕 친구들",
    }
};

var CALENDAR_DEFAULT_TRANSLATIONS = {
    descriptions: {
        // client
        "select_time_slot": {
            description: "Header text for single day availabilities for a resource",
            example: "Select a time slot",
        },
        "select_end_time": {
            description: "Header text for single day availabilities for a resource, label for choosing the end time slot",
            example: "Select end time",
        },
        "select_time_back": {
            description: "Label for the back button for single day availabilities end time selector",
            example: "Go back",
        },
        "select_no_availability": {
            description: "Text to show when there is no available time slots on time selector interface",
            example: "The requested time frame has no available slots."
        },
        "time_zone": {
            description: "Text helper for choosing time zones",
            example: "Time zone",
        },
        "booking_success_modal_title": {
            description: "Title for the popup window that's shown when booking has been successfully created",
            example: "Booking confirmed",
        },
        "booking_pending_modal_title": {
            description: "Title for the popup window that's shown when booking has been successfully created, but the reservation is in pending state",
            example: "Reservation is pending",
        },
        "booking_success_modal_message": {
            description: "Main message for the popup window that's shown when booking has been successfully created",
            example: "You've booked ",
        },
        "reservation_id_label": {
            description: "Label to display reservation IDs",
            example: "Reservation ID",
        },
        "cost_total": {
            description: "Cost total",
            example: "Total",
        },
        "booking_success_modal_email_sent": {
            description: "Message to let users know a confirmation email has been sent",
            example: "The confirmation notice has been sent to your email.",
        },
        "close_modal": {
            description: "Close button text",
            example: "Close",
        },
        "booking_error_generic": {
            description: "Generic error messages when there was an error booking reservations",
            example: "There was an issue processing your booking. Please try again later.",
        },
        "booking_modal_payment_header": {
            description: "Header for payment information section in book reservation modal",
            example: "Payment Information",
        },
        "booking_modal_details_header": {
            description: "Header for reservation details section in book reservation modal",
            example: "Reservation",
        },
        "booking_modal_booker_information": {
            description: "Header for reservee information section in book reservation modal",
            example: "Your Information",
        },
        "booking_modal_name_field": {
            description: "Name field",
            example: "Name",
        },
        "booking_modal_name_field_required": {
            description: "Message to show when name field is empty and is required",
            example: "Please enter a name.",
        },
        "booking_modal_email_field": {
            description: "Email field",
            example: "Email",
        },
        "booking_modal_email_field_required": {
            description: "Message to show when email field is empty and is required",
            example: "Please enter a valid email address.",
        },
        "booking_modal_notes_field": {
            description: "Notes (additional info) field",
            example: "Notes",
        },
        "booking_modal_submit_button_label": {
            description: "Submit button for book reservation modal",
            example: "Book",
        },
        "select_a_resource_to_book": {
            description: "Text for selecting a resource to book",
            example: "Select a resource to book",
        },
        "no_resources_available": {
            description: "Text for showing that there are no resources available",
            example: "No resources available",
        },
        "free": {
            description: "text for showing that the item is free of cost",
            example: "FREE",
        },
        "redo_search_in_map": {
            description: "Redo search button on map interfaces",
            example: "Redo search in map",
        },
        "create_button_label": {
            description: "Label for the [Create Resource] action button",
            example: "Create",
        },
        "update_button_label": {
            description: "Label for the [Update Resource] action button",
            example: "Update",
        },
        "delete_button_label": {
            description: "Label for the [Delete Resource] action button",
            example: "Delete",
        },
        "delete_confirmation_message": {
            description: "Label for the [Resource Name] field",
            example: "Are you sure you want to permanently remove this space?",
        },
        "yes_button_label": {
            description: "Generic label for [yes] action",
            example: "Yes",
        },
        "no_button_label": {
            description: "Generic label for [no] action",
            example: "No",
        },
        "resource_name_label": {
            description: "Label for the [Resource Name] field",
            example: "Resource Name",
        },
        "resource_name_tip": {
            description: "Helper tip text for [Resource Name] field",
            example: "This is a name that your users will use to identify the resource. It can be things like name of the service agent, service type, event, and so on",
        },
        "resource_name_description": {
            description: "Descriptions for [Resource Name] field",
            example: "Enter the name of the resource",
        },
        "resource_name_placeholder": {
            description: "Default helper text for [Resource Name] field",
            example: "New Resource",
        },
        "resource_description_label": {
            description: "Label for the [Resource Description] field",
            example: "Resource Description",
        },
        "resource_description_tip": {
            description: "Helper tip text for [Resource Description] field",
            example: "This description is used to help your users understand the details of the resource they are booking",
        },
        "resource_description_description": {
            description: "Descriptions for [Resource Description] field",
            example: "Description of the resource",
        },
        "resource_description_placeholder": {
            description: "Default helper text for [Resource Description] field",
            example: "Describe your resource",
        },
        "static_address_label": {
            description: "Label for the [Static Address] field",
            example: "Static Address",
        },
        "static_address_tip": {
            description: "Helper tip text for [Static Address] field",
            example: "Enter address where the resource is located in",
        },
        "static_address_description": {
            description: "Descriptions for [Static Address] field",
            example: "Enter location of the resource",
        },
        "calendar_data_source_label": {
            description: "Label for the [Calendar Data Source] field",
            example: "Calendar Data Source",
        },
        "calendar_data_source_tip": {
            description: "Helper tip text for [Calendar Data Source] field",
            example: "You must log into AirJam using a related Google account and grant AirJam permission to view your calendars to see the list of your calendars from Google",
        },
        "calendar_data_source_description": {
            description: "Descriptions for [Calendar Data Source] field",
            example: "Select a calendar from the list on right to sync with an external calendar data source",
        },
        "booking_durations_label": {
            description: "Label for the [Booking Duration] field",
            example: "Booking Duration",
        },
        "booking_durations_tip": {
            description: "Helper tip text for [Booking Duration] field",
            example: "Tell us how long bookings should be for this resource",
        },
        "booking_durations_description": {
            description: "Descriptions for [Booking Duration] field",
            example: "Tell us how long bookings should be for this resource",
        },
        "availability_label": {
            description: "Label for the [Availability] field",
            example: "Availability",
        },
        "availability_tip": {
            description: "Helper tip text for [Availability] field",
            example: "You can optionally specify the time frame to allow your users to book this resource",
        },
        "availability_description": {
            description: "Descriptions for [Availability] field",
            example: "You can specify when your resource is available to book",
        },
        "quantity_available_label": {
            description: "Label for the [Quantity Available] field",
            example: "Quantity Available",
        },
        "quantity_available_tip": {
            description: "Helper tip text for [Quantity Available] field",
            example: "Slots can be number of seats available for the same time period or number of units of items to book, etc",
        },
        "quantity_available_description": {
            description: "Descriptions for [Quantity Available] field",
            example: "Specify how many slots are available for booking for each time frame",
        },
        "base_price_label": {
            description: "Label for the [Base Price] field",
            example: "Base Price",
        },
        "base_price_tip": {
            description: "Helper tip text for [Base Price] field",
            example: "This is a default price per booking and can be overridden from the admin interface",
        },
        "base_price_description": {
            description: "Descriptions for [Base Price] field",
            example: "Specify how much each unit of resource costs to book, type 0 for free to book resources",
        },
        "dynamic_pricing_label": {
            description: "Label for the [Dynamic Pricing] field",
            example: "Dynamic Pricing",
        },
        "dynamic_pricing_tip": {
            description: "Helper tip text for [Dynamic Pricing] field",
            example: "Select if you would like AI to predict and adjust pricing for your events based on demand",
        },
        "dynamic_pricing_description": {
            description: "Descriptions for [Dynamic Pricing] field",
            example: "Specify if you would like to use AI-based dynamic pricing",
        },
        "moderation_label": {
            description: "Label for the [Moderation] field",
            example: "Moderation",
        },
        "moderation_tip": {
            description: "Helper tip text for [Moderation] field",
            example: "For event moderation, please use the @airjam/calendar-admin library to expose moderation feature to the resource owners",
        },
        "moderation_description": {
            description: "Descriptions for [Moderation] field",
            example: "Specify if you would like the owner of the resources to moderate booking requests",
        },
        "book_on_label": {
            description: "Label for the [Book On] field",
            example: "Book On",
        },
        "book_on_tip": {
            description: "Helper tip text for [Book On] field",
            example: "Your resource can book events on either existing events, or on free time slots between existing events",
        },
        "book_on_description": {
            description: "Descriptions for [Book On] field",
            example: "Choose whether your users would book on free times or on existing events",
        },
        "past_events_label": {
            description: "Label for the [Past Events] field",
            example: "Past Events",
        },
        "past_events_tip": {
            description: "Helper tip text for [Past Events] field",
            example: "By default all resources only work on present and future events. Your past events processed previously, however, will still be shown for operational purposes",
        },
        "past_events_description": {
            description: "Descriptions for [Past Events] field",
            example: "Choose whether this resource should sync, process, and book on past events",
        },
        "operating_hours_label": {
            description: "Label for the [Operating Hours] field",
            example: "Operating Hours",
        },
        "operating_hours_tip": {
            description: "Helper tip text for [Operating Hours] field",
            example: "Operating hours restrict the times this resource is available by the time of the day by day of the week. Think of this as store hours",
        },
        "operating_hours_description": {
            description: "Descriptions for [Operating Hours] field",
            example: "You can specify operating hours for this resource by day of the week",
        },
        // Dropdown options
        "calendar_data_source_none": {
            description: "[None] option in Calendar data source selector",
            example: "e.g. None, Google, Outlook, etc",
        },
        "calendar_data_source_google_calendar": {
            description: "[Google Calendar] option in Calendar data source selector",
            example: "e.g. None, Google, Outlook, etc",
        },
        "calendar_data_source_cal_dav": {
            description: "[CalDAV] option in Calendar data source selector",
            example: "e.g. None, Google, Outlook, etc",
        },
        "calendar_data_source_outlook": {
            description: "[Outlook] option in Calendar data source selector",
            example: "e.g. None, Google, Outlook, etc",
        },
        "moderation_option_do_moderate": {
            description: "[Moderate] option for dropdown for selection moderation options",
            example: "This is the text for the option to let users choose to moderate their resources",
        },
        "moderation_option_do_not_moderate": {
            description: "[Do not moderate] option for dropdown for selection moderation options",
            example: "This is the text for the option to let users choose not to moderate their resources",
        },
        "operating_hours_short_sunday": {
            description: "Sunday",
            example: "Sun",
        },
        "operating_hours_short_monday": {
            description: "Monday",
            example: "Mon",
        },
        "operating_hours_short_tuesday": {
            description: "Tuesday",
            example: "Tue",
        },
        "operating_hours_short_wednesday": {
            description: "Wednesday",
            example: "Wed",
        },
        "operating_hours_short_thursday": {
            description: "Thursday",
            example: "Thu",
        },
        "operating_hours_short_friday": {
            description: "Friday",
            example: "Fri",
        },
        "operating_hours_short_saturday": {
            description: "Saturday",
            example: "Sat",
        },
        "seconds": {
            description: "Plural word [seconds]",
            example: "seconds",
        },
        "minutes": {
            description: "Plural word [minutes]",
            example: "minutes",
        },
        "hours": {
            description: "Plural word [hours]",
            example: "hours",
        },
        "days": {
            description: "Plural word [days]",
            example: "days",
        },
        "weeks": {
            description: "Plural word [weeks]",
            example: "weeks",
        },
        "months": {
            description: "Plural word [months]",
            example: "months",
        },
        "years": {
            description: "Plural word [years]",
            example: "years",
        },
        "base_pricing_fixed_option": {
            description: "[event] option in base pricing dropdown",
            example: "event",
        },
        "base_pricing_increment_option": {
            description: "[increment] option in base pricing dropdown",
            example: "increment",
        },
        "book_on_free_slots_option": {
            description: "Option in [Book On] option to let users choose to book on free slots between events in calendar",
            example: "Book on free slots between events",
        },
        "book_on_existing_events_option": {
            description: "Option in [Book On] option to let users choose to book only on existing events in calendar",
            example: "Book on existing events",
        },
        "book_exclusively_on_existing_events_option": {
            description: "Option in [Book On] option to let users choose to book only on existing events, only one booking per existing event instance",
            example: "Book exclusively on existing events",
        },
        // Freeform sentence translations
        "freeform_operating_hours_hour_duration_phrase": {
            description: "The phrase that goes between start time and end time",
            example: "to",
        },
        "freeform_booking_duration_sentence_start": {
            description: "The preamble phrase for the radio options for choosing booking duration types",
            example: "Duration for each booking is",
        },
        "freeform_booking_duration_fixed_option_start": {
            description: "Beginning text for [fixed] option for the booking duration radio options",
            example: "fixed,",
        },
        "freeform_booking_duration_fixed_option_postfix": {
            description: "Ending text for [fixed] option for the booking duration radio options",
            example: "long.",
        },
        "freeform_booking_duration_flexible_option_start": {
            description: "Beginning text for [flexible] option for the booking duration radio options",
            example: "flexible. Each booking must be at least",
        },
        "freeform_booking_duration_flexible_option_duration_phrase": {
            description: "Phrase that goes in between two durations for [flexible] option for the booking duration radio options",
            example: "long and at most",
        },
        "freeform_booking_duration_flexible_option_increment_pretext": {
            description: "Phrase that goes before the increment option and after the start and end durations for the [flexible] option for the booking duration radio options",
            example: "long, with time increments of",
        },
        "freeform_booking_duration_flexible_option_buffer_time_text_pretext": {
            description: "Phrase that goes before durations for the buffer time for the [flexible] option for the booking duration radio options",
            example: "There must be at least",
        },
        "freeform_booking_duration_flexible_option_buffer_time_text_between_text": {
            description: "Phrase that goes between two durations for the buffer time for the [flexible] option for the booking duration radio options",
            example: "of free time before and",
        },
        "freeform_booking_duration_flexible_option_buffer_time_text_post_text": {
            description: "Phrase that goes after the durations for the buffer time for the [flexible] option for the booking duration radio options",
            example: "after the booking time to book.",
        },
        "freeform_availability_start_time_pretext": {
            description: "Phrase that goes before the start time date picker",
            example: "People can book this resource from",
        },
        "freeform_availability_start_time_post_text": {
            description: "Phrase that goes after the start time date picker",
            example: "and can schedule",
        },
        "freeform_availability_anytime_option": {
            description: "Phrase for not limiting availability start date",
            example: "indefinitely into the future.",
        },
        "freeform_availability_specific_time_anytime": {
            description: "anytime",
            example: "indefinitely into the future.",
        },
        "freeform_availability_specific_time_option_pretext": {
            description: "Text that goes before the date selector for choosing specific time for availability end date",
            example: "until",
        },
        "freeform_availability_specific_time_option_placeholder_text": {
            description: "Placeholder text for date selector for choosing specific time for availability end date",
            example: "a specified time",
        },
        "freeform_availability_rolling_time_option_post_text": {
            description: "Text that goes after the duration for choosing rolling time for availability end date",
            example: "into the future.",
        },
        "freeform_quantity_available_pre_text": {
            description: "Text that goes before the quantity available input",
            example: "There are",
        },
        "freeform_quantity_available_post_text": {
            description: "Text that goes after the quantity available input",
            example: "units of resources available at any given time.",
        },
        "freeform_base_price_pre_text": {
            description: "Text that goes before the base price selector",
            example: "Each unit costs",
        },
        "freeform_base_price_pricing_unit_selector": {
            description: "Text that goes between the base price selector and pricing unit selector",
            example: "per",
        },
        "freeform_past_events_option_description": {
            description: "Description text for the radio option for processing past events",
            example: "This resource:",
        },
        "freeform_past_events_option_process_past_event_option": {
            description: "Text for the radio option for processing past events",
            example: "Processes past events.",
        },
        "freeform_past_events_option_do_not_process_past_event_option": {
            description: "Text for the radio option for not processing past events",
            example: "Does not process past events.",
        },
        "freeform_operating_hours_has_operating_hours_selector_description": {
            description: "Description text for the options selector for choosing whether this resource has operating hours or not.",
            example: "This resource operates:",
        },
        "freeform_operating_hours_no_operating_hours_option": {
            description: "Text for the option for disabling operating hour restrictions",
            example: "all day and night.",
        },
        "freeform_operating_hours_has_operating_hours_option": {
            description: "Text for the option for enabling operating hour restrictions",
            example: "with specific operating hours.",
        },
        "freeform_operating_hours_daily_variance_selector_description": {
            description: "Description text for choosing whether the operating hours differ by day of the week.",
            example: "Operating hours:",
        },
        "freeform_operating_hours_daily_variance_no_variance_option": {
            description: "Text for the option for specifying that operating hours are the same every day",
            example: "are same every day.",
        },
        "freeform_operating_hours_daily_variance_has_daily_variance_option": {
            description: "Text for the option for specifying that operating hours are not the same every day",
            example: "varies day by day.",
        },
        // server
        "foo": {
            description: "Very nice text",
            example: "hello my name is whatever",
        },
        "bar": {
            description: "Very nice text2",
            example: "hello my name is whatever2",
        },
    },
    defaultLocale: "en-US",
    supportedLocales: ["en-US", "ko-KR"],
    clientTranslations: {
        "en-US": clientEnUs,
        "ko-KR": clientKoKr
    },
    serverTranslations: {
        "en-US": serverEnUs,
        "ko-KR": serverKoKr
    }
};

var CalendarEventReservableUntilType;
(function (CalendarEventReservableUntilType) {
    CalendarEventReservableUntilType["Indefinite"] = "indefinite";
    CalendarEventReservableUntilType["FixedTime"] = "fixed_time";
    CalendarEventReservableUntilType["Duration"] = "duration";
})(CalendarEventReservableUntilType || (CalendarEventReservableUntilType = {}));

var CalendarReservationPriceUnit;
(function (CalendarReservationPriceUnit) {
    CalendarReservationPriceUnit["WholeEvent"] = "whole_event";
    CalendarReservationPriceUnit["PerIncrement"] = "increment";
})(CalendarReservationPriceUnit || (CalendarReservationPriceUnit = {}));

var CalendarResourceOperatingHoursGrouping;
(function (CalendarResourceOperatingHoursGrouping) {
    CalendarResourceOperatingHoursGrouping["SameHoursDaily"] = "same_hours_daily";
    CalendarResourceOperatingHoursGrouping["VariesDayByDay"] = "varies_day_by_day";
})(CalendarResourceOperatingHoursGrouping || (CalendarResourceOperatingHoursGrouping = {}));

var CalendarResourceOperatingHoursType;
(function (CalendarResourceOperatingHoursType) {
    CalendarResourceOperatingHoursType["NoOperatingHours"] = "no_operating_hours";
    CalendarResourceOperatingHoursType["HasOperatingHours"] = "has_operating_hours";
})(CalendarResourceOperatingHoursType || (CalendarResourceOperatingHoursType = {}));

var CalendarViewType;
(function (CalendarViewType) {
    CalendarViewType["CalendarView"] = "CALENDAR_VIEW";
    CalendarViewType["CalendarBook"] = "CALENDAR_BOOK";
    CalendarViewType["CalendarBookSelectResource"] = "CALENDAR_BOOK_SELECT_RESOURCE";
    CalendarViewType["CalendarExclusiveBook"] = "CALENDAR_EXCLUSIVE_BOOK";
    CalendarViewType["DayView"] = "DAY_VIEW";
    CalendarViewType["DayViewByLocation"] = "DAY_VIEW_BY_LOCATION";
    CalendarViewType["DayList"] = "DAY_LIST";
    CalendarViewType["List"] = "LIST";
    CalendarViewType["MyEventsList"] = "MY_EVENT_LIST";
    CalendarViewType["MyResourcesList"] = "MY_RESOURCES_LIST";
    CalendarViewType["MyReservationsList"] = "MY_RESERVATIONS_LIST";
    CalendarViewType["MyReservationRequestsList"] = "MY_RESERVATION_REQUESTS_LIST";
    CalendarViewType["ResourceDetail"] = "RESOURCE_DETAIL";
    CalendarViewType["MapResourceList"] = "MAP_RESOURCE_LIST";
})(CalendarViewType || (CalendarViewType = {}));

var EventReservationStatus;
(function (EventReservationStatus) {
    EventReservationStatus["Reserved"] = "reserved";
    EventReservationStatus["Canceled"] = "canceled";
    EventReservationStatus["Requested"] = "reservation_requested";
})(EventReservationStatus || (EventReservationStatus = {}));

var GetEventsDuration;
(function (GetEventsDuration) {
    GetEventsDuration["ExactDay"] = "EXACT_DAY";
    GetEventsDuration["WholeMonth"] = "WHOLE_MONTH";
})(GetEventsDuration || (GetEventsDuration = {}));

var toPublicResource = function (resource) {
    var stripedIdentity = resource.ownerIdentity ? {
        name: resource.ownerIdentity.name,
        givenName: resource.ownerIdentity.givenName,
        familyName: resource.ownerIdentity.familyName,
        locale: resource.ownerIdentity.locale,
        picture: resource.ownerIdentity.picture,
    } : null;
    return {
        _id: resource._id,
        createdAt: resource.createdAt,
        updatedAt: resource.updatedAt,
        calendarComponentId: resource.calendarComponentId,
        shortId: resource.shortId,
        name: resource.name,
        media: resource.media,
        description: resource.description,
        timezone: resource.timezone,
        quantityAvailable: resource.quantityAvailable,
        moderation: resource.moderation,
        ownerId: resource.ownerId,
        ownerName: resource.ownerName,
        ownerEmail: resource.ownerEmail,
        ownerIdentity: stripedIdentity,
        locale: resource.locale,
        currency: resource.currency,
        customFields: resource.customFields,
        staticPrice: resource.staticPrice,
        staticPriceUnit: resource.staticPriceUnit,
        staticPriceCurrency: resource.staticPriceCurrency,
        approximateLocation: reducePointPrecision(resource.staticLocation),
    };
};
var reducePointPrecision = function (point, precision) {
    if (precision === void 0) { precision = 5; }
    if (!point || !point.coordinates || !point.coordinates.length)
        return undefined;
    var coords = point.coordinates.map(function (v) { return parseFloat(v.toFixed(precision)); });
    return {
        type: point.type,
        coordinates: coords,
    };
};

var ReservationModeration;
(function (ReservationModeration) {
    ReservationModeration["OPEN"] = "open";
    ReservationModeration["SUPER_ADMIN_MODERATED"] = "moderated";
    ReservationModeration["RESOURCE_OWNER_MODERATED"] = "owner_moderated";
})(ReservationModeration || (ReservationModeration = {}));

var PaymentProcessor;
(function (PaymentProcessor) {
    PaymentProcessor["Stripe"] = "stripe";
    PaymentProcessor["Paypal"] = "paypal";
    PaymentProcessor["Toss"] = "toss";
    PaymentProcessor["None"] = "none";
})(PaymentProcessor || (PaymentProcessor = {}));

var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["NotPaid"] = "not_paid";
    PaymentStatus["Paid"] = "paid";
    PaymentStatus["Refunded"] = "refunded";
    PaymentStatus["Declined"] = "declined";
    PaymentStatus["Held"] = "held";
    PaymentStatus["PartiallyRefunded"] = "partially_refunded";
})(PaymentStatus || (PaymentStatus = {}));

var QueryOperator;
(function (QueryOperator) {
    QueryOperator["AND"] = "and";
    QueryOperator["OR"] = "or";
    QueryOperator["NOT"] = "not";
    QueryOperator["LESS_THAN"] = "lt";
    QueryOperator["LESS_THAN_EQ"] = "lte";
    QueryOperator["GREATER_THAN"] = "gt";
    QueryOperator["GREATER_THAN_EQ"] = "gte";
    QueryOperator["IN"] = "in";
    QueryOperator["NOT_IN"] = "nin";
})(QueryOperator || (QueryOperator = {}));

var QueryType;
(function (QueryType) {
    QueryType["EXACT"] = "exact";
    QueryType["NOT_EQUAL"] = "ne";
    QueryType["KEYWORD"] = "keyword";
    QueryType["GREATER_THAN"] = "gt";
    QueryType["GREATER_THAN_EQ"] = "gte";
    QueryType["LESS_THAN"] = "lt";
    QueryType["LESS_THAN_EQ"] = "lte";
    QueryType["IN"] = "in";
    QueryType["NOT_IN"] = "nin";
    QueryType["ALL_IN"] = "ain";
})(QueryType || (QueryType = {}));

var DEFAULT_HOST = 'https://airjam.co';

var CssTheme;
(function (CssTheme) {
    CssTheme["None"] = "none";
    CssTheme["Bootstrap"] = "bootstrap";
    CssTheme["Tailwind"] = "tailwind";
})(CssTheme || (CssTheme = {}));

var DataJurisdiction;
(function (DataJurisdiction) {
    DataJurisdiction["Unspecified"] = "unspecified";
    DataJurisdiction["EU"] = "eu";
    DataJurisdiction["PRC"] = "prc";
})(DataJurisdiction || (DataJurisdiction = {}));

var PaginationStyle;
(function (PaginationStyle) {
    PaginationStyle["Paged"] = "pagination_paged";
    PaginationStyle["InfiniteScroll"] = "pagination_infinite";
    PaginationStyle["NoPagination"] = "pagination_none";
})(PaginationStyle || (PaginationStyle = {}));

var SortBy;
(function (SortBy) {
    SortBy["RECENT"] = "recent";
    SortBy["OLDEST"] = "oldest";
})(SortBy || (SortBy = {}));

var TimeUnit;
(function (TimeUnit) {
    TimeUnit["SECONDLY"] = "s";
    TimeUnit["MINUTELY"] = "m";
    TimeUnit["HOURLY"] = "h";
    TimeUnit["DAILY"] = "d";
    TimeUnit["WEEKLY"] = "w";
    TimeUnit["MONTHLY"] = "m";
    TimeUnit["YEARLY"] = "y";
})(TimeUnit || (TimeUnit = {}));

function getClientMessage(translation, locale, message) {
    if (!translation.clientTranslations)
        return undefined;
    var lowerCaseLocale = locale.toLowerCase();
    var caseInsensitiveLocaleMap = {};
    Object.keys(translation.clientTranslations).forEach(function (l) {
        caseInsensitiveLocaleMap[l.toLowerCase()] = l;
    });
    if (!caseInsensitiveLocaleMap[lowerCaseLocale] || !translation.clientTranslations[caseInsensitiveLocaleMap[lowerCaseLocale]]) {
        if (!translation.clientTranslations[translation.defaultLocale])
            return undefined;
        return getTranslation(translation.clientTranslations[translation.defaultLocale], message);
    }
    return getTranslation(translation.clientTranslations[caseInsensitiveLocaleMap[lowerCaseLocale]], message);
}
function getTranslation(translation, message) {
    if (!translation || !translation.messages || !translation.messages[message])
        return undefined;
    return translation.messages[message];
}
function mergeTranslation(base, override) {
    var returning = JSON.parse(JSON.stringify(base));
    if (override.locale)
        returning.locale = override.locale;
    if (override.messages) {
        var overrideKeys = Object.keys(override.messages);
        if (!returning.messages)
            returning.messages = {};
        overrideKeys.forEach(function (k) {
            returning.messages[k] = override.messages[k];
        });
    }
    return returning;
}
function negotiateLocale(translation, locale) {
    // This function must return locale in its original casing
    var preferredLocale = translation.defaultLocale;
    if (!locale)
        return preferredLocale;
    var formattedLocale = locale.toLowerCase();
    var locales = {};
    var languages = {};
    translation.supportedLocales.forEach(function (loc) {
        var l = loc.toLowerCase();
        var lang = stripLanguageOnly(l);
        locales[l] = loc;
        languages[lang] = loc;
    });
    if (locales[formattedLocale])
        return locales[formattedLocale];
    var lang = stripLanguageOnly(formattedLocale);
    if (languages[lang])
        return languages[lang];
    // TODO -- support traditional vs simplified chinese
    return preferredLocale;
}
function stripLanguageOnly(locale) {
    var underscoreStrip = locale.split("_");
    if (underscoreStrip.length < 1)
        return locale;
    var localeParts = underscoreStrip[0].split("-");
    if (localeParts.length < 1)
        return locale;
    return localeParts[0];
}

function isEmail(email) {
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}
function isUri(uriStr) {
    try {
        return Boolean(new URL(uriStr));
    }
    catch (_a) {
        return false;
    }
}
function isDate(dateStr) {
    return !isNaN(new Date(dateStr).getDate());
}

var RoomJoinRules;
(function (RoomJoinRules) {
    RoomJoinRules["Public"] = "public";
    RoomJoinRules["Knock"] = "knock";
    RoomJoinRules["Invite"] = "invite";
    RoomJoinRules["Private"] = "private";
})(RoomJoinRules || (RoomJoinRules = {}));

function inferDataSourceFieldType(data) {
    // in the order of uniqueness -> Email, Link, DateTime, (Currency, Percent, Number), Text
    if (isEmail(data))
        return DataSourceFieldType.Email;
    if (isUri(data))
        return DataSourceFieldType.Link;
    if (isDate(data))
        return DataSourceFieldType.DateTime;
    // currency and percent are not inferrable
    if (!isNaN(Number(data)))
        return DataSourceFieldType.Number;
    // todo(minjae): Add a address / lat lng detector
    return DataSourceFieldType.Text;
}
function formattedField(data, displayType) {
    switch (displayType) {
        case DataSourceFieldType.Number:
            return Number(data).toString();
        case DataSourceFieldType.Percent:
            return Number(data).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
        case DataSourceFieldType.DateTime:
            var newDate = new Date(data);
            return newDate.toLocaleDateString();
        case DataSourceFieldType.Currency:
            var currencyFractionDigits = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "USD",
            }).resolvedOptions().maximumFractionDigits;
            var currencyString = Number(data).toLocaleString(undefined, {
                maximumFractionDigits: currencyFractionDigits
            });
            return currencyString;
        case DataSourceFieldType.Link:
        case DataSourceFieldType.Email:
        case DataSourceFieldType.Text:
        case DataSourceFieldType.Address:
        case DataSourceFieldType.LatLng:
        default:
            return data;
    }
}

var ViewComponentType;
(function (ViewComponentType) {
    ViewComponentType["TableView"] = "table_view";
})(ViewComponentType || (ViewComponentType = {}));

// legacy libraries made for legacy table view component
var style_cache = static_styles;
var template_cache = static_templates;

export { AppointmentViewType, CALENDAR_BOOK_ENDPOINT, CALENDAR_CONFIG_ENDPOINT, CALENDAR_DEFAULT_TRANSLATIONS, CALENDAR_DETAIL_ENDPOINT, CALENDAR_MY_RESERVATIONS_ENDPOINT, CALENDAR_RESOURCE_MY_RESERVATIONS_ENDPOINT, CALENDAR_RESOURCE_MY_RESERVATION_REQUESTS_ENDPOINT, CALENDAR_RESOURCE_MY_RESOURCES_ENDPOINT, CALENDAR_RESOURCE_MY_RESOURCE_ENDPOINT, CALENDAR_RESOURCE_RESERVATION_ENDPOINT, CALENDAR_RESOURCE_SEARCH_ENDPOINT, CALENDAR_TRANSLATIONS_ENDPOINT, CalendarBookOn, CalendarBookingUnit, CalendarDataProvider, CalendarEventReservableUntilType, CalendarReservationPriceUnit, CalendarResourceOperatingHoursGrouping, CalendarResourceOperatingHoursType, CalendarViewType, CssTheme, DEFAULT_DESCRIPTION_LENGTH_CUTOFF, DEFAULT_HOST, DEFAULT_TIME_FORMAT, DataJurisdiction, DataSourceFieldType, DataSourceType, EventReservationStatus, GetEventsDuration, HOUR_ONLY, PageTypes, PaginationStyle, PaymentProcessor, PaymentStatus, QueryOperator, QueryType, ReservationModeration, RoomJoinRules, SortBy, TableViewViewType, TimeUnit, ViewComponentType, addDays, compareEventsByStartTime, formatReservationTimeFrame, formattedField, getClientMessage, getDateInLocalTime, getEventTime, getTranslation, inferDataSourceFieldType, isDate, isEmail, isUri, mergeTranslation, minutesSinceMidnight, negotiateLocale, reducePointPrecision, static_styles, static_templates, stripLanguageOnly, style_cache, template_cache, toPublicResource };
//# sourceMappingURL=library.es.js.map
