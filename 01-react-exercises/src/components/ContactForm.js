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

  let regexName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  let regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "The 'name' field is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The 'name' field only accepts letters and blanks";
  }

  if (!form.email.trim()) {
    errors.email = "The 'Email' field is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email =
      "Please, introduce a valid email format, for example: someone@something.com";
  }

  if (!form.subject.trim()) {
    errors.subject = "The 'Subject' field is required";
  }

  if (!form.comments.trim()) {
    errors.comments = "The 'Comments' field is required";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "The 'Comments' field is limited to 255 characters";
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
