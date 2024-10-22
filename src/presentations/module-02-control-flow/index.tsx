import Lesson01 from "./Lesson01-if-else";
import Lesson02 from "./Lesson02-switch";
import Lesson03 from "./Lesson03-for-loops";
import Lesson04 from "./Lesson04-while-loops";

export const Module02Routes = [
  {
    path: 'lesson-01',
    element: <Lesson01 />,
  },
  {
    path: 'lesson-02',
    element: <Lesson02 />,
  },
  {
    path: 'lesson-03',
    element: <Lesson03 />,
  },
  {
    path: 'lesson-04',
    element: <Lesson04 />,
  },
]