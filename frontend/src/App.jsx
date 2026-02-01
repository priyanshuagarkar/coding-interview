import { SignedIn, SignedOut, SignInButton , SignOutButton, UserButton} from '@clerk/clerk-react'
import './App.css'

function App() {
  return (
    <>

      <h1>Talent-IQ</h1>
      <SignedOut>
        <SignInButton mode="Modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
          <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  )
}

export default App
