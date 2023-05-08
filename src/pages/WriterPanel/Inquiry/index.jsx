// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "~/components/SoftBox";
import SoftTypography from "~/components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "~/components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "~/components/Navbars/DashboardNavbar";
import Footer from "~/components/Footer";
import Table from "~/components/Tables/Table";

// Data
import inquiryTableData from "~/pages/WriterPanel/Inquiry/data/inquiryTableData";

// import { Bids } from "~/pages/WriterPanel/Inquiry/data/inquiryTableData"; 
import { Bids } from "./data/inquiryTableData";

function Tables() {
  const { columns, rows } = inquiryTableData;

  // const {modal , toggle} = useContext(ModalContext);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Bids />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftTypography variant="h6">Inquiry Details</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
