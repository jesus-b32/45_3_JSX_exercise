function Person({ name, age, hobbies  }) {
    return (
        <div className="person">
            <p>Learn some information about this person</p>
            <h3>{name} {age > 18 ? 'please go vote!' : 'you must be 18'}</h3>
            <h3>{name.length > 8 ? name.slice(0, 6) : name}</h3>
            <ul>
                {hobbies.map(item => <li>{item}</li>)}
            </ul>
        </div>
    );
}