import { Formik } from "formik";
import { createTodo } from "../lib/db";

const CreateTodo = () => {
    return (
        <Formik initialValues={{text: ''}} onSubmit={async ({text}, {setSubmitting, setValues})=>{
           setSubmitting(true)
           console.log(text)
           await createTodo({text,completed:false})
           setValues({text: ''})
           setSubmitting(false)
        }}>
           {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
           <form className="flex space-x-1 px-1" onSubmit={handleSubmit}>
             <input
           className='outline-none flex-1 border-2 border-black px-3 py-2 rounded-xl'
             type="text"
             name="text"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.text}
             placeholder='Type something...'
           />
           <button disabled={isSubmitting} className="border-2 rounded-xl border-black px-2 py-1" type="submit">Add</button>
           </form>
       )}
        </Formik>
    );
}

export default CreateTodo;