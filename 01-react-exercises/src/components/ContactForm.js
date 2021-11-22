/* eslint-disable no-unused-vars */
import { useForm } from "../hooks/useForm";

const initialForm = {};

const validationsForm = form => {};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}></form>
      <input
        type="text"
        name="name"
        placeholder="Write your name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.name}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Write your email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.email}
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject to handle"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.subject}
        required
      />

      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Please, write your comment"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.comments}></textarea>

      <input type="submit" value="Send" />
    </div>
  );
};

export default ContactForm;
