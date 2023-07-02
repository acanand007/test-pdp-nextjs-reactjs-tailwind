const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex flex-col max-w-2xl items-center justify-center p-6 lg:px-8">
        <h6 className="font-bold text-sm uppercase mb-5">
          a note from the editor
        </h6>
        <p className="text-md text-center mb-5">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.{" "}
        </p>
        <p className="text-sm upper-case flex items-center gap-x-2">
          <span className="w-3 h-0.5 bg-black"></span> By MINNA SHIM, Fashion
          Editor
        </p>
      </div>
    </footer>
  );
};
export default Footer;
