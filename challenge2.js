const React = require('react');


const myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>;


const CodewarsLink = ({ user }) => {
    return (
        <a href={`http://www.codewars.com/users/${user}`} key={user}>
            {user}
        </a>
    );
};


const Leaderboard = ({ leaders }) => {
    return (
        <div>
            {leaders.map((user) => (
                <CodewarsLink user={user} key={user} />
            ))}
        </div>
    );
};


const App = () => {
    const leaders = ['Sch3lp', 'nplus', 'noLan', 'jhoffner', 'OverZealous'];

    return (
        <div>
            {myHeader}
            <Leaderboard leaders={leaders} />
        </div>
    );
};

module.exports = App;
