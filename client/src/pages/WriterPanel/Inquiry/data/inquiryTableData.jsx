/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "~/components/SoftBox";
import SoftTypography from "~/components/SoftTypography";
import SoftAvatar from "~/components/SoftAvatar";
import SoftBadge from "~/components/SoftBadge";
import Softbutton from "~/components/SoftButton";
 

import React, { useContext, useState } from "react";

import { MdDriveFileMove, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import BidModal from "~/components/Modal/BidModal/BidModal";
import ModalContext from "~/context/ModalContext";

export const Bids = ({ modalOpened, setModalOpened }) => {
  // const [modalOpened, setModalOpened] = useState(false);

  const toggleModal = () => {
    setModalOpened(!modalOpened);
  };

  return <BidModal modalOpened={modalOpened} setModalOpened={setModalOpened} />;
};

const inquiryTableData = {
  columns: [
    { name: "assignment id", align: "center" },
    { name: "assignment name", align: "center" },
    { name: "user name", align: "center" },
    { name: "writer name", align: "center" },
    { name: "category", align: "center" },
    { name: "date", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      "assignment id": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          1
        </SoftTypography>
      ),
      "assignment name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Essay Writing
        </SoftTypography>
      ),
      "user name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          John Cena
        </SoftTypography>
      ),
      "writer name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Barak Obama
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          HandWritten
        </SoftTypography>
      ),

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Completed"
          color="success"
          size="xs"
          container
        />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <>
          <Softbutton
            variant="caption"
            color="secondary"
            fontWeight="medium"
            onClick={()=>{prompt("Bid Now")}}
          >
            Bid <MdDriveFileMove className="h-5 w-5" />
          </Softbutton>

          <Link to="/writers/inquiry/details">
            <Softbutton variant="caption" color="secondary" fontWeight="medium">
              View
              <MdRemoveRedEye className="h-5 w-5" />
            </Softbutton>
          </Link>
        </>
      ),
    },
    {
      "assignment id": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          1
        </SoftTypography>
      ),
      "assignment name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Essay Writing
        </SoftTypography>
      ),
      "user name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          John Cena
        </SoftTypography>
      ),
      "writer name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Barak Obama
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Technical Drawing
        </SoftTypography>
      ),

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Completed"
          color="success"
          size="xs"
          container
        />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <>
          <Softbutton variant="caption" color="secondary" fontWeight="medium">
            Bid <MdDriveFileMove className="h-5 w-5" />
          </Softbutton>

          <Link to="/writers/inquiry/details">
            <Softbutton variant="caption" color="secondary" fontWeight="medium">
              View
              <MdRemoveRedEye className="h-5 w-5" />
            </Softbutton>
          </Link>
        </>
      ),
    },
    {
      "assignment id": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          1
        </SoftTypography>
      ),
      "assignment name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Essay Writing
        </SoftTypography>
      ),
      "user name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          John Cena
        </SoftTypography>
      ),
      "writer name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Barak Obama
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          PPT
        </SoftTypography>
      ),

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="On going"
          color="warning"
          size="xs"
          container
        />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <>
          <Softbutton variant="caption" color="secondary" fontWeight="medium">
            Bid <MdDriveFileMove className="h-5 w-5" />
          </Softbutton>

          <Link to="/writers/inquiry/details">
            <Softbutton variant="caption" color="secondary" fontWeight="medium">
              View
              <MdRemoveRedEye className="h-5 w-5" />
            </Softbutton>
          </Link>
        </>
      ),
    },
    {
      "assignment id": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          1
        </SoftTypography>
      ),
      "assignment name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Essay Writing
        </SoftTypography>
      ),
      "user name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          John Cena
        </SoftTypography>
      ),
      "writer name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Barak Obama
        </SoftTypography>
      ),

      category: (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          ArtCraft
        </SoftTypography>
      ),

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Completed"
          color="success"
          size="xs"
          container
        />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <>
          <Softbutton variant="caption" color="secondary" fontWeight="medium">
            Bid <MdDriveFileMove className="h-5 w-5" />
          </Softbutton>

          <Link to="/writers/inquiry/details">
            <Softbutton variant="caption" color="secondary" fontWeight="medium">
              View
              <MdRemoveRedEye className="h-5 w-5" />
            </Softbutton>
          </Link>
        </>
      ),
    },
    {
      "assignment id": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          1
        </SoftTypography>
      ),
      "assignment name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Essay Writing
        </SoftTypography>
      ),
      "user name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          John Cena
        </SoftTypography>
      ),
      "writer name": (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          Barak Obama
        </SoftTypography>
      ),
      category: (
        <SoftTypography variant="caption" color="dark" fontWeight="medium">
          PPT
        </SoftTypography>
      ),

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="On going"
          color="warning"
          size="xs"
          container
        />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <>
          <Softbutton variant="caption" color="secondary" fontWeight="medium">
            Bid <MdDriveFileMove className="h-5 w-5" />
          </Softbutton>

          <Link to="/writers/inquiry/details">
            <Softbutton variant="caption" color="secondary" fontWeight="medium">
              View
              <MdRemoveRedEye className="h-5 w-5" />
            </Softbutton>
          </Link>
        </>
      ),
    },
  ],
};

export default inquiryTableData;
