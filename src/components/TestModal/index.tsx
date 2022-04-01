import * as React from "react";
import { Modal } from "~/components/Basics/Modal";

import { ITestModal } from "~/components/TestModal/data";
import { TestModal as Layout } from "./Layout";

export const TestModal = (props: ITestModal) => (
  <Layout {...props} />
);
