/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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

// Images
import masterCardLogo from "~/assets/images/logos/mastercard.png";
import visaLogo from "~/assets/images/logos/visa.png";

function AssignmentsInfo() {
  const { borderWidth, borderColor } = borders;

  return (
    <Card id="delete-account">
      <SoftBox
        pt={2}
        px={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <SoftTypography variant="h6" fontWeight="high">
          Assignment Details
        </SoftTypography> 
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}  >
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
              <SoftTypography variant="p" fontWeight="small"  fontSize="15px">
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
              <SoftTypography variant="p" fontWeight="small"  fontSize="15px">
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
              <SoftTypography variant="p" fontWeight="small"  fontSize="15px">
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
              <SoftTypography variant="p" fontWeight="small"  fontSize="15px">
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
              <SoftTypography variant="p" fontWeight="small"  fontSize="15px">
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
              <SoftTypography variant="p" fontWeight="small"  fontSize="15px">
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
