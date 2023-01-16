export default function SignUp() {
    return (
        <div className="container" style={{display:"flex",flexDirection:"column",justifyContent:"space-between", height: "466px", width: "360px"}}>
                <h1>Sign-Up</h1>
                <form>
                    <label style={{color:"#344054", fontSize:"14px", marginTop:"20px"}} htmlFor="firstname">Name*</label>
                    <br />
                    <input style={{width:"100%",height:"44px", border:"1px solid #D0D5DD", borderRadius:"10px", paddingLeft:"14px"}} type="text" placeholder="Enter your name" />
                    <br />
                    <label style={{color:"#344054", fontSize:"14px", marginTop:"20px"}} htmlFor="firstname">Email*</label>
                    <br />
                    <input style={{width:"100%",height:"44px", border:"1px solid #D0D5DD", borderRadius:"10px", paddingLeft:"14px"}} type="email" placeholder="Enter your email" />
                    <br />
                    <label style={{color:"#344054", fontSize:"14px", marginTop:"20px"}} htmlFor="firstname">Password*</label>
                    <br />
                    <input style={{width:"100%",height:"44px", border:"1px solid #D0D5DD", borderRadius:"10px", paddingLeft:"14px"}} type="password" placeholder="Create a password" />
                    <br />
                    <p style={{margin:"0", fontSize:"14px", color:"#667085"}}>Must be at least 8 characters.</p>
                    <br />
                    <button style={{backgroundColor:"#7F56D9", border:"1px solid #7F56D9", width:"100%", height:"44px", color:"white", borderRadius:"10px"}}>Create Account</button>
                </form>
                <p style={{fontSize:"14px", margin:"0 auto"}}>Already have an account? <a style={{color:"#6941C6", textDecoration:"none", fontSize:"14px"}} href="#">Log in</a></p>
        </div>
    )
}