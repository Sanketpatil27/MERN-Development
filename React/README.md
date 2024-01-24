state:  we can call it as the part of the code that changes dynamically! Same as counter variable
        changes wehn we click button, for counter app it looks something like this:
        {
            count: 1
        }

component: How a DOM element should render, given a state
           It is a re-usable, dynamic, HTML snippet that changes given the state
           This button is a component
           It takes the state (currentCount) as an input
           And is supposed to render accordingly

re-rendering: A state change triggers a re-render
              A re-render represents the actual DOM being manipulated
              when the state changes
              You usually have to define all your components once
              And then all you have to do is update the state of your app, React takes care of re-rendering your app