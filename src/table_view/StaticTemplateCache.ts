import { CodingLanguages } from "../common/CodingLanguages";
import { DataSourceFieldType } from "../view/DataSourceFieldType";
import { DataSourceType } from "../view/DataSourceType";
import { ComponentTemplate } from "./ComponentTemplate";
import { PageTypes } from "./PageTypes";
import { TableViewViewType } from "./TableViewViewType";

export const static_templates: {[id: string]: ComponentTemplate} = {
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
        properties: {
        },
        pageContent: {"LIST": "<div class='container'><span class='title'>{{title}}</span><span class='image'><img src='{{thumbnail}}'/></span><span class='description'>{{description}}</span><span><a href='{{link}}'>{{linkText}}</a></span></div>"}, // use templating language in the future
        templateFields: {
            title: {
                name: "Title",
                description: "Title of the card item",
                compatibleTypes: [], //empty for all
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
        componentProperties: {
        }
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
        componentProperties: {
        }
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
        properties: {
        },
        pageContent: {"LIST" : "<div class='container'><span class='name'>{{name}}</span><span class='description'>{{description}}</span><span class='price'>{{price}}</span></div>"},
        templateFields: {
            name: {
                name: "Name",
                description: "Item name",
                compatibleTypes: [], //empty for all
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
        componentProperties: {
        }
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
        properties: {
        },
        pageContent: {"LIST" : "<div class='container'><span class='image'><img src='{{image}}'/></span><span class='name'>{{name}}</span><span class='price'>{{price}}</span><span class='description'>{{description}}</span></div>"},
        templateFields: {
            name: {
                name: "Name",
                description: "Item name",
                compatibleTypes: [], //empty for all
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
        componentProperties: {
        }
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
                    {key: "NUMERIC", text: "Numeric", value: "NUMERIC"},
                    {key: "TEXT", text: "Text", value: "TEXT"},
                    {key: "BLE", text: "iBeacon", value: "BLE"},
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
        componentProperties: {
        }
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
                    {key: "NUMERIC", text: "Numeric", value: "NUMERIC"},
                    {key: "TEXT", text: "Text", value: "TEXT"},
                    {key: "BLE", text: "iBeacon", value: "BLE"},
                ]
            },
        },
        pageContent: {
            "DETAIL" : "<div class='container'><span class='image' style='background-image: url(\"{{image}}\");'><span class='audio'><audio controls autoplay><source src='{{audio}}' /></audio></span></span><span class='label'>{{label}}</span><span class='description'>{{description}}</span></div>"
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
        componentProperties: {
        }
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
                    {key: "FIT", text: "Fit", value: "FIT"},
                    {key: "FIT-Y", text: "Fit by height", value: "FIT-Y"},
                    {key: "FIT-X", text: "Fit by weight", value: "FIT-X"},
                    {key: "COVER", text: "Cover", value: "COVER"},
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
        pageContent: {"LANDING" : "<div class='container'><span class='headerImageTop' style='background-image: url(\"{{headerImage}}\");'></span><div class='items'>[[DETAIL]]</div><span class='headerImageBottom' style='background-image: url(\"{{headerImage}}\");'></span></div>",
                      "DETAIL": "<div class='item' style='background-image: url(\"{{featuredImage}}\"); height: calc(100% / {{rowCount}}); width: calc((100% * {{rowCount}})/({{itemCount}}))'><span class='details'><span class='prices'><span class='soldOut{{soldOut}}'>SOLD OUT</span><span class='price1'>{{price1}}</span><span class='price1Name'>{{price1-title}}</span><span class='price2'>{{price2}}</span><span class='price2Name'>{{price2-title}}</span><span class='price3'>{{price3}}</span><span class='price3Name'>{{price3-title}}</span><span class='description'>{{description}}</span></span></span><span class='label'><span class='index'>{{index}}</span><span class='name'>{{name}}</span></span></div>"},
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
        componentProperties: {
        }
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
                    {key: "NONE", text: "No media to display", value: "NONE"},
                    {key: "VIDEO", text: "Video", value: "VIDEO"},
                    {key: "IMAGE", text: "An image", value: "IMAGE"},
                    {key: "IMAGES", text: "Gallery of images", value: "IMAGES"},
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
                    {key: "NONE", text: "Do not display", value: "NONE"},
                    {key: "NEWS", text: "Latest news and quotes", value: "NEWS"},
                    {key: "WEATHER", text: "Local weather information", value: "WEATHER"},
                    {key: "CUSTOM", text: "Custom message", value: "CUSTOM"},
                ]
            },
            refreshInterval: {
                name: "Refresh Interval",
                description: "(Optional) How often to refresh the signage, in seconds. Faster refresh rate incurs higher cost",
                default: 30,
                type: "NUMBER",
            }
        },
        pageContent: {"LANDING" : "<div class='container'><span class='headerImageTop' style='background-image: url(\"{{headerImage}}\");'></span><div class='mainContent tickerType{{tickerType}}'><div class='imageOverlay noImage{{mediaLink}} image{{displayMediaType}}'><img src='{{mediaLink}}'/></div> <div class='videoOverlay noVideo{{mediaLink}} video{{displayMediaType}}'><video autoplay muted loop src='{{mediaLink}}'></video></div><div class='items noVideo{{mediaLink}}'>[[DETAIL]]</div></div><span class='headerImageBottom' style='background-image: url(\"{{headerImage}}\");'></span><div class='tickerContainer tickerTypeHas{{tickerType}}'><span id='tickerClock' class='tickerClock'></span><span class='tickerTypeWEATHER tickerTypeHas{{tickerType}}'><div id='ww_09c207bc8e494' v='1.3' loc='auto' a='{\"t\":\"ticker\",\"lang\":\"en\",\"sl_lpl\":1,\"ids\":[],\"font\":\"Arial\",\"sl_ics\":\"one_a\",\"sl_sot\":\"fahrenheit\",\"cl_bkg\":\"image\",\"cl_font\":\"#FFFFFF\",\"cl_cloud\":\"#FFFFFF\",\"cl_persp\":\"#81D4FA\",\"cl_sun\":\"#FFC107\",\"cl_moon\":\"#FFC107\",\"cl_thund\":\"#FF5722\"}'><a href='https://weatherwidget.org/uk/' id='ww_09c207bc8e494_u' target='_blank'>&#1041;&#1077;&#1079;&#1082;&#1086;&#1096;&#1090;&#1086;&#1074;&#1085;&#1080;&#1081; HTML &#1087;&#1086;&#1075;&#1086;&#1076;&#1085;&#1080;&#1081; &#1110;&#1085;&#1092;&#1086;&#1088;&#1084;&#1077;&#1088; &#1076;&#1083;&#1103; &#1089;&#1072;&#1081;&#1090;&#1091;</a></div></span></div></div><style>.items { -moz-column-count: {{columnCount}}; -webkit-column-count: {{columnCount}}; column-count: {{columnCount}}; }</style>",
                      "DETAIL": "<div class='categoryContainer' id ='category{{index}}'><div class='category'><span class='categoryHeader'><span class='categoryTitle'>{{category}}</span><span class='price1Name'></span><span class='price2Name'></span><span class='price3Name'></span></span><span class='catSubText'></span>[[ITEM]]</div></div>",
                      "ITEM": "<span class='soldOut{{soldOut}}'>SOLD OUT</span><div class='item'><span class='name'>{{name}}<span class='tags'>{{tags}}</span></span><span class='subtext'>{{subtext}}</span><span class='price1'>{{price1}}</span><span class='price1Value'>{{price1-title}}</span><span class='price2'>{{price2}}</span><span class='price2Value'>{{price2-title}}</span><span class='price3'>{{price3}}</span><span class='price3Value'>{{price3-title}}</span></div><span class='description'>{{description}}</span><span class='categorySubtext'>{{categorySubtext}}</span>",
                      "SCRIPT" : "<script>function processTags() { var tagElements = document.querySelectorAll(\".tags\"); for (var i=0; i < tagElements.length; i++) { var tags = tagElements[i].innerText.trim().split(' '); var processed = []; for (var j=0; j < tags.length; j++) { if (tags[j].trim() === '') continue; processed.push(\"<span class='tagLabel'>\" + tags[j] + \"</span>\"); } tagElements[i].innerHTML = processed.join(''); tagElements[i].className = tagElements[i].className.replaceAll(\"tags\", \"tagsProcessed\"); } } function uniqueTexts(el) { if (!el) return false; var arr = []; for (var i = 0; i < el.length; i++) if (el[i].innerHTML && el[i].innerHTML.trim()) arr.push(el[i].innerHTML.trim()); return [...new Set(arr)]; } function processColumn(cat, priceClass, titleClass, nameClass) { var prices = uniqueTexts(cat.querySelectorAll(priceClass)); var titles = uniqueTexts(cat.querySelectorAll(titleClass)); if ((prices.length > 0) && cat.querySelector(nameClass)) { cat.querySelector(nameClass).innerHTML = titles.length > 0 ? titles[0] : ''; if (prices.length == 1) { cat.querySelector(nameClass).innerHTML += '<span class=\"categoryPrice\">' + prices[0] + '</span>'; cat.querySelectorAll(priceClass).forEach(p => p.innerText = ''); }}} function populateCategories() { var categories = document.querySelectorAll('.category'); for (var i=0; i < categories.length; i++) { var cat = categories[i]; processColumn(cat, '.price1', '.price1Value', '.price1Name'); processColumn(cat, '.price2', '.price2Value', '.price2Name'); processColumn(cat, '.price3', '.price3Value', '.price3Name'); var subtext = uniqueTexts(cat.querySelectorAll('.categorySubtext')); if (subtext.length > 0 && cat.querySelector('.catSubText')) { cat.querySelector('.catSubText').innerHTML = subtext[0]; }}} function tickerTime() { let date = new Date(); let hh = date.getHours(); let mm = date.getMinutes(); let session = 'AM'; if(hh >= 12) { session = 'PM'; } if(hh > 12) { hh -= 12; } mm = (mm < 10) ? '0' + mm : mm; let time = hh + ':' + mm + session; document.getElementById('tickerClock').innerText = time; var t = setTimeout(function(){ tickerTime() }, 1000);} tickerTime(); processTags(); populateCategories();</script><script async src=\"https://app1.weatherwidget.org/js/?id=ww_09c207bc8e494\"></script>"},
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
        pageContent: {"LANDING" : "<div class='container'><span class='headerImageTop' style='background-image: url(\"{{headerImage}}\");'></span><div class='mainContent tickerType{{tickerType}}'><div class='items'>[[DETAIL]]</div></div><style>.items { -moz-column-count: {{columnCount}}; -webkit-column-count: {{columnCount}}; column-count: {{columnCount}}; }</style>",
                      "DETAIL": "<div class='categoryContainer' id ='category{{index}}'><div class='category'><span class='categoryHeader'><span class='categoryTitle'>{{category}}</span><span class='price1Name'></span><span class='price2Name'></span><span class='price3Name'></span></span><span class='catSubText'></span>[[ITEM]]</div></div>",
                      "ITEM": "<span class='soldOut{{soldOut}}'>SOLD OUT</span><div class='item'><span class='name'>{{name}}<span class='tags'>{{tags}}</span></span><span class='subtext'>{{subtext}}</span><span class='price1'>{{price1}}</span><span class='price1Value'>{{price1-title}}</span><span class='price2'>{{price2}}</span><span class='price2Value'>{{price2-title}}</span><span class='price3'>{{price3}}</span><span class='price3Value'>{{price3-title}}</span></div><span class='description'>{{description}}</span><span class='categorySubtext'>{{categorySubtext}}</span>",
                      "SCRIPT" : "<script>function processTags() { var tagElements = document.querySelectorAll(\".tags\"); for (var i=0; i < tagElements.length; i++) { var tags = tagElements[i].innerText.trim().split(' '); var processed = []; for (var j=0; j < tags.length; j++) { if (tags[j].trim() === '') continue; processed.push(\"<span class='tagLabel'>\" + tags[j] + \"</span>\"); } tagElements[i].innerHTML = processed.join(''); tagElements[i].className = tagElements[i].className.replaceAll(\"tags\", \"tagsProcessed\"); } } function uniqueTexts(el) { if (!el) return false; var arr = []; for (var i = 0; i < el.length; i++) if (el[i].innerHTML && el[i].innerHTML.trim()) arr.push(el[i].innerHTML.trim()); return [...new Set(arr)]; } function processColumn(cat, priceClass, titleClass, nameClass) { var prices = uniqueTexts(cat.querySelectorAll(priceClass)); var titles = uniqueTexts(cat.querySelectorAll(titleClass)); if ((prices.length > 0) && cat.querySelector(nameClass)) { cat.querySelector(nameClass).innerHTML = titles.length > 0 ? titles[0] : ''; if (prices.length == 1) { cat.querySelector(nameClass).innerHTML += '<span class=\"categoryPrice\">' + prices[0] + '</span>'; cat.querySelectorAll(priceClass).forEach(p => p.innerText = ''); }}} function populateCategories() { var categories = document.querySelectorAll('.category'); for (var i=0; i < categories.length; i++) { var cat = categories[i]; processColumn(cat, '.price1', '.price1Value', '.price1Name'); processColumn(cat, '.price2', '.price2Value', '.price2Name'); processColumn(cat, '.price3', '.price3Value', '.price3Name'); var subtext = uniqueTexts(cat.querySelectorAll('.categorySubtext')); if (subtext.length > 0 && cat.querySelector('.catSubText')) { cat.querySelector('.catSubText').innerHTML = subtext[0]; }}} processTags(); populateCategories();</script>"},
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
        properties: {
        },
        pageContent: {"LIST" : "<div class='container'><span class='title'><a href='{{link}}'>{{title}}</a></span><span class='description'>{{description}}</span></div>"},
        templateFields: {
            title: {
                name: "Title",
                description: "Title of the posting",
                compatibleTypes: [], //empty for all
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
        componentProperties: {
        }
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
        properties: {
        },
        pageContent: {"LIST" : "<li><input type='checkbox' checked><i></i><h1 class='question'>{{question}}</h1><p>{{answer}}</p></li>"},
        templateFields: {
            question: {
                name: "Question",
                description: "Question",
                compatibleTypes: [], //empty for all
            },
            answer: {
                name: "Answer",
                description: "Answer",
                compatibleTypes: []
            }
        },
        componentProperties: {
        }
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
        properties: {
        },
        pageContent:
        {
            "LIST" : "<div class='container'><span class='label'>{{index}}. {{label}}</span><span class='image'><img src='{{image}}'/></span><span class='description'>{{description}}</span><span class='location'><i class='fa-solid fa-map-pin icon'></i>{{location}}</span><span class='callouts'><a class='callout' href='{{calloutLink1}}'>{{calloutLinkText1}}</a><a class='callout' href='{{calloutLink2}}'>{{calloutLinkText2}}</a></span></div>",
            "MARKER" : "<div class='marker'><span class='label'>{{label}}</span><span class='location'><i class='fa-solid fa-map-pin icon'></i>{{location}}</span><a class='callout' href='{{calloutLink1}}'>{{calloutLinkText1}}</a></div>"
        },
        templateFields: {
            label: {
                name: "Label",
                description: "Label of the place marker",
                compatibleTypes: [], //empty for all
            },
            location: {
                name: "Location",
                description: "Address or latitude / longitude of the place marker",
                compatibleTypes: [DataSourceFieldType.Address, DataSourceFieldType.LatLng], //empty for all
            },
            description: {
                name: "Description",
                description: "(Optional) Description of the place marker",
                compatibleTypes: [], //empty for all
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
        componentProperties: {
        }
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
                    {key: "NUMERIC", text: "Numeric", value: "NUMERIC"},
                    {key: "QR", text: "QR Code", value: "QR"},
                    {key: "BLE", text: "iBeacon", value: "BLE"},
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
        pageContent:
        {
            "LANDING": "<div class='container'><span class='heading'>Move closer to an item or enter an item number to view</span></div>",
            "DETAIL" : "<div class='container'><span class='image' style='background-image: url(\"{{image}}\");'><span class='audio'><audio controls autoplay><source src='{{audio}}' /></audio></span></span><span class='label'>{{label}}</span><span class='description'>{{description}}</span></div>"
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
        componentProperties: {
        }
    },}

