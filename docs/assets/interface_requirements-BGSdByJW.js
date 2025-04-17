import{H as t,j as e}from"./entry.client-DmQ2oq5X.js";const a="Description: The mobile and PC application provides an interactive UI for users to navigate quizzes, track progress, and adjust settings.",c=[{depth:1,value:"Interface Requirements",id:"interface-requirements",children:[{depth:2,value:"User Interface (UI)",id:"user-interface-ui"},{depth:2,value:"Backend API Interface",id:"backend-api-interface"},{depth:2,value:"Database Interface",id:"database-interface"},{depth:2,value:"Voice Recognition Interface",id:"voice-recognition-interface"},{depth:2,value:"External API Integrations",id:"external-api-integrations"}]}],o=void 0;function r(i){const n={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"interface-requirements",children:"Interface Requirements"}),`
`,e.jsx(n.h2,{id:"user-interface-ui",children:"User Interface (UI)"}),`
`,e.jsx(n.p,{children:"Description: The mobile and PC application provides an interactive UI for users to navigate quizzes, track progress, and adjust settings."}),`
`,e.jsx(n.p,{children:"Technology: Jetpack Compose (Android/PC) with Kotlin Multiplatform (KMP)."}),`
`,e.jsx(n.p,{children:"User Interaction:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users select books and quiz types."}),`
`,e.jsx(n.li,{children:"Real-time quiz interactions with touch and voice input."}),`
`,e.jsx(n.li,{children:"Feedback and performance tracking screens."}),`
`]}),`
`,e.jsx(n.h2,{id:"backend-api-interface",children:"Backend API Interface"}),`
`,e.jsx(n.p,{children:"Description: The client application communicates with the FastAPI-based backend for quiz generation, voice recognition, and user data storage."}),`
`,e.jsx(n.p,{children:"Communication Protocol: RESTful API over HTTPS."}),`
`,e.jsx(n.p,{children:"Endpoints:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"/generate-quiz – Sends book data and quiz type; receives generated quiz."}),`
`,e.jsx(n.li,{children:"/submit-response – Sends user quiz answers; receives accuracy results."}),`
`,e.jsx(n.li,{children:"/voice-recognition – Sends voice input; receives phoneme analysis."}),`
`,e.jsx(n.li,{children:"/user-progress – Fetches and updates user progress."}),`
`]}),`
`,e.jsx(n.h2,{id:"database-interface",children:"Database Interface"}),`
`,e.jsx(n.p,{children:"Description: The application stores quiz results and user data in a local Room database and syncs with Firebase/Backend."}),`
`,e.jsx(n.p,{children:"Data Stored:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"User quiz history and progress."}),`
`,e.jsx(n.li,{children:"Generated quizzes for offline access."}),`
`,e.jsx(n.li,{children:"User settings and preferences."}),`
`]}),`
`,e.jsx(n.p,{children:"Synchronization: Periodic data sync with the server."}),`
`,e.jsx(n.h2,{id:"voice-recognition-interface",children:"Voice Recognition Interface"}),`
`,e.jsx(n.p,{children:"Description: The app integrates a PyTorch-based speech recognition model for voice-based quizzes."}),`
`,e.jsx(n.p,{children:"Data Flow:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"User provides voice input."}),`
`,e.jsx(n.li,{children:"The app processes audio locally and/or sends it to the backend for further processing."}),`
`,e.jsx(n.li,{children:"Returns pronunciation accuracy and feedback."}),`
`]}),`
`,e.jsx(n.h2,{id:"external-api-integrations",children:"External API Integrations"}),`
`,e.jsx(n.p,{children:`Firebase Authentication: Secure login and user identity management.
Push Notifications (if implemented): Firebase Cloud Messaging (FCM) for engagement reminders.`})]})}function d(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{d as default,a as excerpt,o as frontmatter,c as tableOfContents};
//# sourceMappingURL=interface_requirements-BGSdByJW.js.map
