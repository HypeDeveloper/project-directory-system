import { useState } from "react"
import { Link } from "react-router-dom"
import { Wait_Loading } from "../../components/utils/loading"
import { useInput } from "../../components/hooks/useInput"

export function SignIn(){
    const { input, change } = useInput({
        orgName: '',
        pin: ''
    })

    function submit(e) {
        e.preventDefault()
        console.log(input);
    }
    return (
        <>
            <div className="wrapSign">
                <div className="wrapperSign">
                    <div className="banner">
                        <h1 className="header">
                            Lets Get To Work

                        </h1>
                        <p className="subText">
                            Add your details to procced or create a <span className="link">
                                <Link to='/getStarted'/>
                            </span>
                        </p>
                    </div>
                    <form action="" className="form">
                        <div className="formwrap">
                            <div className="quickInput">
                                <p className="inputPlaceholder">
                                    Organisation Name
                                </p>
                                <input name="orgName" type="text" onChange={change} autoFocus />
                            </div>
                            <div className="quickInput">
                                <p className="inputPlaceholder">
                                    Your Pin
                                </p>
                                <input name="pin" type="password" onChange={change} autoFocus />
                            </div>
                            <div className="errPlace">
                                <p className="err"></p>
                            </div>
                        </div>

                        <button onClick={submit} className="bttn bttn-full" type="submit">Get Started</button>
                        <p className="subText p-top-40 text-c">
                            Not in an organisation <br/>
                            <span className="link">
                                <Link to='/getStarted'>
                                    Create one
                                </Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>  
        </>
    )
}

export function SignUp(){
    const [open, setOpen] = useState(false)
    const { input, change } = useInput({
        orgName: '',
    })
    function onSubmit(e) {
        e.preventDefault()
        setOpen(true)
    }
    return(
        <>
            {open ? (<SetUpAdmin />) : (
                <div className="wrapSign">
                    <div className="wrapperSign">
                        <div className="banner">
                            <h1 className="header">
                                Hi there,

                            </h1>
                            <p className="subText">
                                Get started by setting up an organisation
                            </p>
                        </div>
                        <form action="" className="form">
                            <div className="formwrap">
                                <div className="quickInput">
                                    <p className="inputPlaceholder">
                                        Organisation Name
                                    </p>
                                    <input onChange={change} name="orgName" type="text" autoFocus />
                                </div>
                            </div>
                            <div className="errPlace">
                                <p className="err"></p>
                            </div>
                            <button onClick={onSubmit} className="bttn bttn-full" type="submit">Get Started</button>

                            <p className="subText p-top-40 text-c">
                                Already in an organisation  <br />
                                <span className="link">
                                    <Link to='/login'>
                                        Login
                                    </Link>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

function SetUpAdmin() {
    const [open, setOpen] = useState(false)
    const { input, change } = useInput({
        name: '',
        pin: ''
    })

    function onSubmit(e) {
        e.preventDefault()
        setOpen(true)
    }
    return (
        <>
            {open ? (<AddRoles />) : (
                <div>
                    <div className="wrapSign">
                        <div className="wrapperSign">
                            <div className="banner">
                                <h1 className="header">
                                    Hi Admin,

                                </h1>
                                <p className="subText">
                                    As the admin of the orgnisation set your name and pin
                                </p>
                            </div>
                            <form action="" className="form">
                                <div className="formwrap">
                                    <div className="quickInput">
                                        <p className="inputPlaceholder">
                                            Your Name
                                        </p>
                                        <input onChange={change} name="name" type="text" autoFocus />
                                    </div>
                                    <div className="quickInput">
                                        <p className="inputPlaceholder">
                                            Your New Pin
                                        </p>
                                        <input onChange={change} name="pin" type="password" autoFocus />
                                    </div>
                                    <div className="errPlace">
                                        <p className="err"></p>
                                    </div>
                                </div>


                                <button className="bttn bttn-full" onClick={onSubmit} type="submit">Create Admin</button>
                            </form>
                        </div>
                    </div>
                </div>
            ) }
        </> 
    )
}

function AddRoles() {
    const { input, change } = useInput({
        roleName: '',
        pin: ''
    })
    return(
        <>
            <div>
                <div className="wrapSign">
                    <div className="wrapperSign">
                        <div className="banner">
                            <h1 className="header">
                                Assign Roles,
                            </h1>
                            <p className="subText">
                                Create roles in our organisation to split huge progects 
                            </p>
                        </div>
                        <form action="" className="form">
                            <div className="formwrap">
                                <div className="quickInput">
                                    <p className="inputPlaceholder">
                                        Role Name
                                    </p>
                                    <input onChange={change} name="roleName" type="text" autoFocus />
                                </div>
                                <div className="quickInput">
                                    <p className="inputPlaceholder">
                                        Role Pin
                                    </p>
                                    <input onChange={change} name="pin" type="password" autoFocus />
                                </div>

                                <div className="errPlace">
                                    <p className="err"></p>
                                </div>
                            </div>


                            <div className="bttn-wrap">
                                <button className="bttn bttn-full" type="submit">New Role</button>
                                <button className="bttn bttn-full" type="submit">Done</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </>
    )
}

