import { useEffect, useMemo, useState } from 'react'

function App() {
    const [exchange1Data, setExhance1Data] = useState({});
    const [exchange2Data, setExhance2Data] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(() => {
        setExhance1Data({
            returns: 100
        });
    }, []);

    useEffect(() => {
        setExhance2Data({
            returns: 100
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setBankData({
                income: 100
            })
        }, 5000);
    }, [])

    // these 3 line code run after every rerender, but  we don't want this expensive operation to re-render until exchange datas are changed, 
    // so we use useMemo, to memorize its value, (same as DP memoization) it don't calculate it until anyone is changed from exchange datas
    // console.log('hii there before');
    // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
    // console.log('hii there after');

    // now it skippes this part even after 5 seconds bankData get updated
    const cryptoReturns = useMemo(() => {
        console.log('hii there before');
        return exchange1Data.returns + exchange2Data.returns;
    }, [exchange1Data, exchange2Data]);

    const incomeTax = (cryptoReturns + bankData.income) * 0.3;

    return <div>
        hi there, your income tax returns are {incomeTax}
    </div>
}

export default App
