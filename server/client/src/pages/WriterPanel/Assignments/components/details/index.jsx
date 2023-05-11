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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "~/components/SoftBox";
 
// Soft UI Dashboard React examples
import DashboardLayout from "~/components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "~/components/Navbars/DashboardNavbar";
import Footer from "~/components/Footer";

// Billing page components
import AssignmentInfo from "~/pages/WriterPanel/Assignments/components/AssignmentsInfo/index"; 

function AssignmentsDetails() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <AssignmentInfo />
                </Grid>
              </Grid>
            </Grid> 
          </Grid>
        </SoftBox> 
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AssignmentsDetails;
