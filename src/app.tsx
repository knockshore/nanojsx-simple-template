import Nano from 'nano-jsx'

const App = (props: any) => <h1>Hello from {props.name}!</h1>;

const start = () => Nano.render(<App name="Nano" />, document.getElementById('root'))


window.addEventListener('load', event => {
    start();
});

