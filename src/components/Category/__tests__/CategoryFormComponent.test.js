import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoriesFormComponent from "../CategoryFormComponent";
import { Form } from 'antd';

const WrappedForm = ({ onSubmit }) => {
    const [form] = Form.useForm();
    return <CategoriesFormComponent form={form} onSubmit={onSubmit}/>;
}


describe("Render CategoriesFormComponent", () => {
    test("should call onSubmit with category input", async ()=> {
        const onSubmit= jest.fn();
        render(
            <WrappedForm onSubmit={onSubmit} />
        );

        const categoryInput = screen.getByTestId("input-category");
        userEvent.type(categoryInput, "kategori 1");

        const submitButton= screen.getByTestId("button-submit");
        userEvent.click(submitButton);
        
        await waitFor(() =>{
            expect(onSubmit).toHaveBeenCalledWith({
                name: "kategori 1",
            });
        }); 
    })
})