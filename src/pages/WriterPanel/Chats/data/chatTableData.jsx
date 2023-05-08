/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "~/components/SoftBox";
import SoftTypography from "~/components/SoftTypography";
import SoftAvatar from "~/components/SoftAvatar";
import SoftBadge from "~/components/SoftBadge";

// Images
import team2 from "~/assets/images/team-2.jpg";
import team3 from "~/assets/images/team-3.jpg";
import team4 from "~/assets/images/team-4.jpg";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const chatTableData = {
  columns: [
    { name: "chat id", align: "center" },
    { name: "assignment name", align: "center" },
    { name: "user name", align: "center" },
    { name: "date", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      "chat id": (
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

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Online"
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
        <SoftTypography
          component="a"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Link to="/writers/chats/details">
            <MdMessage className="h-5 w-5" />
          </Link>
        </SoftTypography>
      ),
    },
    {
      "chat id": (
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

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Online"
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
        <SoftTypography
          component="a"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Link to="/writers/chats/details">
            <MdMessage className="h-5 w-5" />
          </Link>
        </SoftTypography>
      ),
    },
    {
      "chat id": (
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

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Online"
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
        <SoftTypography
          component="a"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Link to="/writers/chats/details">
            <MdMessage className="h-5 w-5" />
          </Link>
        </SoftTypography>
      ),
    },
    {
      "chat id": (
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

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Online"
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
        <SoftTypography
          component="a"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Link to="/writers/chats/details">
            <MdMessage className="h-5 w-5" />
          </Link>
        </SoftTypography>
      ),
    },
    {
      "chat id": (
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

      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Online"
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
        <SoftTypography
          component="a"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          <Link to="/writers/chats/details">
            <MdMessage className="h-5 w-5" />
          </Link>
        </SoftTypography>
      ),
    },
  ],
};

export default chatTableData;
