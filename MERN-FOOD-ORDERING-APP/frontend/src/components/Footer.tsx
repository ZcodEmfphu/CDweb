const Footer = () => {
  return (
    <div className="bg-blue-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
         ChuyenDeWeb.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>About Us</span>
          <span>Term of Service</span>
          <span>Contract</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
