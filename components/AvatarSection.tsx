"use client";

import dynamic from "next/dynamic";

const InteractiveAvatar = dynamic(() => import("./InteractiveAvatar"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function AvatarSection() {
  return <InteractiveAvatar />;
}
