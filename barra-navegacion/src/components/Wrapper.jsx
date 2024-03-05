import { useState } from "react";
import UserContext from "./UserContext";
import UserNavbar from "./UserNavbar";
import FormWrapper from "./FormWrapper";
import UserForm from "./UserForm";

const Wrapper = () => {
    const [userName, setUserName] = useState('');

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            <div>
                <UserNavbar />
                <FormWrapper>
                    <UserForm />
                </FormWrapper>
            </div>
        </UserContext.Provider>
    )

}

export default Wrapper;