const data = [
    {
        "_id": "63092102a643c85c74b00e68",
        "name": "Black Tea",
        "slug": "black",
        "altnames": "Red Tea",
        "origin": "China",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cup_of_black_tea.JPG/1920px-Cup_of_black_tea.JPG?20150517152936",
        "caffeine": "40-120mg",
        "caffeineLevel": "high",
        "sources": [
            "https://en.wikipedia.org/wiki/Black_tea"
        ],
        "description": "Black tea, also translated to red tea in various East Asian languages, is a type of tea that is more oxidized than other types",
        "colorDescription": "red, amber",
        "tasteDescription": "smoky, earthy, spicy, nutty, citrus, caramel, leather, fruity, and honey",
        "types": {
            "assam": {
                "name": "Assam Tea",
                "slug": "assam",
                "altnames": "",
                "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Assam-Tee_SFTGFOP1.jpg",
                "origin": "Assam, India",
                "type": "black",
                "caffeine": "60-110mg",
                "caffeineLevel": "high",
                "decription": "Assam tea is mostly grown at or near sea level and is known for its body, briskness, malty flavour, and strong, bright colour. Assam teas, or blends containing Assam, are often sold as \"breakfast\" teas.",
                "colorDescription": "deep-amber",
                "tasteDescription": "The flavor can range from brisk, smokey, earthy, musky and strong to a lighter cup with chocolate, cocoa, or even sweet and spicy notes",
                "sources": [
                    "https://en.wikipedia.org/wiki/Assam_tea"
                ]
            },
            "darjeeling": {
                "name": "Darjeeling Tea",
                "slug": "darjeeling",
                "altnames": "",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Darjeeling%2C_India%2C_Darjeeling_tea_in_variety%2C_Black_tea.jpg/1920px-Darjeeling%2C_India%2C_Darjeeling_tea_in_variety%2C_Black_tea.jpg?20210606141050",
                "origin": "India",
                "type": "black",
                "caffeine": "50-120mg",
                "caffeineLevel": "very high",
                "decription": "Darjeeling tea is a black tea that is grown and processed in the Darjeeling or Kalimpong Districts in West Bengal, also among the only teas in the world with a Geographical Indication trademark",
                "sources": [
                    "https://en.wikipedia.org/wiki/Darjeeling_tea",
                    "https://www.thespruceeats.com/tea-flushes-in-darjeeling-765194",
                    "https://www.seriouseats.com/why-you-should-drink-more-darjeeling-tea-what-is-first-flush"
                ],
                "colorDescription": "varying based on how its brewed, from a golden yellow to orange to a deep red.",
                "tasteDescription": "musky-sweet tasting notes similar to muscat wine"
            },
            "lapsangsouchong": {
                "name": "Lapsang Souchong",
                "slug": "lapsangsouchong",
                "altnames": "Smoked Tea, Smoky Souchong",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Lapsang_Souchong.jpg/1024px-Lapsang_Souchong.jpg?20170625192109",
                "origin": "Fujian Province, China",
                "type": "black",
                "caffeine": "varying",
                "caffeineLevel": "moderate",
                "decription": "Lapsang Souchong is a tea that is smoke-dried over a pinewood fire",
                "sources": [
                    "https://en.wikipedia.org/wiki/Lapsang_souchong"
                ],
                "colorDescription": "ranging from amber to caramel to deep red.",
                "tasteDescription": "sweet, piney, smoky"
            },
            "keemun": {
                "name": "Keemun",
                "slug": "keemun",
                "altnames": "Qimen Red Tea",
                "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Keemun-img1.jpg",
                "origin": "China",
                "type": "black",
                "caffeine": "25-45mg",
                "caffeineLevel": "moderate",
                "decription": "A black tea ",
                "sources": [
                    "https://en.wikipedia.org/wiki/Keemun"
                ],
                "colorDescription": "bright red",
                "tasteDescription": "smooth, fruity, malty, unsweetened cocoa"
            },
            "dianhong": {
                "name": "Dianhong Tea",
                "slug": "dianhong",
                "altnames": "Yunnan Red Tea",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/GoldenDianHong.jpg/800px-GoldenDianHong.jpg?20071029183852",
                "origin": "Yunnan Province, China",
                "type": "black",
                "caffeine": "20-40mg",
                "caffeineLevel": "moderate",
                "decription": "A relatively high-end, gourmet Chinese black tea sometimes used in various tea blends. The main difference between Dianhong and other Chinese black teas is the amount of fine leaf buds, or \"golden tips,\" present in the dried tea.",
                "sources": [
                    "https://en.wikipedia.org/wiki/Dianhong"
                ],
                "colorDescription": "golden orange",
                "tasteDescription": "sweet, floral, and honey-like, though tends to be stronger and more bitter than other red teas"
            },
            "earlgrey": {
                "name": "Earl Grey",
                "slug": "earlgrey",
                "altnames": "",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Earl_Grey_Tea.jpg/800px-Earl_Grey_Tea.jpg?20111209191130",
                "origin": "UK*",
                "type": "black",
                "caffeine": "40-120",
                "caffeineLevel": "high",
                "description": "A tea blend which has been flavoured with oil of bergamot",
                "colorDescription": "Amber, deep orange",
                "tasteDescription": "smoky, earthy, spicy, nutty, citrus, caramel, leather, fruity, and honey",
                "sources": [
                    "https://en.wikipedia.org/wiki/Earl_Grey_tea"
                ]
            }
        }
    },
    {
        "_id": "63092102a643c85c74b00e6b",
        "name": "White Tea",
        "slug": "white",
        "caffeine": "time/temperature based",
        "origin": "East Asia",
        "description": "A style of tea that features young or minimally processed leaves of the Camellia sinensis plant",
        "colorDescription": "light green or light yellow",
        "tasteDescription": "floral, fresh, fruity, with a hint of cucumber or melon.",
        "types": {
            "baihaoyinzhen": {
                "name": "Baihoi Yinzhen",
                "slug": "baihoiyinzhen",
                "altnames": "Silder Needle, Yinzhen",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2010_FirstFlush_Yunnan_Baihao_Yinzhen.jpg/640px-2010_FirstFlush_Yunnan_Baihao_Yinzhen.jpg",
                "origin": "China",
                "type": "white",
                "caffeine": "0-5mg",
                "caffeineLevel": "very low",
                "description": "A white tea made from only the top buds of the Camellia sinensis plant.",
                "colorDescription": "light orange, light yellow",
                "tasteDescription": "sweet, vegetal, and delicate",
                "sources": [
                    "https://en.wikipedia.org/wiki/Baihao_Yinzhen"
                ]
            },
            "baimudan": {
                "name": "Baimudan tea",
                "slug": "baimudan",
                "altnames": "White Peony tea, Mudan White tea",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Baimudan.JPG/640px-Baimudan.JPG",
                "origin": "China",
                "type": "white",
                "caffeine": "15-30mg",
                "caffeineLevel": "low",
                "description": "A type of white tea made from plucks each with one leaf shoot and two immediate young leaves (one bud two leaf ratio) of the Camellia sinensis plant.",
                "colorDescription": "golden yellow",
                "tasteDescription": " toasty, slightly sweet floral notes and a clean aftertaste.",
                "sources": [
                    "https://en.wikipedia.org/wiki/Baimudan_tea"
                ]
            },
            "shoumei": {
                "name": "Shoumei tea",
                "slug": "shoumei",
                "altnames": "Sow Mee",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Shou_Mei_tea.JPG/640px-Shou_Mei_tea.JPG",
                "origin": "China",
                "type": "white",
                "caffeine": "15-30mg",
                "caffeineLevel": "low",
                "description": "A type of white tea produced from naturally withered upper leafs and tips",
                "colorDescription": "darker green",
                "tasteDescription": "sweet, vegetal, delicate",
                "sources": [
                    "https://en.wikipedia.org/wiki/Shoumei_tea"
                ]
            },
            "xueya": {
                "name": "Xue Ya",
                "slug": "xueya",
                "altnames": "Snow Buds, Phoenix Eye",
                "image": "https://tea-api-boonaki.herokuapp.com/assets/xueya.jpg",
                "origin": "China",
                "type": "white",
                "caffeine": "15-30mg",
                "caffeineLevel": "low",
                "description": "A complex white tea from Fuding in Fujian Province",
                "colorDescription": "light yellow",
                "tasteDescription": "smooth, juicy taste has clean notes of unripe fruits, light wood and just a touch of vegetal astringency.",
                "sources": [
                    ""
                ]
            },
            "satemwaantlers": {
                "name": "Satemwa Antlers",
                "slug": "satemwaantlers",
                "altnames": "",
                "image": "https://tea-api-boonaki.herokuapp.com/assets/satemwa-antlers.jpg",
                "origin": "Malawi",
                "type": "white",
                "caffeine": "10-25mg",
                "caffeineLevel": "moderate",
                "description": "A white tea made from a blend of select Superior Cultivars from Malawi, making it rich in theanine and antioxidants.",
                "colorDescription": "golden yellow",
                "tasteDescription": "delicate sweetness of apricot and lychee lingers on the pallet",
                "sources": [
                    ""
                ]
            }
        }
    },
    {
        "_id": "63092102a643c85c74b00e6c",
        "earlgrey": {
            "name": "Earl Grey",
            "slug": "earlgrey",
            "altnames": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Earl_Grey_Tea.jpg/640px-Earl_Grey_Tea.jpg",
            "origin": "UK*",
            "type": "blend",
            "caffeine": "40-120",
            "caffeineLevel": "very high",
            "mainIngredients": "black tea, oil of bergamot",
            "description": "A tea blend which has been flavoured with oil of bergamot",
            "colorDescription": "amber, deep orange",
            "tasteDescription": "smoky, earthy, spicy, nutty, citrus, caramel, leather, fruity, and honey",
            "sources": [
                "https://en.wikipedia.org/wiki/Earl_Grey_tea"
            ]
        },
        "ladygrey": {
            "name": "Lady Grey",
            "slug": "ladygrey",
            "altnames": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/TwiningsLadyGrey_low.jpg/640px-TwiningsLadyGrey_low.jpg",
            "origin": "UK*",
            "type": "blend",
            "caffeine": "25-110mg",
            "caffeineLevel": "high",
            "mainIngredients": "black tea, oil of bergamot, lemon peel, orange Peel",
            "description": "Lady Grey tea is a trademarked variation on Earl Grey tea. Like Earl Grey, it is a black tea flavoured with bergamot essential oil.",
            "colorDescription": "lighter amber, orange",
            "tasteDescription": "",
            "sources": [
                "https://en.wikipedia.org/wiki/Lady_Grey_(tea)"
            ]
        },
        "englishbreakfast": {
            "name": "English Breakfast tea",
            "slug": "englishbreakfast",
            "altnames": "Breakfast tea",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/English_breakfast_tea_tin.jpg/536px-English_breakfast_tea_tin.jpg",
            "origin": "UK",
            "type": "blend",
            "caffeine": "60-100mg",
            "caffeineLevel": "very high",
            "mainIngredients": "black tea (varied)",
            "description": "a traditional blend of black teas from Assam, Ceylon, Keemun and Kenyan teas.",
            "colorDescription": "deep amber",
            "tasteDescription": "may be slightly sweet, bitter, or malty",
            "sources": [
                "https://en.wikipedia.org/wiki/English_breakfast_tea"
            ]
        },
        "irishbreakfast": {
            "name": "Irish Breakfast",
            "slug": "irishbreakfast",
            "altnames": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Milk_in_Irish_Breakfast_tea.jpg/480px-Milk_in_Irish_Breakfast_tea.jpg",
            "origin": "UK",
            "type": "blend",
            "caffeine": "60-100mg",
            "caffeineLevel": "very high",
            "mainIngredients": "black tea (varied)",
            "description": "A traditional blend of black teas from Assam and Ceylon teas. Because of its strength, it is most commonly served with milk.",
            "colorDescription": "red, deep amber",
            "tasteDescription": "Strong, malty, robust",
            "sources": [
                "https://en.wikipedia.org/wiki/Irish_breakfast_tea"
            ]
        },
        "masalachai": {
            "name": "Masala Chai",
            "slug": "masalachai",
            "altnames": "Spiced tea",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Contents_of_a_bag_of_chai_tea.jpg/640px-Contents_of_a_bag_of_chai_tea.jpg",
            "origin": "India",
            "type": "blend",
            "caffeine": "40-50mg",
            "caffeineLevel": "high",
            "mainIngredients": "assam tea, sugar, cardamom, black pepper, and ginger.",
            "description": "An Indian tea beverage made by boiling black tea in milk and water with a mixture of aromatic herbs and spices",
            "colorDescription": "brown, beige",
            "tasteDescription": "fragrant, spiced, astringent and a strong flavor",
            "sources": [
                "https://en.wikipedia.org/wiki/Masala_chai"
            ]
        },
        "russiancaravan": {
            "name": "Russian Caravan",
            "slug": "russiancaravan",
            "altnames": "",
            "image": "https://tea-api-boonaki.herokuapp.com/assets/russiancaravan.jpg",
            "origin": "China",
            "type": "blend",
            "caffeine": "20-60mg",
            "caffeineLevel": "high",
            "mainIngredients": "oolong tea, keemun tea, lapsang souchong tea",
            "description": "A chinese tea blended with various oolong and black teas that gets its name from tea trading through a traderoute that connected eastern Asia to Europe through Russia",
            "colorDescription": "red, deep orange",
            "tasteDescription": "sweet, malty, and smoky taste",
            "sources": [
                "https://en.wikipedia.org/wiki/Russian_Caravan"
            ]
        },
        "genmaicha": {
            "name": "Genmaicha",
            "slug": "genmaicha",
            "altnames": "Brown Rice Tea, Popcorn Tea",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Genmaicha.JPG/640px-Genmaicha.JPG",
            "origin": "Japan",
            "type": "blend",
            "caffeine": "10mg",
            "caffeineLevel": "low",
            "mainIngredients": "green tea, brown rice",
            "description": "A Japanese brown rice green tea consisting of green tea mixed with roasted popped brown rice.",
            "colorDescription": "light yellow-green",
            "tasteDescription": "toasty, nutty",
            "sources": [
                "https://en.wikipedia.org/wiki/Genmaicha"
            ]
        },
        "jasminedragonpearl": {
            "name": "Jasmine Dragon Pearl",
            "slug": "jasminedragonpearl",
            "altnames": "",
            "image": "https://tea-api-boonaki.herokuapp.com/assets/jasminedragon.jpg",
            "origin": "China",
            "type": "blend",
            "caffeine": "10-20mg",
            "caffeineLevel": "low",
            "mainIngredients": "green tea, white tea, jasmine flowers",
            "description": "Dragon Pearl Jasmine is comprised of little, hand-rolled pearls gently infused with jasmine flowers",
            "colorDescription": "clear light yellow",
            "tasteDescription": "Jasmine, root beer, sweet, but yet a light/subtle feeling.",
            "sources": [
                ""
            ]
        },
        "slug": "blends"
    },
    {
        "_id": "63092102a643c85c74b00e6d",
        "name": "NA",
        "origin": "NA",
        "caffeine": "NA",
        "color": "NA"
    },
    {
        "_id": "63092102a643c85c74b00e6a",
        "name": "Wulong (oolong) Tea",
        "slug": "oolong",
        "caffeine": "37-55mg",
        "origin": "East Asia",
        "description": "A traditional semi-oxidized Chinese tea produced through a process including withering the plant under strong sun and oxidation before curling and twisting",
        "colorDescription": "bright green or yellow, or dark amber and red",
        "tasteDescription": "Similar to black tea, though varied oxidation levels results in widely varied tastes",
        "types": {
            "dahongpao": {
                "name": "Da Hong Pao",
                "slug": "dahongpao",
                "altnames": "",
                "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Da_Hong_Pao_Oolong_tea_leaf.jpg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "20-30mg",
                "caffeineLevel": "moderate",
                "description": "A Wuyi rock tea grown in the Wuyi Mountains of Fujian Province, China",
                "colorDescription": "orange-yellow, bright and clear",
                "tasteDescription": "peaty and earthy notes with hints of stone fruit, brown sugar, and molasses",
                "sources": [
                    "https://en.wikipedia.org/wiki/Da_Hong_Pao"
                ]
            },
            "shuijingui": {
                "name": "Shui Jin Gui",
                "slug": "shuijingui",
                "altnames": "Golden Water Turtle Tea",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Shui_Jin_Gui_Oolong_tea_leaf.jpg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "20-30mg",
                "caffeineLevel": "moderate",
                "description": "A Wuyi oolong tea from Mount Wuyi, Fujian, China",
                "colorDescription": "bright green",
                "tasteDescription": "sweet, floral",
                "sources": [
                    "https://en.wikipedia.org/wiki/Shui_Jin_Gui_tea"
                ]
            },
            "tieluohan": {
                "name": "Tieluohan",
                "slug": "tieluohan",
                "altnames": "Iron Arhat",
                "image": "https://tea-api-boonaki.herokuapp.com/assets/tieluohan.jpg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "20-30mg",
                "caffeineLevel": "moderate",
                "description": "Grown on the cliffs of the Wuyi Mountains in China, Tieluohan is a light tea with high regards due to legends",
                "colorDescription": "clear brown",
                "tasteDescription": "strong robust taste with a little bitterness",
                "sources": [
                    "https://en.wikipedia.org/wiki/Tieluohan_tea"
                ]
            },
            "baijiguan": {
                "name": "Bai Jiguan",
                "slug": "baijiguan",
                "altnames": "White Rooster",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bai_Jiguan.jpg/600px-Bai_Jiguan.jpg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "20-30mg",
                "caffeineLevel": "moderate",
                "description": "A light Wuyi Mountain tea",
                "colorDescription": "yellowish to light green",
                "tasteDescription": "starts off sweet, uniquely fruity with a toasty floral honeyed aroma and finishes with a lingering mellow fruit and honey note",
                "sources": [
                    "https://en.wikipedia.org/wiki/Bai_Jiguan_tea"
                ]
            },
            "shuixian": {
                "name": "Shui Xian",
                "slug": "shuixian",
                "altnames": "Water sprite, Sacred Lily",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Shui_Xian.jpg/600px-Shui_Xian.jpg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "10-20mg",
                "caffeineLevel": "low",
                "description": "Heavy Wuyi tea, the darkest of the dark oolongs from Wuyi.",
                "colorDescription": "Deep amber",
                "tasteDescription": "Mellow and delicate, the liquid is rich and complicated, with lingering fragrance in mouth",
                "sources": [
                    "https://en.wikipedia.org/wiki/Shui_Xian"
                ]
            },
            "tieguanyin": {
                "name": "Tieguanyin",
                "slug": "tieguanyin",
                "altnames": "iron Goddess, Iron Guanyin",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tieguanyin2.jpg/640px-Tieguanyin2.jpg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "12-14mg",
                "caffeineLevel": "low",
                "description": "A variety of oolong tea that was originated during the 19th century",
                "colorDescription": "bright emerald to bright yellow",
                "tasteDescription": "roasted, nutty, creamy, fruity, toasty, honey, floral, fresh, vegetal and mineral",
                "sources": [
                    "https://en.wikipedia.org/wiki/Tieguanyin",
                    "https://www.puretaiwantea.com/health-benefits-of-tieguanyin-tea"
                ]
            },
            "huangjingui": {
                "name": "Huangjin Gui",
                "slug": "huangjingui",
                "altnames": "Golden Osmanthus, Golden Cassia",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Huang_Jin_Gui_Tea.jpeg/640px-Huang_Jin_Gui_Tea.jpeg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "0",
                "caffeineLevel": "none",
                "description": "A premium variety of Chinese oolong tea named after the yellow golden color of its budding leaves and its unique flowery aroma",
                "colorDescription": "light yellow to light green",
                "tasteDescription": "smooth sweet flavor with a rich slightly nutty after-taste",
                "sources": [
                    "https://en.wikipedia.org/wiki/Huangjin_Gui"
                ]
            },
            "dongding": {
                "name": "Dòng Dǐng",
                "slug": "dongding",
                "altnames": "Tung-ting",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dong_Ding_tea.jpg/640px-Dong_Ding_tea.jpg",
                "origin": "Taiwan",
                "type": "oolong",
                "caffeine": "50-60mg",
                "caffeineLevel": "moderate",
                "description": "An oolong tea from Taiwan which translates to \"Frozen Summit\" or \"Icy Peak\", and is the name of the mountain in Taiwan where the tea is cultivated",
                "colorDescription": "dark, army-green color with slight hints of brown",
                "tasteDescription": "Conatins nutty notes, along with a smooth caramel-like flavor",
                "sources": [
                    "https://en.wikipedia.org/wiki/Dong_Ding_tea"
                ]
            },
            "dongfangmeiren": {
                "name": "Dongfang Meiren",
                "slug": "dongfangmeiren",
                "altnames": "White-tip oolong",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dun-fan-mey-zhen-teashopby.jpg/640px-Dun-fan-mey-zhen-teashopby.jpg",
                "origin": "Taiwan",
                "type": "oolong",
                "caffeine": "50-90mg",
                "caffeineLevel": "high",
                "description": "A heavily oxidized, non-roasted, tip-type oolong tea originating in Hsinchu County, Taiwan",
                "colorDescription": "sweet-tasting ",
                "tasteDescription": "bright reddish-orange",
                "sources": [
                    "https://en.wikipedia.org/wiki/Dongfang_meiren"
                ]
            },
            "baozhong": {
                "name": "Baozhong",
                "slug": "baozhong",
                "altnames": "Pouchong",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Spring_pouchong_tea_leaves_on_plate.jpg/640px-Spring_pouchong_tea_leaves_on_plate.jpg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "20-30mg",
                "caffeineLevel": "low",
                "description": "A lightly oxidized tea, twist shape, with floral notes, and usually not roasted",
                "colorDescription": "mix of pale honey yellow and jade green, bright in color, and clear",
                "tasteDescription": "grassy, floral notes and the taste of creamy green melon.",
                "sources": [
                    "https://en.wikipedia.org/wiki/Baozhong_tea"
                ]
            },
            "ruanzhi": {
                "name": "Ruan Zhi Oolong",
                "slug": "ruanzhi",
                "altnames": "",
                "image": "https://tea-api-boonaki.herokuapp.com/assets/ruanzhi.jpg",
                "origin": "Taiwan",
                "type": "oolong",
                "caffeine": "50-90mg*",
                "caffeineLevel": "high",
                "description": "Ruan Zhi, or \"soft stem\", is a variety of oolong tea developed by the Taiwan Tea Experiment Station ",
                "colorDescription": "light amber",
                "tasteDescription": "oily flowery taste, with cherry tones.",
                "sources": [
                    "https://teapedia.org/en/Ruan_Zhi"
                ]
            },
            "jinxuan": {
                "name": "Jin Xuan",
                "slug": "jinxuan",
                "altnames": "Milk Oolong, Nai Xiang",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jin_Xuan_oolong_tea.jpg/480px-Jin_Xuan_oolong_tea.jpg",
                "origin": "Taiwan",
                "type": "oolong",
                "caffeine": "10-20mg",
                "caffeineLevel": "low",
                "description": "A variety of oolong tea developed in 1980",
                "colorDescription": "dark yellow",
                "tasteDescription": "taste is light, creamy, and flowery and sometimes compared to milk",
                "sources": [
                    "https://en.wikipedia.org/wiki/Jin_Xuan_tea"
                ]
            },
            "assamsmokedoolong": {
                "name": "Assam Smoked Oolong",
                "slug": "assamsmokedoolong",
                "altnames": "",
                "image": "https://tea-api-boonaki.herokuapp.com/assets/assam-smokedoolong.jpg",
                "origin": "China",
                "type": "oolong",
                "caffeine": "NA",
                "caffeineLevel": "none",
                "description": "Assam Smoked Oolong is a highly unusual and rare oak smoked tea from Mothola Tea Estate in Assam. ",
                "colorDescription": "amber red",
                "tasteDescription": "oaky, smokey, sweet, malty, has notes of apricots and tobacco",
                "sources": [
                    ""
                ]
            }
        }
    },
    {
        "_id": "63092102a643c85c74b00e69",
        "name": "Green Tea",
        "slug": "green",
        "image": "https://tea-api-boonaki.herokuapp.com/assets/green.jpg",
        "origin": "China",
        "caffeine": "~10mg",
        "sources": [
            "https://en.wikipedia.org/wiki/Green_tea"
        ],
        "description": "Made from unoxidized leaves, Green tea is one of the least processed types of tea, offering high levels of antioxidants.",
        "colorDescription": "varying shades of green",
        "tasteDescription": "sweet, bittersweet, nutty, vegetal, buttery, floral, fruity, oceanic",
        "types": {
            "sencha": {
                "name": "Sencha Tea",
                "slug": "sencha",
                "altnames": "Steeped Tea",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/2017_Kagoshima_sencha.jpg/1024px-2017_Kagoshima_sencha.jpg?20170624211809",
                "origin": "Japan",
                "type": "green",
                "caffeine": "20-40mg",
                "caffeineLevel": "low",
                "description": "A Japanese green tea prepared by infusing whole tea leaves in hot water.",
                "colorDescription": "light green",
                "tasteDescription": "fresh, herbal, or grassy flavor, which can have varying vegetal grassy notes depending on how long it is steeped.",
                "sources": [
                    "https://en.wikipedia.org/wiki/Sencha"
                ]
            },
            "matcha": {
                "name": "Matcha Tea",
                "slug": "matcha",
                "altnames": "",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Matcha_Scoop.jpg/1024px-Matcha_Scoop.jpg?20190105233506",
                "origin": "China",
                "type": "green",
                "caffeine": "20-90mg",
                "caffeineLevel": "moderate",
                "description": "A finely ground powder of specially grown and processed green tea leaves, traditionally consumed in East Asia.",
                "colorDescription": "green, dark green",
                "tasteDescription": "vegetal grassy notes, natural sweet nuttiness, a touch of bitterness with a pleasant savory ending",
                "sources": [
                    "https://en.wikipedia.org/wiki/Matcha"
                ]
            },
            "bancha": {
                "name": "Bancha",
                "slug": "bancha",
                "altnames": "",
                "image": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Shizuoka_bancha.jpg",
                "origin": "Japan",
                "type": "green",
                "caffeine": "~10mg",
                "caffeineLevel": "very low",
                "description": "Tea that is harvested from the same tea tree as sencha grade, but it is plucked later than sencha is. Can be found in a number of forms such as roasted, unroasted, smoked, etc.",
                "colorDescription": "light green to green-orange",
                "tasteDescription": "mild, earthy grassiness, with dry, toasty notes with less of a deeply vegetal, umami flavo",
                "sources": [
                    "https://en.wikipedia.org/wiki/Bancha"
                ]
            },
            "gyokuro": {
                "name": "Gyokuro",
                "slug": "gyokuro",
                "altnames": "Jade Dew, Pearl Dew",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gyokuro_img_0067.jpg/480px-Gyokuro_img_0067.jpg",
                "origin": "Japan",
                "type": "green",
                "caffeine": "~35mg",
                "caffeineLevel": "low",
                "description": "A type of shaded green tea from Japan. It differs from the standard sencha (a classic unshaded green tea) in being grown under the shade rather than the full sun.",
                "colorDescription": "ranging from light green to dark green",
                "tasteDescription": "very full-bodied, with a taste reminiscent to seaweed and grasses, followed by an intense sweetness",
                "sources": [
                    "https://en.wikipedia.org/wiki/Gyokuro"
                ]
            },
            "kukicha": {
                "name": "Kukicha",
                "slug": "kukicha",
                "altnames": "Bōcha, Twig tea, Stalk tea",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kukicha.jpg/480px-Kukicha.jpg",
                "origin": "Japan",
                "type": "green",
                "caffeine": "1-5mg",
                "caffeineLevel": "very low",
                "description": "A Japanese blend made of stems, stalks, and twigs. It is available as a green tea or in more oxidised processing",
                "colorDescription": "very pale, yellow-green,",
                "tasteDescription": "mildly nutty and slightly creamy sweet flavour",
                "sources": [
                    "https://en.wikipedia.org/wiki/Kukicha"
                ]
            },
            "konacha": {
                "name": "Konacha",
                "slug": "konacha",
                "altnames": "Gyokurokonacha",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Konacha.jpg/640px-Konacha.jpg",
                "origin": "Japan",
                "type": "green",
                "caffeine": "based on plant growth",
                "caffeineLevel": "varied",
                "description": "A type of green tea, composed of the dust, tea buds and small leaves that are left behind after processing Gyokuro or Sencha",
                "colorDescription": "intense green, deep green",
                "tasteDescription": "mild, sweet, and grassy flavor with bitter after taste",
                "sources": [
                    "https://en.wikipedia.org/wiki/Konacha"
                ]
            },
            "genmaicha": {
                "name": "Genmaicha",
                "slug": "genmaicha",
                "altnames": "Brown Rice Tea, Popcorn Tea",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Genmaicha.JPG/640px-Genmaicha.JPG",
                "origin": "Japan",
                "type": "green",
                "caffeine": "10mg",
                "caffeineLevel": "low",
                "description": "A Japanese brown rice green tea consisting of green tea mixed with roasted popped brown rice.",
                "colorDescription": "light yellow-green",
                "tasteDescription": "toasty, nutty",
                "sources": [
                    "https://en.wikipedia.org/wiki/Genmaicha"
                ]
            },
            "hojicha": {
                "name": "Hojicha",
                "slug": "hojicha",
                "altnames": "",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Houjicha.jpg/360px-Houjicha.jpg",
                "origin": "Kyoto, Japan",
                "type": "green",
                "caffeine": "5-10mg",
                "caffeineLevel": "very low",
                "description": "A Japanese green tea that is roasted in a porcelain pot over charcoal",
                "colorDescription": "distinctive clear red appearance",
                "tasteDescription": "naturally sweet taste and smoky flavor with distinct notes of cocoa",
                "sources": [
                    "https://en.wikipedia.org/wiki/H%C5%8Djicha",
                    "https://hojicha.co/"
                ]
            }
        }
    }
]

export default data