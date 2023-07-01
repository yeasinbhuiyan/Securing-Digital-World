import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Privacy from './Privacy/Privacy';
import Security from './Security/Security';

const Settings = () => {
    return (
        <div style={{ width: '80%', padding: '20px' }}>
            <Tabs>
                <TabList>
                    <Tab>Privacy</Tab>
                    <Tab>Security</Tab>

                </TabList>

             
                <TabPanel>
                    <Privacy></Privacy>
                </TabPanel>
                <TabPanel>
                    <Security></Security>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Settings;