 

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "~/components/SoftBox";
 
// Soft UI Dashboard React examples
import DashboardLayout from "~/components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "~/components/Navbars/DashboardNavbar";
import Footer from "~/components/Footer";

// Billing page components
import InquiryInfo from "~/pages/WriterPanel/Inquiry/components/InquiryInfo/index"; 

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
                  <InquiryInfo />
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
