import React from 'react';
import { fetchData } from '../data/AwsFunctions';

export default function DataFetch() {
  const dynamoFetch = () => {
    fetchData('Users');
  };

  return (
    <div>
      <button onClick={() => dynamoFetch()}>Get data</button>
    </div>
  );
}
