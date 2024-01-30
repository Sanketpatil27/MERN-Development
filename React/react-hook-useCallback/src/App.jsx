import { memo, useCallback, useEffect, useMemo, useState } from 'react'

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
            });
        }, 5000);
    }, []);


    // here lets we simulate the code from useMemo1 project
    // consider cryptoReturns as a function here

    // it will re-render every time when App got re-render "cozing re-render of child Component", but we don't want it, so we memorize function's value using useCallback
    // const cryptoReturns = function() {
    //     return exchange1Data.returns + exchange2Data.returns;
    // }
    
    // now 'CryptoGainsCalcy' only re-renders when any of exchangeData changes
    const cryptoReturns = useCallback(function() {
        return exchange1Data.returns + exchange2Data.returns;
    }, [exchange1Data, exchange2Data]);


    return <div>
        {/* we passing function as props */}
        <CryptoGainsCalcy cryptoReturns={cryptoReturns}> </CryptoGainsCalcy>
    </div>
}

// we use memo when we don't want to re-render a component when it's props are not chagned
// but here it will re-render if we use method 1 of declaring function without useCallback
const CryptoGainsCalcy = memo(function({cryptoReturns}) {
    console.log("crypto child re-rended");
    
    return <div>
        Your crypto returns are {cryptoReturns()}
    </div>
})

// 8: min
export default App
