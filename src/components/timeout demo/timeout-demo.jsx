export function TimeoutDemo() {
    function Signout() {
        alert('Your session Timeout-you will be sign out')
        sessionStorage.removeItem("uname")
        window.location.reload()
    }

    function handleSignInClick() {
        sessionStorage.setItem("uname","john")
        alert("Signed In")
        setTimeout(Signout,10000)
    }
    return(
        <div className="p-4">
            <button onClick={handleSignInClick}>Sign In</button>
        </div>
    )

}