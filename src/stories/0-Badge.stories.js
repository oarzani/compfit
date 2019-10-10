import React from "react";
import Badge from "../components/Badge";

export default {
  title: "Badge"
};

export const Active = () => <Badge>Courses</Badge>;

export const Inactive = () => <Badge active={false}>Wellnes</Badge>;
