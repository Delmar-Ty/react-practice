import './component.css';

const me = {
    name: 'Delmar Schrock',
    age: 17,
    grade: 12,
    credits: 'Unkown',
    graduation: 'May 2023',
    homeSchool: 'Homeschooled',
    subjects: ['Trigonometry', 'Algebra 1', 'Algebra 2', 'Physics', 'English']
};

function PageComponent() {
    return [<Intro />, <Subjects />, <Graduation />]
}

function Intro() {
    return (
        <div className='container'>
            <p>Name: {me.name}</p>
            <p>Age: {me.age}</p>
            <p>Grade: {me.grade}</p>
            <p>Home School: {me.homeSchool}</p>
        </div>
    );
}

function Subjects() {
    return (
        <div className='container'>
            <ul>
                <li>{me.subjects[0]}</li>
                <li>{me.subjects[1]}</li>
                <li>{me.subjects[2]}</li>
                <li>{me.subjects[3]}</li>
                <li>{me.subjects[4]}</li>
            </ul>
        </div>
    );
}

function Graduation() {
    return (
        <div className='container'>
            <p>Credits: {me.credits}</p>
            <p>Graduation Date: {me.graduation}</p>
        </div>
    );
}

export default PageComponent;