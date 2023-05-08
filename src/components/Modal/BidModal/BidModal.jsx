import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { Button } from "@mantine/core";
import { NumberInput } from "@mantine/core";

const BidModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlaycolor="dark"
      overlayopacity={0.55}
      overlayblur={10}
      size="20%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <NumberInput
        label="Price"
        defaultValue={100}
        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value))
            ? `₹ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            : "₹ "
        }
      />
      <Button>Bid Now</Button>
      <Button>Close</Button>
    </Modal>
  );
};

export default BidModal;
