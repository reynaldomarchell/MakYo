import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 bg-white px-8 py-10 text-black md:px-10">
      <h2 className="font-lexend_deca text-2xl font-semibold md:text-4xl">
        Contact Us
      </h2>
      <div className="flex flex-col justify-between gap-2 rounded-2xl border-4 border-[#28BE46] px-2 py-4 md:flex-row-reverse md:gap-5">
        <Image
          src="/assets/contact.png"
          alt="Contact"
          width={403}
          height={352}
        />
        <form action="" className="font-lexend_deca flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              className="rounded-lg border-2 border-[#28BE46] p-2"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              className="rounded-lg border-2 border-[#28BE46] p-2"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-lg font-medium">
              Message
            </label>
            <textarea
              name=""
              id="message"
              className="rounded-lg border-2 border-[#28BE46] p-2"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="noto-serif-tc-regular rounded-lg bg-[#1DC74D] p-2 px-7 py-1 text-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
