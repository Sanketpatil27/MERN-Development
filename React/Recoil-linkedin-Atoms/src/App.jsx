import { networkAtom, totalNotificationSelector, jobsAtom, messagingAtom, notificationsAtom } from './atoms'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { useMemo } from "react";
import './App.css'

function App() {

  return (
    <RecoilRoot>
        <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const [messaginAtomCount, setMessageAtomCount] = useRecoilState(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);
  
  // for showing total notifications in 'me' button we can do this, better way is using selectors
  // const finalValue = useMemo(()=> {
  //   return networkAtomCount+jobsAtomCount+messaginAtomCount+notificationAtomCount;
  //   }, [networkAtomCount, jobsAtomCount, messaginAtomCount, notificationAtomCount]
  // );

  // final value using selector
  const finalValue = useRecoilValue(totalNotificationSelector);

  return (
      <RecoilRoot>  
        <div>
            <button>Home</button>
            
            <button>My Network <sup> ({networkAtomCount >= 100 ? "99+" : networkAtomCount}) </sup> </button>
            <button>Jobs <sup> ({jobsAtomCount}) </sup> </button>
            <button>Messaging <sup> ({messaginAtomCount >= 100 ? "99+" : messaginAtomCount}) </sup></button>
            <button>Notifications <sup> ({notificationAtomCount}) </sup></button>

            <button onClick={() => {
              setMessageAtomCount(c => c+1);
            }}>Me <sup>({finalValue})</sup></button>
        </div>
      </RecoilRoot>
  ) 
}

export default App