import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';


const ChangePassword = () => {
    return (
        <div style={{ width: '80%', padding: '20px' }}>
            <Tabs>
                <TabList>
                    <Tab>Change Password</Tab>


                </TabList>


                <TabPanel>

                    <ChangePasswordForm></ChangePasswordForm>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default ChangePassword;