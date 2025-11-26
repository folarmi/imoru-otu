/* eslint-disable @typescript-eslint/no-explicit-any */

const Modal = ({ show, toggleModal, children, ifClose = true }: any) => {
  if (!show) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay - should be behind the modal content */}
      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9998]"
          onClick={toggleModal}
        ></div>
      )}

      {/* Modal content wrapper */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none">
        <div className="relative pointer-events-auto">
          {ifClose && (
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-4xl font-light"
              onClick={toggleModal}
            >
              &times;
            </button>
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
