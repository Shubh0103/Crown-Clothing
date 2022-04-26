import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocref = await createUserDocumentFromAuth(user);
    } 
    return(
        <div>
            <h1>I am the sign page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
        </div>
    );
};

export default SignIn;