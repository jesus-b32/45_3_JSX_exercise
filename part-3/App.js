function App() {
    return (
        <div>
            <Person 
                name = 'John Doe'
                age = {15}
                hobbies = {['hiking', 'running', 'gaming']}
            />
            <Person 
                name = 'John Cena'
                age = {45}
                hobbies = {['wresleling', 'rapping', 'acting']}
            />
            <Person 
                name = 'Elon Musk'
                age = {45}
                hobbies = {['inovating', 'memeing', 'tweeting']}
            />
        </div>
    );
}