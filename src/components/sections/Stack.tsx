import { StackRow } from "../";
import type { StackDetails } from "../../types/Stack";

const stackList: StackDetails[] = [
  {
    name: 'JavaScript',
    icon: 'java-script',
    category: "language"
  },
  {
    name: 'TypeScript',
    icon: 'typescript-01',
    category: "language"
  },
  {
    name: 'Python',
    icon: 'python',
    category: "language"
  },
  {
    name: 'HTML',
    icon: 'html-5',
    category: "language"
  },
  {
    name: 'CSS',
    icon: 'css-3',
    category: "language"
  },
  {
    name: 'Java',
    icon: 'java',
    category: "language"
  },
  {
    name: 'React',
    icon: 'react',
    category: "framework"
  },
  {
    name: 'React Native',
    icon: 'react',
    category: "framework"
  },
  {
    name: 'MySQL',
    icon: 'sql',
    category: "db"
  },
  {
    name: 'Firebase',
    icon: 'database',
    category: "tool"
  },
  {
    name: 'Supabase',
    icon: 'database',
    category: "tool"
  },
  {
    name: 'Git',
    icon: 'github',
    category: "tool"
  },
  {
    name: 'Postman',
    icon: 'api',
    category: "tool"
  },
  {
    name: 'Figma',
    icon: 'figma',
    category: "tool"
  },
  {
    name: 'Notion',
    icon: 'notion-02',
    category: "tool"
  },
];

let langList: StackDetails[] = [];
let frameList: StackDetails[] = [];
let dbList: StackDetails[] = [];
let toolList: StackDetails[] = [];

stackList.map(( item: StackDetails ) => {
  if (item.category === 'language') {
    langList.push(item);
  } else if (item.category === 'framework') {
    frameList.push(item);
  } else if (item.category === 'db') {
    dbList.push(item);
  } else {
    toolList.push(item);
  }
});

const Stack = () => {
  return (
    <div id="stack" className="snap-start py-2 mx-3 relative flex flex-col gap-2.5 xl:pt-0 xl:grid xl:grid-rows-4 xl:gap-0 lg:min-h-[calc(100vh-198px)] xl:min-h-[calc(100vh-142px)] 2xl:min-h-[calc(100vh-96px)]">
      <StackRow stackList={langList} title="Progamming Languages" />
      <StackRow stackList={frameList} title="Frameworks" />
      <StackRow stackList={dbList} title="Databases" />
      <StackRow stackList={toolList} title="Tools" />
    </div>
  );
};

export default Stack;
