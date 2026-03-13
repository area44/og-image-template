export default function OGImage() {
  return (
    <div tw="relative flex h-full w-full bg-black text-white">
      <div tw="absolute inset-y-0 left-16 w-px bg-white/40" />
      <div tw="absolute inset-y-0 right-16 w-px bg-white/40" />
      <div tw="absolute inset-x-0 top-16 h-px bg-white/40" />
      <div tw="absolute inset-x-0 bottom-16 h-px bg-white/40" />

      <div tw="absolute inset-y-32 left-32 right-32 flex flex-col justify-center gap-6">
        <h1 tw="text-[32px] font-semibold leading-[1.1] tracking-[-0.04em]">
          Hello World!
        </h1>

        <p tw="text-[24px] font-light leading-[1.5] text-white/80">
          We are AREA44.
        </p>
      </div>
    </div>
  );
}
