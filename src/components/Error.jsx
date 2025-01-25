import { Notification } from "@mantine/core";

export const Error = () => {
  return (
    <Notification
      withBorder
      withCloseButton={false}
      color="red"
      title="There has been an error fetching data."
    >
      Please refresh the page and try again.
    </Notification>
  );
};
