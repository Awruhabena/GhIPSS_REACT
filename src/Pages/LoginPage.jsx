
import LoginForm from '../Components/LoginForm'
import Header from '../Components/Header'
import Illustration from '../Components/Illustration'




function LoginPage() {
    return (
        <>
            <Header />
            <div className='app-container'>
                <LoginForm />
                <Illustration />
            </div>
        </>
    )
}

export default LoginPage