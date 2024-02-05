import { atom, selector } from "recoil";
import axios from 'axios';


export const notifications = atom({
    key: "networkAtom",

    // default: {
    //     network: 4, 
    //     jobs: 6, 
    //     messaging: 3, 
    //     notifications: 3
    // }
    
    // instead of defining this initially like this, we should create fetch request in atom here using function,
    // default: async() => {
    //     const res = await axios.get("​https://sum-server.100xdevs.com/notifications");
    //     return res.data;
    // }

    // but default can't be a asynchronous defined, but selector can so we do it in selector
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            // await new Promise(r => setTimeout(r, 5000));    // for adding artificial delay, sleeps for 5 seconds, screen complete blanks
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})