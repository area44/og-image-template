interface OGImageProps {
  title?: string;
  description?: string;
  category?: string;
  author?: string;
  date?: string;
}

export default function OGImage({
  title = "Building Modern Web Applications",
  description = "A deep dive into high-performance web development techniques and best practices.",
  category = "ENGINEERING",
  author = "Jane Doe",
  date = "Oct 24, 2024",
}: OGImageProps = {}) {
  return (
    <div tw="relative flex h-full w-full bg-black text-white">
      <div tw="absolute inset-y-0 left-16 w-px bg-white/40" />
      <div tw="absolute inset-y-0 right-16 w-px bg-white/40" />
      <div tw="absolute inset-x-0 top-16 h-px bg-white/40" />
      <div tw="absolute inset-x-0 bottom-16 h-px bg-white/40" />

      <div tw="absolute inset-y-28 left-28 right-28 flex flex-col justify-between">
        <div tw="flex items-center gap-3">
          <span tw="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold tracking-wider text-white/90">
            {category}
          </span>
          <span tw="text-sm text-white/50">•</span>
          <span tw="text-sm text-white/60">{date}</span>
        </div>

        <div tw="flex flex-col gap-4">
          <h1 tw="text-[44px] font-bold leading-[1.15] tracking-[-0.03em]">{title}</h1>
          <p tw="text-[22px] font-light leading-[1.5] text-white/80">{description}</p>
        </div>

        <div tw="flex items-center gap-3">
          <div tw="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
            {author.charAt(0)}
          </div>
          <span tw="text-lg font-medium text-white/90">{author}</span>
        </div>
      </div>
    </div>
  );
}
