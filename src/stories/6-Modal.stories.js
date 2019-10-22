import React from "react";
import Modal from "../components/Modal";
import DurationBar from "../components/DurationBar";
import RangeBar from "../components/RangeBar";
import { action } from "@storybook/addon-actions";

import Results from "../Pages/Results";
import ShowModal from "../components/Modal";

export default {
  title: "Modal-Components"
};

export const Modalize = () => (
  <>
    <ShowModal />
  </>
);

export function Hide() {
  return (
    <>
      <Modal show={false} onAccept={action("accept")} onClose={action("close")}>
        <DurationBar />
        <RangeBar />
      </Modal>
      <p>
        Take a look at the inspector to verify that the modal is set to{" "}
        <code>display: none;</code>
      </p>
    </>
  );
}

export const Test = () => (
  <>
    <Results />
  </>
);

// //
// {showModal && (
//   <CardModal handleOutsideClick={() => setShowModal(false)} />
// )}
