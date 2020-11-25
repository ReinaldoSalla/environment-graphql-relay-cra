// import React, { useState, useEffect} from 'react';

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:4000/graphql', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({ query: "{ hello } "})
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err)); 
//   }, []);

//   return (
//     <_main-wrapper'>
//       <p>
//         console
//       </p>
//     </
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';

// async function fetchGraphQL(text: string, variables=null) {
//   const response = await fetch('http://localhost:4000/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: "{ bitcoin }"
//     }),
//   });
//   return await response.json();
// };

// function App() {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     let isMounted = true;
//     fetchGraphQL("{ bitcoin }")
//       .then(response => {
//         if (!isMounted) {
//           return;
//         }
//         const data = response.data.bitcoin;
//         console.log(response);
//         setData(data);
//       }).catch(error => {
//         console.error(error);
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, [fetchGraphQL]);

//   return (
//     <>
//       <p>
//         {data !== null ? `Repository: ${data}` : "Loading"}
//       </p>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';

const App = () => {
  const [bitcoin, setBitcoin] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: '{ bitcoin }'})
    })
      .then((res) => res.json())
      .then((data) => {
        if(!isMounted) {
          return;
        }
        setBitcoin(data.data.bitcoin);
      })
      .catch((err) => console.error(err));
    return () => { isMounted = false };
  }, []);

  return (
    <p>
      {bitcoin ? `bitcoin transported msg: ${bitcoin}` : 'Loading...'}
    </p>
  );
};

export default App;