import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import LoginComponent from "../LoginComponent";
import { AuthContext } from "../../../context/AuthContext";

describe("Render LoginComponent", () => {
    test("should call login with email and password input", async ()=> {
        const login = jest.fn();
        render(
            <Router>
                <AuthContext.Provider value={{ login }}>
                    <LoginComponent/>
                </AuthContext.Provider>
            </Router>
        );

        const emailInput= screen.getByTestId("input-email");
        await userEvent.type(emailInput, "admin@mail.com");
        
        const passwordInput= screen.getByTestId("input-password");
        await userEvent.type(passwordInput, "password");

        const signInButton= screen.getByTestId("button-signin");
        await userEvent.click(signInButton);
        
        await waitFor(() =>{
            expect(login).toHaveBeenCalledWith({
                email: "admin@mail.com",
                password: "password"
            });
        }); 
    })
})