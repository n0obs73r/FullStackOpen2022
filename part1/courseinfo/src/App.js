function Header(header) {
    return <h1>{header.course}</h1>;
}

function Content(content) {
    return <p>{content.part1} {content.exercises}</p>;
}

function Total(total) {
    return <p>Number of exercises {total.exercises1 + total.exercises2 + total.exercises3}</p>;
}

function App() {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const course = 'Half stack Application Development'

    return (
        <div>
            <Header course={course}/>
            <Content part1={part1} exercises={exercises1}/>
            <Content part1={part2} exercises={exercises2}/>
            <Content part1={part3} exercises={exercises3}/>
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        </div>
    );
}

export default App;

