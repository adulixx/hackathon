"use client"

import { UserProfile } from "@clerk/nextjs"

const UserProfilePage = () => {
  return (
    <div className="h-full flex flex-grow items-center justify-center py-4 ">
      <UserProfile path="/user-profile" routing="path" />
    </div>
  )
}

export default UserProfilePage
