/* eslint-disable no-unused-vars */
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = form => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "The 'name' field is required";
  }
  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};
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

      {errors.name && <p style={styles}>{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Write your email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.email}
        required
      />

      {errors.email && <p style={styles}>{errors.email}</p>}

      <input
        type="text"
        name="subject"
        placeholder="Subject to handle"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.subject}
        required
      />

      {errors.subject && <p style={styles}>{errors.subject}</p>}

      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Please, write your comment"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.comments}></textarea>

      {errors.comments && <p style={styles}>{errors.comments}</p>}

      <input type="submit" value="Send" />
    </div>
  );
};

export default ContactForm;
