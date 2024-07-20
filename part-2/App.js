function App() {
    return (
        <div>
            <Tweet 
                username = 'JD'
                name = 'John Doe'
                date={new Date().toDateString()}
                message="First tweet!"
            />
            <Tweet 
                username = 'MS'
                name = 'Michael Scott'
                date={new Date().toDateString()}
                message="Second tweet!"
            />
            <Tweet 
                username = 'jediMaster'
                name = 'Luke Skywalker'
                date={new Date().toDateString()}
                message="May the force be with you."
            />
        </div>
    );
}