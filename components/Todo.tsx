import { Formik } from "formik";
import { useState } from "react";
import { TodoFront } from "../types";

const Todo = ({ completed, text, id }: TodoFront) => {
    const [editing, setEditing] = useState<boolean>(false)
    return (
        <div className="bg-gray-50 px-3 py-2 shadow-sm hover:shadow-md transition-all ease-in-out">

            {
                editing
                    ? (
                        <Formik initialValues={{ text }} onSubmit={async ({ text }, { setSubmitting, setFieldValue }) => {
                            setSubmitting(true)
                            console.log(text)
                            setFieldValue('text', text);
                            // await createTodo({ text, completed: false })
                            setSubmitting(false)
                            setEditing(false)
                        }}>
                            {({
                                values,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form className="flex space-x-1 w-full " onSubmit={handleSubmit}>
                                    <input
                                        className='outline-none flex-1 border-2 border-black px-3 py-2 rounded-xl'
                                        type="text"
                                        name="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.text}
                                        placeholder='Type something...'
                                    />
                                    <button disabled={isSubmitting} className="border-2 rounded-xl border-black px-2 py-1" type="submit">Save</button>
                                </form>
                            )}
                        </Formik>
                    )
                    : (
                        <div className="flex group items-center">
                            <div className={`${completed && 'line-through'} flex-1 break-all`}>{text}</div>
                            <div className='invisible group-hover:visible'>
                                <button onClick={() => setEditing(true)} className="border-2 rounded-xl border-black px-2 py-1" type="button">Edit</button>
                            </div>
                        </div>)
            }


        </div>

    );
}

export default Todo;