export default function BackgroundGradients() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Light & Dark mode gradients - vibrant GPT-5 inspired colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-purple-100/50 to-blue-100/50 dark:from-orange-900/30 dark:via-purple-900/30 dark:to-blue-900/30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-400/50 to-orange-400/50 dark:from-red-500/40 dark:to-orange-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/50 to-blue-400/50 dark:from-purple-500/40 dark:to-blue-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400/45 to-orange-400/45 dark:from-yellow-500/35 dark:to-orange-500/35 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/40 to-purple-400/40 dark:from-blue-500/35 dark:to-purple-500/35 rounded-full blur-3xl animate-pulse delay-3000"></div>
      <div className="absolute top-1/3 left-1/2 w-88 h-88 bg-gradient-to-r from-pink-400/45 to-red-400/45 dark:from-pink-500/35 dark:to-red-500/35 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>
  );
}
