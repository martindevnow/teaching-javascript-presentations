import React from 'react';
import { Composition } from 'remotion';
import Lesson01 from './Lesson01';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Empty"
        component={Lesson01}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};