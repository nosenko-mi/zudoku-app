import{H as s,j as e}from"./entry.client-DNxkNErv.js";const o="Quiz Generation: The system should generate quizzes within 2-5 seconds for NLP-based quizzes and under 10 seconds for LLM-based quizzes.",c=[{depth:1,value:"Performance Requirements",id:"performance-requirements",children:[{depth:2,value:"Response Time & Latency",id:"response-time--latency"},{depth:2,value:"Memory & Storage Requirements",id:"memory--storage-requirements"},{depth:2,value:"Error Rate & Accuracy",id:"error-rate--accuracy"},{depth:2,value:"Concurrency & Scalability",id:"concurrency--scalability"},{depth:2,value:"Battery & CPU Efficiency",id:"battery--cpu-efficiency"},{depth:2,value:"Static vs Dynamic Performance Constraints",id:"static-vs-dynamic-performance-constraints"}]}],a=void 0;function r(i){const n={h1:"h1",h2:"h2",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"performance-requirements",children:"Performance Requirements"}),`
`,e.jsx(n.h2,{id:"response-time--latency",children:"Response Time & Latency"}),`
`,e.jsx(n.p,{children:"Quiz Generation: The system should generate quizzes within 2-5 seconds for NLP-based quizzes and under 10 seconds for LLM-based quizzes."}),`
`,e.jsx(n.p,{children:"Voice Recognition: Local processing should provide results in under 2 seconds, while server-based processing may take up to 5 seconds depending on network conditions."}),`
`,e.jsx(n.p,{children:"User Interactions: UI elements should respond within 100ms to user inputs to ensure a smooth experience."}),`
`,e.jsx(n.h2,{id:"memory--storage-requirements",children:"Memory & Storage Requirements"}),`
`,e.jsx(n.p,{children:"Mobile App:"}),`
`,e.jsx(n.p,{children:`Minimum 2GB RAM required for optimal performance.
Application size should remain under 100MB, excluding cached quizzes.
Local storage for quiz data should not exceed 50MB per user before cleanup mechanisms activate.`}),`
`,e.jsx(n.p,{children:`Server:
Minimum 8GB RAM for handling quiz generation and voice recognition.
Storage scalability to support thousands of users with efficient database indexing.`}),`
`,e.jsx(n.h2,{id:"error-rate--accuracy",children:"Error Rate & Accuracy"}),`
`,e.jsx(n.p,{children:"Voice Recognition: Expected word recognition accuracy of 85-95% depending on input clarity."}),`
`,e.jsx(n.p,{children:"Quiz Generation: NLP-based quizzes should maintain 90% linguistic correctness, while LLM-based quizzes should undergo validation to ensure over 95% question relevance."}),`
`,e.jsx(n.h2,{id:"concurrency--scalability",children:"Concurrency & Scalability"}),`
`,e.jsx(n.p,{children:`The system should support at least 100 concurrent users without performance degradation.
Server should handle 500 quiz requests per minute with automatic scaling options if needed.`}),`
`,e.jsx(n.h2,{id:"battery--cpu-efficiency",children:"Battery & CPU Efficiency"}),`
`,e.jsx(n.p,{children:`The mobile application should consume less than 5% battery per hour of continuous usage.
Background tasks (syncing, quiz generation) should use low-power optimizations to minimize CPU strain.`}),`
`,e.jsx(n.h2,{id:"static-vs-dynamic-performance-constraints",children:"Static vs Dynamic Performance Constraints"}),`
`,e.jsx(n.p,{children:`Static Requirements:
The system should function smoothly on devices running Android 8.0+ with quad-core processors or better.`})]})}function d(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{d as default,o as excerpt,a as frontmatter,c as tableOfContents};
//# sourceMappingURL=performance_requirements-Div6-ri2.js.map
