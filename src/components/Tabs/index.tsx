import { Tab, TabList, TabPanel, Tabs as ReactTabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Container } from './style';

interface TabData {
  [key: string]: string | React.ReactNode;
}

const Tabs = ({ tabs, activeTab }: { activeTab: number; tabs: TabData[] }) => {
  const tabsTitles: string | React.ReactNode[] = [];
  const tabsContents: string | React.ReactNode[] = [];

  if (tabs.length === 0) return <></>;

  tabs.forEach((tab) => {
    tabsTitles.push(Object.keys(tab)[0]);
    tabsContents.push(Object.values(tab)[0]);
  });

  return (
    <Container>
      <ReactTabs defaultIndex={activeTab}>
        <TabList>
          {tabsTitles.map((title, idx) => (
            <Tab key={idx}>
              <h3>{title}</h3>
            </Tab>
          ))}
        </TabList>

        {tabsContents.map((content, idx) => (
          <TabPanel key={idx}>{content}</TabPanel>
        ))}
      </ReactTabs>
    </Container>
  );
};
export default Tabs;
