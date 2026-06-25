export default function Footer() {
    return (
      <footer className="bg-[#1f0505]s px-6 py-14 text-yellow-100">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Ambika Vastralaya
            </h2>
            <p className="mt-4 text-sm leading-6">
              Premium ethnic wear for weddings, festivals and royal traditional
              elegance.
            </p>
          </div>
  
          <div>
            <h3 className="font-bold text-yellow-300">Collections</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="/collections/bridal">Bridal Lehanga</a>
              <a href="/collections/work-odhani">Work Odhani</a>
              <a href="/collections/rajputi-poshak">Rajputi Poshak</a>
              <a href="/collections/sarees">Sarees</a>
            </div>
          </div>
  
          <div>
            <h3 className="font-bold text-yellow-300">Contact</h3>
            <p className="mt-4 text-sm">Mogana • Wedding & Festival Specialist</p>
            <a
              href="https://wa.me/918955174687"
              target="_blank"
              className="mt-4 inline-block rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-black"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </footer>
    );
  }