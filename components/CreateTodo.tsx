import { Formik } from "formik";

const CreateTodo = () => {
    return (
        <Formik initialValues={{text: ''}} onSubmit={()=>{}}>
           {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
           <form onSubmit={handleSubmit}>
             <input
           className='outline-none w-full border-2 border-black px-3 py-2 rounded-xl'
             type="text"
             name="text"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.text}
             placeholder='Type something...'
           />
           </form>
       )}
        </Formik>
    );
}

export default CreateTodo;