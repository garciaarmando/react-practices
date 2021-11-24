/* eslint-disable no-unused-vars */
import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import SongSearch from "./SongSearch";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModalContact, openModalContact, closeModalContact] =
    useModal(false);
  const [isOpenSongSearch, openSongSearch, closeSongSearch] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);

  return (
    <div>
      <h2>Windows modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Modal content</p>
        <img src="https://placeimg.com/400/400/animals" alt="Random animal" />
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Modal 2 content</p>
        <img src="https://placeimg.com/400/400/animals" alt="Random animal" />
      </Modal>

      <button onClick={openModalContact}>Form</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>

      <button onClick={openSongSearch}>Song Search</button>
      <Modal isOpen={isOpenSongSearch} closeModal={closeSongSearch}>
        <SongSearch />
      </Modal>

      <button onClick={openModalPortal}>Portals</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modals with Portals</h3>
        <p>
          This is the content of a modal that loads in another DOM node besides
          the id "root". This is possible because the use of React Portal
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Tech" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
