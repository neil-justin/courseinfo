const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <>
            {course.parts.map(part => <Part part={part} key={part.id} />)}
        </>
    )
}

const Total = ({ course }) => {
    const total = course.parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0)
    return (
        <p><b>total of exercises {total}</b></p>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}

export default Course