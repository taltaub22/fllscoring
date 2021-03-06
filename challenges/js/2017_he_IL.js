{
    "title": "HYDRO DYNAMICS",
    "missions": [{
            "title": "M01 - הסרת צינור",
            "description": "הזיזו את הצינור הפגום לתוך הבסיס",
            "objectives": [{
                "id": "M01",
                "title": "צינור פגום לגמרי בתוך הבסיס",
                "type": "yesno"
            }],
            "score": [function(M01) {
                if (M01 === 'no') {
                    return 0
                }
                if (M01 === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M02 - זרימה",
            "description": "הזיזו מים גדולים (אחד לכל היותר) אל המגרש של הקבוצה השניה *על ידי סיבוב הידיות של המערכת בלבד*.",
            "objectives": [{
                "id": "M02",
                "title": "מים גדולים עברו לזירה של הקבוצה השנייה\r\n(רק על ידי סיבוב שסתום (שסתומי) מערכת השאיבה)",
                "type": "yesno"
            }],
            "score": [function(M02) {
                if (M02 === 'no') {
                    return 0
                }
                if (M02 === 'yes') {
                    return 25
                }
            }]
        },
        {
            "title": "M03 - הרחבת משאבה",
            "description": "הזיזו את הרחבת המשאבה כך שתיגע במגרש וכך שמגע זה הוא לגמרי בתוך אזור המטרה",
            "objectives": [{
                "id": "M03",
                "title": "הרחבת המשאבה במגע עם השטיח, לגמרי בתוך באזור המטרה",
                "type": "yesno"
            }],
            "score": [function(M03) {
                if (M03 === 'no') {
                    return 0
                }
                if (M03 === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M04 - גשם",
            "description": "גרמו לכך שלפחות גשם אחד יצא מענן הגשם",
            "objectives": [{
                "id": "M04",
                "title": "לפחות גשם אחד יצא מתוך ענן הגשם",
                "type": "yesno"
            }],
            "score": [function(M04) {
                if (M04 === 'no') {
                    return 0
                }
                if (M04 === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M05 - מסנן",
            "description": "הזיזו את המסנן צפונה עד שוו המנעול נופל.",
            "objectives": [{
                "id": "M05",
                "title": "תפס הנעילה נפל ונשאר שם",
                "type": "yesno"
            }],
            "score": [function(M05) {
                if (M05 === 'no') {
                    return 0
                }
                if (M05 === 'yes') {
                    return 30
                }
            }]
        },
        {
            "title": "M06 - טיפול במים",
            "description": "הביאו לכך שמתקן טיפול המים יפלוט מים גדולים *רק באמצעות הורדת ידית האסלה.",
            "objectives": [{
                "id": "M06",
                "title": "מים גדולים נפלטו מדגם טיפול המים (רק על ידי ידית בית השימוש)",
                "type": "yesno"
            }],
            "score": [function(M06) {
                if (M06 === 'no') {
                    return 0
                }
                if (M06 === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M07 - מזרקה",
            "description": "הביאו לכך שהשכבה האמצעית של המזרקה עולה באופן ברור ונשארת בגובה זה, אך ורק בעקבות מים גדולים באמבט האפור.",
            "objectives": [{
                "id": "M07",
                "title": "השכבה האמצעית עלתה (רק בשל דגם מים גדולים בתוך האמבט האפור)",
                "type": "yesno"
            }],
            "score": [function(M07) {
                if (M07 === 'no') {
                    return 0
                }
                if (M07 === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M08 - מכסי ביוב",
            "description": "הפכו מכסי ביוב מבלי שיגיעו לבסיס.",
            "objectives": [{
                    "id": "M08_1",
                    "title": "מכסה (מכסי) ביוב הפוכים בברור מעבר למצב זקוף (ומעולם לא הגיעו לבסיס)",
                    "options": [{
                            "value": "2",
                            "title": "2"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "0",
                            "title": "0"
                        }
                    ],
                    "type": "enum"
                },
                {
                    "id": "M08_2",
                    "title": "שני המכסים לגמרי בתוך אזורי מטרה נפרדים של החצובה",
                    "type": "yesno"
                }
            ],
            "score": [function(M08_1, M08_2) {
                if (M08_1 === '0' && M08_2 === 'no') {
                    return 0
                }
                if (M08_1 === '1' && M08_2 === 'no') {
                    return 15
                }
                if (M08_1 === '2' && M08_2 === 'no') {
                    return 30
                }
                if (M08_1 === '0' && M08_2 === 'yes') {
                    return 0
                }
                if (M08_1 === '1' && M08_2 === 'yes') {
                    return 15
                }
                if (M08_1 === '2' && M08_2 === 'yes') {
                    return 60
                }
            }]
        },
        {
            "title": "M09 - חצובה",
            "description": "הזיז את חצובת המצלמה.",
            "objectives": [{
                    "id": "M09_1",
                    "title": "כל רגלי החצובה נוגעות בשטיח",
                    "type": "yesno"
                },
                {
                    "id": "M09_2",
                    "title": "החצובה באופן חלקי באזור המטרה שלה",
                    "type": "yesno"
                },
                {
                    "id": "M09_3",
                    "title": "החצובה לגמרי בתוך אזור המטרה שלה",
                    "type": "yesno"
                }
            ],
            "score": [function(M09_1, M09_2, M09_3) {
                if (M09_1 === 'no' && M09_2 === 'no' && M09_3 === 'no') {
                    return 0
                }
                if (M09_1 === 'no' && M09_2 === 'no' && M09_3 === 'yes') {
                    return 0
                }
                if (M09_1 === 'no' && M09_2 === 'yes' && M09_3 === 'no') {
                    return 0
                }
                if (M09_1 === 'no' && M09_2 === 'yes' && M09_3 === 'yes') {
                    return new Error("יש לבחור אחת מבין שתי האפשרויות")
                }
                if (M09_1 === 'yes' && M09_2 === 'no' && M09_3 === 'no') {
                    return 0
                }
                if (M09_1 === 'yes' && M09_2 === 'no' && M09_3 === 'yes') {
                    return 20
                }
                if (M09_1 === 'yes' && M09_2 === 'yes' && M09_3 === 'no') {
                    return 15
                }
                if (M09_1 === 'yes' && M09_2 === 'yes' && M09_3 === 'yes') {
                    return new Error("יש לבחור אחת מבין שתי האפשרויות")
                }
            }]
        },
        {
            "title": "M10 - החלפת צינור",
            "description": "הזיזו צינור חדש כך שהוא יהיה במקום הצינור הפגום, במגע מלא/אופקי עם השטיח.",
            "objectives": [{
                    "id": "M10_1",
                    "title": "צינור חדש נמצא היכן שהצינור הפגום היה",
                    "type": "yesno"
                },
                {
                    "id": "M10_2",
                    "title": "הצינור החדש במגע מלא/ אופקי עם השטיח",
                    "type": "yesno"
                }
            ],
            "score": [function(M10_1, M10_2) {
                if (M10_1 === 'no' && M10_2 === 'no') {
                    return 0
                }
                if (M10_1 === 'no' && M10_2 === 'yes') {
                    return 0
                }
                if (M10_1 === 'yes' && M10_2 === 'no') {
                    return 0
                }
                if (M10_1 === 'yes' && M10_2 === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M11 - הנחת צינור",
            "description": "הזיזו צינור חדש.",
            "objectives": [{
                    "id": "M11_1",
                    "title": "הצינור החדש במגע מלא/אופקי עם השטיח",
                    "type": "yesno"
                },
                {
                    "id": "M11_2",
                    "title": "הצינור החדש באופן חלקי באזור המטרה שלו",
                    "type": "yesno"
                },
                {
                    "id": "M11_3",
                    "title": "הצינור החדש לגמרי בתוך אזור המטרה שלו",
                    "type": "yesno"
                }
            ],
            "score": [function(M11_1, M11_2, M11_3) {
                if (M11_1 === 'no' && M11_2 === 'no' && M11_3 === 'no') {
                    return 0
                }
                if (M11_1 === 'no' && M11_2 === 'no' && M11_3 === 'yes') {
                    return 0
                }
                if (M11_1 === 'no' && M11_2 === 'yes' && M11_3 === 'no') {
                    return 0
                }
                if (M11_1 === 'no' && M11_2 === 'yes' && M11_3 === 'yes') {
                    return new Error("יש לבחור אחת מבין שתי האפשרויות")
                }
                if (M11_1 === 'yes' && M11_2 === 'no' && M11_3 === 'no') {
                    return 0
                }
                if (M11_1 === 'yes' && M11_2 === 'no' && M11_3 === 'yes') {
                    return 20
                }
                if (M11_1 === 'yes' && M11_2 === 'yes' && M11_3 === 'no') {
                    return 15
                }
                if (M11_1 === 'yes' && M11_2 === 'yes' && M11_3 === 'yes') {
                    return new Error("יש לבחור אחת מבין שתי האפשרויות")
                }
            }]
        },
        {
            "title": "M12 - בוצה",
            "description": "הזיזו את הבוצה כך שהיא תיגע בעץ הגלוי של אחד מבין ששת האדניות המצוירות.",
            "objectives": [{
                "id": "M12",
                "title": "הבוצה נוגעת בעץ הגלוי של דופן אדנית מצויירת",
                "type": "yesno"
            }],
            "score": [function(M12) {
                if (M12 === 'no') {
                    return 0
                }
                if (M12 === 'yes') {
                    return 30
                }
            }]
        },
        {
            "title": "M13 - פרח",
            "description": "גרמו לפרח לעלות באופן ברור, כך שישאר שם אך ורק בעקבות מים גדולים בכד החום.",
            "objectives": [{
                    "id": "M13_1",
                    "title": "הפרח עלה (רק בשל דגם מים גדולים בתוך הכד החום)",
                    "type": "yesno"
                },
                {
                    "id": "M13_2",
                    "title": "לפחות גשם אחד בחלק הסגול, נוגע בדגם הפרח בלבד",
                    "type": "yesno"
                }
            ],
            "score": [function(M13_1, M13_2) {
                if (M13_1 === 'no' && M13_2 === 'no') {
                    return 0
                }
                if (M13_1 === 'no' && M13_2 === 'yes') {
                    return 0
                }
                if (M13_1 === 'yes' && M13_2 === 'no') {
                    return 30
                }
                if (M13_1 === 'yes' && M13_2 === 'yes') {
                    return 60
                }
            }]
        },
        {
            "title": "M14 - באר מים",
            "description": "הזיזו את באר המים כך שתהיה במגע עם השטיח.",
            "objectives": [{
                    "id": "M14_1",
                    "title": "באר המים במגע עם השטיח באופן חלקי באזור המטרה",
                    "type": "yesno"
                },
                {
                    "id": "M14_2",
                    "title": "באר המים במגע עם השטיח לגמרי בתוך אזור המטרה",
                    "type": "yesno"
                }
            ],
            "score": [function(M14_1, M14_2) {
                if (M14_1 === 'no' && M14_2 === 'no') {
                    return 0
                }
                if (M14_1 === 'no' && M14_2 === 'yes') {
                    return 25
                }
                if (M14_1 === 'yes' && M14_2 === 'no') {
                    return 15
                }
                if (M14_1 === 'yes' && M14_2 === 'yes') {
                    return new Error("יש לבחור אחת מבין שתי האפשרויות")
                }
            }]
        },
        {
            "title": "M15 - אש",
            "description": "גרמו לאש ליפול רק על ידי כך שהכבאית הפעילה כוח ישיר על מנוף הבית.",
            "objectives": [{
                "id": "M15",
                "title": "האש נפלה ונשארה שם (רק מפני שהכבאית הפעילה כוח ישיר על מנוף הבית)",
                "type": "yesno"
            }],
            "score": [function(M15) {
                if (M15 === 'no') {
                    return 0
                }
                if (M15 === 'yes') {
                    return 25
                }
            }]
        },
        {
            "title": "M16 - איסוף מים",
            "description": "הזיזו או תפסו מים גדולים ו/או מי גשם (אחד לכל היותר) כך שהוא נוגע בשטיח בתוך המטרה, *מבלי שהמטרה תגיע לקו התיחום הלבן. למים מותר לגעת במטרה או במים אחרים, אך לא להיתמך או לגעת בשום דבר אחר. כל מים מקנה נקודות בנפרד",
            "objectives": [{
                    "id": "M16_1",
                    "title": "המטרה של המים מזרחית לקו התיחום הלבן (ומעולם לא הגיעה לקו התיחום הלבן)",
                    "type": "yesno"
                },
                {
                    "id": "M16_2",
                    "title": "לפחות גשם אחד נוגע בשטיח בתוך המטרה של המים",
                    "type": "yesno"
                },
                {
                    "id": "M16_4",
                    "title": "לפחות זוג אחד של מים גדולים בערימה בתוך המטרה של המים",
                    "type": "yesno"
                },
                {
                    "id": "M16_3",
                    "title": "מים גדולים נוגעים בשטיח בתוך המטרה של המים",
                    "options": [{
                            "value": "5",
                            "title": "5"
                        },
                        {
                            "value": "4",
                            "title": "4"
                        },
                        {
                            "value": "3",
                            "title": "3"
                        },
                        {
                            "value": "2",
                            "title": "2"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "0",
                            "title": "0"
                        }
                    ],
                    "type": "enum"
                }
            ],
            "score": [function(M16_1, M16_2, M16_3, M16_4) {
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '0' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '0' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '1' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '1' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '2' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '2' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '3' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '3' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '4' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '4' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '5' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'no' && M16_3 === '5' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '0' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '0' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '1' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '1' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '2' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '2' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '3' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '3' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '4' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '4' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '5' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'no' && M16_2 === 'yes' && M16_3 === '5' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '0' && M16_4 === 'no') {
                    return 0
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '0' && M16_4 === 'yes') {
                    return 0
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '1' && M16_4 === 'no') {
                    return 10
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '1' && M16_4 === 'yes') {
                    return 40
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '2' && M16_4 === 'no') {
                    return 20
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '2' && M16_4 === 'yes') {
                    return 50
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '3' && M16_4 === 'no') {
                    return 30
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '3' && M16_4 === 'yes') {
                    return 60
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '4' && M16_4 === 'no') {
                    return 40
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '4' && M16_4 === 'yes') {
                    return 70
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '5' && M16_4 === 'no') {
                    return 50
                }
                if (M16_1 === 'yes' && M16_2 === 'no' && M16_3 === '5' && M16_4 === 'yes') {
                    return 80
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '0' && M16_4 === 'no') {
                    return 10
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '0' && M16_4 === 'yes') {
                    return 10
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '1' && M16_4 === 'no') {
                    return 20
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '1' && M16_4 === 'yes') {
                    return 50
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '2' && M16_4 === 'no') {
                    return 30
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '2' && M16_4 === 'yes') {
                    return 60
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '3' && M16_4 === 'no') {
                    return 40
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '3' && M16_4 === 'yes') {
                    return 70
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '4' && M16_4 === 'no') {
                    return 50
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '4' && M16_4 === 'yes') {
                    return 80
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '5' && M16_4 === 'no') {
                    return 60
                }
                if (M16_1 === 'yes' && M16_2 === 'yes' && M16_3 === '5' && M16_4 === 'yes') {
                    return 90
                }
            }]
        },
        {
            "title": "M17 - מערכת טיהור מים - SLINGSHOT ‮",
            "description": "הזיזו את ה SLINGSHOT כך שהוא לגמרי בתוך אזור המטרה שלו.",
            "objectives": [{
                    "id": "M17_1",
                    "title": "ה-SLINGSHOT לגמרי בתוך אזור המטרה שלו",
                    "type": "yesno"
                },
                {
                    "id": "M17_2",
                    "title": "גשם ומים עכורים לגמרי בתוך אזור המטרה של ה- SLINGSHOT",
                    "type": "yesno"
                }
            ],
            "score": [function(M17_1, M17_2) {
                if (M17_1 === 'no' && M17_2 === 'no') {
                    return 0
                }
                if (M17_1 === 'no' && M17_2 === 'yes') {
                    return 0
                }
                if (M17_1 === 'yes' && M17_2 === 'no') {
                    return 20
                }
                if (M17_1 === 'yes' && M17_2 === 'yes') {
                    return 35
                }
            }]
        },
        {
            "title": "M18 - ברז",
            "description": "גרמו למפלס המים להיות בבירור יותר כחול מלבן, במבט מעל הכוס, *רק על ידי סיבוב ידית הברז.",
            "objectives": [{
                "id": "M18",
                "title": "מפלס המים כחול יותר מאשר לבן (רק על ידי סיבוב ידית הברז)",
                "type": "yesno"
            }],
            "score": [function(M18) {
                if (M18 === 'no') {
                    return 0
                }
                if (M18 === 'yes') {
                    return 25
                }
            }]
        },
        {
            "title": "עונשין",
            "description": "עונשין שניתן",
            "objectives": [{
                "id": "penalties",
                "title": "דיסקיות עונשין בתוך אזור המשולש הלבן",
                "options": [{
                        "value": "6",
                        "title": "6"
                    },
                    {
                        "value": "5",
                        "title": "5"
                    },
                    {
                        "value": "4",
                        "title": "4"
                    },
                    {
                        "value": "3",
                        "title": "3"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "0",
                        "title": "0"
                    }
                ],
                "type": "enum"
            }],
            "score": [function(penalties) {
                if (penalties === '0') {
                    return 0
                }
                if (penalties === '1') {
                    return -5
                }
                if (penalties === '2') {
                    return -10
                }
                if (penalties === '3') {
                    return -15
                }
                if (penalties === '4') {
                    return -20
                }
                if (penalties === '5') {
                    return -25
                }
                if (penalties === '6') {
                    return -30
                }
            }]
        }
    ],
    "strings": {
        "yes": "כן",
        "no": "לא",
        "M01-name": "M01 - הסרת צינור",
        "M01-desc": "הזיזו את הצינור הפגום לתוך הבסיס",
        "M01-scoring": "צינור פגום לגמרי בתוך הבסיס",
        "M02-name": "M02 - זרימה",
        "M02-desc": "הזיזו מים גדולים (אחד לכל היותר) אל המגרש של הקבוצה השניה *על ידי סיבוב הידיות של המערכת בלבד*.",
        "M02-scoring": "מים גדולים עברו לזירה של הקבוצה השנייה\r\n(רק על ידי סיבוב שסתום (שסתומי) מערכת השאיבה)",
        "M03-name": "M03 - הרחבת משאבה",
        "M03-desc": "הזיזו את הרחבת המשאבה כך שתיגע במגרש וכך שמגע זה הוא לגמרי בתוך אזור המטרה",
        "M03-scoring": "הרחבת המשאבה במגע עם השטיח, לגמרי בתוך באזור המטרה",
        "M04-name": "M04 - גשם",
        "M04-desc": "גרמו לכך שלפחות גשם אחד יצא מענן הגשם",
        "M04-scoring": "לפחות גשם אחד יצא מתוך ענן הגשם",
        "M05-name": "M05 - מסנן",
        "M05-desc": "הזיזו את המסנן צפונה עד שוו המנעול נופל.",
        "M05-scoring": "תפס הנעילה נפל ונשאר שם",
        "M06-name": "M06 - טיפול במים",
        "M06-desc": "הביאו לכך שמתקן טיפול המים יפלוט מים גדולים *רק באמצעות הורדת ידית האסלה.",
        "M06-scoring": "מים גדולים נפלטו מדגם טיפול המים (רק על ידי ידית בית השימוש)",
        "M07-name": "M07 - מזרקה",
        "M07-desc": "הביאו לכך שהשכבה האמצעית של המזרקה עולה באופן ברור ונשארת בגובה זה, אך ורק בעקבות מים גדולים באמבט האפור.",
        "M07-scoring": "השכבה האמצעית עלתה (רק בשל דגם מים גדולים בתוך האמבט האפור)",
        "M08-name": "M08 - מכסי ביוב",
        "M08-desc": "הפכו מכסי ביוב מבלי שיגיעו לבסיס.",
        "M08-scoring1": "מכסה (מכסי) ביוב הפוכים בברור מעבר למצב זקוף (ומעולם לא הגיעו לבסיס)",
        "M08-scoring2": "שני המכסים הפוכים",
        "M08-scoring3": "שני המכסים לגמרי בתוך אזורי מטרה נפרדים של החצובה",
        "M09-name": "M09 - חצובה",
        "M09-desc": "הזיז את חצובת המצלמה.",
        "M09-scoring1": "כל רגלי החצובה נוגעות בשטיח",
        "M09-scoring2": "החצובה באופן חלקי באזור המטרה שלה",
        "M09-scoring3": "החצובה לגמרי בתוך אזור המטרה שלה",
        "M09-error": "יש לבחור אחת מבין שתי האפשרויות",
        "M10-name": "M10 - החלפת צינור",
        "M10-desc": "הזיזו צינור חדש כך שהוא יהיה במקום הצינור הפגום, במגע מלא/אופקי עם השטיח.",
        "M10-scoring1": "צינור חדש נמצא היכן שהצינור הפגום היה",
        "M10-scoring2": "הצינור החדש במגע מלא/ אופקי עם השטיח",
        "M11-name": "M11 - הנחת צינור",
        "M11-desc": "הזיזו צינור חדש.",
        "M11-scoring1": "הצינור החדש במגע מלא/אופקי עם השטיח",
        "M11-scoring2": "הצינור החדש באופן חלקי באזור המטרה שלו",
        "M11-scoring3": "הצינור החדש לגמרי בתוך אזור המטרה שלו",
        "M11-error": "יש לבחור אחת מבין שתי האפשרויות",
        "M12-name": "M12 - בוצה",
        "M12-desc": "הזיזו את הבוצה כך שהיא תיגע בעץ הגלוי של אחד מבין ששת האדניות המצוירות.",
        "M12-scoring": "הבוצה נוגעת בעץ הגלוי של דופן אדנית מצויירת",
        "M13-name": "M13 - פרח",
        "M13-desc": "גרמו לפרח לעלות באופן ברור, כך שישאר שם אך ורק בעקבות מים גדולים בכד החום.",
        "M13-scoring1": "הפרח עלה (רק בשל דגם מים גדולים בתוך הכד החום)",
        "M13-scoring2": "לפחות גשם אחד בחלק הסגול, נוגע בדגם הפרח בלבד",
        "M14-name": "M14 - באר מים",
        "M14-desc": "הזיזו את באר המים כך שתהיה במגע עם השטיח.",
        "M14-scoring1": "באר המים במגע עם השטיח באופן חלקי באזור המטרה",
        "M14-scoring2": "באר המים במגע עם השטיח לגמרי בתוך אזור המטרה",
        "M15-name": "M15 - אש",
        "M15-desc": "גרמו לאש ליפול רק על ידי כך שהכבאית הפעילה כוח ישיר על מנוף הבית.",
        "M15-scoring": "האש נפלה ונשארה שם (רק מפני שהכבאית הפעילה כוח ישיר על מנוף הבית)",
        "M16-name": "M16 - איסוף מים",
        "M16-desc": "הזיזו או תפסו מים גדולים ו/או מי גשם (אחד לכל היותר) כך שהוא נוגע בשטיח בתוך המטרה, *מבלי שהמטרה תגיע לקו התיחום הלבן. למים מותר לגעת במטרה או במים אחרים, אך לא להיתמך או לגעת בשום דבר אחר. כל מים מקנה נקודות בנפרד",
        "M16-scoring1": "המטרה של המים מזרחית לקו התיחום הלבן (ומעולם לא הגיעה לקו התיחום הלבן)",
        "M16-scoring2": "לפחות גשם אחד נוגע בשטיח בתוך המטרה של המים",
        "M16-scoring3": "מים גדולים נוגעים בשטיח בתוך המטרה של המים",
        "M16-scoring4": "לפחות זוג אחד של מים גדולים בערימה בתוך המטרה של המים",
        "M17-name": "M17 - מערכת טיהור מים - SLINGSHOT ‮",
        "M17-desc": "הזיזו את ה SLINGSHOT כך שהוא לגמרי בתוך אזור המטרה שלו.",
        "M17-scoring1": "ה-SLINGSHOT לגמרי בתוך אזור המטרה שלו",
        "M17-scoring2": "גשם ומים עכורים לגמרי בתוך אזור המטרה של ה- SLINGSHOT",
        "M18-name": "M18 - ברז",
        "M18-desc": "גרמו למפלס המים להיות בבירור יותר כחול מלבן, במבט מעל הכוס, *רק על ידי סיבוב ידית הברז.",
        "M18-scoring": "מפלס המים כחול יותר מאשר לבן (רק על ידי סיבוב ידית הברז)",
        "penalties-name": "עונשין",
        "penalties-desc": "עונשין שניתן",
        "penalties-scoring": "דיסקיות עונשין בתוך אזור המשולש הלבן"
    },
    "rtl": true
}
