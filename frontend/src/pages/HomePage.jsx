import { SignedIn,SignedOut, SignInButton, UserButton, SignOutButton } from '@clerk/clerk-react';
import toast from 'react-hot-toast'

function HomePage() {
    return (
        <div>
            <button className="btn btn-primary" onClick={() => toast.success("This is a success toast")}>
                Click me
            </button>
            <SignedOut>
                <SignInButton mode="Modal">
                    <button>Login</button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <SignOutButton />
            </SignedIn>

            <UserButton />
        </div>
    )
}

export default HomePage