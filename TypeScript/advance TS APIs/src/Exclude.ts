type EventType = "click" | 'scroll' | 'mouseover'

type ExcludeEvent = Exclude<EventType, 'scroll'>    // exclude scroll 

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
}

handleEvent('click');
handleEvent('mouseover');
// handleEvent('scroll');       // give error as it's excluded