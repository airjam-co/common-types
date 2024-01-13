import { TemplateStyle } from "../view/TemplateStyle";

export const static_styles: {[id: string]: TemplateStyle} = {
    "muted": {
        _id: "",
        shortId: "muted",
        name: "Muted",
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart", "standard_table"], // compatible templates
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
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart"], // compatible templates
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
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart", "standard_table"], // compatible templates
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
        compatibleWith: ["card_list"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Minimalistic look and feel for gallery-typed templates.",
        visibility: "PUBLIC",
        style: ".concise_gallery .container { display: inline-grid; padding: 10px; width: 300px; border: 1px solid #ddd; border-radius: 10px; margin: 5px; } .concise_gallery .container .title { font-size: 1.2 rem; font-weight: 600; }  .concise_gallery .container .image img { width: 100% } .concise_gallery .container .description { display: block } .concise_gallery .pagination a, .concise_gallery .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["concise_gallery"],
        colorTheme: ["#ddd"],
        properties: {
        },
        componentProperties: {
        }
    },
    "fine_dining": {
        _id: "",
        shortId: "fine_dining",
        name: "Fine Dining Menu",
        compatibleWith: ["formal_menu"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Traditional look and feel for menu templates.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Castoro&display=swap'); .fine_dining .container { font-family: 'Castoro', serif; display: block; padding: 10px; text-align: center } .fine_dining .container .name { font-size: 20px; }  .fine_dining .container .price { font-size: 18px; display: block; margin-top: 5px; margin-bottom: 10px } .fine_dining .container .description { display: block } .fine_dining .pagination a, .fine_dining .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["fine_dining"],
        colorTheme: ["#000"],
        properties: {
        },
        componentProperties: {
        }
    },
    "contemporary_fine_dining": {
        _id: "",
        shortId: "contemporary_fine_dining",
        name: "Contemporary Sans",
        compatibleWith: ["formal_menu"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Modern look and feel for fine dining menu templates.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Tenor+Sans&display=swap'); .contemporary_fine_dining .container { display: block; padding: 10px; text-align: center } .contemporary_fine_dining .container .name { font-family: 'Tenor Sans', sans-serif; font-size: 20px; } .contemporary_fine_dining .container .price { font-family: 'Tenor Sans', sans-serif; font-size: 18px; display: block; margin-top: 5px; margin-bottom: 10px } .contemporary_fine_dining .container .description { font-family: 'Playfair Display', serif; font-style: italic; display: block } .contemporary_fine_dining .pagination a, .contemporary_fine_dining .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["contemporary_fine_dining"],
        colorTheme: ["#000"],
        properties: {
        },
        componentProperties: {
        }
    },
    "healthy_five": {
        _id: "",
        shortId: "healthy_five",
        name: "Healthy Five",
        compatibleWith: ["graphic_menu"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Vibrant style for graphic menu templates with emphasis on item image.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .healthy_five .container { display: inline-block; width: 300px; padding: 10px; font-family: 'Open Sans', sans-serif; } .healthy_five .container .image img { display: block; max-width: 100%; height: auto; margin: 10px 0 5px 0; } .healthy_five .container .name { font-size: 20px; } .healthy_five .container .price { font-size: 18px; display: block; } .healthy_five .container .description { display: block } .healthy_five .pagination a, .healthy_five .pagination .currentPage { margin: 2px; padding: 3px; }",
        containerClassNames: ["healthy_five"],
        colorTheme: ["#000"],
        properties: {
        },
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        }
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
        componentProperties: {
        }
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
        componentProperties: {
        }
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
        componentProperties: {
        }
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
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        }
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
        properties: {
        },
        componentProperties: {
        },
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
        properties: {
        },
        componentProperties: {
        },
        jsonContent:[
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
        properties: {
        },
        componentProperties: {
        },
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
}
