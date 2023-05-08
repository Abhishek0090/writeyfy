// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";


// Soft UI Dashboard React components
import SoftBox from "~/components/SoftBox";
import SoftTypography from "~/components/SoftTypography";
import SoftButton from "~/components/SoftButton";

// Soft UI Dashboard React base styles
import borders from "~/assets/theme/base/borders";

import { MdOutlineAttachMoney } from "react-icons/md";
import BidModal from "~/components/Modal/BidModal/BidModal";
import React, { useState } from "react";

function AssignmentsInfo() {
  const { borderWidth, borderColor } = borders;

  const [modalOpened, setModalOpened] =  useState(false);

  return (
    <Card id="delete-account">
      <BidModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <SoftBox
        pt={2}
        px={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <SoftTypography variant="h6" >
          Inquiry Details
        </SoftTypography>
        <SoftButton variant="gradient" color="dark"   onClick={() => setModalOpened(true)}>
          {/* <Icon sx={{ fontWeight: "bold" }}>Bid</Icon> */}
          <MdOutlineAttachMoney />
          &nbsp;Bid
        </SoftButton>
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              p={3}
            >
              <SoftTypography variant="h6" fontWeight="medium" >
                Assignment Id
              </SoftTypography>
              <SoftTypography variant="p" fontWeight="small" fontSize="15px">
                1
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              p={3}
            >
              <SoftTypography variant="h6" fontWeight="medium" >
                Assignment Name
              </SoftTypography>
              <SoftTypography variant="p" fontWeight="small" fontSize="15px">
                Power
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              p={3}
            >
              <SoftTypography variant="h6" fontWeight="medium" >
                User Name
              </SoftTypography>
              <SoftTypography variant="p" fontWeight="small" fontSize="15px">
                Osama Bin Laden
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              p={3}
            >
              <SoftTypography variant="h6" fontWeight="medium" >
                Writer Name
              </SoftTypography>
              <SoftTypography variant="p" fontWeight="small" fontSize="15px">
                John Cena
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              p={3}
            >
              <SoftTypography variant="h6" fontWeight="medium" >
                Category
              </SoftTypography>
              <SoftTypography variant="p" fontWeight="small" fontSize="15px">
                HandWritten
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              p={3}
            >
              <SoftTypography variant="h6" fontWeight="medium" >
                Assignment Id
              </SoftTypography>
              <SoftTypography variant="p" fontWeight="small" fontSize="15px">
                1
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default AssignmentsInfo;
