
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


const e = React.createElement;

// Display a "Like" <button>
return e(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Like'
);