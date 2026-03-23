"use client";

export default function InteractiveAvatar() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900">
        <iframe
          src="https://embed.liveavatar.com/v1/6e458e84-8426-4de5-b79d-50de92af35bb"
          allow="microphone"
          title="LiveAvatar Embed"
          className="w-full"
          style={{ aspectRatio: "16/9", border: "none", display: "block" }}
        />
      </div>
    </div>
  );
}
