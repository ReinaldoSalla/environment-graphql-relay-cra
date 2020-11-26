import React, { useState, useEffect } from 'react';

const App = () => {
  const [bitcoin, setBitcoin] = useState(null);
  const [dice, setDice] = useState(null);

  useEffect(() => {
    let isUnmounted = false;
    const fetchGraphQL = async () => {
      const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: '{ bitcoin }'})
      });
      const json = await res.json();
      const bitcoinData = json.data.bitcoin;
      if (!isUnmounted) {
        setBitcoin(bitcoinData);
      }
    }
    fetchGraphQL();
    return () => {
      isUnmounted = true;
    };
  }, []);

  useEffect(() => {
    let isUnmounted = false;
    const fetchGraphQL = async () => {
      const dice = 10;
      const sides = 6;
      const query = `query RoolDice($dice: Int!, $sides: Int) {
        rollDice(numDice: $dice, numSides: $sides)
      }`;
      const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query,
          variables: { dice, sides }
        })
      });
      const json = await res.json();
      console.log(json);
    }
    fetchGraphQL();
    return () => {
      isUnmounted = false;
    };
  }, []);

  return (
    <p>
      {bitcoin ? `bitcoin transported msg: ${bitcoin}` : 'Loading...'}
    </p>
  );
};

export default App;