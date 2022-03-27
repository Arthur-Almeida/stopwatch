import React from 'react';

export type DisplayProps = {
  minutes: string;
  seconds: string;
}

export default function Display({ minutes, seconds }: DisplayProps) {
  return (
    <h1>
      {minutes}
      :
      {seconds}
    </h1>
  );
}
