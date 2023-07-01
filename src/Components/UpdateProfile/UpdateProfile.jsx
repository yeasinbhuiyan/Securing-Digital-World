import BankDetails from "./BankDetails";
import ContactDetails from "./ContactDetails";
import GeneralDetails from "./GeneralDetails";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const UpdateProfile = () => {
    return (
        <div style={{width: '80%' , padding: '20px'}}>
            <Tabs>
                <TabList>
                    <Tab>General Details</Tab>
                    <Tab>Bank Details</Tab>
                    <Tab>Contact Details</Tab>
                </TabList>

                <TabPanel>
                    <GeneralDetails></GeneralDetails>

                </TabPanel>
                <TabPanel>
                    <BankDetails></BankDetails>
                </TabPanel>
                <TabPanel>
                    <ContactDetails></ContactDetails>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default UpdateProfile;