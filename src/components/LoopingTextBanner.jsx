export default function LoopingTextBanner() {
  return (
    <section className="bg-[#a3db74] py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-black">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span>Script Writer</span>
              <StarIcon />
              <span>Ghost Writer</span>
              <StarIcon />
              <span>Copy Writer</span>
              <StarIcon />
              <span>Story Teller</span>
              <StarIcon />
              <span>Content Writer</span>
              <StarIcon />
            </span>
          ))}
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 sm:w-5 sm:h-5 inline-block text-black"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M12 2L13.09 8.26L19 8.27L14.5 11.97L15.58 18.22L12 14.77L8.42 18.22L9.5 11.97L5 8.27L10.91 8.26L12 2Z" />
    </svg>
  );
}
