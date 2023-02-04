export default function EmailWeb() {
  return (
    <>
      <div>
        Email:{" "}
        <a
          href="mailto:info@recoverworld.com"
          rel="noreferrer"
          className="hover:text-red-500 transition-all duration-500 ease-out"
        >
          info@recoverworld.com
        </a>
      </div>
      <div>
        Web:{" "}
        <a
          href="http://recoverworld.com"
          rel="noreferrer"
          target="_blank"
          className="hover:text-red-500 transition-all duration-500 ease-out"
        >
          http://recoverworld.com
        </a>
      </div>
    </>
  );
}
