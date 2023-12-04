import React, { useCallback } from "react";
import { GoSignOut } from "react-icons/go";
import { RiUserSmileLine } from "react-icons/ri";
import { DropdownWrapper, MenuItem } from "./styles";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutAPI } from "@/apis/auth";

const Dropdown = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(logoutAPI, {
    
    onError: (error: any) => {
      alert(error.response?.data);
    },
    onSuccess: () => {
      queryClient.refetchQueries(["user"]);
    },
  });

  const handleLogOut = useCallback(() => {
    mutate();
  }, [mutate]);

  return (
    <DropdownWrapper>
      <MenuItem onClick={() => router.push("/profile")}>
        <RiUserSmileLine />
        <span>&nbsp;Profile</span>
      </MenuItem>
      <MenuItem onClick={handleLogOut}>
        <GoSignOut />
        <span>&nbsp;Sign out</span>
      </MenuItem>
    </DropdownWrapper>
  );
};

export default Dropdown;
