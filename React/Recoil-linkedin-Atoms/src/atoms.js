import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})

// usign selector for adding up all values and show in `me` button
// selector work same like useMemo() it knows value depends on which values, work like dependancy array
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagingAtomCount = get(messagingAtom);
        const notificationsAtomCount = get(notificationsAtom);

        return networkAtomCount+jobsAtomCount+messagingAtomCount+notificationsAtomCount;
    }
})