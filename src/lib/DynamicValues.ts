import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";
import d365Icon from '@/components/custom/d365.png';

class DynamicValues {
    static initialInformation: IInitialInformation = {
        name: "Alishba Javed",
        occupation: "Software Engineer",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "Email",
            link: "mailto:alishbajaved205@gmail.com"
        },
        {
            name: "Phone",
            link: "tel:03209174561"
        }
    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Alishba Javed",
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
                },
                {
                    title: "Current Role",
                    desc: "Software Engineer at Dynasol Technologies",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png",
                },
                {
                    title: "Previous Experience",
                    desc: "Havenir Solutions",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png",
                },
                {
                    title: "Languages",
                    desc: "English, Urdu",
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png",
                },
                {
                    title: "Nationality",
                    desc: "Pakistani",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
                },
                {
                    title: "Resume",
                    desc: "Click the link icon to view or download",
                    link: "https://docs.google.com/document/d/1ouctQJ73iSoE-JjMJw_peOk_twx2BbEtt4GI9OkeAiw/edit?usp=sharing",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png",
                },
            ],
        },
        {
            text: "Experience",
            arr: [
                {
                    title: "Dynasol Technologies",
                    desc: "Developed and released two production-level apps linked with Microsoft Business Central: a Contact Scanner (live on Play Store) and an Expense Tracker (upcoming). Also built Business Central extensions for workflow automation.",
                    logo: "https://dynasol.tech/wp-content/uploads/2021/03/hd_big.png",
                },
                {
                    title: "Havenir Solutions",
                    desc: "Worked on frontend and backend development in React Native and MERN stack. Developed a full-stack Recipe app and integrated it with an Expense Tracker, handling API integration and database management.",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHF8WTyUzN8fteZYxBFDcJ-NVSCs7b-chbQ&s",
                }

            ],
        },
    ];

    static skills: Array<ITitledListItem> = [
  {
    text: "Programming / Markup Languages",
    arr: [

      { title: 'C++', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADuCAMAAAB24dnhAAAA3lBMVEX///9lmtIARIIAWZwAQoEATpcASpVfl9FYk89hmNFmm9P4+/1alNDz9vkAOn0ALHcAL3gAVpsAP38APH4AM3oAN3wAUZgAKnbf5u+0xttfh7TQ3Oje6PShv+Ll7fdtn9TO3e+5z+kTYqHC1evq8fh6p9eErdqSrMoOSoaAlbSOs9ysxuXG0+MvWo+Mn7vJ2u4UVZG/ytk9Y5SgsMZmgadOhr+Yud8APZA2Z55QfrAaUIooVoyot8tVdJ6Upb9xiqxCfbeBoMMnZ6SJpsdGf7kAOI5AcadhfaRojbhMbZpdTXNuAAANKklEQVR4nNWcbVviyBKGAaNJOgFCIIqDENTggAKO4mHXF3Rmdo+e+f9/6IQEhIS8VHV1Eny+zXptk5vu6q6nq0KplIPOzudXNmP21fz8LI/Py15OV1ZktexJlRW96xT9RGRpXUUuByQrXa3op6LpUg8heVj6edHPRdCZre8iLaXbXzW2nCtFjWZyg0u5+pKhdROP5GN1i35CtC7liGAKhZZ8WfRTouQGU+I0rSbrK4VW9VpJJ/KlXFeLflqYbsInU+IaVG6Kfl6Abssx23gslnpb9DOnqDdI3vOipCqDfQ6t6hyP5GPtb2idR+VEMO1raPUZMpiC0lm/aIId8QRTUG5o9YqmCEjjDKYw1nyPTAkhmILaH1PSjzMYPNqP0EoyGDzaB1PSFYvkYxVrSiLdOl1FhlasW6erKFMiOpiCKia0Uty6CKy8Qwvg1unK1+/D3DpdOfp9hFunKydTgnLrdOVhStBunS49Y79PNxg8ytTv87p1EVjzjEJLmMHgUTaZE9Gt0yXelBQTTEEJ9vtaBgaDRyL9fqHBFJSo0BLq1unS7T4ZKVuDwSO6KdmTYApKJdX3M3LrdPGHVoZunS4+U1Ldu2AKiie0MnfrdGH9fi5unS6M38/LrdMF9vvC3bqqyltSBX9fIL8v0q2rsq4osn01796ce7rpzq9sWdF1WRxaut8X5taXPPLVze1ZxPdYPbvsDlw0UWTJfl+UwVBlpTy/Tdlxe5dzVdCqSPD7YsqB7henDM6BR0jvfKAIma84vy/GYMguEeo6wTm3hcxXVObkiMiJVF3vcpjTs7ku4gzR7dD66ItYebrNm2Zq50wEltIPMpEHVBWbdOd4KeLE36bqkZnco518jXor4L5K2az+MvU7ElR0oe9Vank91pw6lLBOc/dUIT6KPPdHOiMOpNsCr+OozpQpHW+cAWkUVXSpheLkmP2fg9/ed0OaKFnkNPnqMd5wYPJF4+Bo7I5xRdkllGvRSEvxmR9W/t04ODhoPLqxSZgoVcmo0nyJX4LM/rlEcnWklfr8ganKmTXo9ZBp7jKYVkwHh6elLn+LqJ1hjVmzMc/F1Is10sHB8a/SFTfTIDukpQZgKlZ+Pz7YyA0qm5NJz2SL2NY1LDAY+7fRONjWRWlvmdxMB0DF2CaYPsUJlQcThIqpv3eQeKHyYUpdgYz9bEQw8UHJV/kwuZlBwm7B7H93Vx43lGrnxZSwB7on00U0EheUqubYPa6xGKbIYOKHUnJt9Hei0ri4YOKGUnJ+3Wn3/mQ7JxIDpefeX90NboGMKbHBxAmV5yax1mA7uV0ZDKFQSgE9yFthlRJMfFDFdMFfrqhSg4kLSs3t1A3Kd+eeW4cIB1XE4luqqsCCiQdKL+zFwXOZ/YQi4aBUxv1QmtM7O+s5/KkILJg4oIJFBah6l92BrqykD7qXHAlJJ2BtRUKpHP69P1eV4AX5shbc7aMGqf7vCDFNOCgF2w1UvZEji9WqrMg38Eub70eoaUJBYbdzZ55QznW5gE3ZpweHSCQMFHKidn6FJywZ0lrUfkeuPBwULqL6kOYmWe4nj6JhgwkLhdr6rmHXxmryVfwMHUxIKMwZ5cBvV+VwRX2j8QU+mJBQiEz2DHU7HxOqvUe+lYeCUsDJALJ7QY1y0tovAhIYSgVf9OG7F3apXo45gwkHpfeBTDx1ydAe1PnNHUw4KBnI5HB1eGzfTznfSCsPAbUu5Kcq5pYuRWr5M2L/oSNBoaCr75qzgievQva0QQsmFBRw77vlrh97xePO+5EIJCAUMJfVCP2IuoY2GEQoGXbyEtqBGPt2KGTlwaFgCXrkrTcMCXj1JRRKB03UNe/iS6xgZAYFch28E8XK72KRYFAyqCbA15CxW1vPCUoHNevwdM5AgunIV3TqdLz6a3AQCBRon7jlgIIEU6PX9jSOojr+7v/ReQyMA4KCHL34bYKxn8fpK6+xGr8XdTAfnq7++g0NBcpmsRMVX1vPBwqy+SEtB2PxtfVcoEAG8Ry19yFOpoygQDs6JqRg5cCMoSCZnw2GQuZEa6i2WCjQMQXdJwC19fUD+zpaQ/3l/9tPexv+P/5aQz0e+f8BDgVonKgC9wl4MB05mq/1R6z+6Z1Xx99LkX8s+V8YBKqfDgV7W2TTvAuAiqkfrKGiJRQKcoGJC6YvAcVsaG3960Cx8t9DBNJXgGLs3ZQqlR9fCypxo3BzoqFZcSUN4VhZQ9G2dMbU52ZlJQm8Bo96VV+fH+FJO/Wg/tFW/wz8sYqAgmQUscvPDablyvuU9HQBozpc+b/VB7T/u20WV+Zw6/D15f+vkDQJ0ucSkyYx+10yKyFhQqvYhDYqS3dPpuEOEi609s56bAdTGAu4BvfNJDL2d1OKZlpi/QBiFWrnQzPlpnm7wcQTWllBKZDelEBQxQQTT2itoRzRUJArsu035pg6iQmmEBZge290fJ1GX5Gt/oq/IoNdZn7OlJsTJQRTCCt9sg6zucxEXTsz9lhJXXnbQp1aMAkuELhp3pMJnabVZGFOLYFQCgRquVWw8gS88jZU4MxJLBSw6OYbDB79yL/oBsr+SqXvTVQwBWfrUUxhHg4F7PXTapzz5MrSeJv7eKGgLQd3Bi+TsTxF+dowuaGgzSEPNT6m2sfqW+FomOWGArfxPHFFlTn8HADf2swNBazPuzugxRFWUqu9GUFEj4jo1rhOHc9U7wSHIHfzCG9ivDvBMp3chceg9l2B203BHf/jOmoFSvUdphK1Qw4KBWxPWqpjIXYL0+pEDkLqZcykhfvZgjJZz7Et3ISuU3CzPXirWOoNtgSl+lvSKNz9wRm9FjGWAJNlSePkUXg7uTN7gWV6kuLoa/Vp+ih8PfeIV42Q74RVR/X4k1iyTkaw/ZTn7YhMXwp7rRhRibvUNIav8NcT8e+xYN5J5Hh9rzMa1q3mxjpKZtOqD0fR23icsnx9D1TT2ZVzOvpTMVaSFtM7jneF27g+RwQUY+88UL6qTrvtEH48CnU5A4ZaXn21APtVNppamDsnIJR39VWp1Nvpn5+F2gbqKg0Gxcp+BcOcFAN175eMoVdpECi2ufpqvRbBNGutd0/YZKVDfdbWPRWxANvG5kgArcFUqFA5UHrKH+rZDDwAGSpcW3dTtoe8md5CuXF6aCVCMfvd3DF8xku+TC8Rl4kpazABKhhMG9VxSQ5R7ShrlhJa8VCxtXWpluOPolRjqiiJazAOKqm2bua4WTzH33fE1/ejoZj9mFRbb97nxXSf6DTj1mAUVHo5sPYnH6ZF8t18XGhFQEFq69YiD6aP1IuO6FNrBwpYW8+DagG6aYuYrNBPtsJr69mvwD/Q28Mw1kXgx3VXBgOm5iTTH2TUJuBaVyi0Go+lm037DbK2blYyPK+cIahnZkUVOLWOf23abzCNKquxjJTLSH6NDWydazNZh3frnxZ3TyZco4qnk4zs1Su2HrS9Bo80/yUhxmS+wmZrkUFgaYtW+idHYXlrsPGt5LUfrt06h5qm8PR2bCLCKUDlhdaR90AD/kaV5UgnI7FMoxP+h1mGln+Pd9biblTxZA0F7hfjCmfXwkqSsVo5b7RxKlL9QdBv3Fc/cLXVXdU+K17praEpaoq5ZZoanNH0qa2OjDb6VAhLsiSyy581eZowgjK2Lrs61FlfYg1JWDOJjhTqyOgQNwsfy3zljC1nWqMjVcxW6HhxJlwHXgirZjxwHFvjD4O4VXlqTXZz0ZeaiJGXRULUJW57WjHoq8Td9qxZ1PDaqC5idHe6nqbA+RpPh5EFVLTM+ltcvtb+Q94GPblctY9ZMpjWmS2sFm92Fvo840/S6rgbCghYT6ZlWJO32bi98w1q7bvZ26TVsgjJ2bbcfTeqvWlbs5aI0PI/TWpaLaMlTRYPo+mrq+nbw+LZdP+TJWaGPNVakcEUVPVNSGhtSTKbzZqnZlPQ7HzKDSbYMdK+FxNa2Usy7uFb7V1FVGhlKktKC6agXuvU3DJzNevoLLr6cCI4tMTKPOHyO51Ja2/XoNSa8F4jnDbBLZb5ympSHMF0H0OrCekUTJLzIfrUokqqL+g3wx0RpkScWs9i7uRemsIyJ6pqNWG9AYJMCVlmfSTyQthZFJ85ScZCdA/R+Kng0Go9ZVFjmQnx+5yKcet0FRdaCW6dLlF+H6cUt06XOL8PRkp363QJ9PsQ1fJpBq2+5WdKzBOgW6crL7+Pcut05eH3Jaxbp+uVXEtKUdMooLM6W7/P6dbp6kyyCi2CW6crI78v0GBwKfUtPbzMk8Lek1nLIRfUgxLi1unqPAs0JaLcOl1iipCV4oMpIDGmRLBbp4vu9zNw63QR/b6ViVuna2Zxh1Zmbp0u3tAClwOLEY/fz9yt04X1+7m4dbpQfj8nt04X3O/veTAFBfP7Obt1utL9fgFuna4Uv980CjcYPEry+4W5dbri6vuFunW6Iv0+rba+D5rWg12KEuhXePZd1alk+D/zsvyBF0OaftVgCqn9MlrcPz/fL0YvuRxM/wfq6qwFpx8VuQAAAABJRU5ErkJggg==' },
      { title: 'C#', logo: 'https://images.seeklogo.com/logo-png/36/1/c-sharp-c-logo-png_seeklogo-363285.png' },
      { title: 'Python', logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
      { title: 'JavaScript', logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' },
      { title: 'TypeScript', logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' },
      { title: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' },
      { title: 'PHP', logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg' },
      { title: 'AL (Business Central)', logo: 'data:image/jpeg;base64,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' },
    ]
  },
  {
    text: "Databases",
    arr: [
      { title: 'MongoDB', logo: 'https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png' },
      { title: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
    ]
  },
  {
    text: "UI / Mobile Development",
    arr: [
      { title: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { title: 'Flutter', logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
      { title: 'Compose UI (Kotlin)', logo: 'data:image/png;base64,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' }
    ]
  },
  {
    text: "Libraries / Frameworks / Backend",
    arr: [
      { title: 'NodeJS', logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
      { title: 'ExpressJS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_RY4COV565Nju7b4ZI5tsPkJQT1imxdFXg&s' },
      { title: 'NestJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg' },
      { title: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
      { title: 'Mongoose', logo: 'https://avatars.githubusercontent.com/u/7552965?s=200&v=4' },
      { title: 'Socket.io', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg' },
      { title: 'ReactJS', logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
      { title: 'NextJS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPpa5L8BQWfwHOIFMaKr5GBWr-Voo7-_OLw&s' },
    ]
  },
  {
    text: "UI Component Libraries",
    arr: [
      { title: 'Material-UI', logo: 'https://mui.com/static/logo.png' },
      { title: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042' },
      { title: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png' },
    ]
  },
  {
    text: "Data / Machine Learning",
    arr: [
      { title: 'OpenCV', logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg' },
      { title: 'NumPy', logo: 'https://numpy.org/images/logo.svg' },
      { title: 'Pandas', logo: 'https://pandas.pydata.org/static/img/pandas_white.svg' },
      { title: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
    ]
  },
  {
    text: "Tools / IDEs / Others",
    arr: [
      { title: 'Android Studio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/512px-Android_Studio_Icon_3.6.svg.png?20210301045217' },
      { title: 'VS Code', logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png' },
      { title: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
      { title: 'Docker', logo: 'https://cdn.iconscout.com/icon/free/png-128/docker-226091.png' },
      { title: 'Jira', logo: 'https://cdn.iconscout.com/icon/free/png-128/jira-3628861-3030001.png' },
      { title: 'Figma', logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
      { title: 'npm', logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg' },
      { title: 'Yarn', logo: 'https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg' },
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
                    logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/512x512bb.jpg", // placeholder until live
                    desc: "A full-featured expense management app for BC employees. Allows submission of expenses and admin approval to post to general journal. Not live yet.",
                    link: "#",
                },
                {
                    title: "Sphinx",
                    logo: "https://gemini.google.com/share/730440d5f355", // placeholder until live
                    desc: "A React-native frontend project for a client which is a bus rotes app between the drivers and the students wuth real time pinned locations",
                    link: "https://expo.dev/accounts/aleeyjay/projects/frontend-mobile-app/builds/07acc8ed-4a1f-45cf-bfb0-bf1ec2649e1a",
                }
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
                {
                    title: 'WhatsApp ( Recommended )',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=923209174561',
                    desc: "+923209174561"
                },
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