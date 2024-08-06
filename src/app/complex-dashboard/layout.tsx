'use client'
import React from 'react'

export default function RootLayout({
  children,
  revenue,
  users,
  notifications
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      {children}
      {revenue}
      {users}
      {notifications}

    </>
  );
}
