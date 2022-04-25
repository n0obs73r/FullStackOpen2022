function Header(header) {
    return <h1>{header.course}</h1>;
}

function Part(content) {
    return <p>{content.part} {content.exercises}</p>;
}

function Content(content) {
    return [
        <Part key={"part1"} part={content.parts[0].name} exercises={content.parts[0].exercises}/>,
        <Part key={"part2"} part={content.parts[1].name} exercises={content.parts[1].exercises}/>,
        <Part key={"part3"} part={content.parts[2].name} exercises={content.parts[2].exercises}/>
        ];
}

function Total(total) {
    return <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>;
}

function App() {

    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };


    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
}

export default App;

