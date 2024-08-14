import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import RegisterComponent from "../RegisterComponent";
import { AuthContext } from "../../../context/AuthContext";

describe("Render RegisterComponent", () => {
    test("should call register with username, email, password, and role input", async ()=> {
        const register = jest.fn();
        render(
            <Router>
                <AuthContext.Provider value={{ register }}>
                    <RegisterComponent/>
                </AuthContext.Provider>
            </Router>
        );

        const usernameInput = screen.getByTestId("input-username");
        await userEvent.type(usernameInput, "mas bro member");

        const emailInput= screen.getByTestId("input-email");
        await userEvent.type(emailInput, "member@mail.com");
        
        const passwordInput= screen.getByTestId("input-password");
        await userEvent.type(passwordInput, "password");

        const roleMemberRadio= screen.getByTestId("radio-role-member");
        await userEvent.click(roleMemberRadio);

        const registerButton= screen.getByTestId("button-register");
        await userEvent.click(registerButton);
        
        await waitFor(() =>{
            expect(register).toHaveBeenCalledWith({
                username: "mas bro member",
                email: "member@mail.com",
                password: "password",
                role: "member"
            });
        }); 
    })
})