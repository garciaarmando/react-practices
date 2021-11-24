import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
      <h2>Windows modals</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Modal content</p>
        <img src="https://placeimg.com/400/400/animals" alt="Random animal" />
      </Modal>
    </div>
  );
};

export default Modals;
