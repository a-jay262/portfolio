import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";
import d365Icon from '@/components/custom/d365.png';
import cpp from '@/assets/tech/languages/cpp.png';
import mongodb from '@/assets/tech/databases/mongodb.png';
import python from '@/assets/tech/languages/python.png';
import node from '@/assets/tech/tools/node.png';
import compose from '@/assets/tech/mobile/compose.png';
import git from '@/assets/tech/tools/git.png';
import bc from '@/assets/tech/languages/bc.png';
import react from '@/assets/tech/mobile/react.png';
import user from "@/assets/icon/user.png";
import job from "@/assets/icon/job.png";
import experience from "@/assets/icon/experience.png";
import language from "@/assets/icon/language.png";
import pakistan from "@/assets/icon/pakistan.png";
import dynasol from "@/assets/icon/logo/dynasol.png";
import havenir from "@/assets/icon/logo/havenir.png";
import flutter from "@/assets/tech/mobile/flutter.png";
import dart from "@/assets/tech/languages/dart.png";
import csharp from "@/assets/tech/languages/csharp.png";
import javascript from "@/assets/tech/languages/javascript.png";
import typescript from "@/assets/tech/languages/typescript.png";
import kotlin from "@/assets/tech/languages/kotlin.png";
import php from "@/assets/tech/languages/php.png";
import firebase from "@/assets/tech/databases/firebase.png";
import express from "@/assets/tech/backend/express.png";
import nest from "@/assets/tech/backend/nest.png";
import mongoose from "@/assets/tech/backend/mongoose.png";
import socketio from "@/assets/tech/backend/socketio.png";
import sql from "@/assets/tech/databases/sql.png";
import androidstudio from '@/assets/tech/tools/androidstudio.png';
import vscode from '@/assets/tech/tools/vscode.png';
import docker from '@/assets/tech/tools/docker.png';
import npm from '@/assets/tech/tools/npm.png';
import yarn from '@/assets/tech/tools/yarn.png';
import figma from '@/assets/tech/tools/figma.png';
import jira from '@/assets/tech/tools/jira.png';
import nextjs from '@/assets/tech/backend/nextjs.png';
import mui from '@/assets/tech/frontend/mui.png';
import tailwind from '@/assets/tech/frontend/tailwind.png';
import bootstrap from '@/assets/tech/frontend/bootstrap.png';
import opencv from '@/assets/tech/ML/opencv.png';
import numpy from '@/assets/tech/ML/numpy.png';
import pandas from '@/assets/tech/ML/pandas.png';
import matplotlib from '@/assets/tech/ML/matplotlib.png';
import expensetracker from '@/assets/icon/logo/expensetracker.png';
import sphynix from '@/assets/icon/logo/sphynix.png';



class DynamicValues {
    static initialInformation: IInitialInformation = {
        name: "Alishba Javed",
        occupation: "Software Engineer",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "Email"
            // link: "mailto:alishbajaved205@gmail.com"
        }
        // {
        //     name: "Phone",
        //     link: "tel:032091****"
        // }
    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Alishba Javed",
                    logo: user,
                },
                {
                    title: "Current Role",
                    desc: "Software Engineer at Dynasol Technologies",
                    logo: job,
                },
                {
                    title: "Previous Experience",
                    desc: "Havenir Solutions",
                    logo: experience,
                },
                {
                    title: "Languages",
                    desc: "English, Urdu",
                    logo: language,
                },
                {
                    title: "Nationality",
                    desc: "Pakistani",
                    logo: pakistan,
                }
                // {
                //     title: "Resume",
                //     desc: "Click the link icon to view or download",
                //     link: "https://docs.google.com/document/d/1ouctQJ73iSoE-JjMJw_peOk_twx2BbEtt4GI9OkeAiw/edit?usp=sharing",
                //     logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png",
                // },
            ],
        },
        {
            text: "Experience",
            arr: [
                {
                    title: "Dynasol Technologies",
                    desc: "Developed and released two production-level apps linked with Microsoft Business Central: a Contact Scanner (live on Play Store) and an Expense Tracker (upcoming). Also built Business Central extensions for workflow automation.",
                    logo: dynasol,
                },
                {
                    title: "Havenir Solutions",
                    desc: "Worked on frontend and backend development in React Native and MERN stack. Developed a full-stack Recipe app and integrated it with an Expense Tracker, handling API integration and database management.",
                    logo: havenir,
                }

            ],
        },
    ];

    static skills: Array<ITitledListItem> = [
  {
    text: "Programming / Markup Languages",
    arr: [

      { title: 'C++', logo: cpp },
      { title: 'C#', logo: csharp },
      { title: 'Python', logo: python },
      { title: 'JavaScript', logo: javascript },
      { title: 'TypeScript', logo: typescript },
      { title: 'Kotlin', logo: kotlin },
      { title: 'PHP', logo: php },
      { title: 'Dart', logo: dart },
      { title: 'AL (Business Central)', logo: bc},
    ]
  },
  {
    text: "Databases",
    arr: [
      { title: 'MongoDB', logo: mongodb },
      { title: 'SQL', logo: sql },
    ]
  },
  {
    text: "UI / Mobile Development",
    arr: [
      { title: 'React Native', logo: react },
      { title: 'Flutter', logo: flutter },
      { title: 'Compose UI (Kotlin)', logo: compose}
    ]
  },
  {
    text: "Libraries / Frameworks / Backend",
    arr: [
      { title: 'NodeJS', logo: node },
      { title: 'ExpressJS', logo: express },
      { title: 'NestJS', logo: nest },
      { title: 'Firebase', logo: firebase },
      { title: 'Mongoose', logo: mongoose },
      { title: 'Socket.io', logo: socketio },
      { title: 'ReactJS', logo: react },
      { title: 'NextJS', logo: nextjs },
    ]
  },
  {
    text: "UI Component Libraries",
    arr: [
      { title: 'Material-UI', logo: mui },
      { title: 'Tailwind CSS', logo: tailwind },
      { title: 'Bootstrap', logo: bootstrap },
    ]
  },
  {
    text: "Data / Machine Learning",
    arr: [
      { title: 'OpenCV', logo: opencv},
      { title: 'NumPy', logo: numpy },
      { title: 'Pandas', logo: pandas },
      { title: 'Matplotlib', logo: matplotlib },
    ]
  },
  {
    text: "Tools / IDEs / Others",
    arr: [
      { title: 'Android Studio', logo: androidstudio },
      { title: 'VS Code', logo: vscode },
      { title: 'Git', logo: git },
      { title: 'Docker', logo: docker },
      { title: 'Jira', logo: jira },
      { title: 'Figma', logo: figma },
      { title: 'npm', logo: npm },
      { title: 'Yarn', logo: yarn },
    ]
  },
];


    static projects: Array<ITitledListItem> = [
        {
            text: "Android Apps",
            arr: [
                {
                    title: "BC Contact Scanner",
                    logo: d365Icon, // replace with actual icon
                    desc: "Sync, scan, and manage your Dynamics 365 Business Central contacts on Android. Capture business cards, update CRM contacts, call or email directly, and optionally save to your phone — all with Azure-secured integration. Developed by Dynasol Technologies LLC for efficient Business Central CRM management.",
                    link: "https://play.google.com/store/apps/details?id=com.dynasol.tech.bc.contact.scanner",
                },
                {
                    title: "BC Expense Management App",
                    logo: expensetracker,
                    desc: "A full-featured expense management app for BC employees. Allows submission of expenses and admin approval to post to general journal. Not live yet.",
                    link: "",
                },
                // {
                //     title: "Sphinx",
                //     logo: sphynix,
                //     desc: "A React Native frontend project for a client — a bus routes app connecting drivers and students, featuring real-time pinned locations.",
                //     link: "https://expo.dev/accounts/aleeyjay/projects/frontend-mobile-app/builds/07acc8ed-4a1f-45cf-bfb0-bf1ec2649e1a",
                // }
            ]
        }
        // {
        //     text: "Web Apps",
        //     arr: [
        //         {
        //             title: "Duas",
        //             link: "https://p32929.github.io/duas/",
        //             logo: "https://p32929.github.io/duas/favicon.png",
        //             desc: "A collection of duas I try to regularly recite - created using flutter web",
        //         },
        //         {
        //             title: "Sha1ToMd5",
        //             link: "https://p32929.github.io/Sha1ToMd5/",
        //             logo: "https://github.com/user-attachments/assets/6d63227d-1b72-4c22-9923-b2a4c96d4b68",
        //             desc: "A simple utility tool to convert Google Play Release APK Sha1 value to MD5 for Facebook login to work. ",
        //         },
        //         {
        //             title: "dobd.xyz",
        //             link: "https://admui.vercel.app",
        //             logo: "https://admui.vercel.app/android-chrome-512x512.png",
        //             desc: "Best online downloader for YouTube, Facebook, Instagram, Tiktok and more",
        //         },
        //         {
        //             title: "s3cr3tm3",
        //             link: "https://s3cr3tm3.netlify.app/",
        //             logo: "https://user-images.githubusercontent.com/6418354/173877444-59dbdd3d-1b5d-4b92-ad53-30fada9362d2.png",
        //             desc: "Share secret messages secretely",
        //         },
        //         {
        //             title: 'OrderZesty',
        //             logo: 'https://orderzesty.com/wp-content/uploads/2021/10/Zesty-icon@3x-300x300.png',
        //             desc: 'Personal chef service delivering fresh signature meals.',
        //             link: 'https://orderzesty.com/',
        //         },
        //         {
        //             title: 'DramaDB',
        //             logo: 'https://dramadb.vercel.app/apple-icon.png',
        //             desc: 'A serverless hobby project that lets you filter Asian drama by country, genre, status, year and popularity',
        //             link: 'https://dramadb.vercel.app/'
        //         },
        //         {
        //             title: 'Sh0Sh0',
        //             logo: 'https://github.com/3r4y/react-portfolio-template/assets/6418354/a159e1d8-fabc-4f58-9391-0c3be4d14d7e',
        //             desc: 'A beautifully created Absolutely FREE URL shortener for everyone made using React Shadcn Firebase. ',
        //             link: 'https://sh0sh0.netlify.app/',
        //         },
        //         {
        //             title: 'Github Trending',
        //             logo: 'https://github.com/user-attachments/assets/d93d3ea0-769b-42f1-8107-403bb9760ccd',
        //             desc: 'A simple webpage that scrapes github LIVE in front of your eyes and gets the list of trending repositories',
        //             link: 'http://tiny.cc/ghtre',
        //         },
        //         // {
        //         //     title: "TheRealWorldFree",
        //         //     logo: "https://framerusercontent.com/images/Tttp7tCHSlFL4GgIF783y9wn7vQ.webp",
        //         //     desc: "Enjoy the real world for free :)",
        //         //     link: "https://trwfree.vercel.app/"
        //         // },
        //         {
        //             title: "BreakingMars",
        //             logo: "https://github.com/p32929/portfolio-v2/assets/6418354/8b6c5a1c-fc31-44a8-822e-73814ff57ac3",
        //             desc: '#1 Leading & Effortless Prospect Perceiving Platform',
        //             link: "https://web.archive.org/web/20220413085335/https://www.breakingmars.com/"
        //         },
        //         {
        //             title: "Voomnow",
        //             desc: "Next generation audio recorder",
        //             logo: "https://user-images.githubusercontent.com/6418354/173876916-e27cb77f-49f1-4190-be54-4c1ddaa2973d.svg",
        //             link: "https://web.archive.org/web/20220326215025/https://www.voomnow.com/"
        //         },
        //         {
        //             title: 'Shajao',
        //             logo: 'https://sdn.signalhire.co/storage/company/1dfc/9704/f9d3/ff49/cdce/31bb/c4d7/0628.webp',
        //             desc: 'Framing Happiness',
        //             link: "https://web.archive.org/web/20191222090655/https://shajao.com/"
        //         },
        //         {
        //             title: 'ChargeOnSite',
        //             logo: 'https://static.wixstatic.com/media/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png',
        //             desc: 'Charge OnSite',
        //             link: "https://www.chargeonsite.com/",
        //         },
        //         {
        //             title: 'MathFinity',
        //             logo: 'https://p32929.github.io/mathfinity/icons/Icon-192.png',
        //             desc: 'Simple, infinite & fun math game for everyone',
        //             link: "https://p32929.github.io/mathfinity/",
        //         },
        //     ]
        // },
        // {
        //     text: "Android Apps",
        //     arr: [
        //         {
        //             title: "Al Quran by Quran Touch",
        //             link: "https://www.apkmonk.com/app/com.qurantouch.qurantouchhd.app/",
        //             logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
        //             desc: "The most comprehensive Muslim App!"
        //         },
        //         {
        //             title: 'Thamao',
        //             logo: 'https://cdn.apkmonk.com/logos/com.thamao_150x150.png',
        //             desc: 'বাংলাদেশে স্মার্টফোনের চুরি এবার অসম্ভব',
        //             link: 'https://www.apkmonk.com/app/com.thamao/',
        //         },
        //         {
        //             title: 'Desplash',
        //             logo: 'https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180',
        //             desc: 'Automatic Free High Quality Wallpapers powered by Unsplash.com',
        //             link: 'https://www.xda-developers.com/desplash-wallpaper-app-unsplash/',
        //         },
        //         {
        //             title: 'The Great Postman',
        //             logo: 'https://lh3.googleusercontent.com/ni-lk3b2nTMZyC7r1wYBW6cm9eYqGAN-t6fXV-kD0lSyw1lO3kenC1We71fZjSryvFII=s180',
        //             desc: 'Powerful, Lightweight REST API client for Android',
        //             link: 'https://apkcombo.com/es/rest-api-client-the-great-postman/p32929.greatpostman/'
        //         },
        //         {
        //             title: 'Sleepy - Addiction Remover',
        //             logo: 'https://user-images.githubusercontent.com/6418354/192146268-29e1bac2-e477-4010-ae03-96adecbf07e6.png',
        //             desc: 'The one and only EFFECTIVE addiction remover on Google Play store',
        //             link: 'https://apkcombo.com/es/sleepy-phone-addiction-controller/p32929.lazyphone/'
        //         },
        //         {
        //             title: 'Best CGPA Calculator',
        //             logo: 'https://user-images.githubusercontent.com/6418354/192146303-6e04c9ac-ffb2-4931-bb10-ef54ff7af382.png',
        //             desc: 'A simple yet effective CGPA Calculator for University students',
        //             link: 'https://apkcombo.com/es/cgpa-calculator-for-update-see-the-description/p32929.cgpa_calculator/',

        //         },
        //         {
        //             title: 'Buy Sell BD',
        //             logo: 'https://image.winudf.com/v2/image1/cDMyOTI5LmJ1eXNlbGxiZF9pY29uXzE1NTkyOTQ5NjVfMDYz/icon.png?w=170&fakeurl=1',
        //             desc: 'A better & more reliable alternative for Bikroy.com - A marketplace app for buying-selling new/used goods',
        //             link: 'https://apkcombo.com/es/buy-sell-bd-buy-sell-everything-easily-in-bd/p32929.buysellbd/'
        //         },
        //         {
        //             title: 'ExIn',
        //             logo: 'https://lh3.googleusercontent.com/X8mRJd7JajvDXoW7NaluKt2IvC3osH6czkTPoWeSYJ96U2LWLKT4xiFgvNouwf-UvEk=s180',
        //             desc: 'A Simple & user friendly income-expense tracker ',
        //             link: "https://apkcombo.com/es/exin-discontinued/p32929.exin/",
        //         },
        //         {
        //             title: 'I am free',
        //             logo: 'https://image.winudf.com/v2/image1/cDMyOTI5LmltZnJlZV9pY29uXzE1NzY4ODAwNzVfMDU3/icon.png?w=170&fakeurl=1',
        //             desc: 'বেকার মুক্ত বাংলাদেশ গড়ার লক্ষ্যে - I am FREE',
        //             link: 'https://apkcombo.com/es/i-am-free/p32929.imfree/'
        //         },
        //         {
        //             title: 'Awesome NCTB',
        //             logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5uY3RiX2ljb25fMTU3NjU3MjcwNF8wMjI/icon.png?fakeurl=1',
        //             desc: 'Download NCTB Books easily and Free',
        //             link: 'https://apkcombo.com/es/awesome-nctb/org.richit.nctb/'
        //         },
        //         {
        //             title: 'বৃক্ষ ( Brikkho )',
        //             logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5icmlra2hvX2ljb25fMTU3MDEyMTU0Ml8wODA/icon.png?fakeurl=1',
        //             desc: 'Learn about trees in your fingertips',
        //             link: 'https://apkcombo.com/es/%E0%A6%AC%E0%A7%83%E0%A6%95%E0%A7%8D%E0%A6%B7-brikkho/org.richit.brikkho/'
        //         },
        //         {
        //             title: 'IQQuiz',
        //             logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5pcXF1aXphcHBfaWNvbl8xNTcxMDE0NzcxXzA2Mg/icon.png?fakeurl=1',
        //             desc: 'A simple IQ game',
        //             link: 'https://apkcombo.com/es/iqquiz/org.richit.iqquizapp/'
        //         },
        //         {
        //             title: 'BirdsLover',
        //             logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5iaXJkc2xvdmVyX2ljb25fMTU3MjAwNDIxNl8wOTE/icon.png?fakeurl=1',
        //             desc: 'Learn about birds in your fingertips',
        //             link: 'https://apkcombo.com/es/birdslover/org.richit.birdslover/'
        //         },
        //         {
        //             title: 'Animal Lover',
        //             logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5hbmltYWxfaWNvbl8xNTc3MjkyMzIzXzAyMw/icon.png?fakeurl=1',
        //             desc: 'Learn about birds in your fingertips',
        //             link: 'https://apkcombo.com/es/animal-lover/org.richit.animal/'
        //         },
        //         {
        //             title: 'Jibanananda Recitation (Abritti)',
        //             logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5qaWJvbmFuZG9rb2JpdGFzb21vZ3JvX2ljb25fMTU3MDEwNDExNF8wNDc/icon.png?fakeurl=1',
        //             desc: '50+ poems of Jibanananda Das with audio recitation',
        //             link: 'https://apkcombo.com/es/jibanananda-recitation-abritti/org.richit.jibonandokobitasomogro/'
        //         },
        //         {
        //             title: 'MathLover (Simple, Infinite, Math game)',
        //             logo: 'https://lh3.googleusercontent.com/GaisH_-MeK2c_ct4kp5qbqxbJPE-q4isTdZswR4CocgB8sLNCFk4beXdlmaaFuveKUwd',
        //             desc: 'MathLover is a simple, infinite mathematical problem solving game for everyone.',
        //             link: 'https://apkcombo.com/es/mathlover-simple-infinite-math-game/org.richit.mathblitz/',
        //         },
        //         {
        //             title: 'Hospitals BD',
        //             logo: 'https://lh3.googleusercontent.com/MMfY8vG1YfAFh1w6iHEp8NXCwl-NSCUDmfPkUAWmqhSGfO3JR7vBvw_XZzV8JxrDag',
        //             desc: 'Get nearest Hospital Information in Bangladesh in your fingertips',
        //             link: 'https://apkcombo.com/es/hospitals-bd/org.richit.contacthospitals/'
        //         },
        //         {
        //             title: 'BirthdayBot',
        //             logo: `https://cdn.iconscout.com/icon/premium/png-256-thumb/gift-2990371-2484427.png`,
        //             desc: 'Birthday wishing apps, made for individual people...',
        //             link: 'https://github.com/p32929/my_android_apps/releases/tag/all'
        //         },
        //     ]
        // },
        // {
        //     text: "Desktop Apps",
        //     arr: [
        //         {
        //             title: 'PotatoTimer',
        //             logo: 'https://raw.githubusercontent.com/p32929/PotatoTimer/master/resources/icon.ico',
        //             desc: 'A pomotodo app that forces you to take a break - created using ElectronJS',
        //             link: 'https://github.com/p32929/Electron-Pomotodo'
        //         },
        //         {
        //             title: 'Pomota',
        //             logo: 'https://github.com/p32929/pomota/blob/master/src-tauri/icons/128x128.png?raw=true',
        //             desc: 'A simple user-friendly cross-platform tauri based pomodoro timer app that forces you to take a break',
        //             link: 'https://github.com/p32929/pomota',
        //         },
        //         {
        //             title: 'google calender widget',
        //             logo: 'https://duckduckgo.com/i/e2d8001c.png',
        //             desc: 'An unofficial google calendar desktop widget for Windows, Mac and Linux ',
        //             link: 'https://github.com/p32929/google-calender-widget',
        //         },
        //         {
        //             title: 'MacJuiceMonitor',
        //             logo: 'https://github.com/user-attachments/assets/21b4d0ac-1734-4d42-9da4-e873628a022a',
        //             desc: 'Your essential tool for keeping track of all your Bluetooth-connected devices\' battery levels, conveniently located in the macOS menu bar',
        //             link: 'https://github.com/p32929/mac-juice-monitor',
        //         },

        //     ]
        // },
        // {
        //     text: "Command Line Interfaces ( CLIs )",
        //     arr: [
        //         {
        //             title: 'Shortcut Virus Remover',
        //             logo: 'https://cdn-icons-png.flaticon.com/128/3223/3223766.png',
        //             desc: 'Shortcut virus remover script for Windows',
        //             link: 'https://github.com/p32929/Shortcut-Virus-Remover',

        //         },
        //         {
        //             title: 'Fay',
        //             logo: 'https://crates.io/assets/cargo.png',
        //             desc: 'A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands',
        //             link: 'https://crates.io/crates/fay'
        //         },
        //         {
        //             title: 'SIIN',
        //             logo: 'https://crates.io/assets/cargo.png',
        //             desc: 'A batch installer that downloads and installs a list of apps, written in Rust ( Kinda like Ninite )',
        //             link: 'https://crates.io/crates/siin'
        //         },

        //     ]
        // },
        // {
        //     text: "Automations",
        //     arr: [
        //         {
        //             title: 'Dingtone Bot',
        //             logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf',
        //             desc: 'A bot made using Python and UIAutomator2 to automate watching ads on certain apps to get credits',
        //             link: 'https://drive.google.com/file/d/159D_tco3qkpgh2a3CWz-f0ixPEpeUN8V/view?usp=sharing'
        //         },
        //         {
        //             title: 'Indeed-Linkedin bot',
        //             logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf',
        //             desc: 'An automation bot created using playwright to automate applying jobs on Indeed and Linkedin',
        //             link: 'https://drive.google.com/file/d/10Xc4Y0Z5KXxKhb9StF3bQfivYHHeNZsa/view?usp=sharing',
        //         }
        //     ]
        // },
    ]

    static contacts: Array<ITitledListItem> = [
        {
            text: "Contact me",
            arr: [
                // {
                //     title: 'WhatsApp ( Recommended )',
                //     logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                //     link: 'https://api.whatsapp.com/send?phone=923209174561',
                //     desc: "+92 320 917***",
                // },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'alishbajaved205@gmail.com',
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png',
                    link: 'https://github.com/a-jay262/'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/alishba-javed-011085265/'
                },
                // {
                //     title: 'Facebook',
                //     logo: 'https://user-images.githubusercontent.com/6418354/155840898-9e2327aa-a280-45e3-8266-8268242abda4.png',
                //     link: 'https://www.facebook.com/profile.php?id=100080466110561'
                // },
                // {
                //     title: 'Instagram',
                //     logo: 'https://user-images.githubusercontent.com/6418354/155841023-0b842621-56a3-42ec-81f1-3944034b09c7.png',
                //     link: 'https://www.instagram.com/imaleey._/'
                // },
            ]
        },
    ]
}

// 
// Dont change anything below this line
// 
export const combinedInformation: ICombinedInformation = {
    initialInformation: DynamicValues.initialInformation,
    directMessageItems: DynamicValues.directMessageItems,
    routes: [
        {
            name: "About",
            items: DynamicValues.about,
        },
        {
            name: "Skills",
            items: DynamicValues.skills,
        },
        {
            name: "Projects",
            items: DynamicValues.projects,
        },
        {
            name: "Contact",
            items: DynamicValues.contacts,
        },
    ]
}