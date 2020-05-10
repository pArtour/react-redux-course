import React from "react";
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45 PM"
                commentText="Nice blog post"
                image={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00 AM"
                commentText="Cool!"
                image={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:00 PM"
                commentText="Thanks, interesting"
                image={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

